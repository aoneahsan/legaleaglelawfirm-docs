---
title: Profile and preferences — theme customiser, contact info, account
description: How to change the dashboard theme (light, dark, accent colour, fonts, scaling), update your contact information, and manage your account.
sidebar_position: 5
sidebar_label: Profile and preferences
slug: /user-guide/clients/profile-and-preferences
keywords:
  - dashboard theme customiser
  - dark mode legal eagle
  - contact information dashboard
  - delete account legal eagle
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
---

# Profile and preferences

The **Profile** section at [legaleaglelaws.com/dashboard/profile](https://legaleaglelaws.com/dashboard/profile) is where you set the look and feel of the dashboard, update your contact details, and manage your account. The theme customiser is also accessible from the palette icon in the header on every page.

## Theme customiser

The customiser lets you adjust seven dimensions of the interface. Every dimension is exposed as **card-based selectors** (visual tiles), not dropdowns, so you can see what each option looks like before committing.

| Dimension | Values | What changes |
|---|---|---|
| **Appearance** | Light · Dark · System | Light/dark colour scheme. *System* follows your operating system's preference, with a live listener that flips when you toggle macOS / iOS / Windows / Android settings. |
| **Accent colour** | Amber (default) · Gold · Bronze · Indigo · Blue · Teal · Jade · Crimson · Neutral | The single accent colour used for primary buttons, links, and highlight states. |
| **Gray tone** | Auto · Gray · Mauve · Slate · Sage · Olive · Sand | The base neutral. *Auto* lets the platform pick a neutral that pairs nicely with your chosen accent. |
| **Border radius** | None · Small · Medium (default) · Large · Full | How rounded buttons, cards, and panels are. |
| **UI scaling** | 90 % · 95 % · 100 % (default) · 105 % · 110 % | Globally scales every UI element. Useful for high-DPI screens or older eyes. |
| **Font size** | Small · Medium (default) · Large | Body and heading font scale within the chosen UI scaling. |
| **Panel background** | Solid · Translucent (default) | Whether floating panels (dialogs, popovers) have a frosted-glass effect or solid background. |

A **Reset to defaults** button at the bottom of the customiser restores the firm's default look (light, amber, slate gray tone, medium radius, 100 % scaling, medium font, solid panels).

### Where preferences are stored

Preferences are stored in two places:

1. **Locally on the device** so the next visit on the same browser/device restores your choice instantly without a sign-in round-trip. On mobile this uses native storage; on web this uses the browser's local storage.
2. **In your account on the server** so signing in on a new device pulls down the same preferences. This sync is debounced — rapid customiser changes are batched into one server write per second to avoid wasteful round-trips.

When you sign in on a fresh device, the server's stored preferences win — your phone's preferences sync to your laptop the moment you sign in.

### Reduced-motion support

If your operating system is set to reduce motion (Settings → Accessibility on iOS / macOS, "Show animations" off on Windows / Android), the dashboard honours that. Entrance animations, hover lifts, and transitions are zeroed out automatically.

## Contact information

The contact section shows what the firm has on file for you:

- **Full name** (from your Google account, editable)
- **Phone / WhatsApp number** (editable)
- **Default location** (optional — used to pre-fill the location field on help requests)

Changes are written to your account immediately. The firm's admin panel reflects the new values the next time their page loads.

The email address is **read-only** — it's tied to your Google account and changing it would unbind your dashboard from your matters. To use a different email, ask the firm to update the file.

## Account

### Sign out

A **Sign out** button signs you out of the dashboard but does not sign you out of your Google account. To sign out of Google entirely, use Google's own sign-out at [accounts.google.com](https://accounts.google.com).

### Delete account

A **Delete account** button removes your sign-in profile from the platform.

What gets removed:
- Your sign-in profile.
- Your saved theme preferences.
- Your default location.
- Your help-request inbox view.

What is retained (per Pakistani law for advocate-client records):
- The firm's records of your matters.
- Help-request history that the firm has archived.
- Filed pleadings and documents.

Deletion is **immediate and irreversible** for your sign-in profile. If you sign in again with the same Google account afterwards, you'll start with a fresh, empty dashboard (the firm's records of your matters are still on file but won't be linked to a sign-in until firm staff re-link them).

If you want to come back later without losing the link to your matters, use **Sign out** instead.

## Use cases

### Switching to dark mode for evening reading

Open the customiser, choose **Dark** under Appearance, close. The whole dashboard flips. Your other devices update next time you sign in there.

### Larger fonts after eye strain

Choose **Large** under Font size, optionally bump UI scaling to 105 %. The change is global — every screen on the dashboard respects it.

### Brand-aligning the accent

If you find the firm's amber accent too warm for your taste, switch to **Indigo** or **Slate**. The accent change is purely cosmetic; nothing about how the firm sees your data changes.

### Setting a default location

If most of your matters concern your home address, set it as the default location. Help-request forms will pre-fill it (still editable per request).

### Cleanly deleting your account when an engagement ends

When you've decided you no longer want a sign-in profile but the firm is still your counsel of record, use **Delete account**. The firm's matter records persist; your sign-in does not.

## Limitations

- **Contact email is locked** to your Google account email. To change it, ask the firm to update the file.
- **No phone-only sign-in.** Sign-in requires a Google account; phone is for the firm to contact you.
- **No 2FA toggle on the platform itself.** Two-factor authentication is whatever your Google account has — the platform inherits it.
- **English UI only** in v1. Urdu UI is on the roadmap.

## Frequently asked questions

### Why are theme changes instant in some places and slightly delayed in others?

Most of the dashboard updates instantly because the theme provider is at the top of the tree. A few iframes (e.g. the embedded Google Meet preview) don't repaint until reload — that's a Google constraint, not a platform one.

### Will the firm see my theme preference?

No. Theme preferences are not exposed to firm staff. They sync to your account so they follow you across devices, but they're not part of the firm's view of your file.

### Can I have a different theme on mobile vs web?

Not without signing out of one. Theme preferences sync across devices for the same account. If you actively want different themes on different devices, you can sign out on the device you want to keep separate; that device will use its local-only saved preference.

### What happens to my preferences if I change my Google account on the file?

The new account starts from defaults. If you want to migrate preferences, screenshot the customiser screen first — it's quick to set up again.

### The accent colour I want isn't listed.

The customiser exposes nine curated accents that the firm has tested for AA contrast in both light and dark mode. Custom hex picking is not available — the curated list is deliberately constrained to keep contrast and brand consistency.

### Why does **System** appearance flip the colours when I change my OS preference?

The customiser registers a live listener for the `prefers-color-scheme` media query. When your OS toggles dark mode, the listener fires and the dashboard flips to match. This is intentional — *System* means "follow my OS", and the OS can change without a page reload.

## Related pages

- [Dashboard overview](./dashboard-overview.md) — the parent overview.
- [Help requests](./help-requests.md) — uses your default location.
- [Architecture: theme system](../../architecture/intro.md) — how the customiser is built (for the technically curious).
