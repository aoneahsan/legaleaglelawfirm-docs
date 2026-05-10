import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const SITE_TITLE = 'Legal Eagle Law Firm — Documentation';
const SITE_TAGLINE =
  'Modern legal services for Pakistan + a practice-management SaaS for lawyers';
const PRIMARY_URL = 'https://docs.legaleaglelaws.com';
const APP_URL = 'https://legaleaglelaws.com';
const GITHUB_REPO = 'https://github.com/aoneahsan/legaleaglelawfirm-docs';

const config: Config = {
  title: SITE_TITLE,
  tagline: SITE_TAGLINE,
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
    faster: true,
  },

  url: PRIMARY_URL,
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'aoneahsan',
  projectName: 'legaleaglelawfirm-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'canonical',
        href: PRIMARY_URL,
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'Ahsan Mahmood',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#1B3B6F',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: `${SITE_TITLE} blog feed`,
        href: '/blog/rss.xml',
      },
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Legal Eagle Law Firm',
        legalName: 'Legal Eagle Law Firm',
        url: APP_URL,
        logo: `${PRIMARY_URL}/img/logo.svg`,
        founder: {
          '@type': 'Person',
          name: 'Maaz Ahmed Warriach',
          jobTitle: 'Advocate',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress:
            'Office No. 3, 2nd Floor, Kareem Chamber 2, Mozang',
          addressLocality: 'Lahore',
          postalCode: '54000',
          addressCountry: 'PK',
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+92-339-0108134',
            contactType: 'customer service',
            availableLanguage: ['English', 'Urdu'],
          },
        ],
        sameAs: [APP_URL, GITHUB_REPO],
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_TITLE,
        url: PRIMARY_URL,
        publisher: { '@type': 'Organization', name: 'Legal Eagle Law Firm' },
        author: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
          url: 'https://aoneahsan.com',
          email: 'aoneahsan@gmail.com',
          sameAs: [
            'https://linkedin.com/in/aoneahsan',
            'https://github.com/aoneahsan',
            'https://www.npmjs.com/~aoneahsan',
          ],
        },
      }),
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: `${GITHUB_REPO}/edit/main/`,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: `${GITHUB_REPO}/edit/main/`,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            title: 'Legal Eagle Documentation Blog',
            description:
              'Release notes, deep dives, and guides for the Legal Eagle platform.',
            copyright: `© ${new Date().getFullYear()} Legal Eagle Law Firm. Documentation by Ahsan Mahmood (CC BY 4.0).`,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          lastmod: 'date',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    metadata: [
      {
        name: 'keywords',
        content:
          'legal eagle law firm, lawyer pakistan, lawyer lahore, advocate maaz warriach, free legal consultation pakistan, ai legal assistant pakistan, lahore high court lawyer, court hearing dates punjab, practice management saas pakistan, ahsan mahmood',
      },
      {
        name: 'description',
        content:
          'Documentation for Legal Eagle Law Firm — a modern legal services platform for Pakistan and a practice-management SaaS for lawyers. Find a lawyer, book a free consultation, ask the AI legal assistant, manage your practice.',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@aoneahsan' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'en_PK' },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    navbar: {
      title: 'Legal Eagle',
      hideOnScroll: false,
      logo: {
        alt: 'Legal Eagle Law Firm logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
        href: '/',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'left',
          label: 'User Guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'adminSidebar',
          position: 'left',
          label: 'Admin Guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'architectureSidebar',
          position: 'left',
          label: 'Architecture',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: APP_URL,
          label: 'Open the app ↗',
          position: 'right',
        },
        {
          href: GITHUB_REPO,
          label: 'GitHub',
          position: 'right',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Legal Eagle Law Firm',
        src: 'img/logo-dark.svg',
        href: '/',
        width: 160,
      },
      links: [
        {
          title: 'Product',
          items: [
            { label: 'Open the app', href: APP_URL },
            { label: 'Free consultation', href: `${APP_URL}/free-consultation` },
            { label: 'Find a lawyer', href: `${APP_URL}/legal-persons` },
            { label: 'Practice areas', href: `${APP_URL}/practice-areas` },
          ],
        },
        {
          title: 'Documentation',
          items: [
            { label: 'User guide', to: '/docs/user-guide/intro' },
            { label: 'Admin guide', to: '/docs/admin/intro' },
            { label: 'Architecture', to: '/docs/architecture/intro' },
            { label: 'Blog', to: '/blog' },
          ],
        },
        {
          title: 'Firm',
          items: [
            { label: 'About', href: `${APP_URL}/about` },
            { label: 'Contact', href: `${APP_URL}/contact` },
            { label: 'Privacy Policy', href: `${APP_URL}/privacy` },
            { label: 'Terms of Service', href: `${APP_URL}/terms` },
          ],
        },
        {
          title: 'Built by Ahsan Mahmood',
          items: [
            { label: 'Portfolio — aoneahsan.com', href: 'https://aoneahsan.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/aoneahsan' },
            { label: 'GitHub', href: 'https://github.com/aoneahsan' },
            { label: 'npm', href: 'https://www.npmjs.com/~aoneahsan' },
            {
              label: 'Support this work ❤',
              href: 'https://aoneahsan.com/payment?project-id=legaleaglelawfirm&project-identifier=com.legaleaglelaws.app',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Legal Eagle Law Firm. Site & documentation built by <a href="https://aoneahsan.com" target="_blank" rel="noopener">Ahsan Mahmood</a>. Documentation licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript', 'tsx', 'yaml', 'sql'],
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
    },
    announcementBar: {
      id: 'public-docs-announcement-2026-05',
      content:
        '⚖️ Public docs for <a target="_blank" rel="noopener" href="https://legaleaglelaws.com">legaleaglelaws.com</a> — built by <a target="_blank" rel="noopener" href="https://aoneahsan.com">Ahsan Mahmood</a>. <a target="_blank" rel="noopener" href="https://github.com/aoneahsan/legaleaglelawfirm-docs">Star on GitHub ★</a>',
      backgroundColor: '#1B3B6F',
      textColor: '#F5E19B',
      isCloseable: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
