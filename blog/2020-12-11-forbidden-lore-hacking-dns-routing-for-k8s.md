---
slug: forbidden-lore-hacking-dns-routing-for-k8s
title: "Forbidden lore: hacking DNS routing for k8s"
date: 2020-12-11
tags: [dns, nginx, kubernetes, infrastructure]
author: Anna Kennedy, Holger Ihrig, Matt Long, Yan Grunenberger
author_title: Infrastructure Team @ wgtwo
author_url: https://www.wgtwo.com
author_image_url: https://media-exp1.licdn.com/dms/image/C4E03AQG43m4lVjJm8g/profile-displayphoto-shrink_400_400/0/1517558635100?e=1648684800&v=beta&t=BXA0nV3ZTaID9m1UD7GMS87NhYZRsYPcrPiIg30SYRw
---

At WG2 we’re coming close to having everything running in Kubernetes, which means that almost everything we deploy needs to be pulled from a registry. We have run our own local registry for some time now, to host both locally-built images and cached images from Docker Hub.

<!--truncate-->

We recently decided to improve the registry solution by implementing [Harbor](https://goharbor.io/) to scan images for vulnerabilities on upload, and replicating the registry into each of our multiple environments and regions. This would both eliminate Harbor as a single point of failure, and allow each cluster to pull images locally to minimise data transfer costs through the NAT gateway.

The overall workflow would look something like:

* images are built and uploaded to Harbor
* Harbor scans for vulnerabilities and pushes images to a private registry
* this registry is replicated to a read-only registry
* the read-only registry is replicated to all environments and regions
* the Kubernetes cluster in each environment deploys from the local read-only registry

![Workflow](/img/blog/forbidden-lore-hacking-dns-routing-for-k8s/multiregion.jpg)

Harbor has to live somewhere, so we decided it should live in the dev environment, close to the CI system that builds the majority of our images. However, container image names contain the registry location that they are pulled from / pushed to, eg `reg.wgtwo.com/infra/logstash`. Therefore in the dev environment we have to find a way to deal with the fact that we want users and the CI system to push to Harbor, but we also want Kubernetes to pull images from the read-only registry.

So the main problem becomes: if the image name includes the url `reg.wgtwo.com`, how to make that point to two different places depending on usage?

# Solution 1: DNS

In non-dev environments, the obvious solution is to redirect `reg.wgtwo.com -> read-only-registry` in Kubernetes CoreDNS. But in dev, we need different services to go to different places. The DNS model thus needs to look like:

![DNS](/img/blog/forbidden-lore-hacking-dns-routing-for-k8s/dnsresolution.jpg)

In other words,

* ``Route53`` sets `reg.wgtwo.com -> harbor`
* K8s coreDNS sets `reg.wgtwo.com -> read-only-registry`
* CI (Concourse) bypasses cluster lookup and goes to ``Route53`` instead, such that `reg.wgtwo.com -> harbor`

We initially deployed a DNS sidecar to the CI system, but with multiple Concourse pods we got multiple sidecars and we really only needed one, plus we had to manipulate Concourse’s internal DNS cache (`CONCOURSE_GARDEN_DNS_SERVER`) but that broke DNS between Concourse and everything else in the cluster. Replacing the sidecar with a DNS pod in the CI namespace worked better, although then all the CI jobs needed to be updated to use that new pod as their nameserver.

![Sleight of hand](/img/blog/forbidden-lore-hacking-dns-routing-for-k8s/sleight-of-hand.gif)

However at this point we realised that although we want to deploy pods into Kubernetes, the process that does the deploying lives on the Kubernetes nodes, outside of cluster scope. 
We don’t do any config management on the nodes, we just let [kOps](https://github.com/kubernetes/kops) deploy everything that Kubernetes needs for a cluster, so we were reluctant to introduce an entirely different system just for managing one `resolv.conf` file. Also the concentric DNS setup would have a very wide scope and be somewhat difficult to debug. Maybe this was a problem better resolved using some clever nginx routing?

# Solution 2: nginx

If we could find some way of differentiating the Harbor traffic from read-only-registry traffic, we could let nginx route requests to the right place.
<iframe src="https://giphy.com/embed/QaPkV29BJh3gI" width="240" height="177" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>


# Solution 2a: nginx routes traffic on IP

* Traffic from the outside world plus traffic from Concourse needs to go to Harbor.
* Traffic from the Kubernetes cluster needs to go to the read-only-registry.

The [nginx geo module](http://nginx.org/en/docs/http/ngx_http_geo_module.html) sounded like a good idea, where we could set our internal subnet ranges to go to the read-only-registry. However getting the ingress annotations to put this config in the right place turned out to be challenging, since it needs to go outside of both `http snippet` and `server snippet` blocks. But before we dug further into this issue we realised that all of the traffic to nginx would arrive via the internet gateway, meaning we wouldn’t see source IP anyway.

# Solution 2b: nginx routes on custom header

The new `canary` feature in nginx makes this kind of routing very easy - traffic that matches a certain criteria gets sent to a different backend. We could use a custom header such as `ro-reg` to send internal traffic to the read-only registry.

    annotations:
      nginx.ingress.kubernetes.io/canary: "true"
      nginx.ingress.kubernetes.io/canary-by-header: "ro-reg"

The docker (client) config has an [HttpHeaders](https://github.com/docker/cli/blob/master/man/docker-config-json.5.md) section, so it would be easy enough to add this section to all of our image-pull secrets, meaning all internal pulls - but nothing else - should go to the read-only registry.

We had to rearrange things a little in order to terminate SSL on nginx and not at the registry so that nginx would be able to read the headers, but that was straightforward.

In our initial tests from the laptop, this worked great. However it quickly transpired that this was the only place it worked from. Where we needed it to work from - the Kubernetes nodes - didn’t run Docker, they run ``docker-shim`` on top of ``containerd``, and ``HttpHeaders`` [are not implemented yet](https://github.com/containerd/cri/issues/1400). Back to the drawing board.

# Solution 2c: nginx routes on auth header

Getting nervous that we’d used a week to get nothing working, we started clutching at some very hacky straws. Even if docker-shim doesn’t send custom headers, we could see it sending auth headers, and we have different login details for Harbor versus the read-only registry. We wondered if we could route on the auth hash, postponing entirely the discussion about whether we should do such a horrible thing, or the security implications of having the auth hash in a plaintext nginx config.
<iframe src="https://giphy.com/embed/I8RMi1UY8cEKs"  frameBorder="20px" class="giphy-embed" allowFullScreen></iframe>


We soon discovered that this solution was also never going to work. In Kubernetes, it is the ``kubelet`` process that does the image pull at the start of a pod deployment, and after some wiresharking it turns out that the very first thing kubelet does is make an unauthenticated call to the `registry/v2` endpoint to fetch metadata which it then uses to begin authentication.

This is expected behaviour for a docker registry, [according to documentation](https://docs.docker.com/registry/spec/auth/token/), but with nginx routing on auth header, it meant that the initial call was routed to Harbor which sent back an auth URL also for Harbor, and thus kubelet never even arrived at the read-only registry, let alone managed to authenticate.

# Aside: other issues with headers

During this debugging session we also realised that we’d been creating image-pull secrets in Kubernetes with both `.dockercfg` and `.dockerconfigjson`, not realising that `.dockercfg` [is the old format](https://github.com/moby/moby/pull/12009) and that `.dockercfg` likely does not support HttpHeaders at all.

Kubelet [does support HttpHeaders](https://github.com/Kubernetes/Kubernetes/blob/e1fd2d7ff57af153023347d72d17226effd917c8/pkg/credentialprovider/config.go#L44), but relies on the underlying container runtime to also support them - which is not the case for containerd.

Additionally, when creating a Kubernetes secret containing `.dockerconfigjson`, it appears that it is very important that there is no whitespace in the secret, or authentication will fail.

# Solution 2d: route on some other inherent header

As one final attempt at making nginx routing work, we looked for other headers being sent, but there was no single header that let us differentiate between kubelet, laptop, and Concourse.

Kubelet sends a useragent of either `docker` or `go-http-agent` (depending on whether the call is the initial one or a retrial) and filtering on `go-http-agent` also catches Concourse requests, rendering it useless for this task. We were also worried it might end up catching all sorts of unintended cases since we have quite a lot of `go`-based applications in our ecosystem.

We took a moment to mourn the loss of our nginx idea, and went back to a DNS solution.

![Mourn](/img/blog/forbidden-lore-hacking-dns-routing-for-k8s/pulpfiction.jpg)

# Solution 3: DNS, again

We put the DNS solution back in place again, where

* ``Route53`` sets `reg.wgtwo.com -> harbor`
* K8s nodes set `reg.wgtwo.com -> read-only-registry`
* K8s coreDNS sets `reg.wgtwo.com -> read-only-registry`
* CI runs an additional coreDNS pod setting `reg.wgtwo.com -> harbor`
* Concourse uses CI coreDNS pod to set `reg.wgtwo.com -> harbor`

Which brought us back to the problem that was still there: how to update `/etc/resolv.conf` on the nodes. In the continued absence of config management, we hit upon the wonderful hack of using a privileged pod daemonset to manage the config for us via systemd.

The privileged pod on each node would write a new config file to `/etc/systemd/resolvd.conf`, and then restart the systemd service to update the running resolvd process.

This would thus control configuration on the Kubernetes node from inside of Kubernetes, which is admittedly morally wrong but also works really well. It also keeps the configuration alongside all the rest of our configuration instead of hidden away somewhere new.

![wheel change](/img/blog/forbidden-lore-hacking-dns-routing-for-k8s/wheelchange.gif)

A future solution might be to implement some kind of local DNS server/cache on each node, but for now we’ll settle for a working system and a huge increase in knowledge about the inner workings of many of our components.

