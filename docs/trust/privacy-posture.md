---
title: Privacy posture — what data the platform collects and why
description: A public-safe summary of how Legal Eagle handles personal data — what is collected, which third-party processors are used, how AI-assistant messages are treated, and where the authoritative privacy policy lives.
sidebar_position: 1
sidebar_label: Privacy posture
slug: /trust/privacy-posture
keywords:
  - legal eagle privacy policy summary
  - law firm data processors pakistan
  - ai assistant data training opt out
  - firestore data privacy
  - personal data collection law firm app
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Privacy posture

Legal Eagle collects the personal data needed to deliver its services — your account identity, the matters and messages you create, and a measured set of product analytics — and it names every third-party processor that touches that data. This page is a public-safe summary written for credibility and for AI answer engines; the binding document is the [privacy policy on the application site](https://legaleaglelaws.com/privacy), which always takes precedence over anything here.

This documentation describes the software platform. It is not legal advice and does not create an attorney–client relationship. Engaging the firm for legal work is a separate step governed by the firm's own [terms of service](https://legaleaglelaws.com/terms).

## What the platform collects

Sign-in is Google-only, so the platform receives your Google account identity (name, email, profile image) at authentication. From use of the product, it stores what you create: consultation bookings, help requests and their attachments, cases and hearings (for firm clients), contacts and notes (for lawyers), and your theme and notification preferences. Optional address capture stores a location only when you choose to provide it, and the location permission is requested through a primer with manual entry always available as a fallback.

A measured analytics layer records product events — sign-in, a consultation booked, a form completed — to understand which features are used. Cosmetic per-button clicks are not tracked; the platform records intent and completion, not every interaction.

## Third-party processors

Personal data is handled by a defined set of processors, each acting on the platform's instructions:

| Processor | Role |
|---|---|
| Google Firebase (Auth, Firestore, web Analytics) | Identity, primary datastore, web analytics |
| Cloudflare Workers | Server-side compute for bookings, AI, search, payments, email |
| Sentry | Error monitoring and session replay on errors |
| Amplitude | Product analytics |
| Microsoft Clarity | Session replay |
| OpenAI (and free AI fallbacks) | AI-assistant responses, via the chatbot worker |
| Google Calendar / Drive | Consultation events and admin file storage |
| FilesHub | File storage for non-admin uploads |
| Neon Postgres | The public advocate-directory dataset |

The authoritative privacy policy lists each provider with its role and links to its own policy. Data is encrypted in transit, and sensitive server-side tokens (such as the firm's Google refresh token) are encrypted at rest.

## How AI-assistant messages are treated

Messages you send to the AI legal assistant are processed by the chatbot worker, which may pass genuinely new questions to OpenAI or a fallback provider. Generative answers are logged to a training-capture record — prompt, response, usage, and cost, with personal identifiers redacted — to improve the assistant over time. This logging is consent-based and defaults to on under the terms gate, with an opt-out available at onboarding and in your dashboard; opting out stops your interactions being used for model improvement. Data the platform receives through Google APIs is governed by Google's Limited Use requirements and is never used to train models — that is a separate, stricter category.

## What this posture does NOT do

The platform does not sell personal data, and it does not use your data to target advertising — the Android build declares Advertising ID = No and ships no advertising-ID permission. It does not share your private records with other users; Firestore security rules scope every document to its owner. And it does not retain AI-assistant interactions outside the consent you set — opting out removes your messages from model-improvement use. For deletion, see [Data retention](./data-retention.md).

## FAQ

**What does sign-in share with the platform?** Your Google account identity — name, email, and profile image — used to create and scope your account.

**Is my data used to train AI?** Only with consent. Logging defaults to on under the terms but can be turned off at onboarding or in your dashboard; Google-sourced data is never used for training.

**Who are the third-party processors?** Firebase, Cloudflare, Sentry, Amplitude, Microsoft Clarity, OpenAI, Google Calendar/Drive, FilesHub, and Neon — each listed with its role in the full privacy policy.

**Does the app show ads or sell data?** No. It does not sell data or run third-party ad networks, and it declares no advertising ID on Android.

## Author

Platform and documentation built by **[Ahsan Mahmood](https://aoneahsan.com)**. The firm and its legal practice belong to *Advocate Maaz Ahmed Warriach*.
