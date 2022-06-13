const path = require("path")

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
  i18n: {
    defaultLocale: "en",
    locales: ["en", "jp"],
    localeConfigs: {
      jp: {
        label: "日本語",
      },
    },
  },
  themeConfig: {
    metadata: [
      {
        name: "description",
        content:
          "We help mobile operators innovate at scale, reduce cost and dive into new revenue streams - by building a mobile core network from the ground up and delivering it as-a-service.",
      },
      {
        name: "og:description",
        content:
          "We help mobile operators innovate at scale, reduce cost and dive into new revenue streams - by building a mobile core network from the ground up and delivering it as-a-service.",
      },
      {
        name: "og:image",
        content: "img/wgtwo-logo-white-bg.png",
      },
      {
        name: "keywords",
        content:
          "mvne, private network, epc, 5G core, mvno, IMS core, mobile core, evolved packet core epc, mvno core, core as a service'",
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
          href: "/careers/",
          activeBasePath: "/careers/",
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
          href: "/contact/",
          activeBasePath: "/contact/",
          label: "Talk to us",
          position: "right",
          className: "sign-up",
        },
        {
          type: "localeDropdown",
          position: "right",
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
              label: "About",
              href: "/docs/about/introduction/",
              target: "_self",
            },
            {
              label: "Blog",
              href: "/blog/",
              target: "_self",
            },
            {
              label: "Case Studies",
              href: "/docs/case-studies/mvnx/",
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
              label: "Privacy Notice",
              href: "/privacy",
              target: "_self",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Media & Analysts",
              href: "/docs/about/media-and-analysts",
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
          editUrl:
            "https://github.com/working-group-two/wgtwo.com/edit/main/docs/",
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        blog: {
          path: "../blog",
          showReadingTime: true,
          blogSidebarCount: 1000,
          editUrl:
            "https://github.com/working-group-two/wgtwo.com/edit/main/blog/",
        },
        googleAnalytics: {
          trackingID: "UA-114662288-1",
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
        disableInDev: false, // to avoid different behaviours
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
    [
      path.resolve(__dirname, "plugins/personio-jobs.js"),
      {
        jobsOverviewRoute: {
          path: "/jobs",
          component: path.resolve(
            __dirname,
            "src/pages/jobs/_jobs-overview.tsx"
          ),
        },
        jobRoute: {
          basePath: "/careers/job/",
          component: path.resolve(__dirname, "src/pages/jobs/_job.tsx"),
        },
      },
    ],
  ],
}
