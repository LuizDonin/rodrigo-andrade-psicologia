# Codex Instructions — Website Starter Kit

Read `docs/SYSTEM_DESIGN.md` before implementing changes. Treat it as the architectural source of truth.

## Working rules

- Use Next.js App Router, React, TypeScript strict, Tailwind CSS v4 and selectively installed shadcn/ui components.
- Default to Server Components; use `"use client"` only for interactive leaf components.
- Build mobile-first, accessible, semantic interfaces using design tokens.
- Separate site content/configuration from reusable components.
- Do not introduce databases, authentication, state libraries, CMS or other dependencies without explicit justification and approval.
- For nontrivial tasks, present a concise plan first, then implement in reviewable increments.
- Run lint, typecheck and build before claiming completion; report any command that could not run.
- Never expose secrets or commit local environment files.
- Update documentation when architectural rules or component APIs change.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
