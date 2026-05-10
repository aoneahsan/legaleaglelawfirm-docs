---
title: Book a free consultation with Legal Eagle Law Firm
description: A 15-minute Google Meet with Advocate Maaz Ahmed Warriach. How the booking flow works, how the Meet link is generated, what happens if a slot conflicts, and how to reschedule or cancel.
sidebar_position: 2
sidebar_label: Free consultation booking
slug: /user-guide/visitors/free-consultation-booking
keywords:
  - free legal consultation pakistan
  - book consultation lahore lawyer
  - google meet legal consultation
  - advocate maaz warriach booking
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
---

# Book a free consultation

A **free 15-minute Google Meet consultation** is the quickest way to talk to *Advocate Maaz Ahmed Warriach* about your matter. The booking flow at [legaleaglelaws.com/book-consultation](https://legaleaglelaws.com/book-consultation) creates a real Google Calendar event on the firm's account, generates a Google Meet link automatically, and emails you a confirmation through Google's own delivery — not from us.

This page explains exactly what happens at each step and what to expect.

## What you need

| Requirement | Why |
|---|---|
| A Google account | The booking page is sign-in gated. We use Google sign-in so the Calendar invite reaches the right inbox and the Meet link is tied to a real identity. |
| A working camera and microphone | The consultation happens over Google Meet. You can join from a laptop or a phone. |
| Roughly 15 minutes | The default consultation slot is 15 minutes. You can ask follow-up questions, but plan for the slot to end on time so the firm can take the next call. |

You do **not** need to install anything. Google Meet runs in any modern browser; on mobile, the Google Meet app handles the link automatically.

## The booking flow, step by step

### 1. Sign in

Go to [legaleaglelaws.com/book-consultation](https://legaleaglelaws.com/book-consultation). You will see a *Sign in to book* card with a brief explanation of why sign-in is required (so the calendar event reaches you and so the firm has a verified contact). Click **Continue with Google**, choose your Google account in the popup, and grant the permissions Google asks for (read-only email and basic profile only).

If you are already signed in to another Legal Eagle area (the dashboard, for example), you will skip directly to the next step.

### 2. Pick a date

The booking page shows a calendar of the next 30 days. Days the firm has slots open are highlighted; days with no availability are dimmed out. Click a date.

If you see no highlighted days at all in the next 30, the firm's calendar may be at capacity for the period or the calendar account is temporarily disconnected. The page will explain which case applies and offer a fallback link to the legacy callback form at [legaleaglelaws.com/free-consultation](https://legaleaglelaws.com/free-consultation).

### 3. Pick a time

After choosing a date, you'll see slot tiles in 15-minute increments inside the firm's office hours (Mon–Sat, 9 AM – 6 PM Pakistan time). Slots already taken on the firm's calendar are not shown — what you see is what is genuinely available.

The system checks availability **live** against the firm's connected Google Calendar at the moment you load the page. If somebody else books the same slot in the few seconds while you are deciding, the booking step in [step 5](#5-confirm) will surface the conflict and ask you to pick another slot.

### 4. Tell the firm what your matter is about

A short form asks:

- **Your name** (pre-filled from your Google account, editable)
- **Your phone or WhatsApp** (so the firm can reach you if Meet has issues)
- **A one-line summary of your matter** (for example, "tenancy dispute" or "criminal bail consultation")

The matter summary is **not** legal advice in advance — it just helps the firm prepare. There is no minimum word count and no character limit you'll bump into in normal use.

### 5. Confirm

Press **Confirm booking**. The page does three things in one step:

1. Calls the firm's secure calendar worker (`/bookings`) on Cloudflare. The worker authenticates as the firm's calendar account, creates a Google Calendar event with the slot you chose, and asks Google to attach a Google Meet link.
2. Writes an appointment record into the platform's secure database with the Google event ID and the Meet link.
3. Returns the confirmation page with the Meet link, the date and time, and an "Add to my calendar" button.

You will also get a Google Calendar invite by email — that comes from Google directly, not from Legal Eagle. The Meet link in the email is the same link as on the confirmation page.

## Reschedule or cancel

After booking, the appointment shows up on your dashboard at [legaleaglelaws.com/dashboard/appointments](https://legaleaglelaws.com/dashboard/appointments) (you must use the same Google account you booked with). From there:

- **Reschedule** — pick a new slot. The original Google Calendar event is updated; the Meet link stays the same so the URL you saved earlier still works.
- **Cancel** — supply a brief reason (optional). The Google Calendar event is removed and the firm gets the slot back.

Cancellations are not penalised, but please cancel as early as you can so somebody else can use the slot.

## Use cases

### Pre-hiring conversation

Most consultations are *should-I-hire-an-advocate* conversations. You describe the matter, the advocate gives a high-level read on whether it is worth pursuing, and you decide together whether to move to a paid engagement.

### Second-opinion sanity check

If you already have a lawyer but want a second opinion on whether a strategy makes sense, a 15-minute consultation is exactly enough time for a senior advocate to read the situation and call out anything that stands out.

### Quick procedural question

Some consultations are not about hiring at all — they're about a single procedural question. ("My court date got rescheduled and I am not sure how to refile the application.") The firm answers what it can in the slot.

### Emergency triage

If you are facing arrest, an eviction notice, or a deadline-bound filing, the consultation slot is the fastest legitimate way to get a senior advocate's attention. For genuine emergencies happening *right now* (police are at the door), call **+92 339 0108134** instead — the booking flow is for scheduled conversations.

## Limitations

- **The slot is 15 minutes.** That is enough for triage, not enough to draft pleadings or argue a fact-heavy matter. If your matter needs more time, the consultation is still a good first step — the advocate will tell you what an engagement would look like.
- **Bookings are rate-limited.** Three bookings per day per identity (signed-in user account). This stops calendar spam. If you need more, ask the firm directly.
- **Pakistan time only.** Slots show in Asia/Karachi (PKT). If you are booking from abroad, the times are PKT — convert to your local time before joining.
- **Meet only.** v1 does not offer in-person consultations through the booking page. For an in-person meeting at the Mozang office, contact the firm by phone at +92 339 0108134.
- **Not legal advice in itself.** The consultation is a real conversation with a real advocate, but the words spoken are not a written legal opinion. For a binding written opinion, the advocate will quote a separate engagement.

## Frequently asked questions

### Why does the booking page require sign-in?

Three reasons. First, the Google Calendar invite has to be addressed to a real email — Google delivers it. Second, the firm verifies a real identity to prevent abuse (calendar spam was the most common problem on the legacy callback form). Third, the same sign-in lets you reschedule and cancel from your dashboard later.

### What permissions does Google ask for?

Read-only access to your basic profile (name, profile picture) and the email address of your Google account. The platform does **not** request access to your Gmail, your contacts, your files, or your own calendar. For lawyers using the SaaS workspace, additional permissions apply — but for booking a consultation, only the basics.

### Can I book on behalf of somebody else?

Yes — sign in with your own account, then put the other person's name and phone in the matter summary. The Google Calendar invite still goes to your email. Make sure the actual attendee has the Meet link before the slot starts.

### Is there a charge?

No. The first 15-minute consultation is free. If the matter develops into a paid engagement, the firm will quote that separately and you decide whether to move forward.

### What if I miss the slot?

The slot expires. You can [book a new one](https://legaleaglelaws.com/book-consultation) at any time, subject to the daily booking limit. The firm does not chase no-shows.

### Can I record the consultation?

Recording requires consent from both parties. Ask at the start of the call. Many advocates will say yes for personal note-taking; some will say no for confidentiality reasons. Don't record without asking — that's a separate legal matter you do not want to land in.

### What about confidentiality?

Conversations during a consultation with a registered advocate are covered by the same confidentiality principles that apply to any advocate-client interaction in Pakistan. The platform itself does **not** record or transcribe Meet sessions; the link is generated, the session happens between you and the firm, and that's all.

### Where do I see my upcoming consultation again?

The dashboard at [legaleaglelaws.com/dashboard/appointments](https://legaleaglelaws.com/dashboard/appointments). It lists every consultation you have booked, with the Meet link, status, and the option to reschedule or cancel.

## Fallback: the legacy callback form

If the booking page is offline (or the firm's calendar account is temporarily disconnected), the page falls back to the legacy form at [legaleaglelaws.com/free-consultation](https://legaleaglelaws.com/free-consultation). The legacy form does not create a Google Meet — it submits a callback request and the firm reaches out by phone within office hours. Use it only when the proper booking flow is unavailable.

## Related pages

- [Appointments on the dashboard](../clients/appointments.md) — manage upcoming consultations after booking.
- [AI legal assistant](./ai-legal-assistant.md) — get a quick answer first if a 15-minute slot is more than you need.
- [Find a lawyer](./find-a-lawyer.md) — verify the firm in the bar voter directory.
