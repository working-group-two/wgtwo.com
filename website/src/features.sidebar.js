export default [
  {
    label: 'Messaging',
    type: 'category',
    items: [
      {
        name: 'SMSC',
        href: '/smsc',
        tooltipText: "The short message service center (SMSC) is the portion of a mobile phone network that handles text message operations. It is responsible for receiving, storing, routing and forwarding SMS messages from mobile handsets. It is also referred to as a short message service -- service center (SMS-SC)."
      },
      { name: 'SMS Router', href: '/sms-router' },
      {
        name: 'SMS GW',
        href: '/sms-gw',
        tooltipText: "An SMS gateway allows a computer to send or receive text messages in the form of Short Message Service transmissions between local and/or international telecommunications networks."
      },
      {
        name: 'IP-SM-GW',
        href: '/ip-sm-gw',
        tooltipText: "The IP Short Message Gateway is an IMS Application Server which handles SIP based messaging services for IMS subscribers. In addition, the IP-SM-GW will interact with the legacy SMSC using MAP signaling in order to allow IMS to SMS conversion and distribution."
      },
      {
        name: 'MMS proxy',
        href: '/mms-proxy',
        tooltipText: "The MMS proxy and MMS port settings allow you to configure an HTTP proxy that will be used only for communicating with the MMS Gateway Server."
      },
      {
        name: 'MMSC',
        href: '/mmsc',
        tooltipText: "The multimedia messaging server center provides a store and forward server for multimedia messages on a mobile network."
      },
      { name: 'MMSC-GW', href: '/mmsc-gw' },
      {
        name: 'Voicemail',
        href: '/voicemail',
        tooltipText: "Voicemail is an electronic system that allows a user to send and store voice messages."
      },
      {
        name: 'SMSF (roadmap)',
        href: '/smsf',
        tooltipText: "The short message service function SMSF supports the transfer of SMS over NAS. The SMSF will conduct subscription checking and relay between the device and the SMSC."
      },
      {
        name: 'SMPP GW',
        href: '/smpp-gw',
        tooltipText: "A short message peer-to-peer (SMPP) is an industry standard for exchanging short message data between External Short Message Entities (ESME), Routing Entities (RE) and Message Centres (MC). It allows applications to send and receive SMS messages to and from mobile devices."
      },
    ]
  },
  {
    label: 'Voice',
    type: 'category',
    items: [
      { name: 'G-MSC', href: '/g-msc' },
      {
        name: 'SBC',
        href: '/sbc',
        tooltipText: "A session border controller (SBC) is a network element deployed to protect SIP based VoIP networks."
      },
      {
        name: 'MTAS/SCC-AS',
        href: '/mtas-scc-as',
        tooltipText: "Service Centralization and Continuity Application Server (SCC-AS)  acts as a B2BUA within the IMS architecture. Its role is to facilitate service centralization, as well as coordination of SR-VCC handover procedures."
      },
    ]
  }
]