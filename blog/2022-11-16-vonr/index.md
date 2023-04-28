---
slug: first-voice-calls-on-5g
title: We have just completed our first VoNR (5G) calls in a multi-handset environment
date: 2022-11-17
tags: [vonr, 5G, 4G, core, IMS, volte]
authors: [yan, db]
---

import ImgWithCaption from '../components/imgWithCaption'

If that headline was slightly incomprehensible to you, it means that we’ve now made it possible to call pretty much anyone from a 5G-enabled handset that is connected to the Working Group Two 5G core via a 5G antenna. To be clear, we’re not talking about making a “first” Voice over New Radio (VoNR) call (those took place way back in 2021), but about making VoNR calls from a set of major commercial off-the-shelf (COTS) 5G devices to other mobile and fixed handsets. 

<!--truncate-->

As we see it, voice continues to be relevant across “Gs”, usage areas, and handset types. This year, we’ve continued to rapidly adapt our voice stack to emerging needs. This included enabling it for 5G Standalone (SA; also called New Radio, or NR). We’re doing this because we see strong effects of taking a platform approach, where adding something like VoNR becomes a relatively straightforward exercise. 

Let’s put some emphasis on “relatively” because there are some thoughtful considerations to be made and some steps to be taken. In a pure 5G world, you’ll have a fancy new radio with high bandwidth, low latency, and the opportunity to create little (or big) slices for various use cases. In addition to the radio, you’ll have a new 5G SA core where all this beauty is enabled and managed. 

The situation right now is that even if you have a “5G” logo on the top of your handset, you are - in most commercial 5G networks - actually calling via 4G. This means that your handset needs to connect to a 4G core and an IP Multimedia Subsystem (IMS) core to act as the intermediary between you and the person you want to talk to. 4G radio network coverage is significantly better in most parts of the world and pretty much all handsets out there support that “G”. 

What we want is to enable a pure 5G play, that is, a 5G handset making 5G calls using exclusively a 5G stack all the way. This reduces complexity, improves reliability of calls by avoiding radio access technology changes, and enables effective use of network and handset resources (control plane and airtime). This is especially valuable in a private network or other greenfield environments. Most brownfield deployments have been designed to basically use the current network technology to support voice usage. 

> For example, during early 4G deployments, 3G voice was used, delaying the actual deployment of VoLTE (4G) technology. Similarly, 5G Non-Standalone (NSA) is still using a 4G anchor to support voice calls. In a pure, greenfield deployment, such as with CBRS or sXGP spectrum types, where customers will most likely deploy a single G (either 4G for cost/maturity driven reasons, or 5G for bandwidth per cell or future-proof reasons), voice will need to be supported from day one. 

## Here’s what we did

 **1.** We first got a hold of a set of COTS handsets featuring the major mobile handset chipsets in the market, from the likes of MediaTek, Samsung, Qualcomm and Huawei.
 
 **2.** Then we connected our cloud-based IMS core to our 5G SA core. 
 
 **3.** We connected our core to a commercial 5G antenna in our lab. The 5G antenna was procured from one of the major mobile network vendors. Interestingly, it didn’t support VoNR out of the box, so we had to enable that setting. 
 
 **4.** We then started testing the handsets (and their chipsets). We observed that they have different levels of maturity in their stacks. For example, we discovered that some handsets were unstable if they did not have access to the IMS core. 
 
 > A further explanation on that: a user equipment (UE), according to the 3GPP specs,  has a voice or data-centric setting they employ when registering on the network. For an UE with a voice-centric function, like handsets, most of them will try to connect to an IMS core. If a PDU session establishment request is not honored by the core, the handset will disconnect and reconnect, creating some fluctuations on the data connection. The only way to ensure those handsets got a proper data connection was to secure a connection to the IMS core. 
 
 **5.** Ultimately, we were able to establish voice calls in all directions - to 5G, 4G handsets (VoLTE), VoWifi and so on. 
 
## Let's dig a little deeper
5G handsets place voice calls by initiating a connection to the 5G network’s IMS core. Handsets would disconnect or underperform if they couldn’t establish that connection. The 5G core needs to implement an establishment and release of dedicated Quality of Service (QoS) flows. These flows tell the UE and antenna how to prioritize IP packets carrying call audio over other mobile data traffic. 

More specifically, a QoS flow is associated with standardized 5G QoS identifiers (5QI) that among other things define packet error rate and delay budget, and whether IP packets associated with the flow get a guaranteed bit rate. Only when a dedicated QoS flow for voice is established, the scheduler of the antenna as well as the rest of the involved 5G core elements have all the ingredients to prioritize a phone call over, say, a Netflix session in the background. 

The COTS handsets we tested behaved differently in how they handled the establishment of an IMS connection and QoS flow. That leads us to conclude that even in the 5G SA networks there are still some major interoperability challenges, including on the antenna side, which might be configured for data primarily, not voice. 

Nevertheless, 5G SA has reached a state where its technology can be procured and used with handsets available in the market.




