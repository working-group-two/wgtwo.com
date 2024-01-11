(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[8028],{77873:function(e,t){"use strict";t.Z=[{label:"Messaging",icon:"MessageSquare",color:"#4457a1",type:"category",items:[{name:"SMSC",href:"/smsc",tooltipText:"The short message service center (SMSC) is the portion of a mobile phone network that handles text message operations. It is responsible for receiving, storing, routing and forwarding SMS messages from mobile handsets. It is also referred to as a short message service -- service center (SMS-SC)."},{name:"SMS Router",href:"/sms-router",tooltipText:"An SMS router is a software component in a telecommunications network that manages the routing and delivery of Short Message Service (SMS) messages between mobile devices and applications. SMS routers act as intermediaries between SMS gateways and mobile network operators, and they are responsible for ensuring that SMS messages are delivered to the correct recipient."},{name:"SMS GW",href:"/sms-gw",tooltipText:"An SMS gateway allows a computer to send or receive text messages in the form of Short Message Service transmissions between local and/or international telecommunications networks."},{name:"IP-SM-GW",href:"/ip-sm-gw",tooltipText:"The IP Short Message Gateway is an IMS Application Server which handles SIP based messaging services for IMS subscribers. In addition, the IP-SM-GW will interact with the legacy SMSC using MAP signaling in order to allow IMS to SMS conversion and distribution."},{name:"MMS proxy",href:"/mms-proxy",tooltipText:"The MMS proxy and MMS port settings allow you to configure an HTTP proxy that will be used only for communicating with the MMS Gateway Server."},{name:"MMSC",href:"/mmsc",tooltipText:"The multimedia messaging server center provides a store and forward server for multimedia messages on a mobile network."},{name:"MMSC-GW",href:"/mmsc-gw"},{name:"SMPP GW",href:"/smpp-gw",tooltipText:"A short message peer-to-peer (SMPP) is an industry standard for exchanging short message data between External Short Message Entities (ESME), Routing Entities (RE) and Message Centres (MC). It allows applications to send and receive SMS messages to and from mobile devices."}]},{label:"Voice",icon:"PhoneCall",color:"#4e6ab6",type:"category",items:[{name:"Voicemail",href:"/voicemail",tooltipText:"Voicemail service is a telecommunications feature that allows callers to leave voice messages when the person they are calling is unavailable or does not answer the phone."},{name:"G-MSC",href:"/g-msc",tooltipText:'G-MSC stands for "Gateway Mobile Switching Center". It is a component in the Global System for Mobile Communications (GSM) network that provides call control and switching functions between the mobile network and the public switched telephone network (PSTN). The G-MSC acts as an interface between the mobile network and the PSTN, and it provides functions such as call routing, call setup and teardown, and call transfer. The G-MSC is responsible for routing incoming calls to the appropriate mobile subscriber and for routing outgoing calls from the mobile subscriber to the appropriate destination. It is a critical component of the GSM network and is essential for enabling mobile subscribers to make and receive calls to and from the PSTN.'},{name:"MRFC",href:"/mrfc",tooltipText:"The MRFC is a component in the IMS architecture that controls media resources in real-time during multimedia communications sessions. It manages resources such as codecs, echo cancellers, and other media processing functions."},{name:"MRFP",href:"/mrfp",tooltipText:"The MRFP is a component in the IMS architecture that performs media processing functions such as audio and video transcoding, mixing, and playback. It is responsible for encoding, decoding, and streaming media content during multimedia communications sessions."},{name:"P/I/S-SCSCF Proxy/Interrogating/Serving",href:"/p-i-s-scscf",tooltipText:"Serving Call Session Control Function. It is a component in the IP Multimedia Subsystem (IMS) architecture used in telecommunications networks. The P/I/S-SCSCF provides session control and routing for voice and multimedia communications, and it acts as an intermediary between the user and the network."},{name:"SBC",href:"/sbc",tooltipText:"A session border controller (SBC) is a network element deployed to protect SIP based VoIP networks."},{name:"TAS",href:"/tas",tooltipText:"A TAS is a software application that provides services to enable voice communications over IP-based networks. It is typically used in telecommunications networks to provide features such as call forwarding, voicemail, and interactive voice response (IVR) systems."},{name:"MTAS/SCC-AS",href:"/mtas-scc-as",tooltipText:"Service Centralization and Continuity Application Server (SCC-AS)  acts as a B2BUA within the IMS architecture. Its role is to facilitate service centralization, as well as coordination of SR-VCC handover procedures."}]},{label:"Data",icon:"Binary",color:"#2874bc",type:"category",items:[{name:"GGSN/PGW",href:"/ggsn-pgw",tooltipText:"Gateway GPRS Support Node (GGSN) is part of the core network that connects GSM-based 3G networks to the Internet. The GGSN, sometimes known as a wireless router, works in tandem with the Serving GPRS Support Node (SGSN) to keep mobile users connected to the Internet and IP-based applications."},{name:"S-GW",href:"/s-gw",tooltipText:"The main function of the Serving Gateway (S-GW) is routing and forwarding of user data packets. It is also responsible for inter-eNB handovers in the U-plane and provides mobility between LTE and other types of networks."},{name:"MME",href:"/mme",tooltipText:"The mobility management entity (MME), manages UE access network and mobility, as well as establishing the bearer path for UE's."},{name:"DNS",href:"/dns",tooltipText:"The Domain Name System(DNS) translates Domain Names into corresponding IP Addresses for example websites and Email addresses are translated into HTTPS URL or SMTP."},{name:"CGNAT",href:"/cgnat",tooltipText:"Carrier-grade NAT (CGNAT) is a type of Network address translation for use in IPv4 network design."},{name:"AMF",href:"/amf",tooltipText:"AMF in 5G manages access and mobility. It simplifies processes by separating control and user data and streamlining session management."},{name:"SMF",href:"/smf",tooltipText:"Service Management Function (SMF) is the set of processes in an IN (Intelligent Network) that support the management of user and/or network information including service data and Service Logic programs that are required for the proper operation of a service."},{name:"UPF",href:"/upf",tooltipText:"The UPF supports features and capabilities to facilitate user plane operation. Examples: packet routing and forwarding, interconnection to the Data Network, policy enforcement and data buffering."}]},{label:"Connectivity",icon:"Plugzap",color:"#3456be",type:"category",items:[{name:"HLR/HSS",href:"/hlr-hss",tooltipText:"The HSS is the master database for a given subscriber, acting as a central repository of information for network nodes."},{name:"UDR",href:"/udr",tooltipText:"The UDR is a converged repository of subscriber information and can be used to service a number of network functions"},{name:"AuC",href:"/auc",tooltipText:"Dedicated Cloud Authentication Center (AuC) engineered to encrypt and decrypt SIM Secrets securely using a HSM solution."},{name:"UDM",href:"/udm",tooltipText:"Unified data management (UDM) is a process where a range of disparate data sources are consolidated to create a single source of data."},{name:"AUSF",href:"/ausf",tooltipText:"Authentication Server Function (AUSF) is used to facilitate 5G security processes."},{name:"AAA",href:"/aaa",tooltipText:"Authentication, Authorization and Accounting (AAA) systems implemented to securely determine the identity and privileges of a user."},{name:"AAA proxy",href:"/aaa-proxy",tooltipText:"An AAA proxy is used when APs send authentication/accounting messages to the controller and the controller forwards these messages to an external AAA server."},{name:"MNP/ENUM",href:"/mnp-enum",tooltipText:"Mobile number portability (MNP) is a service that allows a cellphone or smartphone customer to change telecom carrier and keep the same phone number."},{name:"XCAP",href:"/xcap",tooltipText:"XCAP is used to store application configuration data, in XML format and allows clients to read, write as well as modify the same configuration data."},{name:"Entitlement server",href:"/entitlement-server",tooltipText:"Entitlement Server ensures correct entitlement of VoLTE subscriptions, allowing only authenticated and authorized devices to use the service."}]},{label:"Charging",icon:"Zap",color:"#3e5cce",type:"category",items:[{name:"Charging gateway",href:"/charging-gateway",tooltipText:"Charging gateway function (CGF) is an open, convergent mediation system that supports mediation for voice, data, and content in wired/wireless communication and all-IP environment."},{name:"Real-time billing gateway",href:"/real-time-billing-gateway",tooltipText:"Real time billing involves the authorizing, gathering, rating, and posting of account information either at the time of service request or within a short time afterwards. Real time billing is primarily used for prepaid services such as calling cards or prepaid."},{name:"CHF",href:"/chf",tooltipText:"The Charging Function encompasses support for both prepaid and postpaid billing within the same charging system."}]},{label:"Signaling",icon:"Radio",color:"#117a9b",type:"category",items:[{name:"STP",href:"/stp",tooltipText:"A Signal Transfer Point (STP) is a node in an SS7 network that routes signaling messages based on their destination point code in the SS7 network."},{name:"DRA",href:"/dra",tooltipText:"A Diameter Routing Agent (DRA) provides real-time routing capabilities to ensure that messages are routed among the correct elements in a network."},{name:"SCP",href:"/scp",tooltipText:"A Service Communication Proxy (SCP) provides real-time message forwarding and routing capabilities to a 5G network."},{name:"SS7 Firewall",href:"/ss7-firewall",tooltipText:"The SS7 firewall is a 'signalling firewall' used to protect mobile operators from SS7 Attacks. The SS7 firewall protects legacy networks (SS7 based) specifically against potential attacks, unauthorized senders, malformed messages, stolen mobile identities and much more."}]},{label:"Policy",icon:"Network",color:"#3371b8",type:"category",items:[{name:"Radius",href:"/radius",tooltipText:"Remote Authentication Dial-In User Service (RADIUS) is a protocol used for providing centralized authentication, authorization, and accounting (AAA) management for users who connect and use network resources. RADIUS is commonly used in enterprise networks and internet service provider (ISP) environments to manage user access to network resources."},{name:"PCEF",href:"/pcef",tooltipText:"The Policy and Charging Enforcement Function (PCEF) is a DPI (Deep Packet Inspection) device responsible for the enforcement of rules which have been configured statically or supplied to the PCEF dynamically from the PCRF (Policy and Charging Rules Function)."},{name:"PCRF",href:"/pcrf",tooltipText:"Policy and Charging Rules Function is the software node designated in real-time to determine policy rules in a multimedia network."},{name:"PCF",href:"/pcf",tooltipText:"The policy control function (PCF) determines the resources and services that can be used to support connected devices."}]},{label:"Support",color:"#408eb8",type:"category",items:[{name:"Orchestration and automation"},{name:"Monitoring and alerting"},{name:"Customer service tools and portals"},{name:"24/7 Level 3 On-call"}]},{label:"APIs",color:"#419e98",type:"category",items:[{name:"APIs for developers"},{name:"Develop platform for 3rd party developers"},{name:"Storefront for operators"}]}]},17472:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return R}});var n=a(67294),i=a(19459),o=a(36286),r=a(87365),s="technologyMetrics_G7Dv",l="technologymetrics_SVgC",c="technologymetricsTitle_UXES",m="technologymetricsDescription_L3fO",d=[{name:"527 million",description:"SMSs"},{name:"354 million",description:"voice calls"},{name:"32 million",description:"MMSs"},{name:"3.07 petabyte",description:"data upload"},{name:"30.1 petabyte",description:"data download"},{name:"418 billion",description:"connectivity events"}];var u=function(e){return n.createElement("div",{className:s},d.slice(0,e.length).map((function(e){return n.createElement("div",{className:l,key:e.name},n.createElement("div",{className:c},e.name),n.createElement("div",{className:m},e.description),n.createElement("div",{className:r.Z.spacer}))})))};var p=function(){return n.createElement("div",{className:r.Z.section+" "+r.Z.sectionGray},n.createElement("div",{className:r.Z.container+" "+r.Z.splitContainer},n.createElement("div",{className:r.Z.text},n.createElement("section",null,n.createElement("div",{className:r.Z.pillTitle},"2G")," ",n.createElement("div",{className:r.Z.pillTitle},"3G")," ",n.createElement("div",{className:r.Z.pillTitle},"4G")," ",n.createElement("div",{className:r.Z.pillTitle},"5G")),n.createElement("h2",{className:r.Z.title},"Multi-G Support"),n.createElement("div",{className:r.Z.subtitle},"Our core has multi-G support in that it offers a full MNO core for 4G and 5G, as well as a full MVNO functionality for 2G/3G. This allows operators to build full modern 4G/5G core networks while leveraging national roaming for 2G/3G where necessary. Our core offers the full set of capabilities related to authentication and provisioning, voice, messaging, and data services."))))},h="stats_lc6g",g="ourservice_DKQw",f="ourServiceFeatures__n3i",y=a(13742);function v(){return n.createElement(y.Z,{color:"#4CAF50","margin-right":"2px"})}var w=function(){return n.createElement("div",{className:r.Z.section+" "+r.Z.sectionDark+" "+r.Z.sectionRounded},n.createElement("div",{className:r.Z.container+" "+h}),n.createElement("div",{className:r.Z.container},n.createElement("div",{className:r.Z.centeredText},n.createElement("h2",{className:g},"Our core does not only deliver technology to run a mobile core network but also includes"),n.createElement("div",{className:f},n.createElement("li",null,n.createElement(v,null)," Upgrades / evolution"),n.createElement("li",null,n.createElement(v,null)," Operations (incl. 24/7)"),n.createElement("li",null,n.createElement(v,null)," Support"),n.createElement("li",null,n.createElement(v,null)," Application layer"),n.createElement("li",null,n.createElement(v,null)," Orchestration"),n.createElement("li",null,n.createElement(v,null)," Operating systems"),n.createElement("li",null,n.createElement(v,null)," Infrastructure / hardware"),n.createElement("li",null,n.createElement(v,null)," Networking"),n.createElement("li",null,n.createElement(v,null)," Data centre / power"),n.createElement("li",null,n.createElement(v,null)," Security")))))},S=(a(18309),a(83699)),b=a(97325),E=(a(66508),a(38735)),k=a(77873),T=a(74515),M=(0,T.Z)("ChevronRight",[["polyline",{points:"9 18 15 12 9 6",key:"1rtp27"}]]),x=a(47737),N=a(711),Z=(0,T.Z)("Binary",[["path",{d:"M10 4H6v6h4V4z",key:"7fv97c"}],["path",{d:"M18 14h-4v6h4v-6z",key:"p975cx"}],["path",{d:"M14 4h2v6m-2 0h4",key:"ltejvm"}],["path",{d:"M6 14h2v6m-2 0h4",key:"oct1eo"}]]),I=(0,T.Z)("PlugZap",[["path",{d:"M13 2l-2 2.5h3L12 7",key:"5ewzj2"}],["path",{d:"M12 22v-3",key:"kmzjlo"}],["path",{d:"M10 13v-2.5",key:"1g2mrq"}],["path",{d:"M10 12.5v-2",key:"pcvzbb"}],["path",{d:"M14 12.5v-2",key:"qv1toj"}],["path",{d:"M16 15a2 2 0 00-2-2h-4a2 2 0 00-2 2v2a2 2 0 002 2h4a2 2 0 002-2v-2z",key:"n5y5ym"}]]),A=(0,T.Z)("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),C=(0,T.Z)("Radio",[["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14",key:"1w36u8"}]]),P=(0,T.Z)("Network",[["rect",{x:"9",y:"2",width:"6",height:"6",key:"1iwon9"}],["rect",{x:"16",y:"16",width:"6",height:"6",key:"gonbwd"}],["rect",{x:"2",y:"16",width:"6",height:"6",key:"1q0lzr"}],["path",{d:"M12 8v4m0 0H5v4m7-4h7v4",key:"1sczav"}]]),G=(0,T.Z)("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",y1:"16",x2:"12",y2:"12",key:"dkqlv3"}],["line",{x1:"12",y1:"8",x2:"12.01",y2:"8",key:"1kl4hv"}]]),_=(0,T.Z)("Asterisk",[["path",{d:"M12 6v12",key:"1vza4d"}],["path",{d:"M17.196 9L6.804 15",key:"1hx48j"}],["path",{d:"M6.804 9l10.392 6",key:"at0lmv"}]]),F="/technology/features/";var R=function(){var e=(0,n.useState)(""),t=(e[0],e[1],(0,n.useState)(!1)),a=(t[0],t[1],(0,n.useState)(!1)),s=(a[0],a[1],(0,n.useState)(!1));return s[0],s[1],n.createElement(i.Z,{title:"Technology"},n.createElement("div",{className:r.Z.page},n.createElement("div",{className:r.Z.section},n.createElement("div",{className:r.Z.container},n.createElement("div",{className:r.Z.centeredText},n.createElement("div",{className:r.Z.title},"Let's dig into our core."),n.createElement("div",{className:r.Z.subtitle},n.createElement("br",null),n.createElement("b",null,"wgtwo")," is building a future proof technology that reduces cost and complexity while radically enhancing innovation potential in the telecom industry. Our core is continuously evolving. We improve its security, scalability, redundancy, features, and integrations every day. Leveraging a modern DevSecOps approach, our customers get a continuously improving core network.")))),n.createElement("div",{className:r.Z.section+" "+r.Z.sectionDark+" "+o.Z.technologyMetricsSection},n.createElement("div",{className:r.Z.container},n.createElement("h1",null,"In ",(new Date).getFullYear()-1,", we helped our customers deliver"),n.createElement(u,null))),n.createElement(p,null),n.createElement("div",{className:r.Z.section,style:{marginTop:"0px",paddingTop:"80px",paddingBottom:"120px"}},n.createElement("div",{className:r.Z.container,style:{gap:"0"}},n.createElement("div",{className:r.Z.centeredText},n.createElement("div",{className:r.Z.title},"An all-inclusive platform"),n.createElement("div",{className:r.Z.subtitle},n.createElement("br",null),"Our system offers a comprehensive solution that includes functions covering traditional network interfaces and use-cases. We provide detailed information on the exposed interfaces to ensure seamless integration with existing networks.")),n.createElement("div",{className:o.Z.featureListGrid},k.Z.map((function(e,t){return n.createElement(L,{categoryLabel:e.label,color:e.color,iconName:e.icon,items:e.items,tooltipId:"leftTip",key:t})}))))),n.createElement(w,null),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),n.createElement("div",{className:r.Z.container},n.createElement("div",{className:r.Z.centeredText},n.createElement("div",{className:r.Z.title},"Questions & Answers"))),n.createElement("div",{className:r.Z.container},n.createElement("div",{className:o.Z.questions},n.createElement("div",{className:o.Z.question},n.createElement("div",{className:o.Z.questionQuestion},"Q: What do I gain when migrating my subscribers to wgtwo?"),n.createElement("div",{className:o.Z.answerAnswer},n.createElement("u",null,"Operational simplicity"),": Operators get the services in a managed SaaS model. This implies that we take care of operations, 24/7, upgrades, tickets, moving the operator to the next generation of technology and more.",n.createElement("br",null),n.createElement("u",null,"Architectural simplicity"),": The core is built with inspiration from hyperscalers and modern technology companies. We terminate telco complexity at the edge of the network, which drives simplicity and efficiency on the inside of the network.",n.createElement("br",null),n.createElement("u",null,"Financial simplicity"),": A set-up fee and a SIM fee. Those two elements generally cover our main agreement. We aim for a simple and transparent price annex.",n.createElement("br",null),n.createElement("u",null,"Affordability"),": The choice of operating model, architecture and technology drive radical cost savings that are passed on to our customers.",n.createElement("br",null),n.createElement("u",null,"Faster and lower risk delivery"),": Through pre-integrating all the various functions and nodes, we reduce cost, complexity and time involved in integration and deployment.",n.createElement("br",null),n.createElement("u",null,"Innovation"),": The next \u201cG\u201d in telecom is always significant, but it doesn\u2019t allow one operator to stand out from the rest. We provide operators the ability to do micro-innovation at scale, allowing the launch of many products to fit many segments.")),n.createElement("div",{className:o.Z.question},n.createElement("div",{className:o.Z.questionQuestion},"Q: How many subscribers does wgtwo core support?"),n.createElement("div",{className:o.Z.answerAnswer},"Our core provides operators with a flexible, affordable, fully featured MNO-grade core that can scale down to small private network deployments, and up to operators with millions of subscribers.")))),n.createElement("br",null),n.createElement("br",null),n.createElement("div",{className:r.Z.section+" "+r.Z.sectionDark},n.createElement("div",{className:r.Z.container+" "+r.Z.splitContainer},n.createElement("div",{className:r.Z.text},n.createElement("div",{className:r.Z.title},"You still have a question in mind?")),n.createElement(S.Z,{to:"/contact",className:r.Z.button+" "+r.Z.buttonPrimary},n.createElement(b.Z,{id:"home.cta.contact",description:"contact for the cta section"},"Request a Demo"))))),n.createElement(E.Z,{id:"topTip",place:"top",type:"dark",effect:"solid",delayShow:0,className:r.Z.tooltipStyling+" "+o.Z.tooltipStyling}),n.createElement(E.Z,{id:"leftTip",place:"left",type:"dark",effect:"solid",delayShow:0,className:r.Z.tooltipStyling+" "+o.Z.tooltipStyling}))};function L(e){var t=e.categoryLabel,a=e.color,i=e.iconName,r=e.items,s=e.tooltipId,l=M;if(i)switch(i.toLowerCase()){case"messagesquare":l=x.Z;break;case"phonecall":l=N.Z;break;case"binary":l=Z;break;case"plugzap":l=I;break;case"zap":l=A;break;case"radio":l=C;break;case"network":l=P}return n.createElement("div",{className:o.Z.featureListContainer},n.createElement("h4",{style:{color:a}},n.createElement(l,null)," ",t),n.createElement("ul",{className:o.Z.featureList},r&&r.map((function(e,a){return n.createElement("li",{key:a,"data-tip":e.tooltipText,"data-for":s},n.createElement(D,{category:t,item:e}))}))))}function D(e){e.children;var t=e.category,a=e.item,i=t.toLowerCase(),r=a.tooltipText?n.createElement(G,{className:o.Z.featureInfoIcon}):n.createElement(n.Fragment,null);return a.href?n.createElement(S.Z,{href:""+F+i+a.href,className:o.Z.featureItemLink},n.createElement("div",{className:o.Z.featureBtnIcons},n.createElement(M,{className:o.Z.featureViewIcon})),n.createElement("span",null,a.name),n.createElement("div",{className:o.Z.featureBtnIcons},r)):n.createElement("div",{className:o.Z.featureItemNonLink},n.createElement("div",{className:o.Z.featureBtnIcons},n.createElement(_,{className:o.Z.featureViewIcon})),n.createElement("span",null,a.name),n.createElement("div",{className:o.Z.featureBtnIcons},r))}},66508:function(e){e.exports={validEmail:function(e){return/^[^\s@]+@(?!gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|aol\.com|icloud\.com|zoho\.com|protonmail\.com|gmx\.com|yandex\.com|mail\.com|temp-mail\.org|guerrillamail\.com|10minutemail|mailinator\.com|yopmail\.com|throwawaymail\.com|fakemailgenerator\.com|getnada\.com|tempinbox\.com|mintemail\.com|mailcatch\.com|owlymail\.com|fakeinbox\.com|mytempemail\.com|trashmail\.com|spamgourmet\.com|jetable\.org|mailnesia\.com|inboxbear\.com|mailtemp\.org|mailslurp\.com|33mail\.com|guerrillamail\.net|maildrop\.cc|sharklasers\.com|tempail\.com|spamgourmet\.net|dispostable\.com|tempmailo\.com|mailnesia\.com|getairmail\.com|inboxalias\.com|email\.tst|oastify\.com)[^\s@]+\.[^\s@]+$/i.test(e)},containsAngleBrackets:function(e){return/[<>]+/.test(e)},slugify:function(e){return e.toString().normalize("NFKD").toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-")}}},18309:function(e,t,a){"use strict";function n(e){return fetch(atob("aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVDdCOTlMQkRNL0IwMzEwRjYxVUNDLzdJclRyckFZcmNlbUxXTTZicjhtNUJFWQ=="),{method:"POST",body:'{"text":"'+e.replace(/"/g,'\\"')+'"}'})}a.d(t,{Z:function(){return n}})},13742:function(e,t,a){"use strict";var n=(0,a(74515).Z)("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]);t.Z=n},47737:function(e,t,a){"use strict";var n=(0,a(74515).Z)("MessageSquare",[["path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",key:"oy5hii"}]]);t.Z=n},711:function(e,t,a){"use strict";var n=(0,a(74515).Z)("PhoneCall",[["path",{d:"M14.05 6A5 5 0 0118 10m-3.95-8a9 9 0 018 7.94m0 7v3a2 2 0 01-2 2h-.19a19.79 19.79 0 01-8.63-3.07 19.52 19.52 0 01-6-6 19.82 19.82 0 01-3.11-8.69A2 2 0 013.93 2h3.18a2 2 0 012 1.72 13 13 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 13 13 0 002.81.7A2 2 0 0122 16.92z",key:"e46vlz"}]]);t.Z=n},87365:function(e,t){"use strict";t.Z={page:"page_piww",section:"section__3bA",sectionDark:"sectionDark_KAsb",sectionGray:"sectionGray_SixO",sectionRounded:"sectionRounded_VQHU",sectionLessBottom:"sectionLessBottom_QqRu",container:"container_tgP7",splitContainer:"splitContainer_VmcT",title:"title_frhT",subtitle:"subtitle_DVvy",subtitleJp:"subtitleJp_VtvY",pillTitle:"pillTitle_HzMn",pillTechnology:"pillTechnology_d5Uk",text:"text_UbJI",centeredText:"centeredText_vse1",button:"button_YvcK",buttonPrimary:"buttonPrimary_kGIc",spacer:"spacer_SqUp",tooltipStyling:"tooltipStyling_Iy7j"}},36286:function(e,t){"use strict";t.Z={priceTiers:"priceTiers_miou",priceTier:"priceTier_iypI",priceTierTitle:"priceTierTitle_RARf",priceTierDescription:"priceTierDescription_cQch",priceTierFeatures:"priceTierFeatures__L3C",price:"price_Ol2y",featureListGrid:"featureListGrid_InOc",featureListContainer:"featureListContainer_GKFT",featureList:"featureList_XdnN",featureItemLink:"featureItemLink_IkNb",featureItemNonLink:"featureItemNonLink_KFkK",featureBtnIcons:"featureBtnIcons_Gt54",featureViewIcon:"featureViewIcon_Rgv0",featureInfoIcon:"featureInfoIcon_r0K4",featureAddIcon:"featureAddIcon_mKiA",tooltipStyling:"tooltipStyling_Vc3x",featureGrid:"featureGrid_tl7S",featureGridHeader:"featureGridHeader_OSxa",check:"check_dA4j",questions:"questions_SWYw",question:"question_lHKB",questionQuestion:"questionQuestion_cXZd",technologyMetricsSection:"technologyMetricsSection_k4hd",link:"link_XWuN",hr:"hr_bwWI"}}}]);