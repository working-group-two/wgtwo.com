---
slug: choosing-erlang-formatter/
title: Choosing an Erlang formatter
date: 2020-05-18
tags: [erlang, rebar3, coding, culture]
authors: seba
---

There are many different Erlang formatters, and as a hack day project
I investigated which options exist for us at **wgtwo**. There
are two main alternatives, but sadly both have problems.  I've also
briefly looked at an Erlang linter.

<!--truncate-->

# Background

In **wgtwo** we use a bunch of different programming
languages, and we all have different experiences and are used to
different languages and environments. We are pretty autonomous and we
are expected to jump in and out in different services to fix bugs and
add features.

We like when the code is uniform, because it makes it easier to focus
on the business logic. That is why we want to use tools to make sure
our code is consistent no matter who is the author, or which IDE is
used, or in which part of the system the code resides.

About half a year ago there was a discussion about code style within
**wgtwo** that resulted in formatting tools being applied for
Kotlin, Bazel, Go and Java. It also resulted in an internal wiki page
containing guidelines about code style.

That document highlights some of the problems with mixing different
code-styles. It should be easy for newcomers to maintain the coding
style. It should also be easy to read diffs, and the discussions about
code style and formatting will be minimized because there is a
concensus.

# This is nice, I want it for Erlang

As some of our services are written in Erlang, I wanted to investigate
which formatters exist for Erlang, and what state they are in. I used
our last hack day for this purpose.

The requirements I had was that it should be reproducable. Calling the
formatter multiple times should not change the structure more than
once (first time of being called). The formatter should also
preferably work with rebar3 (the most used Erlang build tool).  The
tool should not use external tooling that wouldn't work for all
developers flow.

I also wanted it to have a short execution time, at least after the
initial formatting.

# Benchmark

I searched for formatting tools on hex.pm, github.com, duckduckgo.com,
google.com and came up with the following arbitrary list of Erlang
formatters. There is probably others, but these seems to be the most
used.

- rebar3_fmt
- steamroller
- otp/erl_tidy
- tsloughter/erl_tidy
- rebar3_format
- eryngii

## [rebar3_fmt](https://github.com/fenollp/erlang-formatter)

One big problem with this is that it uses Emacs `erlang-mode` for
formatting. Sure, I am an Emacs user and the `erlang-mode` and its
formatting is maintained and supperted by OTP, but my non-Emacs
coworkers would not be happy if they need to install Emacs every time
they want to format the code.

## [steamroller](https://github.com/old-reliable/steamroller/)

Though it was easy to setup (just add it to dependencies in your Rebar
config and run `rebar3 steamroll`), my first impression of the
execution was that it was really slow. Even when running subsequent
calls on my Dell XPS 13 P82G it took around 3.5 minutes to format.

The plugin had some support for increasing the number of workers from
the default `--J=1`, but that did not seem to help with the execution
time.

The default steamroller formatting options specify 2 spaces instead of
the `erlang-mode` 4 spaces standard that is used in our code base.

Here is a sample of a complex record structure

```diff
-                   components =
-                       [{invoke,
-                         #'Invoke'{
-                            invokeID = 1,linkedID = asn1_NOVALUE,
-                            operationCode = updateLocation,
-                            parameter =
-                                #'UpdateLocationArg'{
-                                   imsi = IMSI,
-                                   'msc-Number' = CallingGTBCD,
-                                   'vlr-Number' = CallingGTBCD}}}]},
+   components =
+     [
+       {
+         invoke,
+         #'Invoke'{
+           invokeID = 1,
+           linkedID = asn1_NOVALUE,
+           operationCode = updateLocation,
+           parameter =
+             #'UpdateLocationArg'{
+               imsi = IMSI,
+               'msc-Number' = CallingGTBCD,
+               'vlr-Number' = CallingGTBCD
+             }
+         }
+       }
+     ]
+ },
```

I was quite happy with the results, even though they were slow, until
I saw how it treated maps

```diff
-      parameters =
-          #{called_party_addr =>
-                #sccp_addr{
-                ... },
-            calling_party_addr =>
-                #sccp_addr{
-                ... },
-            data =>
-                #'Continue'{
+         parameters =
+             #{
+                 called_party_addr
+                 =>
+                 #sccp_addr{
+                   ...
+                 },
+                 calling_party_addr
+                 =>
+                 #sccp_addr{
+                   ...
+                 },
+                 data
+                 =>
+                 #'Continue'{
```

I can't say that I easily understand what the parameters are and which
the values are with this formatting. It burns in my eyes.


## [erl_tidy](https://github.com/tsloughter/erl_tidy) and [erl_tidy](https://erlang.org/documentation/doc-11.2/lib/syntax_tools-2.5/doc/html/erl_tidy.html)

So I found two `erl_tidy` projects, one is included in the Erlang/OTP
libraries. The other one seems just to be a rebar3 wrapper around the
first one, so I'll just talk about the former one.

Under the hood this library uses `erl_prettypr:format/2`, which prints
the abstract syntax tree. This should work well, but gives weird
indentation problems.  For instance when it comes to records it will
not add a newline before the first field, so the lines will become
quite long, and when the lines become close to the paper width of the
document then it inserts too many newlines.

