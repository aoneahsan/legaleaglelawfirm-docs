---
slug: introducing-public-docs
title: Introducing the Legal Eagle public documentation site
authors: [ahsan]
tags: [announcements, documentation]
date: 2026-05-10
description: Why we're publishing the Legal Eagle Law Firm documentation as an openly licensed, separately hosted public site on docs.legaleaglelaws.com.
---

The application source code for [legaleaglelaws.com](https://legaleaglelaws.com) is in a private repository — and is going to stay there. The platform handles confidential client matters and publishing the source would be both an indirect security risk and a distraction from the work.

But documentation is different.

Documentation is the part of a product where transparency makes the product **more** trustworthy, not less. A user who reads how a feature works, what it does **not** do, and where its limits are is a user who can use it well. Hidden documentation tends to be less rigorous — there's nobody outside the team checking it — and it tends to atrophy because nobody outside the team can correct it.

So as of today, the Legal Eagle Law Firm public documentation lives at **[docs.legaleaglelaws.com](https://docs.legaleaglelaws.com)** — an openly licensed (CC BY 4.0), separately hosted Docusaurus site. The repository is public on GitHub at [aoneahsan/legaleaglelawfirm-docs](https://github.com/aoneahsan/legaleaglelawfirm-docs); spotting an inaccuracy or want to suggest a clearer way to phrase something, open a pull request.

{/* truncate */}

## What's covered

Three audiences:

- **Visitors and firm clients** — how to find a lawyer, book a free consultation, use the AI legal assistant, navigate the firm-client dashboard.
- **Firm staff (admin)** — the admin panel, content workflows, plan management. *(Pages incrementally being released.)*
- **Technically curious readers** — a high-level architecture overview, public-safe. No secrets, no internal endpoints. Just the orientation a developer or a journalist needs to evaluate the platform's posture.

## How the site is built

[Docusaurus 3.10](https://docusaurus.io) on Node 20, TypeScript, MDX. Mermaid for diagrams, `@docusaurus/faster` (Rspack) for build performance, `@docusaurus/plugin-ideal-image` for responsive images. Theme is hand-built around the firm's navy-and-gold brand with full dark-mode parity.

The site ships to three deploy targets in parallel:

| Target | URL | Purpose |
|---|---|---|
| Firebase Hosting (firm domain) | docs.legaleaglelaws.com | Brand-aligned home |
| Firebase Hosting (developer domain) | legaleaglelaws-docs.aoneahsan.com | Same site, second custom domain |
| GitHub Pages | aoneahsan.github.io/legaleaglelawfirm-docs | Independent search visibility on github.io |

Triple deployment is deliberate: GitHub Pages on github.io carries strong domain authority for new technical content, while the brand domains carry the on-brand reading experience.

## SEO + AEO posture

The site follows a strict per-page-uniqueness floor — every documentation page is at least 1 000 words of unique content with a definition-first intro, structured FAQ, explicit limitations, and a last-updated date. AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot, CCBot) are explicitly allow-listed in `robots.txt`. A root `llms.txt` (per [llmstxt.org](https://llmstxt.org)) gives AI agents a curated map. Per-page JSON-LD covers WebSite, Organization, BreadcrumbList, Article, and FAQPage where applicable.

Honest framing is a hard rule. Every page documents what the feature does **not** do as clearly as what it does. Browser-only privacy claims match reality. No fabricated statistics — anything cited is named and linked.

## Author

I'm **[Ahsan Mahmood](https://aoneahsan.com)** — full-stack engineer specialising in React, Capacitor, and Firebase. I built and maintain the Legal Eagle platform, the SaaS workspace, and this documentation site. The legal practice itself belongs to *Advocate Maaz Ahmed Warriach* and operates from Office No. 3, 2nd Floor, Kareem Chamber 2, Mozang, Lahore.

If you're hiring, want to chat about a similar project, or like the work and want to support continued maintenance:

- Portfolio: [aoneahsan.com](https://aoneahsan.com)
- LinkedIn: [linkedin.com/in/aoneahsan](https://linkedin.com/in/aoneahsan)
- GitHub: [github.com/aoneahsan](https://github.com/aoneahsan)
- npm: [npmjs.com/~aoneahsan](https://www.npmjs.com/~aoneahsan)
- Email: [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com)
- WhatsApp: [+92 304 661 9706](https://wa.me/923046619706)
- Support this work: [aoneahsan.com/payment](https://aoneahsan.com/payment?project-id=legaleaglelawfirm&project-identifier=com.legaleaglelaws.app)
