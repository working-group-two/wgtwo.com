---
slug: kafka-timers
title: "Kafka timers"
date: 2021-02-28
tags: [kafka, timer, stateless]
authors: sergey-zyrianov
---

A timer is a cornerstone of any software that communicates over the network. There are plenty of implementations
that provide a timer facility. Most of them are in memory and will lose scheduled timers should the application crash.
In this blog we discuss durable Kafka timers that do not depend on in memory state. By design
we shall assume 1 second resolution of these timers.

<!--truncate-->

Before taking on timers let's cover some Kafka basics.

## Kafka concepts
There are a few Kafka concepts in play to simulate timers - Kafka topic, Kafka stream, Kafka streams library.
Where *topic* is append only log of events, *stream* is a cache of N most recent events on the *topic*,
and the *streams library* is a software library implementing the concept of the *stream*.

A kafka topic resides inside the Kafka servers, but Kafka streams library keeps track of a topic's most recent
events on the application side - the stream. The stream is a key/value cache with random read access unlike
append only topic log. Key/value cache is not the only thing the library provides. It can also join
the streams. When an event and its key appear on a stream, the library looks up the same key in the other streams participating in the join.
It is using key/value cache associated with each stream and gives the result to the application.
The result will have the present event enriched with the matched past events from the joined streams.
Joining two streams will yield the timer callback. Let's see how.

## Implementation
Since it is Kafka, timer expiration shall result in an event posted on a topic of user's choice at the right time.
This event is delayed until due time by joining two streams: *oscillator* and *timer-request*. Callback
event is pushed to *timer-request* topic with key equal to the expiration timestamp. Oscillator topic
is the clock dial counting seconds since UNIX epoch in real time. At some point it will get to the second
which is equal to the key on *timer-request* topic, and the join will come up with the callback event.

An excellent summary on "timer wheel" and other timer algorithms can be found in this linux kernel [thread](https://lwn.net/Articles/156329/).
Our implementation of timers using Kafka resembles the "timer wheel" algorithm with a bucket on each second to keep callbacks.
*Oscillator* topic models rotating clock dial, *timer-request* is bucketing callbacks by the expiration timestamp, and join of these two
contains content of the expired bucket with all the callbacks in it.

![](/img/blog/kafka-timers/kt.png)

There are two Kafka applications running together to service these topics:
* Oscillator
* Futures

### Oscillator

With the resolution of 1 second oscillator keeps pushing *oscillator* topic:
```kotlin
while (running) {
    val nowSeconds = System.currentTimeMillis() / 1000L
    while (timestampSeconds < nowSeconds) {
        timestampSeconds++
        KafkaProducers.send(
            "oscillator",
            timestampSeconds.toString(),
            "1"
        )
    }
    Thread.sleep(200)
}

```

### Futures

When requesting a timer by pushing *timer-request* topic, the user provides a callback structure
used to dispatch timer event:

```
message Future {
    string callBackTopic = 1;
    string callBackKey = 2;
    bytes callBack = 3;
}
```

Joining two streams on the key equal to the UNIX second will give all expired timers, and
their callback coordinates.

First, setup a join with *WINDOW_SIZE* large enough to cover the longest timer duration

```kotlin
val oscillator = builder.stream<String, String>("oscillator")
val timerRequest = builder.stream("timer-request", Consumed.with(Serdes.String(), FutureSerde()))
val timeoutEvents =
    oscillator.join(
            timerRequest,
            { _: String?, future: Future -> future },
            JoinWindows.of(WINDOW_SIZE),
            StreamJoined.with(
                    Serdes.String(),
                    Serdes.String(),
                    FutureSerde()
            ).withThisStoreSupplier(
                    Stores.persistentWindowStore(
                            "join-this-store",
                            WINDOW_SIZE.plusMinutes(30),
                            WINDOW_SIZE,
                            true
                    )
            ).withOtherStoreSupplier(
                    Stores.persistentWindowStore(
                            "join-other-store",
                            WINDOW_SIZE.plusMinutes(30),
                            WINDOW_SIZE,
                            true
                    )
            )
    )
```

Second, kick of the processing loop looking for expired timers

```kotlin
timeoutEvents.process(
        ProcessorSupplier {
            object : Processor<String, Future> {
                override fun init(context: ProcessorContext) {}
                override fun process(key: String, value: Future) {
                    KafkaProducers.send(Topic.valueOf(value.callBackTopic),
                            value.callBackKey,
                            value.callBack.toByteArray()
                    )
                    Metrics.timerFired(value.callBackTopic)
                }

                override fun close() {}
            }
        }
)

```
### Cancelling a timer
There is no way to cancel these timers as events can't be easily removed from the Kafka stream.
Still, it is possible to ignore timer events by using a token in callback request, and a variable
in timer receiver state. When scheduling a timer the receiver puts the same token in two places:

* callback struct it publishes on the *timer-request* topic
* internal variable timerToken

As timer fires receiver compares value in timerToken and in the callback event. Based on the result it
draws a conclusion if timer is to be ignored or not. All it has to do to cancel a timer is to reset
value in its timerToken variable.

Since normally Kafka does "at least once" delivery it is a good idea to reset the timerToken immediately
after notification event.

### What to worry about

Kafka streams library is using local disk storage to keep the cache. The storage shall be large enough to host
all timer requests based on the product of *timer-request* topic retention, callback size and timer scheduling rate.
Thankfully Kafka is well-equipped to deal with this sort of troubles.

Oscillator must keep ticking otherwise timers will stop coming. Make sure to have
metrics/alarms in place to stay on top of Oscillator health. Deploy few of them for redundancy having in
mind the extra load they will generate on timer users.

## Conclusion

There are many options to export application state to the data tier layer. Timers are often part of that
state. Above we showed how to apply Kafka primitives to achieve a goal of making application "stateless" even
if the state is using timers. It has its costs and benefits.
