---
title: Accessibility statement
description: How Legal Eagle approaches accessibility — accessible component primitives, keyboard navigation, reduced-motion support, and user controls for theme, scaling, and font size — plus how to report a barrier.
sidebar_position: 3
sidebar_label: Accessibility statement
slug: /trust/accessibility-statement
keywords:
  - law firm app accessibility statement
  - wcag keyboard navigation radix
  - reduced motion prefers-reduced-motion
  - ui scaling font size controls
  - accessible legal services pakistan
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Accessibility statement

Legal Eagle is built on accessible component primitives and gives users direct control over appearance, scaling, and motion, so the platform adapts to a range of needs rather than assuming one. Accessibility is treated as a build-time default through the choice of UI library, not a feature bolted on afterward. This statement describes what is in place, names the known gaps honestly, and explains how to report a barrier.

## Accessible by construction

The interface is built on Radix UI primitives, which ship correct keyboard interaction, focus management, and ARIA semantics for dialogs, popovers, menus, tabs, and form controls. The platform avoids raw unstyled `div` and `button` elements with custom behaviour in favour of these primitives, which keeps focus order, escape handling, and screen-reader labelling consistent across the app. Interactive controls expose accessible names, decorative graphics are marked `aria-hidden`, and the share and customiser dialogs are keyboard-navigable with proper titles and descriptions.

## User controls that aid access

The theme customiser, available to everyone, doubles as an accessibility tool. Users can switch to a dark or system-matched appearance, increase UI scaling up to 110%, raise the font size, and adjust contrast-affecting tokens like accent and gray. These choices persist locally and, for signed-in users, across devices, so a reader who needs a larger type size sets it once. Touch targets on mobile follow a minimum size, and the layout is responsive from small phones to desktop without horizontal scrolling.

## Motion and reduced-motion

Entrance animations are CSS-only and brief, and every animated surface honours the operating system's reduced-motion setting. A user who has enabled reduced motion gets static reveals instead of transitions, and the boot loader drops to a single static frame. Motion is used to orient, not to decorate every element, and it is never the only way information is conveyed.

## Known limitations

Accessibility is an ongoing effort, and this statement is honest about its current state. The platform has not yet completed a formal third-party WCAG 2.2 audit, so a conformance level is not claimed here. Some dense data views — the advocate directory table and admin lists — are usable with a keyboard but have not been validated end-to-end with every assistive technology. Mermaid-rendered diagrams in the documentation carry text explanations nearby, but the diagrams themselves are images. Where a gap is found, it is treated as a defect to fix rather than an accepted limitation.

## How to report a barrier

If you encounter a barrier — a control you cannot reach with a keyboard, a contrast problem, a screen-reader label that reads wrong — report it to the maintainer at [aoneahsan.com](https://aoneahsan.com) or by email to aoneahsan@gmail.com. Include the page, the assistive technology and browser you were using, and what you expected to happen. Reports are triaged as defects.

## FAQ

**Can I use the platform with a keyboard only?** Yes. The interface is built on Radix primitives with correct focus management and keyboard interaction for menus, dialogs, and forms.

**Can I make the text larger?** Yes. The theme customiser exposes font-size and UI-scaling controls, available whether or not you are signed in.

**Does the app respect reduced-motion settings?** Yes. Animations are CSS-only, brief, and disabled when your system requests reduced motion.

**Is a WCAG conformance level claimed?** Not yet — a formal third-party audit has not been completed, so this statement describes concrete measures rather than a conformance claim.

## Author

Platform and documentation built by **[Ahsan Mahmood](https://aoneahsan.com)**. The firm and its legal practice belong to *Advocate Maaz Ahmed Warriach*.
