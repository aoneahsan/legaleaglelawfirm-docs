---
title: Blog and comments — TipTap editor, drafts, scheduling, moderation
description: How firm staff publish and maintain the public blog at /blog. The TipTap editor, draft workflow, image uploads via FilesHub, categories, scheduling, and the comments moderation queue.
sidebar_position: 3
sidebar_label: Blog and comments
slug: /admin/blog-and-comments
keywords:
  - admin blog editor pakistan
  - tiptap admin law firm
  - blog comments moderation legal
  - blog scheduling admin
last_update:
  date: 2026-05-11
  author: Ahsan Mahmood
---

# Blog and comments

The firm's public blog at [legaleaglelaws.com/blog](https://legaleaglelaws.com/blog) is the main long-form surface for the firm's voice — case-law commentary, procedural primers, news takes, and thought-leadership pieces. Three admin modules drive it: **Blogs** (the post list and editor), **Blog categories** (the taxonomy), and **Blog comments** (the moderation queue). This page covers all three.

A creator can draft posts. An editor can publish anyone's post and moderate comments. A manager can delete posts. An admin can do everything plus delete comments. See [sign-in and RBAC](./sign-in-and-rbac.md) for the full matrix.

## Blogs — the post list

`/admin/blogs` is a TanStack-Table-driven list of every post the firm has ever started. Columns:

| Column | Notes |
|---|---|
| Title | The headline as published or drafted. |
| Status | Draft / Scheduled / Published / Archived. |
| Category | The single primary category. |
| Author | The Google account that last edited. |
| Published at | Empty for drafts; future for scheduled. |
| Comments | Total + pending count. |
| Last updated | Most recent save. |

A toolbar above the table provides search across title, body, and category; status filter; sort; column visibility; and the "New post" button.

The list state (search, filter, sort, page) is reflected in the URL, so a bookmarked filter restores the same view. You can copy a `/admin/blogs?status=scheduled` link to another staff member and they land on the same shortlist.

## Creating a post

**New post** opens a full-width editor at `/admin/blogs/new`. The right rail carries metadata (title, slug, category, excerpt, hero image, SEO block, publish settings); the left rail is the TipTap canvas.

### Title and slug

The title is required. The slug auto-generates from the title using kebab-case normalisation (Unicode-safe, so Urdu titles slug well too). You can edit the slug — uniqueness is enforced on save; a clash returns a clear "already taken" error and suggests an alternative.

A published slug should not change. The platform stores no automatic redirects, so renaming a slug after publish breaks inbound links. If you must rename, ask the dev team to add a redirect rule.

### Category

Posts have a single primary category, picked from the **Blog categories** module. The category drives the URL structure (`/blog/category-slug/post-slug`) and the related-posts widget on the public page. Adding a new category needs a quick visit to `/admin/blog-categories` first; it is a small administrative form (name, slug, optional description, display order).

### Excerpt

A short summary used in lists, social previews, and AI-search citations. The editor counts characters in real time; the recommended range is 140–160 characters for optimal meta-description rendering on Google and AI Overview snippets. Excerpts below 80 characters produce thin previews; above 200 get truncated.

### Hero image

