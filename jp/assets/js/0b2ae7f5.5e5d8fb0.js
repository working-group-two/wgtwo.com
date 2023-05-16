"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[6184],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,g=p["".concat(l,".").concat(f)]||p[f]||m[f]||i;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},27760:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={slug:"metrics-unlimited-thanos",title:"Towards observability nirvana: infinite metric retention with Thanos",date:new Date("2020-01-28T00:00:00.000Z"),tags:["infrastructure","observability","prometheus","thanos","kubernetes"],authors:"holger-ihrig"},l=void 0,u={permalink:"/jp/blog/metrics-unlimited-thanos",editUrl:"https://github.com/working-group-two/wgtwo.com/edit/main/blog/../blog/2020-01-28-Thanos-infinite-metrics.md",source:"@site/../blog/2020-01-28-Thanos-infinite-metrics.md",title:"Towards observability nirvana: infinite metric retention with Thanos",description:"In the current DevOps world, our industry relies on the ability to observe and monitorize our infrastructure and",date:"2020-01-28T00:00:00.000Z",formattedDate:"January 28, 2020",tags:[{label:"infrastructure",permalink:"/jp/blog/tags/infrastructure"},{label:"observability",permalink:"/jp/blog/tags/observability"},{label:"prometheus",permalink:"/jp/blog/tags/prometheus"},{label:"thanos",permalink:"/jp/blog/tags/thanos"},{label:"kubernetes",permalink:"/jp/blog/tags/kubernetes"}],readingTime:5.055,hasTruncateMarker:!0,authors:[{name:"Holger Ihrig",title:"Software Engineer for Session Management & Protocol Termination",url:"https://www.linkedin.com/in/hihrig/",imageURL:"/img/author-photos/hi.jpg",key:"holger-ihrig"}],frontMatter:{slug:"metrics-unlimited-thanos",title:"Towards observability nirvana: infinite metric retention with Thanos",date:"2020-01-28T00:00:00.000Z",tags:["infrastructure","observability","prometheus","thanos","kubernetes"],authors:"holger-ihrig"},prevItem:{title:"Extending Kubernetes for our needs",permalink:"/jp/blog/extending-k8s/"},nextItem:{title:"We killed the butler: Replacing Jenkins with Concourse",permalink:"/jp/blog/replacing-jenkins-with-concourse"}},c={authorsImageUrls:[void 0]},p=[],m={toc:p},f="wrapper";function g(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the current DevOps world, our industry relies on the ability to observe and monitorize our infrastructure and\nservices. ",(0,i.kt)("strong",{parentName:"p"},"wgtwo")," is no exception here and as we are operating in the TelCo space\nwe wanted to know more about the usage patterns of our platform over days, months and even years."))}g.isMDXComponent=!0}}]);