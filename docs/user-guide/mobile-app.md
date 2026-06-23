---
title: Using the mobile app
description: How to get Legal Eagle on your phone — install the Android app from Google Play or use the web app in any mobile browser — and what to expect on mobile, including theme controls and the online-required behaviour.
sidebar_position: 5
sidebar_label: Mobile app
slug: /user-guide/mobile-app
keywords:
  - legal eagle android app
  - install law firm app pakistan
  - lawyer app google play
  - mobile legal services pakistan
  - progressive web app law firm
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Using the mobile app

Legal Eagle runs on your phone two ways: as the Android app from Google Play, or as the web app in any mobile browser. Both are the same product — the mobile app is the platform's React application wrapped with Capacitor, so every feature you have on the web (finding a lawyer, booking a free consultation, the AI assistant, your cases and appointments) works the same on mobile. This page covers how to get it and what behaves differently on a phone.

## Install on Android

Install the Android app from Google Play:

1. Open **[Legal Eagle on Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.legaleaglelaws)** on your Android device.
2. Tap **Install**, then **Open**.
3. Sign in with your Google account — the same account works on the web and the app, so your data is shared across both.

You sign in with Google, which means there is no separate password to set up. Whatever you do in the app appears when you sign in on the web, and the reverse, because both read the same account.

## Use it in a mobile browser

You do not have to install anything to use Legal Eagle on a phone. Open **[legaleaglelaws.com](https://legaleaglelaws.com)** in any mobile browser and the full site works, laid out for small screens. This is the route to use on iPhone and iPad today — the codebase supports iOS through Capacitor, but there is no App Store listing yet, so the mobile web app is the iOS path for now. Most browsers also let you add the site to your home screen for a one-tap launch.

## What is the same, and what differs

The feature set is identical to the web. Where the mobile app differs is at the native edges. Sign-in on the app uses native Google sign-in rather than a browser popup, which feels more like a normal app login. If you use a feature that needs your location — optional address capture, for example — the app asks first with a short explanation before the system permission prompt, and you can always type the address manually instead. Sharing a page opens your phone's native share sheet. Your theme choices (appearance, accent, text size, scaling) carry over from the web when you are signed in, and you can change them from the palette icon in the header.

One behaviour to expect: Legal Eagle is online-required. The app needs a connection to load your cases, appointments, and messages, and to use the AI assistant. There is no offline mode — if you lose connection, you will see a loading or retry state rather than stale records, by design. This keeps the data you see accurate rather than out of date.

## What the mobile app does NOT do

The Android app does not sell subscriptions inside the app — to comply with Google Play's payment policy, subscription purchases happen on the web, while everything else works normally on the phone. The app does not send push notifications; it does not run in the background, and it does not store your data for offline use. There is no separate iOS App Store app at this time; iPhone and iPad users use the mobile web app, which has the same features.

## FAQ

**Where do I download the Android app?** From [Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.legaleaglelaws). Sign in with the same Google account you use on the web.

**Is there an iPhone app?** Not on the App Store yet. On iPhone and iPad, open [legaleaglelaws.com](https://legaleaglelaws.com) in your browser — it is the same product and you can add it to your home screen.

**Does the app work offline?** No. It is online-required, so you need a connection to load your data and use the AI assistant.

**Why can't I subscribe inside the Android app?** Google Play's payment policy. Subscription purchases are handled on the web; all other features work in the app.

## Author

Platform and documentation built by **[Ahsan Mahmood](https://aoneahsan.com)**. The firm and its legal practice belong to *Advocate Maaz Ahmed Warriach*.
