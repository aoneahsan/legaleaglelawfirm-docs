---
title: Appointments — managing your consultations
description: How upcoming and past consultations are listed on the firm-client dashboard, how to reschedule or cancel, and how Google Meet links work.
sidebar_position: 3
sidebar_label: Appointments
slug: /user-guide/clients/appointments
keywords:
  - appointments dashboard
  - reschedule consultation pakistan
  - google meet link consultation
  - cancel consultation lawyer
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
---

# Appointments

The **Appointments** section at [legaleaglelaws.com/dashboard/appointments](https://legaleaglelaws.com/dashboard/appointments) is where every consultation you have ever booked with the firm lives — upcoming ones at the top, past ones below. From here you can copy a Meet link, add an event to your own calendar, reschedule, or cancel.

## How a consultation gets here

You do **not** create appointments from this page directly. They are created when you complete the [free consultation booking flow](../visitors/free-consultation-booking.md). The booking flow:

1. Asks you to pick a date and time.
2. Calls the firm's secure calendar service.
3. Creates a real Google Calendar event with a Google Meet link.
4. Records the appointment in the platform's database with the Google event ID and the Meet URL.

Once that's done, the appointment appears on this page and on the *Overview* card of your dashboard.

## What each row shows

| Field | Meaning |
|---|---|
| **Date and time** | In Asia/Karachi (PKT) by default. Hover the time for a UTC tooltip. |
| **Mode** | Currently "Google Meet" for booked consultations. The legacy callback flow appears as "Phone callback" if you used the fallback form. |
| **Duration** | Default 15 minutes; longer slots require firm-staff scheduling. |
| **Topic** | The one-line matter summary you typed when booking. |
| **Meet link** | A click-to-join button. Disabled for past sessions. |
| **Status** | Booked / Cancelled / Completed. |

For each upcoming row you'll also see action buttons: **Add to my calendar**, **Reschedule**, and **Cancel**. Past rows are read-only.

## Reschedule

1. Click **Reschedule** on the upcoming appointment row.
2. The booking calendar opens, pre-loaded with the next 30 days of availability.
3. Pick a new date and time slot. Other firm appointments for the same Google Calendar account are blocked out so you can't double-book the firm.
4. Confirm. The original Google Calendar event is **updated** in place — the Meet link does not change. Anyone you previously shared the link with can still use it.

If the slot you wanted got taken between picking it and confirming (a rare race), the system tells you and asks for another slot. Nothing is half-saved.

Rescheduling is rate-limited together with new bookings — three booking-class actions per identity per day. If you hit the limit, contact the firm to reschedule manually.

## Cancel

1. Click **Cancel**.
2. A confirmation dialog asks for an optional reason. Leave it blank if you prefer; it's only a courtesy to the firm.
3. Confirm. The Google Calendar event is removed and the slot reopens for somebody else to book.

Cancellations are **not** penalised. The firm keeps the cancelled appointment in your history — marked Cancelled with the reason — so both sides have a record.

## Add to my own calendar

For an upcoming appointment, **Add to my calendar** downloads an `.ics` file you can import into any calendar app (Google Calendar, Apple Calendar, Outlook, Fastmail, ProtonMail). The `.ics` file:

- Reuses the firm's Google Meet link as the conference URL.
- Sets a 10-minute reminder by default.
- Includes the matter summary in the description.

You can also accept the Google Calendar invite that arrived in your email at booking time — that gives you the same event with no manual import.

## Joining the Meet

At the start time, click **Join Meet** on the appointment row. This opens [meet.google.com](https://meet.google.com) with the unique room ID for your appointment. On mobile, if you have the Google Meet app installed, it opens there instead.

Tips for a smooth call:

- Test your camera and microphone in advance — Meet has a setup check.
- Sign in to Meet with the same Google account you used to book; Meet recognises you as the invited party and skips the lobby.
- If your network is slow, turn off your camera. The advocate keeps theirs on by default; you can speak audio-only if needed.

The advocate may be running slightly late if the previous session ran over. Stay in the Meet for a few minutes; the firm joins as soon as they finish the prior call.

## Past appointments

Past appointments stay on the page indefinitely so you have a clear history. Each row shows when the consultation was, the topic you discussed, and a status of **Completed** (or **Cancelled** or **No-show** if applicable). The Meet link is disabled for past rows; Meet sessions are not recorded by the platform.

If you want a written summary of what was discussed in a past consultation, send a [help request](./help-requests.md) — the firm can recap from their notes.

## Use cases

### Joining the right Meet at the right time

The fastest path is: dashboard → Appointments → click the upcoming row → press **Join Meet**. No navigating through email; no looking for the calendar invite.

### Rescheduling a clash from your phone

You realised the consultation overlaps with something. Open the dashboard on mobile, tap **Reschedule** on the upcoming row, pick a new slot, confirm. The Meet link stays the same; you don't have to re-share with anyone.

### Building a paper trail of consultations

For matters that involved multiple consultations over months, the past-appointments list is a chronological record. Export is not available in v1, but the visual list is enough to plan a longer engagement.

### Cancelling because the matter resolved on its own

Sometimes you book a consultation in a hurry, then the underlying problem resolves before the slot. Cancel with a one-line note ("issue resolved"). Saves the firm the slot and saves you the awkwardness of joining only to say you don't need anything.

## Limitations

- **Meet only.** The platform does not offer in-person bookings through the dashboard yet. For in-person at the Mozang office, contact the firm.
- **15 minutes default.** If you need longer, ask the firm to schedule a longer slot manually.
- **Pakistan office hours.** Slots are bounded by Mon–Sat 9 AM – 6 PM PKT. Outside hours, the firm is not on the calendar.
- **Three booking-class actions per day.** Hard limit. New bookings, reschedules, and re-cancellations all count. Admins are exempt.

## Frequently asked questions

### My appointment vanished — what happened?

If you cancelled it, it should still be in the past list with status **Cancelled**. If it's truly missing, the most likely cause is account mismatch (different Google account). Sign in with the account you booked with.

### Can I invite a third person to the Meet?

Forward the calendar invite from your email to the third person, or copy the Meet link from the dashboard and send it to them. The Meet does not have a hard cap on attendees in normal use; just be respectful — the slot is short.

### What happens if I'm late?

The Meet stays open until the firm closes the session. If you're 5 minutes late, the firm will likely still be there. If you're 15 minutes late on a 15-minute slot, you may need to reschedule.

### Will I get an SMS reminder?

No. The platform does not send SMS. Reminders come from Google Calendar (if you accepted the invite) — typically 10 minutes before, configurable in your Google Calendar settings.

### What if Google Meet itself is down?

Reschedule. The platform's calendar worker will not bind itself to a service that's offline; if Meet is genuinely unavailable, the dashboard shows a banner and the booking page falls back to the legacy callback form.

### Can the firm see my upcoming appointments with other lawyers?

No. The dashboard shows only your appointments with **this** firm. The platform has no cross-firm visibility.

## Related pages

- [Free consultation booking](../visitors/free-consultation-booking.md) — the full flow that creates appointments.
- [Help requests](./help-requests.md) — when an asynchronous question is enough.
- [Dashboard overview](./dashboard-overview.md) — parent page.
