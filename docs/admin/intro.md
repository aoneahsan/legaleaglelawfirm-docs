---
title: Admin guide — overview for firm staff
description: What lives inside /admin on the Legal Eagle Law Firm site. The role hierarchy, the modules every admin can reach, and a map for the deeper pages in this section.
sidebar_position: 1
sidebar_label: Admin guide overview
slug: /admin/intro
keywords:
  - legal eagle admin panel
  - firm staff dashboard pakistan
  - law firm cms admin
  - admin rbac roles legal eagle
last_update:
  date: 2026-05-11
  author: Ahsan Mahmood
---

# Admin guide — overview

The **admin panel** at [legaleaglelaws.com/admin](https://legaleaglelaws.com/admin) is the workspace for firm staff. It is gated by Google Sign-In, then by a four-tier role hierarchy, then by per-account *feature permissions* for the handful of sensitive operations that need finer control. This page is the orientation — what's where, who can do what, and how the deeper admin pages in this section are organised.

If you are a firm client, the [client dashboard guide](../user-guide/clients/dashboard-overview.md) is for you. If you are a SaaS lawyer evaluating `/practice/*`, the [SaaS lawyer guide](../user-guide/lawyers/getting-started.md) is what you want. This section is for the people running the firm.

## How to sign in

1. Visit [legaleaglelaws.com/admin](https://legaleaglelaws.com/admin).
2. Click **Sign in with Google**.
3. Choose the account the firm has whitelisted for your role.
4. The first sign-in on a brand-new firm installation auto-promotes `aoneahsan@gmail.com` to **admin**. Every other email lands as **creator** with a "pending approval" screen until an existing admin promotes the account.

The admin panel never shows a password field. Google Sign-In carries whatever security factors your Google account has (2-Step Verification, hardware key, etc.). The platform inherits all of that without storing anything sensitive itself.

## The four roles

| Role | Scope |
|---|---|
| **admin** | Everything. Promote and demote users, edit settings, manage plans, moderate everything, deploy content. The default admin is the technical owner of the platform; broaden cautiously. |
| **manager** | Everything except managing other users and roles. Good for senior staff who run content + appointments + moderation but should not change who has access. |
| **editor** | CRUD on most content (blogs, pages, practice areas, team, cases, gallery, landmark cases). Can publish their own work and moderate comments. Read-only on user-management and most settings. |
| **creator** | Create blog drafts and edit their own drafts. Cannot publish. Read-only everywhere else. The default tier for newly-onboarded staff. |

Higher roles inherit the powers of lower roles. The mapping is enforced both in the UI (with `atLeast(role, required)` guards that hide controls you can't use) and in the database's security rules (Firestore rejects writes from accounts that aren't authorised, even if the UI is bypassed). The UI guard is defence-in-depth; the rules are the authority.

Full per-module permissions are in the [sign-in & RBAC reference](./sign-in-and-rbac.md).

## What's in the admin panel

A condensed map of every page you can reach from the sidebar.

### Content modules (Editor and above)

- **Blogs** + **Blog categories** + **Blog comments** — the WordPress-grade publishing surface. TipTap editor, draft flow, scheduling, comment moderation queue. See [blogs and comments](./blog-and-comments.md).
- **Pages** (CMS) — singleton-and-list page records for About, custom landing pages, legal pages.
- **Practice areas** — long-form practice-area pages with hero, services list, SEO block.
- **Team** — attorney profiles with bio, photo, contact, languages, socials.
- **Case studies** — write-ups of past matters with optional PDF.
- **Landmark cases** — capstone matters from Pakistan legal history, used in the public *Landmark cases* index.
- **Testimonials** — quotes with rating, approval workflow.
- **Sliders** — homepage hero rotators.
- **Features** — homepage features grid.
- **Gallery** — YouTube videos surfaced in the public Gallery page.

### Operational modules (Manager and above)

- **Appointments** — every consultation booked via the public flow.
- **Contact messages** — submissions from the public contact form.
- **Help requests** — the threaded inbox of help-request conversations with firm clients.
- **Subscribers** — newsletter sign-ups, export, delete.
- **Site settings**, **SEO settings**, **Menus** — singleton settings that drive what the public site renders.

### Administrative modules (Admin only, mostly)

- **Users** — promote and demote, deactivate accounts, set per-account feature permissions. See [plan and user management](./plan-and-user-management.md).
- **Plans** — for the SaaS workspace; edit limits, prices, and feature flags per tier.
- **Calendar account** — the firm's Google Calendar OAuth for consultation booking. See [calendar and availability](./calendar-and-availability.md).
- **Availability** — slot rules, weekly templates, blocked dates for the booking page.
- **Feature permissions** — register a feature flag, decide what gates it, grant per account.
- **Chatbot** — AI provider chain config, per-tier rate limits, cache review, KB curation. See [chatbot tuning](./chatbot-tuning.md).
- **Court-sync** — health dashboard, parser version, recent run failures (admin-side; the [court-sync user-guide page](../user-guide/lawyers/integrations/court-sync.md) covers the lawyer-side view).

## How the navigation works

The admin sidebar is filtered by role. A **creator** sees a slim sidebar — Blogs (drafts only), Profile, Sign out. A **manager** sees most operational modules but no Users entry. An **admin** sees everything.

The sidebar collapses to a hamburger sheet at narrow widths (under 1024 px), per the platform-wide responsive-navigation rule. There is never a state where both inline nav and hamburger are visible.

Every list page is a [TanStack Table](https://tanstack.com/table) with toolbar search, column visibility, sort, pagination, and URL-state sync — bookmarks restore the exact view. Every create / edit page has the same form patterns (Radix-driven inputs, autosave on text fields where appropriate, drag-to-reorder where order matters, slugs auto-derived from titles).

## What the admin panel deliberately does NOT do

- **It does not impersonate users.** Even admins cannot view a SaaS lawyer's `/practice/*` workspace through their account. The database rules prevent cross-tenant reads; the admin sees aggregated billing and plan information only.
- **It does not send mass email.** The platform has no outbound marketing email surface in v1. Newsletter content is published on the public site; export of subscribers (admin only) lets you feed an external email service.
- **It does not edit client matters on the firm side without an audit trail.** Every change to a `le_matters` document writes a timeline entry. Deletes are soft-delete with a 30-day retention window before purge.
- **It does not store payment-card data.** The billing worker stores subscription state and gateway customer IDs; cards live with the gateway.

## How sensitive operations are audited

The admin panel writes an entry to a per-collection audit log on every meaningful change. The audit log is admin-readable in the future *Audit log* page (roadmap); for now, every important collection carries `createdBy`, `updatedBy`, `createdAt`, `updatedAt` fields on every document, and deletes are soft-flagged with `deletedBy` and `deletedAt`. Restoring a soft-deleted document is a Firestore Console operation that ships in a future admin-tools page.

## The deeper pages in this section

- [Sign-in and RBAC](./sign-in-and-rbac.md) — Google-only auth, role hierarchy, the per-module permission matrix, feature permissions, security rules.
- [Blog and comments](./blog-and-comments.md) — TipTap editor, draft flow, scheduling, image upload via FilesHub, comment moderation queue.
- [Plan and user management](./plan-and-user-management.md) — the SaaS plan editor and the user-management page (roles, feature toggles, per-account overrides).
- [Calendar and availability](./calendar-and-availability.md) — connecting the firm's Google Calendar, setting weekly availability rules, blocking specific dates.
- [Chatbot tuning](./chatbot-tuning.md) — AI provider chain configuration, per-tier rate limits, cache review, knowledge-base curation.

## Author

The admin panel, the role system, and this documentation built by **[Ahsan Mahmood](https://aoneahsan.com)**. The firm itself is the practice of *Advocate Maaz Ahmed Warriach* in Lahore.
