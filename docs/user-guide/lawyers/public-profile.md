---
title: Public profile — your indexable /lawyer/:slug page
description: How the public profile at /lawyer/:slug works on Pro+, what content goes where, and why it's built for AI search visibility from day one. Available on Pro, Premium, and Ultimate.
sidebar_position: 6
sidebar_label: Public profile
slug: /user-guide/lawyers/public-profile
keywords:
  - lawyer profile page pakistan
  - lawyer seo profile lahore
  - public lawyer profile saas
  - lawyer landing page indexable
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
---

# Public profile

The **public profile** at `/lawyer/:slug` is your indexable lawyer landing page on the Legal Eagle platform. Available on Pro, Premium, and Ultimate, it gives you a structured presence on the open web — practice areas, testimonials, FAQs, knowledge-base articles, a contact form — with built-in search-engine and AI-search optimisation. You write the content from `/practice/profile` in the workspace; the platform takes care of structure, schema markup, sitemap inclusion, and AI-bot accessibility.

## Why a profile here vs your own website

The trade-off:

- **Building your own site** gives you maximum control and brand independence, but takes weeks to do well, and ranks slowly because the domain is new.
- **The Legal Eagle public profile** gives you most of the SEO benefit immediately because it inherits the platform's domain authority, follows a structured layout that AI crawlers extract cleanly, and updates with one click.

For most advocates, the right answer is **both** — keep your own site if you have one, and run the public profile in parallel. Cross-link them. The public profile may rank for the kinds of queries your own site does not yet, and vice versa.

If you do not have your own site, the public profile is a complete starting point and many lawyers run it as their primary web presence.

## What the profile contains

The page at `/lawyer/your-slug` is composed of these sections, all editable from `/practice/profile`:

### Hero

- Your photograph (square, 600×600 px or larger).
- Display name and headline (one line).
- Practice-area chips (taken from your workspace profile).
- Years of practice and bar council number.
- City and languages.
- A primary contact CTA — "Book a consultation" (creates a help-request style message that lands in your workspace inbox) or a phone number you choose to publish.

### Overview

A free-form paragraph or two describing your practice in your own voice. The editor uses the same TipTap setup as [Notes](./notes.md) — bold, italic, lists, links — keeping formatting consistent.

### Showcase cases

Up to a plan-defined number of cases you choose to highlight (three or five depending on tier; see the limits page). For each: a short matter description (no client identifying details by default), the outcome, and the year. The platform does **not** auto-pull from your real cases — you write each showcase entry deliberately, and you decide what is safe to publish.

### Testimonials

Plan caps: 10 on Pro, 50 on Premium, unlimited on Ultimate. Each testimonial is a quote with a client name (or initials, if anonymity is requested), date, and an optional rating. The platform does not solicit or moderate testimonials for you; you collect them, you publish them, you stand by them.

### FAQs

Plan caps: 10 / 50 / unlimited. Q&A pairs answering the questions prospective clients actually ask. The FAQ block is rendered as `FAQPage` schema markup — the highest-leverage AI-citation block per the Princeton GEO research, and a strong driver of Google AI Overview citations.

### Knowledge base

Plan caps: 5 / 50 / unlimited. Long-form articles on areas of your practice — explanations of statutes, walkthroughs of common procedures, primers on specific kinds of matter. Each article is its own URL at `/lawyer/your-slug/kb/article-slug`, indexable, and written with `Article` schema markup.

The knowledge base is the longest-tail SEO surface you have. Most clients arrive at a lawyer via a specific question ("how does Section 489-F PPC work" or "what does a tenancy notice need to contain"). A KB article that answers that question well, and is hosted on a high-authority domain, will outrank a personal blog for years.

### Contact

A short contact form. Submissions land in your workspace as help-request style messages, with the visitor's name, contact, and the message body. You reply from inside the workspace.

## SEO and AI-search optimisation, baked in

The public profile applies the same per-page-uniqueness floor the documentation site does — definition-first intros, structured headings, FAQs, last-updated dates, named author. Each profile and each KB article emit:

- **Article** + **Person** + **BreadcrumbList** JSON-LD on every page.
- **FAQPage** schema on the FAQ block.
- **HowTo** schema on KB articles whose structure matches a step-by-step format.
- Open Graph + Twitter Card meta with profile image.
- Canonical URL.
- Last-updated date visible to humans and embedded in `dateModified`.

The platform's **robots.txt** explicitly allow-lists GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, Applebot, CCBot, Bingbot, and the classic search bots. Your profile is reachable to every search crawler that asks. The static HTML body matches the React render so AI crawlers (which mostly do not execute JavaScript) see the same content as users.

Your `/lawyer/your-slug` URL is added to the platform's `sitemap.xml` automatically the moment you flip the page to public, with a `lastmod` that updates whenever you edit content. KB articles are added similarly.

## Editing flow

1. Go to `/practice/profile` in the workspace.
2. The editor shows the same sections in the same order as the public page. Click any to edit.
3. Edits autosave (TipTap idiom). A **Preview** toggle shows the live page rendered with your edits.
4. A **Publish** toggle at the top decides whether the public URL is live. If off, the page returns 404 and stays out of the sitemap.
5. To unpublish without losing data, flip Publish off. The page goes 404 immediately; the sitemap is regenerated on next build.

