---
slug: vowifi-imsi-leak/
title: VoWifi leaking IMSI
date: 2020-03-30
tags: [telco, 4G, ePDG, VoWifi, networking, security]
authors: roger-skjetlein
---

4G offers more services than the earlier generation such as 3G and 2G. One of
the services has really have gained traction later years is VoLTE (Voice
over LTE) and VoWifi (Voice over Wifi) that we will go more in dept regarding security.

<!--truncate-->

VoWifi is beneficial in terms being able to use any Wifi connection offering public
internet access thus extending and improving the coverage and connectivity.
Think of it as building our own cellular network, but
using commodity wifi components instead and avoiding the strict regulation and
licensing of spectrum.

## What is IMSI
*The international mobile subscriber identity (IMSI) is a number that uniquely
identifies every user of a cellular network. It is stored as a 64-bit field
and is sent by the mobile device to the network. It is also used for acquiring
other details of the mobile in the home location register (HLR) or as locally
copied in the visitor location register. To prevent eavesdroppers from
identifying and tracking the subscriber on the radio interface, the IMSI is sent
as rarely as possible and a randomly-generated TMSI is sent instead.*

* [IMSI article](https://en.wikipedia.org/wiki/International_mobile_subscriber_identity)

### Security implications
The IMSI is a secret identifier stored on the sim and can be exploited in many
ways once known. It is bound to the sim, so changing UE will not help.

Examples:
* Locating user (UE)
* Intercepting calls
* Intercepting SMS (stealing two factor pin eg.)
* ..and more

## How VoWifi works
When your phone is connected to datanetwork and with volte and vowifi enabled
the device (UE) establish sip session directly to packetgateway via 4g, and via
public internet to epdg (evolved packet data gateway) which is in essence a
ipsec (ikev2) termination using SIM-AKA to authenticate UE. The ipsec comes into
play since epdg is exposed publicly.

We won't go further in depth for volte and vowifi since there are already
excellent articles about the matter:
* [Voice over WLAN](https://en.wikipedia.org/wiki/Voice_over_WLAN)
* [Voice over LTE](https://en.wikipedia.org/wiki/Voice_over_LTE)

![VoWifi topology](/img/blog/vowifi-imsi-leak/vowifi.jpg)

To enable VoWifi on your device, please refer to your device manufacturer website:

* [Android](https://support.google.com/phoneapp/answer/2811843?hl=en)
* [Apple](https://support.apple.com/en-in/HT203032)

Also check on your operator website if VoWifi is supported in your region. Please note that VoWifi is usually blocked when roaming.


## EPDG exposed on the public internet
The Evolved Packet Data Gateway needs to be publicly available on the internet
since UE needs to access it from an arbitrary no-trusted connection. The ipsec
will secure and encrypt both the data and maintain the integrity of the
connection throughout the session.

The UE finds the epdg termination point by looking dns records partly following
a convention decided by 3gpp and typically looks like this in DNS:

```
epdg.epc.mnc999.mcc999.pub.3gppnetwork.org. 3488 IN A 1.2.3.4
epdg.epc.mnc999.mcc999.pub.3gppnetwork.org. 3488 IN A 5.6.7.8
```

From the DNS records we recognize the network operator (MNC) and the
country code (MCC).

The DNS records are registered under a delegated domain owned by GSMA and
usually are redelegated to operator under their own umbrella, like the example
mnc999.mcc999.pub.3gppnetwork.org.

## The problem
When UE establish session to epdg it uses a vpn, a ipsec relationship using
IKEv2 for authentication, encryption and integrity.

So far the implementation works as intended and provides good security through
encryption and security.

The problem is not the VoWifi per see, by rather how ipsec establish the
session. When UE connects to the epdg, it acts as a initiator and the epdg is
inherently passive since it cannot know where from (ip) the UE will come from.

![sim-aka flow](/img/blog/vowifi-imsi-leak/sim-aka.png)

### EAP-AKA exposes identity
Vowifi as mentioned earlier utilises an encryption protocol based on the widely
adopted Extensible Authentication Protocol. EAP itself is just a protocol and
does not define the contents of the data or how exact the data exchanges look
like. EAP-AKA unfortunately exposes the unencrypted user identity during
the authentication session and in this case the user identity is equal to the
imsi.

#### Solution
This is the hardest problem to solve since it needs a security layer or settings
that comes before ipsec starts to connect.

The proposed solutions
* Force the use of conservative peer for eap-aka/sim
and use pseudonym identity (tmsi) to avoid exposing imsi.
* Enable EAP-TTLS in addition to EAP-AKA/SIM
* Only connect trusted/encrypted AP's

### Fake Ipsec termination exposes identity
By impersonating a epdg by redirecting all dns requests for any
`pub.3gppnetwork.org.` to our own fake ipsec termination providing just enough
to catch the imsi.

A raspberry pie can easily be setup to constantly scan for open wifi networks,
then impersonating the ssid in hope of lure ue's to connect. Any UE set to use
VoWiFi connecting to the fake access point will give away their imsi.

A wifi ssid scan example of what we can automate. In this case the Isfjell-Guest
would have been picked to catch imsi since its open and unencrypted:

![wifi-ssid](/img/blog/vowifi-imsi-leak/wlan-ssid.png)

Snippet from the ipsec termination, UE (iPhone 8) exposes imsi several times:
```
13[ENC] parsed IKE_AUTH request 2 [ EAP/RES/AKA ]
13[IKE] '09999994511******@wlan.mnc999.mcc999.3gppnetwork.org' is not a reauth identity
13[IKE] '09999994511******@wlan.mnc999.mcc999.3gppnetwork.org' is not a pseudonym
13[IKE] received identity '09999994511******@wlan.mnc999.mcc999.3gppnetwork.org'
13[IKE] no EAP key found for 09999994511******@wlan.mnc999.mcc999.3gppnetwork.org to authenticate with AKA
13[LIB] tried 0 SIM providers, but none had a quintuplet for '09999994511******@wlan.mnc999.mcc999.3gppnetwork.org'
13[IKE] failed to map pseudonym/reauth identity '09999994511******@wlan.mnc999.mcc999.3gppnetwork.org', fallback to permanent identity request
13[ENC] generating IKE_AUTH response 2 [ EAP/REQ/AKA ]
13[NET] sending packet: from 192.168.17.1[500] to 192.168.17.24[500] (92 bytes)
09[NET] received packet: from 192.168.17.24[500] to 192.168.17.1[500] (140 bytes)
09[ENC] parsed IKE_AUTH request 3 [ EAP/RES/AKA ]
09[IKE] received identity '09999994511******@wlan.mnc999.mcc999.3gppnetwork.org'
09[IKE] no EAP key found for 09999994511******@wlan.mnc999.mcc999.3gppnetwork.org to authenticate with AKA
09[LIB] tried 0 SIM providers, but none had a quintuplet for '09999994511******@wlan.mnc999.mcc999.3gppnetwork.org'
09[IKE] EAP method EAP_AKA failed for peer 09999994511******@nai.epc.mnc999.mcc999.3gppnetwork.org
09[ENC] generating IKE_AUTH response 3 [ EAP/FAIL ]
```

#### Solution
Ipsec clients (UE) are able to verify the identity of the epdg by requesting
and validating a machine certificate proving it is the actual service belonging
to the requested dns address. This means when the client connects, the server
has to provide a valid certificate containing the dns names and signed by a
trusted CA.

## Raspberry PI 4

The specific physical setup used for testing. Older PI's should work just fine and also
other platforms that can run dnsmasq, tshark and strongswan for ipsec with
support for eap-aka/sim.

![rpi4 and battery](/img/blog/vowifi-imsi-leak/rpi4-batt.jpg)

*white box is the rpi4 in a original casing and gray box is a battery bank*
