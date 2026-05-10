---
title: Find a lawyer in the Punjab Bar Council directory
description: How to use the public lawyer directory at legaleaglelaws.com — search by name, council number, father/relation, or city across approximately 15,700 advocates.
sidebar_position: 1
sidebar_label: Find a lawyer
slug: /user-guide/visitors/find-a-lawyer
keywords:
  - find a lawyer pakistan
  - punjab bar council directory
  - advocate search pakistan
  - lawyer directory lahore
  - bar voter list
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
---

# Find a lawyer

The **lawyer directory** at [legaleaglelaws.com](https://legaleaglelaws.com) is a searchable index of approximately 15,700 advocates registered with the Punjab Bar Council. It is open to the public — no sign-in needed — and is the fastest way to confirm whether a person presenting themselves as a lawyer is on the bar voter list, and to find their council number, registered city, and (for verified entries) contact details.

## What this page covers

This page explains how the directory search works for **public visitors**. If you have signed in to a firm-client dashboard, the [legal persons search from the dashboard](../clients/legal-persons-search.md) page covers a few extra capabilities (export, unmasked contact details for permitted users).

## How to open the directory

1. Visit [legaleaglelaws.com](https://legaleaglelaws.com).
2. Open the main menu and choose **Find a lawyer**, or go directly to `/legal-persons`.
3. The directory page loads with a single combined search bar and a paginated table.

You do **not** need to sign in to use the public directory. Rate limits apply — see [limitations](#limitations) below.

## How search works

The search is **field-aware**. Type a query and the directory tries each searchable field in turn:

- **Name** — partial match against the advocate's full name as it appears on the bar voter list.
- **Father / relation** — partial match against the father's name or relation field.
- **Cell number** — exact match against the registered phone number, if present.
- **CNIC** — exact match against the CNIC (National ID) digits, if present.
- **Vote / council number** — exact match.
- **City** — partial match against the registered city.

The directory uses single-field Firestore queries — that is, one field at a time, indexed for ranked retrieval. There is no full-text or "search everything" mode; pick a query that matches one field well.

## Pagination

Results are returned in pages of 20 rows. Use the **Previous** and **Next** buttons under the table to navigate. The header above the table shows your position — for example, "Page 3 of 47, showing rows 41–60 of 932 matches".

The directory loads **20 rows at a time** by design. This keeps the experience fast on slow connections (the dataset is on the order of 15,700 rows, so loading the whole thing would be wasteful) and ensures search response time stays well under one second on mid-tier hardware.

## Privacy of phone and CNIC

The directory shows **masked** contact details to public visitors:

- Cell numbers are masked to the last four digits (for example, `+92 ●●● ●●● ●1234`).
- CNIC is masked to the last four digits.

Firm clients with the appropriate permission see contact details in full. The masking exists because the bar voter list is a **public roll** — published for transparency by the Punjab Bar Council — but the platform does not want to make harvesting trivial for spammers.

If you are a firm client and your account does not show full contact details, ask firm staff to enable the *unmasked legal-persons* feature on your account.

## Use cases

### Confirming a lawyer is registered

Before hiring an advocate, search their name in the directory. A registered lawyer should match exactly with a council number and registered city. If no match comes up — or the council number does not match what they have given you — that is a strong signal to ask for verification.

### Looking up your existing lawyer's details

If you have lost an advocate's contact card, search by name and city. The directory will return the council number and the masked phone. For full contact details, a firm client with the correct permission can use [the search from the dashboard](../clients/legal-persons-search.md).

### Researching a particular city's bar

If you are searching for an advocate in a specific city — say, Multan or Faisalabad — search by city alone. You will get every advocate the bar voter list shows for that city, paginated 20 at a time.

### Cross-checking a council number on a court document

Court orders and notices often quote an advocate's council number. Pasting that number into the directory returns a single match (or zero, if the number is invalid). This is the fastest way to verify the lawyer named on the document is the same person you spoke to.

### Finding an advocate by partial information

If you have only a fragment of the name — say, "Aslam Bhatti, Lahore" — type both into the search bar. The directory will narrow on name first, then by city, and return matches.

## How long the directory takes to load

A first-load search on a fresh tab takes approximately 200–600 ms depending on your connection. Subsequent searches reuse the data the page has already cached and are typically under 100 ms. Pagination is instant after the first page in a query — the directory pre-fetches the next page once you scroll the first into view.

## Limitations

- **The bar voter list is a snapshot.** It is updated periodically when the Punjab Bar Council publishes a new voter roll. The directory does not auto-refresh hourly; expect lag of weeks or months for newly enrolled advocates.
- **Coverage is Punjab Bar Council only.** Sindh, Khyber-Pakhtunkhwa, Balochistan, and Islamabad bars are not covered in v1. A future release may add them.
- **Searching is rate-limited.** Public (unauthenticated) visitors get 100 directory queries per day per IP. Firm clients get 200 per day. Admins are unlimited. The limits reset at UTC midnight.
- **No reviews, ratings, or testimonials.** The directory is the bar voter list, not a marketplace. We deliberately do not show ratings — the data does not exist on the bar council roll, and inventing it would be misleading.
- **Some entries have empty fields.** The bar voter list is not exhaustive in every column. If a phone number or CNIC was not on file when the roll was published, the cell will simply be blank.

## Frequently asked questions

### Is the data official?

The data is sourced from the Punjab Bar Council voter rolls, which are published by the council itself for transparency. The platform is not affiliated with the Punjab Bar Council — we mirror the public roll for searchability. For an official statement, contact the council.

### Is my search private?

Yes. Searches are not tied to your identity unless you are signed in. Anonymous searches are counted only by IP for rate limiting; the queries themselves are not stored against your name.

### Can I download the full list?

The export feature is available to firm clients with the *legal-persons-export* feature permission and to admins. Public visitors cannot bulk-export the directory. This is a deliberate trade-off — the public roll is meant to be searchable, not scraped.

### What if my name is wrong on the list?

The bar voter list is maintained by the Punjab Bar Council, not by Legal Eagle. To correct your details, contact the council directly. Once a corrected roll is published, the directory will pick up the change at the next import.

### Why are some phone numbers showing as `+92 ●●● ●●● ●1234`?

That is the masked format for public visitors — only the last four digits are visible. Firm clients with the *legal-persons-unmasked* feature permission see the full number. Admins always see the full number.

### Can I search by voter / council number?

Yes — paste the number into the search bar. An exact match returns a single advocate; an invalid number returns zero results. Tip: council numbers are numeric only, no spaces.

## Related pages

- [Free consultation booking](./free-consultation-booking.md) — once you've found the firm and want to talk to *Advocate Maaz Ahmed Warriach*.
- [AI legal assistant](./ai-legal-assistant.md) — for general questions about Pakistani law before hiring anyone.
- [Legal persons search from the dashboard](../clients/legal-persons-search.md) — the dashboard equivalent for firm clients (export + unmasked details).
