# Working Group Two (wgtwo.com)

## Create a Blog

- Add a directory for the new blog post here [blog/](https://github.com/working-group-two/wgtwo.com/tree/main/blog)
  - Name the directory `yyyy-mm-dd-name-of-blog`
  - Add a file called `index.md` and add your content here
  - Ensure you add a `<!--truncate-->` after the first paragraph of your blog post to truncate the text for when viewing at wgtwo.com/blog. If not, the entire blog post will be displayed
  - Add images to this directory

Example simple blog post in `/blog/2021-12-17-log4j-security-vulnerability/index.md`:

```
---
slug: log4j-security-vulnerability
title: "Zero-day vulnerabilities - Log4j"
date: 2021-12-17
tags: [security, infrastructure, vulnerability]
authors: [jonny-griffin]
---

This will be viewed from wgtwo.com/blog and should be short.

<!--truncate-->

Now my real blog post begins
...
...
```

Add author information in `blog/authors.yml`.  E.g.

```
mtl:
  name: Matt Long
  title: Engineering Manager for Edge, Cloud and Security
  url: https://www.linkedin.com/in/mattlong/
  image_url: /img/author-photos/mtl-li.jpg
```

## Create a Docs

- Upload your-doc.md at [docs/](https://github.com/working-group-two/wgtwo.com/tree/main/docs/)
- Upload images at [docs/images/](https://github.com/working-group-two/wgtwo.com/tree/main/docs/images/)

## Markdown Tutorial

For the Docs and Blog, markdown is used. Here is a great example https://stackedit.io/

In short, the main things to know for markdown

```md
## This is large header

normal paragraph with then **bold** text and *italic* text

You can do various types of lists:

* Bulleted
* Lists

1. Numbered
2. Lists

Normal link to a website
[Description of your link](https://www.wgtwo.com)
```

Images can be inserted with standard markdown image inclusion:

```
![](./my_image.png)
```

This will add a full-sized image.  If you want fine-grained control of image parameters, you need to use MDX (JSX in Markdown).  For images, this syntax looks like this:

```
<img
  width="40%"
  align="right"
  style={{
    display: "block",
    margin:"auto 10px"
  }}
  src={require("!file-loader!./my_image.png").default}
/>
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
yarn prettier
```

Note: If making a PR, a `yarn prettier` check is performed and will fail the PR if issues.

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

## Deployment

Commit to main branch -> github action to perform `yarn build` -> website deployed to `gh-pages` branch

All PRs are also tested with a github action.
