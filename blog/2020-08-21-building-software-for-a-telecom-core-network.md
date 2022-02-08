---
slug: building-software-for-a-telecom-core-network
title: Building software for a telecom core network
date: 2020-08-21
tags: [telecom, software-development, core-network, app-ecosystem]
authors: david-åse
---

One of the goals of **wgtwo** is to enable operators and third parties to build products and services for the “core network” of the telecom stack. In short, this means providing API access to a subscription’s telecom functionality (messaging, calling, etc). In this article we will show how we built VoiceBox, a Voicemail forwarding application.

<!--truncate-->

## The product

One of the most common complaints people have with their Voicemail service in Europe is that you have to call in to your Voicemail to listen to your messages. In order to play the message, you have to navigate through a slow voice menu using your dialpad. We believed this would be easy to improve.

Our product idea was simple. When Alice leaves a voicemail message for Bob, Bob receives this message either as an audio file or as a speech-to-text transcript.


![VoiceBox splash screen](/img/blog/building-software-for-a-telecom-core-network/voicebox-splash.png)
![VoiceBox home screen](/img/blog/building-software-for-a-telecom-core-network/voicebox-home.png)
![Android messaging app](/img/blog/building-software-for-a-telecom-core-network/message-inbox.png)


The product idea isn’t what most people would call revolutionary, but almost all of the world's mobile operators have hermetically sealed core networks. This means it would be impossible to build this product without lawyering up and coming to some sort of agreement with one of them. The **wgtwo** core network, however, is open and provides API access to Voicemail, MMS and SMS  (among other things), which is just what we need to build our product.

## Developing on the **wgtwo** platform

To create a product on the **wgtwo** platform, the first thing you have to do is create a free developer account at <a href="https://developer.wgtwo.com" target="_blank">https://developer.wgtwo.com</a>. Once you have signed up, you have to create an Organization and add a Product to that organization.

You can specify what permissions your product will require in the `Product > Scopes` tab:

![Developer Portal Scopes Screen](/img/blog/building-software-for-a-telecom-core-network/developer-portal-scopes.png)

In an ideal world, VoiceBox would work like this:
1. The subscriber signs in and enables the desired functionality in VoiceBox.
2. The next time the subscriber receives a voicemail, an event is fired by **wgtwo**’s core network, which VoiceBox receives.
3. VoiceBox triggers an SMS/MMS send using our APIs.
4. The subscriber receives an SMS/MMS from the sender “VoiceBox”.

In a few months time this ideal world should be reality, but at the time of writing (mid August 2020) we’re missing the events API and the “Send from Product” API. Currently VoiceBox works like this (changes are highlighted):
1. The subscriber signs in and enables the desired functionality in VoiceBox.
2. The next time the subscriber receives a voicemail, **VoiceBox will discover it by polling**.
3. VoiceBox triggers an MMS send using our APIs.
4. The subscriber receives an **MMS from their own number**.

It’s not perfect, but it still demonstrates the potential of the platform. None of this can happen without the subscriber’s consent though, so in the next section we’ll have a look at how that works.

## Obtaining user consent

The app we're building is touching sensitive data, and we can't do that without asking the subscriber if it’s okay. The **wgtwo** platform includes an OAuth implementation with SMS authentication, which means that we can be reasonably sure that the subscriber has consented.

When a subscriber opens VoiceBox for the first time, they’re met with a login page, and after completing a pin challenge they arrive at an OAuth consent screen. Here they have to accept the terms of VoiceBox, as well as all the required scopes.

The login is branded to look like the product (notice the pink action button), while the consent screen is branded to look like the operator (in our case this is <a href="https://vimla.se" target="_blank">Vimla</a>, a Swedish operator which uses our platform):
![ID login screen](/img/blog/building-software-for-a-telecom-core-network/msisdn-screen.png)
![ID pin screen](/img/blog/building-software-for-a-telecom-core-network/pin-screen.png)
![ID consent screen](/img/blog/building-software-for-a-telecom-core-network/consent-screen.png)

