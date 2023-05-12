/** Something about "href" pointing to wgtwo.com/technology/features/{category}/{href} **/

export default [
  {
    label: "Messaging",
    icon: "MessageSquare",
    color: "#4457a1",
    type: "category",
    items: [
      {
        name: "SMSC",
        href: "/smsc",
        tooltipText:
          "The short message service center (SMSC) is the portion of a mobile phone network that handles text message operations. It is responsible for receiving, storing, routing and forwarding SMS messages from mobile handsets. It is also referred to as a short message service -- service center (SMS-SC).",
      },
      {
        name: "SMS Router",
        href: "/sms-router",
        tooltipText:
          "An SMS router is a software component in a telecommunications network that manages the routing and delivery of Short Message Service (SMS) messages between mobile devices and applications. SMS routers act as intermediaries between SMS gateways and mobile network operators, and they are responsible for ensuring that SMS messages are delivered to the correct recipient.",
      },
      {
        name: "SMS GW",
        href: "/sms-gw",
        tooltipText:
          "An SMS gateway allows a computer to send or receive text messages in the form of Short Message Service transmissions between local and/or international telecommunications networks.",
      },
      {
        name: "IP-SM-GW",
        href: "/ip-sm-gw",
        tooltipText:
          "The IP Short Message Gateway is an IMS Application Server which handles SIP based messaging services for IMS subscribers. In addition, the IP-SM-GW will interact with the legacy SMSC using MAP signaling in order to allow IMS to SMS conversion and distribution.",
      },
      {
        name: "MMS proxy",
        href: "/mms-proxy",
        tooltipText:
          "The MMS proxy and MMS port settings allow you to configure an HTTP proxy that will be used only for communicating with the MMS Gateway Server.",
      },
      {
        name: "MMSC",
        href: "/mmsc",
        tooltipText:
          "The multimedia messaging server center provides a store and forward server for multimedia messages on a mobile network.",
      },
      { name: "MMSC-GW", href: "/mmsc-gw" },
      {
        name: "SMPP GW",
        href: "/smpp-gw",
        tooltipText:
          "A short message peer-to-peer (SMPP) is an industry standard for exchanging short message data between External Short Message Entities (ESME), Routing Entities (RE) and Message Centres (MC). It allows applications to send and receive SMS messages to and from mobile devices.",
      },
    ],
  },
  {
    label: "Voice",
    icon: "PhoneCall",
    color: "#4e6ab6",
    type: "category",
    items: [
      {
        name: "Voicemail",
        href: "/voicemail",
        tooltipText:
          "Voicemail service is a telecommunications feature that allows callers to leave voice messages when the person they are calling is unavailable or does not answer the phone.",
      },
      {
        name: "G-MSC",
        href: "/g-msc",
        tooltipText:
          'G-MSC stands for "Gateway Mobile Switching Center". It is a component in the Global System for Mobile Communications (GSM) network that provides call control and switching functions between the mobile network and the public switched telephone network (PSTN). The G-MSC acts as an interface between the mobile network and the PSTN, and it provides functions such as call routing, call setup and teardown, and call transfer. The G-MSC is responsible for routing incoming calls to the appropriate mobile subscriber and for routing outgoing calls from the mobile subscriber to the appropriate destination. It is a critical component of the GSM network and is essential for enabling mobile subscribers to make and receive calls to and from the PSTN.',
      },
      {
        name: "MRFC",
        href: "/mrfc",
        tooltipText:
          "The MRFC is a component in the IMS architecture that controls media resources in real-time during multimedia communications sessions. It manages resources such as codecs, echo cancellers, and other media processing functions.",
      },
      {
        name: "MRFP",
        href: "/mrfp",
        tooltipText:
          "The MRFP is a component in the IMS architecture that performs media processing functions such as audio and video transcoding, mixing, and playback. It is responsible for encoding, decoding, and streaming media content during multimedia communications sessions.",
      },
      {
        name: "P/I/S-SCSCF Proxy/Interrogating/Serving",
        href: "/p-i-s-scscf",
        tooltipText:
          "Serving Call Session Control Function. It is a component in the IP Multimedia Subsystem (IMS) architecture used in telecommunications networks. The P/I/S-SCSCF provides session control and routing for voice and multimedia communications, and it acts as an intermediary between the user and the network.",
      },
      {
        name: "SBC",
        href: "/sbc",
        tooltipText:
          "A session border controller (SBC) is a network element deployed to protect SIP based VoIP networks.",
      },
      {
        name: "TAS",
        href: "/tas",
        tooltipText:
          "A TAS is a software application that provides services to enable voice communications over IP-based networks. It is typically used in telecommunications networks to provide features such as call forwarding, voicemail, and interactive voice response (IVR) systems.",
      },
      {
        name: "MTAS/SCC-AS",
        href: "/mtas-scc-as",
        tooltipText:
          "Service Centralization and Continuity Application Server (SCC-AS)  acts as a B2BUA within the IMS architecture. Its role is to facilitate service centralization, as well as coordination of SR-VCC handover procedures.",
      },
    ],
  },
  {
    label: "Data",
    icon: "Binary",
    color: "#2874bc",
    type: "category",
    items: [
      {
        name: "GGSN/PGW",
        href: "/ggsn-pgw",
        tooltipText:
          "Gateway GPRS Support Node (GGSN) is part of the core network that connects GSM-based 3G networks to the Internet. The GGSN, sometimes known as a wireless router, works in tandem with the Serving GPRS Support Node (SGSN) to keep mobile users connected to the Internet and IP-based applications.",
      },
      {
        name: "S-GW",
        href: "/s-gw",
        tooltipText:
          "The main function of the Serving Gateway (S-GW) is routing and forwarding of user data packets. It is also responsible for inter-eNB handovers in the U-plane and provides mobility between LTE and other types of networks.",
      },
      {
        name: "MME",
        href: "/mme",
        tooltipText:
          "The mobility management entity (MME), manages UE access network and mobility, as well as establishing the bearer path for UE's.",
      },
      {
        name: "DNS",
        href: "/dns",
        tooltipText:
          "The Domain Name System (DNS) translates Domain Names into corresponding IP Addresses for example websites and Email addresses are translated into HTTPS URL or SMTP.",
      },
      {
        name: "CGNAT",
        href: "/cgnat",
        tooltipText:
          "Carrier-grade NAT (CGNAT) is a type of Network address translation for use in IPv4 network design.",
      },
      {
        name: "AMF",
        href: "/amf",
        tooltipText:
          "The Authentication Management Field (AMF) is a 16 bit value which is used to set the acceptable synchronization window in both the UE (User Equipment) and the network.",
      },
      {
        name: "SMF",
        href: "/smf",
        tooltipText:
          "Service Management Function (SMF) is the set of processes in an IN (Intelligent Network) that support the management of user and/or network information including service data and Service Logic programs that are required for the proper operation of a service.",
      },
      {
        name: "UPF",
        href: "/upf",
        tooltipText:
          "The UPF supports features and capabilities to facilitate user plane operation. Examples: packet routing and forwarding, interconnection to the Data Network, policy enforcement and data buffering.",
      },
    ],
  },
  {
    label: "Connectivity",
    color: "#3456be",
    type: "category",
    items: [
      {
        name: "HLR/HSS",
        href: "/hlr-hss",
        tooltipText:
          "The HSS is the master database for a given subscriber, acting as a central repository of information for network nodes.",
      },
      {
        name: "UDR",
        href: "/udr",
        tooltipText:
          "The UDR is a converged repository of subscriber information and can be used to service a number of network functions",
      },
      {
        name: "AuC",
        href: "/auc",
        tooltipText:
          "Dedicated Cloud Authentication Center (AuC) engineered to encrypt and decrypt SIM Secrets securely using a HSM solution.",
      },
      {
        name: "UDM",
        href: "/udm",
        tooltipText:
          "Unified data management (UDM) is a process where a range of disparate data sources are consolidated to create a single source of data.",
      },
      {
        name: "AUSF",
        href: "/ausf",
        tooltipText:
          "Authentication Server Function (AUSF) is used to facilitate 5G security processes.",
      },
      {
        name: "AAA",
        href: "/aaa",
        tooltipText:
          "Authentication, Authorization and Accounting (AAA) systems implemented to securely determine the identity and privileges of a user.",
      },
      {
        name: "AAA proxy",
        href: "/aaa-proxy",
        tooltipText:
          "An AAA proxy is used when APs send authentication/accounting messages to the controller and the controller forwards these messages to an external AAA server.",
      },
      {
        name: "MNP/ENUM",
        href: "/mnp-enum",
        tooltipText:
          "Mobile number portability (MNP) is a service that allows a cellphone or smartphone customer to change telecom carrier and keep the same phone number.",
      },
      {
        name: "XCAP",
        href: "/xcap",
        tooltipText:
          "XCAP is used to store application configuration data, in XML format and allows clients to read, write as well as modify the same configuration data.",
      },
      {
        name: "Entitlement server",
        href: "/entitlement-server",
        tooltipText:
          "Entitlement Server ensures correct entitlement of VoLTE subscriptions, allowing only authenticated and authorized devices to use the service.",
      },
    ],
  },
  {
    label: "Charging",
    color: "#3e5cce",
    type: "category",
    items: [
      {
        name: "Charging gateway",
        href: "/charging-gateway",
        tooltipText:
          "Charging gateway function (CGF) is an open, convergent mediation system that supports mediation for voice, data, and content in wired/wireless communication and all-IP environment.",
      },
      {
        name: "Real-time billing gateway",
        href: "/real-time-billing-gateway",
        tooltipText:
          "Real time billing involves the authorizing, gathering, rating, and posting of account information either at the time of service request or within a short time afterwards. Real time billing is primarily used for prepaid services such as calling cards or prepaid.",
      },
      {
        name: "CHF",
        href: "/chf",
        tooltipText:
          "The Charging Function encompasses support for both prepaid and postpaid billing within the same charging system.",
      },
    ],
  },
  {
    label: "Signaling",
    color: "#117a9b",
    type: "category",
    items: [
      {
        name: "STP",
        href: "/stp",
        tooltipText:
          "A Signal Transfer Point (STP) is a node in an SS7 network that routes signaling messages based on their destination point code in the SS7 network.",
      },
      {
        name: "DRA",
        href: "/dra",
        tooltipText:
          "A Diameter Routing Agent (DRA) provides real-time routing capabilities to ensure that messages are routed among the correct elements in a network.",
      },
      {
        name: "SS7 Firewall",
        href: "/ss7-firewall",
        tooltipText:
          "The SS7 firewall is a 'signalling firewall' used to protect mobile operators from SS7 Attacks. The SS7 firewall protects legacy networks (SS7 based) specifically against potential attacks, unauthorized senders, malformed messages, stolen mobile identities and much more.",
      },
    ],
  },
  {
    label: "Policy",
    color: "#3371b8",
    type: "category",
    items: [
      {
        name: "Radius",
        href: "/radius",
        tooltipText:
          "Remote Authentication Dial-In User Service (RADIUS) is a protocol used for providing centralized authentication, authorization, and accounting (AAA) management for users who connect and use network resources. RADIUS is commonly used in enterprise networks and internet service provider (ISP) environments to manage user access to network resources.",
      },
      {
        name: "PCEF",
        href: "/pcef",
        tooltipText:
          "The Policy and Charging Enforcement Function (PCEF) is a DPI (Deep Packet Inspection) device responsible for the enforcement of rules which have been configured statically or supplied to the PCEF dynamically from the PCRF (Policy and Charging Rules Function).",
      },
      {
        name: "PCRF",
        href: "/pcrf",
        tooltipText:
          "Policy and Charging Rules Function is the software node designated in real-time to determine policy rules in a multimedia network.",
      },
      {
        name: "PCF",
        href: "/pcf",
        tooltipText:
          "The policy control function (PCF) determines the resources and services that can be used to support connected devices.",
      },
    ],
  },
  {
    label: "Support",
    color: "#408eb8",
    type: "category",
    items: [
      {
        name: "Orchestration and automation",
      },
      {
        name: "Monitoring and alerting",
      },
      {
        name: "Customer service tools and portals",
      },
      {
        name: "24/7 Level 3 On-call",
      },
    ],
  },
  {
    label: "APIs",
    color: "#419e98",
    type: "category",
    items: [
      {
        name: "APIs for developers",
      },
      {
        name: "Develop platform for 3rd party developers",
      },
      {
        name: "Storefront for operators",
      },
    ],
  },
]
