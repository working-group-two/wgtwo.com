---
slug: extending-k8s/
title: "Extending Kubernetes for our needs"
date: 2020-02-21
tags: [infrastructure, kubernetes, networking, AWS]
author: Holger Ihrig
author_title: Software Engineer @ wgtwo
author_url: https://www.linkedin.com/in/hihrig/
author_image_url: https://media-exp1.licdn.com/dms/image/C5603AQGc3sG-ltGzlA/profile-displayphoto-shrink_400_400/0/1516250699138?e=1648684800&v=beta&t=qpxr39O2hNY54vsUcCbt1wH8fc2lMf07zW1etQD_gxY
---

We are using Kubernetes as our cluster scheduler and this serves us well. However we have a 
few cases where we need to do some additional work.

<!--truncate-->

One case for example is that we have to use static IPs for some of our services to connect to
Telecom companies as they expect a single IP address to bind to. This address needs to be fixed and
DNS records are not accepted either. We are running in AWS as well, so the reader might ask why are we not
using Elastic IPs and adding them to the services? Good idea, but Telecom operators will not whitelist
an Elastic IP for you as there are no guarantees that it will belong to your company infrastructure forever. There
are also additional challenges when it comes to using Elastic IP in private subnet over VPN or direct connect.

We are a member of RIPE and do have a small subnet block for our own use, so we thought we could make use of 
that. As we own the block and AWS supports BYOIP (Bring your own IP-range), we created a special subnet with
some Kubernetes nodes in it. This was not enough to make this work since we depended on a service always having
the same IP attached to it, as well as the node running a pod having some very specific Routes set.

With this scenario in mind we set out to find solutions and all solutions we could think of required haggling
with Kubernetes.

## Extending Kubernetes

There are several ways to extend Kubernetes. All functionality in Kubernetes is build upon very nice and clean
public APIs, or to say it with other words: There is no private API magic hidden somewhere. So lets look at
two ways on how to extend Kubernetes.

Possible ways to go forward:
- Adding a scheduler extender
- Creating an operator/controller

There are more ways to extend Kubernetes, but these two ways will be the one we shall look at. Just for completeness
you can as well also add another scheduler or change Kubernetes itself. However these possibilities have some serious
downsides.

### Adding a scheduler extender
The Kubernetes scheduler checks for certain requirements before it schedules a pod onto a node. Some of these requirements
are hard requirements, like cpu, memory and number of pods. Other requirements are more soft, like if the pods are allowed to
be packed together or in which AZ they are going to run. All of those requirements are collected and points given to each
node on how well they meet the requirements. The node that fits best, gets chosen.

