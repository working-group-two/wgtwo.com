---
slug: what-we-build-right-now-june22
title: "What we're building on the platform right now: 5GSA, 5GNSA, OCS, content filtering, VoNR, VoLTE on sXGP, VoLTE roaming, support for PBX from Telavox... and more "
date: 2022-06-23
tags: [saas, operators, 5g, ocs, vonr, volte, pbx, building-now]
authors: [tor-odland]
image: ./teamtalking.jpg
---

Our global mobile core platform is rapidly evolving. Here's what the team is building right now.

![Working Group Two team talking](./teamtalking.jpg)

<!--truncate-->

### Action on the platform
We’ve completed end-to-end testing for **5G Standalone** (5G SA) - both for large scale MNOs as well as for Fixed Wireless Access and Private Networks. Our as-a-service model and programmable core capabilities allow for high performance, operational simplicity and reduced costs for 5G SA.

**5G Non-Standalone** (5G NSA) is in production. NSA makes it easier for operators to deploy a 5G network - because they can reuse current 4G facilities. Together with 2G/3G full-MVNO/national roaming capabilities and full 4G/5G capabilities operators can now get a “G-neutral” core network.

**Telavox**, a leading UCaaS provider from the Nordics, is now live on the Working Group Two platform - which means that we have integrated their mobile unified comms technology and PBX on our platform via an API. [Telavox](https://telavox.com) is known for an excellent user experience and a strong feature set and we believe they are one of the most attractive global providers of UCaaS and PBX services.

<img
  width="40%"
  align="right"
  style={{
    display: "block",
    margin:"auto 10px"
  }}
  src={require("!file-loader!./anna.jpg").default}
/>

We have developed interfaces that enable **real-time online charging control** (Gy/Ro) and have gone live with this capability with our first OCS/BSS partners.

Want to control content? This spring, we enabled **content filtering** on our platform, providing control on a per-subscriber basis. The integration uses the Internet Content Adaptation Protocol [(ICAP)](https://en.wikipedia.org/wiki/Internet_Content_Adaptation_Protocol) for inspecting HTTP-based traffic and DNS-based filtering of data traffic. This system can be used for everything from parental control to enforcing corporate policies.


### Voice is on your lips
Voice continues to be relevant across “Gs”, usage areas and handset types. With our unique approach, we can rapidly adapt our voice stack to emerging needs - such as:

Enabling voice for **5G Standalone** (VoNR) is in the works. We see the strong effects of taking a platform approach, where adding VoNR becomes a relatively straightforward exercise.

We continue getting our **IMS stack certified for an increasing number of handsets** across several markets and operator codes. We can see the effects of our platform approach here as well, where each device, operator and market becomes easier. A new operator on the platform can with confidence know that certifications will be passed and carrier bundles issued.

<img
  width="40%"
  align="right"
  style={{
    display: "block",
    margin:"auto 10px"
  }}
  src={require("!file-loader!./nicholas_anna.jpg").default}
/>

In **Japan** we have a fantastic demo where the customer can plug in a base station, and minutes later be able to make VoLTE calls between devices in a private network setting. Japan has for a long time had what they call sXGP (a standard for unlicensed 4G  spectrum). At Working Group Two we are building a complete private network solution that in addition to data, also includes includes communication services.

We’re **rolling out VoLTE roaming** with a major IoT player. Voice might not be the biggest business area for IoT, but without it, many IoT players will struggle to satisfy customer demands. We can offer speed, simplicity and affordability for operators that require VoLTE-as-a-service.
