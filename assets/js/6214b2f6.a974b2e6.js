"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[3361],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return p}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),g=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=g(e.components);return t.createElement(u.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=g(r),f=o,p=s["".concat(u,".").concat(f)]||s[f]||m[f]||i;return r?t.createElement(p,a(a({ref:n},c),{},{components:r})):t.createElement(p,a({ref:n},c))}));function p(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var g=2;g<i;g++)a[g]=r[g];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},48310:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return g},toc:function(){return s}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={slug:"forbidden-lore-hacking-dns-routing-for-k8s",title:"Forbidden lore: hacking DNS routing for k8s",date:new Date("2020-12-11T00:00:00.000Z"),tags:["dns","nginx","kubernetes","infrastructure"],authors:["anna-kennedy","holger-ihrig","mtl","yan"]},u=void 0,g={permalink:"/blog/forbidden-lore-hacking-dns-routing-for-k8s",editUrl:"https://github.com/working-group-two/wgtwo.com/edit/main/blog/../blog/2020-12-11-forbidden-lore-hacking-dns-routing-for-k8s.md",source:"@site/../blog/2020-12-11-forbidden-lore-hacking-dns-routing-for-k8s.md",title:"Forbidden lore: hacking DNS routing for k8s",description:"At WG2 we\u2019re coming close to having everything running in Kubernetes, which means that almost everything we deploy needs to be pulled from a registry. We have run our own local registry for some time now, to host both locally-built images and cached images from Docker Hub.",date:"2020-12-11T00:00:00.000Z",formattedDate:"December 11, 2020",tags:[{label:"dns",permalink:"/blog/tags/dns"},{label:"nginx",permalink:"/blog/tags/nginx"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"infrastructure",permalink:"/blog/tags/infrastructure"}],readingTime:7.505,hasTruncateMarker:!0,authors:[{name:"Anna Kennedy",title:"Tech Lead for Cloud and Edge Infrastructure",url:"https://www.linkedin.com/in/annaken",imageURL:"/img/author-photos/ak.jpg",key:"anna-kennedy"},{name:"Holger Ihrig",title:"Software Engineer for Session Management & Protocol Termination",url:"https://www.linkedin.com/in/hihrig/",imageURL:"/img/author-photos/hi.jpg",key:"holger-ihrig"},{name:"Matt Long",title:"Engineering Manager for Edge, Cloud and Security",url:"https://www.linkedin.com/in/mattlong/",imageURL:"/img/author-photos/mtl-li.jpg",key:"mtl"},{name:"Yan Grunenberger",title:"Software Engineer for Session Management & Protocol Termination",url:"https://www.linkedin.com/in/yangrunenberger/",imageURL:"/img/author-photos/yg.jpg",key:"yan"}],frontMatter:{slug:"forbidden-lore-hacking-dns-routing-for-k8s",title:"Forbidden lore: hacking DNS routing for k8s",date:"2020-12-11T00:00:00.000Z",tags:["dns","nginx","kubernetes","infrastructure"],authors:["anna-kennedy","holger-ihrig","mtl","yan"]},prevItem:{title:"Changing the color of your bulbs: The fancy way",permalink:"/blog/mqtt-event-bridge"},nextItem:{title:"We're all grownups here",permalink:"/blog/were-all-grownups-here"}},c={authorsImageUrls:[void 0,void 0,void 0,void 0]},s=[],m={toc:s},f="wrapper";function p(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(f,(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"At WG2 we\u2019re coming close to having everything running in Kubernetes, which means that almost everything we deploy needs to be pulled from a registry. We have run our own local registry for some time now, to host both locally-built images and cached images from Docker Hub."))}p.isMDXComponent=!0}}]);