---
id: intro
title: User guide — introduction
description: An overview of the Legal Eagle Law Firm platform — what it does, who it's for, and how to use this guide.
sidebar_position: 1
sidebar_label: Introduction
slug: /user-guide/intro
keywords:
  - legal eagle law firm
  - lawyer pakistan
  - law firm lahore
  - legal consultation pakistan
  - ai legal assistant
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
---

# Legal Eagle Law Firm — User Guide

**Legal Eagle Law Firm** is the legal practice of *Advocate Maaz Ahmed Warriach*, based at Office No. 3, 2nd Floor, Kareem Chamber 2, Mozang, Lahore. The platform at [legaleaglelaws.com](https://legaleaglelaws.com) lets you find a lawyer, book a free consultation, ask the AI legal assistant about Pakistani law, track a case the firm is handling for you, and — for lawyers — run an entire practice from `/practice/*` with court-sync, calendar conflict detection, and Google Drive uploads.

This documentation is the public, openly licensed companion to the platform. It explains, in plain language, what every feature does, what it does **not** do, and how to use it well.

## Who this guide is for

| If you are… | Start here |
|---|---|
| A visitor looking for legal help in Pakistan | [Find a lawyer](./visitors/find-a-lawyer.md) |
| Booking a consultation with the firm | [Free consultation booking](./visitors/free-consultation-booking.md) |
| Curious about the AI legal assistant | [AI legal assistant](./visitors/ai-legal-assistant.md) |
| Searching the Punjab Bar Council directory | [Legal persons directory](./visitors/legal-persons-directory.md) |
| A current client of the firm | [Dashboard overview](./clients/dashboard-overview.md) |
| A lawyer evaluating the SaaS workspace | *(coming next batch)* |
| Firm staff using the admin panel | [Admin guide](../admin/intro.md) |
| A developer or technically curious reader | [Architecture overview](../architecture/intro.md) |

## What you can actually do on the platform

Everything below works today — no "coming soon" placeholders.

- **Find a lawyer** in the Punjab Bar Council directory of approximately 15,700 advocates, searchable by name, father/relation, council number, or city.
- **Book a free 15-minute consultation** with the firm. The system finds an available slot on the firm's calendar, creates a Google Calendar event with an auto-generated Google Meet link, and emails confirmation.
- **Ask the AI legal assistant** a question about Pakistani law. Answers come from a six-tier pipeline: client-side cache, server cache, curated knowledge base, then a chain of free-tier LLMs. If nothing matches, the question is queued for a human reply.
- **Sign in to the dashboard** if you are a firm client. You'll see your active cases, upcoming appointments, help-request history, and a personalised theme/preferences area.
- **Search a section** of Pakistani law inside the chatbot — a specialised structured-answer flow that returns statute, scope, key elements, punishment, and practical notes (with a clear "not legal advice" disclaimer).

For lawyers using the SaaS workspace at `/practice/*` — case management, court-sync, calendar conflict detection, Google Drive file uploads, public profile at `/lawyer/:slug` — see the lawyer SaaS section (next documentation batch).

## What the platform deliberately does NOT do

We document limits as clearly as features so you can plan accurately:

- **Not legal advice.** The AI legal assistant gives legally-themed information. It cannot replace a hired advocate. Every AI answer ends with a "not legal advice" line. For a binding opinion, [book a consultation](./visitors/free-consultation-booking.md).
- **No outbound email.** Notifications stay in-app (Firestore inbox). The platform does not send marketing email or transactional email to your inbox; you'll receive Google Calendar invites for booked consultations because Google sends those, not us.
- **No multi-language UI yet.** English-only for v1. Urdu support is on the roadmap.
- **No real-time messaging between SaaS lawyers and their clients.** The firm has its own help-request flow with the firm's clients, but there is no in-app chat between an arbitrary SaaS lawyer and their clients in v1.
- **No file storage on our servers.** Files go to your own Google Drive (SaaS lawyers) or to FilesHub for help-request attachments (firm clients). We hold metadata only — your files belong to you.

## The brand promise

The Legal Eagle platform aims to feel **professional, restrained, and warm** — the look and feel of an old law-book in a modern browser. You'll see a navy-and-gold colour palette, serif headings, and decorative scales-of-justice ornaments at section dividers. None of that is stylistic noise: each lever is documented in the [design system](../architecture/intro.md).

## How to use this guide

Documentation is organised by **who you are and what you want to do**. Pick the role that matches you in the sidebar (User Guide → Visitors / Clients) and follow the page that names your task. Each how-to page includes:

1. A definition-first **summary** so you can confirm you're on the right page.
2. **Step-by-step** instructions that match exactly what the live app shows.
3. A short **FAQ** for the questions we hear most often.
4. **Limitations** for the things this feature cannot do.
5. A **last-updated** date so you can judge freshness.

If a page is out of date, please [open an issue](https://github.com/aoneahsan/legaleaglelawfirm-docs/issues) — this documentation site is open-source and corrections from the community are welcome.

## Author

Documentation, application, and SaaS platform built by **[Ahsan Mahmood](https://aoneahsan.com)** — full-stack engineer specialising in React, Capacitor, and Firebase. If you're hiring or want to support this work, see the [author page](https://aoneahsan.com).
