---
title: Chatbot tuning — AI provider chain, rate limits, cache review, KB curation
description: How firm staff tune the AI legal assistant — pick which LLM providers run in the fallback chain, set per-audience daily limits, review and approve cached answers, and curate the curated knowledge base.
sidebar_position: 6
sidebar_label: Chatbot tuning
slug: /admin/chatbot-tuning
keywords:
  - chatbot admin tuning pakistan
  - ai legal assistant kb curation
  - chatbot rate limits law firm
  - cache review admin legal
last_update:
  date: 2026-05-11
  author: Ahsan Mahmood
---

# Chatbot tuning

The AI legal assistant at the bottom-right of every public page on [legaleaglelaws.com](https://legaleaglelaws.com) runs a six-tier answer pipeline; firm staff with manager-or-above privileges shape it from `/admin/settings/chatbot`. Four areas to tune: the AI provider chain (which LLM answers when nothing in cache or the knowledge base does), the per-audience rate limits (so usage stays within the firm's tolerance), the cache review queue (every fresh LLM answer is human-reviewed before being served to future similar questions), and the curated knowledge base (~50 hand-written canonical answers).

This page covers all four. The visitor-facing view is on [AI legal assistant](../user-guide/visitors/ai-legal-assistant.md).

## How the answer pipeline works (a recap)

When a visitor asks a question, the chatbot worker tries six tiers in order; the first that returns a usable answer wins:

1. **IndexedDB exact match** — same browser asked the same question recently.
2. **IndexedDB fuzzy match** — same browser asked something similar offline.
3. **Firestore exact-hash** — somebody else asked it before, admin reviewed, approved.
4. **Firestore fuzzy** — similar question; only served when the admin toggle `allowFuzzyUnreviewed` is on.
5. **Curated knowledge base** — hand-written canonical entries.
6. **LLM chain** — CF Workers AI → Gemini free → Groq free → Gemini paid → Groq paid.

If every tier fails, the question is queued for a human reply and the visitor sees "a lawyer will reply" handoff.

Each tier you tune affects the chain at a different point. Cache review affects tiers 3 and 4. KB curation affects tier 5. Provider chain affects tier 6. Rate limits cap how many tier-6 calls a given audience can make per day.

## The AI provider chain

`/admin/settings/chatbot` → *AI providers* tab.

The chain is configured top-to-bottom; the worker walks the list and picks the first provider that returns a successful answer. Each provider entry has:

- **Provider name** — `cf-workers-ai`, `gemini-free`, `groq-free`, `gemini-paid`, `groq-paid`. (More can be registered in code.)
- **Enabled** toggle — temporarily disable a provider without removing it.
- **Daily budget cap** — soft limit on calls per UTC day, after which the worker skips this provider for the rest of the day.
- **System prompt** — the policy and persona prompt that wraps every user question for this provider.
- **Model parameters** — temperature, max-tokens, top-p (provider-specific names normalised in the worker).
- **Order** — drag-to-reorder; the order is the priority.

The default chain is **free-first**: Workers AI (zero cost, on-network) → Gemini free → Groq free → Gemini paid → Groq paid. The reasoning is straightforward — the free tiers serve most traffic; paid tiers are a fallback for when free providers are throttled.

### System prompt

A single textarea per provider. The default prompt establishes:

- Persona — a knowledgeable Pakistani-law assistant.
- Scope — Pakistani law only.
- Honest framing — "not legal advice" disclaimer on every answer.
- Structure — definition-first opener, structured headings where appropriate, FAQ-style answers for question-shaped queries.
- Refusal patterns — when to handoff to a human (out of scope, sensitive matters, emergency situations).

Edit with care. A bad prompt can produce off-tone or hallucinated answers across the chain. The platform retains a 30-day history of prompt edits, so a regression can be rolled back.

### Provider keys

The actual API keys live as **Cloudflare Worker secrets**, not in Firestore. The admin page never displays a key — it only shows "configured" or "not configured" for each provider. Setting or rotating a key is a `wrangler secret put` command run by the dev team. The admin UI controls the *behaviour*; the dev tooling controls the *credentials*.

## Per-audience rate limits

`/admin/settings/chatbot` → *Rate limits* tab.

Four counters apply per UTC day, each with a default per audience that admins can override:

| Counter | What it covers | Anonymous default | Auth default |
|---|---|---|---|
| `chatbotCachePerDay` | Tier 1–4 answers (cache hits) | 100 / day | 200 / day |
| `chatbotLlmPerDay` | Tier 6 answers (fresh LLM calls) | 10 / day | 30 / day |
| `chatbotFindPerDay` | Find-a-person quick action | 100 / day | 200 / day |
| `chatbotSectionPerDay` | Search-a-section quick action | 10 / day | 30 / day |

Admins are exempt from all four. Per-user overrides on `/admin/users` take precedence over these defaults.

Why separate counters: tier-6 calls are the expensive ones (LLM tokens cost money). Cache hits are nearly free. Find-a-person hits a separate Firestore read path. Section search uses a specialised Workers AI prompt. Each kind has different cost dynamics and is rate-limited independently.

### Adjusting limits

Edit any field; press Save. The change writes to `le_chatbot_settings/defaults` and is picked up by the worker on its next request. Existing in-flight counters are not reset; you cannot retroactively un-block a user who has already hit the cap today.

To temporarily bump a single user's limit (for example, a friendly journalist needing 100 LLM calls for an article), use the per-user override in `/admin/users` rather than raising the global default.

## Cache review

`/admin/settings/chatbot` → *Cache review* tab.

Every tier-6 LLM answer the worker generates is written to `le_chatbot_cache` with `reviewed: false`. Until an admin reviews, the answer is served only on **exact-hash** match (somebody asking the *exact* same question). Fuzzy matches require either reviewed approval or the `allowFuzzyUnreviewed` toggle.

The review queue is a table:

| Column | Notes |
|---|---|
| Question | The visitor's wording. |
| Answer | The LLM's response. |
| Provider + model | Which LLM produced this. |
| Asked-at | Most recent timestamp. |
| Asked-count | How many distinct users have asked this. |
| Status | Pending / approved / rejected / edited. |

Click a row to open the editor pane:

- **Approve** — set `reviewed: true, status: 'approved'`. The answer is now served to similar questions (exact + fuzzy).
- **Edit then Approve** — open the answer in a small text editor, refine, save. The edited version is stored and served; the original LLM response is retained for audit.
- **Reject** — set `status: 'rejected'`. The answer is never served again. The next time someone asks the same question, the worker falls through to the LLM chain again (which may produce a better answer if the system prompt has been improved).

The toggle `allowFuzzyUnreviewed` at the top of the tab controls whether unreviewed answers are served on fuzzy matches. Default is off (conservative). Turn it on for a higher hit rate at the cost of occasionally serving unreviewed content; turn it off for stricter quality.

### Pace yourself

The review queue grows organically. The firm's pattern in pilot months: triage daily (5–10 minutes), reviewing the highest asked-count rows first. Don't try to clear the queue end-to-end at once.

## Curated knowledge base

`/admin/chatbot/knowledge` — a separate admin module (not under settings).

Each entry is a manually-authored Q&A pair with:

- **Topic** — short identifier (e.g., `bail-application-process`).
- **Question** — the canonical phrasing.
- **Question variants** — alternate phrasings for fuzzy match.
- **Answer** — the canonical response (Markdown supported).
- **Tags** — for filtering inside the admin and downstream linking.
- **Link title + URL** — optional follow-up link (e.g., the relevant blog post).
- **Active** — toggle to retire an entry without deleting.

The chatbot's tier 5 walks active KB entries on every miss; matches by topic, exact question, or variant. Returns the canonical answer instantly without hitting an LLM.

### How to write a good KB entry

- **Definition-first.** The first sentence is a literal definition. AI search engines and the chatbot's own pipeline both extract the first sentence as the answer block.
- **Concrete, not generic.** Pakistani-law specifics — section numbers, court names, real procedures.
- **Bounded scope.** One topic per entry. Cross-link with the *Link* field rather than packing multiple topics into one answer.
- **Honest limits.** Note what the topic does **not** cover. Always include a "not legal advice" line if the answer might be acted on directly.
- **Time-bounded.** If the answer depends on a date or rule version, say so. Stale entries get retired.

The KB is ~50 entries in v1 — small, curated, high quality. A bigger KB is fine if every entry stays high quality; quality drives citation share more than quantity.

## Use cases

### Adjusting the system prompt after a tone-off incident

Open *AI providers* → Gemini free → edit system prompt. Add a clear instruction about the firm's voice. Save. Watch new answers in the review queue over the next day; if tone has normalised, leave the prompt; if not, refine further.

### Reducing free-tier LLM usage after a billing spike

Open *Rate limits*. Drop `chatbotLlmPerDay` for anonymous visitors from 10 to 5. Visitors hit the cap sooner; cache hits and KB serve more traffic. Monitor for a week.

### Building out KB on a hot topic

A new statute has dropped; visitors keep asking about it. Write 5–10 KB entries covering the most common angles. Watch tier 5 hit rate increase; tier 6 LLM volume decrease for those questions.

### Cleaning up the cache after a parser change

A prior prompt produced 50 mediocre answers. New prompt is better. Filter the cache by *Provider + model* and the old prompt's date; bulk-reject. Tier 6 regenerates with the new prompt the next time those questions come up.

### Temporarily disabling a paid provider during a quota issue

Open *AI providers* → Gemini paid → toggle off. The chain skips it. Re-enable when the quota issue resolves.

## Limitations

- **No A/B testing on system prompts.** Edits are immediate and global. Compare via review-queue inspection across periods.
- **No per-tier metrics dashboard.** The platform stores tier-hit logs; a UI dashboard is roadmap.
- **No automated quality scoring on cached answers.** Review is manual.
- **No model fine-tuning** in v1. The system prompt is the only steering mechanism on top of provider-default models.
- **Find-a-person and Search-a-section use distinct provider settings**, not the same chain. Tuning the chain affects free-form chat only.
- **KB entries do not auto-expire.** Time-bounded entries need manual retirement.

## Frequently asked questions

### How are LLM provider keys protected?

Stored as Cloudflare Worker secrets; never in Firestore; never in any client bundle. The admin UI shows "configured" / "not configured" but cannot read the value. Rotation is a developer-side `wrangler secret put` command.

### What happens when every LLM provider in the chain is throttled?

The visitor sees the "a lawyer will reply" handoff message. The question is queued for human follow-up. No silent failure.

### Why are find-a-person and search-a-section limits separate?

They hit different code paths with different cost dynamics. Find-a-person is a Firestore read, free at our scale. Search-a-section is an LLM call with a specialised system prompt. Separate limits let admins tune them independently.

### Can I see which provider answered a specific cached entry?

Yes — the *Cache review* table shows provider + model + model version on every row.

### Should I edit an approved cached answer or reject and re-ask?

Edit if the change is small. Reject if the answer is fundamentally off — the LLM will produce a new attempt next time the question arrives.

### How do I roll back a bad system prompt?

The platform retains 30 days of `le_chatbot_settings/defaults` history. From the developer side, the previous version can be restored. A UI "restore prior prompt" button is roadmap.

### Can I export the entire KB?

JSON export is available from the *Knowledge base* module's action menu (admin only). CSV export is roadmap.

### Does the chatbot worker call providers from Pakistan?

The worker runs on Cloudflare's global network and routes to the geographically nearest provider edge. Latency from Pakistani visitors typically lands at 200–500 ms for tier 6 calls; tiers 1–5 are sub-100 ms.

## Related pages

- [AI legal assistant (visitor-facing)](../user-guide/visitors/ai-legal-assistant.md) — what visitors see.
- [Admin overview](./intro.md) — sidebar map.
- [Plan and user management](./plan-and-user-management.md) — per-user rate-limit overrides.

## Author

Chatbot worker, provider chain, KB system, and this documentation built by **[Ahsan Mahmood](https://aoneahsan.com)**.
