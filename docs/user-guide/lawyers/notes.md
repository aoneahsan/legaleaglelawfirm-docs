---
title: Notes — rich-text journal for cases, clients, and ideas
description: How the notes module at /practice/notes works — TipTap rich-text editor, linking notes to cases and contacts, autosave, search, and what each plan can store.
sidebar_position: 4
sidebar_label: Notes
slug: /user-guide/lawyers/notes
keywords:
  - lawyer notes pakistan
  - tiptap rich text legal
  - case notes practice management
  - secure legal notes
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
---

# Notes

The **Notes** section at [legaleaglelaws.com/practice/notes](https://legaleaglelaws.com/practice/notes) is the workspace's rich-text journal. Use it for case notes, client conversation logs, witness preparation, research jottings, and anything else you would otherwise scribble in a notebook. Notes are powered by [TipTap](https://tiptap.dev), the same editor underneath the rest of the modern web's serious writing tools.

## What a note is

A note is a single document with:

- **Title** — required; shown in lists and search results.
- **Body** — TipTap rich text. Headings, bold, italic, lists, ordered lists, blockquotes, code, tables, links, horizontal rules.
- **Linked case** — optional; surfaces this note in that case's Notes tab.
- **Linked contact** — optional; surfaces this note in that contact's Linked notes list.
- **Tags** — optional; free-form, comma-separated.
- **Last edited** and **created** timestamps.
- **Author** (on team plans) — the team member who created it.

A note can have either, both, or neither linked entity. A research note unrelated to any case can live without a link.

## How the list works

`/practice/notes` shows notes as a card grid by default — title, first ~120 characters of preview text, linked-case chip, linked-contact chip, last-edited date. A **List view** toggle switches to a TanStack Table layout for power users.

Above the grid sits:

- **Search** — substring across title, body, tags, linked-case title, linked-contact name. The body is matched on a normalised plaintext extraction, so you find what you read, not what TipTap stores under the hood.
- **Filter** — by linked case, linked contact, tag, or "unlinked".
- **Sort** — last edited (default), created, title.
- **Capacity indicator** — "X of Y" notes against your plan's cap.

Free tier holds 10 notes, Pro 200, Premium 2 000, Ultimate unlimited.

## Creating a note

Two paths:

1. From `/practice/notes`, click **New note**. The note is created with an empty title; you start typing. Title is autosaved on blur; the body is autosaved every 1.5 seconds while you type and on blur.
2. From a case detail page's Notes tab, click **+ New note**. Same as above, except the new note is pre-linked to that case.

There is no "Save" button on the note editor. The note is saved continuously; closing the tab does not lose data.

## The TipTap editor

The editor renders inline above your text, hiding most controls until you select something — clean by default, tools when you want them. The toolbar that pops over a selection or above an empty paragraph offers:

- **Headings** — h2, h3, h4 (h1 is reserved for the note title).
- **Inline** — bold, italic, underline, strikethrough, inline code.
- **Block** — bullet list, numbered list, blockquote, code block, table, horizontal rule.
- **Link** — paste a URL while text is selected to insert; `Cmd/Ctrl-K` on selection opens the link dialog.
- **Slash menu** — type `/` at the start of a line for a menu of block types. Same idea as Notion or Obsidian.
- **Markdown shortcuts** — `# ` for h1, `## ` for h2, `> ` for blockquote, `- ` for list, `**bold**` for bold. Inline as you type.

Keyboard shortcuts mirror what you would expect:

- `Cmd/Ctrl-B` bold, `Cmd/Ctrl-I` italic, `Cmd/Ctrl-U` underline.
- `Cmd/Ctrl-Z` undo, `Cmd/Ctrl-Shift-Z` redo.
- `Cmd/Ctrl-K` link.
- `Cmd/Ctrl-Enter` toggle a checkbox in a task list.

Tables behave well — Tab to move between cells, Enter for new row, click a column to drag-resize.

## Linking and unlinking

Each note has a *Linked case* and *Linked contact* picker in the right-side metadata panel. Type to search; pick. The link is bidirectional — the note appears on the linked entity's surface, and the entity name appears as a chip on the note.

Unlinking is one click. The note remains; only the relationship is dropped.

## Tags

Tags are free-form. Type a comma to commit a tag. Existing tags surface as suggestions. The workspace does not pre-define a taxonomy; conventions emerge as you go (`research`, `client-call`, `prep`, `outcome`, etc.). The Tags filter on the list view groups notes by tag.

## Autosave and offline behaviour

Autosave fires every 1.5 seconds while you type and on field blur. The editor also writes a local checkpoint to your browser's IndexedDB; if connectivity drops mid-sentence, the note continues to update locally and reconciles with the server when connectivity returns. Conflict resolution is last-write-wins per field; the workspace shows a banner if a conflict was detected so you can audit.

The mobile build (Capacitor) caches recent notes for full offline read; new notes created offline sync on the next connectivity window.

## Search

The toolbar search runs against a normalised plaintext extraction of the body — the search index does not contain TipTap's internal JSON, so what you typed is what you find. Substring matching, case-insensitive. Sub-100ms response on hundreds of notes; Premium and Ultimate users with thousands of notes typically see 200–400 ms.

The search is bounded to your own notes (or your team's, on a team plan). It does not search across the firm or the wider platform.

## Use cases

### Client call log

After a phone call, open a new note pre-linked to the contact. Title: "Call with [client] — [date]". Bullet list of what was discussed, who said what, agreed next actions. Tag `client-call`. The note shows up next to the contact forever.

### Hearing prep

Before a hearing, create a note linked to the case. Headings for "Statute and section", "Key arguments", "Likely opposition points", "Relief sought". Print or open on phone in court — the editor view is reading-friendly and prints cleanly.

### Research jottings

A point of law you want to remember next time it comes up. No linked case, no linked contact — just a tagged note (`research`, plus the area of law). Search by tag later.

### Witness statement summary

Witness statements are often long. Create a note linked to both the case and the witness contact. Use headings for each topic, blockquote the actual statement, bullets for cross-examination prep.

### Outcome memo

When a case closes, write a one-page memo on the matter — what worked, what did not, what the client thought. Link to the case (closed). Tag `outcome`. Future reflection material.

## Privacy and data ownership

- Notes are stored in the platform's secure database, namespaced to your account.
- The body is stored as TipTap JSON; the platform also stores a normalised plaintext for search. Both are private to you (or your team).
- The platform does **not** index your notes for any AI training, recommendation, or analytics. They are your work product.
- Deleting a note removes the document; linked-case and linked-contact references become "deleted note" placeholders in the case Timeline so the audit trail is preserved.

## Limitations

- **No images or file embeds in v1.** TipTap supports them; the workspace ships text-only for v1 to keep the storage cost predictable. Documents are uploaded to the case's Documents tab instead.
- **No collaborative editing.** Single-author per session. Two team members opening the same note will see last-write-wins reconciliation; the workspace flags the conflict.
- **No version history visible to the user in v1.** The platform retains revision history server-side for ~30 days; restoration is a support request.
- **No public sharing.** Notes do not have shareable links. They are workspace-internal.
- **Capacity caps** apply: Free 10, Pro 200, Premium 2 000, Ultimate unlimited.
- **Tag autocomplete is per-account.** No global tag library. Different lawyers naturally develop different conventions.

## Frequently asked questions

### Can I export a note?

Yes. From the editor, **More menu → Export** offers Markdown, HTML, and plain text. Free tier exports one note at a time; Pro and above unlock bulk export from the list view.

### Are my notes encrypted at rest?

The database itself is encrypted at rest by the cloud provider. Beyond that, fields with sensitive identifiers (CNIC on contacts, payment metadata on billing) get application-layer encryption; note bodies are stored as TipTap JSON without an additional encryption layer in v1.

### What happens if I lose connectivity while typing?

The editor continues to accept input and writes a local checkpoint to your browser's IndexedDB. When connectivity returns, the local state syncs with the server. The mobile build (Capacitor) handles this more aggressively than the web build.

### Can I link a note to multiple cases?

A note in v1 has one linked case and one linked contact. If you need a note to surface on multiple cases, create separate notes (you can copy-paste the body) or use tags as a soft cross-reference.

### Are notes shared with the firm or with other lawyers on the platform?

No. The Practice workspace is per-account. The firm has zero read access to your notes. Other SaaS lawyers cannot see your notes.

### What if a note gets corrupted?

Server-side revision history is retained for ~30 days and can be restored on request. Beyond 30 days, the most recent version is the only version.

### How big can a single note be?

Practical limit ~500 KB of TipTap JSON, which is roughly a 50–100 page document depending on formatting. Past that, the editor noticeably slows on lower-end hardware. For long-form work, consider splitting into multiple notes linked by tag.

## Related pages

- [Cases](./cases.md) — the most common link target for notes.
- [Contacts](./contacts.md) — the second-most-common link target.
- [Calendar](./calendar.md) — events do not host notes directly; link a note to the case the event is for.
- [Getting started](./getting-started.md) — workspace overview.

## Author

TipTap integration and this documentation built by **[Ahsan Mahmood](https://aoneahsan.com)**.
