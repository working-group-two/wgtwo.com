"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[2558],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=u(n),c=r,p=g["".concat(l,".").concat(c)]||g[c]||h[c]||i;return n?o.createElement(p,a(a({ref:t},d),{},{components:n})):o.createElement(p,a({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},91734:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return h}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],s={slug:"forbidden-lore-hacking-dns-routing-for-k8s",title:"Forbidden lore: hacking DNS routing for k8s",date:new Date("2020-12-11T00:00:00.000Z"),tags:["dns","nginx","kubernetes","infrastructure"],authors:["anna-kennedy","holger-ihrig","mtl","yan"]},l=void 0,u={permalink:"/blog/forbidden-lore-hacking-dns-routing-for-k8s",editUrl:"https://github.com/working-group-two/wgtwo.com/edit/main/blog/../blog/2020-12-11-forbidden-lore-hacking-dns-routing-for-k8s.md",source:"@site/../blog/2020-12-11-forbidden-lore-hacking-dns-routing-for-k8s.md",title:"Forbidden lore: hacking DNS routing for k8s",description:"At WG2 we\u2019re coming close to having everything running in Kubernetes, which means that almost everything we deploy needs to be pulled from a registry. We have run our own local registry for some time now, to host both locally-built images and cached images from Docker Hub.",date:"2020-12-11T00:00:00.000Z",formattedDate:"December 11, 2020",tags:[{label:"dns",permalink:"/blog/tags/dns"},{label:"nginx",permalink:"/blog/tags/nginx"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"infrastructure",permalink:"/blog/tags/infrastructure"}],readingTime:7.505,hasTruncateMarker:!0,authors:[{name:"Anna Kennedy",title:"Tech Lead for Cloud and Edge Infrastructure",url:"https://www.linkedin.com/in/annaken",imageURL:"/img/author-photos/ak.jpg",key:"anna-kennedy"},{name:"Holger Ihrig",title:"Software Engineer for Session Management & Protocol Termination",url:"https://www.linkedin.com/in/hihrig/",imageURL:"/img/author-photos/hi.jpg",key:"holger-ihrig"},{name:"Matt Long",title:"Engineering Manager for Edge, Cloud and Security",url:"https://www.linkedin.com/in/mattlong/",imageURL:"/img/author-photos/mtl-li.jpg",key:"mtl"},{name:"Yan Grunenberger",title:"Software Engineer for Session Management & Protocol Termination",url:"https://www.linkedin.com/in/yangrunenberger/",imageURL:"/img/author-photos/yg.jpg",key:"yan"}],frontMatter:{slug:"forbidden-lore-hacking-dns-routing-for-k8s",title:"Forbidden lore: hacking DNS routing for k8s",date:"2020-12-11T00:00:00.000Z",tags:["dns","nginx","kubernetes","infrastructure"],authors:["anna-kennedy","holger-ihrig","mtl","yan"]},prevItem:{title:"Changing the color of your bulbs: The fancy way",permalink:"/blog/mqtt-event-bridge"},nextItem:{title:"We're all grownups here",permalink:"/blog/were-all-grownups-here"}},d={authorsImageUrls:[void 0,void 0,void 0,void 0]},h=[],g={toc:h};function c(e){var t=e.components,s=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"At WG2 we\u2019re coming close to having everything running in Kubernetes, which means that almost everything we deploy needs to be pulled from a registry. We have run our own local registry for some time now, to host both locally-built images and cached images from Docker Hub."),(0,i.kt)("p",null,"We recently decided to improve the registry solution by implementing ",(0,i.kt)("a",{parentName:"p",href:"https://goharbor.io/"},"Harbor")," to scan images for vulnerabilities on upload, and replicating the registry into each of our multiple environments and regions. This would both eliminate Harbor as a single point of failure, and allow each cluster to pull images locally to minimise data transfer costs through the NAT gateway."),(0,i.kt)("p",null,"The overall workflow would look something like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"images are built and uploaded to Harbor"),(0,i.kt)("li",{parentName:"ul"},"Harbor scans for vulnerabilities and pushes images to a private registry"),(0,i.kt)("li",{parentName:"ul"},"this registry is replicated to a read-only registry"),(0,i.kt)("li",{parentName:"ul"},"the read-only registry is replicated to all environments and regions"),(0,i.kt)("li",{parentName:"ul"},"the Kubernetes cluster in each environment deploys from the local read-only registry")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Workflow",src:n(10450).Z,width:"736",height:"331"})),(0,i.kt)("p",null,"Harbor has to live somewhere, so we decided it should live in the dev environment, close to the CI system that builds the majority of our images. However, container image names contain the registry location that they are pulled from / pushed to, eg ",(0,i.kt)("inlineCode",{parentName:"p"},"reg.wgtwo.com/infra/logstash"),". Therefore in the dev environment we have to find a way to deal with the fact that we want users and the CI system to push to Harbor, but we also want Kubernetes to pull images from the read-only registry."),(0,i.kt)("p",null,"So the main problem becomes: if the image name includes the url ",(0,i.kt)("inlineCode",{parentName:"p"},"reg.wgtwo.com"),", how to make that point to two different places depending on usage?"),(0,i.kt)("h1",{id:"solution-1-dns"},"Solution 1: DNS"),(0,i.kt)("p",null,"In non-dev environments, the obvious solution is to redirect ",(0,i.kt)("inlineCode",{parentName:"p"},"reg.wgtwo.com -> read-only-registry")," in Kubernetes CoreDNS. But in dev, we need different services to go to different places. The DNS model thus needs to look like:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"DNS",src:n(28011).Z,width:"702",height:"483"})),(0,i.kt)("p",null,"In other words,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Route53")," sets ",(0,i.kt)("inlineCode",{parentName:"li"},"reg.wgtwo.com -> harbor")),(0,i.kt)("li",{parentName:"ul"},"K8s coreDNS sets ",(0,i.kt)("inlineCode",{parentName:"li"},"reg.wgtwo.com -> read-only-registry")),(0,i.kt)("li",{parentName:"ul"},"CI (Concourse) bypasses cluster lookup and goes to ",(0,i.kt)("inlineCode",{parentName:"li"},"Route53")," instead, such that ",(0,i.kt)("inlineCode",{parentName:"li"},"reg.wgtwo.com -> harbor"))),(0,i.kt)("p",null,"We initially deployed a DNS sidecar to the CI system, but with multiple Concourse pods we got multiple sidecars and we really only needed one, plus we had to manipulate Concourse\u2019s internal DNS cache (",(0,i.kt)("inlineCode",{parentName:"p"},"CONCOURSE_GARDEN_DNS_SERVER"),") but that broke DNS between Concourse and everything else in the cluster. Replacing the sidecar with a DNS pod in the CI namespace worked better, although then all the CI jobs needed to be updated to use that new pod as their nameserver."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sleight of hand",src:n(32952).Z,width:"455",height:"248"})),(0,i.kt)("p",null,"However at this point we realised that although we want to deploy pods into Kubernetes, the process that does the deploying lives on the Kubernetes nodes, outside of cluster scope.\nWe don\u2019t do any config management on the nodes, we just let ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kops"},"kOps")," deploy everything that Kubernetes needs for a cluster, so we were reluctant to introduce an entirely different system just for managing one ",(0,i.kt)("inlineCode",{parentName:"p"},"resolv.conf")," file. Also the concentric DNS setup would have a very wide scope and be somewhat difficult to debug. Maybe this was a problem better resolved using some clever nginx routing?"),(0,i.kt)("h1",{id:"solution-2-nginx"},"Solution 2: nginx"),(0,i.kt)("p",null,"If we could find some way of differentiating the Harbor traffic from read-only-registry traffic, we could let nginx route requests to the right place."),(0,i.kt)("iframe",{src:"https://giphy.com/embed/QaPkV29BJh3gI",width:"240",height:"177",frameBorder:"0",class:"giphy-embed",allowFullScreen:!0}),(0,i.kt)("h1",{id:"solution-2a-nginx-routes-traffic-on-ip"},"Solution 2a: nginx routes traffic on IP"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Traffic from the outside world plus traffic from Concourse needs to go to Harbor."),(0,i.kt)("li",{parentName:"ul"},"Traffic from the Kubernetes cluster needs to go to the read-only-registry.")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://nginx.org/en/docs/http/ngx_http_geo_module.html"},"nginx geo module")," sounded like a good idea, where we could set our internal subnet ranges to go to the read-only-registry. However getting the ingress annotations to put this config in the right place turned out to be challenging, since it needs to go outside of both ",(0,i.kt)("inlineCode",{parentName:"p"},"http snippet")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"server snippet")," blocks. But before we dug further into this issue we realised that all of the traffic to nginx would arrive via the internet gateway, meaning we wouldn\u2019t see source IP anyway."),(0,i.kt)("h1",{id:"solution-2b-nginx-routes-on-custom-header"},"Solution 2b: nginx routes on custom header"),(0,i.kt)("p",null,"The new ",(0,i.kt)("inlineCode",{parentName:"p"},"canary")," feature in nginx makes this kind of routing very easy - traffic that matches a certain criteria gets sent to a different backend. We could use a custom header such as ",(0,i.kt)("inlineCode",{parentName:"p"},"ro-reg")," to send internal traffic to the read-only registry."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'annotations:\n  nginx.ingress.kubernetes.io/canary: "true"\n  nginx.ingress.kubernetes.io/canary-by-header: "ro-reg"\n')),(0,i.kt)("p",null,"The docker (client) config has an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/docker/cli/blob/master/man/docker-config-json.5.md"},"HttpHeaders")," section, so it would be easy enough to add this section to all of our image-pull secrets, meaning all internal pulls - but nothing else - should go to the read-only registry."),(0,i.kt)("p",null,"We had to rearrange things a little in order to terminate SSL on nginx and not at the registry so that nginx would be able to read the headers, but that was straightforward."),(0,i.kt)("p",null,"In our initial tests from the laptop, this worked great. However it quickly transpired that this was the only place it worked from. Where we needed it to work from - the Kubernetes nodes - didn\u2019t run Docker, they run ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-shim")," on top of ",(0,i.kt)("inlineCode",{parentName:"p"},"containerd"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpHeaders")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/containerd/cri/issues/1400"},"are not implemented yet"),". Back to the drawing board."),(0,i.kt)("h1",{id:"solution-2c-nginx-routes-on-auth-header"},"Solution 2c: nginx routes on auth header"),(0,i.kt)("p",null,"Getting nervous that we\u2019d used a week to get nothing working, we started clutching at some very hacky straws. Even if docker-shim doesn\u2019t send custom headers, we could see it sending auth headers, and we have different login details for Harbor versus the read-only registry. We wondered if we could route on the auth hash, postponing entirely the discussion about whether we should do such a horrible thing, or the security implications of having the auth hash in a plaintext nginx config."),(0,i.kt)("iframe",{src:"https://giphy.com/embed/I8RMi1UY8cEKs",frameBorder:"20px",class:"giphy-embed",allowFullScreen:!0}),(0,i.kt)("p",null,"We soon discovered that this solution was also never going to work. In Kubernetes, it is the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubelet")," process that does the image pull at the start of a pod deployment, and after some wiresharking it turns out that the very first thing kubelet does is make an unauthenticated call to the ",(0,i.kt)("inlineCode",{parentName:"p"},"registry/v2")," endpoint to fetch metadata which it then uses to begin authentication."),(0,i.kt)("p",null,"This is expected behaviour for a docker registry, ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/spec/auth/token/"},"according to documentation"),", but with nginx routing on auth header, it meant that the initial call was routed to Harbor which sent back an auth URL also for Harbor, and thus kubelet never even arrived at the read-only registry, let alone managed to authenticate."),(0,i.kt)("h1",{id:"aside-other-issues-with-headers"},"Aside: other issues with headers"),(0,i.kt)("p",null,"During this debugging session we also realised that we\u2019d been creating image-pull secrets in Kubernetes with both ",(0,i.kt)("inlineCode",{parentName:"p"},".dockercfg")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".dockerconfigjson"),", not realising that ",(0,i.kt)("inlineCode",{parentName:"p"},".dockercfg")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moby/moby/pull/12009"},"is the old format")," and that ",(0,i.kt)("inlineCode",{parentName:"p"},".dockercfg")," likely does not support HttpHeaders at all."),(0,i.kt)("p",null,"Kubelet ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Kubernetes/Kubernetes/blob/e1fd2d7ff57af153023347d72d17226effd917c8/pkg/credentialprovider/config.go#L44"},"does support HttpHeaders"),", but relies on the underlying container runtime to also support them - which is not the case for containerd."),(0,i.kt)("p",null,"Additionally, when creating a Kubernetes secret containing ",(0,i.kt)("inlineCode",{parentName:"p"},".dockerconfigjson"),", it appears that it is very important that there is no whitespace in the secret, or authentication will fail."),(0,i.kt)("h1",{id:"solution-2d-route-on-some-other-inherent-header"},"Solution 2d: route on some other inherent header"),(0,i.kt)("p",null,"As one final attempt at making nginx routing work, we looked for other headers being sent, but there was no single header that let us differentiate between kubelet, laptop, and Concourse."),(0,i.kt)("p",null,"Kubelet sends a useragent of either ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"go-http-agent")," (depending on whether the call is the initial one or a retrial) and filtering on ",(0,i.kt)("inlineCode",{parentName:"p"},"go-http-agent")," also catches Concourse requests, rendering it useless for this task. We were also worried it might end up catching all sorts of unintended cases since we have quite a lot of ",(0,i.kt)("inlineCode",{parentName:"p"},"go"),"-based applications in our ecosystem."),(0,i.kt)("p",null,"We took a moment to mourn the loss of our nginx idea, and went back to a DNS solution."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Mourn",src:n(16668).Z,width:"800",height:"450"})),(0,i.kt)("h1",{id:"solution-3-dns-again"},"Solution 3: DNS, again"),(0,i.kt)("p",null,"We put the DNS solution back in place again, where"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Route53")," sets ",(0,i.kt)("inlineCode",{parentName:"li"},"reg.wgtwo.com -> harbor")),(0,i.kt)("li",{parentName:"ul"},"K8s nodes set ",(0,i.kt)("inlineCode",{parentName:"li"},"reg.wgtwo.com -> read-only-registry")),(0,i.kt)("li",{parentName:"ul"},"K8s coreDNS sets ",(0,i.kt)("inlineCode",{parentName:"li"},"reg.wgtwo.com -> read-only-registry")),(0,i.kt)("li",{parentName:"ul"},"CI runs an additional coreDNS pod setting ",(0,i.kt)("inlineCode",{parentName:"li"},"reg.wgtwo.com -> harbor")),(0,i.kt)("li",{parentName:"ul"},"Concourse uses CI coreDNS pod to set ",(0,i.kt)("inlineCode",{parentName:"li"},"reg.wgtwo.com -> harbor"))),(0,i.kt)("p",null,"Which brought us back to the problem that was still there: how to update ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf")," on the nodes. In the continued absence of config management, we hit upon the wonderful hack of using a privileged pod daemonset to manage the config for us via systemd."),(0,i.kt)("p",null,"The privileged pod on each node would write a new config file to ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/systemd/resolvd.conf"),", and then restart the systemd service to update the running resolvd process."),(0,i.kt)("p",null,"This would thus control configuration on the Kubernetes node from inside of Kubernetes, which is admittedly morally wrong but also works really well. It also keeps the configuration alongside all the rest of our configuration instead of hidden away somewhere new."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"wheel change",src:n(9142).Z,width:"500",height:"282"})),(0,i.kt)("p",null,"A future solution might be to implement some kind of local DNS server/cache on each node, but for now we\u2019ll settle for a working system and a huge increase in knowledge about the inner workings of many of our components."))}c.isMDXComponent=!0},28011:function(e,t,n){t.Z=n.p+"assets/images/dnsresolution-d0a90858bbeab60834fd5f80b85a9ba5.jpg"},10450:function(e,t,n){t.Z=n.p+"assets/images/multiregion-13365939553782c33c21219d2e21d410.jpg"},16668:function(e,t,n){t.Z=n.p+"assets/images/pulpfiction-14c68561ce1cdd95a2ad42f3fde27b1e.jpg"},32952:function(e,t,n){t.Z=n.p+"assets/images/sleight-of-hand-fbae8de3401322c1485949179d2a6f32.gif"},9142:function(e,t,n){t.Z=n.p+"assets/images/wheelchange-57e19e4d177f74c50d800c3268440f30.gif"}}]);