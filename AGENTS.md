# Legal Eagle Law Firm — Docs (AGENTS.md)

**Last Updated**: 2026-05-29

> Mirror of `CLAUDE.md`. Keep both in sync — update one, update the other.

Public, openly-licensed (CC BY 4.0) **documentation site** for the Legal Eagle Law Firm platform
(parent app: `com.legaleaglelaws.app`, https://legaleaglelaws.com — a private-source React 19 +
Capacitor 8 legal-services platform + lawyer practice-management SaaS for Pakistan).

This repo contains ONLY the docs. The application source is private (separate repo `legaleaglelawfirm`).
The split is intentional: a fast static openly-licensed Docusaurus site indexes far better in Google/Bing
and AI answer engines than a heavy SPA, and ships rich per-page schema without exposing app code.

## Task Speed Over Docs (IRON-SOLID — BEHAVIORAL)

Finish the real task fast + correctly FIRST; docs/trackers/sync are a footnote (≤~20% of effort) — never let recording outpace the fix. HARD STOP when doc work outpaces the change → ship, then ONE line if anything. No new summary/status/completion files unless asked; edit/delete over add; delete stale docs. Full rule: `~/.claude/CLAUDE.md`. (Est. 2026-06-19)

---

## What this is

- **Stack**: Docusaurus 3.10.1 · React 19 · TypeScript 6 · MDX 3 · Mermaid · `@docusaurus/faster` (Rspack) · Yarn 4.14.1 · Node ≥20.
- **Content today**: 29 Markdown doc pages (User Guide, Admin Guide, Architecture) + 1 blog post + 1 custom React landing page.
- **Live URLs** (3 deploy targets, one source):
  - Firebase Hosting (firm): https://docs.legaleaglelaws.com
  - Firebase Hosting (developer): https://legaleaglelaws-docs.aoneahsan.com
  - GitHub Pages: https://aoneahsan.github.io/legaleaglelawfirm-docs
- **License**: docs CC BY 4.0; site code MIT (`LICENSE-CODE` referenced in README but **no LICENSE files on disk yet**).
- **AEO infra present**: `static/robots.txt` (AI-bot allowlist + `Sitemap:`), `static/llms.txt`, site-wide JSON-LD (Organization + WebSite + Person) in `headTags`.

---

## Build / dev commands

```bash
yarn install
yarn start      # DO NOT run autonomously (user runs servers)
yarn build      # production build → build/
yarn typecheck  # tsc (PASSES clean as of 2026-05-29)
yarn serve
```

### KNOWN BUILD BLOCKER (workspace-level, NOT this project) — 2026-05-29

`yarn build` FAILS at the eager git-info phase (`@docusaurus/utils vcsGitEager.js` →
`getGitAllRepoRoots` → `git submodule status`) with
`fatal: no submodule mapping found in .gitmodules for path '<project>'`.

Root cause: the **parent meta-repo** `/home/ahsan/Documents/01-code` has 35 project dirs registered as
gitlinks (mode 160000) in its index but **no `.gitmodules`** mapping them, so `git submodule status`
aborts. Docusaurus runs that command for any project nested in that meta-repo (powers `showLastUpdate*`,
and runs unconditionally under `@docusaurus/faster`). Affects EVERY Docusaurus project in the workspace.

- This project's code is sound: `yarn typecheck` clean; Docusaurus renders the full site to HTML
  (`build/` with `index.html`, `404.html`, `blog.html`, `assets/`) before the git step throws.
- Fix at the **workspace level** (main agent): add a `.gitmodules` to the meta-repo, or `git rm --cached`
  the stray gitlinks. Do NOT disable `showLastUpdate*` in this project (no longer skips the walk under faster).

---

## Portfolio Info File — Weekly Update Rule
- Canonical portfolio info file: `/home/ahsan/Documents/ahsan-notebook/static/assets/personal/projects-info-as-portfolio-item/apps/LEGAL-EAGLE-LAW-FIRM-DOCS_portfolio-info_<YYYY-MM-DD>.md`
- Update at least once per week (and on any material change). Keep the last-updated date in the filename.
- Keep a max-10-entry update history inside the file. On each refresh: prepend today's row, delete the previous dated file, write the new one.
- Tracker: `/home/ahsan/Documents/01-code/docs/tracking/portfolio-info-files-update-tracker.json`
- Last applied: 2026-05-29

## Package Manager Hierarchy: nvm → npm (global) → yarn (local) (IRON-SOLID)

Three tiers, each tool ONLY for its tier — for the best, most reproducible dev results:
- **`nvm`** → install/update Node.js (which bundles `npm`): `nvm install --lts`. Use nvm to get/update `npm` itself.
- **`npm`** → ALL global packages: `npm install -g yarn` (install yarn globally if missing) + `npm install -g <pkg>` (every other global CLI).
- **`yarn`** → ALL local project work: `yarn`, `yarn add <pkg>`, `yarn add -D <pkg>` inside the project.

❌ NEVER use `npm`/`pnpm` for LOCAL installs. NEVER use `pnpm` at all. ✅ Only `yarn.lock` in the project — delete `package-lock.json` and `pnpm-lock.yaml`.

## Package Upgrades: Use `npm-check-updates`
For dependency upgrades use `npx -y npm-check-updates -u && yarn install` (latest STABLE), NOT `yarn upgrade --latest`. Full rule in global `~/.claude/CLAUDE.md`. Last applied: 2026-05-29 (all deps already current — no changes).

---

## Share Feature — Web + Mobile Contract (IRON-SOLID)

All user-facing "share" actions follow the global contract: **web** (any browser, incl. mobile web) opens an in-app `WebShareModal` — a social grid (X, Facebook, LinkedIn, WhatsApp, Telegram, Reddit, Email web-intents) + a copy-link button; **native** (Capacitor) uses the OS share sheet via `@capacitor/share`. The web-vs-native split is decided at button-click via `Capacitor.isNativePlatform()`. ❌ Never use `navigator.share` as the primary web path with a silent clipboard fallback. **Full spec: `~/.claude/rules/share-feature.md`.**

---

## Conventions
- Per-page front matter: `title`, `description`, `slug`, `keywords`, `last_update.{date,author}`.
- Honest framing: every feature page carries a "what this does NOT do" section (AEO best practice).
- No secrets / internal endpoints / Firestore paths in docs — public-safe only.
- Author / maintainer: Ahsan Mahmood — aoneahsan@gmail.com — https://aoneahsan.com.
- Firm (real-world): Legal Eagle Law Firm, Lahore — Founder Advocate Maaz Ahmed Warriach.
