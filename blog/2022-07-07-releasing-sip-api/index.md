---
slug: releasing-sip-breakout-api
title: "Hello abundance, bye-bye complexity: With this new public API you can plug multiple switchboards into the call path - without knowing what a call path is"
date: 2022-07-07
tags: [saas, operators, api, sip, pbx, developers]
authors: [noy]
image: ./fruit-landscape.png
---
We love making telecom easier and scalable. This week we’ve released [SIP Breakout](https://v1.docs.wgtwo.com/guide/sipbreakout/v1/how-to-use-sipbreakout-api.html#prerequisites), a new public API from Working Group Two. It simplifies the process of deploying SIP-enabled services, such as a PBX.

![Abundance of fruit in market stall](./fruit-landscape.png)

<!--truncate-->


The [SIP Breakout](https://v1.docs.wgtwo.com/guide/sipbreakout/v1/how-to-use-sipbreakout-api.html#prerequisites) allows for configuration on a per-subscription basis, which means that operators on the Working Group Two platform can easily offer a range of different SIP-services to their customers. The typical example is a PBX, otherwise known as a switchboard. 

Meanwhile a product developer - say, a company that makes PBXs for a living - benefits from implementing their product once for all operators on the platform. That means no major new development project every time, but a one-time implementation on a standardized and well-documented public API. (Insert upbeat music here). 

> **Fact box**
Hold on a second, what’s a SIP? A Session Initiation Protocol (SIP) session is any live communication, such as phone calls, conferencing and even video. The “protocol” part of the term just means that it’s a set of universal standards for computer communication. Typical examples of a SIP-enabled service are phone calls with Voice over IP, switchboard/PBX and even computer games.

So what’s in it for people using the mobile network? This means that when your local plumbing company or that huge global accounting firm asks their mobile operator for a PBX to help them manage calls and messages with their customers they don’t get a one-size-fits-all solution. The operator can offer them a variety of solutions and usage-based, scalable pricing models. 

**Let’s drill down a bit further.** 

By introducing our new SIP Breakout API we open up our core network to a range of SIP-enabled products. This is significant because SIP products are a bit more complex than other products. So simplifying and standardizing the process makes a difference. The new API allows PBX providers to plug their SIP-enabled endpoints into the call path. This establishes a session integration between Working Group Two’s core and a PBX for a given MSISDN (a unique number that identifies a mobile phone on a network). 

Virtual SIP registrations are used to alter default call behavior and involve (e.g. a) PBX into the SIP signaling path. For mortals, this simply means that a phone call into a network can be answered, closed or routed somewhere. You can also think about it as registering and unregistering on the network. 

<img
  width="40%"
  align="right"
  style={{
    display: "block",
    margin:"auto 10px"
  }}
  src={require("!file-loader!./fruit-small.png").default}
/>

Developers don’t need a lot of knowledge about the [call path](https://www.nextiva.com/voip-definitions/call-path.html), they can use the SIP Breakout API to get signaling to their PBXs, voicemail systems and other SIP-enabled services. 

The API is implemented as a [gRPC](https://en.wikipedia.org/wiki/GRPC) service. We believe it is a more reliable way of implementing and supporting almost any language. When we dropped our first batch of public APIs back in March, we also explained why we’ve chosen gRPC. 

[SIP Breakout](https://v1.docs.wgtwo.com/guide/sipbreakout/v1/how-to-use-sipbreakout-api.html#prerequisites) is available as a public API. You can play around with it in our sandbox right now. 