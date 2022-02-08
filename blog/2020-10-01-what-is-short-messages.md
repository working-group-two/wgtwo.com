---
slug: what-is-a-short-message
title: What the heck is a short message?
date: 2020-10-01
tags: [telco, MAP, TCAP, SS7, Forward-SM, SMS]
authors: seba
---

I will try as best as I can to give an explanation of what happens
when you send an SMS from your phone.

Disclaimer: Telco stuff is hard.

Also disclaimer: this blog post will also contain alot of ackronyms,
after all, it is telco.

_Aaand down the rabbit hole we go..._

<!--truncate-->

# Where to even start

In the *SS7* (telco/telecom/telecommunications) network there are many
different nodes (servers), with different kinds of tasks.

The group of protocols that is used to send signals over *IP* between
these nodes is called *SIGTRAN* (derived from "signaling transport").
Older networks that have not switched to *IP* do not use *SIGTRAN*.

*SIGTRAN* protocols are the lower layer protocols used for signaling,
they range from *SCTP* (Stream Control Transmission Protocol) to
*M2PA* (Message Transfer Part 2 User Peer-to-Peer Adaptation Layer)
and *M3UA* (Message Transfer Part 3 User Adaptation Layer).

*SCTP* is like a mix between *UDP* and *TCP*. It is supposed to be
quicker than *TCP*, but more reliable than *UDP*.

Both *M2PA* and *M3UA* support *SCTP* management, and the reporting of
status changes of those, as well as providing transfer of *MTP3*
(Message Transfer Part 3) messages.

On top of *SIGTRAN* are the *SS7* protocols.

What I'm going to talk about are the protocols on the very top of *SS7*,
specifically the *MAP* (Mobile Application Part) as well as the *TCAP*
(Transaction Capabilities Application Part). There are other protocols
inbetween, for instance *SCCP* (Signalling Connection Control Part)
which handles some handshaking, routing, and resilience.

The *MAP* layer is used when talking to some of the telco nodes such
as *HLR* (Home location registry), *VLR* (Visitor location registry),
*MSC* (Mobile switching centre), *SGSN* (Serving *GPRS* [ackronym in
ackronyms; go telco!] support node) and the *SMSC* (Short message
service centre).

# MAP versions and TCAP dialogues

There are some iterations of *MAP* (v1, v2, v3, and v4) and messages
almost always come in pairs, an acknowledgement (`ReturnResult` or
`ReturnError`) for each sent message (`Invoke`).

To determine which version to use between two nodes, the sending node
tries to start the transaction (called a dialogue) by sending a *TCAP*
`Begin` message with the *MAP* message and it's highest compatible
version. If the receiving node cannot talk that version, it sends a
*TCAP* `Abort` message with it's highest compatible version. In v1
there might not even be a reason, just an empty `Abort`; the sending
node might then try to send the *MAP* message as v1 anyway.

In my head it goes like this:

```
Node 1: "Hi, I want to talk version 3 to you about this"
Node 2: "No I don't understand you, but we can talk version 2 about it instead"
Node 1: "Ok, then I want to talk version 2 to you about this instead"
Node 2: "Aah, now I see..."
```

Or maybe

```
Node 1: "Hi, I want to talk version 3 to you about this"
Node 2: "No"
Node 1: "Ok, then I want to talk to you about this in version 1 instead"
Node 2: "Maybe I will talk to you, maybe I will not"
```

For *TCAP* dialogues there are (mainly) four message types.  `Begin`,
`Continue`, `End`, `Abort`. Each of the types have an ID (or two, as I
said, telco is complicated), a component and a dialogue part. The
component contains the *MAP* message. The dialogue part contains
the version and application to use (that is *MAP* Application;
i.e. which type of message it contains), but it is only used in the
first message from both nodes for the version negotiation.

_I think this covers most of it, let's get back to the fun part._

# How does SMS work?

