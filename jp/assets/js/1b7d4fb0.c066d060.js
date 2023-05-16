"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[3670],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return g}});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,g=c["".concat(s,".").concat(m)]||c[m]||h[m]||r;return a?o.createElement(g,i(i({ref:t},u),{},{components:a})):o.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},66120:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var o=a(87462),n=a(63366),r=(a(67294),a(3905)),i=["components"],l={slug:"releasing-sip-breakout-api",title:"Hello abundance, bye-bye complexity: With this new public API you can plug multiple switchboards into the call path - without knowing what a call path is",date:new Date("2022-07-07T00:00:00.000Z"),tags:["saas","operators","api","sip","pbx","developers"],authors:["noy"],image:"./fruit-landscape.png"},s=void 0,p={permalink:"/jp/blog/releasing-sip-breakout-api",editUrl:"https://github.com/working-group-two/wgtwo.com/edit/main/blog/../blog/2022-07-07-releasing-sip-api/index.md",source:"@site/../blog/2022-07-07-releasing-sip-api/index.md",title:"Hello abundance, bye-bye complexity: With this new public API you can plug multiple switchboards into the call path - without knowing what a call path is",description:"We love making telecom easier and scalable. This week we\u2019ve released SIP Breakout, a new public API from Working Group Two. It simplifies the process of deploying SIP-enabled services, such as a PBX.",date:"2022-07-07T00:00:00.000Z",formattedDate:"July 7, 2022",tags:[{label:"saas",permalink:"/jp/blog/tags/saas"},{label:"operators",permalink:"/jp/blog/tags/operators"},{label:"api",permalink:"/jp/blog/tags/api"},{label:"sip",permalink:"/jp/blog/tags/sip"},{label:"pbx",permalink:"/jp/blog/tags/pbx"},{label:"developers",permalink:"/jp/blog/tags/developers"}],readingTime:2.515,hasTruncateMarker:!0,authors:[{name:"Noy Shimshoni",title:"Software Engineer for Core Services",url:"https://www.linkedin.com/in/noy-shimshoni-b176bb85/",imageURL:"/img/author-photos/ns.jpg",key:"noy"}],frontMatter:{slug:"releasing-sip-breakout-api",title:"Hello abundance, bye-bye complexity: With this new public API you can plug multiple switchboards into the call path - without knowing what a call path is",date:"2022-07-07T00:00:00.000Z",tags:["saas","operators","api","sip","pbx","developers"],authors:["noy"],image:"./fruit-landscape.png"},prevItem:{title:"Q&A with Stephane: The evolution of the mobile core",permalink:"/jp/blog/evolution-of-mobile-core"},nextItem:{title:"What we're building on the platform right now: 5GSA, 5GNSA, OCS, content filtering, VoNR, VoLTE on sXGP, VoLTE roaming, support for PBX from Telavox... and more ",permalink:"/jp/blog/what-we-build-right-now-june22"}},u={image:a(90780).Z,authorsImageUrls:[void 0]},c=[],h={toc:c},m="wrapper";function g(e){var t=e.components,l=(0,n.Z)(e,i);return(0,r.kt)(m,(0,o.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We love making telecom easier and scalable. This week we\u2019ve released ",(0,r.kt)("a",{parentName:"p",href:"https://v1.docs.wgtwo.com/guide/sipbreakout/v1/how-to-use-sipbreakout-api.html#prerequisites"},"SIP Breakout"),", a new public API from Working Group Two. It simplifies the process of deploying SIP-enabled services, such as a PBX."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Abundance of fruit in market stall",src:a(90780).Z,width:"300",height:"149"})),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://v1.docs.wgtwo.com/guide/sipbreakout/v1/how-to-use-sipbreakout-api.html#prerequisites"},"SIP Breakout")," allows for configuration on a per-subscription basis, which means that operators on the Working Group Two platform can easily offer a range of different SIP-services to their customers. The typical example is a PBX, otherwise known as a switchboard. "),(0,r.kt)("p",null,"Meanwhile a product developer - say, a company that makes PBXs for a living - benefits from implementing their product once for all operators on the platform. That means no major new development project every time, but a one-time implementation on a standardized and well-documented public API. (Insert upbeat music here). "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Fact box"),"\nHold on a second, what\u2019s a SIP? A Session Initiation Protocol (SIP) session is any live communication, such as phone calls, conferencing and even video. The \u201cprotocol\u201d part of the term just means that it\u2019s a set of universal standards for computer communication. Typical examples of a SIP-enabled service are phone calls with Voice over IP, switchboard/PBX and even computer games.")),(0,r.kt)("p",null,"So what\u2019s in it for people using the mobile network? This means that when your local plumbing company or that huge global accounting firm asks their mobile operator for a PBX to help them manage calls and messages with their customers they don\u2019t get a one-size-fits-all solution. The operator can offer them a variety of solutions and usage-based, scalable pricing models. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Let\u2019s drill down a bit further.")," "),(0,r.kt)("p",null,"By introducing our new SIP Breakout API we open up our core network to a range of SIP-enabled products. This is significant because SIP products are a bit more complex than other products. So simplifying and standardizing the process makes a difference. The new API allows PBX providers to plug their SIP-enabled endpoints into the call path. This establishes a session integration between Working Group Two\u2019s core and a PBX for a given MSISDN (a unique number that identifies a mobile phone on a network). "),(0,r.kt)("p",null,"Virtual SIP registrations are used to alter default call behavior and involve (e.g. a) PBX into the SIP signaling path. For mortals, this simply means that a phone call into a network can be answered, closed or routed somewhere. You can also think about it as registering and unregistering on the network. "),(0,r.kt)("img",{width:"40%",align:"right",style:{display:"block",margin:"auto 10px"},src:a(47185).Z}),(0,r.kt)("p",null,"Developers don\u2019t need a lot of knowledge about the ",(0,r.kt)("a",{parentName:"p",href:"https://www.nextiva.com/voip-definitions/call-path.html"},"call path"),", they can use the SIP Breakout API to get signaling to their PBXs, voicemail systems and other SIP-enabled services. "),(0,r.kt)("p",null,"The API is implemented as a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/GRPC"},"gRPC")," service. We believe it is a more reliable way of implementing and supporting almost any language. When we dropped our first batch of public APIs back in March, we also explained why we\u2019ve chosen gRPC. "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://v1.docs.wgtwo.com/guide/sipbreakout/v1/how-to-use-sipbreakout-api.html#prerequisites"},"SIP Breakout")," is available as a public API. You can play around with it in our sandbox right now."))}g.isMDXComponent=!0},47185:function(e,t,a){t.Z=a.p+"461ba186cb154f3e3ce72045a0b1805f.png"},90780:function(e,t,a){t.Z=a.p+"assets/images/fruit-landscape-905e461605c84836e7d8eebe58887810.png"}}]);