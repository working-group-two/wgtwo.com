---
slug: how-product-bundling-simplifies-distribution
title: "How product bundling simplifies the distribution challenge"
date: 2022-10-13
tags: [saas, operators, bundling, products, distribution, ecosystem]
authors: [odd-trondrud]
image: ./peoplebundle.jpg
---

import ImgWithCaption from '../components/imgWithCaption'

Our big belief is that the telecom industry should start building global platforms with the aim of achieving network effects - like many of the adjacent industries in devices and apps. To enable this, we’re building a mobile core from the ground up, running it in the public cloud and offering it as-a-service globally. To make it even harder (and fun) for ourselves, we’re also developing a full, API-based global product ecosystem to give telecom operators new revenue and differentiation opportunities. 

One of the questions we get from operators is how to distribute products to their subscribers. There are multiple ways to go about it, but in this post, we'll show how an operator can enable products for their subscribers in what we call bundling.

<!--truncate-->

### Part one: What is bundling?

Bundling. What is bundling? Probably something like “to group together and sell for one price." Why would you want to group something together in a bundle? How do you bundle something abstract like a “product”, and what would you even bundle that together with? These are all good questions.

Most people are probably familiar with the concept of "pre-installed applications," like how your smartphone comes out of the box with software to handle SMS and MMS messages, or a web browser that might not be the one you personally prefer. You could think of this as a type of bundling - including a product or service within another product. At Working Group Two we do not make phones or applications that run on phones. We are creating an ecosystem for products that run on top of or adjacent to mobile subscriptions by using our mobile core platform (which is also a thing we are doing, as we mentioned earlier).

### Part two: How does our bundling work? 

“Now hold on,” you might think, “what’s this got to do with... whatever it is you’re trying to accomplish as a company?” Well, here at Working Group Two we strongly believe that there is a lot of value in talking to and listening to our customers and users. One of the subjects we’ve discussed at length with some of our customers is how to distribute products from the operator to their subscribers. 

So far we’ve identified three different approaches to this:

- **1. Single**: A single subscriber gets the product, by personally activating it for their subscription. The subscriber would need to find and activate the product via some interface like an “app store” or marketplace. 
- **2. Everyone**: The entirety of the subscriber base gets the product. 
- **3. Bundling**: A subset of the subscribers gets the product, by including it into one or several plans or offerings provided by the operator.

Some products might seem like ideal candidates for distribution through a marketplace (option 1). A product which automatically transcribes calls (into text) isn’t something everyone needs, but there’s definitely people who are willing to pay for such a thing. The marketplace approach introduces another distribution-related problem, however, that of distributing the knowledge of the marketplace and its contents. On the flip side, enabling a product for the entirety of the subscriber base (option 2) makes sense if said product is marketed as a core feature of the operator’s subscriptions or if it's meant to take care of market-specific regulatory requirements.  

Option 3 (bundling) solves the information-distribution problem of the marketplace approach by allowing the operator to market the bundled products as features of a certain subscription tier. 

Here are some examples:

|  |  |
|---|---|---|
| **B2B mobile operators** | An operator might realize that not all of their potential customers need a full switchboard solution (known in telco language as a PBX), and decide to offer that as an “add-on” or a bundled part of a higher-priced subscription package. |
|  | An operator could offer advanced speech-to-text solutions to lawyers, real estate agents, and translation companies to help them automate their workflows. |
| **B2C mobile operators** | An operator could bundle a web content filtering product along with a subscription package aimed at kids (or rather the parents of kids – who in some market segments have their own smartphones by the age of eight). |
|  | An operator could offer a subscription aimed towards groups of people most likely to become victims of malicious text message scams, including additional anti-scam measures. |


The operators will be using an API where they manage their subscriptions. This is where they can activate new subscriptions, toggle high-speed data based on the users quota, and other operations.

Using the same API, they can send a list of which products should be bundled as part of these subscriptions. That is, the product they include in this list will be granted limited access allowing them to do their required interaction with the subscription. That may be everything from getting call information in real-time to receiving and forwarding SMSs.

These bundled products may be selected as part of the user's price plan, as e.g. enabling web filtering for kids for the subscriptions in the kids segment, or it can be additional products that the operators offer through their portal.

This concept of offering more tailored subscriptions to specific segments of the market is not new, but with the addition of products that leverage the Working Group Two ecosystem, the possibilities could go beyond most subscribers’ current expectations of what a mobile subscription can offer.

<ImgWithCaption
  style={{
    width: "50%",
    float: "right",
    marginLeft:"20px"
  }}
  caption="The team is testing out bundling in the physical world"
  src={require("!file-loader!./peoplebundle.jpg").default}
  />

Operators using the Working Group Two mobile core can already select products from our product portfolio to bundle into their various price plans via our product marketplace. All it takes is a couple of mouse clicks. And yes, of course it can be integrated with their BSS (that’s a Business Support System, for things like billing, order management, and revenue management). 

### Part three: Come hang out with us

If this sounds exciting to you as an operator, do not hesitate to [reach out.](https://www.wgtwo.com/contact/)

Perhaps you’re not an operator, but instead a developer of sorts already working within the mobile products space or just have an idea for a product within this space? You could check out our [Developer Portal](https://developer.wgtwo.com) and 
[API documentation](https://v1.docs.wgtwo.com). You could also [reach out to us on Slack](https://developer.wgtwo.com/join-us-on-slack) if you have any questions.
