---
title: Dashboard overview for firm clients
description: What you see when you sign in to legaleaglelaws.com as a firm client — cases, appointments, help requests, theme preferences, and the legal persons search.
sidebar_position: 1
sidebar_label: Dashboard overview
slug: /user-guide/clients/dashboard-overview
keywords:
  - firm client dashboard pakistan
  - legaleaglelaws dashboard
  - case tracking pakistan
  - client portal lawyer
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
---

# Dashboard overview

The **firm-client dashboard** at [legaleaglelaws.com/dashboard](https://legaleaglelaws.com/dashboard) is the signed-in workspace for clients of *Legal Eagle Law Firm*. After you sign in with the Google account the firm has on file for you, the dashboard shows your active matters, upcoming appointments, the help-request thread you have with the firm, and a personalised theme and preferences area.

This is the **firm's own client portal** — different from the SaaS workspace at `/practice/*` that other lawyers use to manage their own practices. If you are a SaaS lawyer rather than a firm client, the lawyer SaaS section (next documentation batch) is for you.

## How to sign in

1. Visit [legaleaglelaws.com](https://legaleaglelaws.com).
2. Click **Sign in** in the top-right.
3. Choose the Google account the firm has on file for you. (If you are not sure which account, ask the firm — `info@legaleaglelaws.com`.)
4. The first sign-in creates your dashboard profile automatically.

The dashboard uses Google Sign-In only — there is no separate password to remember. If your Google account changes, contact the firm to update the file before your next sign-in.

## What's on the dashboard

When the dashboard loads, you'll see a left sidebar (or a hamburger menu on mobile) with the following sections.

### Overview

A summary screen with:

- **Active cases** — count and a link into the cases list.
- **Upcoming appointments** — the next two consultations with their Meet links.
- **Open help requests** — anything you've sent to the firm that has no reply yet.
- **Quick actions** — book a consultation, send a help request, search a lawyer.

### Cases

The list of matters the firm is currently handling for you. Each row shows the matter title, current stage, the assigned advocate, and the next scheduled hearing if known. See [Your cases](./your-cases.md) for the full guide.

### Appointments

Every consultation you have booked, past and upcoming. Manage upcoming bookings — reschedule, cancel, copy the Meet link — from this page. See [Appointments](./appointments.md).

### Help requests

A simple message thread with the firm. You write a question or send a document, the firm replies. Useful for things that don't need a 15-minute consultation — sending a copy of an order, asking a quick clarification, attaching a notice you received. See [Help requests](./help-requests.md).

### Legal persons

The Punjab Bar Council voter directory, the same data shown on the [public lawyer search](../visitors/find-a-lawyer.md), but with extra capabilities for permitted accounts (export, unmasked contact details). See [Legal persons search](./legal-persons-search.md).

### Profile and preferences

Your contact details, theme preferences (light / dark / system, accent colour, font size, border radius, scaling, panel translucency), and account information. See [Profile and preferences](./profile-and-preferences.md).

## Roles you might have

The dashboard is the same shell for every firm client, but a couple of role-style flags can change what you see:

| Flag | Effect |
|---|---|
| Default firm client | Sees the sections above for your own account. |
| `legal-persons-unmasked` feature | Sees full phone / CNIC in the legal persons directory. |
| `legal-persons-export` feature | Can download the legal persons directory as CSV. |
| `consultation-booking-admin` feature | Can book on behalf of others (firm staff use this). |

These flags are set by firm staff at the admin panel. You cannot toggle them yourself.

## Use cases

### Checking your case status before a hearing

Open the dashboard the morning before a hearing, look at **Cases** for the most recent stage and the assigned advocate's notes (when shared), confirm the **Appointments** entry has the right Meet link if you're joining remotely, and you walk in informed.

### Sending a document to the firm without phone tag

Open **Help requests**, attach the PDF or photo of the document, write a one-line summary, send. The firm sees it instantly and replies within office hours. Faster than email; persisted and searchable.

### Booking a follow-up consultation from inside the dashboard

The **Quick actions** card on the overview links straight into the [booking flow](../visitors/free-consultation-booking.md). Booking from inside the dashboard pre-fills your name and contact information.

### Changing how the dashboard looks

You can switch between light and dark themes at any time from the palette icon in the header. The choice persists across devices — sign in on your phone and the theme follows. See [Profile and preferences](./profile-and-preferences.md) for the full theme customiser.

### Looking up an advocate quickly

The **Legal persons** section lets you search the bar voter directory without leaving the dashboard. If you have the unmasked feature, you'll see full contact details in the results.

## What the dashboard does NOT do

- **It is not a paid SaaS workspace.** The firm-client dashboard is for the firm's own clients; if you want to manage *your* practice as a lawyer, see the SaaS workspace at `/practice/*` (separate sign-up).
- **It does not show internal firm notes.** Only the parts the firm has explicitly shared with you appear on your dashboard. Internal strategy, draft pleadings, and unshared files stay in the firm's own admin panel.
- **It does not chat in real time.** Help requests are a turn-based thread, not an instant messenger. The firm replies during office hours (Mon–Sat, 9 AM – 6 PM PKT).
- **It does not store your files long-term unless you upload them.** The firm keeps its working files in its own storage; what shows up on your dashboard is what the firm has chosen to share.

## Mobile vs web

The dashboard is fully responsive; the mobile build of the platform (Capacitor on Android and iOS) shows the same screens. Mobile-specific differences:

- The sidebar collapses into a hamburger menu under 1024 px.
- Touch targets are at least 44 × 44 px for accessibility.
- The Meet link on an appointment opens the Google Meet app if it's installed; falls back to Meet in the browser otherwise.

## Privacy

- Sign-in is Google-only. The firm sees your name, email, and profile picture from your Google account; that's all the platform receives at sign-in.
- Help-request attachments are stored securely. Public visitors cannot read them.
- Your case list is visible only to you and to firm staff. The platform's database rules block read access from any other account.
- Your theme and profile preferences sync across devices but are not shown to firm staff.

## Frequently asked questions

### What if I am a client of the firm but my Google account is different from what's on file?

Contact the firm at info@legaleaglelaws.com or +92 339 0108134 with both addresses. They'll update the file and you'll be able to sign in with the right account next time.

### Can I have multiple sign-in accounts?

Currently each firm-client record is tied to one Google account. If you need to give a colleague access to your matter, ask the firm to set up a separate sub-record.

### Why is my sidebar empty?

If you signed in but see an empty dashboard, the firm has not yet linked your Google account to a client record. Contact info@legaleaglelaws.com.

### Does the dashboard work offline?

Some pages cache the most recently loaded data and display it offline (you'll see an "offline" banner). Writes — sending a help request, booking a consultation — require connectivity. The mobile build has stronger offline support; the web version is connectivity-first.

### Can I delete my account?

Yes. Go to **Profile and preferences → Account → Delete account**. The platform will mark your account closed and remove your sign-in profile. The firm's records about your matters are retained for the legally required period under Pakistani law for advocate-client relationships, but your sign-in profile is removed.

### How do I reset my theme to defaults?

Open the theme customiser (palette icon in the header) and click **Reset to defaults** at the bottom. This restores light mode, the firm's default accent (amber), medium border radius, 100 % scaling, medium font size, and solid panels.

## Related pages

- [Your cases](./your-cases.md) — full guide to the cases list.
- [Appointments](./appointments.md) — managing consultations.
- [Help requests](./help-requests.md) — messaging the firm.
- [Profile and preferences](./profile-and-preferences.md) — theme customiser and account.
- [Legal persons search](./legal-persons-search.md) — bar voter directory inside the dashboard.
