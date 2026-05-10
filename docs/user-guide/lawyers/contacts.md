---
title: Contacts — clients, opposing parties, witnesses, expert advocates
description: How the contacts list works in the SaaS lawyer workspace at /practice/contacts. Creating and editing contacts, linking them to cases, and what each tier can store.
sidebar_position: 2
sidebar_label: Contacts
slug: /user-guide/lawyers/contacts
keywords:
  - lawyer crm contacts pakistan
  - client management law firm
  - case parties tracking
  - legal eagle practice contacts
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
---

# Contacts

The **Contacts** section at [legaleaglelaws.com/practice/contacts](https://legaleaglelaws.com/practice/contacts) is your address book inside the Practice workspace. Every person who shows up in your matters — clients, opposing parties, witnesses, expert advocates, court staff — lives here. Contacts are then linked to cases, notes, and calendar events so the same person doesn't have to be re-typed every time their name comes up.

## What a contact is

A contact is a single record with these fields:

| Field | Required | Notes |
|---|---|---|
| Full name | yes | The display name across the workspace. |
| Role | yes | Client, opposing party, witness, expert advocate, court staff, other. |
| Phone / WhatsApp | optional | Stored verbatim; the workspace does not validate format. |
| Email | optional | |
| CNIC | optional | National identity number; stored encrypted at rest. |
| Address | optional | Free-form or structured (auto-completed via Google Places when configured). |
| Practice areas relevant to this contact | optional | Tags from the same taxonomy as cases. |
| Notes | optional | Short biographical or relationship notes. |
| Linked cases | derived | Auto-populated when you link this contact to a case. |
| Linked notes | derived | Auto-populated when you link a note to this contact. |

Roles drive a few small UX touches — opposing-party contacts are visually flagged in the case detail timeline so you don't accidentally call them; client contacts get a "billing client" toggle if you use the (planned) billing module.

## How the list works

Contacts are rendered in a [TanStack Table](https://tanstack.com/table) with the same primitive every list in the workspace uses:

- Toolbar search across name, phone, email, CNIC, role, and notes (lowercase substring; ~5–10 ms per keystroke even at thousands of rows).
- Column visibility toggle.
- Sort by any column.
- Pagination (default 50 rows; configurable to 25 / 50 / 100).
- URL-state sync — the search query, sort, and page are reflected in the URL so a bookmark restores the same view.

Above the table sits **Add contact**, **Bulk import** (CSV), and an "X of Y" capacity indicator showing your contact count against your plan's cap.

## Creating a contact

Click **Add contact**. The form is short:

1. Pick a role from the dropdown.
2. Type the name.
3. Optionally add phone, email, CNIC, address, and notes.
4. Save.

Validation is light — the only required fields are name and role. CNIC, when supplied, is normalised to digits-only on save and stored encrypted; you see it formatted as `35202-1234567-1` on read. The workspace does **not** block you from adding the same name twice (people share names); a soft warning appears if a name + phone combination already exists.

If your account is at capacity, the **Save** button is disabled with an inline upgrade card. Free tier holds 20 contacts, Pro 200, Premium 2 000, Ultimate 20 000. The numbers are deliberately generous on the upper tiers — most practices never hit the cap.

## Editing a contact

Click a row to open the contact detail page. Every field except role is editable in place. Role can be changed but the workspace asks for confirmation if linked cases would semantically conflict (a contact linked as "client" on three cases switching to "opposing party" is allowed but flagged so you can audit).

Edits are saved on field blur with optimistic UI; you do not need a "Save" button at the top of the page.

## Bulk import

If you are coming from a spreadsheet, the **Bulk import** dialog accepts a CSV with one row per contact:

```
name,role,phone,email,cnic,address,practiceAreas,notes
Aslam Bhatti,client,+923001234567,aslam@example.com,3520212345671,,civil;tax,Long-time client
Imran Khan,opposing-party,,,,,,,,
```

The first row is the header. Roles must match the dropdown values (client, opposing-party, witness, expert-advocate, court-staff, other). Practice-area tags are semicolon-separated. Empty cells are tolerated. The dialog previews the first ten rows so you can spot mapping errors before committing.

Imports are bounded by your plan capacity. If you upload 5 000 contacts on a Pro plan (cap 200), the dialog imports the first 200 and tells you which rows were skipped; nothing fails silently.

## Linking contacts to cases

From the **case detail page**, the *Parties* card has an **Add party** action. Type to search across your contacts; pick one; choose their role on this case (client, opposing party, witness, etc.). The link is bidirectional — the case appears in the contact's *Linked cases* list automatically.

A single contact can be linked to many cases. A single case can have many contacts. Removing a link from one side removes it from both; the contact and case themselves are unaffected.

## Linking contacts to notes

A note can name a primary contact (in addition to a primary case). The note then appears in that contact's *Linked notes* list. Useful for client conversation logs, witness preparation memos, expert-advocate consultation notes.

## Use cases

### Onboarding a new client

When a client engages you, create the contact first. Then create the case and link the client as a party. Future hearings, notes, and files all point back through the case to the client without re-typing.

### Tracking opposing counsel

The opposing advocate on a matter is a contact like any other — role *expert-advocate* (or *opposing-party* if you treat them as such). Their contact details surface every time you open a case they are on. When the same opposing counsel appears on a future matter, link them again — the contact is reused.

### Building a client relationship history

A long-standing client likely shows up on many matters over the years. The contact's *Linked cases* list is a chronological history of every matter you have done for them. A glance tells you scope and recency.

### Witness logistics

Witnesses on a case need names, phones, addresses for notice, and short biographical notes. The contact form covers all of that. Link the witness as a party on the case and your case-detail page surfaces them at the top.

### Practice-wide rolodex

You can search contacts globally without going through a case. The toolbar search at `/practice/contacts` filters across every field; finding a phone number from three years ago takes a couple of keystrokes.

## Privacy and data ownership

- Contacts are stored in the platform's secure database, namespaced to your account. Other lawyers on the platform cannot read your contacts.
- CNIC is encrypted at rest using AES-GCM. Only your authenticated session decrypts it; the platform's logs never contain CNIC values.
- Phone numbers and emails are stored as-is. The workspace does not send marketing email; communications you send happen through whatever channel you prefer (your own email client, WhatsApp, phone).
- Deleting a contact removes the record but does **not** remove links from cases — those become "deleted contact" placeholders. This is deliberate; cases keep their party history. To completely scrub, archive the case as well.

## Limitations

- **No social-profile auto-enrichment.** The workspace does not fetch LinkedIn or any other profile for a contact. You enter the data; the workspace stores it.
- **No automatic deduplication.** A soft warning shows when a name + phone exact-match already exists, but two contacts with the same name and different phones are allowed (and frequently correct).
- **No tags / custom fields beyond the schema.** The fields above are the schema. If you need custom fields, the closest workaround is the *Notes* field.
- **No phone formatting normalisation.** What you type is what is stored. International prefixes are your responsibility.
- **CSV import is one-shot.** You cannot resume a partial import. The dialog is bounded by capacity, so a single import always either fits or is truncated with a clear report.

## Frequently asked questions

### Can I share a contact with another lawyer on a team plan?

On a team plan, contacts are scoped to the team workspace, not the individual member. Every team member sees every contact. There is no per-member contact privacy in v1.

### How do I delete a contact?

From the contact detail page, **More menu → Delete**. The workspace asks for confirmation. Linked cases retain the link as a "deleted contact" placeholder. To restore, you have to re-create the contact from your records; deletes are not soft-restorable in v1.

### Can I export my contacts?

Yes — the **Export** button on the list page downloads a CSV of your current view (filters and search applied). Pro and above unlock unfiltered export.

### What if I have ten thousand contacts in another system?

Ultimate's cap is 20 000 contacts; Premium is 2 000. If you are above 2 000, plan for Ultimate. If your existing system has *only* names with no phone or email, ask whether all of them are still relevant — the workspace is a working rolodex, not an archive.

### Are contacts pre-validated against the bar voter list?

No. The bar voter list is a separate dataset (the [legal persons directory](../visitors/legal-persons-directory.md)). You can manually look up a name in the directory and copy details over, but the contact form is independent.

### Can I attach files to a contact?

Files are attached to **cases** in v1, not directly to contacts. A contact's files are surfaced through their linked cases. This keeps files anchored to a specific matter — auditable, scoped, and easy to clean up.

### What happens if my plan downgrades and I'm over the contact cap?

You keep all contacts; the workspace shows an "over the cap" warning and disables creating new contacts until you are under cap (by archiving or upgrading). No data is deleted on downgrade.

## Related pages

- [Cases](./cases.md) — link contacts as parties.
- [Notes](./notes.md) — link contacts to notes.
- [Calendar](./calendar.md) — invite contacts to events you create.
- [Getting started](./getting-started.md) — back to the overview.

## Author

Built and maintained by **[Ahsan Mahmood](https://aoneahsan.com)**.