Visualising with this example again

```diff
-        components =
-            [{invoke,
-              #'Invoke'{
-                 invokeID = 1,linkedID = asn1_NOVALUE,
-                 operationCode = updateLocation,
-                 parameter =
-                     #'UpdateLocationArg'{
-                        imsi = IMSI,
-                        'msc-Number' = CallingGTBCD,
-                        'vlr-Number' = CallingGTBCD}}}]},
+     components =
+	 [{invoke,
+	   #'Invoke'{invokeID
+			 =
+			 1,
+		     linkedID
+			 =
+			 asn1_NOVALUE,
+		     operationCode
+			 =
+			 updateLocation,
+		     parameter
+			 =
+			 #'UpdateLocationArg'{imsi
+						  =
+						  IMSI,
+					      'msc-Number'
+						  =
+						  CallingGTBCD,
+					      'vlr-Number'
+						  =
+						  CallingGTBCD}}}]},
```

There are also some issues with `erl_prettypr`; it throws an exception
when there are argumented macro functions.

```erlang
-define(MACRO(), object).
foo(?MACRO()) ->
  ok.
```

```erlang
** exception exit: no_translation
     in function  io:put_chars/3
        called as io:put_chars(<0.4843.0>,unicode,
                               [...])
     in call from erl_tidy:output/4 (erl_tidy.erl, line 431)
     in call from erl_tidy:write_module/3 (erl_tidy.erl, line 413)
     in call from erl_tidy:file_2/2 (erl_tidy.erl, line 335)
     in call from erl_tidy:file_1/3 (erl_tidy.erl, line 310)
```

## [rebar3_format](https://github.com/AdRoll/rebar3_format)

I had an issue when installing this plugin. It was not as easy as
adding `rebar3_format` to plugins in the rebar3 config. The reason I
had problems with it was that the plugin depends on
`inaka/katana_code` which for some reason did not get pulled in
properly and was missing some vital files. The issue could be resolved
by deleting the user rebar3 cache (`rm -rf ~/.cache/rebar3/`) as
explained in [this issue](https://github.com/AdRoll/rebar3_format/issues/80)

After installation you need to specify where the source files for
formatting can be found. This would probably not be needed if we did
not use an Erlang umberella project (an umberella project is when
there are subapplications residing in your main application).  Here is
where I found out that the command line option `--files
apps/**/{src,include}/*.?rl` is apparantly not the same as specifying
`{format, [{files, [“apps/**/{src,include}/*.?rl”]}]}` in the
config. The command line options finds only one file, while the config
parameter works as expected.

Formatting-wise it is similar to `erl_tidy`. This is because it uses
inakas `katana_code` which in its turn uses `erl_tidy`.


```diff
-           components =
-               [{invoke,
-                 #'Invoke'{
-                    invokeID = 1,linkedID = asn1_NOVALUE,
-                    operationCode = updateLocation,
-                    parameter =
-                        #'UpdateLocationArg'{
-                           imsi = IMSI,
-                           'msc-Number' = CallingGTBCD,
-                           'vlr-Number' = CallingGTBCD}}}]},
+                                      components =
+                                          [{invoke,
+                                            #'Invoke'{invokeID = 1,
+                                                      linkedID =
+                                                          asn1_NOVALUE,
+                                                      operationCode =
+                                                          updateLocation,
+                                                      parameter =
+                                                          #'UpdateLocationArg'{imsi
+                                                                                   =
+                                                                                   IMSI,
+                                                                               'msc-Number'
+                                                                                   =
+                                                                                   CallingGTBCD,
+                                                                               'vlr-Number'
+                                                                                   =
+                                                                                   CallingGTBCD}}}]},
```

Problem is that both `erl_tidy` and `katana_code` have multiple issues
with macros. It is hard to process format code which include macros
without preprocessing the macros.

## [elvis](https://github.com/inaka/elvis)

This is a bonus; it is not a formatter but a linter.

One difference between formatters and linters are that formatters
change the code into a uniform format, and linters warn or fail when
rules are broken. Linters can also check other things as nesting level.

This article by Brujo Benavides describe it pretty well.

[Are formatters better than linters?](https://medium.com/@elbrujohalcon/are-formatters-better-than-linters-cbab91189be3)

Setting it up you need to configure a ruleset and save in a special
Elvis config file in the repo. This config specifies which linting
rules to apply to which files.

For me it took 8-9 minutes for it to execute linting on our code base
with the example ruleset that is proposed by the tool.

# Summary

Sadly I couldn't find any good alternatives that fits our
purposes. There are issues with macros, or execution time.

I have to put this on the shelf again for a while, with just a dream
of uniform code.

# Edit: 2020-10-01

I forgot to update this blogpost, but something amazing happend.

After I wrote this blog post I contacted the maintainer of
steamroller, and told him about the slowness I experienced, and some
other difficulties.  One day later he had found and fixed an algorithm
going from an `O(n^2)` complexity to an `O(n)`. When retrying it on our
code base, things went from minutes to seconds!

He also removed and improved some of the ambiguous configuration
parameters.

I haven't yet started to look at the map formatting issues I had, but
maybe that is improved as well. Anyway I'll have to leave that for
another hackday.
