# Working Group Two (wgtwo.com) 

## Blog

- Upload images at [static/img/blog/](https://github.com/working-group-two/wgtwo.com/tree/main/static/img/blog)
- Add your blog post here [blog/](https://github.com/working-group-two/wgtwo.com/tree/main/blog)
  - Keep the structure `yyyy-mm-dd-name-of-blog.md`
  - Ensure you add a `<!--truncate-->` after the first paragraph of your blogpost to truncate the text for when viewing at wgtwo.com/blog. If not, the entire blog post will be displayed

Example simple blogpost

<details>
<summary>2022-02-02-how-to-write-a-blog-post.md</summary>
<br>
<pre>
---
slug: log4j-security-vulnerability
title: "Zero-day vulnerabilities - Log4j"
date: 2021-12-17
tags: [security, infrastructure, vulnerability]
author: Jonnathan Griffin
author_title: Security Engineer
author_url: https://www.linkedin.com/in/jonnathangriffin/
author_image_url: https://media-exp1.licdn.com/dms/image/C4E03AQEjrF7PC8veoQ/profile-displayphoto-shrink_400_400/0/1624522450808?e=1648684800&v=beta&t=LZVAsE5hVp3T50zGPk0qkf8qPJCnsXBlBXfCosrTH5o
---

This will be viewed from wgtwo.com/blog and should be short.

\<!--truncate-->

Now my real blog post begins 
...
...
</pre>
</details>

## Docs

- Upload your-doc.md at [docs/](https://github.com/working-group-two/wgtwo.com/tree/main/docs/)
- Upload images at [docs/images/](https://github.com/working-group-two/wgtwo.com/tree/main/docs/images/)

To have the new doc show up on the sidebar, update [sidebars.js](https://github.com/working-group-two/wgtwo.com/tree/main/website/sidebars.js) at  with the `id` that is specified in the `docs/your-doc.md`. The following is an example:

[docs/media-and-press.md](https://github.com/working-group-two/wgtwo.com/tree/main/docs/about/media-and-press.md)
```yaml
---
id: media-and-press
title: Media and Press
sidebar_label: Media and Press
---
your normal markdown text here
...
```

[sidebars.js](https://github.com/working-group-two/wgtwo.com/tree/main/website/sidebars.js)
```js
module.exports = {
  someSidebar: {
    "About Working Group Two": [
      "about/introduction",
      "about/concept", 
      "about/working-with-wgtwo", 
      "about/demos", 
      "about/media-and-press",
    ],
    "Case Studies": [
      "case-studies/adjacent-cores-for-operators", 
    ...
    ...
    ...
```
## Markdown Tutorial

For the Docs and Blog, markdown is used. Here is a great example https://markdownlivepreview.com/

In short, the main things to know for markdown

```md
## This is large header

normal paragraph with then **bold** text and *italic* text

Image for a docs
![](../images/wgtwo-skier-1.png)  

Image for a blog
![](/img/blog/log4j/01-canary-tokens.png)

Normal link to a website
[Description of your link](www.wgtwo.com)
```

## Website Development

**Expert**

The website is built using Docusaurus, React, and Typescript. This allows for custom complex integrations using APIs, as well as, the simple updating docs and blogs with markdown. 

To run the website locally with hot reload:
```bash
cd website
yarn install
yarn start
```

Before pushing to prod, it is recommended to test with `yarn build`. There can be oddities with CSS changes for when React will generate the html. To test this,

```bash
cd website
yarn build
yarn run serve
```

Website structure
```bash
$  tree -d -L 4
.
├── blog
├── docs
│   ├── about
│   ├── case-studies
│   ├── images
│   │   └── wgtwo-logos
│   └── technology
└── website
    ├── src
    │   ├── components
    │   │   ├── apply
    │   │   ├── brands
    │   │   ├── casestudy
    │   │   ├── cta
    │   │   ├── enterprise
    │   │   ├── hero
    │   │   ├── integrations
    │   │   ├── interview-process
    │   │   ├── logs
    │   │   ├── multig
    │   │   ├── ourservice
    │   │   ├── quote
    │   │   ├── rbe
    │   │   ├── security-domain
    │   │   ├── security-header
    │   │   └── technologymetrics
    │   ├── css
    │   ├── pages
    │   └── util
    ├── static
    │   ├── img
    │   │   ├── blog
    │   │   ├── favicons
    │   │   └── team
    │   └── video
    │       └── blog
    └── theme
        ├── BlogListPage
        ├── BlogPostItem
        ├── BlogPostPage
        ├── BlogSidebar
        ├── BlogTagsListPage
        └── BlogTagsPostsPage
```