# Website Starter Kit — System Design

**Version:** 1.0.0  
**Status:** Approved baseline for MVP  
**Updated:** 2026-10-18  
**Purpose:** Reusable, fast, accessible and customizable foundation for landing pages, portfolios and institutional websites.

## 1. Product scope

The Website Starter Kit is a **code-first starter repository**, not a visual website builder or hosted SaaS. Each client website is created as an independent project derived from the starter. The core is shared conceptually through documented patterns and reusable components; client sites are free to evolve independently.

### Goals

- Bootstrap a new website without repeating architectural decisions.
- Compose distinct designs from reusable primitives and page sections.
- Ship accessible, responsive, SEO-ready websites with excellent performance.
- Support Cursor + Codex workflows through explicit documentation and guardrails.
- Keep the baseline small; add complexity only when a project requires it.

### Non-goals for v1

- Drag-and-drop editor, visual page builder, multi-tenant SaaS, authentication, database, e-commerce, custom admin dashboard, monorepo, component registry or public CLI.

### Project presets

1. **Landing:** single-page conversion-oriented website.
2. **Portfolio:** project listing and project detail pages.
3. **Institutional:** multi-page company website with services and contact.

Presets are **compositions/configurations**, not three separate applications. v1 can implement examples; automated preset selection is a later milestone.

## 2. Technology decisions

| Concern               | Choice                                               | Notes                                      |
| --------------------- | ---------------------------------------------------- | ------------------------------------------ |
| Framework             | Next.js, stable release compatible with dependencies | App Router                                 |
| UI                    | React + TypeScript (strict)                          | Prefer Server Components                   |
| Styles                | Tailwind CSS v4                                      | Semantic tokens via CSS variables          |
| Components            | shadcn/ui                                            | Source-owned components, selectively added |
| Accessible primitives | Radix UI where needed                                | Prefer shadcn-compatible primitives        |
| Icons                 | lucide-react                                         | Tree-shaken imports                        |
| Animations            | Motion, optional                                     | Respect reduced motion                     |
| Forms                 | React Hook Form + Zod, optional                      | Validate again on server                   |
| Email                 | Resend, optional                                     | Server-side only; never expose API keys    |
| Editorial content     | Typed TS data by default; MDX optional               | No CMS in baseline                         |
| CMS                   | Sanity, optional                                     | Add only when client needs editing         |
| Hosting               | Vercel by default                                    | Other Next.js-compatible targets possible  |
| Package manager       | pnpm                                                 | Commit lockfile                            |
| Code quality          | ESLint, Prettier, TypeScript                         | CI checks                                  |
| Testing               | Vitest + Testing Library, Playwright as needed       | Prioritize high-value behavior             |

Avoid adding Zustand, TanStack Query, Prisma, Supabase, databases, or separate API services unless a concrete requirement justifies them.

**Dependency policy:** use mutually compatible stable versions at project creation time, record exact resolved versions in `pnpm-lock.yaml`, and avoid unreviewed major upgrades. Do not hardcode unverified package versions in documentation.

## 3. Architecture and rendering

- Use Next.js App Router and file-system routing.
- Default to React Server Components; mark only interactive leaf components with `"use client"`.
- Prefer statically rendered/prerendered pages when content permits; do not force static rendering where dynamic behavior is necessary.
- Use Next.js Metadata API, `sitemap.ts`, `robots.ts`, and `next/image` / `next/font` where appropriate.
- Keep content and site configuration separate from reusable presentation components.
- No database, session or custom backend in the baseline.
- Use route handlers or server-side actions only for specific needs such as secure contact-form submission.
- Avoid hydration-heavy full-page client components and unnecessary third-party scripts.

## 4. Directory layout