All of these are things the scheduler will do for you automatically, however it is also possible to give the cluster a 
`KubeSchedulerConfiguration` object that will tell the scheduler to also reach out to a service for additional point scoring.
The SchedulerConfiguration is a JSON file and for further explanations, please have a look at this 
excellent [blog post](https://developer.ibm.com/articles/creating-a-custom-kube-scheduler/).

In our case, we could have written a service that checks which IP Addresses are assigned to the Nodes and moved the Pods
onto those nodes. This would have required us to make sure that those nodes had all needed IP-Addresses all the time.
That sounded not very enticing when doing cluster upgrades as it would have needed to be at least a semi-manual process.
So we decided against this approach.

### Creating an operator
An Operator/Controller on the other hand is a component observing resources and then try to create the declared resources.
The difference between a controller and an operator is basically that an operator is handling the lifecycle of an
application, whereas a controller may control specific resources that are not associated with a specific application.
They both use the controller pattern though and both can be implemented with the same toolset, so for simplicity sake in the
context of this article, we will consider them to be equal.

Operators usually consists at least out of a **[CRD(CustomResourceDefinition)][2]**, an **event listener** and a **reconciliation loop**.
The *CRD* basically creates a new type of resource and effectively implements a domain specific language for the operator. The whole description on what this deployment
needs to look like and all its abilities need to be defined in the *CRD*. The operator will create an *event listener* for that
*CRD* as the primary resource and additional *event listeners* for the secondary resource (most likely pods in this example).
The *event listener* will let the *reconciliation loop* know once a [CRUD][3] operation has been requested on either the primary or
secondary resource. The *loop* will then try to bring the *CRD* into the desired state, depending on what operation has been
requested. So in the Redis example it will either create the pods, update the pods, in the case of an upgrade it might blue/green
deploy the pods or delete the pods. Basically things a human operator would do in this case, just in programmatic form, taking it
from a declarative form into existing resources.

As our initial problem was making services available on static IP addresses, we chose to explore this approach further, 
basically attaching additional IP addresses to the nodes running specific pods.

## Building an Operator/Controller
For building an operator, there are several frameworks out there, but we will only look at the [operator-framework](https://github.com/operator-framework/operator-sdk) in
this article.

### Operator-SDK
The Operator framework is a project that is designed to help you get started on creating an operator. To achieve that,
it will generate quite a bit of boilerplate.

The Operator-SDK supports three different models of creating an operator:
- Helm
- Ansible
- Golang

Depending on your choice of tool, you will be able to integrate deeper into Kubernetes or not.

![operator-sdk-capabilites](/img/blog/operator/operator-capability-level.png "Operator sdk capabilities (Taken from the operator-sdk repo)")
*[Operator sdk capabilities][1]*

As we didn't want to be limited by our choice later on and wanted to expose metrics from our operator, we chose to
implement our operator in golang. We will be using the operator-sdk version 0.12 for this.

### What we want to do
Looking at the problem again, we need some way to make sure that a node that runs a specific pod, needs to
have an IP address attached to it. This IP address will be given to connecting parties as a entry point to our 
system and thus cannot change.

Features it needs to support
- Reserve IP address from range
- Attach IP address to node running pod
- Detach IP address from node that is not running pod
- Move IP addresses around in case of node failure

This feature list already shows some things we will not and most likely cannot support. For example autoscaling of 
replica sets will not work as an IP address is bound to a node with an assigned pod. There is
a 1-1 association here. However it is still possible to use the self-healing properties of Deployments
in this case.

When thinking about modelling this behaviour, we basically decided on the following approach:
- Create a IP kind (for reserving the IP Address in the Range)
- Use annotations to attach the IP Address to a pod

We also thought about creating a StaticIPDeployment kind, but at the end decided against it, as
we feared that the lifecycle management would be way more complicated if we needed to manage a deployment
instead of just controlling the assignment of an IP Address.

After all this is the first Operator we are going to write and didn't want to drown in complexity from day one.
We would rather iterate and scrap everything after we tried it, then going too complex from the start.


### Implementation

The first thing you do when starting off a new operator, is that you initialize the directory of your
operator with the following command:

```
operator-sdk new app-operator --repo <YOURREPO>
```

This will create some boilerplate folders and files for you and will look roughly like this:

![operator-fs-structure](/img/blog/operator/operator-structure.png "Operator Folder Structure")

The next thing you might want to do is then add the boilerplate for a CRD and a Controller:

```
operator-sdk add api --api-version=ip.wgtwo.com/v1alpha1 --kind=IP
operator-sdk add controller --api-version=ip.wgtwo.com/v1alpha1 --kind=IP
```

After creating the boilerplate, your folder structure will look a lot like this:

![operator-fs-structure-expanded](/img/blog/operator/operator-structure-expanded.png "Operator Folder Structure Expanded")

The most important files right now are in:
- cmd/manager/main.go (the main program that will run in the cluster)
- pkg/apis/ip/v1alpha1/ip_types.go (definition of the CRD)
- pkg/controller/ip_controller.go (event listener and reconciliation loop)

#### Creating the CRD

To start off, we define how our CRD should look like to be able to manage our IP Address. We do this,
by creating structs in go that have all the fields our CRD shall have. This includes metadata, "spec" and
"status" fields.

There is also a bit of operator-sdk specific code we need to add. This is so that the sdk can generate the
openapi spec and other auto-generated code.

```
// +k8s:openapi-gen=true
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=ips,scope=Cluster
type IP struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty"`

	Spec   IPSpec   `json:"spec,omitempty"`
	Status IPStatus `json:"status,omitempty"`
}
```

The "spec" needs to contain all information the controller needs to create the resource.
The "status" part needs to contain all the bookkeeping information the controller needs to work. In a way the
"status" fields are used as a database for operating Kubernetes (yes, this is oversimplified).

```
// +k8s:openapi-gen=true
type IPSpec struct {
	Address string `json:"address"`
	Reassign bool `json:"reassign,omitempty"`
}

// IPStatus defines the observed state of IP
// +k8s:openapi-gen=true
type IPStatus struct {
	Assigned bool   `json:"assigned"`
	Claimed  bool   `json:"claimed"`
	Node     string `json:"node,omitempty"`
	Pod      string `json:"pod,omitempty"`
	Original IPSpec `json:"original,omitempty"`
}
```

As you can see our new IP Resource type, as defined by the CRD that we are gonna create from these structs, is
going to have two fields: "Address" and "Reassign".
The corresponding "status" part of the resource, has a lot more fields, which we are using for bookkeeping.

After we have created those structs and know how the CRD needs to look like, we actually auto-generate the CRD yaml:
```
operator-sdk generate k8s
operator-sdk generate openapi
```
NB: This changed since operator-sdk 0.15

#### Creating the controller

There are two main parts to the controller. One part that creates a watcher on resources and one part
that reconciles your resource (in our case the IP and Pods).

##### Watching for resource changes
The watch code is in our case in the `add` function of ip_controller.go:
```
	// Watch for changes to primary resource IP, as this always requires an action
	err = c.Watch(&source.Kind{Type: &ipv1alpha1.IP{}}, &handler.EnqueueRequestForObject{})
	if err != nil {
		return err
	}

	// Create Filter list triggering on ip.wgtwo.com/ip as annotation
	pred := predicate.Funcs{
		// Ignore the pod if it does not contain annotation ip.wgtwo.com/ip
		CreateFunc: func(e event.CreateEvent) bool {
			return hasAnnotation(e.Meta)
		},
		UpdateFunc: func(e event.UpdateEvent) bool {
			if hasAnnotation(e.MetaOld) || hasAnnotation(e.MetaNew){
				return true
			} else {
				return false
			}
		},
		DeleteFunc: func(e event.DeleteEvent) bool {
			// Evaluates to false if the object has been confirmed deleted.
			return !e.DeleteStateUnknown
		},
	}
	// Watch for all pods having the right annotation
	err = c.Watch(&source.Kind{Type: &corev1.Pod{}}, &handler.EnqueueRequestForObject{}, pred)
```
Here we are creating watchers for all changes to the `IP` resource and watchers for all create/update/delete operations on
pods, if they have a specific annotation set.

If any of these conditions are met, the reconciliation loop will be triggered.

##### Reconciliation

This is where the business logic of your operator/controller is sitting. The `Reconcile` function in `ip_controller.go` will
be triggered whenever one of the watch conditions fits.
We do not know which type of resource triggered the loop, so that is the first thing we need to figure out:
```
oip := &ipv1alpha1.IP{}
err := r.client.Get(context.TODO(), request.NamespacedName, oip)
if err == nil {
    ... yes it is a resource of kind IP ... go and do business
}
...
op := &corev1.Pod{}
err = r.client.Get(context.TODO(), request.NamespacedName, op)
if err == nil {
    ... yes it is a resource of kind Pod ... go and do business
}
...
```

In these two code blocks, we are handling all the interactions for the primary resource of kind IP and the secondary
resource of type pod. Depending on what has happened last we have different scenarios.

Cases for the IP resource to consider:
- IP is new
- IP has been modified
- IP has been deleted

Cases for the Pod resource to consider:
- Annotation sticking the IP to the pod has been deleted
- IP needs to be assigned to a pod
- Pod has moved to another node
- Pod has been deleted

We will not go any further into the detail on what these parts are actually doing, as this is enough
to actually give you an idea on how this can be accomplished.


## Summary

We have been looking at how to expand Kubernetes to suit our needs better. Creating the Operator/Controller
has taught us quite a bit about how Kubernetes works and has already saved us work in the past 
few months, especially on node failures.

The operator-sdk has been a great tool for us to solve this problem and we see that there is a lot of work
going into it, making it simpler to create operators. It might look intimidating at first, but is worth the effort and 
we think in the future Kubernetes operators will be the way how stateful components will be managed.


## Resources / Further Reading

- Programming Kubernetes by Stefan Schimanski and Michael Hausenblas
- [Creating a custom kube-scheduler](https://developer.ibm.com/articles/creating-a-custom-kube-scheduler/)
- [Operator SDK](https://github.com/operator-framework/operator-sdk)

[1]: https://github.com/operator-framework/operator-sdk/blob/master/README.md
[2]: https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/
[3]: https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
