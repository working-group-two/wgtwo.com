---
slug: hacking-dark-themes-with-css-blend-modes/
title: Hacking dark themes with CSS blend modes
date: 2019-06-25
tags: [CSS, frontend, design]
author: David Åse
author_title: Tech Lead @ wgtwo
author_url: https://linkedin.com/in/davidaase
author_image_url: https://media-exp1.licdn.com/dms/image/C4D03AQFD4dPSvm-pIg/profile-displayphoto-shrink_400_400/0/1541960720294?e=1648684800&v=beta&t=sj0aTz-Im1u46B5m3O5KMPMD-PydrJoewIoeII5zP1k
---

Like many other companies, [Working Group Two](/) has a number of applications which are
only available internally or to partners.
Our UI designer (that's me) prefers light backgrounds with dark text, but one of our
partners have wanted a dark theme for one of our applications for some time.
We haven't been able to prioritize this, but we were using CSS blend modes for a different project,
and wondered if we could use them to quickly put together a dark theme.

<!--truncate-->

The application in this post is one of our partner portals, which follows the Material Design
guidelines. It’s built with [Vue](https://vuejs.org/) and [Vuetify](https://vuetifyjs.com/en/),
but also has some custom components and JS plugins (for uploads, charts, etc).
It took two hours to create the dark theme and deploy it to production, and we'll walk
you through the whole process (with screenshots) in this post.

## What are CSS blend modes?
Mozilla has a [page](https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode) which explains
the concept fairly well. In short, blend modes decide what should happen when two colors are
put on top of each other. The default blend mode is `normal`, which is what most people are used to.
As an example, the `normal` blend mode paints dark text on top of a light background on the
page you’re reading right now.

The application we have is light and we want it to be dark, so we need to look for blend modes that
can help with that. Scrolling through the [list at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode),
one mode in particular stands out:

```
difference
    The final color is the result of subtracting the darker of the two colors from the lighter one.
    A black layer has no effect, while a white layer inverts the other layer's color.
```

![Starting point, mostly basic Vuetify](/img/blog/blend-modes/01-console-subs-light.png)
![After applying](/img/blog/blend-modes/01-console-subs-difference.png)

Okay, that’s actually not too bad. There are some obvious issues, like the color hues being
inverted and everything being way too dark, but it should be possible to make some adjustments.

## Working with a non-standard blend mode
The most jarring issue is that the colors have been inverted.
Our teal logo is now red, and the red "unlocked account" icon we use in development mode is now teal.
This is in line with the documentation for the `difference` blend mode, but luckily CSS also supports hue-rotation,
so we can just rotate the hue back 180 degrees. Our base style now looks like this:

```css
html.dark-mode {
   mix-blend-mode: difference;
   filter: hue-rotate(180deg);
}
```

Hue is measured in degrees from 0 to 360, so we're flipping the hues twice.
Below, you can see a color wheel with no effects (1), with blend-mode (2), and with blend mode and hue rotate (3).
All the effects are applied to the same image here in your browser.

<!-- ![](/img/blog/blend-modes/color-mode-all.png) -->

As you can see from the illustration, brightness and saturation
is not accounted for with hue-rotate, so most colors won't look the same.
They will have the same hue though, so semantic meaning (red = danger, green = safe) is preserved.\\
We're lucky that our brand color doesn't change too much!

So, this fixes our colors, but we also have to do something about the darkness.
The whole application is pretty much pitch black, and to make it brighter we need to … turn down the brightness:

```css
html.dark-mode {
   mix-blend-mode: difference;
   filter: hue-rotate(180deg) brightness(0.67);
}
```

Let's have a look <small>(click to enlarge)</small>:

<!-- <div class="uk-child-width-1-2 uk-child-width-1-2@s bordered-gallery" uk-grid uk-lightbox="animation: fade">
    {% include image.html url="/img/blog/blend-modes/01-console-subs-light.png" caption="Starting point, mostly basic Vuetify"%}
    {% include image.html url="/img/blog/blend-modes/01-console-subs-difference-filters.png" caption="After applying blend mode and filters"%}
</div> -->

That’s a lot better (blend modes are fun!). Our dark theme is close to done now,
but we have one problem remaining: shadows. Because of our blend mode, making
things darker means making them brighter, so all our shadows look like white glows.
Since our base color is white/light gray, we can’t simply change our shadows to white as there would be no contrast.
Our solution was to embrace the “glow” feel and change the shadows to brand colored glows <small>(click to enlarge)</small>:

<!-- <div class="uk-child-width-1-2 uk-child-width-1-2@s bordered-gallery" uk-grid uk-lightbox="animation: fade">
    {% include image.html url="/img/blog/blend-modes/02-console-shadows-light.png" caption="Normally, the menu creates a shadow on the background"%}
    {% include image.html url="/img/blog/blend-modes/02-console-shadows-glow.png" caption="More of a glow than a shadow"%}
</div> -->

As you might have noticed in the previous screenshot, we also made some other adjustments.
We made the logo white using a brightness filter, and we set the base font-weight to 700 (bold),
since contrast is lower in the dark theme.

## More comparison screenshots
The following gallery shows some screenshots with custom components and JavaScript plugins.
No additional CSS was written for any of the views <small>(click to enlarge)</small>:

<!-- <div class="uk-child-width-1-3 uk-child-width-1-6@s bordered-gallery" uk-grid uk-lightbox="animation: fade">
    {% include image.html url="/img/blog/blend-modes/03-console-blacklist-light.png" caption="A standard Vuetify data table"%}
    {% include image.html url="/img/blog/blend-modes/03-console-blacklist-dark.png" caption="It's not perfect in dark mode, but it works"%}
    {% include image.html url="/img/blog/blend-modes/03-console-batch-light.png" caption="Our upload component is custom, not related to Vuetify"%}
    {% include image.html url="/img/blog/blend-modes/03-console-batch-dark.png" caption="Blend mode covers all parts of the app"%}
    {% include image.html url="/img/blog/blend-modes/03-console-stats-light.png" caption="Charts are built with Charts.js"%}
    {% include image.html url="/img/blog/blend-modes/03-console-stats-dark.png" caption="Charts also look okay"%}
</div> -->

## Conclusion
All in all, it took around two hours to create this dark theme. Most of the time was
spent experimenting with different settings to get acceptable contrast ratios.
There are probably better ways of doing this, but this was incredibly quick,
and allowed us to deliver something we normally wouldn't be able to deliver.
Other than the shadows, nothing is particularly ugly, so we consider this a success.
The whole style sheet is just a couple of selectors :


```css
html.dark-mode {
    mix-blend-mode: difference;
    filter: brightness(0.67) hue-rotate(180deg);
    font-weight: 700 !important;
}

/* Glow for dropdown/card-hover*/
.dark-mode .v-menu__content,
.dark-mode .v-card--hover:hover {
    box-shadow: 0 5px 20px rgba(142, 255, 252, 0.74);
}

.dark-mode .logo {
    filter: brightness(0);
}
```

Thanks for reading!

## FAQ

*“Many CSS frameworks have a dark-mode, why not use that?”*\\
Vuetify also has a dark-mode. Most of the components they offer look okay in dark-mode, but we would have
to write custom CSS for our own components, and for other libraries we’re using (primarily for charts).
The great thing about the blend-mode hack is that is operates independently of any framework.
You set it on an HTML tag and it treats everything the same way.

*“What about accessibility?”*\\
Yeah, this isn't great for accessibility. Since we're lowering the brightness to 67% we're losing a lot of contrast.
We increased the font-weight to mitigate the effects of this, but you shouldn't use this technique for your primary theme.

*“What about browser support?”*\\
Supported in modern browsers, except Edge.
There's a [detailed table](https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode#Browser_Compatibility) available on MDN.

*“What about performance?”*\\
We haven't had any problems with performance, but some readers noted that they tried
the trick on a complex website (Jira), which resulted in sluggish behavior.
