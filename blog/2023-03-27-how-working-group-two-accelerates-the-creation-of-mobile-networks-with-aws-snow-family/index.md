---
slug: how-working-group-two-accelerates-the-creation-of-mobile-networks-with-aws-snow-family
title: How Working Group Two Accelerates the Creation of Mobile Networks with AWS Snow Family
date: 2023-03-27
tags: [aws, ec2, snow family, mobile networking]
authors: [holger-ihrig]
image: ./wgtwo-Mobile-Core-1.png
---

import ImgWithCaption from '../components/imgWithCaption'

Many enterprises, telcos, and vendors mention that private and public 4G/5G can be confusing, hard-to-procure, and manage. In many cases, getting started requires a large capital outlay, which organizations may not want to commit to given their unfamiliarity with private cellular technology.

<!--truncate-->

In this post, we will explore a [mobile core solution](https://www.wgtwo.com/) from Working Group Two (WG2) and how a customer can implement a mobile private network (MPN) leveraging all the benefits of an Amazon Web Services (AWS) hybrid cloud deployment.

---

<small>
Written by:
<ul>
  <li>Holger Ihrig, Software Engineer – Working Group Two</li>
  <li>Adolfo Pica, Sr. Solutions Architect – AWS</li>
  <li>David Perez Caparros, Sr. Industry Specialist – AWS</li>
</ul>
</small>

---

The WG2 platform offers the full capabilities of an MPN core for 4G/5G as-a-service, including authentication and provisioning, voice, data services and the surrounding orchestration, as well as the operational and management tools.

[**Working Group Two**](https://www.wgtwo.com/) is an [AWS Partner](https://partners.amazonaws.com/partners/0010h00001ZY6fDAAT/Working%20Group%20Two%20As) building a future-proof technology that reduces cost and complexity while radically enhancing innovation potential in the telecom industry. To make this a reality, WG2 creates programmable mobile core networks as a platform with APIs, delivered as-a-service and running on world-class infrastructure from AWS.

Working Group Two exposes a marketplace where operators, developers, and end users can meet and interact. The WG2 core platform has multi-G support and offers the full set of capabilities related to authentication, provisioning, voice, messaging, and data services. Its core is live across Europe, United States, and Japan, serving public mobile networks, private networks, and Internet of Things (IoT) solutions.

## Solution Overview

The figure below shows a simplified deployment model of a mobile private network using Working Group Two and an edge location.

<ImgWithCaption
  caption="Figure 1 – Working Group Two mobile core deployment on AWS."
  src={require("!file-loader!./wgtwo-Mobile-Core-1.png").default}
  />

The WG2 mobile core on AWS includes components such as the Home Subscriber Server (HSS), IP Multimedia Subsystem (IMS), Mobility Management Entity (MME), or Proxy Call Session Control Function (P-CSCF).

The HSS leverages [AWS Key Management Service](https://aws.amazon.com/kms/) (AWS KMS) to encrypt and decrypt subscriber information. The IMS and P-CSCF provide voice and multimedia services to mobile clients, while the MME is handling control plane traffic from the radio units.

The User Plane Function (UPF) in a mobile network is basically a router that also does encapsulation and de-encapsulation of the GPRS Tunneling Protocol (GTP). The UPF can be deployed in an AWS region or at an edge location, such as a customer data center. In the second case, the UPF is remotely controlled from the AWS region, either through [AWS Direct Connect](https://aws.amazon.com/directconnect/) or virtual private network (VPN) over the internet.

While the control plane presents relatively low requirements in terms of latency, the user plane can benefit from an ultra-fast response at the edge (up to single-digit millisecond in the case of 5G user plane). Based on this, it’s pertinent to host the telco control plane fully on an AWS region in order to profit from the scalability, flexibility, cost efficiency, and agility it provides.

Working Group Two has built its mobile core solution to run on multiple AWS regions, experiencing the benefits of cloud computing across the entire telco stack. Benefits include continuous roll-out and a container-first approach, all microservices-oriented with observability and efficiency in mind.

On the other hand, some Mobile Virtual Network Operators (MVNOs) lease wireless capacity from mobile network operators and resell it to consumers under their own brand. This means the mobile core network services need to run close to their underlying provider’s Radio Access Network (RAN) infrastructure—typically a Tier 1 service across various countries or via their roaming partners with a dense capillary network stretching from their RAN network up to specific Network Exchange Points (IXP).

Using cloud services like AWS Direct Connect, IXPs can connect to the [AWS global network](https://aws.amazon.com/about-aws/global-infrastructure/global_network/). In this way, compute and networking devices (switch, routers, and virtualization-ready servers) placed close to IXPs enable the user plane to be as close as possible to the end users, while still enabling control plane components entirely running in the AWS region.

Identifying those data center facilities close to their connectivity partner, and interconnecting the control plane—diameter, SIGTRAN, or SIP—and the user plane (internet traffic or voice traffic under the form of RTP flows) to the infrastructure of said partner is a rather manual and tedious process.

Such a process involves:

- Understanding the geography.
- Understanding the distribution of data centers and their capability towards AWS, where the WG2 mobile core is running.
- Understanding pricing, volumetry, and service-level agreements (SLAs) of each provider.
- Selecting one or several sites.
- Deploying and order hardware.
- Deploying WG2’s software stack and connecting back to AWS.
- Configuring resources in AWS and in the WG2 edge compute environment to support that new interconnection.

Once the steps above have been completed, it’s possible to rely on infrastructure as code (IaC) and automation to deploy and operate the software that handles the user plane and the control plane interconnection with AWS.

## Simplify Edge Deployments with AWS Snow Family

Contrary to public mobile networks, private networks are dedicated to private customers, with specific components deployed on premises. Starting with the RAN equipment—often made of small cells or smaller Macro RAN equipment known as access points—provides 4G or 5G connectivity.

Typically, the traffic flows from User Equipment (UE) or Customer-Premise Equipment (CPE) devices to either other on-premises devices, or it’s offloaded to the internet or to AWS to be processed.

This market has been enabled by the development of spectrum-open policy such as CBRS (U.S.) or sXGP (Japan) and the emergence of alternate technologies like OpenRAN. For those customers, the very same control plane running on AWS can be used. Each customer may want to run their own user plane infrastructure on premises in order to minimize latency to the Internet.

This edge scenario becomes a challenge, in particular:

- When it comes to identifying and validating edge hardware, this becomes difficult to procure. Also, it takes time to validate hardware, test the presence of characteristics, such as power and AC requirements and address the availability of specific network hardware to provide the best user experience.
- Supply chain management is a new challenge. Finding the right network adapters at a constant price can be challenging due to the fluctuation of hardware prices.
- Onboarding the hardware, managing out-of-band interfaces, and the virtualization stack require an operational effort.

The above-mentioned challenges can be overcome by using edge devices provided by the [AWS Snow Family](https://aws.amazon.com/snow/). WG2 decided to experiment in its own [on-premises lab](https://www.wgtwo.com/blog/exploring-aws-snowcone/), with the idea to enable customers to try private networks in a simple and easy way.

[AWS Snowcone](https://aws.amazon.com/snowcone/) is a small form-factor server that was originally meant for data transport to an AWS region. It can also be used as a small device running compute workloads, and in that role it exposes two vCPU cores and four GB of memory. However, it also has the ability to forward the two 10 GbE NICs directly to those virtual machines. In addition to that, it comes with a ruggedized form factor that can be easily shipped to its destination.

## User Plane Function on AWS Snowcone

For the UPF, it’s essential the network path is as performant as possible.

Working Group Two uses Vector Packet Processing (VPP) to implement this UPF. The way this works is that VPP sets the NIC into poll mode, thus removing it from kernel-packet processing. The disadvantage here is, of course, that one CPU core is just busy polling the NIC.

Working Group Two set up a virtual machine with a Direct Attached Network Interface (DNI) and two CPU Cores. AWS Snowcone can attach such a DNI to its hosted [Amazon Elastic Compute Cloud](https://aws.amazon.com/ec2/) (Amazon EC2) instance. This makes AWS Snowcone a good candidate for a UPF that will almost saturate a 10 GbE link.

Using a UPF running on the AWS Snowcone device, the WG2 network achieved the following throughput using a single port.

<ImgWithCaption
  caption="Figure 2 – Throughput of WG2 UPF on AWS Snowcone."
  src={require("!file-loader!./wgtwo-Mobile-Core-2.png").default}
  />

The AWS Snowcone UPF is, in this case, just encapsulating GPRS Tunnel Protocol User (GTPU) packets, but nevertheless it’s a nice throughput for a small private network deployment.

The setup provides the following advantages for customers:

- A small ruggedized form-factor server can be shipped easily to a customer that wants to use an on-premise UPF.
- With AWS Snowcone, it’s possible to start using it immediately. Working Group Two can configure the UPF and ship it to the customer after a basic networking check.
- The cost of the implementation is predictable. The threshold for driving an initial test is very low, due to the pay-as-you-go model by AWS.

In case of larger deployments, run multiple UPFs for load sharing, or with applications deployed at the edge, the AWS Snow Family offers multiple different options.

## Conclusion

The telco world is embracing the benefits of the cloudified networks on AWS. Hybrid deployments can be simplified using tactical AWS edge devices to reduce the complexity of telco deployments.

The AWS Snowcone device has given Working Group Two the ability to quickly and easily create proof-of-concept integrations. Customers can try the WG2 [private mobile network](https://www.wgtwo.com/) features and services and flexibly scale to larger and more capable devices in the AWS Snow Family.

