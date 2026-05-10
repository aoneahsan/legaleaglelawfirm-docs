---
title: Your cases — tracking matters the firm is handling for you
description: How the cases list on the firm-client dashboard works — what each column means, what the stages are, and what data you can and cannot see.
sidebar_position: 2
sidebar_label: Your cases
slug: /user-guide/clients/your-cases
keywords:
  - case tracking dashboard
  - firm client case list
  - matter stages pakistan
  - lawyer case status
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
---

# Your cases

The **Cases** section of the firm-client dashboard at [legaleaglelaws.com/dashboard/cases](https://legaleaglelaws.com/dashboard/cases) lists every matter Legal Eagle Law Firm is currently handling for you, plus closed matters in your history. Each row gives a high-level read on where the matter stands; clicking a row opens the case detail page with the timeline, documents the firm has shared with you, and the next scheduled action.

## What this page shows

| Column | Meaning |
|---|---|
| **Title** | The matter name as the firm has filed it (court name + matter number, or a descriptive title for non-court matters). |
| **Stage** | The current stage in the firm's matter pipeline (see [stages](#stages-explained)). |
| **Court / forum** | Where the matter is being heard, when applicable. |
| **Assigned advocate** | The senior advocate primarily responsible for the matter. |
| **Next action** | The next scheduled hearing date, filing deadline, or follow-up — whichever comes first. |
| **Last updated** | When the firm last changed something on this matter. |

If a column is blank for your row, the firm has not yet filled in that detail — it is **not** a bug. Civil matters early in the pipeline often don't have a court name until after the first filing.

## Stages explained

Matters move through a defined set of stages. The exact stage labels you'll see depend on the matter type, but the most common are:

- **Intake** — initial consultation done, instruction received, but no filing yet.
- **Drafting** — pleadings, applications, or notices are being prepared.
- **Filed** — papers are with the court / authority and registered.
- **Hearing** — the matter has been listed for hearing; dates are being managed.
- **Awaiting order** — argued; waiting for the court's order or judgment.
- **Order received** — order or judgment is out; reading and next-step planning.
- **Appeal / review** — an appeal, revision, or review is in progress (this becomes a linked sub-matter in some cases).
- **Closed — won / lost / settled / withdrawn** — terminal stage with the outcome marked.

Stages are set by firm staff. You cannot edit them; if a stage looks wrong to you, send a help request from the dashboard.

## Filtering and searching

Above the table is a search input and a filter toolbar:

- **Search** matches any field in the row — title, court, advocate, stage.
- **Stage filter** narrows the list to one or more stages. Useful when you have many matters and want to see only the active ones.
- **Sort** lets you reorder by Title, Last updated, or Next action.

State of search and filters is preserved in the URL so you can copy the link and come back to the same view (per the platform's [URL state preservation rule](../../architecture/intro.md)).

## Case detail page

Click a row to open the case detail page. The detail page shows:

### Header

- Matter title
- Current stage (with a quick read of the timeline below)
- Assigned advocate's name and a way to reach them through a help request
- Court / forum
- Matter number

### Timeline

A reverse-chronological list of significant events on the matter:

- Filings (with the type of pleading)
- Hearings (with date and the brief outcome the firm recorded — for example, "next date 2026-06-12")
- Orders received (with a one-line summary)
- Internal notes the firm has chosen to share with you

Internal notes the firm has **not** shared do not appear on your view. If you think a particular event is missing, ask the firm in a help request.

### Documents

PDFs and images the firm has uploaded and shared with you. Click to open in a new tab. Documents are stored on the firm's secure file system; the dashboard streams them to you directly. There is no single bulk-download in v1; each document is downloaded one at a time.

### Next action

A card highlighting the next scheduled action — typically a hearing date — with the option to add it to your own calendar.

## What you can do from the cases page

- **Send a help request scoped to a matter.** From the case detail header, click *Ask about this matter*. The help request is pre-filled with the matter title.
- **Add a hearing date to your calendar.** The next-action card includes an "Add to calendar" button that exports an `.ics` file.
- **Download a shared document.** Click the document name; it opens in a new tab.
- **Search the timeline.** The detail page has a per-matter search that filters the timeline to events matching a keyword.

## What you cannot do (yet)

- **Edit the matter.** Only firm staff can edit case data. If something is wrong, send a help request.
- **Add new documents.** v1 is read-only on the client side. To send a document to the firm, attach it to a [help request](./help-requests.md).
- **See draft pleadings before filing.** The firm shares filed pleadings, not drafts. This is by design — drafts change frequently and pre-filing visibility creates client expectations the firm has not yet committed to.
- **Real-time chat with the advocate.** Use help requests for asynchronous messaging; book a [consultation](../visitors/free-consultation-booking.md) for synchronous conversation.

## Use cases

### Day-of-hearing prep

Open the detail page the morning of a hearing. Re-read the timeline's last few entries. Check whether the firm has shared any new documents in the last 48 hours. You walk in oriented.

### Tracking an appeal across sub-matters

When a first-instance matter goes on appeal, the firm typically links the appeal as a separate matter on the dashboard. From the parent matter's timeline you'll see a link to the appeal; the appeal's own timeline starts fresh.

### Spot-checking a stage before a phone call

If you want to call the firm about a matter, the cases list tells you the current stage in one glance. Useful for "is this thing actually filed yet?" calls — you don't have to ask, you can see.

### Annual review

Filter by **Closed** to see your historical matters. The view is paginated; export is not available to clients in v1, but you can scroll through and reference matter numbers as needed.

## Privacy and access control

- Each row in the cases list is owned by your account. Other clients of the firm cannot see your matters.
- The platform's database rules enforce this at the data layer — even a buggy frontend cannot leak a matter to the wrong account.
- Firm staff with the appropriate role can read and edit your matters; that's the basis of the engagement.
- You can export your own data on request (a manual process — contact the firm).

## Frequently asked questions

### Why does my matter show "Stage: Drafting" when I expected it to be filed?

The firm sets the stage manually as work progresses. If the stage hasn't moved to "Filed" yet, the firm has not (or had not at last update) registered the filing. Send a help request asking for an update.

### My matter is missing from the list — what happened?

If a matter you expected is not showing, the most common cause is account mismatch — you signed in with a different Google account than the one the firm has on file. Ask the firm to confirm the file. The second most common cause is that the matter is registered under a different responsible client (for example, a company you co-own where another person is the lead client).

### Can I share my dashboard with my colleague?

Not directly. The dashboard is per-account. If your colleague needs visibility, ask the firm to give them their own client record linked to the matter. They'll sign in with their own Google account and see the same matter on their dashboard.

### How quickly are stages updated?

When the firm updates a matter, your view reflects it the next time you load the page (or when the dashboard's live cache refreshes — typically within a minute). There is no email notification by default; the dashboard is the source of truth.

### What happens to my closed matters?

They stay on your dashboard, marked **Closed**, with the outcome. The firm retains case files for the period required by Pakistani law for advocate-client matters; the dashboard view persists for the life of your account.

### Why do I see "Documents: 0" but the firm told me they sent something?

The firm shares documents explicitly. If something is uploaded internally but not shared with you, it won't show. Ask the firm to share it; refresh the page after they do.

## Related pages

- [Help requests](./help-requests.md) — for asking the firm about a specific matter.
- [Appointments](./appointments.md) — for booking time on the calendar.
- [Dashboard overview](./dashboard-overview.md) — the parent overview page.
