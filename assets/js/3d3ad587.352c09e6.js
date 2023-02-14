"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[120],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(r),b=o,m=g["".concat(p,".").concat(b)]||g[b]||c[b]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},40718:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={slug:"releasing-sip-breakout-api",title:"Hello abundance, bye-bye complexity: With this new public API you can plug multiple switchboards into the call path - without knowing what a call path is",date:new Date("2022-07-07T00:00:00.000Z"),tags:["saas","operators","api","sip","pbx","developers"],authors:["noy"],image:"./fruit-landscape.png"},p=void 0,s={permalink:"/blog/releasing-sip-breakout-api",editUrl:"https://github.com/working-group-two/wgtwo.com/edit/main/blog/../blog/2022-07-07-releasing-sip-api/index.md",source:"@site/../blog/2022-07-07-releasing-sip-api/index.md",title:"Hello abundance, bye-bye complexity: With this new public API you can plug multiple switchboards into the call path - without knowing what a call path is",description:"We love making telecom easier and scalable. This week we\u2019ve released SIP Breakout, a new public API from Working Group Two. It simplifies the process of deploying SIP-enabled services, such as a PBX.",date:"2022-07-07T00:00:00.000Z",formattedDate:"July 7, 2022",tags:[{label:"saas",permalink:"/blog/tags/saas"},{label:"operators",permalink:"/blog/tags/operators"},{label:"api",permalink:"/blog/tags/api"},{label:"sip",permalink:"/blog/tags/sip"},{label:"pbx",permalink:"/blog/tags/pbx"},{label:"developers",permalink:"/blog/tags/developers"}],readingTime:2.515,hasTruncateMarker:!0,authors:[{name:"Noy Shimshoni",title:"Software Engineer for Core Services",url:"https://www.linkedin.com/in/noy-shimshoni-b176bb85/",imageURL:"/img/author-photos/ns.jpg",key:"noy"}],frontMatter:{slug:"releasing-sip-breakout-api",title:"Hello abundance, bye-bye complexity: With this new public API you can plug multiple switchboards into the call path - without knowing what a call path is",date:"2022-07-07T00:00:00.000Z",tags:["saas","operators","api","sip","pbx","developers"],authors:["noy"],image:"./fruit-landscape.png"},prevItem:{title:"Q&A with Stephane: The evolution of the mobile core",permalink:"/blog/evolution-of-mobile-core"},nextItem:{title:"What we're building on the platform right now: 5GSA, 5GNSA, OCS, content filtering, VoNR, VoLTE on sXGP, VoLTE roaming, support for PBX from Telavox... and more ",permalink:"/blog/what-we-build-right-now-june22"}},u={image:r(90780).Z,authorsImageUrls:[void 0]},c=[],g={toc:c};function b(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We love making telecom easier and scalable. This week we\u2019ve released ",(0,a.kt)("a",{parentName:"p",href:"https://v1.docs.wgtwo.com/guide/sipbreakout/v1/how-to-use-sipbreakout-api.html#prerequisites"},"SIP Breakout"),", a new public API from Working Group Two. It simplifies the process of deploying SIP-enabled services, such as a PBX."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Abundance of fruit in market stall",src:r(90780).Z,width:"300",height:"149"})))}b.isMDXComponent=!0},90780:function(e,t,r){t.Z=r.p+"assets/images/fruit-landscape-905e461605c84836e7d8eebe58887810.png"}}]);