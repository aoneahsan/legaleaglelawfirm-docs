---
title: Plan and user management — limits, prices, roles, feature permissions
description: How firm staff edit SaaS plan definitions at /admin/plans, manage user accounts and roles at /admin/users, and grant per-account feature permissions at /admin/settings/feature-permissions.
sidebar_position: 4
sidebar_label: Plan and user management
slug: /admin/plan-and-user-management
keywords:
  - saas plan management admin
  - user role management law firm
  - feature permissions admin
  - per account override saas
last_update:
  date: 2026-05-11
  author: Ahsan Mahmood
---

# Plan and user management

Three admin pages together control who can do what on the platform: **/admin/plans** edits the SaaS plan definitions (limits, prices, feature flags), **/admin/users** manages every account (roles, activations, per-account overrides), and **/admin/settings/feature-permissions** grants narrow feature flags to specific accounts. Plans and users intersect: every user has at most one plan (free or paid) and at most one role; the two systems are orthogonal.

Plans editing is admin-only. User management is admin-only. Feature permissions is admin-only. Managers can read but not write all three.

## /admin/plans — editing the SaaS plan matrix

The plan list shows the four tiers (Free, Pro, Premium, Ultimate) in a card grid. Clicking a card opens the plan detail editor. Each plan has:

- **Identity** — id, label, sort order, badge colour (a CSS variable used in the SaaS workspace's plan badge).
- **Prices** — per-cycle USD amounts for individual and team variants.
- **Limits** — the cap matrix (cases, contacts, notes, files, events per month, court-sync manual per day, etc.).
- **Features** — string flags toggled on or off (`court-sync-auto`, `public-profile`, `team-admin`, `priority-support`, `early-access`, `white-label-export`, and any future ones).
- **Trial** — duration and whether a payment method is captured up front.

Edits write back to `le_plans/{planId}`. The constants in `src/constants/practiceLimits.ts` are the fallback if the document is missing; once an admin saves changes through the UI, the document becomes the live source of truth.

### How edits propagate

The platform reads plan limits at runtime through the resolver `getPlanLimit(user, key)`:

```
1. user.{key}LimitOverride         (admin's per-account override)
2. le_plans/{user.plan}.limits.{key}  (the live plan doc you just edited)
3. PLAN_DEFAULTS[user.plan].limits.{key}  (hard fallback in code)
```

An edit at `/admin/plans` flows through layer 2 immediately. Workspaces of users on that tier see the new cap on their next read. Active sessions reflect the change within seconds because the workspace subscribes to plan state via `onSnapshot`.

### How not to break things

- **Don't lower limits below a value users already exceed** unless you are prepared for them to see "over the cap" warnings. The platform does not delete data; it goes read-only on creates until the user is back under cap or you increase the limit again.
- **Don't disable a feature flag a user has been relying on** without a billing communication. The platform will hide the feature gracefully (e.g., public profile auto-unpublishes), but the user perceives a sudden loss.
- **Don't edit prices on a live plan** mid-cycle without coordinating with the billing worker. Existing subscriptions are charged at the price they signed up for; only new subscriptions see the new price.

A small "Save" confirmation dialog summarises the diff before the write — limits that increased, decreased, features added or removed, prices changed. Treat the diff as a checklist.

## /admin/users — the account list

`/admin/users` is a TanStack Table list of every user on the platform — firm staff, firm clients, SaaS lawyers, the lot. Default columns:

| Column | Notes |
|---|---|
| Display name | From Google account, sometimes overridden. |
| Email | From Google account; not editable from the admin side. |
| Role | admin / manager / editor / creator (firm staff). |
| Plan | free / pro / premium / ultimate (SaaS users); empty for firm staff. |
| Active | Boolean — deactivation switch. |
| Last sign-in | From Firebase Auth. |
| Created at | First sign-in timestamp. |

A toolbar provides search across email and display name, filters for role, plan, and active state, and the column visibility / density controls. State is URL-synced.

Click any row to open the detail drawer. The drawer is the single page where every action on a user happens.

### The detail drawer sections

#### Identity

Read-only: email, Google uid, photo. Editable: display name override (defaults to the Google profile name), preferred phone, default location.

#### Role (firm staff)

Single dropdown — admin / manager / editor / creator. Below the dropdown is a clear note that the change writes `updatedBy` and `updatedAt` to the audit trail. Saving the change is immediate; the affected user's permissions update on their next page load.

The default-admin email is special: only `aoneahsan@gmail.com` is allowed by the database rules to write `role: 'admin'` on a freshly-created `le_users` document. Existing admins promoting another account work fine because the writer is already an admin.

#### Plan (SaaS users)

Plan selector (free / pro / premium / ultimate). Changing the plan via this drawer is for **administrative override**, not customer-driven upgrade — for example, comping a Pro plan to a friend of the firm, or testing the workspace as a SaaS user without going through PayPal.

Plan changes via admin override do not produce an invoice. They are recorded on the user's billing-events audit log with a clear `source: 'admin-override'`. The next webhook from the gateway (if the user has one) overrides the admin override and brings the plan back into sync with billing reality.

#### Limit overrides

A small form with the same keys as the plan limits matrix (`casesLimitOverride`, `contactsLimitOverride`, `notesLimitOverride`, `eventsPerMonthLimitOverride`, `filesLimitOverride`, `courtSyncManualPerDayOverride`, `aiSearchPerDayLimitOverride`, `chatbotLlmDailyLimit`, `chatbotCacheDailyLimit`, etc.). Leaving a field blank means "use the plan default"; a number overrides the plan.

A use case: a Pro lawyer needs 2 manual court-syncs per day instead of the default 1 for a specific high-stakes matter. Set `courtSyncManualPerDayOverride = 2`. The override is checked first in the resolver above; nothing else changes.

#### Feature permissions

A multi-select that lists every registered feature flag. The user already has every flag implicit in their role; checking a box grants a flag that isn't already implicit, and unchecking withdraws a flag that role normally grants.

Examples:
- Grant `legal-persons-unmasked` to a firm-client account for an active matter.
- Grant `legal-persons-export` to an editor who runs research.
- Withdraw `team-admin` from a team member who should not see billing.

#### Active toggle

`active: true | false`. False blocks sign-in and any database access (rules check `user.active == true`). The account is preserved; flipping back to true restores everything immediately.

#### Audit footer

`createdBy`, `createdAt`, `updatedBy`, `updatedAt` shown at the bottom of the drawer. The full per-document change history is a roadmap admin page; the footer gives the most recent change at a glance.

## /admin/settings/feature-permissions — the registry

Where `/admin/users` grants flags per account, `/admin/settings/feature-permissions` is the central registry of every flag that exists. The page lists:

- Flag id (kebab-case identifier used in code).
- Human label.
- Description (one sentence on what the flag controls).
- Default role tier (the role that gets the flag implicitly).
- Audience — `firm-staff`, `firm-client`, `saas-lawyer`, or `all`.
- Active accounts (count of accounts currently granted the flag explicitly).

Registering a new flag is a small developer-side step (adding the flag to `src/constants/featurePermissions.ts`); after the next deploy, the flag appears in this registry and admins can grant or revoke per account from `/admin/users`.

## Use cases

### Promoting a junior staff member from creator to editor

Find the account in `/admin/users` → open drawer → change role to editor → save. They get publish rights on their next page load.

### Comping a Pro plan to a beta tester

Find their account → open drawer → set plan to `pro` → save. No invoice generated; recorded as `admin-override` in the billing audit. To revert, set back to `free` and save.

### Increasing a court-sync allowance for a single matter

In the user's drawer → Limit overrides → `courtSyncManualPerDayOverride = 5` → save. Only that user gets five manual syncs; everyone else on Pro still gets one.

### Suspending a former staff member

`/admin/users` → find account → toggle Active off → save. Their access is severed without deleting the user's data.

### Auditing who has `legal-persons-unmasked`

Open `/admin/settings/feature-permissions` → find the flag → click *View granted accounts*. The list shows every account with the flag explicitly granted. Revocations are one click each.

### Bulk-resetting limit overrides at the end of a beta

The platform doesn't yet have a bulk-revert UI; for now, edit each user's drawer individually. A roadmap page is *Limit overrides — bulk operations*.

## Limitations

- **No bulk role changes.** Each promote, demote, or activate happens one user at a time.
- **No scheduled role changes.** A "demote on date X" is not built; do it manually.
- **No CSV import for new users.** Users must sign in first to be created.
- **No 'view as user' impersonation.** Even admins cannot view the platform through another account's eyes.
- **Plan edits are global.** Saving `/admin/plans` changes the plan for every user on that tier; per-cohort plans don't exist.
- **The audit log is per-document.** A cross-collection audit timeline is roadmap.

## Frequently asked questions

### What happens if I delete a `le_users` document?

Don't. Use Active=false instead. Deleting the document would orphan the user's matters, cases, blog posts, and comments. The platform has no UI for hard-deleting a user; only the Firestore Console.

### Can I rename someone's email?

No. The email is the Google account; renaming would orphan the platform's reference. If a person needs a different email (changed firms, etc.), they sign in with the new Google account, get auto-created as a creator, an admin reassigns role and any feature permissions, and the old account is set Active=false.

### Why is the manager role read-only on user management?

The decision is conservative: only admin can elevate or demote accounts. Managers should not be able to make peers admins. If a firm prefers a less-restrictive scheme, the dev team can change the rule.

### Can a creator promote themselves?

No. Firestore rules enforce that a non-admin cannot write `role` on any `le_users` document — including their own. Even direct database access through devtools fails.

### Do limit overrides survive a plan change?

Yes. Overrides live on the user's `le_users` document, independent of the plan. Changing the plan does not clear them. If you want them cleared, set each override field to blank explicitly.

### Can I see who an editor demoted last week?

The audit footer on each user's drawer shows the most recent `updatedBy + updatedAt`. The full audit-log page is roadmap; today, this footer is the visible history.

### Are firm clients listed alongside firm staff?

Yes. `/admin/users` is the complete list. Filter by role to see firm staff only, or by plan to see SaaS users only, or filter by neither to see firm clients (who have neither role nor plan).

### How are users from the SaaS workspace different from firm clients?

By field, not by separate tables. A firm-client account has `role` and no `plan`. A SaaS lawyer has `plan` and no `role`. A firm staffer has `role` and no `plan`. The same `le_users` document holds all three shapes.

## Related pages

- [Admin overview](./intro.md) — sidebar map.
- [Sign-in and RBAC](./sign-in-and-rbac.md) — the role hierarchy these pages enforce.
- [Billing & plans (lawyer-facing)](../user-guide/lawyers/integrations/billing-and-plans.md) — how the plan tiers look to a SaaS lawyer.

## Author

Plans editor, user management, and this documentation built by **[Ahsan Mahmood](https://aoneahsan.com)**.
