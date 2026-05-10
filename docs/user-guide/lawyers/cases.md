---
title: Cases — managing matters from intake to outcome
description: How the cases module works at /practice/cases — the list view, the create flow, and the six-tab detail page (Summary, Hearings, Notes, Documents, Timeline, Sync). Includes a quick read on court-sync.
sidebar_position: 3
sidebar_label: Cases
slug: /user-guide/lawyers/cases
keywords:
  - lawyer case management pakistan
  - court hearing tracker punjab
  - case timeline lahore high court
  - matter management software pakistan
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
---

# Cases

A **case** in the Practice workspace is a single matter you are handling for a client. It carries the matter title, the forum (court), the parties, the hearing schedule, the notes you take, the documents you upload, and an optional automatic feed of hearing dates from public court websites. Cases live at [legaleaglelaws.com/practice/cases](https://legaleaglelaws.com/practice/cases).

This page covers how the case list works, how to create a case, and what the case detail page exposes through its six tabs. The deeper integration story — how court-sync actually polls and parses the court sites — is a separate documentation page in the next batch.

## The list view

`/practice/cases` is a TanStack Table powered list with one row per case. Default columns:

| Column | Notes |
|---|---|
| Title | The matter title as you typed it. |
| Court / forum | The court or tribunal where the matter is heard. |
| Stage | Intake / Drafting / Filed / Hearing / Awaiting order / Order received / Appeal / Closed. |
| Parties | First two linked contacts; "+N" for more. |
| Next hearing | Whichever is sooner — the next listed hearing date or a manual deadline you set. |
| Last activity | Most recent change on the case (any tab). |

A toolbar above the table gives:

- **Search** — substring across title, court, parties, stage. Pre-computed lowercase blob makes this fast even at thousands of cases.
- **Status filter** — single-tier ("active" / "closed" / "all").
- **Stage filter** — multi-select.
- **Court filter** — typeahead from the courts you have used before.
- **Column visibility** — show/hide columns.
- **Density** — comfortable / compact.
- **Sort** — click a header.
- **Capacity indicator** — "X of Y" against your plan's cap.

State of every filter, the sort, and the active page is reflected in the URL — a bookmark restores the exact view.

## Creating a case

The **New case** button opens a guided multi-step form. The steps are designed to be fast on a phone and forgiving — partial saves are kept as drafts so you can come back and finish.

### Step 1 — Basics

Title (required), forum (typeahead, free-text fallback), case number (optional — useful once filed), case type (civil / criminal / family / corporate / tax / constitutional / other).

### Step 2 — Parties

Search-and-link from your contacts. Each linked party gets a role on this case (client, opposing party, witness, expert advocate, court staff, other). At least one client is recommended but not required — drafts can be created without a linked client and parties added later.

### Step 3 — Hearings (optional)

Add a first hearing date manually if you know it. The workspace allows multiple manual hearings. If you plan to enable court-sync, you can leave this blank — the sync run will populate it.

### Step 4 — Court-sync (Pro+)

A toggle to enable automatic hearing fetches for this case. If on, you pick the source (Punjab DSJ portal or Lahore High Court website) and the matching key (case number, party name, or both). Available only to plans that include court-sync.

### Step 5 — Confirm

A summary card. Press **Create case**. The case is saved; you land on its detail page.

If you are at capacity, **Create case** is disabled with an inline upgrade card. Free tier supports 5 active cases; Pro 50; Premium 500; Ultimate unlimited.

## The case detail page

`/practice/cases/:id` opens the case in a six-tab layout. Every tab is reachable by direct URL (`?tab=hearings`, `?tab=documents`, etc.) so you can deep-link.

### Summary

The default tab. Header shows title, stage, forum, and next hearing. Cards below show:

- **Parties** — every linked contact with their role; click to open the contact.
- **Recent activity** — last five entries from the timeline.
- **Quick actions** — change stage, add hearing, add note, upload document.
- **Court-sync status** (if enabled) — last successful run, parser version, last error if any.

### Hearings

A chronological list of every hearing, past and upcoming. Each hearing shows date, court session, brief outcome, and the source (manual / sync). For sync-fed hearings the source row also shows the snapshot URL of the court site at the time the hearing was parsed — auditability you cannot get from a screenshot.

You can add hearings manually from this tab — the **+ Add hearing** button opens a small form. Manual hearings can be edited and deleted; sync-fed hearings are read-only on the workspace side (edits would conflict with the next sync run).

### Notes

The case's linked notes. Each card shows the note's title, the first ~120 characters, the author (you, on individual plans; specific team member on team plans), and last-edited date. Click a card to open the note in the [TipTap editor](./notes.md). The **+ New note** button creates a note pre-linked to this case.

### Documents

Files uploaded for this case. v1 uses your Google Drive (Pro+); each file shows name, type, size, uploader, and uploaded-at. Click to open in Drive. Free tier shows the documents tab as locked with an upgrade card; the rest of the case detail remains usable.

### Timeline

A reverse-chronological log of every event on the case: stage changes, party links/unlinks, hearings added/parsed/edited, notes created, documents uploaded, court-sync runs (success and failure). The timeline is the audit log; events cannot be deleted, only the underlying entities.

### Sync

Visible only when court-sync is enabled. Shows:

- Sync source (Punjab DSJ / LHC) and the matching key.
- Last sync run with status (success / partial / error).
- Number of hearings ingested in this case to date.
- Manual **Run sync now** button (rate-limited per plan).
- Recent run history with details on each.

If a sync run fails repeatedly (parsing error, rate limit, source site down), the status banner explains the cause in plain language. The platform does not silently swallow sync failures.

## Court-sync — the short version

Court-sync is a Cloudflare Worker that periodically polls the public court websites you have flagged for, parses the listings, and writes back hearings to your matter. Manual sync is allowed on Pro+ at quotas that scale by plan (1/day on Pro, 24/day on Premium, 96/day on Ultimate). Auto sync runs at scheduled intervals (24 h on Pro, 4 h on Premium, 1 h on Ultimate).

The worker:

- Reads the public listings page for the source you picked.
- Matches against your case's matching key.
- Extracts hearing date, session, and brief outcome.
- Diffs against your existing hearings and writes only deltas.
- Records the run in `Sync` tab history.

The worker does **not** authenticate as you to the court website (those sites are public). It does not bypass any access controls. Always confirm critical hearing dates with the court directly the day before — court-sync is a productivity convenience, not an authoritative source.

A deeper documentation page on court-sync (parser internals, error modes, parser version history) is planned for the next documentation batch.

## Use cases

### Daily morning prep

Open `/practice/cases?stage=hearing&q=` and sort by next hearing. The first row is the matter you walk into court for today. Click in, scan the Summary tab, click into the Hearings tab to see the latest sync entry.

### Triaging a new instruction

A new client engages you. Step 1: create the contact. Step 2: create the case (linking the client). Step 3: enable court-sync if the matter has been filed. The whole flow is roughly two minutes on a phone.

### Stage transitions

When the matter moves from "Drafting" to "Filed", click **Change stage** on the Summary card. The transition is logged in the Timeline; future filters at the list view reflect the new stage instantly.

### Audit-trail for billing or peer review

The Timeline tab is the case's auditable history. When you bill for time, when a peer asks how a matter progressed, when an old client comes back two years later — the Timeline is the answer.

### Closing a matter cleanly

When the case ends, change stage to **Closed — won / lost / settled / withdrawn** and add the order date plus a one-line outcome. The case stays in your list filtered out of "active" by default. You can still search closed matters, link them in future references, or reopen on appeal.

## Limitations

- **No automatic conflict checking against your party list yet.** A future release will warn if you add a contact as a client when the same contact is the opposing party on another case.
- **No bulk-edit on cases.** You change one case at a time. Bulk archive is on the roadmap.
- **Court-sync coverage** is Punjab DSJ + LHC in v1. Other provincial high courts and the Supreme Court are scheduled for later.
- **No real-time collaboration** on a single case with another team member; locks are advisory in v1.
- **Documents tab requires Drive** (Pro+). On Free, the tab is locked behind an upgrade prompt.
- **No invoicing or billing** on the case directly in v1. Billing module is a separate roadmap item.

## Frequently asked questions

### Can two cases have the same title?

Yes. The workspace does not enforce title uniqueness — different matters with similar names are common.

### How do I link a case to another case (like a parent matter and an appeal)?

Add a free-form link in the case's Notes; v1 does not have a dedicated "linked cases" relation. A future release may add it.

### What happens if court-sync starts returning wrong dates?

Check the Sync tab — the most recent run will show the snapshot URL of the source site. If the court website changed format and the parser regressed, an error banner explains; the platform's parser version is logged so admins can roll the parser forward.

### Can I add a private note that other team members can't see?

Not on v1's team plan. Notes are visible to all team members. If privacy is required, keep the note outside the workspace.

### Can I assign a case to a specific team member?

On team plans, a case has an "owner" field. The owner is the primary lawyer responsible; other team members still see and can edit. Stronger access controls are on the roadmap.

### How do I close a case without archiving the contacts?

Closing the case (changing stage to a Closed variant) does not affect linked contacts. The contacts remain; the case is just closed.

### What if a hearing is rescheduled?

If court-sync is enabled, the next sync run picks up the new date and writes it as the latest hearing entry, leaving the previous entry in place for audit. If you are entering hearings manually, edit the existing entry to reflect the new date and add a comment about the reschedule.

## Related pages

- [Contacts](./contacts.md) — your case parties live here.
- [Notes](./notes.md) — the rich-text journal linked to a case.
- [Calendar](./calendar.md) — hearings flow through to the calendar view.
- [Getting started](./getting-started.md) — workspace overview.
- *Court-sync deep dive* — coming in the next documentation batch.

## Author

Workspace and this documentation built by **[Ahsan Mahmood](https://aoneahsan.com)**.
