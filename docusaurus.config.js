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
        title: "mel3kings",
        logo: {
          alt: "Site Logo",
          src: "img/profile.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Snippet Library",
          },
          { to: "/blog", label: "Dumb Builds", position: "left" },
          {
            href: "https://www.melchortatlonghari.com/",
            label: "Home",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Snippets Library",
                to: "/docs/intro",
              },
              {
                label: "Dumb Builds",
                to: "/blog",
              },
            ],
          },
          {
            title: "Links",
            items: [
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
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
