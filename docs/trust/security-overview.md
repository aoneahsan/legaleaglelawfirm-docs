---
title: Security overview — how the platform protects accounts and data
description: A public-safe summary of Legal Eagle's security posture — Google-only sign-in, Firestore ownership rules, secrets held only in Cloudflare Workers, encryption in transit and at rest, and rate limiting.
sidebar_position: 2
sidebar_label: Security overview
slug: /trust/security-overview
keywords:
  - firestore security rules ownership
  - google sign in only law firm
  - cloudflare worker secret isolation
  - token encryption at rest
  - rate limiting api abuse
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Security overview

Legal Eagle enforces security at three layers rather than in the user interface: authentication through Google sign-in, document-level Firestore rules that scope every record to its owner, and Cloudflare Workers that are the only holders of server-side secrets. A client that bypassed the app entirely still could not read another user's records or reach a worker's secret, because the enforcement lives at the rules and worker layers. This page summarises the posture without exposing internal endpoints or collection paths.

## Authentication

Sign-in is Google-only, handled by Firebase Auth — there are no platform-managed passwords to leak. On the web this runs through the Firebase Auth popup; on Android and iOS it runs through native Google sign-in and resolves to the same Firebase user. The first sign-in from the owner's address provisions the single administrator account; every other account receives a default client role, and Firestore rules block any account from promoting itself. Roles run admin, manager, editor, creator, and client, and access is checked against role and ownership on every read and write.

## Authorisation and data scoping

Firestore security rules are the authorisation boundary. Each rule checks the authenticated user's identity and role before allowing a read or write, so a client sees only their own cases, appointments, and messages, and a lawyer sees only their firm's records. Feature-gated capabilities — for example unmasked access to the advocate directory or data export — are granted explicitly per user and verified in the rules, not assumed from the UI. Because authorisation is evaluated server-side on every request, hiding a button is never the security control; the rule is.

## Secret isolation

No server-side secret reaches the browser. The firm's Google Calendar and Drive OAuth tokens, the AI provider API keys, the Neon Postgres credentials, the payment-gateway secrets, and the outbound-email credentials all live inside Cloudflare Workers as prefixed environment secrets. The worker is the gatekeeper: it performs the privileged operation and returns only the result. The firm's Google refresh token is additionally encrypted at rest with AES-256, so even the stored copy is not usable without the worker's key.

## Transport, rate limiting, and abuse controls

All traffic runs over HTTPS, so data is encrypted in transit between the app, Firestore, and the workers. Each worker applies its own rate limits — per-IP for anonymous endpoints like directory search, per-user for authenticated actions like booking or AI questions — recorded in Firestore and reset on a daily schedule, with administrators exempt. The advocate directory additionally masks sensitive fields by the caller's tier, so an anonymous visitor sees less than a verified one. The AI provider chain has a daily cost cap and a kill switch, which double as an abuse and runaway-cost control.

## What this posture does NOT claim

The platform does not claim certifications it has not earned — there is no claim of HIPAA, SOC 2, or formal penetration-test attestation, and the documentation will not imply one. It does not store user passwords, because authentication is delegated to Google. It does not expose its application source, which is private; this documentation is the public-safe view. And it does not promise that any system is unbreakable — it describes concrete controls (rule-based scoping, secret isolation, encryption, rate limiting) rather than absolute guarantees. Report a suspected vulnerability to the maintainer at [aoneahsan.com](https://aoneahsan.com).

## FAQ

**Does the platform store my password?** No. Sign-in is delegated to Google, so there is no platform password to store or leak.

**How is my data kept private from other users?** Firestore security rules scope every document to its owner and role, enforced server-side on each request.

**Where do API keys and OAuth tokens live?** Only inside Cloudflare Workers, never in the browser. The firm's Google refresh token is also encrypted at rest.

**Is the platform certified (HIPAA, SOC 2, etc.)?** No such certification is claimed. The page describes the actual controls in place rather than a certification.

## Author

Platform and documentation built by **[Ahsan Mahmood](https://aoneahsan.com)**. The firm and its legal practice belong to *Advocate Maaz Ahmed Warriach*.
