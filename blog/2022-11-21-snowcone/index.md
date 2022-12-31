---
slug: exploring-aws-snowcone
title: Unboxing the AWS Snowcone and using it as a local UPF
date: 2022-11-21
tags: [5G, aws, snowcone]
authors: [holger-ihrig]
---

import ImgWithCaption from '../components/imgWithCaption'


The AWS Snowcone is a small form factor server that was originally meant for data transport to AWS data centers. 
However it can also be used as a small device running compute workloads. We wanted to evaluate the performance of the 
Snowcone as it is a quite intriguing piece of technology which we might want to use as a an on-premise UPF (User Plane 
Function) in low-throughput 5G networks (think IoT or Proof of Concept deployments).

<!--truncate-->

Specs:
```
Dimensions: 227 mm x 148.6 mm x 82.65 mm
Weight: 2,1 kg
vCPU(usable): 2
Memory(usable): 4GB
Storage(SSD): 14TB
Network: 2x10GB RJ45
Display: e-Ink for displaying shipping label or status
Power: 65W USB-C (not included)
```

## Initial Setup

Once receiving the Snowcone it still displays the shipping label on the top of the unit. The IO Ports are hidden behind 
a flap at the back of the unit and the power switch including two LEDs are at the front of the unit.

Upon powering it on, the Display will show the IP address of the Snowcone along with a message that the device is Locked
and needs to be unlocked using the AWS OpsHub Software which is available for Windows, OSx and Linux (AppImage).

<img
width="100%"
align="middle"
style={{
display: "block",
margin:"auto 10px"
}}
src={require("!file-loader!./OpsHub_Start.png").default}
/>

In our case we wanted to use a local device, so we selected this option

<img
width="80%"
align="middle"
style={{
display: "block",
margin:"auto 10px"
}}
src={require("!file-loader!./OpsHub_Signin.png").default}
/>

Next up was selecting a Snowcone Device followed by the following login screen

<img
width="60%"
align="middle"
style={{
display: "block",
margin:"auto 10px"
}}
src={require("!file-loader!./Opshub_Signin_configure.png").default}
/>

At this point you have to login to your AWS Console and navigate to the “Snow Family” Service where you should see 
a so-called JobID for a Snowcone. The Snowcone Job Details will let you get your Unlock Code and the Manifest File, 
which are both needed to sign into the Snowcone device.

<img
width="100%"
align="middle"
style={{
display: "block",
margin:"auto 10px"
}}
src={require("!file-loader!./OpsHub_Local_Devices.png").default}
/>

From that point on the Snowcone is usable. It did take a few more minutes though until it downloaded the AMI images 
that will run on the Snowcone.

## Compute

Since the Snowcone is very limited in resources, there are special Instance types for it:
- snc1.micro (1 vCPU, 1 GB RAM)
- snc1.small (1 vCPU, 2 GB RAM)
- snc1.medium (2 vCPU, 4GB RAM)

Also there are only two AMIs available for it now. However it is possible to import EBS Snapshots onto the Snowcone, 
which we have not done as the procedure was too long and we could do with the AMIs provided.

<img
width="60%"
align="middle"
style={{
display: "block",
margin:"auto 10px"
}}
src={require("!file-loader!./OpsHub_Launch_Instance.png").default}
/>

## Instance

Since our use case was to run a UPF on it, we started the largest instance type the Snowcone would allow us and 
started exploring.

Since the available AMI is an Amazon Linux 2 AMI we were not super familiar with it. However, since it is Red Hat-based 
we kind of knew what to expect.

