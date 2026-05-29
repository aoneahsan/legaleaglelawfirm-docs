# Legal Eagle Law Firm — Docs (CLAUDE.md)

**Last Updated**: 2026-05-29

Public, openly-licensed (CC BY 4.0) **documentation site** for the Legal Eagle Law Firm platform
(parent app: `com.legaleaglelaws.app`, https://legaleaglelaws.com — a private-source React 19 +
Capacitor 8 legal-services platform + lawyer practice-management SaaS for Pakistan).

This repo contains ONLY the docs. The application source is private and lives in a separate repo
(`legaleaglelawfirm`). The split is intentional: a fast, static, openly-licensed Docusaurus site
indexes far better in Google/Bing and AI answer engines than a heavy SPA, and it ships rich per-page
schema without exposing proprietary app code.

---

## What this is

- **Stack**: Docusaurus 3.10.1 · React 19 · TypeScript 6 · MDX 3 · Mermaid diagrams · `@docusaurus/faster` (Rspack) · Yarn 4.14.1 · Node ≥20.
- **Content today**: 29 Markdown doc pages (User Guide, Admin Guide, Architecture) + 1 blog post + 1 custom React landing page (`src/pages/index.tsx`).
- **Live URLs** (3 deploy targets, one source):
  - Firebase Hosting (firm domain): https://docs.legaleaglelaws.com
  - Firebase Hosting (developer domain): https://legaleaglelaws-docs.aoneahsan.com
  - GitHub Pages: https://aoneahsan.github.io/legaleaglelawfirm-docs
- **License**: docs content CC BY 4.0; site code MIT (`LICENSE-CODE` referenced in README but **no LICENSE files exist on disk yet** — add them).
- **AEO infra present**: `static/robots.txt` (AI-bot allowlist + `Sitemap:` directive), `static/llms.txt` (llmstxt.org format), site-wide JSON-LD (Organization + WebSite + Person/founder) via `headTags`.

---

## Build / dev commands

```bash
yarn install         # deps (Yarn 4 / Berry)
yarn start           # dev server — DO NOT run autonomously (user runs servers)
yarn build           # production build → build/
yarn typecheck       # tsc (PASSES clean as of 2026-05-29)
yarn serve           # serve build/ locally
```

### KNOWN BUILD BLOCKER (workspace-level, NOT this project) — 2026-05-29

`yarn build` currently FAILS at the eager git-info phase (`@docusaurus/utils vcsGitEager.js` →
`getGitAllRepoRoots` → `git submodule status`) with:

```
fatal: no submodule mapping found in .gitmodules for path '<project>'
```

Root cause: the **parent meta-repo** `/home/ahsan/Documents/01-code` has 35 project directories
registered as gitlinks (mode 160000) in its index but has **no `.gitmodules`** mapping any of them,
so `git submodule status` aborts. Docusaurus invokes that command (to power `showLastUpdateTime` /
`showLastUpdateAuthor`, and unconditionally under `@docusaurus/faster`) for any project nested inside
that meta-repo. This affects EVERY Docusaurus project in the workspace equally.

- This project's own code is sound: `yarn typecheck` is clean and Docusaurus renders the full site to
  HTML (a complete `build/` with `index.html`, `404.html`, `blog.html`, `assets/` is produced) before
  the git-info step throws.
- Fix belongs at the **workspace level** (main agent), e.g. add a `.gitmodules` to the meta-repo with
  the 35 mappings, or `git rm --cached` the stray gitlinks. Do NOT "fix" it inside this project by
  disabling `showLastUpdate*` (that no longer skips the git walk under `@docusaurus/faster`).

---

## Portfolio Info File — Weekly Update Rule
- Canonical portfolio info file: `/home/ahsan/Documents/ahsan-notebook/static/assets/personal/projects-info-as-portfolio-item/apps/LEGAL-EAGLE-LAW-FIRM-DOCS_portfolio-info_<YYYY-MM-DD>.md`
- Update at least once per week (and on any material change). Keep the last-updated date in the filename.
- Keep a max-10-entry update history inside the file. On each refresh: prepend today's row, delete the previous dated file, write the new one.
- Tracker: `/home/ahsan/Documents/01-code/docs/tracking/portfolio-info-files-update-tracker.json`
- Last applied: 2026-05-29

## Package Upgrades: Use `npm-check-updates`
For dependency upgrades use `npx -y npm-check-updates -u && yarn install` (latest STABLE), NOT `yarn upgrade --latest`. Full rule in global `~/.claude/CLAUDE.md`. Last applied: 2026-05-29 (all deps already current — no changes).

---

## Conventions
- Per-page front matter: `title`, `description`, `slug`, `keywords`, `last_update.{date,author}`.
- Honest framing: every feature page should carry a "what this does NOT do" section (AEO best practice).
- No secrets, no internal endpoints, no Firestore collection paths in docs — public-safe only.
- Author / maintainer: Ahsan Mahmood — aoneahsan@gmail.com — https://aoneahsan.com.
- Firm (real-world): Legal Eagle Law Firm, Lahore — Founder Advocate Maaz Ahmed Warriach.
