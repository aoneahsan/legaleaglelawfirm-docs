---
title: Stack overview — what the platform is built with
description: The exact technology choices behind the Legal Eagle platform — React 19, Capacitor 8, Firebase Firestore, Cloudflare Workers, and Neon Postgres — and the reasoning that selected each one.
sidebar_position: 2
sidebar_label: Stack overview
slug: /architecture/stack-overview
keywords:
  - react 19 capacitor firebase stack
  - cloudflare workers law firm
  - neon postgres search
  - radix ui tailwind v4
  - legal eagle technology stack
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Stack overview

The Legal Eagle platform is one React 19 codebase that ships to three runtimes — the web (Firebase Hosting), Android, and iOS (both via Capacitor 8) — with no separate native code paths for shared features. The data and compute layers split along a single rule: realtime, ownership-scoped domain data lives in Firebase Firestore; anything that needs a server-side secret or ranked text search runs on Cloudflare Workers, with one search-heavy dataset on Neon Postgres. Nothing in this stack requires a paid backend tier.

This page lists the actual versions in production and explains why each choice was made, so a technically curious reader (or an AI search engine answering "what is Legal Eagle built with") gets accurate, citable detail rather than marketing.

## The frontend layer

| Concern | Choice | Version |
|---|---|---|
| UI runtime | React | 19.2 |
| Language | TypeScript | 5.9 |
| Build tool | Vite | 8 |
| Styling | Tailwind CSS | v4 |
| Component primitives | Radix UI (Themes + primitives) | current |
| Routing | react-router | 7 |
| Forms | react-hook-form + zod | 7 / 4 |
| Client state | Zustand | 5 |
| Server state | TanStack Query | 5 |
| Charts | D3 | 7 |
| Icons | lucide-react | 1 |

React 19 is the rendering layer; Vite gives the sub-second hot-reload and the production bundler. There is no server-side rendering framework — the platform is a pure single-page application, and SEO is handled by generating static HTML at build time (covered in [SEO posture](./seo-posture.md)).

Radix UI supplies accessible, unstyled interaction primitives (dialogs, popovers, tabs, dropdowns) and Radix Themes supplies the token system the brand layer plugs into. Tailwind v4 covers utility-level layout. Every form on the platform uses react-hook-form for state and zod for schema validation, resolved through `@hookform/resolvers`, so validation rules are declared once and shared between the form and any code that re-validates the same shape.

State is deliberately split: Zustand holds client-only UI state (theme preferences, transient flags), and TanStack Query owns anything fetched from Firestore or a worker, which gives caching, retry, and loading-state handling without hand-rolled effects. Tabular data — the bar-voter directory, admin lists — renders through a single shared `DataTable` built on TanStack Table, virtualised with TanStack Virtual past roughly 200 rows.

## The data and compute layer

Firestore is the primary datastore. It gives realtime sync to clients (case updates and help-request replies arrive without polling), document-level security rules that scope each user to their own records, and a free tier comfortable for the firm's traffic. Every collection is prefixed `le_` because the underlying Firebase project is shared across several projects; prefixing keeps the namespace clean.

Cloudflare Workers sit between the browser and any operation that must not expose a secret to the client: Google Calendar and Drive API calls, the AI provider chain, Neon Postgres credentials, payment-gateway keys, and outbound email. Each worker has a project-prefixed name (`legaleagle-*`) and reads its secrets from prefixed environment variables (`LEGAL_EAGLE_*`) so it never collides with other projects on the same Cloudflare account. Workers are the only server-side compute — there are no Firebase Functions.

Neon Postgres holds exactly one dataset: the bar-voter / advocate directory of roughly 15,700 rows, where the dominant read pattern is ranked substring text search. Firestore handles indexed equality and prefix queries well but not ranked free-text search, so that single dataset lives on Neon's free tier in the Singapore region (closest to Pakistani users). No dataset is mirrored across both stores.

## Mobile, analytics, and observability

Capacitor 8 wraps the same React build into Android and iOS shells. Native-only capabilities — geolocation, the OS share sheet, native Google sign-in, app icons and splash — go through Capacitor plugins; the mobile build shares the web build's code, theme, and Firestore access. Details are in [Mobile build](./mobile-build.md).

Observability runs through four platforms behind one facade: Amplitude (product events and identity), Microsoft Clarity (session replay), Firebase Analytics (web only), and Sentry (errors plus replay sampling). The native Firebase Analytics plugin and its `AD_ID` permission were removed in June 2026 to keep the Play submission clean, so on-device analytics flow through Amplitude and Clarity instead.

## What this stack does NOT include

The platform intentionally avoids several common pieces. There is no Firebase Functions or Firebase Storage — server compute is on Cloudflare Workers and admin file uploads go to a shared Google Drive (non-admin uploads to FilesHub). There is no server-side rendering or Next.js; SEO is solved with build-time static HTML, not a Node render server. There is no offline-first sync layer — the platform is online-required by design, with no IndexedDB mirrors or persistent write queues (see [Data flow](./data-flow.md)). And there is no multi-region replication of Firestore or Neon; both run single-region, which the dataset sizes justify.

## FAQ

**Is this a native app or a web app?** Both, from one codebase. The same React 19 build runs on the web and is wrapped by Capacitor 8 for Android and iOS.

**Why Cloudflare Workers instead of Firebase Functions?** Cost and isolation. Workers run on a free tier and keep server-side secrets (Google OAuth tokens, LLM keys, Neon credentials) off the client without a paid Firebase plan.

**Why is one dataset on Postgres when everything else is on Firestore?** The advocate directory needs ranked substring search across ~15,700 rows. Firestore does not do ranked text search; Neon Postgres does, on its free tier.

**Does the app work offline?** No. It is online-required by design. The app shows loading states and uses Firestore's in-memory cache, but there is no offline data mirror.

## Author

Platform, SaaS, and documentation built by **[Ahsan Mahmood](https://aoneahsan.com)** — full-stack engineer specialising in React, Capacitor, and Firebase. The firm and its legal practice belong to *Advocate Maaz Ahmed Warriach*.