The kernel coming with that AMI was a 4.14 kernel, which was too old for us, so the first thing was updating to 
a 5.15 kernel. We followed this [guide](https://aws.amazon.com/premiumsupport/knowledge-center/amazon-linux-2-kernel-upgrade/) 
first kind of sluggish and noticed that it's not a good idea to skip instructions, thereby bricking our instance. 
Which made us find out that there are no logs of the boot process or a webshell, like we are used to from EC2.

Second time's the charm though and we did have a working instance with a 5.15 kernel. Interestingly enough the 
device key for SSH changed when upgrading from 4.14 to 5.4, but that was only a minor nuisance.
So we thought let's do some exploring what we actually have here.

<img
width="60%"
align="middle"
style={{
display: "block",
margin:"auto 10px"
}}
src={require("!file-loader!./Instance_lspci.png").default}
/>

There was not too much information here. So let's have a look at the CPU Information.

<img
width="80%"
align="middle"
style={{
display: "block",
margin:"auto 10px"
}}
src={require("!file-loader!./lscpu.png").default}
/>

So a CPU from the Xeon E3-12xx v2 line. Even though this might be the virtualization engine telling us that this is 
the CPU, we are assuming that it will be something from the Ivy Bridge line. Furthermore we are assuming that it will 
be a low-powered 4 Core CPU working there, where only 2 CPUs are available for the consumer.

After digging a bit through dmidecode (we are engineers right?) we also found this additional piece of information

<img
width="70%"
align="middle"
style={{
display: "block",
margin:"auto 10px"
}}
src={require("!file-loader!./dmidecode.png").default}
/>

The interesting part here is that the Manufacturer is designated as Bochs, which is a x86 and AMD64 emulator. 
So maybe it's not a virtualization engine driving the Instance, but an emulator?

But now back to our original plan to run a UPF (User Plane Function for 5G) on the Snowcone. For this to work we 
needed 2 network interfaces as our original plan was to use DPDK to run it. This is where we quickly found out that 
an Instance on Snowcone can only have 1 Virtual Network Interface (VNI).

After scouring through the documentation about Snowcone, we however found out that first of all there is another way 
to configure the Snowcone. You can also configure the Snowcone with a CLI, the [SnowballEdgeClient](https://aws.amazon.com/snowball/resources/).

In there we found a different type of network Interface, the so called Direct Network Interface (DNI), and according 
to documentation, the Snowcone supports up to 63 DNIs attached to it.
So we created a DNI and attached it to our instance.
To our surprise it showed up as an Intel X553 Virtual Network Function(VNF), so this is basically 
Single-Root IO-Virtualization (SRIOV) at work here. Which also makes sense because the X500 series supports up 
to 64 VNFs (minus the one used by the snowcone itself).

So we started deploying our DPDK-based UPF on the snowcone. Creating a DNI and attaching it to an instance was fairly 
easy with the SnowballEdgeClient. However, when restarting the instance, it would not come back. 
After talking to AWS we were informed that this is a bug that is related with the interface naming and 
should be fixed in a future release.

For the meantime it can be circumvented by switching to [Predictable Network Interface Names](https://www.freedesktop.org/wiki/Software/systemd/PredictableNetworkInterfaceNames/).

<img
width="80%"
align="middle"
style={{
display: "block",
margin:"auto 10px"
}}
src={require("!file-loader!./change_to_predictable_NIC_Names.png").default}
/>

Once the DNI is attached to the instance, one has to do some additional configuration on the instance for both 
the VNI and DNI to get IP addresses. We found the relevant [guide](https://docs.aws.amazon.com/snowball/latest/developer-guide/network-config-ec2.html) 
in the AWS Documentation and our DNI got an IP Address.

With those parts out of the way, we could deploy our DPDK-based UPF on the Snowcone and could use it as a UPF.

## Performance

Evaluating the performance of the Snowcone device was actually what triggered this whole exploration. So let's look mainly at the networking performance and also slightly at the cpu performance.

For this we are mainly using iperf3 to evaluate the throughput. The Snowcone as well as our test machine here in the lab have a Intel X55x 10Gbit NIC.

When the Snowcone snc1.medium instance is the iperf Server:

<img
width="80%"
align="middle"
style={{
display: "block",
margin:"auto 10px"
}}
src={require("!file-loader!./iperf-server.png").default}
/>

When the Snowcone snc1.medium instance is the iperf Client:

<img
width="80%"
align="middle"
style={{
display: "block",
margin:"auto 10px"
}}
src={require("!file-loader!./iperf-client.png").default}
/>

From these very simple benchmarks we can already see that the EC2 instance is struggling with pushing out anywhere 
near line speed. In other words it seems like it is CPU bottlenecked. When running a htop while running this speedtest 
does confirm that one of the CPUs hits 100% utilization every now and then. This makes sense because iperf3 is 
single-threaded by design.

We then did run a speedtest to a local speedtest server using our userland UPF from a UE and this is basically 
the result.

<img
width="50%"
align="middle"
style={{
display: "block",
margin:"auto 10px"
}}
src={require("!file-loader!./userland-speedtest.png").default}
/>

Looking at htop again, we can see that now both CPU cores are pegged at 100% since the UPF is actually multithreaded. 
So even if the EC2 instance in Snowcone can push about 6 Gbit/s on iperf3, with the additional overhead of 
GTP encapsulation and de-encapsulation, it can only do about 180 Mbit/s.

We know that our userland UPF will be able to push around 500 Mbit/s on other machines, so this is a clear limitation 
of the Snowcone.

With the DPDK based UPF however we are able to have higher throughput. DPDK will take control over the DNI and use 
a poll-mode driver for packet processing. So one CPU core will always be pinned at 100% and the NIC will 
disappear from the instance.

<img
width="50%"
align="middle"
style={{
display: "block",
margin:"auto 10px"
}}
src={require("!file-loader!./vpp-speedtest.png").default}
/>

This is actually the maximum speed we can get out of our gNodeB. So we are pretty happy with the result.

We hope you liked this short look at the AWS Snowcone, and we will for sure explore the Snowcone further. It's a 
nice little device that will be especially useful for smaller deployments or PoCs of our Packet Core as it can be easily 
remote-managed and transported everywhere.

## Update
Since the original Blog Post about Snowcone we were able to debug the problem with the DNI detach process further 
and with help from AWS were able to resolve it. The fix for this should be released with an updated version of 
Amazon Linux in the future according to AWS.