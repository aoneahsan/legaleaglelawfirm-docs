---
title: Mobile build — one React app on Android and iOS via Capacitor
description: How the Legal Eagle platform ships the same React 19 codebase to Android and iOS with Capacitor 8 — native plugins, permission primers, icon and splash generation, edge-to-edge handling, and the Play submission posture.
sidebar_position: 5
sidebar_label: Mobile build
slug: /architecture/mobile-build
keywords:
  - capacitor 8 android ios build
  - capacitor permission primer
  - capacitor assets icon splash
  - android edge to edge safe area
  - native google sign in capacitor
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Mobile build

The Android and iOS apps are the same React 19 build that runs on the web, wrapped by Capacitor 8. There is no second codebase and no parallel native UI — shared features (cases, appointments, the AI assistant, the directory) run identical logic, theme, and Firestore access on every runtime. Native-only capabilities are reached through Capacitor plugins, each gated by a permission flow so the OS prompt never appears cold. This page describes how the mobile build is produced and what it does differently from the web.

## Shared code, native edges

Capacitor loads the compiled web bundle into a native WebView and bridges to platform APIs through plugins. The platform uses a small, deliberate set of plugins rather than installing them speculatively: geolocation for address capture, the share plugin for the OS share sheet, native Google sign-in, preferences for local storage, and the asset and edge-to-edge support pieces. A feature only pulls in a plugin when it actually needs one, which keeps the merged Android manifest's permission list short and the Play review clean.

The clearest example of shared-with-native-edges is sign-in. On the web, Google sign-in runs through the Firebase Auth popup; on native, it runs through the native Google sign-in plugin, which returns a credential the app exchanges for the same Firebase user. The rest of the app is identical afterward — it sees a signed-in Firebase user regardless of how the credential was obtained.

## Permission primers

No native permission is requested cold. Every OS permission — location is the live case — goes through a primer dialog first that explains why the app needs it and what happens if it is declined, then the real OS prompt, and finally a recovery dialog with platform-specific steps if the permission was permanently denied. The orchestration returns a clear granted / blocked / ask-later result to the calling code, so a feature degrades gracefully instead of erroring when a permission is refused. Location, the one sensitive permission the app requests, also has a non-permission fallback: manual address entry always works.

## Icons, splash, and edge-to-edge

App icons and splash screens are generated from SVG sources through `@capacitor/assets` rather than hand-edited per platform. The SVG sources render to PNG inputs (icon, foreground, background, and light/dark splash), and the asset generator produces the Android, iOS, and PWA variants. The native resource directories are treated as generated output and never hand-edited, because a regeneration would overwrite manual changes.

On Android 15 and newer, the system enforces edge-to-edge rendering, where the app draws under the status and navigation bars. The platform handles this through the core Capacitor system-bars behaviour, which exposes the safe-area insets as `env(safe-area-inset-*)` CSS variables. The viewport is set to `viewport-fit=cover`, and the sticky top chrome consumes the top inset while the floating action buttons consume the bottom inset, so content always sits below the status bar and above the navigation bar without a double inset.

## Play submission posture

The Android build is tuned for a clean Play submission. In-app subscription purchase is disabled on Android to comply with the Play Payments policy — the relevant tiles and checkout guard on the native platform. Sign-in uses the native Google plugin. The native Firebase Analytics plugin and the advertising-ID permission were removed, so the app declares Advertising ID = No and needs no `google-services.json`; analytics on device flow through Amplitude and Microsoft Clarity. The merged manifest's permission set is intentionally minimal: internet, credential use for sign-in, and coarse/fine location for the optional address feature.

## What the mobile build does NOT do

The mobile apps do not add offline support. There is no offline data mirror, no background sync queue, and no offline-first behaviour beyond the web app's online-required contract — a lost connection shows a loading or error state, not stale cached records. The build also does not maintain a separate native UI or native-only feature set; everything users see is the shared React app. And it does not bill subscriptions in-app on Android, by policy — plan changes there route to the web.

## FAQ

**Is the Android/iOS app a different codebase from the web?** No. It is the same React 19 build wrapped by Capacitor 8, with native plugins only at the edges.

**Why does the app ask for location?** For optional address capture (for example on a help request). It is requested through a primer, never cold, and manual entry is always available as a fallback.

**Does the mobile app work without internet?** No. It is online-required, the same as the web app.

**Why can't I buy a subscription inside the Android app?** Play's Payments policy. Subscription purchase is disabled on Android; plan changes happen on the web.

## Author

Platform, SaaS, and documentation built by **[Ahsan Mahmood](https://aoneahsan.com)**. The firm and its legal practice belong to *Advocate Maaz Ahmed Warriach*.