Our platform has a standard <a href="https://oauth.net/2/" target="_blank">OAuth 2</a> flow. When the subscriber taps “Accept”, **wgtwo** redirects the subscriber to the third-party, which receives an "access token" that allows them to act on behalf of the subscriber. In this case the access token will let the third-party fetch Voicemails and send MMS from the subscriber, so it’s important to keep it safe.
Next we’ll look at using this access token to perform actions on the subscriber's behalf.

## Connecting to the **wgtwo** API

All **wgtwo** APIs are <a href="https://grpc.io/" target="_blank">gRPC</a>. This can be a bit intimidating if you are used to REST APIs, but luckily we also have official Java clients distributed through Maven/JitPack. If you want to use a different language you can generate your own client using our public proto files. One of the benefits of gRPC is that you don’t have to ever write your own rest adapter for the API.

Let’s have a look at how you can fetch a Voicemail file:

```kotlin
fun getVoicemail(user: User, uuid: String): Voicemail? {
    val getVoicemailRequest = VoicemailProto.GetVoicemailRequest.newBuilder().setVoicemailId(uuid).build()
    val voicemail = try {
        blockingStub
                .withOAuthTokenFor(user) // this function attaches the access token (from the consent screen)
                .getVoicemail(getVoicemailRequest)
    } catch (e: StatusRuntimeException) {
        logger.warn("Error getting voicemail $uuid; ${e.message}")
        throw e
    }
    if (voicemail.metadata) {
        return Voicemail(
            ... // we map the gRPC voicemail object to a VoiceBox specific object
        )
    } else {
        logger.warn("No voicemail metadata for $uuid")
        return null
    }
}
```

We use the official **wgtwo** API client to fetch a voicemail based on the UUID of the voicemail, which we polled for earlier (code not shown).

Unlike with REST APIs, we don't have to think about writing client code and handling HTTP responses, this is taken care of by the gRPC client library.

Once we have the voicemail, we send it to the subscriber using their own number as the sender:

```kotlin
fun sendMms(user: User, phone: Msisdn, audio: ByteString) = try {
    val request = MmsProto.SendMessageFromSubscriberRequest
            .newBuilder()
            .addMessageContent(
                MmsProto.MessageContent.newBuilder().setAudio(
                    MmsProto.AudioContent.newBuilder().setWav(audio)
                )
            )
            .setToE164(phone.toPhoneNumberProto()) // the receiver is the same as the sender
            .setFromSubscriber(phone.toPhoneNumberProto()) // the sender is the same as the receiver
            .build()
    val response = blockingStub
            .withOAuthTokenFor(user) // this function attaches the access token (from the consent screen)
            .sendMessageFromSubscriber(request)
    if (response.status == MmsProto.SendResponse.SendStatus.SEND_OK) {
        true
    } else {
        logger.warn("Unable to send MMS to ${phone.e164}: ${response.description} (${response.status.name})")
        false
    }
} catch (e: Exception) {
    logger.warn("Unable to send MMS to ${phone.e164}: ${e.message}")
    false
}
```

This is also pretty straightforward, except for the part where the sender is also the receiver. In the future this will be a bit less confusing, since we’ll be sending the MMS from the product (“VoiceBox”) instead of the subscriber itself.

## Conclusion

As you can see, we’re still in the early stages of our developer platform. In the coming year, we will be adding a lot more APIs, as well as building an app-store where subscribers can browse products that they want to add to their subscription. We believe opening up the core network in this way will allow third-party developers to build incredible apps that will lead to much happier subscribers, which will in turn lead to subscriber growth for operators on our platform.

At the time of writing, all apps on the platform have to be free, but we are working on a monetization model similar to that of the Apple and Google app-stores. Our main priority is to come up with a model that is fair to both third-party developers and operators.

If you’re interested in our platform, please head on over to <a href="https://developer.wgtwo.com" target="_blank">https://developer.wgtwo.com</a> and create an account. If you have any questions please contact us at <products@wgtwo.com>.
