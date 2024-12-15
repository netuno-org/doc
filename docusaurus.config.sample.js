// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Doc',
  tagline: 'Netuno',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://doc.netuno.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Sitana', // Usually your GitHub org/user name.
  projectName: 'doc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
  },

  scripts: [
      !!process.env.DOCUSAURUS_CURRENT_LOCALE
          && process.env.DOCUSAURUS_CURRENT_LOCALE != 'undefined'
          ? `/${process.env.DOCUSAURUS_CURRENT_LOCALE}/script.js`
          : '/script.js'
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/netuno-org/doc/tree/master/',
        },
        /*blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },*/
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Netuno',
        logo: {
          alt: 'Netuno Documentation',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'getStartedSidebar',
            position: 'left',
            label: 'Get Started',
          },
          {
            type: 'docSidebar',
            sidebarId: 'academySidebar',
            position: 'left',
            label: 'Academy',
          },
          {
            type: 'docSidebar',
            sidebarId: 'librarySidebar',
            position: 'left',
            label: 'Library',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/netuno-org/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Open Source',
            items: [
              {
                label: 'Installation',
                to: '/docs/get-started/installation',
              },
              {
                label: 'Releases',
                href: 'https://github.com/netuno-org/platform/releases',
              },
              {
                label: 'Documentation',
                href: 'https://github.com/netuno-org/doc',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCYY1Nz6T2NJtP29vba2fqkg',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/4sfXG6YWFu',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/netuno-org/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/netuno_org/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/netuno-org/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/netuno_org',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/netuno.org/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a target="_blank" href="https://www.sitana.pt">Sitana</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '__APPID__',

        // Public API key: it is safe to commit it
        apiKey: '__APIKEY__',

        indexName: 'netuno',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'github\\.com|sitana\\.pt',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,

        //... other Algolia params
      },
    }),
};

export default config;
