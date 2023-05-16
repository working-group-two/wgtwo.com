"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[6418],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?i.createElement(g,a(a({ref:t},c),{},{components:n})):i.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3167:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var i=n(87462),o=n(63366),r=(n(67294),n(3905)),a=["components"],s={slug:"vowifi-imsi-leak/",title:"VoWifi leaking IMSI",date:new Date("2020-03-30T00:00:00.000Z"),tags:["telco","4G","ePDG","VoWifi","networking","security"],authors:"roger-skjetlein"},l=void 0,p={permalink:"/jp/blog/vowifi-imsi-leak/",editUrl:"https://github.com/working-group-two/wgtwo.com/edit/main/blog/../blog/2020-03-30-catch-imsi-from-vowifi-session.md",source:"@site/../blog/2020-03-30-catch-imsi-from-vowifi-session.md",title:"VoWifi leaking IMSI",description:"4G offers more services than the earlier generation such as 3G and 2G. One of",date:"2020-03-30T00:00:00.000Z",formattedDate:"March 30, 2020",tags:[{label:"telco",permalink:"/jp/blog/tags/telco"},{label:"4G",permalink:"/jp/blog/tags/4-g"},{label:"ePDG",permalink:"/jp/blog/tags/e-pdg"},{label:"VoWifi",permalink:"/jp/blog/tags/vo-wifi"},{label:"networking",permalink:"/jp/blog/tags/networking"},{label:"security",permalink:"/jp/blog/tags/security"}],readingTime:5.335,hasTruncateMarker:!0,authors:[{name:"Roger Skjetlein",title:"Senior Software Engineer",url:"https://www.linkedin.com/in/rskjetlein/",imageURL:"/img/author-photos/rs.jpg",key:"roger-skjetlein"}],frontMatter:{slug:"vowifi-imsi-leak/",title:"VoWifi leaking IMSI",date:"2020-03-30T00:00:00.000Z",tags:["telco","4G","ePDG","VoWifi","networking","security"],authors:"roger-skjetlein"},prevItem:{title:"Choosing an Erlang formatter",permalink:"/jp/blog/choosing-erlang-formatter/"},nextItem:{title:"Extending Kubernetes for our needs",permalink:"/jp/blog/extending-k8s/"}},c={authorsImageUrls:[void 0]},u=[{value:"What is IMSI",id:"what-is-imsi",level:2},{value:"Security implications",id:"security-implications",level:3},{value:"How VoWifi works",id:"how-vowifi-works",level:2},{value:"EPDG exposed on the public internet",id:"epdg-exposed-on-the-public-internet",level:2},{value:"The problem",id:"the-problem",level:2},{value:"EAP-AKA exposes identity",id:"eap-aka-exposes-identity",level:3},{value:"Solution",id:"solution",level:4},{value:"Fake Ipsec termination exposes identity",id:"fake-ipsec-termination-exposes-identity",level:3},{value:"Solution",id:"solution-1",level:4},{value:"Raspberry PI 4",id:"raspberry-pi-4",level:2}],d={toc:u},h="wrapper";function g(e){var t=e.components,s=(0,o.Z)(e,a);return(0,r.kt)(h,(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"4G offers more services than the earlier generation such as 3G and 2G. One of\nthe services has really have gained traction later years is VoLTE (Voice\nover LTE) and VoWifi (Voice over Wifi) that we will go more in dept regarding security."),(0,r.kt)("p",null,"VoWifi is beneficial in terms being able to use any Wifi connection offering public\ninternet access thus extending and improving the coverage and connectivity.\nThink of it as building our own cellular network, but\nusing commodity wifi components instead and avoiding the strict regulation and\nlicensing of spectrum."),(0,r.kt)("h2",{id:"what-is-imsi"},"What is IMSI"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The international mobile subscriber identity (IMSI) is a number that uniquely\nidentifies every user of a cellular network. It is stored as a 64-bit field\nand is sent by the mobile device to the network. It is also used for acquiring\nother details of the mobile in the home location register (HLR) or as locally\ncopied in the visitor location register. To prevent eavesdroppers from\nidentifying and tracking the subscriber on the radio interface, the IMSI is sent\nas rarely as possible and a randomly-generated TMSI is sent instead.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/International_mobile_subscriber_identity"},"IMSI article"))),(0,r.kt)("h3",{id:"security-implications"},"Security implications"),(0,r.kt)("p",null,"The IMSI is a secret identifier stored on the sim and can be exploited in many\nways once known. It is bound to the sim, so changing UE will not help."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Locating user (UE)"),(0,r.kt)("li",{parentName:"ul"},"Intercepting calls"),(0,r.kt)("li",{parentName:"ul"},"Intercepting SMS (stealing two factor pin eg.)"),(0,r.kt)("li",{parentName:"ul"},"..and more")),(0,r.kt)("h2",{id:"how-vowifi-works"},"How VoWifi works"),(0,r.kt)("p",null,"When your phone is connected to datanetwork and with volte and vowifi enabled\nthe device (UE) establish sip session directly to packetgateway via 4g, and via\npublic internet to epdg (evolved packet data gateway) which is in essence a\nipsec (ikev2) termination using SIM-AKA to authenticate UE. The ipsec comes into\nplay since epdg is exposed publicly."),(0,r.kt)("p",null,"We won't go further in depth for volte and vowifi since there are already\nexcellent articles about the matter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Voice_over_WLAN"},"Voice over WLAN")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Voice_over_LTE"},"Voice over LTE"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"VoWifi topology",src:n(48198).Z,width:"672",height:"280"})),(0,r.kt)("p",null,"To enable VoWifi on your device, please refer to your device manufacturer website:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/phoneapp/answer/2811843?hl=en"},"Android")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.apple.com/en-in/HT203032"},"Apple"))),(0,r.kt)("p",null,"Also check on your operator website if VoWifi is supported in your region. Please note that VoWifi is usually blocked when roaming."),(0,r.kt)("h2",{id:"epdg-exposed-on-the-public-internet"},"EPDG exposed on the public internet"),(0,r.kt)("p",null,"The Evolved Packet Data Gateway needs to be publicly available on the internet\nsince UE needs to access it from an arbitrary no-trusted connection. The ipsec\nwill secure and encrypt both the data and maintain the integrity of the\nconnection throughout the session."),(0,r.kt)("p",null,"The UE finds the epdg termination point by looking dns records partly following\na convention decided by 3gpp and typically looks like this in DNS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"epdg.epc.mnc999.mcc999.pub.3gppnetwork.org. 3488 IN A 1.2.3.4\nepdg.epc.mnc999.mcc999.pub.3gppnetwork.org. 3488 IN A 5.6.7.8\n")),(0,r.kt)("p",null,"From the DNS records we recognize the network operator (MNC) and the\ncountry code (MCC)."),(0,r.kt)("p",null,"The DNS records are registered under a delegated domain owned by GSMA and\nusually are redelegated to operator under their own umbrella, like the example\nmnc999.mcc999.pub.3gppnetwork.org."),(0,r.kt)("h2",{id:"the-problem"},"The problem"),(0,r.kt)("p",null,"When UE establish session to epdg it uses a vpn, a ipsec relationship using\nIKEv2 for authentication, encryption and integrity."),(0,r.kt)("p",null,"So far the implementation works as intended and provides good security through\nencryption and security."),(0,r.kt)("p",null,"The problem is not the VoWifi per see, by rather how ipsec establish the\nsession. When UE connects to the epdg, it acts as a initiator and the epdg is\ninherently passive since it cannot know where from (ip) the UE will come from."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sim-aka flow",src:n(57046).Z,width:"464",height:"450"})),(0,r.kt)("h3",{id:"eap-aka-exposes-identity"},"EAP-AKA exposes identity"),(0,r.kt)("p",null,"Vowifi as mentioned earlier utilises an encryption protocol based on the widely\nadopted Extensible Authentication Protocol. EAP itself is just a protocol and\ndoes not define the contents of the data or how exact the data exchanges look\nlike. EAP-AKA unfortunately exposes the unencrypted user identity during\nthe authentication session and in this case the user identity is equal to the\nimsi."),(0,r.kt)("h4",{id:"solution"},"Solution"),(0,r.kt)("p",null,"This is the hardest problem to solve since it needs a security layer or settings\nthat comes before ipsec starts to connect."),(0,r.kt)("p",null,"The proposed solutions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Force the use of conservative peer for eap-aka/sim\nand use pseudonym identity (tmsi) to avoid exposing imsi."),(0,r.kt)("li",{parentName:"ul"},"Enable EAP-TTLS in addition to EAP-AKA/SIM"),(0,r.kt)("li",{parentName:"ul"},"Only connect trusted/encrypted AP's")),(0,r.kt)("h3",{id:"fake-ipsec-termination-exposes-identity"},"Fake Ipsec termination exposes identity"),(0,r.kt)("p",null,"By impersonating a epdg by redirecting all dns requests for any\n",(0,r.kt)("inlineCode",{parentName:"p"},"pub.3gppnetwork.org.")," to our own fake ipsec termination providing just enough\nto catch the imsi."),(0,r.kt)("p",null,"A raspberry pie can easily be setup to constantly scan for open wifi networks,\nthen impersonating the ssid in hope of lure ue's to connect. Any UE set to use\nVoWiFi connecting to the fake access point will give away their imsi."),(0,r.kt)("p",null,"A wifi ssid scan example of what we can automate. In this case the Isfjell-Guest\nwould have been picked to catch imsi since its open and unencrypted:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"wifi-ssid",src:n(8004).Z,width:"474",height:"109"})),(0,r.kt)("p",null,"Snippet from the ipsec termination, UE (iPhone 8) exposes imsi several times:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"13[ENC] parsed IKE_AUTH request 2 [ EAP/RES/AKA ]\n13[IKE] '09999994511******@wlan.mnc999.mcc999.3gppnetwork.org' is not a reauth identity\n13[IKE] '09999994511******@wlan.mnc999.mcc999.3gppnetwork.org' is not a pseudonym\n13[IKE] received identity '09999994511******@wlan.mnc999.mcc999.3gppnetwork.org'\n13[IKE] no EAP key found for 09999994511******@wlan.mnc999.mcc999.3gppnetwork.org to authenticate with AKA\n13[LIB] tried 0 SIM providers, but none had a quintuplet for '09999994511******@wlan.mnc999.mcc999.3gppnetwork.org'\n13[IKE] failed to map pseudonym/reauth identity '09999994511******@wlan.mnc999.mcc999.3gppnetwork.org', fallback to permanent identity request\n13[ENC] generating IKE_AUTH response 2 [ EAP/REQ/AKA ]\n13[NET] sending packet: from 192.168.17.1[500] to 192.168.17.24[500] (92 bytes)\n09[NET] received packet: from 192.168.17.24[500] to 192.168.17.1[500] (140 bytes)\n09[ENC] parsed IKE_AUTH request 3 [ EAP/RES/AKA ]\n09[IKE] received identity '09999994511******@wlan.mnc999.mcc999.3gppnetwork.org'\n09[IKE] no EAP key found for 09999994511******@wlan.mnc999.mcc999.3gppnetwork.org to authenticate with AKA\n09[LIB] tried 0 SIM providers, but none had a quintuplet for '09999994511******@wlan.mnc999.mcc999.3gppnetwork.org'\n09[IKE] EAP method EAP_AKA failed for peer 09999994511******@nai.epc.mnc999.mcc999.3gppnetwork.org\n09[ENC] generating IKE_AUTH response 3 [ EAP/FAIL ]\n")),(0,r.kt)("h4",{id:"solution-1"},"Solution"),(0,r.kt)("p",null,"Ipsec clients (UE) are able to verify the identity of the epdg by requesting\nand validating a machine certificate proving it is the actual service belonging\nto the requested dns address. This means when the client connects, the server\nhas to provide a valid certificate containing the dns names and signed by a\ntrusted CA."),(0,r.kt)("h2",{id:"raspberry-pi-4"},"Raspberry PI 4"),(0,r.kt)("p",null,"The specific physical setup used for testing. Older PI's should work just fine and also\nother platforms that can run dnsmasq, tshark and strongswan for ipsec with\nsupport for eap-aka/sim."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rpi4 and battery",src:n(83611).Z,width:"640",height:"480"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"white box is the rpi4 in a original casing and gray box is a battery bank")))}g.isMDXComponent=!0},83611:function(e,t,n){t.Z=n.p+"assets/images/rpi4-batt-331b622857ead4ba1f8081397efe866f.jpg"},57046:function(e,t,n){t.Z=n.p+"assets/images/sim-aka-a216f5fd634021b704462a689f2df6ae.png"},48198:function(e,t,n){t.Z=n.p+"assets/images/vowifi-ed900be33ec8a7b58034fb2e5a8a8dca.jpg"},8004:function(e,t,n){t.Z=n.p+"assets/images/wlan-ssid-8239810014d356e06b17543cf45951d2.png"}}]);