Hero images upload via **FilesHub** (the platform's object-storage partner) with `visibility: 'public'`. The upload dialog accepts JPG, PNG, WebP, AVIF; rejects executables; suggests a recommended size of 1200×628 px for optimal social-card rendering. The platform stores the returned URL on the post; the bytes live in FilesHub. Replacing the image deletes the old file first to avoid orphans accumulating.

The hero is rendered with `loading="lazy"` and an `<img>` `srcset` for responsive sizing — the rendered HTML covers Lighthouse's image-best-practices automatically.

### SEO block

A collapsible *SEO* card with:

- Custom title (overrides the post title for `<title>` and Open Graph if set).
- Custom description (overrides the excerpt).
- Custom Open Graph image (overrides hero).
- Canonical URL (rare; for republished content with a primary home elsewhere).
- `noindex` toggle (almost never used; useful for draft-quality public previews).

Per-page JSON-LD (`Article` schema with `author`, `datePublished`, `dateModified`) is emitted automatically — no manual schema fields needed in v1.

## The TipTap editor

The body is a [TipTap 3](https://tiptap.dev) rich-text editor configured for the firm's content. Extensions enabled in v1:

- **StarterKit** — paragraphs, headings (h2 through h4; h1 is the post title), bold, italic, strikethrough, underline, inline code, blockquote, bullet and ordered lists, horizontal rule, hard break.
- **Link** — `Cmd/Ctrl-K` opens the URL dialog; pasted URLs over selected text become links automatically.
- **Image** — upload via FilesHub or paste from clipboard (auto-uploaded).
- **CodeBlock** — fenced code blocks with language selector.
- **Table** — drag-resizable columns; Tab navigates cells.
- **Embed** — YouTube and a small allowlist of trusted iframe providers.
- **TextAlign** — left / center / right / justify on headings and paragraphs.

The toolbar appears above an empty paragraph and as a floating bubble menu over a selection. Keyboard shortcuts mirror what writers expect (`Cmd-B`, `Cmd-I`, `Cmd-U`, `Cmd-K`, `Cmd-Z`, `Cmd-Shift-Z`). Markdown shortcuts work as you type — `# ` for h1, `## ` for h2, `> ` for blockquote, `**bold**` for bold, fence triple-backticks for code blocks.

The editor stores its output as **HTML** in the Firestore `body` field. HTML was chosen over TipTap's native JSON because the public site renders directly from the stored content; HTML survives a future migration if the editor ever changes. Sanitisation runs server-side at fetch time to guarantee only the allowed tags reach a public reader.

## Draft and publish lifecycle

A post moves through four statuses:

- **Draft** — work in progress; not visible publicly. Only the author and editors above see it.
- **Scheduled** — set a future publish date and the post auto-promotes to Published at that timestamp. The platform uses a small Cloud Scheduler equivalent (a Cloudflare cron) to flip the status; there is no need to be online when the schedule fires.
- **Published** — live at `/blog/category-slug/post-slug`. Listed on the index, included in `sitemap.xml`, fed into the RSS feed at `/feed.xml`.
- **Archived** — removed from the public index but the slug still resolves to the post (returns the content with an "archived" banner). Useful for time-sensitive content that should not appear on the index but should not 404 either.

Status transitions:

- Draft → Scheduled requires a future `publishedAt`. The editor surfaces a date picker.
- Draft → Published (or Scheduled → Published) requires editor-or-above. Creators see the **Submit for review** button instead.
- Published → Archived is editor-or-above. Published → Draft "unpublishes" but is rarely done after the first reader has arrived.

Each status transition writes an entry on the post's timeline with the actor and timestamp.

## Comments — the moderation queue

`/admin/blog-comments` lists every comment ever submitted on every post. Default filter shows **pending** comments; you can switch to approved, rejected, or all. Each row shows the blog title, commenter name, comment body, IP, submitted-at, and the action buttons.

Comments are submitted by anonymous visitors via the public blog page's comment form (name + email + body, with simple spam-resistance: honeypot field, basic rate limit per IP, profanity filter). They land in `le_blogs/{blogId}/comments` with `approved: false`, invisible to readers until moderated.

### Approving a comment

Click **Approve** on the row. The comment is set `approved: true`, becomes visible on the public post, and the commenter sees their comment when they reload. No notification email is sent (the platform has no outbound email surface in v1); the commenter discovers approval by returning.

### Rejecting a comment

Click **Reject**. The comment is set `approved: false, rejectedAt: now`. Rejected comments stay in the database for audit but are invisible to readers. If you set the filter to **rejected**, you can re-approve a hastily-rejected comment.

### Deleting a comment

**Delete** removes the comment from the database entirely. Admin and manager only (editor can approve and reject but not delete). Confirmation dialog with the post title and comment text is required before delete fires.

### Bulk moderation

The table supports multi-select. Pick several pending comments and use the bulk **Approve all selected** or **Reject all selected** actions. Useful when a long-buried post suddenly attracts a clean wave of new commentary.

## Use cases

### Drafting a procedural primer

Pick a category (say, "Procedural law"). Title: "How a bail application works in Pakistan". TipTap canvas: h2 headings for each step, numbered list inside each step, blockquote for the statutory text, code-block-style inline citation for the section number. Excerpt: a 140-character summary. Hero image: a court building. Save → preview from the action menu. Publish when satisfied.

### Scheduling an event recap

You attended a conference; you want a recap to land Monday morning at 9 AM PKT. Draft on the weekend, set status to Scheduled with the timestamp, save. The scheduler flips the status at the target time; you do not need to be online.

### Cleaning a comment backlog

If you've been away for a week and pending comments piled up: open `/admin/blog-comments?status=pending`, sort by post, multi-select genuine comments, **Approve all**. The questionable ones, multi-select, **Reject all**. Five minutes of work clears a hundred comments.

### Archiving a time-sensitive post

A post about "current rules for X" — the rules have changed. Set the post to **Archived**; visitors who arrive via Google still see the content with a banner ("This post is from an earlier rule cycle"). The post is removed from the index and feed but does not 404.

### Republishing a post on the same slug

Open the post; click **Edit**; update the body; save. The platform updates `dateModified` in the Article schema automatically. The publish date stays as the original first-publish for canonical reference. Google and AI Overviews weight `dateModified` heavily for freshness.

## Limitations

- **Single primary category per post.** Multi-category or tag taxonomy is roadmap.
- **No revision history surfaced in the UI.** TipTap stores the body as the latest version; older versions are not user-restorable in v1. The Firestore document history (30 days) is recoverable via Console access.
- **No collaborative co-editing.** Two editors opening the same post will see last-write-wins reconciliation; the platform shows a soft warning if a conflict is detected.
- **No outbound email** on comment approval, comment moderation, or new comment notifications. The platform displays the queue; you check it.
- **No AI-assisted editing** in v1. Hand-written content only; this is by design for credibility and EEAT.
- **Image uploads** must go through the FilesHub picker. Drag-and-drop into the canvas is roadmap.

## Frequently asked questions

### Can I copy a post as a template?

Yes — from the action menu on a published post, **Duplicate**. The duplicate is created as a Draft with a `-copy` suffix on the slug. Edit and rename.

### What happens to a scheduled post if I edit it before the schedule fires?

Edits are saved to the same Draft state machine. The schedule remains in place; the next thing the scheduler sees is the latest content. To cancel the schedule, change status back to Draft.

### Why does my hero image look blurry on the public page?

Hero images are best at 1200×628 px. Smaller sources get upscaled by the browser on retina displays. Re-upload at higher resolution.

### Can I add custom HTML or JavaScript?

The body field allows the HTML the editor generates. Custom `<script>` is sanitised out at fetch time for security. For embeds, use the Embed extension's allowlist (YouTube and a few others); contact the dev team to extend the allowlist for a specific provider.

### How does the AI legal assistant interact with blog content?

It does not directly. The blog and the assistant are independent surfaces. AI search engines (Google AI Overviews, ChatGPT, Perplexity) index the blog via the platform's `robots.txt` allowlist and `sitemap.xml`, so well-written posts can be cited by external AI search.

### Can I export the blog as a static export for migration?

The Firestore export of `le_blogs` is a JSON-shaped artefact. There is no one-click "export as Markdown" in v1; the dev team can write a converter on request.

### What about images that are no longer referenced?

The platform's FilesHub integration deletes the old image when you replace a hero. Inline images uploaded via the editor are not auto-cleaned in v1; a future admin tool will surface orphan files.

## Related pages

- [Admin overview](./intro.md) — sidebar map.
- [Sign-in and RBAC](./sign-in-and-rbac.md) — who can do what.
- [Chatbot tuning](./chatbot-tuning.md) — the knowledge-base curation that complements blog content.

## Author

Blog editor, moderation queue, and this documentation built by **[Ahsan Mahmood](https://aoneahsan.com)**.