*SMS* was initally implemented because of the wish to send text
messages to pagers using the phoneline when it was not in use for
phonecalls. It was decided at a meeting in Oslo to be released to the
public when some French and German company understood it's
value. (Don't quote me on any of this).

When you send an *SMS*, the *SMS* is transfered to the *MSC* or the
*SGSN* in your current (serving) network. The *MSC* or *SGSN* then
sends an packet called `MO-Forward-SM` towards the *SMSC* in your
current network. It stands for "Mobile Originating Forward Short
Message" meaning it started from your (mobile-)phone.

The *SMSC* then asks the recipients HLR about the routing details for
the *SMS*. It does so by sending another *MAP* message of type
`sendRoutingInfoForSM` requesting the location of the recipients *MSC*
or *SGSN*, or both.

The *SMSC* then sends another packet, this time a `MT-Forward-SM`,
towards the *MSC* in the recipients network. In this case *MT* stands
for Mobile Terminated, meaning it goes towards the recipients phone.

_Dia have amazing icons:_
<div>
    <img src="/img/blog/sms/forward-sm.svg" alt="You calling your mom" />
</div>

The similarities in *MO* and *MT* requests are that they both contain
a origin and destination address as well as the user data (your actual
text message), and a possibly a correlation id which is basically a
mapping between your SIM-card id and a temporary id and was originally
used for making sure that the sending network paid for *SMS*s towards
the receiving network.

For *MO* the origin address is your *MSISDN* (read telephone number),
and the destination is the *GT* address (Global title; a way to route
stuff) of the *SMSC*. For *MT* messages the origin address is the *GT*
of the *SMSC* and the destination address is either the recipients
*IMSI* (read SIM-card) or the recipients correlation id. It could also
be a *LMSI* which is a 4-byte network location identifier if the
recipient is also within the same network as the sender.

## Ever wondered why there is a limit to the size of the text message you are sending?

<div class="left-right-row">
    <div class="text">Two characters left on a GSM7 encoded SMS.</div>
    <img class="image" src="/img/blog/sms/160_chars.png" alt="Characters left: 2/160" />
</div>

If you (god forbid) you would break the protocol and send a text
message greater than 140 bytes, which translates to 160, 152, or 70
characters depending on locale [1], then your phone would break up the
message into multiple text messages. This arbitrary size of 140 bytes
is not really arbitrary at all. It was chosen because it would
precisely fit into a single *MTP3* *SIF* (Signalling Information
Field) when routing label, *SCCP*, *TCAP* and *MAP* layers were taken
into account.

[1] There is something called *GSM7* bit-packing. Instead of using 1
byte (8 bits) per character, *GSM7* uses 7 bits. This means that
instead of 140 characters, you can get up to 160 characters per
*SMS*. The drawback is that you will have a smaller subset of
characters to use, only the most common is supported. If you include
any non-*GSM7* characters in your *SMS* then the *SMS* will
automatically be converted to use either *USC-2* or *GSM7* with a
different charset instead. *USC-2* uses 2 bytes, or 16 bits, instead
of *GSM7*s 7 bits. That leaves you with 70 characters per
*SMS*. *USC-2* is similar for the basic multilingual plane (*BMP*) to
*UTF-16*. In fact *UTF-16* is an extension of *UCS-2*. The main
difference is that *USC-2* is fixed width and does not allow for the
extended characters in the private use area of *BMP*. *UTF-16* is
variable width of one or two 16-bits code points, and does allow the
extended characters. For extended characters to work (for instance
"praying/folded hands" &#x1F64F;), phones might try to fake *UTF-16*
by using two *USC-2* characters. New phones can handle this fine, but
older phones might receive two question marks as they cannot decode it
properly.

If *GSM7* have a modified charset (i.e. not the default *BMP*) then
there will be a header in front that specifies that. That header will
take up 7 bytes after packing (in other words 8 characters), making
the maximum length of the *SMS* 152 characters.

<div class="left-right-row">
    <img class="image" src="/img/blog/sms/67_chars.png" alt="Characters left: 45/67 (3)" />
    <div class="text">
        Using emojis will convert the encoding to USC-2. Note the missing 3
        characters and that there are multiple SMSes. When multiple messages
        are sent, the phone needs some way of telling how to reassemble the
        messages. The headers take up 6 bytes per message for this purpose.
    </div>
</div>

However when *MAP* v2 started to use *TCAP* dialogues there was more
information to put into the packet and 140 bytes might not be left for
the *SMS*. The *SMSC* would then need to break up the message into
chunks, and start the transaction an empty *TCAP* `Begin` message and
set a flag in the *MT* request called `moreMessagesToSend`. It would
then send the actual text inside `Continue` messages. In the end
the `End` (_hehe_) message is transmitted as a response and the
transaction is finished.

The response back to a *MO* request is, as previous stated, an
acknowledgement if the *SMS* have been successfully submitted to the
*SMSC* or not (again either `returnResult` or `returnError`). For *MT*
requests the acknowledgement is if the *SMS* is successfully delivered
or not.

If the *MT* request is not successful, the *SMSC* could ask the *HLR*
(the Home Location Registry is basically a database containing user
subscriptions and knowledge of which nodes the mobile talked to
latest) to be notified when the user comes back online. A bunch of
other *MAP* messages are then involved, such as
- `reportSMDeliveryStatus`,
- `informServiceCentre`,
- `alterServiceCentre`, and
- `readyForSM`.

_At least this is main idea I think..._

# Differences in MAP versions for SMS

There are three *MAP* versions defined for *SMS*. The latest version
(v4) is not used in the context of *SMS*.

In version 1, the dialogue portion was not invented and all chunks are
sent in new *TCAP* dialogues. The size of the user data could then
be 140 bytes.

In version 1 and version 2 there is no difference between *MT* and
*MO*. Everything is sent as another type of message `Forward-SM`,
which does not include any privacy correlation ids, and there are no
fancy responses with delivery status. There is still an
acknowledgement, but is in a form of an empty message.

Only way to see difference between an *MO* and a *MT* in version 1 is
to look at the addresses and see if they are either coming from an
*SMSC* or going to an *SMSC*.

The `moreMessagesToSend` flag was implemented in version 2, so it exist
only for version 2 and version 3.

Ok, to recap, what do we have now

- `Begin`, `Continue`, `End`, `Abort` messages.
- Dialogue handshake in the first request/response messages sent.
- `MT-Forward-SM`, `MO-Forward-SM`, `Forward-SM`
- Involved parties: Mobile phones, *MSC* and *SMSC*

_Wait we are missing something. I've only covered 2G,3G.._

# What about 4G/LTE and beyond (5G)?

_Ouch._

*LTE* networks does not use any of the *M3UA*, *SCCP*, *TCAP*, *MAP*
protocols. In *LTE* networks the main message type is *Diameter* which
doesn't contain fragmentation and can contain larger
messages. Everything is sent in one request and every request is
answered with a response. *Diameter* could use either *TCP* or *SCTP* as
transport layer.

To make *SMSes* work on *LTE* networks a new interface *SGs* was
invented which translates *SS7* messages to *Diameter* messages.  This
interface is in most cases used by the *MSC* to translate the messages
to *Diameter* and forward it to the *MME* (Mobility Management Entity,
similar to *SGSN* but in the *LTE* network). The *MME* then forwards
it to the *UE* (user equipment, same as mobile subscriber or *MS* in
*GSM*/*GPRS* networks).

There is also the *SM-over-IP* that does not use *Diameter*. Instead
it uses the *SIP*-protocol (Session Initiation Protocol) to transfer
messages over *IP* and *TCP* or *UDP* to the *IMS* (IP Multimedia
Subsystem). *SIP* is also used to enable VoLTE (Voice over *LTE*).

For 5G the *SMSC* is called *SMSF*; The Centre becomes a Function. The
signalling will be based on *HTTP2*/*JSON* ontop of *TCP*. The *SMSF*
will still need to support both *MAP* and *Diameter*.


Relevant [xkcd](https://xkcd.com):
<div class="left-right-row">
    <table class="text">
        <tr>
            <td>Generation</td>
            <td>2G/3G</td>
            <td>4G</td>
            <td>5G</td>
        </tr>
        <tr>
            <td>Radio technology</td>
            <td>GSM/GPRS</td>
            <td>LTE</td>
            <td>NR</td>
        </tr>
        <tr>
            <td>Protocol group</td>
            <td>SS7</td>
            <td>Diameter</td>
            <td>HTTP2/JSON</td>
        </tr>
        <tr>
            <td></td>
            <td>Node</td>
            <td>Agent</td>
            <td>Function</td>
        </tr>
        <tr>
            <td>Session management</td>
            <td>SGSN</td>
            <td>MME</td>
            <td>AMF</td>
        </tr>
        <tr>
            <td>SM management</td>
            <td>SMSC</td>
            <td>SMSC</td>
            <td>SMSF</td>
        </tr>
        <tr>
            <td>User management</td>
            <td>HLR</td>
            <td>HSS</td>
            <td>UDM</td>
        </tr>
        <tr>
            <td>Device</td>
            <td>MS</td>
            <td>UE</td>
            <td>UE</td>
        </tr>
    </table>
    <a class="image" href="https://xkcd.com/2365/"><img src="https://imgs.xkcd.com/comics/messaging_systems.png" /></a>
</div>

# Headache

Hopefully you did not get a (too severe) headache by reading this
post.

I've spared you with **a lot** of details on the lower level of
protocols. There are loads of implementation details that must match
the specifications, otherwise you will get all kinds of aborts and
possibly even dropped traffic.
For instance we learned that we accidentally sent dialogue portions in
more than the first response back, which seemed to work at first
glance; at closer inspection we found out that some messages were
dropped because the length of the packet became larger in size than an
allowed value. We could still send them, but the other side was not
able to receive them.

Remember: Telco is old and complex. However, it should still function
with different setups and on different hardware, vendors and with
environment.

Fun-fact: Sometimes a boolean value is not just encoded as a 1
or 0. To save bandwith telco decided that you could also just define
it as a `NULL OPTIONAL` meaning that if it is defined (but lacks a
value), then it is considered true.  if it is not defined then it is
considered false. This is the case for the `moreMessagesToSend` flag.

Hope you enjoy the reading as much as I enjoy digging into these
protocols!

Special thanks to *Stein Eldar* and *Tobias* for giving me feedback
and answering all my stupid questions on this subject, and *Atanas*
for making me realize there are yet other protocols to carry *SMS*.
Also *Bung* for this amazing addition:

#### Addition from *Bung*

"I’ve spared you with a lot of details on the lower level of
protocols" needs a lot of emphasis.

Some funny extra complexities that just came into my mind while
reading:

The actual *SMS* text goes into a field called "user data". There is a
field called "user data length". When the message is *GSM7* encoded, the
"user data length" is the number of characters in the text message,
otherwise it's the number of bytes in the user data.

Normally the user data only contains the (encoded) text of the
message, but there is a field called "user data header" which
indicates that there is a length prefixed TLV header in the "user
data". If the message is *GSM7* encoded, then the "user data lenght"
field needs to be filled as if the "user data header" was really *GSM7*
encoded, which it isn't.

*GSM7* is really a variably septet encoding, one character can consist
of either 7 or 14 bits similar to how a *UTF-8* code point can be 8,
16, 24, or 32 bits. Unlike *UTF-8* however, there are not multiple
byte ranges corresponding to the different locales (called code pages
in Unicode) but a single 7 bit shift character that says that
following 7 bits should be interpreted as a character from a
translation table which is communicated out of band.

So all that is only the complexities of a single field (the user data)
for a single encoding (*GSM7*).

Then the real kicker: The protocol for *SMS* is really called *SM-TP*
(Short Message Transfer Protocol). *SM-TP* is the same for 2G/3G (on top
of *MAP*), 4G (on top of *SIP*), 5G (on top of *HTTP*). So the very
same stupid "length prefixed TLV encoded headers concatenated with
encoded text with length either in characters or in bytes depending on
encoding and actual meaning of the encoding communicated out of band
but only sometimes" field exists no matter if your talking over old
legacy *MAP* or the modern *HTTP/XML* based 5G.
