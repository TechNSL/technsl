// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Never Stop Learning',
  tagline: '',
  favicon: 'img/favicon.ico',
  url: 'https://technsl.com', // Your website URL
  baseUrl: '/',
  organizationName: 'TechNSL', // GitHub org/user name.
  projectName: 'technsl', // GitHub repo name.
  deploymentBranch: "gh-pages", // Deployment branch for GitHub Pages
  onBrokenAnchors: 'throw',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Future-proofing
  future: {
    v4: true,
  },

  // For internationalization, set useful metadata like html lang.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

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
            'https://github.com/technsl/technsl/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/technsl/technsl/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
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

        title: 'Tech NSL',
        logo: {
          alt: 'Tech NSL',
          src: 'img/logo.svg',
          srcDark: 'img/docusaurus_keytar.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'fundamentalsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'favsSidebar',
            position: 'left',
            label: 'Favs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'aiSidebar',
            position: 'left',
            label: 'AI',
          },
          {
            type: 'docSidebar',
            sidebarId: 'awsSidebar',
            position: 'left',
            label: 'AWS',
          },
          {
            type: 'docSidebar',
            sidebarId: 'dataSidebar',
            position: 'left',
            label: 'Data',
          },
          {
            type: 'docSidebar',
            sidebarId: 'dotnetSidebar',
            position: 'left',
            label: '.NET',
          },
          {
            type: 'docSidebar',
            sidebarId: 'pythonSidebar',
            position: 'left',
            label: 'Python',
          },
          {
            type: 'docSidebar',
            sidebarId: 'devopsSidebar',
            position: 'left',
            label: 'DevOps',
          },
          {
            type: 'docSidebar',
            sidebarId: 'sreSidebar',
            position: 'left',
            label: 'SRE',
          },
          {
            type: 'docSidebar',
            sidebarId: 'securitySidebar',
            position: 'left',
            label: 'Security',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'dropdown',
            position: 'left',
            label: 'References',
            items: [
              {
                label: 'AWS Docs',
                href: 'https://docs.aws.amazon.com/',
              },
              {
                label: 'Microsoft Docs',
                href: 'https://learn.microsoft.com/en-us/dotnet/',
              },
            ],
          },
          {
            href: 'https://github.com/TechNSL',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://technsl.com/',
              },
              {
                label: 'Discord',
                href: 'https://technsl.com/',
              },
              {
                label: 'X',
                href: 'https://technsl.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/TechNSL',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Made with ❤️ by TechNSL | Copyright © ${new Date().getFullYear()} | Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