## Slug

Your `/lawyer/:slug` is derived from your name on first publish. You can edit the slug **once** before first publish. After publish, the slug is locked to avoid breaking inbound links and SEO equity. Renaming your firm or changing your display name does not change the slug; the slug is forever.

If you genuinely need to change a published slug (mis-spelling, name change), submit a support request. The platform will set up a 301 redirect from the old slug to the new and re-emit the sitemap.

## Use cases

### Solo lawyer with no current web presence

Pro tier, public profile on, three showcase cases, 10 FAQs, 5 KB articles. In a month or two, the profile starts catching long-tail queries — "Section X PPC explained Lahore", "tenancy notice requirements Punjab" — and bringing direct enquiries.

### Established advocate adding a profile

You already have a website but no AI presence. Add the public profile, publish 10 KB articles on the procedural questions clients ask you most often, link the profile from your existing site. Your AI-search visibility for those questions improves measurably within weeks because the platform domain has more authority than a small personal site.

### Junior advocate building reputation

Pro tier from day one. Use the FAQ and KB sections aggressively — every question a senior asks you, every research note that turned into knowledge, becomes content. By the time you are at five years, the profile is dense.

### Speciality-firm marketing

A boutique chamber doing only one area (say, banking law). Premium team plan, three lawyers, fifty KB articles between them on niche banking law topics. The chamber dominates AI search for those queries; clients arrive pre-qualified.

### Crisis or news comment

A high-profile case lands in the news and you want to publish a short explainer. Add it as a KB article with a clear definition-first intro. The article is indexed within hours; AI Overviews can pick it up within days.

## Limitations

- **No custom theme or layout.** Every public profile uses the same brand-aligned layout. This is intentional in v1 — keeps the page accessible, fast, and SEO-consistent. Custom branding is a Premium-feature roadmap candidate.
- **No custom domain.** The page is at `legaleaglelaws.com/lawyer/your-slug`. CNAME-style alias to your own domain is roadmap.
- **Showcase cases are written manually**, not auto-pulled. Avoiding accidental client-info leakage is the reason; the workspace does not know which of your matters are safe to publish.
- **Testimonials are not moderated by the platform.** You publish what you have collected. Be ready to stand by the authenticity if asked.
- **Plan caps apply** — see [Getting started](./getting-started.md#whats-included-at-each-tier).
- **No analytics dashboard yet.** v2 ships a per-profile analytics page. For now, the platform-wide analytics include profile traffic but you cannot self-serve breakdowns.

## Frequently asked questions

### Will my profile rank on Google?

The platform handles the technical SEO — schema markup, sitemap, AI-crawler allowlist, fast static HTML, semantic structure. Whether you rank for a specific query depends on the content quality you publish and the competitive landscape for that query. KB articles 1 000+ words deep, with definition-first intros and FAQ blocks, rank well in our experience.

### Will my profile show up in ChatGPT or Perplexity answers?

The public profile and KB articles are written and published to the per-page-uniqueness floor that AI search engines reward. Princeton GEO research (KDD 2024) identified citing sources, statistics, expert quotations, and authoritative tone as the highest-leverage factors; the platform's content patterns lean into all of those. We have observed citations within weeks of publishing for niche queries. We make no guarantees.

### Can I take down a testimonial?

Yes. From `/practice/profile/testimonials`, click the testimonial → delete. The page regenerates on next build (typically within minutes).

### What happens to the profile when I downgrade?

If you downgrade to Free, the public-profile feature flag turns off and the page becomes 404. The data underneath is retained for 90 days. Upgrading back to Pro+ within that window restores the page in its previous state.

### Can I publish anonymously?

The public profile is designed to be a named professional presence — anonymity defeats the purpose. If you want to publish thought-leadership without a face, the platform's **Blog** module on the firm side accepts guest posts; ask the firm.

### Can I publish under a firm name instead of my personal name?

Yes — the display-name field is independent of your sign-in email. Many lawyers run a profile under a chamber name with their personal name in the bio.

### How fast does an edit show up on the public page?

Sub-minute. The platform regenerates the affected pages on every save, and the CDN cache is purged for those URLs. Fresh content is reflected by the next request.

### Are there templates for KB articles?

The editor offers structural prompts — a "What is..." article template starts you with a definition-first intro and FAQ scaffolding; a "How to..." template starts with a numbered-step layout. Templates are starting points, not constraints.

## Related pages

- [Getting started](./getting-started.md) — plan tiers and what each includes.
- [Cases](./cases.md) — your real matters; showcase cases are manually written, not auto-pulled.
- [Contacts](./contacts.md) — submissions to your profile contact form land in the workspace alongside your contacts.
- *AI search visibility playbook for lawyers* — coming in a future documentation batch.

## Author

Public-profile module, schema markup, and this documentation built by **[Ahsan Mahmood](https://aoneahsan.com)**.
