"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[3436],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81431:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={slug:"ss7-firewall",title:"SS7 Firewall",tags:["4G","5G"],techFeaturePage:!0},s="SS7 Firewall",c={type:"mdx",permalink:"/technology/features/signaling/ss7-firewall",source:"@site/src/pages/technology/features/signaling/ss7-firewall.md",title:"SS7 Firewall",description:"The SS7 firewall is a 'signalling firewall' used to protect mobile operators from SS7 Attacks. The SS7 firewall protects legacy networks (SS7 based) specifically against potential attacks, unauthorized senders, malformed messages, stolen mobile identities and much more.",frontMatter:{slug:"ss7-firewall",title:"SS7 Firewall",tags:["4G","5G"],techFeaturePage:!0}},u=[],p={toc:u},f="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ss7-firewall"},"SS7 Firewall"),(0,i.kt)("p",null,"The SS7 firewall is a 'signalling firewall' used to protect mobile operators from SS7 Attacks. The SS7 firewall protects legacy networks (SS7 based) specifically against potential attacks, unauthorized senders, malformed messages, stolen mobile identities and much more."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"wgtwo")," has implemented an SS7 firewall that will block/reject SS7 signaling based on security best practices outlined by GSMA (FS.11 and FS.19). Some example rules include checks on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cross-layer address consistency checks (e.g. SCCP <=> MAP)"),(0,i.kt)("li",{parentName:"ul"},"Screening verifies messages originate in subscriber\u2019s VPLMN"),(0,i.kt)("li",{parentName:"ul"},"MAP operations that return actual subscriber\u2019s IMSI, cell-location, and MSC are not implemented (SMS Home-Routing by default)"),(0,i.kt)("li",{parentName:"ul"},"Message filtering is based on several criteria such as the time and location of the last update",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"SS7 Protocol (SCCP CgPA/CdPA, OpCode, ACN, TCAP message type, IMSI, ...)"),(0,i.kt)("li",{parentName:"ul"},"Diameter protocol (Origin-/Destination-Host/-Realm, Command Code, Application Id, IMSI, ...)"),(0,i.kt)("li",{parentName:"ul"},"Diameter Application ID / Command Code filtering and consistency check"),(0,i.kt)("li",{parentName:"ul"},"Verify address fields consistency, limit message length / grouped AVPs nesting depth"),(0,i.kt)("li",{parentName:"ul"},"Validate protocol consistency through input validation (e.g. doubled address AVPs, wrong AVP address, AVP Type, and format checks)")))))}m.isMDXComponent=!0}}]);