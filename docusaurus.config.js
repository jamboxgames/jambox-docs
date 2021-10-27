const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Jambox Games",
  tagline: "Competitive Game Publishing Platform",
  url: "https://wizardly-ride-28e0db.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Jambox Games", // Usually your GitHub org/user name.
  projectName: "jambox-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "overview/introduction",
          position: "left",
          label: "Jambox Arena Overview",
        },
        {
          type: "doc",
          docId: "sdkdocs/introduction",
          position: "left",
          label: "Jambox Arena Docs",
        },
        {
          type: "doc",
          docId: "publishing/introduction",
          position: "left",
          label: "Jambox SDK",
        }
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "docs/overview/introduction",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/jamboxgames",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jambox Games`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
