import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  guideSidebar: [
    'user-guide/intro',
    {
      type: 'category',
      label: 'For visitors',
      collapsed: false,
      link: { type: 'generated-index', title: 'For visitors', slug: '/user-guide/visitors' },
      items: [
        'user-guide/visitors/find-a-lawyer',
        'user-guide/visitors/free-consultation-booking',
        'user-guide/visitors/ai-legal-assistant',
        'user-guide/visitors/legal-persons-directory',
      ],
    },
    {
      type: 'category',
      label: 'For firm clients',
      collapsed: false,
      link: { type: 'generated-index', title: 'For firm clients', slug: '/user-guide/clients' },
      items: [
        'user-guide/clients/dashboard-overview',
        'user-guide/clients/your-cases',
        'user-guide/clients/appointments',
        'user-guide/clients/help-requests',
        'user-guide/clients/profile-and-preferences',
        'user-guide/clients/legal-persons-search',
      ],
    },
    {
      type: 'category',
      label: 'For lawyers (SaaS workspace)',
      collapsed: false,
      link: { type: 'generated-index', title: 'For lawyers (SaaS workspace)', slug: '/user-guide/lawyers' },
      items: [
        'user-guide/lawyers/getting-started',
        'user-guide/lawyers/contacts',
        'user-guide/lawyers/cases',
        'user-guide/lawyers/notes',
        'user-guide/lawyers/calendar',
        'user-guide/lawyers/public-profile',
        {
          type: 'category',
          label: 'Integrations',
          collapsed: false,
          link: { type: 'doc', id: 'user-guide/lawyers/integrations/overview' },
          items: [
            'user-guide/lawyers/integrations/google-drive',
            'user-guide/lawyers/integrations/google-calendar',
            'user-guide/lawyers/integrations/court-sync',
            'user-guide/lawyers/integrations/billing-and-plans',
          ],
        },
      ],
    },
  ],

  adminSidebar: [
    {
      type: 'category',
      label: 'Admin guide',
      collapsed: false,
      link: { type: 'generated-index', title: 'Admin guide', slug: '/admin' },
      items: ['admin/intro'],
    },
  ],

  architectureSidebar: [
    {
      type: 'category',
      label: 'Architecture',
      collapsed: false,
      link: { type: 'generated-index', title: 'Architecture', slug: '/architecture' },
      items: ['architecture/intro'],
    },
  ],
};

export default sidebars;
