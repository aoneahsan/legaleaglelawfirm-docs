---
title: Theme system — tokens, the customiser, and cross-device sync
description: How the Legal Eagle platform handles theming — design tokens over Radix Themes, a user-facing customiser with seven controls, dual-layer persistence, and a boot loader that prevents a flash of the wrong theme.
sidebar_position: 4
sidebar_label: Theme system
slug: /architecture/theme-system
keywords:
  - radix themes design tokens
  - theme customiser appearance accent
  - cross device theme sync firestore
  - boot loader flash of unstyled content
  - legal eagle theme system
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Theme system

The Legal Eagle platform exposes a full theme customiser to every visitor — signed in or not — with seven controls, and it persists each choice both locally and, for signed-in users, across devices through Firestore. The brand layer is a set of design tokens (navy, gold, cream) wired into Radix Themes, so the customiser changes tokens rather than rewriting component styles. This page explains how the tokens, the customiser, persistence, and the boot loader fit together.

## Tokens over Radix Themes

The visual brand is expressed as CSS custom properties — accent, gold, gray, and surface tokens — that Radix Themes reads. Components reference `var(--accent-*)`, `var(--gold-*)`, and `var(--gray-*)` rather than hard-coded hex values, with the boot loader the single exception because it renders before the token layer is live. Because every surface pulls from the same token set, changing an accent or a radius is a token swap, not a per-component edit, and the change propagates everywhere consistently.

## The customiser

The customiser is opened from a palette icon in the header and is available to authenticated and unauthenticated users alike. It uses card-based visual selectors throughout — never dropdown selects — so each option previews its own effect. Seven controls are exposed:

| Control | Options |
|---|---|
| Appearance | Light, Dark, System |
| Accent colour | Nine brand swatches (amber default) |
| Gray tone | Auto plus the Radix gray scales |
| Border radius | None to Full |
| UI scaling | 90% to 110% |
| Font size | Small, Medium, Large |
| Panel background | Solid or Translucent |

System appearance resolves through the `prefers-color-scheme` media query with a live change listener, so a device that switches to dark mode at night updates the app without a reload. A Reset control restores the defaults: light, amber, slate gray, medium radius, 100% scaling, medium font, solid panel.

## Dual-layer persistence

Preferences persist in two layers. Locally, choices are written through a storage service that uses Capacitor Preferences on native and localStorage on the web, fronted by a Zustand persist store. For signed-in users, the same preferences are mirrored to their user document in Firestore through a sync service, debounced to avoid write chatter during rapid customiser interaction. On sign-in, the remote preferences win and overwrite the local copy; on sign-out, the local copy is kept so the device keeps showing the last choice without the account link. The net effect is that an unauthenticated visitor's choices survive a refresh on the same device, and a signed-in user's choices follow them to a new device.

## The boot loader

On first paint and on a hard reload, the app shows a full-page boot loader until the theme has hydrated and the auth store has emitted its first state. This prevents the flash where the app renders in light mode and then snaps to a user's saved dark preference. The loader carries the brand logo and a rotating set of tagged copy, and it honours `prefers-reduced-motion` by dropping to a static frame. The hydration gate is explicit: the loader hides only once both the persisted theme store has rehydrated and auth has resolved, so the first interactive frame already reflects the user's real preferences.

## What the theme system does NOT do

The customiser does not expose raw CSS or arbitrary colour pickers — choices are constrained to the brand's token sets so no combination breaks contrast or legibility. It does not theme on a per-page basis; one set of preferences applies app-wide. And it does not sync preferences for signed-out users across devices, because there is no account to anchor them to — a signed-out choice is device-local until the user signs in.

## FAQ

**Can signed-out visitors change the theme?** Yes. The customiser is available to everyone, and choices persist locally on that device.

**Do my settings follow me to another device?** Only when signed in. Signed-in preferences mirror to Firestore and load on any device; signed-out preferences stay on the device that made them.

**Why is there a full-screen loader on first load?** To hydrate the saved theme and auth state before the first paint, which avoids a flash of the wrong theme.

**Does dark mode follow my system setting?** If you pick System appearance, yes — it tracks `prefers-color-scheme` live, including changes made while the app is open.

## Author

Platform, SaaS, and documentation built by **[Ahsan Mahmood](https://aoneahsan.com)**. The firm and its legal practice belong to *Advocate Maaz Ahmed Warriach*.
