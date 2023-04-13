# WG2 (wg2.com)

![wg2.com](
https://github.com/working-group-two/wg2.com/actions/workflows/website-deploy.yml/badge.svg?event=push) (https://www.wg2.com)

[![Netlify Status](https://api.netlify.com/api/v1/badges/3dc3b0e4-626a-4e64-ac3c-aa83f11b6790/deploy-status?branch=dev-pages)](https://app.netlify.com/sites/wg2-dev/deploys) (https://wg2-dev.netlify.app/)

## Adding content to the website
<details>
<summary>Creating a pull request</summary>
You can create pull requests directly from the repo - or - from your forked repository. Essentially you can follow any git workflow.

Clone the repo

```
git clone https://github.com/working-group-two/wg2.com.git
```

Create your new branch

```
git checkout -b yourname/your-branch-name
```

Do you development and then add the updated files to your branch

```
git add .
```

Create your commit message

```
git add -m "your commit message"
```

Push your changes 

```
git push --set-upstream origin yourname/your-branch-name
````
</details>


<details>
<summary> Create a Blog Post</summary>

- Add a directory for the new blog post here [blog/](https://github.com/working-group-two/wg2.com/tree/main/blog)
  - Name the directory `yyyy-mm-dd-name-of-blog`
  - Add a file called `index.md` and add your content here
  - Ensure you add a `<!--truncate-->` after the first paragraph of your blog post to truncate the text for when viewing at wg2.com/blog. If not, the entire blog post will be displayed
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

This will be viewed from wg2.com/blog and should be short.

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
</details>

<details>
<summary> Create a doc</summary>

- Upload your-doc.md at [docs/](https://github.com/working-group-two/wg2.com/tree/main/docs/)
- Upload images at [docs/images/](https://github.com/working-group-two/wg2.com/tree/main/docs/images/)

</details>

<details>
<summary> Markdown tutorial</summary>

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
[Description of your link](https://www.wg2.com)
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
</details>

## Website Development

<details>
<summary>Expert</summary>

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
│   │   └── wg2-logos
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
</details>

<details>
<summary>Deploy to dev website</summary>

@jonny-wgtwo setup the netlify account using his github credentials. https://app.netlify.com/sites/wgtwo-dev/overview 

To work better together and showcase a future PR, we needed the ability to deploy pre-production changes to a development website. Here are the steps required to get your changes live on https://wgtwo-dev.netlify.app/

1. Create a PR with your changes and add the label `devpages`
2. The [website-dev-pages GH action](https://github.com/working-group-two/wg2.com/actions/workflows/website-dev-pages.yml) will build the PR and push it on the [dev-pages branch](https://github.com/working-group-two/wg2.com/tree/dev-pages)
3. Your changes will soon be live on https://wgtwo-dev.netlify.app/. The netlify badge on top will update.

- [example pr using the devpage label](https://github.com/working-group-two/wg2.com/pull/131)  
- [github issue with details](https://github.com/working-group-two/wg2.com/issues/124)  

</details>

<details>
<summary>Production Deployment</summary>

## Production Deployment

Commit to main branch -> github action to perform `yarn build` -> website deployed to `gh-pages` branch

All PRs are also tested with a github action.
</details>

<details>
<summary>Upgrading the site</summary>

## Upgrading the site 
It is good to keep the site updated to ensure we get the latest features from docusaurus and to ensure the site stays secure from vulnerabilities. 

Upgrading the dependencies and docusaurus core platform
```
cd website
yarn upgrade @docusaurus/core@latest @docusaurus/plugin-client-redirects@latest @docusaurus/plugin-ideal-image@latest  @docusaurus/preset-classic@latest docusaurus-theme-classic@latest
yarn upgrade
```

Resolve upgrade errors and test locally:
Then we need to test to make sure the website still builds. Because of upgrading we might come into some errors. 
```
yarn build
yarn run serve
```
</details>
