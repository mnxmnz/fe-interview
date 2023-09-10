const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Front-End Interview',
  tagline: '신입 프론트엔드 개발자로 면접에 참여했을 때 받았던 질문을 정리했습니다.',
  favicon: 'img/icon.png',
  url: 'https://fe-interview-mnxmnz.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Front-End Interview',
        logo: {
          alt: 'Logo',
          src: 'img/icon.png',
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Computer Science',
                to: '/computer-science',
              },
              {
                label: 'JavaScript',
                to: '/javascript',
              },
              {
                label: 'TypeScript',
                to: '/typescript',
              },
              {
                label: 'React',
                to: '/react',
              },
              {
                label: 'Web',
                to: '/web',
              },
              {
                label: 'Etc',
                to: '/category/-etc',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mnxmnz/FE-Interview',
              },
              {
                label: 'Feedback',
                href: 'https://forms.gle/rXRV9Yw7ZVUEHk6m6',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 김민지 Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
