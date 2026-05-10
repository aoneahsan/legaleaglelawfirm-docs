# Legal Eagle Law Firm — Public Documentation

Live: **[docs.legaleaglelaws.com](https://docs.legaleaglelaws.com)** · **[legaleaglelaws-docs.aoneahsan.com](https://legaleaglelaws-docs.aoneahsan.com)** · **[aoneahsan.github.io/legaleaglelawfirm-docs](https://aoneahsan.github.io/legaleaglelawfirm-docs)**

This repository hosts the **public, openly licensed documentation** for the Legal Eagle Law Firm platform — a modern legal services site for the firm of *Advocate Maaz Ahmed Warriach* (Lahore, Pakistan) and a multi-tenant **practice-management SaaS** for other lawyers.

The application source itself is in a private repository. This documentation is intentionally split out so it can be:

1. **Public, indexable by search engines and AI crawlers** (Google, Bing, ChatGPT, Claude, Perplexity, Gemini)
2. **Versioned independently** of the application
3. **Easy to contribute corrections to** without exposing the application source

## What's documented

- **End-user docs** — Visitors looking for a lawyer, firm clients on the dashboard, lawyers using the SaaS workspace, mobile app users.
- **Admin / staff docs** — Firm staff using the admin panel: blog editor, comment moderation, plan management, user roles, feature permissions, calendar account, chatbot tuning.
- **Architecture & "how it works"** — Public-safe overview of the tech stack, data privacy posture, court-sync architecture, AI fallback chain, and integration points. No secrets, no internal endpoints.

## Stack

[Docusaurus 3.10](https://docusaurus.io) · TypeScript · React 19 · MDX · Mermaid diagrams · `@docusaurus/faster` (Rspack) · `@docusaurus/plugin-ideal-image`.

## Local development

```bash
yarn install
yarn start              # http://localhost:3000  (Docusaurus default)
yarn build              # production build → build/
yarn typecheck          # TypeScript check
yarn serve              # serve build/ locally
```

## Deployment

**Three targets ship from one source of truth:**

| Target | URL | Trigger |
|---|---|---|
| Firebase Hosting (firm domain) | https://docs.legaleaglelaws.com | `firebase deploy --only hosting:legaleaglelaws-docs` |
| Firebase Hosting (developer domain) | https://legaleaglelaws-docs.aoneahsan.com | Same Firebase site, second custom domain |
| GitHub Pages | https://aoneahsan.github.io/legaleaglelawfirm-docs | Auto-deploy on push to `main` via `.github/workflows/deploy-pages.yml` |

GitHub Pages gives the documentation independent search visibility on a high-DR domain (`github.io`); Firebase Hosting carries the brand domains.

## Contributing

This is a **public, openly licensed (CC BY 4.0) documentation repository**. Spotting an inaccuracy or have a clearer way to phrase something? Open an issue or pull request.

## Author & maintainer

Built and maintained by **Ahsan Mahmood**.

- Portfolio: [aoneahsan.com](https://aoneahsan.com)
- LinkedIn: [linkedin.com/in/aoneahsan](https://linkedin.com/in/aoneahsan)
- Email: [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com)
- WhatsApp: [+92 304 661 9706](https://wa.me/923046619706)
- GitHub: [github.com/aoneahsan](https://github.com/aoneahsan)
- npm: [npmjs.com/~aoneahsan](https://www.npmjs.com/~aoneahsan)

If this work is useful and you'd like to support continued maintenance: **[aoneahsan.com/payment?project-id=legaleaglelawfirm](https://aoneahsan.com/payment?project-id=legaleaglelawfirm&project-identifier=com.legaleaglelaws.app)**.

## License

Documentation content (`/docs`, `/blog`, MDX files) is licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

Site code (Docusaurus configuration, custom React components, CSS) is licensed under the MIT License — see `LICENSE-CODE`.

The Legal Eagle Law Firm name, logos, and brand assets remain trademarks of *Advocate Maaz Ahmed Warriach* and are not covered by these licenses.
