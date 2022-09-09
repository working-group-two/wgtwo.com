---
slug: evolution-of-mobile-core
title: "Q&A with Stephane: The evolution of the mobile core"
date: 2022-09-09
tags: [saas, operators, core, BBS, cloud, virtualization]
authors: [wgtwo]
---
What’s the past, present and future of the mobile core? We threw three quick questions at Stephane Savonitto, a Core Network Engineer at Working Group Two. He has significant mobile core experience, from major mobile network operators and equipment manufacturers. 

![Flower punching through](./flower.jpg)

<!--truncate-->

### 1. What was your first meeting with a live mobile core? 
I started working for Bouygues Telecom, the third French mobile operator, in 1995. This was during their initial rollout. I was working as a BSS field technician and I participated in the deployment of the first Mobile Switching Center (MSC) in the south of France.

This node entity alone completely filled a 400m2 room with three rows, hundreds of racks back to back and thousands of specific boards and items... This was very impressive and scary! This equipment was able to handle 100 000 subscribers to make voice calls. SMS had not been introduced by that time 🙂

<img
  width="50%"
  align="right"
  style={{
    display: "block",
    margin:"40px auto"
  }}
  src={require("!file-loader!./ericsson1.jpg").default}
/>

<img
  width="50%"
  align="right"
  style={{
    display: "block",
    margin:"40px auto"
  }}
  src={require("!file-loader!./ericsson2.jpg").default}
/>

After that we’ve seen the telecom world developing rapidly. First we saw smaller room sizes with more compact boards and shelves. The cores could handle more functions, had more capacity and could support more subscribers. This was the last step of pure telecom hardware using common vendor boards (also known as Advanced Telecommunications Computing Architecture - or ATCA). This was also the end of Time-division Multiplexing (TDM) and the start of Internet Protocol (IP) transport. Then virtualization arrived, first on dedicated blades on-premises and today on the public cloud.

### 2. Which role does the core play in a modern mobile network?
Today network technology and standards are going through rapid evolution. This is quickly making equipment obsolete. A core network needs to stay up to date to handle new functionalities, network slicing and so on. Virtualization on the cloud is the way to be able to follow this race with lower investment and faster than conventional core equipment for mobile operators. Internet of Things (IoT) operators, for example, have many subscribers but with low revenue for each subscriber, so to stay profitable it is less expensive for them to go with Network As-a-Service (NaaS) than with a traditional core network. 
 
### 3. What are the main challenges with making mobile cores programmable and running them as-a-service? 
Running a mobile network as-a-service has many benefits for operators. Networks are increasingly complex so it is difficult to retain the competent people you need to operate, to maintain network performance, and to deploy the latest technology updates. It is also attractive with the shift to a pay-per-use subscription model and the possibility to scale up or down as needed.

<img
  width="50%"
  align="right"
  style={{
    display: "block",
    margin:"40px auto"
  }}
  src={require("!file-loader!./stephane.jpg").default}
/>

But the as-a-service model also introduces new challenges for mobile service providers:
- They have to adopt new technologies rapidly and deploy new services by closely following new standards and market trends. They also need to have the capability to automate tasks. 
- They need to maintain standards capability on the edge and be able to interconnect to any legacy core networking equipment. 
- They need to ensure that the highest level of security is always up to date on the network
- They need to be able to shift the focus from merely operating their core to offering innovative, new services to their customers. 

Want to learn more about Working Group Two’s cloud-native and programmable mobile core platform? Get in touch with us. [Get in touch with us](https://www.wgtwo.com/contact/)

*(Picture courtesy Ericsson - meant as general illustrations)*