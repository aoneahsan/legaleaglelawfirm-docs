import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function Hero(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.hero)}>
      <div className="container">
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Legal Eagle Law Firm</p>
          <Heading as="h1" className={styles.title}>
            Documentation for the Legal Eagle platform
          </Heading>
          <p className={styles.subtitle}>{siteConfig.tagline}</p>
          <div className={styles.ctaRow}>
            <Link
              className="button button--primary button--lg"
              to="/docs/user-guide/intro"
            >
              Read the user guide
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/architecture/intro"
            >
              How it's built
            </Link>
            <Link
              className="button button--outline button--lg"
              href="https://legaleaglelaws.com"
            >
              Open the app ↗
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

type Card = {
  title: string;
  body: string;
  to: string;
  cta: string;
};

const cards: Card[] = [
  {
    title: 'For visitors',
    body: 'Find a lawyer, book a free consultation with the firm, ask the AI legal assistant about Pakistani law, or browse the public directory of advocates.',
    to: '/docs/user-guide/visitors/find-a-lawyer',
    cta: 'Visitor docs →',
  },
  {
    title: 'For firm clients',
    body: 'Sign in to track your case, view appointments and Google Meet links, send help requests, and manage your contact details.',
    to: '/docs/user-guide/clients/dashboard-overview',
    cta: 'Client dashboard docs →',
  },
  {
    title: 'For firm staff',
    body: 'Admin guides for blog editing, comment moderation, plan management, user roles, feature permissions, calendar account, and chatbot tuning.',
    to: '/docs/admin/intro',
    cta: 'Admin docs →',
  },
  {
    title: 'How it’s built',
    body: 'A public-safe architecture overview: tech stack, data privacy posture, court-sync workflow, AI fallback chain, mobile build, integration points.',
    to: '/docs/architecture/intro',
    cta: 'Architecture →',
  },
];

function CardRow(): ReactNode {
  return (
    <section className={styles.cardRow}>
      <div className="container">
        <div className={styles.cardGrid}>
          {cards.map((c) => (
            <Link key={c.title} to={c.to} className={clsx('card', styles.card)}>
              <div className="card__header">
                <Heading as="h3">{c.title}</Heading>
              </div>
              <div className="card__body">
                <p>{c.body}</p>
              </div>
              <div className="card__footer">
                <span className={styles.cardCta}>{c.cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CreditNote(): ReactNode {
  return (
    <section className={styles.credit}>
      <div className="container">
        <p>
          This documentation is built and maintained by{' '}
          <Link href="https://aoneahsan.com">Ahsan Mahmood</Link> — full-stack
          engineer focused on React, Capacitor, and Firebase. Reach out on{' '}
          <Link href="https://linkedin.com/in/aoneahsan">LinkedIn</Link>,{' '}
          <Link href="https://github.com/aoneahsan">GitHub</Link>, or by{' '}
          <Link href="mailto:aoneahsan@gmail.com">email</Link>. The site source
          is openly licensed under{' '}
          <Link href="https://creativecommons.org/licenses/by/4.0/">
            CC BY 4.0
          </Link>{' '}
          — fork it, quote it, cite it.
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Public documentation for Legal Eagle Law Firm — modern legal services for Pakistan and a practice-management SaaS for lawyers. Built by Ahsan Mahmood."
    >
      <Hero />
      <main>
        <CardRow />
        <CreditNote />
      </main>
    </Layout>
  );
}
