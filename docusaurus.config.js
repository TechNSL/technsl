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
  
  // Future-proofing
  future: {
    v4: true,
  },

  url: 'https://technsl.com', // Your website URL
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'TechNSL', // GitHub org/user name.
  projectName: 'technsl', // GitHub repo name.
  deploymentBranch: "gh-pages", // Deployment branch for GitHub Pages
  
  onBrokenLinks: 'throw',

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
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
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
          src: 'img/nsl-logo.png',
          srcDark: 'img/nsl-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'systemDesignSidebar',
            position: 'left',
            label: 'System Design',
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
            sidebarId: 'azureSidebar',
            position: 'left',
            label: 'Azure',
          },
          {
            type: 'docSidebar',
            sidebarId: 'databaseSidebar',
            position: 'left',
            label: 'Database',
          },
          {
            type: 'docSidebar',
            sidebarId: 'devopsSidebar',
            position: 'left',
            label: 'DevOps',
          },
          {
            type: 'docSidebar',
            sidebarId: 'projectsSidebar',
            position: 'left',
            label: 'Projects',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'dropdown',
            position: 'left',
            label: 'References',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'refsSidebar',
                label: 'Bookmarks',
              },
              {
                label: 'Coursera',
                href: 'https://www.coursera.org/',
              },
              {
                label: 'AWS Docs',
                href: 'https://docs.aws.amazon.com/',
              },
              {
                label: 'Microsoft Learn',
                href: 'https://learn.microsoft.com/en-us/',
              },
            ],
          },
          {
            href: 'https://github.com/TechNSL',
            position: 'right',
            className: 'navbar-github-link',
            'aria-label': 'GitHub',
          },
        ],
      },
      /*announcementBar: {
        id: 'announcement-bar',
        content:
          '🚀 Never Stop Learning. <a target="_blank" rel="noopener noreferrer" href="https://technsl.com/">Get Started Now</a>',
        backgroundColor: '#091E42',
        textColor: '#fafbfc',
        isCloseable: true,
      },*/
      algolia: {
        appId: 'RBHKFI9TH6',
        apiKey: '418bf2220d2872becdee09fca9ec1e40',
        indexName: 'TechNSL-Search',
        contextualSearch: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tutorials',
            items: [
              {
                label: 'System Design',
                to: '/system-design',
              },
              {
                label: '.NET',
                to: '/dotnet',
              },
              {
                label: 'AWS',
                to: '/aws',
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
        copyright: `Made with ❤️ by TechNSL | Never Stop Learning | Copyright © ${new Date().getFullYear()} `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
