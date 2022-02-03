module.exports = {
  title: "Working Group Two",
  tagline:
    "No more boxes, no more end of life, no large upfront investments. With the wgtwo cloud native mobile core we offer continuous innovation, continuous development, scalability and flexibility. And to make it really simple for operators – delivered as a managed SaaS telecommunication network.",
  url: "https://www.wgtwo.com/",
  baseUrl: "/",
  favicon: "img/favicons/favicon.ico",
  organizationName: "working-group-two",
  projectName: "wgtwo.com",
  deploymentBranch: "gh-pages",
  trailingSlash: "true",
  themeConfig: {
    metadata: [
      {
        name: "description",
        content:
          "No more boxes, no more end of life, no large upfront investments. With the wgtwo cloud native mobile core we offer continuous innovation, continuous development, scalability and flexibility. And to make it really simple for operators – delivered as a managed SaaS telecommunication network.",
      },
      {
        name: "og:description",
        content:
          "No more boxes, no more end of life, no large upfront investments. With the wgtwo cloud native mobile core we offer continuous innovation, continuous development, scalability and flexibility. And to make it really simple for operators – delivered as a managed SaaS telecommunication network.",
      },
    ],
    colorMode: {
      disableSwitch: true,
      switchConfig: {
        darkIcon: " ",
        lightIcon: " ",
      },
    },
    prism: {
      additionalLanguages: ["promql", "protobuf"],
    },
    image: "img/preview.png",
    navbar: {
      logo: {
        alt: "wgtwo Logo",
        src: "img/logo.svg",
        srcDark: "img/logo_white.svg",
        target: "_self",
        href: "/",
        width: "191px",
        height: "32px",
      },
      items: [
        {
          href: "/technology",
          target: "_self",
          label: "Technology",
          position: "left",
        },
        {
          href: "/product-ecosystem",
          target: "_self",
          label: "Product Ecosystem",
          position: "left",
        },
        {
          href: "/team/",
          activeBasePath: "/team/",
          label: "Join the Team 🎉",
          position: "right",
        },
        {
          href: "/blog/",
          activeBasePath: "/blog/",
          label: "Blog",
          position: "right",
        },
        {
          href: "/request-demo/",
          activeBasePath: "/request-demo/",
          label: "Talk to an Expert",
          position: "right",
          className: "sign-up",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          items: [
            {
              html: `<a href="/"><img alt="wgtwo Logo" src="/img/logo_white.svg" width="281px" height="32px" class="footer-logo" /></a>`,
            },
          ],
        },
        {
          title: "Product",
          items: [
            {
              label: "API Docs",
              href: "https://docs.wgtwo.com",
            },
            {
              label: "Console Login",
              href: "https://console.wgtwo.com",
            },
            {
              label: "Customer Support",
              href: "https://support.wgtwo.com",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Blog",
              href: "/blog/",
              target: "_self",
            },
            {
              label: "Docs",
              href: "/docs/about/introduction",
              target: "_self",
            },
            {
              label: "Team",
              href: "/team",
              target: "_self",
            },
            {
              label: "Careers",
              href: "/careers",
              target: "_self",
            },
            {
              label: "gk.wgtwo.com 合同会社",
              href: "https://gk.wgtwo.com",
            },
          ],
        },
        {
          title: "Security",
          items: [
            {
              label: "Security Overview",
              href: "/security",
              target: "_self",
            },
            {
              label: "Security Whitepaper",
              href: "/docs/technology/security-whitepaper",
              target: "_self",
            },
            {
              label: "Privacy Policy",
              href: "/privacy",
              target: "_self",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Media & Press",
              href: "/docs/about/media-and-press",
              target: "_self",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/workinggrouptwo",
            },
            {
              label: "GitHub",
              href: "https://github.com/working-group-two",
            },
            {
              label: "LinkedIn",
              href: "http://linkedin.com/company/wgtwo",
            },
            {
              label: "Contact Us",
              href: "/contact",
              target: "_self",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Working Group Two AS`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "../docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/working-group-two/wgtwo.com/edit/main/docs/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          path: "../blog",
          showReadingTime: true,
          blogSidebarCount: 1000,
          editUrl: "https://github.com/working-group-two/wgtwo.com/edit/main/blog/",
          blogPostComponent: "../theme/BlogPostPage",
          blogListComponent: "../theme/BlogListPage",
          blogTagsListComponent: "../theme/BlogTagsListPage",
          blogTagsPostsComponent: "../theme/BlogTagsPostsPage",
        },
        googleAnalytics: {
          trackingID: "somethinghere",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/footer.css"),
            require.resolve("./src/css/general.css"),
            require.resolve("./src/css/markdown.css"),
            require.resolve("./src/css/nav.css"),
          ],
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        sizes: [100, 400, 800, 1200],
      },
    ],
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: true,
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/docs/about/introduction",
            from: ["/faq"],
          },
          {
            to: "/docs/about/introduction",
            from: ["/docs"],
          },
        ],
      },
    ],
  ],
};