```text
website-starter/
├── public/
│   ├── images/
│   └── icons/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── shared/
│   ├── config/
│   │   ├── site.ts
│   │   ├── navigation.ts
│   │   └── seo.ts
│   ├── content/
│   │   ├── home.ts
│   │   ├── services.ts
│   │   └── projects.ts
│   ├── lib/
│   │   ├── metadata.ts
│   │   └── utils.ts
│   └── types/
├── docs/
│   ├── SYSTEM_DESIGN.md
│   ├── DESIGN_SYSTEM.md
│   ├── COMPONENTS.md
│   └── PROJECT_RULES.md
├── AGENTS.md
├── .env.example
├── components.json
├── package.json
├── pnpm-lock.yaml
└── README.md
```

Only create directories/files when actually used. No empty placeholder architecture for its own sake. Keep `src/app/globals.css` as the CSS entry point; place shared design tokens there or in imported files under `src/styles/` when complexity warrants it.

## 5. Modules and responsibilities

### M1 — Core & Configuration (required)

- App Router setup, root layout, navigation, error/not-found pages.
- `siteConfig` for brand name, base URL, locale, contact channels and social links.
- Typed configuration; avoid client-specific strings embedded in shared components.
- Environment validation for optional integrations.

### M2 — Design System (required)

- Semantic tokens: `background`, `foreground`, `primary`, `primary-foreground`, `secondary`, `muted`, `border`, `surface`, `radius`, etc.
- Typography scales, spacing, container widths, breakpoints and focus styles.
- Theme variables in CSS; Tailwind utilities consume semantic tokens.
- Base UI primitives: Button, Link, Container, Section, Heading, Input (when needed).
- Accessible focus indication, sufficient contrast, keyboard navigation.
- Default theme is neutral; each client can have a distinct visual identity.

### M3 — Section Library (required)

- Reusable sections: HeroCentered, HeroSplit, About, ServicesGrid, Features, ProjectsGrid, Testimonials, FAQ, CTA, Contact.
- Components receive typed props (content, media, variants) and do not fetch client content implicitly.
- Prefer composition over complex prop combinations.
- Keep animations optional; do not force client rendering for static sections.
- Variants should reflect meaningful layout differences rather than dozens of arbitrary switches.

### M4 — Content & SEO (required)

- Typed content files for basic sites; MDX optional for long-form case studies/blog.
- Unique metadata for each page; canonical URL, social previews and descriptive titles.
- Semantic headings, descriptive alt text, internal links, sitemap and robots policy.
- Structured data (JSON-LD) only when it accurately describes the page.
- Draft/placeholder domains must not accidentally be treated as production canonical URLs.

### M5 — Integrations (optional)

- Contact form: client-side UX validation plus authoritative server validation.
- Resend integration only on server; rate-limit and spam-mitigate public submissions; consent/privacy handling where applicable.
- WhatsApp links, analytics, CMS, embeds: install only when requested.
- Analytics/cookies configured according to applicable privacy obligations (including LGPD when relevant).
- Never expose secrets via `NEXT_PUBLIC_` or commit `.env.local`.

### M6 — Quality & Deployment (required)

- Scripts for dev, build, lint, typecheck, format/check, test where configured.
- CI executes lint, typecheck, tests and production build.
- Test keyboard navigation, responsive layouts, forms and critical user flows.
- Check Core Web Vitals, image sizes, accessibility and SEO before release.
- Deploy preview for review; production release after approval.

## 6. Component contracts and conventions

- Use TypeScript strict mode; avoid `any` except when justified/documented.
- Name components in PascalCase, hooks `useX`, utilities in camelCase.
- One clear responsibility per component; do not abstract prematurely.
- Prefer native HTML and semantic elements over custom interaction patterns.
- Sections accept serializable typed props when feasible, e.g. `title`, `description`, `items`, `image`, `actions`, `variant`.
- No hardcoded client brand names, phone numbers, colors or URLs inside generic UI components.
- Use Next.js `Link` for internal navigation and `Image` for optimized image assets where appropriate.
- Use responsive layouts mobile-first; avoid fixed heights for content-heavy blocks.
- Honor `prefers-reduced-motion` and provide visible focus states.

## 7. Example configuration contract

