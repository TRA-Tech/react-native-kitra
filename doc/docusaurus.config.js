// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');

const lightTheme = themes.github;
const darkTheme = themes.dracula;

const commonDocsOptions = {
  breadcrumbs: false,
  showLastUpdateAuthor: false,
  showLastUpdateTime: true,
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kitra',
  plugins: [require.resolve('./docusuarusWebpack5Plugin.js')],
  tagline: 'Kitra is a React Native UI Kit',
  favicon: 'img/favicon.ico',
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap',
  ],
  url: 'https://tra-tech.github.io',
  baseUrl: '/react-native-kitra/',
  organizationName: 'tra-tech',
  projectName: 'react-native-kitra',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/TRA-Tech/react-native-kitra/tree/main/doc',
          ...commonDocsOptions,

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      colorMode: {
        disableSwitch: true,
        defaultMode: 'light',
      },
      image: 'img/kitra-social-card.png',
      navbar: {
        title: 'Kitra',
        logo: {
          alt: 'Kitra Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'ComponentsSidebar',
            position: 'left',
            label: 'Components',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'DocSidebar',
            label: 'Docs',

          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/TRA-Tech/react-native-kitra',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          href: 'https://www.trabilisim.com/en',
          src: 'https://www.trabilisim.com/assets/images/logo/tra-bilisim-logo.svg',
          height: 50,

        },
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Components',
                to: '/docs/components/accordion-list',
              },
              {
                label: 'Doc',
                to: '/docs/doc/getting-started',
              },
            ],
          },
          {
            title: 'TRA Tech',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/TRA-Tech',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/trabilisim',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TRA Tech, Built with Docusaurus.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme,
      },
    }),
};

module.exports = config;
