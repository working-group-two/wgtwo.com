---
slug: the-specs-behind-the-specs-part-1
title: The specs behind the specs part 1
date: 2022-01-11
tags: [telco, ASN.1, dia]
authors: seba
---

"Abstract Syntax Notation One (ASN.1) is a standard interface
description language for defining data structures that can be
serialized and deserialized in a cross-platform way." -
[Wikipedia](https://en.wikipedia.org/wiki/ASN.1)

<!--truncate-->
# Introduction

Today you'll read about a specific language used to describe many of
the messages in the telecom specifications. It will be a deep-dive
into technical parts, so I imagine you could just use the blog post
when you want to look up different parts without fully reading it.

In **wgtwo** we use this language for some specific telco
messages (such as SIGTRAN layers TCAP/MAP/CAP, as well as S1AP, NGAP
and probably some more). They are defined directly in some of the
telecom specifications, and because of that it is possible to use them
to send messages between different telecom cores.

This will *probably* be a two piece blog post as there is another
interface describing language which is not ASN.1, and this is already
a very long post. The other specification is used in Diameter
dictionaries, but I'll spare those for now. It has already taken me
about half a year to finish up this article.

There might be some Erlang specific paragraphs here and there, but
this blog post is mainly about ASN.1 as a specification, which can be
used in any language supporting it.  For Erlang specifics I came
across [this blog
post](https://medium.com/erlang-battleground/erlang-asn-1-abstract-syntax-notation-one-deeb8300f479)
written by Viacheslav Katsuba, and because it is build into Erlang by
default I recommend the
[APIs](https://www.erlang.org/doc/apps/asn1/asn1_getting_started.html)
as well.

**DISCLAIMER: SEVERE HEADACHE MIGHT FOLLOW.**

# Abstract Syntax Notation One

Abstract Syntax Notation One (ASN.1 for short) provides a
high level description of messages. It abstracts the language
implementations from the protocol design.

It was initially used by [Open Systems Interconnection
(OSI)](https://en.wikipedia.org/wiki/Open_Systems_Interconnection) to
describe email messages but is used by many other applications
especially within telecommunications and cryptography.

You might have heard of similar such abstract syntax notations used
for interface definitions such as Google Protocol Buffers, or
Facebook's Apache Thrift, but those languages have not been managed by
a standardization organization, so the owning corporations could (in
theory) make breaking changes or change the license or even remove the
language definitions overnight.

Anyway, back to ASN.1

The first ASN.1 standardization came out 1984, and there have been
many improvements since, for instance with the 1994 update which added
extended functionality for telecommunication technologies.

"Long live ASN.1!" - Olivier Dubuisson from the [best
book](https://www.oss.com/asn1/resources/books-whitepapers-pubs/asn1-books.html#dubuisson)
that I've read on the subject. (How many ASN.1 books are there you
might wonder? Actually there were [more
books](https://www.oss.com/asn1/resources/books-whitepapers-pubs/asn1-books.html)
than I expected on the subject, but to make it perfectly clear: I did
only read the one.)

Off-topic but a bit of a fun fact I got from reading the book which I
didn't know about before is that 'little Endian' and 'big Endian',
which are used to denote if the bitstring should be read from leftmost
or rightmost bit, actually originates from the 1726 best-seller
[Gulliver's
travels](https://www.ling.upenn.edu/courses/Spring_2003/ling538/Lecnotes/ADfn1.htm).

## The how and why

ASN.1 builds on the following ideas:

- Data structures to be transmitted should be described regardless of
  programming language used transmitting or receiving them.
- The notation should allow building complex data types from basic
  types, and be able to do so recursively.
- The notation must be formal to prevent ambiguities.

That said, ASN.1 is not an abstract syntax in itself, but a language
to describe abstract syntaxes.

There are currently four main ASN.1 specifications (listed below), as
well as at least one specification per encoding rule (listed in the
[last section](#encodings)).


| ITU-T no                                                                               | ASN.1 specifications                                                           |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [X.680](https://www.itu.int/rec/T-REC-X/recommendation.asp?lang=en&parent=T-REC-X.680) | Abstract Syntax Notation One (ASN.1): Specification of basic notation          |
| [X.681](https://www.itu.int/rec/T-REC-X/recommendation.asp?lang=en&parent=T-REC-X.681) | Abstract Syntax Notation One (ASN.1): Information object specification         |
| [X.682](https://www.itu.int/rec/T-REC-X/recommendation.asp?lang=en&parent=T-REC-X.682) | Abstract Syntax Notation One (ASN.1): Constraint specification                 |
| [X.683](https://www.itu.int/rec/T-REC-X/recommendation.asp?lang=en&parent=T-REC-X.683) | Abstract Syntax Notation One (ASN.1): Parameterization of ASN.1 specifications |


# Nitty gritty

## Modules

The purpose of an ASN.1 module is to name a collection of types and/or
value definitions.

It consist of a module reference and an optional object identifier
together with the declaration of the `DEFINITIONS` type definition.
Note that even though the object identifier is optional, it is
considered bad practice to leave it out. The reason for it being
optional is for backward compatibility; it was not part of the
original ASN.1 specification.
The `DEFINITIONS` keyword usually comes together with the `BEGIN` and
`END` keywords so multiple definitions can be done. (What else is the
point of a module if not to make a collection...).

The Erlang ASN.1 compiler requires each module to be in a separate
file, but generally one ASN.1 file could contain many modules.  Usual
file endings are `.asn` and `.asn1`. One
[trick](https://www.erlang.org/doc/apps/asn1/asn1_getting_started.html#multi-file-compilation)
that can be used to circumvent this Erlang specific problem is to list
multiple ASN.1 files in a new file ending with `set.asn`.

<!-- THIS LINK IS/WAS BROKEN 2022-12-23 AND IS THUS COMMENTED OUT
One example of a file with many modules exist in the CAP specification
[3GPP TS 29.078](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1597)
-->

The ASN.1 template for a module
```asn.1
ModuleReference ObjectIdentifier
DEFINITIONS ::= BEGIN

END
```
as seen in an example

```asn.1
CAP-operationcodes {itu-t(0) identified-organization(4) etsi(0) mobileDomain(0) umts-network(1)
modules(3) cap-operationcodes(53) version8(7)}

DEFINITIONS ::= BEGIN
```

For information about the object identifier see the [types section](#object-identifier)

### Importing from other modules

Importing types, values and other structures from other modules can be
done with the `IMPORTS` and `FROM` keywords in the beginning of the
module body.  The `IMPORTS` keyword ends with a single semicolon `;`,
and the different imported definitions are comma-separated.

The meaning of the optional `IMPLICIT TAGS` keywords I'll handle
[later](#automatic-implicit-explicit-tags).

```asn.1
CAP-datatypes {itu-t(0) identified-organization(4) etsi(0) mobileDomain(0) umts-network(1) modules(3) cap-datatypes(52) version8(7)}
DEFINITIONS IMPLICIT TAGS ::= BEGIN

IMPORTS

	Duration,
	Integer4,
	Interval,
	LegID,
	ServiceKey
FROM CS1-DataTypes {itu-t(0) identified-organization(4) etsi(0) inDomain(1) in-network(1)
modules(0) cs1-datatypes(2) version1(0)}

	BothwayThroughConnectionInd,
	CriticalityType,
	MiscCallInfo
FROM CS2-datatypes {itu-t(0) identified-organization(4) etsi(0) inDomain(1) in-network(1)
cs2(20) modules(0) in-cs2-datatypes(0) version1(0)}

-- ...more imports...
; -- IMPORTS end here

END -- CAP-datatypes ends here --

-- CAP-errortypes module starts here --
CAP-errortypes {itu-t(0) identified-organization(4) etsi(0) mobileDomain(0) umts-network(1) modules(3) cap-errortypes(51) version8(7)}
DEFINITIONS IMPLICIT TAGS ::= BEGIN


END -- CAP-errortypes ends here --
```

The type definitions `Duration` and `LegID` above are imported from
`CS1-DataTypes` module, while `MiscCallInfo` comes from
the `CS2-datatypes` module.

### Exporting from a module

Exports from a module are done in a similar fashion.

If the `EXPORT` keyword is not used in a module, the ASN.1 compilers
should export all values and types from the module. It's the same as
specifying `EXPORTS ALL;`.

```asn.1
CAP-GPRS-ReferenceNumber {itu-t(0) identified-organization(4) etsi(0) mobileDomain(0)
umts-network(1) modules(3) cap-dialogueInformation(111) version8(7)}

DEFINITIONS ::= BEGIN

EXPORTS
	id-CAP-GPRS-ReferenceNumber,
	cAP-GPRS-ReferenceNumber-Abstract-Syntax;

IMPORTS

	Integer4
FROM CS1-DataTypes {itu-t(0) identified-organization(4) etsi(0) inDomain(1) in-network(1)
modules(0) cs1-datatypes(2) version1(0)}
;

END
```

### Commenting

As can be seen in the above example one can enter comments into the
ASN.1.  Comments starts with double dash `--` and ends with either a
newline or another `--`, whichever comes first.

## Assignments and naming

The rules specify that type references must start with an uppercase
letter and may not end with a dash `-`. It may also only contain
upper- and lower-case letters, digits or dashes `-`.  The syntax for a
type assignment is

```asn.1
TypeRef ::= TypeDefinition
```

For instance
```asn.1
InvokeIdType ::= INTEGER (-128..127)

CancelArg ::= CHOICE {
    invokeID        [0] InvokeID,
    allRequests     [1] NULL
}

Duration ::= INTEGER (-2..86400)

Integer4 ::= INTEGER (0..2147483647)

Interval ::= INTEGER (-1..60000)

InvokeID ::= InvokeIdType

LegID ::= CHOICE {
    sendingSideID   [0] LegType,
    -- used in operations sent from SCF to SSF
    receivingSideID [1] LegType
    -- used in operations sent from SSF to SCF
}

LegType ::= OCTET STRING (SIZE(1))

ServiceKey ::= Integer4
```

Value references have a similar syntax as type references except that
value references must start with a lower-case letter, and also carry
the values type.

Syntax
```asn.1
valueRef Type ::= value
```

For example
```asn.1
leg1 LegType ::= '01'H
leg2 LegType ::= '02'H

highLayerCompatibilityLength            INTEGER ::= 2
minAChBillingChargingLength             INTEGER ::= 0
```

# Types

Now when we have talked a bit about naming references, and how to
assign values and types I'll go over which built-in types exist, and
how to create new types.

There are some common types, each consists of a type reference and a
tag number.  The tag number is used to identify it when sending the
type in the network.  The universal tags are specified in [ITU-T
X.680](https://www.itu.int/rec/T-REC-X.680/en)

Here is a list of the most common types

| Type                                    | Universal Tag Number |
| --------------------------------------- | -------------------- |
| [BOOLEAN](#boolean)                     | 1                    |
| [INTEGER](#integer)                     | 2                    |
| [BIT STRING](#bit-string)               | 3                    |
| [OCTET STRING](#octet-string)           | 4                    |
| [NULL](#null)                           | 5                    |
| [OBJECT IDENTIFIER](#object-identifier) | 6                    |
| [EXTERNAL](#external)                   | 8                    |
| [REAL](#real)                           | 9                    |
| [ENUMERATED](#enumerated)               | 10                   |
| [UTF8String](#string-types)             | 12                   |
| [TIME](#time-types)                     | 14                   |
| [SEQUENCE (OF)](#sequence-of)           | 16                   |
| [SET (OF)](#set-of)                     | 17                   |
| [NumericString](#string-types)          | 18                   |
| [IA5String](#string-types)              | 22                   |
| [UTCTime](#time-types)                  | 23                   |
| [GeneralizedTime](#time-types)          | 24                   |
| [VisibleString](#string-types)          | 26                   |
| [DATE](#time-types)                     | 31                   |
| [TIME-OF-DAY](#time-types)              | 32                   |
| [DATE-TIME](#time-types)                | 33                   |
| [DURATION](#time-types)                 | 34                   |
|                                         |                      |
| [CHOICE](#choice)                       | *                    |
| [SELECTION](#selection)                 | *                    |


The common types can be divided into simple and structured types.
Structured types are the composition of multiple types (so called
component types) using one of the following types and keywords
`SEQUENCE`, `SEQUENCE OF`, `SET`, `SET OF`, `CHOICE`, and/or
`SELECTION`.  Note that `CHOICE` and `SELECTION` does not [need to]
have their own universal tags, due to those are consisting of other
types.

## Basic types

### BOOLEAN

The `BOOLEAN` type takes values `TRUE` or `FALSE`.

```asn.1
AudibleIndicator ::= CHOICE {
    tone       BOOLEAN,
    burstList  [1] BurstList
}

```

Here the value `tone` of the composit type `AudibleIndicator` is of
type `BOOLEAN`. Note: It was one of the cleanest example I could find
of a `BOOLEAN` in the ASN.1 files we use, because Telco often use a
special "trick" when it comes to booleans in order to save bandwidth,
i.e. the `NULL` type.

### NULL

The `NULL` type is basically a placeholder, where the recognition of a
value is important but the actual value is not.

In 3GPP it is similar to `BOOLEAN` in the sense that a defined `NULL`
value is considered `TRUE` and if the value is missing it is
considered `FALSE`. The reason for this is that when sent over the
network with [BER encoding](#encodings), it will take no space because
`BOOLEAN` is always of length 1 but `NULL` is always length 0,
i.e. `NULL` does not contain a value.

```asn.1
CancelArg {PARAMETERS-BOUND : bound} ::= CHOICE {
    invokeID            [0] InvokeID,
    allRequests         [1] NULL,
    callSegmentToCancel [2] CallSegmentToCancel {bound}
}
```

in this example `allRequests` can be defined (then only the tag is
transmitted) or not at all.

### INTEGER

`INTEGER` takes any of the infinite set of integer values. It can also
have the additional notation that names some of the values.


```asn.1
GSMMAPOperationLocalvalue ::= INTEGER{
    updateLocation (2),
    cancelLocation (3),
    provideRoamingNumber (4),
    noteSubscriberDataModified (5),
    resumeCallHandling (6),
    insertSubscriberData (7),
    -- rest of the named integers --
}
```

```asn.1
localvalue1 GSMMAPOperationLocalvalue ::= updateLocation
localvalue2 GSMMAPOperationLocalvalue ::= 2
localvalue3 GSMMAPOperationLocalvalue ::= -55413459
```
are all valid `GSMMAPOperationLocalvalue`s.

### ENUMERATED

`ENUMERATED` has the same interpretation as `INTEGER` but will hold
specific values only.


```asn.1
RequestedInformationType ::= ENUMERATED {
    callAttemptElapsedTime(0),
    callStopTime(1),
    callConnectedElapsedTime(2),
    calledAddress(3),
    releaseCause(30)
}
```

```asn.1
reqInfoType1 RequestedInformationType ::= callAttemptElapsedTime
reqInfoType2 RequestedInformationType ::= 0
```

are both valid values of `RequestInformationType`, while this is not:

```asn.1
notValidReqInfoType RequestedInformationType ::= 4
```

### BIT STRING

`BIT STRING` takes values that are a sequence of zero or more bits. It
can also take an additional notation that name certain bits in the bit
sequence.

```asn.1
DeferredLocationEventType ::= BIT STRING {
    msAvailable (0) ,
    enteringIntoArea (1),
    leavingFromArea (2),
    beingInsideArea (3) ,
    periodicLDR (4)
} (SIZE (1..16))
```

```asn.1
eventType1 DeferredLocationEventType ::= (msAvailable, beingInsideArea)
eventType2 DeferredLocationEventType ::= '10010'B
eventType3 DeferredLocationEventType ::= '12'H
```

are all valid value definitions of the same bit sequence where the
first and third bits are set, and no other bits are set.  The `B` stands
for binary representation and `H` for hexadecimal representation.

The `SIZE` is a constraint on the type defining it to be of a specific
length. This keyword comes as an extra notation for many of the
`STRING` types below (as well as some of the other types).

### OCTET STRING

Type `OCTET STRING` takes values that are an ordered sequence of zero
or more (eight-bit) octets.

```asn.1
MM-Code ::= OCTET STRING (SIZE (1))
```

In the same manner as `BIT STRING` both values below are valid
instances of `MM-Code`:

```asn.1
iMSI-Attach1 MM-Code ::= '00000010'B
iMSI-Attach2 MM-Code ::= '02'H
```

while

```asn.1
notValidIMSI-Attach MM-Code ::= '10010'B
```

is not considered a valid value due to it not being a multiple of eight bits.

### OBJECT IDENTIFIER

The `OBJECT IDENTIFIER` type (shortened `OID`) names information
objects such as ASN.1 modules. The named information object is a node
on an object identifier tree that is managed at the international
level.

ETSI for instance is managed by ITU-T
`itu-t(0) identified-organization(4) etsi(0)`

<div>
    <img src="/img/blog/the-specs-behind-the-specs/etsi_asn1oidtree.gif" alt="ETSI OID tree" />
</div>

and as can see in the `Modules` example version 8 of cap-datatypes is part of ETSI.
`CAP-datatypes {itu-t(0) identified-organization(4) etsi(0) mobileDomain(0) umts-network(1) modules(3) cap-datatypes(52) version8(7)}`

Other root arcs

| Root | Organization    |
| ---- | --------------- |
| 0    | ITU-T           |
| 1    | ISO             |
| 2    | joint-iso-itu-t |

The labels are optional and the reference could also be written as `{0
4 0 0 1 3 52 7}`. Only positive integers are allowed including zero (0).

Another example comes from the CAP-object-identifiers module in ETSI 129.078.

```asn.1
tc-Messages OBJECT IDENTIFIER ::=
    {itu-t recommendation q 773 modules(2) messages(1) version3(3)}

id-CAP OBJECT IDENTIFIER ::=
    {itu-t(0) identified-organization(4) etsi(0) mobileDomain(0)
     umts-network(1) cap4(22)}

id-ac OBJECT IDENTIFIER ::= {id-CAP ac(3)}
```

`id-ac` is a child of the `id-CAP` object identifier.

One could lookup object identifiers by visiting this amazing
[page (oidref.com)](https://oidref.com/).

### EXTERNAL

`EXTERNAL` represents a value that does not need to be specified as a
ASN.1 type. It carries information on how the data should be interpreted.

{% raw %}```asn.1
Unidirectional {OPERATION:Invokable, OPERATION:Returnable} ::= SEQUENCE {
  dialoguePortion  DialoguePortion OPTIONAL,
  components       ComponentPortion{{Invokable}, {Returnable}}
}

DialoguePortion ::= [APPLICATION 11] EXPLICIT EXTERNAL
```{% endraw %}

Here the value `dialoguePortion` will have tag 11 if specified, it is
then up to the application to decide how to deal with the value.

### REAL

Values of the type `REAL` will take a triplet of numbers (m, b, e),
where m is the mantissa (a signed number), b the base (2 or 10), and e
the exponent (a signed number).

There are also three special values it can take `PLUS-INFINITY`, 0,
and `MINUS-INFINITY`.

```asn.1
theBestRealValue REAL ::= (123, 10, -2) -- 1.23
maxValue REAL ::= PLUS-INFINITY
```

### String types

I feel like most of the string types are the same, except that they
all take diffrent character sets. I've already described `BIT STRING`
and `OCTET STRING` which both operate the bit set, but there is a
lot of others that operate over character sets.



| Type                         | Tag | Character set regex/comment                                                                                                                                                                   |
| ---------------------------- | --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UTF8String                   | 12  | Synonymous with UniversalString at abstract level                                                                                                                                             |
| NumericString                | 18  | `[0-9 ]`                                                                                                                                                                                      |
| PrintableString              | 19  | `[A-Za-z0-9'()+,./:=? -]`                                                                                                                                                                     |
| TelexString (T61String)      | 20  | (ISOReg) reg. #6, #87, #102, #103, #106, #107, #126, #144, #150, #153, #156, #164, #165, #168 + space,delete               |
| VideotexString               | 21  | (ISOReg)reg. #1, #13, #72, #73, #87, #89, #102, #108, #126, #128, #129, #144, #150, #153, #164, #165, #168 + space,delete |
| IA5String                    | 22  | (ISOReg)reg. #1, #6 + space,delete                                                                                        |
| GraphicString                | 25  | (ISOReg) graphical sets (called 'G') + space                                                                               |
| VisibleString (ISO646String) | 26  | (ISOReg)reg. #6 + space                                                                                                   |
| GeneralString                | 27  | (ISOReg) graphical sets (called 'G'), control characters (called 'C') + space,delete                                       |
| UniversalString              | 28  | [ISO10646-1]                                                                                                                                                                                  |
| BMPString                    | 30  | Basic Multilingual Plane; subtype of UniversalString                                                                                                                                          |


ISOReg is a pretty good source, it reference most of the registers but not all of them as far as I can see.


I'll list some examples of string types found in our ASN.1 files:

```asn.1
AMFNameUTF8String ::= UTF8String (SIZE(1..150, ...))

DirectoryString ::= CHOICE {
    teletexString TeletexString (SIZE (1..maxSize)),
    printableString PrintableString (SIZE (1..maxSize)),
    universalString UniversalString (SIZE (1..maxSize)),
    bmpString BMPString (SIZE (1..maxSize))
--    utf8String UTF8String (SIZE (1..maxSize))
    }

DisplayInformation ::= IA5String (SIZE (minDisplayInformationLength..maxDisplayInformationLength))
```
`IA5String` is used to represent ISO 646 (IA5; International Alphabet 5)
characters.  The entire character set contains precisely 128
characters and are generally equivalent to the first 128 characters of
the ASCII alphabet.

There are multiple formats for the values of `UniversalString`, `BMPString` and
`UTF8String` types. One could either specify a quadruple with `{group,
plane, row, cell}` for the character needed, or an array of defined values (strings).

An example from Dubuisson:

```asn.1
latinCapitalLetterA UniversalString ::= {0,0,0,65}
greekCapitalLetterSigma UniversalString ::= {0,0,3,145}

my-string UniversalString ::= {
    "This is a capital A: ", latinCapitalLetterA,
    ", and a capital alpha: ", greekCapitalLetterAlpha,
    "; try and spot the difference!"}
```

And X.680 gives us yet another example

```asn.1
IMPORTS
  BasicLatin, greekCapitalLetterSigma
  FROM ASN1-CHARACTER-MODULE
    { joint-iso-itu-t asn1(1) specification(0) modules(0) iso10646(0) };

 MyAlphabet ::= UniversalString (FROM (BasicLatin | greekCapitalLetterSigma))

 mystring MyAlphabet ::= { "abc" , greekCapitalLetterSigma , "def" }
```

### Time types

The `UTCTime` and `GeneralizedTime` types are actually specified as
`VisibleString`.

`UTCTime` format is "YYMMDD" for date followed by "hhmm" or "hhmmss"
for time, ending with either "z", "-hhmm" or "+hhmm" for time offset.

Specifying "2021-12-14 04:32 CET" in `UTCTime`

```asn.1
"2112140332Z"
"2112140432+0100"
```

`GeneralizedTime` gives a bit more flexibility with regards to the format.

It consists of a calendar date of format "YYYYMMDD", followed by
either "hh", "hhmm", "hhmmss" and optional parts ".[0-9]+", and
optionally ending with the coordinated universal time character "z" or
the time offset in hours/minutes "-hhmm" or "+hhmm".

These are the same, but one with higher precision and in local time.
```asn.1
"2021121403.54Z" -- 3.54 hours after midnight
"20211214043227.981935+0100" -- 3 hours, 32 minutes, 27 seconds, 981935 microseconds
```

`DATE`, `TIME-OF-DAY`, `DATE-TIME` and `DURATION` was introduced after
the third generation of ISO 8601 was released 2004.

They are defined as subsets of `TIME`.

```asn.1
DATE ::= [UNIVERSAL 31] IMPLICIT TIME
       (SETTINGS "Basic=Date Date=YMD Year=Basic")
TIME-OF-DAY ::= [UNIVERSAL 32] IMPLICIT TIME
       (SETTINGS "Basic=Time Time=HMS Local-or-UTC=L")
DATE-TIME ::= [UNIVERSAL 33] IMPLICIT TIME
       (SETTINGS "Basic=Date-Time Date=YMD Year=Basic Time=HMS Local-or-UTC=L")
DURATION ::= [UNIVERSAL 34] IMPLICIT TIME
       (SETTINGS "Basic=Interval Interval-type=D")
```

As I can find no real world examples from our ASN.1-files, I'm forced
to make-up examples of these

```asn.1
date1 DATE ::= "211214"
time1 TIME-OF-DAY ::= "043227"
date-time1 DATE-TIME ::= "211214043227"
duration1 DURATION ::= "P0Y29M0DT0H0M0S" -- 29 months to an accuracy of 1 second
```

Values of type `DURATION` starts with "P" followed by alot of
different optional parts and formats.  If the time designation is used
it should start with a "T" to keep months and minutes separate.

```asn.1
duration2 DURATION ::= "P2MT2M" -- 2 months and 2 minutes
duration3 DURATION ::= "P29M0DT0.00M" -- 29 months with accuracy of one-hundredth of a minute
duration4 DURATION ::= "P32W" -- 32 weeks
```


## Structured types

### CHOICE

The type `CHOICE` can take values from one of multiple types, `CHOICE`
doesn't have it's own universal tag.

```asn.1
CancelArg ::= CHOICE {
    invokeID        [0] InvokeID,
    allRequests     [1] NULL
}
```

The value of type `CancelArg` will either of an `InvokeID` type, or a
`NULL` type.  It will be tagged `[0]` or `[1]` respectively, that is
why `CHOICE` doesn't have it's own universal tag, as it is derived
from ASN.1 specification.

### SEQUENCE (OF)

`SEQUENCE` and `SEQUENCE OF` are used for composing multiple types.

```asn.1
EventTypeSMS ::= ENUMERATED {
    sms-CollectedInfo                   (1),
    o-smsFailure                        (2),
    o-smsSubmission                     (3),
    sms-DeliveryRequested               (11),
    t-smsFailure                        (12),
    t-smsDelivery                       (13)
}
MonitorMode ::= ENUMERATED {
    interrupted                         (0),
    notifyAndContinue                   (1),
    transparent                         (2)
}

SMSEvent ::= SEQUENCE {
    eventTypeSMS   [0] EventTypeSMS,
    monitorMode    [1] MonitorMode
}

Tone ::= SEQUENCE {
    toneID         [0] Integer4,
    duration       [1] Integer4 OPTIONAL,
    ...
}
```

A value of the `SMSEvent` type have information on both `EventTypeSMS`
and `MonitorMode`. The fixed number of fields in the `SEQUENCE` type
are ordered.  Context-specific tagging (e.g. the `[0]`, `[1]`, `[2]`
stuff in the examples), is frequently applied for the structured
types, but one could also utilize the keywords `AUTOMATIC TAGGING` in
the module definition.

`SEQUENCE OF` on the other hand, holds an arbitrary number of fields
of a single type.

```asn.1
FilterItem ::= CHOICE {
    equality         [0] AttributeValueAssertion,
    substrings       [1] SEQUENCE {
        type    ATTRIBUTE.&id({SupportedAttributes}),
        strings SEQUENCE OF CHOICE {
            initial [0] ATTRIBUTE.&Type({SupportedAttributes}{@substrings.type}),
            any     [1] ATTRIBUTE.&Type({SupportedAttributes}{@substrings.type}),
            final   [2] ATTRIBUTE.&Type({SupportedAttributes}{@substrings.type})
        }
    },
    greaterOrEqual   [2] AttributeValueAssertion,
    lessOrEqual      [3] AttributeValueAssertion,
    present          [4] AttributeType,
    approximateMatch [5] AttributeValueAssertion,
    extensibleMatch  [6] MatchingRuleAssertion
}
```

In the quite complex example above we see that the type `FilterItem`
is of type `CHOICE` and can take subtype called `strings`. `strings`
is of type `SEQUENCE OF CHOICE` which means it can take a list of
zero, one or more of `initial`, `any` or `final`. The example is quite
complex because it also uses multiple parameterized values. see
[Automatic, Implicit, Explicit tags](#automatic-implicit-explicit-tags)

We find another example in the DialoguePDUs module from
[Q.773](https://www.itu.int/rec/T-REC-Q.773-199706-I/en) where the
AARQ is of type `SEQUENCE`, and the third field `user-information` is
an `SEQUENCE OF` `EXTERNAL` type.

```asn.1
AARQ-apdu ::= [APPLICATION 0] IMPLICIT SEQUENCE {
  protocol-version
    [0] IMPLICIT BIT STRING {version1(0)} DEFAULT {version1},
  application-context-name  [1]  OBJECT IDENTIFIER,
  user-information          [30] IMPLICIT SEQUENCE OF EXTERNAL OPTIONAL
}
```

They are quite different in how they are used, but they are encoded in
a similar way. Some languages represent `SEQUENCE` internally as a
`struct`, and `SEQUENCE OF` as an array, but encoded they would look
quite similar.

### SET (OF)

`SET` and `SET OF` are similar to `SEQUENCE` and `SEQUENCE OF`
respectively. The difference is that the composite types are
unordered.

From `CAP-datatypes` we find an example of a `SET OF` with a
[parameterized component](#parameterized-components) specifying a size
constraint.

```asn.1
GenericNumbers {PARAMETERS-BOUND : bound} ::= SET SIZE(1..bound.&numOfGenericNumbers) OF GenericNumber {bound}
```

Or an example of a value from the `TCAP-Tools` module in
[Q.775](https://www.itu.int/rec/T-REC-Q.775-199706-I/en)

```asn.1
cancelFailed ERROR ::= {
  PARAMETER
    SET {problem   [0]  CancelProblem,
         invokeId  [1]  present < TCInvokeIdSet
    }
}
```

### SELECTION

The SELECTION type `<` is used when one want's to obtain one of the
possible subtypes of a `CHOICE` definition.

If we expand the previous example from the [SET](#set-of)

```asn.1
cancel OPERATION ::= {
  ARGUMENT  present < TCInvokeIdSet
  ERRORS    {cancelFailed}
}

cancelFailed ERROR ::= {
  PARAMETER
    SET {problem   [0]  CancelProblem,
         invokeId  [1]  present < TCInvokeIdSet
    }
}
```

we see that the `ARGUMENT` type and the invokeId field take the type
from the `present` field in the `TCInvokeIdSet` type.

the definition of `TCInvokeIdSet` is as follows

```asn.1
InvokeId ::= CHOICE {present  INTEGER,
                     absent   NULL
}

TCInvokeIdSet ::= InvokeId(WITH COMPONENTS {
                             present  (-128..127)
                           })
```

Thus `invokeId` and `ARGUMENT` fields will take integer values which
are between -128 and 127.

# Other concepts

## DEFAULT and OPTIONAL keywords

One can use the `DEFAULT` keyword in order to specify the default value.

```asn.1
CollectedDigits ::= SEQUENCE {
  minimumNbOfDigits    [0] INTEGER (1..16) DEFAULT 1,
  maximumNbOfDigits    [1] INTEGER (1..16),
  endOfReplyDigit      [2] OCTET STRING (SIZE (1..2)) OPTIONAL,
  cancelDigit          [3] OCTET STRING (SIZE (1..2)) OPTIONAL,
  startDigit           [4] OCTET STRING (SIZE (1..2)) OPTIONAL,
  firstDigitTimeOut    [5] INTEGER (1..127) OPTIONAL,
  interDigitTimeOut    [6] INTEGER (1..127) OPTIONAL,
  errorTreatment       [7] ErrorTreatment DEFAULT stdErrorAndInfo,
  interruptableAnnInd  [8] BOOLEAN DEFAULT TRUE,
  voiceInformation     [9] BOOLEAN DEFAULT FALSE,
  voiceBack            [10] BOOLEAN DEFAULT FALSE
}
```

In this example we see the type `CollectedDigits` where most of the
values are either `DEFAULT` or `OPTIONAL`. The only value that needs
to be set is `maximumNbOfDigits`.

## Classes

One can also use informal object classes in order to specify and
define values for general types.

```asn.1
OPERATION ::= CLASS {
  &ArgumentType          OPTIONAL,
  &argumentTypeOptional  BOOLEAN OPTIONAL,
  &returnResult          BOOLEAN DEFAULT TRUE,
  &ResultType            OPTIONAL,
  &resultTypeOptional    BOOLEAN OPTIONAL,
  &Errors                ERROR OPTIONAL,
  &Linked                OPERATION OPTIONAL,
  &synchronous           BOOLEAN DEFAULT FALSE,
  &alwaysReturns         BOOLEAN DEFAULT TRUE,
  &InvokePriority        Priority OPTIONAL,
  &ResultPriority        Priority OPTIONAL,
  &operationCode         Code UNIQUE OPTIONAL
}
WITH SYNTAX {
  [ARGUMENT &ArgumentType
   [OPTIONAL &argumentTypeOptional]]
  [RESULT &ResultType
   [OPTIONAL &resultTypeOptional]]
  [RETURN RESULT &returnResult]
  [ERRORS &Errors]
  [LINKED &Linked]
  [SYNCHRONOUS &synchronous]
  [ALWAYS RESPONDS &alwaysReturns]
  [INVOKE PRIORITY &InvokePriority]
  [RESULT-PRIORITY &ResultPriority]
  [CODE &operationCode]
}

provideRoutingInformation OPERATION ::= {
  ARGUMENT  RequestArgument
  RESULT    RoutingInformation
  ERRORS
    {invalidCalledNumber | subscriberNotReachable | calledBarred |
      processingFailure}
  LINKED    {getCallingPartyAddress}
}

getCallingPartyAddress OPERATION ::= {
  RESULT  CallingPartyAddress
  ERRORS  {callingPartyAddressNotAvailable | processingFailure}
}

invalidCalledNumber ERROR ::= {CODE  local:1}
subscriberNotReachable ERROR ::= {CODE  local:2}

RequestArgument ::= SEQUENCE {
  calledNumber  IsdnNumber,
  basicService  BasicServiceIndicator OPTIONAL
}

RoutingInformation ::= CHOICE {
  reroutingNumber    [0] IMPLICIT IsdnNumber,
  forwardedToNumber  [1] IMPLICIT IsdnNumber
}

```

In the above `OPERATION` class, a syntax is defined for the
class. This class and syntax can then be used to define specific
values, for instance the `provideRoutingInformation` and
`getCallingPartyAddress` values.

We also glimse another class in the above example which I didn't
include. Can you find it?

## Parameterized components

Another way to make the specs more generalized is to use parameterized
components. We've already seen a couple of examples of such, see the
chapter for the [NULL](#null), [EXTERNAL](#external) and [SET
(OF)](#set-of) types.

Let's look at the example from `SET OF` again.

```asn.1
GenericNumbers {PARAMETERS-BOUND : bound} ::= SET SIZE(1..bound.&numOfGenericNumbers) OF GenericNumber {bound}

GenericNumber {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
    bound.&minGenericNumberLength .. bound.&maxGenericNumberLength))
```

`GenericNumbers` take a parameter `bound` of the type `PARAMETERS-BOUND` as input.

`PARAMETERS-BOUND` is defined as a class with a lot of different
integer values, so I've minimized the class a bit.

```asn.1
PARAMETERS-BOUND ::= CLASS {
    --- a lot of other fields
    &minGenericNumberLength  INTEGER,
    &maxGenericNumberLength  INTEGER,
    &numOfGenericNumbers     INTEGER,
}

WITH SYNTAX {
    --- a lot of other fields
    MINIMUM-FOR-GENERIC-NUMBER  &minGenericNumberLength
    MAXIMUM-FOR-GENERIC-NUMBER  &maxGenericNumberLength
    NUM-OF-GENERIC-NUMBERS      &numOfGenericNumbers
}
```

One could then specify different values using the `PARAMETERS-BOUND`
class to reuse the `GenericNumber` and `GenericNumbers` types.

```asn.1
cAPSpecificBoundSet PARAMETERS-BOUND ::= {
    --- again, lots of other values
    MINIMUM-FOR-GENERIC-NUMBER                  3
    MAXIMUM-FOR-GENERIC-NUMBER                  11
    NUM-OF-GENERIC-NUMBERS                      5
}
```

If one would pass `cAPSpecificBoundSet` to a value of type
`GenericNumbers`, it would define an instance which holds 1-5
`GenericNumber`s of 3-11 octets.

Quite powerful if you have multiple definitions which uses similar
structure.

## Extensions

Sometimes you will need to support different versions of a protocol
(or someone else need to support different version, and you just need
to read the types of the protocol), and maybe the new version need to
extend some types in order to include more information. Then without
redefining everything and copy the previous version of the type to the
new version of the type one can use extension markers (syntax `...`).

Take the `QosMonitoringRequest` type below as an example. In the first
version of the protocol (NGAP if you really want to know), the
`QoSMonitoringRequest` could take only enums `ul`, `dl`, or `both`.
However, in a subsequent version it was extended with a new enum
`stop`. With the extension marker `...` the v1-compilers can handle
the first three enums, and the v2-compilers can handle all enums from
v1 but also the `stop` enum.

```asn.1
QosMonitoringRequest ::= ENUMERATED {
    ul,
    dl,
    both,
    ...
} -- version 1

QosMonitoringRequest ::= ENUMERATED {
    ul,
    dl,
    both,
    ...,
    stop
} -- version 2
```

For enums, if there is yet a newer version, say version 3 of this type
one, you should just add the new enum under the previous enums.

```asn.1
QosMonitoringRequest ::= ENUMERATED {
    ul,
    dl,
    both,
    ...,
    stop,
    half
} -- imaginary version 3
```

For `SEQUENCE`, `SET` and `CHOICE` one could either do the same, or to
keep the versions separated, add another extension mark with the new
fields in between. One could also add version brackets to group the
extensions and highlight the differences.

```asn.1
Ax ::= SEQUENCE {
    a INTEGER (250..253),
    b BOOLEAN,
    c CHOICE {
        d INTEGER, -- version 1
        ...,
        [[
            e BOOLEAN,
            f IA5String
        ]],
        ... -- version 2
    },
    ..., -- version 1
    [[
        g NumericString (SIZE(3)),
        h BOOLEAN OPTIONAL
    ]],
    ..., -- version 2
    i BMPString OPTIONAL,  -- version 3
    j PrintableString OPTIONAL -- version 3
}

```

Only the types `ENUMERATED`, `SEQUENCE`, `SET` and `CHOICE`, as well
as subtype constraints, and object and value sets can be extended.

## Automatic, Implicit, Explicit tags

When an value is transmitted all ambiguities need to be removed. That
is why every type needs to have an unique identifier, called a tag.

The section [DEFAULT and OPTIONAL
keywords](#default-and-optional-keywords) has a good example I will
explain.


```asn.1
CollectedDigits ::= SEQUENCE {
  minimumNbOfDigits    [0] INTEGER (1..16) DEFAULT 1,
  maximumNbOfDigits    [1] INTEGER (1..16),
  endOfReplyDigit      [2] OCTET STRING (SIZE (1..2)) OPTIONAL,
  cancelDigit          [3] OCTET STRING (SIZE (1..2)) OPTIONAL,
  startDigit           [4] OCTET STRING (SIZE (1..2)) OPTIONAL,
  firstDigitTimeOut    [5] INTEGER (1..127) OPTIONAL,
  interDigitTimeOut    [6] INTEGER (1..127) OPTIONAL,
  errorTreatment       [7] ErrorTreatment DEFAULT stdErrorAndInfo,
  interruptableAnnInd  [8] BOOLEAN DEFAULT TRUE,
  voiceInformation     [9] BOOLEAN DEFAULT FALSE,
  voiceBack            [10] BOOLEAN DEFAULT FALSE
}
```

In this sequence we can see that many of the values are optional and
some have defaults, only the value `maximumNbOfDigits` is mandatory.

When the sending side transmits a value of `CollectedDigits` type, the
receiving side will get a sequence of the values mentioned. With
BER-encoding each defined value will have an identifier, a length (of
the value transmitted) and the value. This is called a
Tag-Length-Value or TLV for short.

All basic types already has an universal tag as stated in the [types
table](#types), but the composite types does not. (If not tagged, how
would it see the difference between `endOfReplyDigit`, `cancelDigit`
and `startDigit` in the example above?)

```asn.1
RoutingInformation ::= CHOICE {
  reroutingNumber    [0] IMPLICIT IsdnNumber,
  forwardedToNumber  [1] IMPLICIT IsdnNumber
}

IsdnNumber ::= SEQUENCE {
  typeOfAddress  TypeOfAddress,
  digits         TelephonyString
}

TypeOfAddress ::= ENUMERATED {national(0), international(1), private(2)}

TelephonyString ::=
  IA5String
    (FROM ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "*" |
           "#"))(SIZE (1..15))

```

A value of `RoutingInformation` in this example will with BER encoding
only transmit the tag `[0]` or `[1]` (and of course the length and
value). It counts on that the receiving part has the same version of
the ASN.1 and knows the abstract syntax. If it wouldn't have been
`IMPLICIT`, then it would have sent either tags `[0]` or `[1]`
followed by the tags for `TypeOfAddress` (ENUMERATED) `[10]`, and tags
for `TelephonyString` (IA5String) `[4]`.

One can specify `IMPLICIT` and `EXPLICIT` tagging on module basis,
where the `DEFINITIONS` are assigned.

```asn.1
DEFINITIONS IMPLICIT TAGS ::= BEGIN
```

Instead of writing all the tags self (explicitly in both cases), one
can instead use the keywords `AUTOMATED TAGS`.

```asn.1
DEFINITIONS AUTOMATIC TAGS ::= BEGIN
```

This will add tags to the composit types that doesn't have them
(explicitly) set.

## Deprecations and discouragements

Some things have been deprecated from earlier ASN.1 specifications,
and use of these are strongly discouraged.

### ANY

First out is the `ANY` type, which could take the form of any
value. It's like an unrestricted `CHOICE` type.

```asn.1
Invoke ::= SEQUENCE {
    invokeID           InvokeIdType,
    linkedID       [0] InvokeIdType OPTIONAL,
    operationCode      MAP-OPERATION,
    parameter          InvokeParameter OPTIONAL
}
InvokeParameter ::= ANY
```

Problem with this is that the ASN.1 compiler does not have a formal
way of knowing which values are approved. The use of `ANY` also
usually meant it was coupled with some other value, for instance the
`operationCode` in the example above.

To make this link one could have used `DEFINED BY` specifying which
field the `ANY` type is coupled with. The drawback with this solution
is that it still has an ambiguous meaning, and the types are of no use
for the application designer.

```asn.1
ExtensionField ::= SEQUENCE {
    type        INTEGER,
    --  shall identify the value of an EXTENSION type
    criticality ENUMERATED {
        ignore(0),
        abort(1)
    } DEFAULT ignore,
    value   [1] ANY DEFINED BY type
}
```

Instead the concept of informal object classes and parameterized
components were introduced.

### Macros

Macros were removed because they were poorly documented and too
general. Because of this they were hard to implement and automate in
the compilers. They follow the BNF notation.

```asn.1
OPERATION MACRO ::=
BEGIN
    TYPE NOTATION ::= Parameter Result Errors LinkedOperations
    VALUE NOTATION ::= value (VALUE CHOICE { localValue INTEGER, globalValue OBJECT IDENTIFIER } )
    Parameter ::= ArgKeyword NamedType | empty
    ArgKeyword ::= "ARGUMENT" | "PARAMETER"
    Result ::= "RESULT" ResultType | empty
    Errors ::= "ERRORS" "{"ErrorNames"}" | empty
    LinkedOperations ::= "LINKED" "{"LinkedOperationNames"}" | empty
    ResultType ::= NamedType | empty
    ErrorNames ::= ErrorList | empty
    ErrorList ::= Error | ErrorList "," Error
    Error ::= value (ERROR)
             -- shall reference an error value
             | type
             -- shall reference an error type
             -- if no error value is specified
    LinkedOperationNames ::= OperationList | empty
    OperationList ::= Operation | OperationList "," Operation
    Operation ::= value (OPERATION)
                  -- shall reference an operation value
                  | type
                  -- shall reference an operation type if
                  -- no operation value is specified
    NamedType ::= identifier type | type
END
```

The two needed fields of the macro are `TYPE NOTATION` and `VALUE
NOTATION`. The rest of the fields are the value sequence defining what
the macro should insert. Quotes define the string to insert (excluding
the actual quotes), `empty` inserts nothing. `identifier`, `value`, or
`type` are used to infer different things. Dubuisson has (yet again) a
good chapter on this topic.

Also here one should use informal object classes and parameterized
components instead of using macros.

# Encodings

There are numerous codecs when transmitting the abstract syntax, all
with different pros and cons.

| Short name | Long name                    |
| ---------- | ---------------------------- |
| BER        | Basic encoding rules         |
| DER        | Distinguished encoding rules |
| CER        | Canonical encoding rules     |
| PER        | Packed encoding rules        |
| OER        | Octet encoding rules         |
| XER        | XML encoding rules           |
| EXER       | Extended XML encoding rules  |
| JER        | JSON encoding rules          |


BER is the oldest encoding rule for ASN.1. It uses Tag-Length-Value
format where all tags, lengths and values are multiples of
octets. Because this was the first encoding rule it was named `basic`
to indicate that there might be more standardized encoding rules in
the future.

DER and CER are subsets of BER, which was added for developers of
X.400 email and X.500 directory applications. It provides means to
make sure bit strings are not altered during transfer. The main
difference between DER and CER is that DER uses a definite-length
format and CER an indefinite-length format, so CER is best used for
applications that transfer a big amount of data.

PER is the most compact format, and used for bandwith conservation. It
does not send the Tag of the TLV because the order in which components
of the message occur is known.  PER also does not send the Length of
the TLV if the Value has a fixed length. It uses information from
ASN.1 message description to eliminate redundant information from the
Value portion. It can either be aligned to multiple of octets by
padding each value with '0's, or unaligned (U-PER/Unaligned PER) which
is more compact but take more time to decode.

OER was adapted from PER and uses an octet oriented format, so the
length of all specified Tags, Lengths, and Values are padded to be
multiples of 8 bits octets as in BER. OER is usually faster than both
BER and PER with regards to encoding and decoding.

XER, CXER and EXER are used for transmitting XML format. CXER is used
for transmitting data canonically, e.g. used by security applications.
EXER or Extended XER is used when "stylish" features is wanted, and
adds possibility to extend the encoder for instance when wanting to
insert processing instructions or comments into the XML.

JER is used when transmitting JSON in accordance to the format
specified in
[ECMA-404](https://www.ecma-international.org/publications-and-standards/standards/ecma-404/).

There are probably a bunch of others as well, but these are the ones
that have a specification.

| ITU-T number                                                                           | Name                                                                                                                                     |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [X.690](https://www.itu.int/rec/T-REC-X/recommendation.asp?lang=en&parent=T-REC-X.690) | ASN.1 encoding rules: Specification of Basic Encoding Rules (BER), Canonical Encoding Rules (CER) and Distinguished Encoding Rules (DER) |
| [X.691](https://www.itu.int/rec/T-REC-X/recommendation.asp?lang=en&parent=T-REC-X.691) | ASN.1 encoding rules: Specification of Packed Encoding Rules (PER)                                                                       |
| [X.692](https://www.itu.int/rec/T-REC-X/recommendation.asp?lang=en&parent=T-REC-X.692) | ASN.1 encoding rules: Specification of Encoding Control Notation (ECN)                                                                   |
| [X.693](https://www.itu.int/rec/T-REC-X/recommendation.asp?lang=en&parent=T-REC-X.693) | ASN.1 encoding rules: XML Encoding Rules (XER)                                                                                           |
| [X.694](https://www.itu.int/rec/T-REC-X/recommendation.asp?lang=en&parent=T-REC-X.694) | ASN.1 encoding rules: Mapping W3C XML schema definitions into ASN.1                                                                      |
| [X.695](https://www.itu.int/rec/T-REC-X/recommendation.asp?lang=en&parent=T-REC-X.695) | ASN.1 encoding rules: Registration and application of PER encoding instructions                                                          |
| [X.696](https://www.itu.int/rec/T-REC-X/recommendation.asp?lang=en&parent=T-REC-X.696) | ASN.1 encoding rules: Specification of Octet Encoding Rules (OER)                                                                        |
| [X.697](https://www.itu.int/rec/T-REC-X/recommendation.asp?lang=en&parent=T-REC-X.697) | ASN.1 encoding rules: Specification of JavaScript Object Notation Encoding Rules (JER)                                                   |

# Final words

Congratulations for making through this blog post. You deserve a
medal, and I hope this can help you understand the complexity and
greatness of ASN.1.

We have gone through the **basics** of ASN.1, there are still a lot of
things to be uncovered. You now understand the most common basic and
structured types, as well as the main differences between the
different encodings.

If I write a part 2 I will take you through the Diameter specs
instead, which are much more straighforward.

Image from [xkcd](https://xkcd.com) describing how I feel with ASN.1:
<a class="image" href="https://xkcd.com/208/"><img src="https://imgs.xkcd.com/comics/regular_expressions.png" /></a>
