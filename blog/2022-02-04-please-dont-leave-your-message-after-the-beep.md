---
slug: please-dont-leave-a-message-after-the-beep
title: "Don't leave a message after the beep"
date: 2022-02-04
tags: [messaging, voicemail, api]
authors: [tor-odland]
---

Think quickly: When was the last time you dialed into your voicemail to listen to a message someone had left for you? Chances are, it’s been a while. The common view is that voicemail isn’t popular any longer. That’s both true and not true, depending on how you look at it. Find out where voicemail - loved by some and hated by others - is heading.

<!--truncate-->

“Please leave your message after the beep” - you’ve probably heard it a million times, especially if you were born before 1982. Or you’ve repeated that sentence over and over as you tried to make an attractive recording of your own voice as your greeting to a missed caller. We knew it wasn’t necessary to say it (people knew what to do after the beep) but we still recorded it that way. Probably because we didn’t know what else to say.

For many of us, those days are over. We just don’t bother with setting up our voicemails, we never leave voicemails and we certainly never dial up to listen to a message someone left for us. For my own part, I don’t even know if people who call me get to a voicemail system.

To others, voicemail is really crucial.

> “We see the importance of voicemail increasing or declining based on specific demographics,” says Luke Campbell, the CEO of [Vxt](https://www.vxt.co.nz), a communications technology company in New Zealand.

Luke describes people working in transactional industries as particularly passionate about voicemail. Lawyers, real estate agents, plumbers - they might get dozens of calls every day. So where others turn off voicemail, these people might want to get their voicemails forwarded to their emails, be able to share their inbox with a colleague or assistant, have voicemails automatically translated to text and integrate their messages with productivity tools like Asana or an ERP system. Some need to have their messages stored for regulatory or security purposes. A real estate agent with (say) 10 000 contacts may want to customize the greetings so that every time one of the 200 Johns or Jessicas call, they get a personal message stating their name. To some, that might be a differentiator, to others a nuisance.

Besides, Luke tells me, how dying is voicemail really, when in New Zealand, there are two million voicemails left every day, in a population of 4,6 million?

### A vocal assistant

Karel Bourgois paints a similar picture. He’s the CEO of [Voxist](https://www.voxist.com), a voicemail and messaging app, based in France. He’s seen voicemail transform into more of a productivity tool for businesses. Young people might still play around with things like customizing their voicemail greetings to individual callers, but in general, they don’t like talking.

<img src="/img/blog/voicemail.jpeg" alt="Breaking up via voicemail" width="300"/>

> “I see voicemail becoming more like a vocal assistant. A restaurant, for example, can let patrons reserve tables directly into the booking system just using their voices. A law firm or a bank can integrate voicemail with their CRM systems. A big movement now is to move voice messaging into core automation,” Karel says.

So voicemail systems continue to evolve. Users either don’t want voicemail or they want a voicemail service that can travel with them across devices, operators and national borders.

To Luke Campbell, the very challenge of requiring people dial into a voicemail service and listen to a bunch of commands before you get to your messages was in itself a problem big enough to be solved for kickstarting his business. Vxt started as a voice messaging service and today has evolved into a communication automation company, echoing Karel’s observations.

### The routes you can go down

If you want to improve the voicemail experience, one route you can go down is to add more features, to make it more flexible and powerful.

Another route is to make the user experience simpler. To make it easier and faster to listen to voicemail.

That’s essentially what Working Group Two and the Swedish mobile operator challenger [Vimla](https://vimla.se) did. In response to a regulatory challenge by the Swedish Post & Telecom Authority (PTS), Vimla recently launched a voicemail service where messages get delivered to a user’s phone as an audio file (via MMS). The customer can listen to it whenever he/she wants without needing to dial into the messaging system. As a result, hackers can no longer get access to other people’s voicemails (which PTS had set out to stop) and customers get a better messaging experience.

This simple, yet elegant solution serves as a powerful example of another and more fundamental development in the telecom industry. For a few years, Working Group Two has developed and managed the mobile core network of Vimla as-a-service in the cloud, enabling Vimla to operate its network both more efficiently and taking advantage of micro innovation at scale. When this challenge came around from PTS it took Vimla only a few months to respond with this lightweight and efficient solution. Working Group Two’s developers used existing APIs to connect two otherwise separate systems (voicemail and MMS). The API-based bridge between them allowed voicemails to be sent as MMS. Today, tens of thousands messages are sent every day in the Vimla network.

> “We genuinely think this is a better product for our customers,” says Viktor Georgsson, Head of Operations with Vimla.

Other operators in Sweden responded to the PTS requirements by beefing up their security systems and protecting voicemail inboxes with longer authentication codes and more rigorous encryption. Perhaps at the expense of the customer experience.

### Ask yourself four questions...

At the end of the day, voicemail must face the test of any other digital product, says Marius Waldum, the Head of Product at Working Group Two. He’s in charge of the effort of developing the company’s ecosystem platform - where third party digital products are developed to run and meet users across multiple operators worldwide. Working Group Two has developed a standardized voicemail product called Voicebox, from which Vimla’s solution took its inspiration.

You need to ask yourself four questions, Marius points out. First, is the product **valuable** to its users? Is it **usable** for them? Is it **possible to build**? And is it **economically viable**?

> “Voicemail is a powerful reminder that a product doesn’t need to be desired by everyone, but by someone,” Marius concludes.
