// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Snippets Library",
  tagline: "A collection of snippets & small projects for common programming tasks",
  favicon: "img/favicon.ico",
  url: "https://snippets.melchortatlonghari.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  onBrokenLinks: "throw",
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/profile.jpg",
      navbar: {
        title: "Home",
        logo: {
          alt: "Site Logo",
          src: "img/profile.svg",
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
            href: "https://www.melchortatlonghari.com/",
            label: "Melchor Tatlonghari",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Products",
            items: [
              {
                label: "Make Time",
                to: "https://make-time.net",
              },
              {
                label: "Nomad Budget",
                to: "https://budget.digital-nomad-social.com/",
              },
              {
                label: "Your SaaS",
                to: "https://meltatlonghari.gumroad.com/l/ayqmpf",
              },
              {
                label: "Golden Visa",
                to: "https://www.amazon.com/Golden-Visa-Strategies-Entrepreneurship-Citizenship/dp/B0CJL294G5",
              },
            ],
          },
          {
            title: "Links",
            items: [
              {
                label: "Melchor Tatlonghari Links",
                to: "https://linktr.ee/mel3kings",
              },
              {
                label: "Home",
                href: "https://www.melchortatlonghari.com",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/melchor-tatlonghari",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/meltatlonghari3",
              },
              {
                label: "Medium",
                href: "https://medium.com/@meltatlonghari3",
              },
            ],
          },
          {
            title: "Dev Links",
            items: [
              {
                label: "Github",
                href: "https://github.com/mel3kings",
              },
              {
                label: "Stackoverflow",
                href: "https://stackoverflow.com/users/2023728/mel3kings",
              },
              {
                label: "Credly",
                href: "https://www.credly.com/users/melchor-tatlonghari/badges",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
