---
slug: automating-private-networks
title: Using automation to drive down complexity and increase scalability of private networks
date: 2023-03-30
tags: [privatenetworks, aws, automation, saas]
authors: [yan]
image: ./yan2.png
---

import ImgWithCaption from '../components/imgWithCaption'

Recently, as any other engineer on the planet, I asked ChatGPT what is needed to build a private 5G network. Here’s what it said. 

<!--truncate-->

<ImgWithCaption
  style={{
    width: "100%",
  }}
  caption="Talking to AI"
  src={require("!file-loader!./chatgpt.png").default}
  />
  
ChatGPT’s AI-generated response is not far from our vision. At WG2, we’re offering a rebuilt, modern core network delivered as a hosted service. It drives the dual benefits of cost savings and revenue growth for our private network customers. Case in point: Recently, [we teamed up with Kyocera Mirai Envison](https://www.wgtwo.com/blog/kcme-teams-up-with-wg2-for-private-networks/) to deliver private networks in Japan, and we’re now deploying our first solution in the agricultural sector. 

**In this post, we’ll explore how it would be possible to rationalize costs and reduce the time to onboard a new customer.**

## What you need

To build a private network yourself, you essentially need: 
* Cellular-related spectrum. You either need a faraday cage or live in a country that allows some cellular-allocated spectrum to be used (i.e. USA with CBRS, Japan with sXGP, Norway with a license, Germany/Spain with a license from the local regulator - the list is growing every day).
* RAN equipment - this could be as small as a wifi-sized eNodeB from some vendors to actual macro-like equipment. This equipment will need to be installed. This is the only network hardware you will need, and eventually some compute capabilities if your connectivity needs it (like fast 5G speed are important).
* IP addresses - bring your own RFC 1918 addresses, like ChatGPT is recommending. 
* SIM cards and some phones (that’s probably what ChatGPT refers to as networking equipment). 
* Network protocols: here, ChatGPT is modest, but you probably want to support protocols: 
> * Some IPSec to connect and secure your RAN equipment back to the core network by protecting the network traffic
> * Some SCTP traffic to actually enable your RAN equipment to communicate with the core 
> * Some GTP traffic to actually transport your Internet traffic from and to your RAN equipment. 
* Network hardware and software, and some configuration and administration: this is where WG2 is focusing these days to bring value.  [After testing out](https://www.wgtwo.com/blog/exploring-aws-snowcone/) AWS’s fantastic, little on-premises hardware, the AWS Snowcone, we wanted to enable our customers to enjoy a nearly zero-touch network hardware and software experience.


By analyzing the requirements of a few variants of network RAN equipment, in our lab experience we came up with the following:
* Each private network customer might bring their own IP / network CIDR requirement
* Each network needs a public endpoint to connect back to our Core 
* Each network needs some security and configuration knob to be adjusted (i.e. Network identifier or PLMN, Tracking area covered, slice (in case of 5G). 

Eventually, the customer can opt for a packet gateway in the cloud (ideal for voice services) or on premises (ideal for high speed 5G data)

In order to rationalize costs and reduce the time to onboard each customer, we decided to work on automating those minimal deployments, using automation on our clusters running in AWS. This way, our customers will be able to discover our technology at a lower cost and eventually, all by themselves. 

## The approach

The actual approach is the following:
* A manifest for a private network is created - it contains mostly the parameters needed for the network to operate. We focus mostly on the one that the customer will be requesting - i.e. network details (CIDR), network PLMN, tac, etc. These manifests can be created via various means, but a web page and a form can be used. 
* The automation generates the following elements from the manifest:
* A public endpoint (set of IP addresses) that the customer need to input as IPSec configuration 
* A set of certificates to authenticate the IPSec link with our core 
* A internal, customer specific, MME/AMF IP configuration (set of IP addresses)
* A set of VPN credentials and commands to onboard an edge based virtual machine or bare metal equipment. 

<ImgWithCaption
  style={{
  }}
  caption="Architecture"
  src={require("!file-loader!./architecture2.png").default}
  />

At the end of the automation, within seconds, we obtain those elements and we make them available to the customer. 

**As a result:**
* A set of configuration parameters automatically generated such as Certificate Authority, public and private key, as well as IP addresses parameters to enter in their equipment. We aim to automate this via protocols like TR.069 in the long run, but we found it convenient to enable a common set of technology (like IPSec + certificate) as a solid base to start with. Once introduced into RAN equipment, they are automatically connected on their private network overlay and can access our MME/AMF SCTP endpoint and start to attach their phones, and eventually pass their phone calls, once, of course, they have declared the SIM card of their phones/tablets in our system. 
* Eventually, if they deploy an edge system and execute a simple set of commands, we can onboard their edge computer - such as AWS Snowcone! If they deploy a local version of our packet gateway, voila, their traffic will be automatically offloaded at the edge using the IP range they have provided us. It should be that easy.
* In the end, if they want to close the network, no problem. We’ll remove the manifests from our system and the resources will get cleaned from our internal and AWS systems. 

**How realistic is this?**   
We are not too far from this - this is the expected and targeted user experience. We plan to work on the user journey to facilitate the onboarding of different kinds of users, but the underlying technology that enables them to connect should be the same and is mostly working for some simple network use cases. We are currently looking at customer feedback and trials in their labs to constantly improve our automation and further reduce the cost of deploying and operating private networks. 


