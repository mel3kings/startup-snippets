// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Snippets Library",
  tagline: "A collection of snippets & small projects for common programming tasks",
  favicon: "img/favicon.ico",
  url: "https://snippets.melchortatlonghari.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [[require.resolve("@cmfcmf/docusaurus-search-local"), {}]],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // Replace with your project's social card
    image: "img/profile.png",
    navbar: {
      title: "Home",
      logo: {
        alt: "Site Logo",
        src: "img/profile.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Code Snippets",
        },
        // { to: "/blog", label: "Dumb Builds", position: "left" },
        {
          to: "https://www.melchortatlonghari.com/",
          label: "Melchor Tatlonghari",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "SaaS Products",
          items: [
            {
              label: "🔥 Qoutes",
              to: "https://qoutesapp.com/?ref=snippets",
            },
            {
              label: "Make Time",
              to: "https://make-time.net/?ref=snippets",
            },
            {
              label: "Nomad Budget",
              to: "https://budget.digital-nomad-social.com/?ref=snippets",
            },

            {
              label: "Golden Visa",
              to: "https://www.amazon.com/Golden-Visa-Strategies-Entrepreneurship-Citizenship/dp/B0CJL294G5",
            },
          ],
        },
        {
          title: "Others",
          items: [
            {
              to: "https://mel3kings.canny.io/application-or-feature-request",
              label: "⚠️ Bugs or Issues",
            },
            {
              label: "All Links - Link Tree",
              to: "https://linktr.ee/mel3kings",
            },
            {
              label: "Professional Account",
              to: "https://www.linkedin.com/in/melchor-tatlonghari",
            },
            {
              label: "Twitter",
              to: "https://twitter.com/meltatlonghari3",
            },
            {
              label: "Blogs",
              to: "https://medium.com/@meltatlonghari3",
            },
          ],
        },
        {
          title: "Dev Links",
          items: [
            {
              label: "Github",
              to: "https://github.com/mel3kings",
            },
            {
              label: "Stackoverflow",
              to: "https://stackoverflow.com/users/2023728/mel3kings",
            },
            {
              label: "Credly",
              to: "https://www.credly.com/users/melchor-tatlonghari/badges",
            },
          ],
        },
      ],
    },
  },
};

module.exports = config;
