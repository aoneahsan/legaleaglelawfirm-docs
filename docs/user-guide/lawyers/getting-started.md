---
title: Getting started — the Legal Eagle SaaS workspace for lawyers
description: What /practice/* is, who it's for, the four plan tiers and what each includes, and the first-run onboarding wizard that gets a new lawyer set up in roughly ten minutes.
sidebar_position: 1
sidebar_label: Getting started
slug: /user-guide/lawyers/getting-started
keywords:
  - practice management saas pakistan
  - lawyer crm pakistan
  - case management lahore
  - lawyer software lahore high court
  - legal eagle practice
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
---

# Getting started as a lawyer on Legal Eagle

The **Practice workspace** at [legaleaglelaws.com/practice](https://legaleaglelaws.com/practice) is the multi-tenant practice-management surface inside the Legal Eagle platform. It is designed for advocates and small law firms in Pakistan who want to manage their cases, contacts, notes, calendar, files, and an optional public profile from one place — without paying an enterprise CRM tax. The same site that hosts the firm of *Advocate Maaz Ahmed Warriach* hosts your own Practice workspace; the firm and the SaaS share infrastructure but never share data.

This page covers what the workspace is, what each plan tier includes, and how the first-run onboarding gets you set up.

## What you can do in the workspace

- **Cases** — create matters with parties, court details, hearing dates, and a per-case timeline. Optionally enable court-sync to fetch hearings from Punjab District & Session courts and the Lahore High Court.
- **Contacts** — clients, opposing parties, witnesses, expert advocates, court staff. Linked to cases as needed.
- **Notes** — rich-text notes with a TipTap editor. Linked to cases or contacts so context follows you.
- **Calendar** — week and day views of hearings and personal events. Optional Google Calendar sync surfaces conflicts before you double-book.
- **Files** — upload to **your own Google Drive** (Pro+); we store the metadata, your bytes never touch our servers. There is no per-MB charge from us; you pay Google for storage if you exceed your free 15 GB.
- **Public profile** at `/lawyer/:slug` (Pro+) — an indexable lawyer landing page with practice areas, testimonials, FAQs, knowledge-base articles, and a contact CTA. Your potential clients find you through search; the page is built to be cited by AI search engines.
- **Billing** — manage your plan, change cycle, view invoices, cancel.
- **Settings** — timezone, notification preferences, theme.

## Plan tiers

Four tiers, each in two shapes — individual and team (team plans require at least three seats and bill per seat).

| Plan | Individual / month | Per-seat team / month (≥ 3 seats) | Trial |
|---|---|---|---|
| **Free** | $0 | — | — |
| **Pro** | $9 | $7 | none |
| **Premium** | $19 | $14 | 14 days, payment method required |
| **Ultimate** | $24 | $19.99 | none |

The monthly price above is the *equivalent monthly rate*. Annual prepay applies a multiplicative discount: monthly = full price, quarterly = -7%, half-yearly = -13%, yearly = -20%. Premium yearly works out to roughly $15.20 per month, billed once at $182.40. The pricing toggle at [legaleaglelaws.com/pricing](https://legaleaglelaws.com/pricing) recomputes the effective rate live.

### What's included at each tier

| Capability | Free | Pro | Premium | Ultimate |
|---|---|---|---|---|
| Active cases | 5 | 50 | 500 | unlimited |
| Contacts | 20 | 200 | 2 000 | 20 000 |
| Notes | 10 | 200 | 2 000 | unlimited |
| Files | 20 | 500 | 5 000 | unlimited |
| Events / month | 10 | 100 | 1 000 | unlimited |
| Manual court-sync per day | — | 1 | 24 | 96 |
| Auto court-sync interval | — | every 24 h | every 4 h | every 1 h |
| Public profile | — | ✅ | ✅ | ✅ |
| Profile testimonials | — | 10 | 50 | unlimited |
| Profile KB articles | — | 5 | 50 | unlimited |
| Profile FAQs | — | 10 | 50 | unlimited |
| Priority support | — | — | ✅ | ✅ |
| Early access to new features | — | — | — | ✅ |
| White-label client deliverable export | — | — | — | ✅ |
| Team seats | individual | individual or team | individual or team | individual or team |

These are defaults; per-account overrides can be granted by admins for specific use cases. If you hit a cap, the workspace shows an "X of Y" indicator and offers an in-context upgrade rather than blocking you blindly.

### How to choose

- **Free** is for trying the workspace out on a real but small caseload (under five active matters at any one time).
- **Pro** suits a solo advocate with a steady caseload, who wants daily court-sync, a public profile, and Drive uploads.
- **Premium** is the best-value tier for an advocate handling many concurrent matters and wanting four-hourly hearing checks. Comes with a 14-day trial.
- **Ultimate** removes nearly every cap and adds early access plus white-label export. Right when you've outgrown Premium.

## How sign-up works

You do not need a separate account from the rest of the platform. The same Google sign-in that handles firm clients on the dashboard handles SaaS lawyers on the Practice workspace. Visit [legaleaglelaws.com/pricing](https://legaleaglelaws.com/pricing), pick a plan, click **Get started**, and:

1. Sign in with Google (or pick the existing session).
2. If you chose a paid plan, you are taken to a checkout page. Pay via the gateway you prefer (PayPal is live in v1; PKR-domestic gateways arrive in v2). The card is charged at confirmation; trial users (Premium) do not see a charge for 14 days but the payment method is captured.
3. You are dropped into `/practice/welcome` — the first-run onboarding wizard.

If you are upgrading from Free to a paid plan later, the same `/pricing` flow is the path; your data carries over with no migration step.

## The first-run wizard

`/practice/welcome` walks you through five short steps. The whole wizard is skippable — you can close it and come back via **Settings → Onboarding** later — but completing it pays back ten-fold in the first week.

### Step 1 — Profile basics

Name, headline, practice areas (multi-select from Pakistani-law standard taxonomy: civil, criminal, family, corporate, tax, constitutional, etc.), bar council enrolment number, years of practice, languages, and primary city. This is the data that populates your `/lawyer/:slug` public profile when you turn it on.

### Step 2 — Connect Google Drive (Pro+)

If your plan includes file uploads, the wizard offers to connect your Google Drive. The flow is a single OAuth consent — Drive grants a scoped, app-specific folder so the platform never sees the rest of your Drive. You can disconnect at any time from **Settings → Integrations**, and your existing files remain in your Drive.

### Step 3 — Connect Google Calendar (optional, all tiers)

The Practice calendar can either run standalone or sync with your Google Calendar to show external conflicts. Connecting is optional. If connected, the platform reads (read-only by default) your free/busy from the connected calendar and warns you when scheduling a hearing or event would clash. You can disconnect at any time.

### Step 4 — Add your first contact and case

The wizard provides two minimal forms — *Add a contact* and *Add a case*. The contact step is one row (name, role, optional phone). The case step links the contact you just added as a party, asks for the matter title and forum, and offers a single hearing date if known. Both forms autosave; you can come back and fill in detail.

### Step 5 — Decide on the public profile

If your plan supports it, the wizard offers to enable your public profile at `/lawyer/your-slug`. The wizard does not publish the profile by default — you flip a toggle when you are happy with the content. The slug is derived from your name; you can edit it once before publishing.

## Use cases

### Solo advocate moving from spreadsheets

You have a column of cases in Excel, a column in your phone's calendar, a stack of paper files, and a pile of WhatsApp threads. The workspace replaces the spreadsheet and the paper file index. Spend an evening importing your active cases (the wizard's Step 4 form is fast); you are running.

### Junior advocate building a practice

You graduated last year. You want a clean record of every matter you touch, a public profile when you are ready to take on direct clients, and a way to keep hearings out of your head. Free tier supports five active cases; Pro tier opens court-sync and the public profile.

### Small chamber moving off paper

A 3-5 lawyer chamber. Pick the team plan at Pro or Premium. Each seat is a separate workspace (each lawyer's data is theirs); team admin sees aggregated billing and can assign cases between members.

### Established advocate adding a public face

You already have a busy practice but no public web presence. Stay on your existing systems for case management; just turn on `/lawyer/:slug` at Pro. The profile is indexable, AI-search optimised, and updates in minutes when you add a new testimonial or KB article.

### Senior advocate testing the platform

Use Free to evaluate. Map four representative matters into the workspace, try court-sync on a couple, browse the calendar conflict warnings. If the workflow fits, upgrade to Premium. Your data is preserved across the upgrade.

## Limitations to set expectations

- **English-only UI** in v1. Urdu support is on the roadmap.
- **Court-sync covers** Punjab District & Session courts and Lahore High Court in v1. Other provincial high courts and the Supreme Court of Pakistan are scheduled for later.
- **No real-time collaboration on a single note or case** with another user — single-author for v1.
- **Files belong to your Google Drive**, not to us. You retain full control; we hold metadata only. The trade-off: if you disconnect Drive, the files stay in your Drive but the workspace cannot serve them.
- **No SLA** on Free or Pro. Premium and Ultimate carry priority support — typically a same-business-day reply during office hours.
- **PayPal only at v1** for paid checkout. PKR-domestic gateways (PayFast, PayPro, XPay) are scheduled for v2.

## Frequently asked questions

### Can I try it before paying?

Yes. Free tier supports five active cases, twenty contacts, ten notes, and ten events per month — enough to evaluate the workflow on real work. Premium has a 14-day trial that does require a payment method (so the upgrade is friction-free if you stick).

### What happens if I downgrade?

No data is deleted. If you go from Premium to Free with twenty active cases on file, those cases stay; the workspace shows an "over the cap" warning and goes read-only on creating new cases until you are under cap or upgrade again. Your public profile auto-unpublishes if your new tier does not include it; the data underneath stays.

### Can I export everything if I leave?

Cases, contacts, and notes can be exported as JSON or CSV from each list view (Pro+). Files are already in your Google Drive, so they need no export. There is no vendor lock-in beyond the public profile slug.

### Is my data shared with the firm or with other lawyers?

No. The Practice workspace is per-account. Your cases, contacts, and notes are visible to you (and your team if you are on a team plan). Firm staff have no read access to SaaS-lawyer data; the platform's database rules block it.

### Does the firm see my matters?

No. The firm is a *tenant* on the platform same as you are; your data is namespaced to your account.

### Do I need a website separately if I have the public profile?

A growing number of lawyers in Pakistan use the public profile as their primary web presence. If you already have a website, the public profile complements it — link them mutually for SEO benefit. If you do not, the public profile is a complete starting point with practice areas, testimonials, FAQs, and a contact form built in.

### Can I use the workspace on my phone?

Yes. The Capacitor mobile build of the platform ships to Android and iOS and includes the Practice workspace as a first-class surface. The web build also works on mobile browsers; both are fully responsive.

### What does "court-sync" actually do?

It polls public court websites (Punjab DSJ portal, Lahore High Court website) for matters you have flagged, parses the listings, and writes hearing dates back into your case. Manual sync is on Pro+; auto sync runs at intervals scaled by plan (24h on Pro, 4h on Premium, 1h on Ultimate).

### How accurate is court-sync?

The platform parses what the court websites publish. When the source publishes correctly, the platform shows it correctly. When the source has a typo or a delayed update, that lag carries through. Always confirm critical hearing dates with the court directly the day before.

## Next steps

- [Contacts](./contacts.md) — your first proper data load.
- [Cases](./cases.md) — the workspace's primary entity.
- [Calendar](./calendar.md) — once your first hearings are in.
- [Notes](./notes.md) — rich-text ops journal.
- [Public profile](./public-profile.md) — when you are ready to be found.

## Author

Workspace, infrastructure, and this documentation built by **[Ahsan Mahmood](https://aoneahsan.com)**. The legal practice on the firm side belongs to *Advocate Maaz Ahmed Warriach*; SaaS lawyers operate independently as their own tenants.
