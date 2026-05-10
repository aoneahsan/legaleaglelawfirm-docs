---
title: Calendar — hearings, events, and Google Calendar conflict warnings
description: How the calendar at /practice/calendar works — week and day views, hearings auto-flowing from cases, manual events, and the optional Google Calendar conflict-detection layer.
sidebar_position: 5
sidebar_label: Calendar
slug: /user-guide/lawyers/calendar
keywords:
  - lawyer calendar pakistan
  - hearing calendar punjab
  - google calendar conflict lawyer
  - lahore high court calendar
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
---

# Calendar

The **Calendar** at [legaleaglelaws.com/practice/calendar](https://legaleaglelaws.com/practice/calendar) is the unified time view of every hearing on every case in your workspace, plus any manual events you add (consultations, meetings, deadlines). When connected to your Google Calendar, it also reads your free/busy from there to warn you when scheduling a workspace event would clash with something already on your personal calendar.

## What goes on the calendar automatically

- Every hearing entered manually or imported by court-sync on every active case.
- Deadlines you tag as time-sensitive on a case.
- Manual events you create directly on the calendar (consultations, meetings, training, holidays).

That is the workspace's full picture. Anything *outside* the workspace — a dentist appointment, a personal lunch, an external meeting on your Google Calendar — is read in via the optional Google Calendar connection (see below) for conflict checking only; those events are not stored in the workspace.

## Views

A view toggle at the top right offers:

- **Day** — single day, hour-by-hour. Default on phones.
- **Week** — Monday through Sunday by default; configurable to start on Saturday for week-pattern reasons local to Pakistan.
- **Month** — high-density grid. Best for spotting patterns.
- **Agenda** — a flat scrollable list of upcoming events; useful for printing or for quick read-through.

The active view, the cursor week / day, and any active filter are all reflected in the URL — bookmarking restores the exact view.

## Filtering

A filter strip at the top of the page filters by:

- **Case** — show events from a specific case only.
- **Court** — group hearings by forum.
- **Stage** — only show events on cases in particular stages.
- **Type** — hearings vs manual events vs deadlines.

Multiple filters compose; clearing them returns to "show everything".

## Adding an event

Click an empty slot on the week view, or press **+ Event** in the top bar. The event form covers:

| Field | Notes |
|---|---|
| Title | Required. Shows on the calendar tile. |
| Type | Hearing / Consultation / Meeting / Deadline / Other. |
| Linked case | Optional; auto-pre-fills if you opened the form from a case. |
| Linked contact | Optional. |
| Start / end | Required. Defaults to a 30-minute slot at the time you clicked. |
| All day | Toggle for full-day events (deadlines, court holidays). |
| Location | Free-form. Optional Google Places autocomplete. |
| Notes | Short free-text. |
| Reminder | Email or in-app, configurable per event. |

If your plan has a monthly events cap (Free: 10, Pro: 100, Premium: 1 000, Ultimate: unlimited), the form shows your remaining capacity inline. The cap is a rolling 30-day window — older events do not consume current capacity.

## Editing and deleting

Click an event to open it. Edit any field; save is automatic on blur. Delete with the **More menu**. Deleted manual events leave a placeholder in the linked case's Timeline so the audit trail is intact; deleted hearings (manual ones) similarly leave a Timeline entry.

Court-sync-fed hearings cannot be deleted from the calendar — they belong to the case's Hearings tab and are read-only on the workspace side. Edits to those would conflict with the next sync run.

## Google Calendar conflict warnings

The calendar's most-asked-for feature: when you try to schedule a workspace event, the workspace checks your *external* Google Calendar and warns if you already have something at that time.

### Connecting your Google Calendar

From `/practice/settings/integrations` or the wizard's Step 3, click **Connect Google Calendar**. The OAuth consent screen asks for **read-only** access to your free/busy by default — no read of event titles, no write access. You can revoke access from your Google account settings at any time.

After connecting, the workspace fetches free/busy from your default Google Calendar over a 60-day forward window. The fetch is incremental — only the delta since last fetch is requested.

### What the warnings look like

When you create an event whose time overlaps with something on your Google Calendar, the form shows a yellow banner:

> **Possible conflict at this time.** You already have an event on your Google Calendar at 2:00 PM – 3:00 PM (read-only). [Schedule anyway] [Pick a different time]

The platform does **not** see your external event title — only the busy block. The banner is informational; it does not block you. If you actually want both events at the same time (you delegated the dentist to your spouse), schedule anyway.

### What it does NOT do

- It does **not** write events to your Google Calendar. Workspace events stay in the workspace.
- It does **not** read external event titles, attendees, or descriptions. Free/busy only.
- It does **not** sync the other way (from your Google Calendar into the workspace). One-direction read for conflict checks only.
- It does **not** check secondary calendars by default. The default is the calendar marked primary on your Google account; you can pick a different one in settings.

### Disconnecting

`/practice/settings/integrations` → **Disconnect Google Calendar**. The cached free/busy snapshot is purged; workspace events are unaffected; future conflict checks return "no data".

## Reminders

Per-event reminders are independent of Google. The platform delivers reminders via:

- **In-app banner** — shows in the workspace when you next sign in (if the reminder fires while you are signed out).
- **Push notification** — on the mobile app, if you have granted permission.
- **Email** — if you have opted in via Settings → Notifications. v1 sends through a transactional provider; opt-out is one click.

Default reminder is 15 minutes before; you can override per event or change the default in settings.

## Use cases

### The morning glance

Open the calendar in Day view. Today's hearings and meetings are listed in time order. Click each to see linked case and notes one tap away.

### Cross-case planning

Use Month view to spot weeks where multiple clients have hearings stacked on top of each other. Move flexible meetings out of those weeks.

### Sanity-check a court-given date

The court gives a date for the next hearing. Open the calendar, week view of the relevant week. The Google Calendar overlay tells you immediately whether you are already busy on that day. Talk to the court about a different date if needed.

### Personal time block

Block out genuine focus time as a workspace event with type "Other". The block shows on your calendar; future scheduling conflicts will warn you.

### Deadline tracking

A filing deadline that is not a hearing but a fixed-date obligation can be a calendar event of type "Deadline" linked to the case. Set the all-day toggle and a reminder a few days out.

## Limitations

- **Google Calendar integration is read-only**. Workspace events do not write back to your Google Calendar in v1. If you want them visible there too, copy-paste manually for now; full two-way sync is on the roadmap.
- **Outlook / Apple Calendar are not yet supported**. Google Calendar only at v1.
- **Recurring events are basic**. Daily / weekly / monthly recurrences supported; complex recurrences (every other Tuesday until July) are not.
- **No timezone support per event yet**. Every event is in your workspace timezone (default Asia/Karachi, configurable in settings). Inter-timezone planning needs manual conversion.
- **Capacity cap is per month**, not per total events. Counting at month boundaries can feel arbitrary; an Ultimate plan removes the cap entirely.
- **Conflict warnings use free/busy snapshots refreshed every 30 minutes**. A meeting added to your Google Calendar 5 minutes before a workspace event may not show as a conflict until the next refresh.

## Frequently asked questions

### Can I see my Google Calendar events directly in the workspace calendar?

No — only as anonymous busy blocks for conflict warnings. v1 chose not to render external event titles to keep the integration's permission scope minimal.

### What if my Google Calendar is in a different timezone?

The platform converts to your workspace timezone at fetch time. Set your workspace timezone correctly in `/practice/settings`.

### Why are my conflict warnings sometimes not showing?

Free/busy snapshots refresh every 30 minutes. If you added a Google Calendar event 5 minutes ago and immediately tried to schedule a clashing workspace event, the snapshot has not refreshed yet. Wait, or trust your own knowledge.

### Can I share my workspace calendar with the firm or with another lawyer?

No. Calendars are per-account. Team plans share a calendar across team members; individual plans do not share with anyone.

### Can I print the calendar?

Yes — the Agenda view prints cleanly with one event per line. Day and week views print but are denser; Agenda is the recommended print view.

### Can I subscribe to my workspace calendar from another tool?

Not in v1. iCal feed export is on the roadmap. For now, copy-paste critical dates manually if you need them in another calendar tool.

### What happens if I disconnect Google Calendar mid-week?

Existing workspace events are unaffected. Conflict warnings stop appearing until you reconnect. The cached free/busy snapshot is purged.

### Can two team members see each other's busy blocks?

On team plans, yes — each member's events show on the team calendar. Conflict checks within the team use the team calendar.

## Related pages

- [Cases](./cases.md) — hearings auto-flow into the calendar.
- [Contacts](./contacts.md) — invite contacts to events you create.
- [Getting started](./getting-started.md) — workspace overview.
- *Google Calendar integration deep dive* — coming in the next documentation batch.

## Author

Calendar integration and this documentation built by **[Ahsan Mahmood](https://aoneahsan.com)**.
