---
title: Legal persons search inside the dashboard
description: Searching the bar voter directory from the firm-client dashboard, with optional unmasked contact details and CSV export when permitted.
sidebar_position: 6
sidebar_label: Legal persons search
slug: /user-guide/clients/legal-persons-search
keywords:
  - bar voter search dashboard
  - unmasked lawyer contact
  - legal persons csv export
  - punjab bar council search
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
---

# Legal persons search (from the dashboard)

The **Legal persons** section at [legaleaglelaws.com/dashboard/legal-persons](https://legaleaglelaws.com/dashboard/legal-persons) is the firm-client view of the Punjab Bar Council voter directory. It is the same dataset as the [public lawyer directory](../visitors/find-a-lawyer.md), wired into the dashboard for quick access while you're already signed in. Two things change vs the public version: contact details may be unmasked, and an export to CSV may be available — both depend on per-account feature permissions set by firm staff.

## Why use the dashboard version

- **Unmasked contact details** — if the firm has granted the *legal-persons-unmasked* feature on your account, you see full phone numbers and CNIC instead of last-four-digit masking.
- **CSV export** — if the firm has granted the *legal-persons-export* feature, you can download search results as a CSV.
- **Higher rate limits** — signed-in clients get 200 directory queries per day (vs 100 for anonymous visitors).
- **Stays inside the dashboard chrome** — no jump to the public site, theme follows your customiser, navigation stays consistent.

If neither feature is granted on your account, the data you see is identical to the public directory; only the location and rate limit differ.

## How search works

Same field-aware search as the public version:

- **Name** — prefix match.
- **Father / relation** — partial match.
- **Cell number** — exact numeric match.
- **CNIC** — exact 13-digit match (dashes ignored).
- **Vote / council number** — exact numeric match.
- **City** — prefix match.

Results are paginated 20 rows at a time. Use **Previous** and **Next** to navigate.

The search is **bounded** — there is no "load all" mode. The dataset is approximately 15,700 rows and bulk-loading would be wasteful on slow connections; pagination keeps response times consistent.

## Unmasked contact details

If your account has the *legal-persons-unmasked* feature:

- Cell numbers display in full: `+92 300 1234567`.
- CNIC displays in full: `35202-1234567-1`.
- The masking is removed across all results — list view, detail view, and any export.

If your account does not have the feature, you see the masked format:

- Cell: `+92 ●●● ●●● ●1234`
- CNIC: `●●●●●-●●●●●●●-●1234`

Unmasking is granted by firm staff on a per-account basis. Ask info@legaleaglelaws.com if you have a legitimate reason to need it (active matter that requires reaching counsel, due diligence on a contract, etc.).

## CSV export

If your account has the *legal-persons-export* feature, an **Export results** button appears above the table. Clicking it downloads a CSV containing every row in your **current search result set** (across pages).

The CSV columns mirror the table — name, father / relation, cell, CNIC, council number, city. If your account does not have the unmasked feature, contact fields export as the masked format.

The export is bounded — the system caps a single export at the result set of a single search. There is no "export the entire 15 700-row directory" function for clients in v1.

## Use cases

### Verifying counsel before a meeting

Search the opposing counsel's name in the directory before a hearing or settlement meeting. Confirm the council number, registered city, and contact. Takes ten seconds.

### Building a contact list of advocates in a city

You're working on a multi-party matter and want a list of advocates in Multan to consult with. Search by city, page through the results, and (if you have export) save the list as CSV for offline reference.

### Cross-checking a notice

A notice you received cites the opposing advocate's council number. Paste the number into the search bar; you'll get the registered details and can verify the lawyer named is the same person at the council number.

### Looking up a former counsel's current contact

You used a particular advocate years ago and want their current details. Search by name and city; the directory returns the most recent published roll's entry.

### Researching a specialist in a region

If you want a senior advocate in Lahore for a constitutional matter, search by city. The directory does not annotate specialism (the bar council roll does not have a specialism column), but you can build a shortlist and contact each.

## Limitations

- **Coverage is Punjab Bar Council only.** Other provincial bars are not in the dataset.
- **No specialism field.** The bar voter list does not record a lawyer's areas of practice; the directory therefore cannot filter by specialism.
- **Export is per-search, not per-database.** A single export covers your current result set, not the full directory.
- **Unmasked / export are gated.** Feature permissions are decided by firm staff. The platform deliberately does not let clients self-grant.
- **Daily rate limit applies** even for permitted accounts. If you hit it, wait until UTC midnight.

## Frequently asked questions

### How do I get the unmasked feature on my account?

Email info@legaleaglelaws.com with the matter or use case requiring it. Firm staff decide. The feature is not blanket-enabled.

### Can my colleague export, even if I cannot?

Each account has its own permissions. If your colleague's account has the export feature and yours does not, only theirs can export.

### Where does the data come from?

The Punjab Bar Council voter rolls. Imports happen periodically when the council publishes new rolls. The directory is **not** affiliated with the Punjab Bar Council; it mirrors public data for searchability.

### Does the firm see what I'm searching?

The platform's logs include rate-limit counters by account but not the search query content. Searches are not surfaced to firm staff.

### Why does the search take longer for some queries?

Numeric exact-match queries (cell, CNIC, council number) are essentially instant. Prefix queries on text fields (name, city) take a touch longer because they read a small range from a Firestore index. Both are well under one second on normal connections.

### Can I save a search?

Not natively in v1. The search query is preserved in the URL, so you can bookmark a specific search.

### What happens to exports when the feature is later removed?

Exports already on your device stay there — they're files. Future export attempts after the feature is removed will be blocked at the platform level.

## Related pages

- [Find a lawyer (public)](../visitors/find-a-lawyer.md) — the same dataset for anonymous visitors.
- [Legal persons directory reference](../visitors/legal-persons-directory.md) — full schema and masking rules.
- [AI legal assistant — find-a-person quick action](../visitors/ai-legal-assistant.md#find-a-person) — the chat-based quick path.