```ts
export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  locale: string;
  contact: { email: string; whatsapp?: string };
  social: { instagram?: string; linkedin?: string };
};

export const siteConfig: SiteConfig = {
  name: "Example Studio",
  description: "Example site description",
  url: "https://example.com",
  locale: "pt-BR",
  contact: { email: "hello@example.com" },
  social: {},
};
```

**Note:** placeholder URLs are for development only; validate the production domain before deployment. Optional features should generally be excluded at project creation, not merely hidden behind runtime flags.

## 8. Preset page compositions

**Landing:** Hero → Benefits/Features → Services → Social Proof → FAQ → CTA → Contact.

**Portfolio:** Home → Projects index → Project detail (`/projetos/[slug]`) → About → Contact. Generate static params for known project slugs when suitable.

**Institutional:** Home → About → Services index/detail as needed → Projects/Team optional → Contact.

All presets share the same design primitives, navigation, metadata utilities and content contracts.

## 9. Performance, accessibility, SEO and security gates

### Performance

- Optimize images and responsive sizes; avoid unnecessary large hero media.
- Load fonts efficiently; avoid render-blocking third-party scripts.
- Keep static sections server-rendered.
- Review Lighthouse and real-user metrics when available; aim for strong Core Web Vitals, not arbitrary guarantees.

### Accessibility

- Target WCAG 2.2 AA where practical.
- Semantic landmarks, logical heading order, labeled controls, visible focus, keyboard support and adequate contrast.
- Test menus, accordions and forms with keyboard and screen reader checks where possible.

### SEO

- Descriptive titles/descriptions, correct canonical domain, Open Graph image, sitemap, robots, internal linking.
- Do not fabricate structured data or reviews.

### Security & privacy

- Secrets server-only, validated form inputs, spam prevention, least-privilege credentials.
- Keep dependencies updated; never store client credentials in source control.
- Document analytics/consent and data retention for each deployment.

## 10. Development workflow with Cursor + Codex

1. Read `AGENTS.md` and relevant documents under `docs/` before changing code.
2. For nontrivial changes, propose a short implementation plan and list files to modify.
3. Implement in small, reviewable increments; reuse existing components.
4. Do not add libraries or rewrite architecture without explaining the trade-off and requesting approval.
5. Run available checks (`pnpm lint`, `pnpm typecheck`, `pnpm build`, tests where configured).
6. Summarize changed files, checks executed, remaining risks and manual verification steps.
7. Update documentation when conventions or public component contracts change.

## 11. Milestones

**Phase 1 — Foundation:** Next.js scaffold, strict TS, Tailwind, shadcn setup, semantic tokens, configuration, navigation, README, docs, AGENTS.md and quality scripts. Deliver a working homepage.

**Phase 2 — Design system:** Container, Section, typography, buttons, headers, footers and 3–4 starter sections. Document props and examples.

**Phase 3 — Presets:** landing, portfolio and institutional compositions; project detail pages; SEO and content structure.

**Phase 4 — Optional integrations:** secure contact forms, email, analytics, MDX or CMS based on concrete demand.

**Phase 5 — Automation (later):** GitHub template workflow, optional scaffolding script/CLI and optional component registry after repeated real-world usage.

## 12. Definition of done

A change is complete when:

- It follows this architecture and uses existing tokens/components where appropriate.
- TypeScript, lint and production build pass; relevant tests pass.
- Mobile and desktop layouts are manually reviewed.
- Interactive elements are keyboard accessible.
- No secrets, placeholder production domains or unintended tracking are shipped.
- Documentation is updated for architectural or contract changes.

## 13. Open decisions / future ADRs

- Final brand name of the starter.
- Whether a client-facing CMS is necessary for the first real deployment.
- Contact form delivery provider and spam controls.
- Hosting alternatives for clients who do not use Vercel.
- Whether presets should become a generator script after the first 2–3 projects.

**Change control:** record significant architecture changes in an ADR or in a clearly dated update to this document. Keep the starter small and avoid speculative features.
