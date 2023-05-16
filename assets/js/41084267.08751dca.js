"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[8304],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8589:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={slug:"extending-k8s/",title:"Extending Kubernetes for our needs",date:new Date("2020-02-21T00:00:00.000Z"),tags:["infrastructure","kubernetes","networking","AWS"],authors:"holger-ihrig"},l=void 0,d={permalink:"/blog/extending-k8s/",editUrl:"https://github.com/working-group-two/wgtwo.com/edit/main/blog/../blog/2020-02-21-Extending-Kubernetes-Static-IP-Routing.md",source:"@site/../blog/2020-02-21-Extending-Kubernetes-Static-IP-Routing.md",title:"Extending Kubernetes for our needs",description:"We are using Kubernetes as our cluster scheduler and this serves us well. However we have a",date:"2020-02-21T00:00:00.000Z",formattedDate:"February 21, 2020",tags:[{label:"infrastructure",permalink:"/blog/tags/infrastructure"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"networking",permalink:"/blog/tags/networking"},{label:"AWS",permalink:"/blog/tags/aws"}],readingTime:11.345,hasTruncateMarker:!0,authors:[{name:"Holger Ihrig",title:"Software Engineer for Session Management & Protocol Termination",url:"https://www.linkedin.com/in/hihrig/",imageURL:"/img/author-photos/hi.jpg",key:"holger-ihrig"}],frontMatter:{slug:"extending-k8s/",title:"Extending Kubernetes for our needs",date:"2020-02-21T00:00:00.000Z",tags:["infrastructure","kubernetes","networking","AWS"],authors:"holger-ihrig"},prevItem:{title:"VoWifi leaking IMSI",permalink:"/blog/vowifi-imsi-leak/"},nextItem:{title:"Towards observability nirvana: infinite metric retention with Thanos",permalink:"/blog/metrics-unlimited-thanos"}},u={authorsImageUrls:[void 0]},p=[{value:"Extending Kubernetes",id:"extending-kubernetes",level:2},{value:"Adding a scheduler extender",id:"adding-a-scheduler-extender",level:3},{value:"Creating an operator",id:"creating-an-operator",level:3},{value:"Building an Operator/Controller",id:"building-an-operatorcontroller",level:2},{value:"Operator-SDK",id:"operator-sdk",level:3},{value:"What we want to do",id:"what-we-want-to-do",level:3},{value:"Implementation",id:"implementation",level:3},{value:"Creating the CRD",id:"creating-the-crd",level:4},{value:"Creating the controller",id:"creating-the-controller",level:4},{value:"Watching for resource changes",id:"watching-for-resource-changes",level:5},{value:"Reconciliation",id:"reconciliation",level:5},{value:"Summary",id:"summary",level:2},{value:"Resources / Further Reading",id:"resources--further-reading",level:2}],c={toc:p},h="wrapper";function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)(h,(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We are using Kubernetes as our cluster scheduler and this serves us well. However we have a\nfew cases where we need to do some additional work."),(0,a.kt)("p",null,"One case for example is that we have to use static IPs for some of our services to connect to\nTelecom companies as they expect a single IP address to bind to. This address needs to be fixed and\nDNS records are not accepted either. We are running in AWS as well, so the reader might ask why are we not\nusing Elastic IPs and adding them to the services? Good idea, but Telecom operators will not whitelist\nan Elastic IP for you as there are no guarantees that it will belong to your company infrastructure forever. There\nare also additional challenges when it comes to using Elastic IP in private subnet over VPN or direct connect."),(0,a.kt)("p",null,"We are a member of RIPE and do have a small subnet block for our own use, so we thought we could make use of\nthat. As we own the block and AWS supports BYOIP (Bring your own IP-range), we created a special subnet with\nsome Kubernetes nodes in it. This was not enough to make this work since we depended on a service always having\nthe same IP attached to it, as well as the node running a pod having some very specific Routes set."),(0,a.kt)("p",null,"With this scenario in mind we set out to find solutions and all solutions we could think of required haggling\nwith Kubernetes."),(0,a.kt)("h2",{id:"extending-kubernetes"},"Extending Kubernetes"),(0,a.kt)("p",null,"There are several ways to extend Kubernetes. All functionality in Kubernetes is build upon very nice and clean\npublic APIs, or to say it with other words: There is no private API magic hidden somewhere. So lets look at\ntwo ways on how to extend Kubernetes."),(0,a.kt)("p",null,"Possible ways to go forward:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Adding a scheduler extender"),(0,a.kt)("li",{parentName:"ul"},"Creating an operator/controller")),(0,a.kt)("p",null,"There are more ways to extend Kubernetes, but these two ways will be the one we shall look at. Just for completeness\nyou can as well also add another scheduler or change Kubernetes itself. However these possibilities have some serious\ndownsides."),(0,a.kt)("h3",{id:"adding-a-scheduler-extender"},"Adding a scheduler extender"),(0,a.kt)("p",null,"The Kubernetes scheduler checks for certain requirements before it schedules a pod onto a node. Some of these requirements\nare hard requirements, like cpu, memory and number of pods. Other requirements are more soft, like if the pods are allowed to\nbe packed together or in which AZ they are going to run. All of those requirements are collected and points given to each\nnode on how well they meet the requirements. The node that fits best, gets chosen."),(0,a.kt)("p",null,"All of these are things the scheduler will do for you automatically, however it is also possible to give the cluster a\n",(0,a.kt)("inlineCode",{parentName:"p"},"KubeSchedulerConfiguration")," object that will tell the scheduler to also reach out to a service for additional point scoring.\nThe SchedulerConfiguration is a JSON file and for further explanations, please have a look at this\nexcellent ",(0,a.kt)("a",{parentName:"p",href:"https://developer.ibm.com/articles/creating-a-custom-kube-scheduler/"},"blog post"),"."),(0,a.kt)("p",null,"In our case, we could have written a service that checks which IP Addresses are assigned to the Nodes and moved the Pods\nonto those nodes. This would have required us to make sure that those nodes had all needed IP-Addresses all the time.\nThat sounded not very enticing when doing cluster upgrades as it would have needed to be at least a semi-manual process.\nSo we decided against this approach."),(0,a.kt)("h3",{id:"creating-an-operator"},"Creating an operator"),(0,a.kt)("p",null,"An Operator/Controller on the other hand is a component observing resources and then try to create the declared resources.\nThe difference between a controller and an operator is basically that an operator is handling the lifecycle of an\napplication, whereas a controller may control specific resources that are not associated with a specific application.\nThey both use the controller pattern though and both can be implemented with the same toolset, so for simplicity sake in the\ncontext of this article, we will consider them to be equal."),(0,a.kt)("p",null,"Operators usually consists at least out of a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"CRD(CustomResourceDefinition)")),", an ",(0,a.kt)("strong",{parentName:"p"},"event listener")," and a ",(0,a.kt)("strong",{parentName:"p"},"reconciliation loop"),".\nThe ",(0,a.kt)("em",{parentName:"p"},"CRD")," basically creates a new type of resource and effectively implements a domain specific language for the operator. The whole description on what this deployment\nneeds to look like and all its abilities need to be defined in the ",(0,a.kt)("em",{parentName:"p"},"CRD"),". The operator will create an ",(0,a.kt)("em",{parentName:"p"},"event listener")," for that\n",(0,a.kt)("em",{parentName:"p"},"CRD")," as the primary resource and additional ",(0,a.kt)("em",{parentName:"p"},"event listeners")," for the secondary resource (most likely pods in this example).\nThe ",(0,a.kt)("em",{parentName:"p"},"event listener")," will let the ",(0,a.kt)("em",{parentName:"p"},"reconciliation loop")," know once a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"},"CRUD")," operation has been requested on either the primary or\nsecondary resource. The ",(0,a.kt)("em",{parentName:"p"},"loop")," will then try to bring the ",(0,a.kt)("em",{parentName:"p"},"CRD")," into the desired state, depending on what operation has been\nrequested. So in the Redis example it will either create the pods, update the pods, in the case of an upgrade it might blue/green\ndeploy the pods or delete the pods. Basically things a human operator would do in this case, just in programmatic form, taking it\nfrom a declarative form into existing resources."),(0,a.kt)("p",null,"As our initial problem was making services available on static IP addresses, we chose to explore this approach further,\nbasically attaching additional IP addresses to the nodes running specific pods."),(0,a.kt)("h2",{id:"building-an-operatorcontroller"},"Building an Operator/Controller"),(0,a.kt)("p",null,"For building an operator, there are several frameworks out there, but we will only look at the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/operator-framework/operator-sdk"},"operator-framework")," in\nthis article."),(0,a.kt)("h3",{id:"operator-sdk"},"Operator-SDK"),(0,a.kt)("p",null,"The Operator framework is a project that is designed to help you get started on creating an operator. To achieve that,\nit will generate quite a bit of boilerplate."),(0,a.kt)("p",null,"The Operator-SDK supports three different models of creating an operator:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Helm"),(0,a.kt)("li",{parentName:"ul"},"Ansible"),(0,a.kt)("li",{parentName:"ul"},"Golang")),(0,a.kt)("p",null,"Depending on your choice of tool, you will be able to integrate deeper into Kubernetes or not."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"operator-sdk-capabilites",src:n(18709).Z,title:"Operator sdk capabilities (Taken from the operator-sdk repo)",width:"2440",height:"1200"}),"\n",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://github.com/operator-framework/operator-sdk/blob/master/README.md"},"Operator sdk capabilities"))),(0,a.kt)("p",null,"As we didn't want to be limited by our choice later on and wanted to expose metrics from our operator, we chose to\nimplement our operator in golang. We will be using the operator-sdk version 0.12 for this."),(0,a.kt)("h3",{id:"what-we-want-to-do"},"What we want to do"),(0,a.kt)("p",null,"Looking at the problem again, we need some way to make sure that a node that runs a specific pod, needs to\nhave an IP address attached to it. This IP address will be given to connecting parties as a entry point to our\nsystem and thus cannot change."),(0,a.kt)("p",null,"Features it needs to support"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reserve IP address from range"),(0,a.kt)("li",{parentName:"ul"},"Attach IP address to node running pod"),(0,a.kt)("li",{parentName:"ul"},"Detach IP address from node that is not running pod"),(0,a.kt)("li",{parentName:"ul"},"Move IP addresses around in case of node failure")),(0,a.kt)("p",null,"This feature list already shows some things we will not and most likely cannot support. For example autoscaling of\nreplica sets will not work as an IP address is bound to a node with an assigned pod. There is\na 1-1 association here. However it is still possible to use the self-healing properties of Deployments\nin this case."),(0,a.kt)("p",null,"When thinking about modelling this behaviour, we basically decided on the following approach:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a IP kind (for reserving the IP Address in the Range)"),(0,a.kt)("li",{parentName:"ul"},"Use annotations to attach the IP Address to a pod")),(0,a.kt)("p",null,"We also thought about creating a StaticIPDeployment kind, but at the end decided against it, as\nwe feared that the lifecycle management would be way more complicated if we needed to manage a deployment\ninstead of just controlling the assignment of an IP Address."),(0,a.kt)("p",null,"After all this is the first Operator we are going to write and didn't want to drown in complexity from day one.\nWe would rather iterate and scrap everything after we tried it, then going too complex from the start."),(0,a.kt)("h3",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"The first thing you do when starting off a new operator, is that you initialize the directory of your\noperator with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"operator-sdk new app-operator --repo <YOURREPO>\n")),(0,a.kt)("p",null,"This will create some boilerplate folders and files for you and will look roughly like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"operator-fs-structure",src:n(49311).Z,title:"Operator Folder Structure",width:"351",height:"169"})),(0,a.kt)("p",null,"The next thing you might want to do is then add the boilerplate for a CRD and a Controller:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"operator-sdk add api --api-version=ip.wgtwo.com/v1alpha1 --kind=IP\noperator-sdk add controller --api-version=ip.wgtwo.com/v1alpha1 --kind=IP\n")),(0,a.kt)("p",null,"After creating the boilerplate, your folder structure will look a lot like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"operator-fs-structure-expanded",src:n(34376).Z,title:"Operator Folder Structure Expanded",width:"335",height:"536"})),(0,a.kt)("p",null,"The most important files right now are in:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cmd/manager/main.go (the main program that will run in the cluster)"),(0,a.kt)("li",{parentName:"ul"},"pkg/apis/ip/v1alpha1/ip_types.go (definition of the CRD)"),(0,a.kt)("li",{parentName:"ul"},"pkg/controller/ip_controller.go (event listener and reconciliation loop)")),(0,a.kt)("h4",{id:"creating-the-crd"},"Creating the CRD"),(0,a.kt)("p",null,'To start off, we define how our CRD should look like to be able to manage our IP Address. We do this,\nby creating structs in go that have all the fields our CRD shall have. This includes metadata, "spec" and\n"status" fields.'),(0,a.kt)("p",null,"There is also a bit of operator-sdk specific code we need to add. This is so that the sdk can generate the\nopenapi spec and other auto-generated code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// +k8s:openapi-gen=true\n// +kubebuilder:subresource:status\n// +kubebuilder:resource:path=ips,scope=Cluster\ntype IP struct {\n    metav1.TypeMeta   `json:",inline"`\n    metav1.ObjectMeta `json:"metadata,omitempty"`\n\n    Spec   IPSpec   `json:"spec,omitempty"`\n    Status IPStatus `json:"status,omitempty"`\n}\n')),(0,a.kt)("p",null,'The "spec" needs to contain all information the controller needs to create the resource.\nThe "status" part needs to contain all the bookkeeping information the controller needs to work. In a way the\n"status" fields are used as a database for operating Kubernetes (yes, this is oversimplified).'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// +k8s:openapi-gen=true\ntype IPSpec struct {\n    Address string `json:"address"`\n    Reassign bool `json:"reassign,omitempty"`\n}\n\n// IPStatus defines the observed state of IP\n// +k8s:openapi-gen=true\ntype IPStatus struct {\n    Assigned bool   `json:"assigned"`\n    Claimed  bool   `json:"claimed"`\n    Node     string `json:"node,omitempty"`\n    Pod      string `json:"pod,omitempty"`\n    Original IPSpec `json:"original,omitempty"`\n}\n')),(0,a.kt)("p",null,'As you can see our new IP Resource type, as defined by the CRD that we are gonna create from these structs, is\ngoing to have two fields: "Address" and "Reassign".\nThe corresponding "status" part of the resource, has a lot more fields, which we are using for bookkeeping.'),(0,a.kt)("p",null,"After we have created those structs and know how the CRD needs to look like, we actually auto-generate the CRD yaml:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"operator-sdk generate k8s\noperator-sdk generate openapi\n")),(0,a.kt)("p",null,"NB: This changed since operator-sdk 0.15"),(0,a.kt)("h4",{id:"creating-the-controller"},"Creating the controller"),(0,a.kt)("p",null,"There are two main parts to the controller. One part that creates a watcher on resources and one part\nthat reconciles your resource (in our case the IP and Pods)."),(0,a.kt)("h5",{id:"watching-for-resource-changes"},"Watching for resource changes"),(0,a.kt)("p",null,"The watch code is in our case in the ",(0,a.kt)("inlineCode",{parentName:"p"},"add")," function of ip_controller.go:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    // Watch for changes to primary resource IP, as this always requires an action\n    err = c.Watch(&source.Kind{Type: &ipv1alpha1.IP{}}, &handler.EnqueueRequestForObject{})\n    if err != nil {\n        return err\n    }\n\n    // Create Filter list triggering on ip.wgtwo.com/ip as annotation\n    pred := predicate.Funcs{\n        // Ignore the pod if it does not contain annotation ip.wgtwo.com/ip\n        CreateFunc: func(e event.CreateEvent) bool {\n            return hasAnnotation(e.Meta)\n        },\n        UpdateFunc: func(e event.UpdateEvent) bool {\n            if hasAnnotation(e.MetaOld) || hasAnnotation(e.MetaNew){\n                return true\n            } else {\n                return false\n            }\n        },\n        DeleteFunc: func(e event.DeleteEvent) bool {\n            // Evaluates to false if the object has been confirmed deleted.\n            return !e.DeleteStateUnknown\n        },\n    }\n    // Watch for all pods having the right annotation\n    err = c.Watch(&source.Kind{Type: &corev1.Pod{}}, &handler.EnqueueRequestForObject{}, pred)\n")),(0,a.kt)("p",null,"Here we are creating watchers for all changes to the ",(0,a.kt)("inlineCode",{parentName:"p"},"IP")," resource and watchers for all create/update/delete operations on\npods, if they have a specific annotation set."),(0,a.kt)("p",null,"If any of these conditions are met, the reconciliation loop will be triggered."),(0,a.kt)("h5",{id:"reconciliation"},"Reconciliation"),(0,a.kt)("p",null,"This is where the business logic of your operator/controller is sitting. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Reconcile")," function in ",(0,a.kt)("inlineCode",{parentName:"p"},"ip_controller.go")," will\nbe triggered whenever one of the watch conditions fits.\nWe do not know which type of resource triggered the loop, so that is the first thing we need to figure out:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"oip := &ipv1alpha1.IP{}\nerr := r.client.Get(context.TODO(), request.NamespacedName, oip)\nif err == nil {\n    ... yes it is a resource of kind IP ... go and do business\n}\n...\nop := &corev1.Pod{}\nerr = r.client.Get(context.TODO(), request.NamespacedName, op)\nif err == nil {\n    ... yes it is a resource of kind Pod ... go and do business\n}\n...\n")),(0,a.kt)("p",null,"In these two code blocks, we are handling all the interactions for the primary resource of kind IP and the secondary\nresource of type pod. Depending on what has happened last we have different scenarios."),(0,a.kt)("p",null,"Cases for the IP resource to consider:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IP is new"),(0,a.kt)("li",{parentName:"ul"},"IP has been modified"),(0,a.kt)("li",{parentName:"ul"},"IP has been deleted")),(0,a.kt)("p",null,"Cases for the Pod resource to consider:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Annotation sticking the IP to the pod has been deleted"),(0,a.kt)("li",{parentName:"ul"},"IP needs to be assigned to a pod"),(0,a.kt)("li",{parentName:"ul"},"Pod has moved to another node"),(0,a.kt)("li",{parentName:"ul"},"Pod has been deleted")),(0,a.kt)("p",null,"We will not go any further into the detail on what these parts are actually doing, as this is enough\nto actually give you an idea on how this can be accomplished."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"We have been looking at how to expand Kubernetes to suit our needs better. Creating the Operator/Controller\nhas taught us quite a bit about how Kubernetes works and has already saved us work in the past\nfew months, especially on node failures."),(0,a.kt)("p",null,"The operator-sdk has been a great tool for us to solve this problem and we see that there is a lot of work\ngoing into it, making it simpler to create operators. It might look intimidating at first, but is worth the effort and\nwe think in the future Kubernetes operators will be the way how stateful components will be managed."),(0,a.kt)("h2",{id:"resources--further-reading"},"Resources / Further Reading"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Programming Kubernetes by Stefan Schimanski and Michael Hausenblas"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.ibm.com/articles/creating-a-custom-kube-scheduler/"},"Creating a custom kube-scheduler")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/operator-framework/operator-sdk"},"Operator SDK"))))}m.isMDXComponent=!0},18709:function(e,t,n){t.Z=n.p+"assets/images/operator-capability-level-f511b5d60b3e9160a4582577204888cd.png"},34376:function(e,t,n){t.Z=n.p+"assets/images/operator-structure-expanded-5901aa50d6e40055e6140151f960b40f.png"},49311:function(e,t,n){t.Z=n.p+"assets/images/operator-structure-1a847ce462732788fdab91235ce1a528.png"}}]);