---
title: Legal persons directory — data, masking, and how the search index works
description: Reference page for the public legal-persons directory. What fields are stored, how masking decides what you see, why the dataset is paginated 20 rows at a time, and how to interpret empty cells.
sidebar_position: 4
sidebar_label: Legal persons directory (reference)
slug: /user-guide/visitors/legal-persons-directory
keywords:
  - legal persons directory pakistan
  - punjab bar voter list
  - lawyer search pakistan
  - bar council data
  - advocate directory schema
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
---

# Legal persons directory — reference

This page is the **reference** companion to the [Find a lawyer](./find-a-lawyer.md) how-to. It documents exactly what data lives in the directory, how rows are masked for different audiences, and what every column means. If you just want to use the directory, the how-to is shorter and more direct. Read this page when you need to interpret the output, audit the masking rules, or are wondering why a particular field is blank.

## What the directory is

The legal persons directory is a searchable, paginated index of approximately **15,700 advocates** sourced from the Punjab Bar Council voter rolls. The data is mirrored locally so the platform can search it quickly; it is not pulled live. Re-imports happen when the bar council publishes a new roll (typically once or twice a year).

## Schema

Each row corresponds to one advocate. Fields stored:

| Field | Type | Notes |
|---|---|---|
| `name` | string | Full name as printed on the voter roll. Spelling and capitalisation match the source — do not assume Title Case. |
| `father_or_relation` | string | Father's name, husband's name, or other relation as printed. May be blank in older rolls. |
| `cell_no` | string | Phone number with country prefix when supplied. May be blank. Public visitors see this masked. |
| `cnic` | string | National identity card digits (no dashes). May be blank. Public visitors see this masked. |
| `vote_no` | string | The advocate's voter / council number. Numeric. Useful for exact lookup. |
| `city` | string | Registered city of practice. |
| `name_tokens` | string[] | Tokens of the name, used for the "find a person" chatbot quick action. Built at import time. |

The internal document ID is the sanitised CNIC digits (when present), so each advocate has a stable, deduplicated record across re-imports.

## What you see vs what's stored

There are three audiences, and each sees a different view of every row:

### Public visitor (not signed in)

| Column | Display |
|---|---|
| Name | Full |
| Father / relation | Full |
| Cell number | Last 4 digits only — `+92 ●●● ●●● ●1234` |
| CNIC | Last 4 digits only — `●●●●●-●●●●●●●-●1234` |
| Council number | Full |
| City | Full |

### Firm client (signed in, default)

Same as public visitor by default. Firm staff can grant the **`legal-persons-unmasked`** feature permission to a specific client account if there is a legitimate reason. With that permission, the cell number and CNIC show in full.

### Firm staff (admin)

Always sees full unmasked data. Can also export the directory to CSV (the **`legal-persons-export`** feature permission, implicitly granted to admins).

## Pagination — why 20 rows

Every legal-persons query is hard-capped at 20 rows. This is a design rule, not a configuration knob. The reason:

- The dataset is on the order of 15,700 rows. Returning the whole thing on one page would download megabytes for a single search and be unusable on slow connections.
- 20 rows is the largest page size that fits typical mobile screens without horizontal scroll on common breakpoints.
- Combined with cursor-based pagination, the directory loads any page in roughly the same time — the 1st page and the 600th page are both single Firestore reads.

Use the **Previous** / **Next** buttons to navigate; the current position is shown above the table ("Page X of Y, showing rows A–B of N matches").

## How search ranking works

There is no fuzzy ranking — search is **explicit**. The query you type is matched against one of these fields:

- exact match on `cell_no` (numeric input)
- exact match on `cnic` (numeric input of 13 digits, dashes ignored)
- exact match on `vote_no` (numeric input)
- prefix match on `name` (text input)
- prefix match on `city` (text input)

If your query looks like a number, the directory tries the numeric-field matches first. If it looks like a word, the directory tries name and then city. There is no full-text search — substring-in-the-middle queries do not work.

## Use cases for this reference

### Auditing the masking rule

You are a privacy-conscious user who wants to confirm what the directory does and does not expose to public visitors. Read the [What you see vs what's stored](#what-you-see-vs-whats-stored) table — anything not in the "public" column is hidden from anonymous traffic.

### Building automation against the directory

The chatbot's [find-a-person quick action](./ai-legal-assistant.md#find-a-person) is the only automation surface for this dataset. The directory itself does **not** expose a public API. If you have a legitimate research use, contact the firm.

### Understanding why a field is blank

The bar voter list has many older entries that never had a phone or CNIC supplied at registration. Blanks are blanks in the source roll, not data we deliberately stripped. Re-import will fill them in if a future roll has them.

### Interpreting masking when you cannot see what you expect

If a logged-in firm client cannot see a phone number in full, that account does not have the `legal-persons-unmasked` feature permission. Ask firm staff to enable it on your account if you need full contact details.

### Checking export availability

Exports are gated behind the `legal-persons-export` feature permission. If the export button is dimmed (or shows "Export disabled"), the account does not have the permission. Admins always can export.

## Frequently asked questions

### Why is this dataset stored separately from other firm data?

Because its access patterns are very different. The bar voter list is a public, read-mostly, search-heavy dataset; firm data (cases, appointments, help requests) is private, write-heavy, and small per user. Splitting them lets the platform tune both independently — the directory uses single-field indexed equality and prefix queries on Firestore, while firm data uses richer composite queries.

### Is the data ever sold or shared with marketers?

No. The dataset is the public Punjab Bar Council roll, and the platform deliberately masks contact details for anonymous visitors so it cannot be casually scraped. Firm clients with the unmasked permission see full data inside their dashboard but the platform itself does not export to marketers.

### Can the directory be embedded on another site?

Not in v1 — there is no public embed snippet. The directory lives at `/legal-persons` on the firm's domain. If you have a use case, please contact the firm.

### How do I correct my own entry?

Contact the Punjab Bar Council. The platform mirrors the council's roll; we do not edit individual records. Once the council publishes a corrected roll, the directory picks up the change at the next import.

### How fresh is the data?

Imports happen on a manual cadence aligned with bar council publications. The directory shows a `lastUpdated` indicator on the page. As of the date on this documentation page, the most recent import was earlier in 2026; check the live page for the precise timestamp.

### Why is full-text search not supported?

Two reasons. First, the dataset is small enough that explicit field search is faster than full-text indexing for the common queries (name, council number, city). Second, full-text indexing on Firestore costs more reads per search; for a free-tier-friendly dataset, single-field queries are the right trade-off.

## Related pages

- [Find a lawyer](./find-a-lawyer.md) — the how-to for using the directory.
- [Legal persons search from the dashboard](../clients/legal-persons-search.md) — the dashboard equivalent (with export and unmasked options when permitted).
- [AI legal assistant — find-a-person quick action](./ai-legal-assistant.md#find-a-person) — fastest path into the dataset from a chat context.
