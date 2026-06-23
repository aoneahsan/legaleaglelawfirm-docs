---
title: SEO and AEO posture — how the platform is found
description: How the Legal Eagle platform is built to be indexed by classic search and cited by AI answer engines — build-time static HTML, per-page JSON-LD, an AI-bot allowlist, a sitemap and feed, and an llms.txt map.
sidebar_position: 6
sidebar_label: SEO & AEO posture
slug: /architecture/seo-posture
keywords:
  - spa static html prerender seo
  - ai crawler allowlist robots txt
  - json-ld article faqpage howto
  - llms.txt sitemap feed
  - answer engine optimization law firm
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# SEO and AEO posture

A single-page React app is invisible to most AI crawlers unless its content also exists as static HTML, because engines like GPTBot, ClaudeBot, and PerplexityBot generally do not execute JavaScript. The Legal Eagle platform solves this by generating static HTML for every public route at build time, emitting per-page structured data, and explicitly allowing AI crawlers in `robots.txt`. This page describes the posture for both the application site and this documentation site, so the search and answer-engine strategy is legible.

## Static HTML for a JavaScript app

The application is a pure Vite SPA with no server-side rendering. To stay indexable, the build runs a prerender step that writes static HTML for each public page, so a crawler that does not run JavaScript receives the same content a user sees rather than an empty shell. The build also regenerates a `sitemap.xml` listing every public URL with a `lastmod` date, and a `feed.xml` RSS stream of public content updates. Both regenerate on every build, so the published `lastmod` values stay honest.

This documentation site takes a different route to the same outcome: Docusaurus is a static-site generator, so every doc page is already HTML at build time. The sitemap is generated automatically with per-page `lastmod`, and the AI-bot allowlist and machine-readable map are shipped as static files.

## Per-page structured data

Both sites emit JSON-LD so engines can parse entities rather than guess them. The documentation site carries site-wide Organization, WebSite, LegalService, and SoftwareApplication graphs, plus per-page Article and BreadcrumbList data, with FAQPage on pages that include a question-and-answer block. The application site adds the schema types that match each surface — Article on blog posts, and the builder for HowTo on step-by-step explainers. The structured data is kept consistent with the visible page content; it describes what is actually there, not aspirational claims.

## Crawler access and machine-readable files

`robots.txt` explicitly allows the classic search crawlers (Googlebot, Bingbot, DuckDuckBot, Yandex, Applebot) and the AI crawlers (GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, CCBot), and it points at the sitemap with a `Sitemap:` directive. Allowing the AI crawlers is a deliberate choice: public documentation is a credibility signal, and being indexed means a user who asks an AI assistant about Legal Eagle gets an accurate answer cited back to this site. A root `llms.txt`, in the llmstxt.org format, gives AI agents a curated map of the most useful URLs without making them crawl the whole tree.

## Writing for extraction

Content is structured so an answer engine can lift a passage and cite it. Pages lead with a definition-first opening sentence, use headings that match how people phrase queries, and carry an explicit FAQ block of natural-language questions. Each feature page also states what the feature does not do, which is both honest and, per answer-engine research, a stronger citation signal than uniform positive claims. Statistics are given with their basis rather than rounded for effect, and every page shows a visible last-updated date and a named author, which are the freshness and expertise signals engines weigh.

## What this posture does NOT do

The platform does not block any major search or AI crawler, and it does not gate its most authoritative content behind a login, because gated content cannot be cited. It does not keyword-stuff — research shows that actively reduces AI visibility — so keywords appear naturally or not at all. And it does not fabricate ratings, user counts, or testimonials to inflate authority; the structured data and copy describe only what exists. Search ranking on competitive terms still depends on domain authority and third-party presence, which take time and are outside what on-page work alone can deliver.

## FAQ

**Why does a JavaScript app need static HTML?** Because most AI crawlers do not run JavaScript. Build-time static HTML gives them the same content users see.

**Are AI crawlers allowed to index this site?** Yes — GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and the classic crawlers are explicitly allowed in `robots.txt`.

**What is llms.txt for?** It is a curated map of the site's key URLs in a standard format, so AI agents can find the useful pages without crawling everything.

**Does good on-page SEO guarantee a top ranking?** No. On-page structure and schema make content extractable and citable, but ranking on competitive terms also depends on authority and external references built over time.

## Author

Platform, SaaS, and documentation built by **[Ahsan Mahmood](https://aoneahsan.com)**. The firm and its legal practice belong to *Advocate Maaz Ahmed Warriach*.
