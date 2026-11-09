# Website Starter Kit — Design System

**Version:** 1.0.0  
**Scope:** Phase 2.1 — Design System Foundation

This design system provides stable semantic contracts for projects derived from the starter. Components consume semantic roles such as `primary`, `surface`, and `muted`; client identity is configured separately through brand tokens.

## 1. CSS organization

The CSS entry point remains `src/app/globals.css` and imports two design-system layers:

- `src/styles/themes.css`: brand identity and semantic colors for light and dark themes.
- `src/styles/tokens.css`: typography, spacing, containers, radii, shadows, motion, and the Tailwind CSS v4 bridge.

The naming hierarchy is:

1. **Brand tokens** (`--brand-*`) hold project-specific choices, such as the primary color, font families, and base radius.
2. **Semantic tokens** (`--primary`, `--surface`, `--muted`, etc.) describe the role of a value in the interface.
3. **Tailwind theme tokens** inside `@theme inline` expose semantic values as utilities such as `bg-primary`, `text-muted-foreground`, `shadow-raised`, and `max-w-content-lg`.

Reusable components must use semantic tokens. They must not reference a client's hex, RGB, or OKLCH values directly.

## 2. Colors and themes

The shadcn/ui contracts are preserved: `background`, `foreground`, `card`, `popover`, `primary`, `secondary`, `muted`, `accent`, `destructive`, `border`, `input`, and `ring`.

Additional roles cover common website needs:

| Role                                          | Purpose                                              |
| --------------------------------------------- | ---------------------------------------------------- |
| `surface`                                     | Elevated or grouped content on the page background   |
| `primary-hover`, `primary-active`             | Explicit interactive states for the primary action   |
| `secondary-hover`, `accent-hover`             | Interactive states for neutral controls              |
| `destructive-foreground`, `destructive-hover` | Accessible destructive actions and their hover state |
| `link`, `link-hover`                          | Inline links independent of button colors            |
| `overlay`, `overlay-soft`, `overlay-strong`   | Contrast protection over images and backdrops        |
| `on-image`, `on-image-action-foreground`      | Content and action contrast over image overlays      |

Light values are declared in `:root`; dark values are declared in `.dark`. Applying the `dark` class to an ancestor activates the dark theme. This foundation intentionally does not include theme persistence or a theme switcher.

### Customizing a client identity

Start in `src/styles/themes.css` and change the brand tokens in both themes:

```css
:root {
  --brand-font-sans: "Client Sans", Arial, sans-serif;
  --brand-font-heading: "Client Display", Arial, sans-serif;
  --brand-primary: oklch(0.5 0.18 150);
  --brand-primary-hover: oklch(0.44 0.18 150);
  --brand-primary-active: oklch(0.38 0.17 150);
  --brand-focus: oklch(0.58 0.16 150);
  --brand-radius: 0.5rem;
}
```

If a custom web font is needed, load it in the root layout with `next/font` and point the corresponding `--brand-font-*` token to the generated CSS variable. Validate the font license, available weights, and loading performance before adding it.

After changing colors, verify normal text, large text, component states, and focus indicators in both themes. Do not assume that a palette remains accessible after substitution.

## 3. Typography

The display and heading scale is fluid through `clamp()`, so it grows between mobile and wide layouts without breakpoint-specific component classes.

| Token / utility       | Intended use                                   |
| --------------------- | ---------------------------------------------- |
| `text-display`        | High-impact hero title, normally one per page  |
| `text-heading-1`      | Page title                                     |
| `text-heading-2`      | Major section title                            |
| `text-heading-3`      | Subsection title or prominent card group title |
| `text-xl`             | Smaller headings and card titles               |
| `text-lead`           | Introductory or supporting lead copy           |
| `text-base leading-7` | Default body copy                              |
| `text-sm leading-6`   | Supporting metadata and compact copy           |

Use `Heading` to separate the semantic heading level (`as`) from its visual scale (`size`). Preserve a logical document outline; do not choose an `h3` only because it looks smaller.

Use `Text` when size, tone, or readable measure is part of the component contract. Plain paragraphs and spans remain preferable when no design-system behavior is needed.

## 4. Spacing, containers, and responsiveness

The system is mobile-first. Fluid horizontal gutter and section-spacing tokens reduce repeated breakpoint rules:

| Utility            | Behavior                                           |
| ------------------ | -------------------------------------------------- |
| `px-gutter`        | Fluid page gutter from mobile to desktop           |
| `py-section-sm`    | Compact section spacing                            |
| `py-section-md`    | Default section spacing                            |
| `py-section-lg`    | Spacious presentation section                      |
| `max-w-content-sm` | Narrow content, forms, and focused prose (`40rem`) |
| `max-w-content-md` | Articles and compact compositions (`48rem`)        |
| `max-w-content-lg` | Standard page composition (`64rem`)                |
| `max-w-content-xl` | Wide marketing composition (`80rem`)               |

`Container` applies the page gutter and accepts `size="sm | md | lg | xl | full"`. Its default remains `xl`, matching the previous `max-w-7xl` contract closely.

`Section` provides `spacing="none | sm | md | lg"` and `surface="default | muted | surface | primary"`. It does not insert a `Container`; keeping the two primitives separate supports full-bleed backgrounds with constrained inner content.

## 5. Radius, elevation, and motion

`--brand-radius` controls the overall shape language. Tailwind radius utilities map proportional semantic sizes from `rounded-sm` through `rounded-3xl`.

Use elevation intentionally:

- `shadow-soft`: subtle separation for cards.
- `shadow-raised`: menus, prominent cards, and floating headers.
- `shadow-floating`: dialogs and content that clearly sits above the page.

Motion uses `--duration-fast`, `--duration-normal`, `--duration-slow`, `--motion-ease-standard`, and `--motion-ease-emphasized`. Interactive primitives disable nonessential transitions when `prefers-reduced-motion: reduce` is active. New components must do the same.

## 6. Components

All current primitives are Server Components and accept `className` for bounded composition.

### Container and Section

```tsx
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

<Section spacing="lg" surface="muted">
  <Container size="lg">Content</Container>
</Section>;
```

### Heading and Text

```tsx
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

<Heading as="h1" size="display">
  A semantic, fluid page title
</Heading>
<Text size="lead" tone="muted" measure>
  Supporting copy with a readable line length.
</Text>;
```

`Heading` variants: `display`, `h1`, `h2`, `h3`, `h4`; alignment may be `left`, `center`, or `right`.

`Text` variants: `sm`, `body`, `lead`; tones may be `default`, `muted`, `primary`, or `inherit`.

### Button

```tsx
import { Button } from "@/components/ui/button";

<Button variant="default" size="lg">Primary action</Button>
<Button variant="outline">Secondary action</Button>
<Button variant="destructive">Delete item</Button>
```

Available variants are `default`, `outline`, `secondary`, `ghost`, `destructive`, and `link`. Use `asChild` to apply button presentation to a Next.js link without nesting interactive elements.

### Link

```tsx
import { Link } from "@/components/ui/link";

<Link href="/about">About the studio</Link>
<Link href="/projects" variant="subtle">View projects</Link>
```

Use the default variant for inline links, `subtle` for navigation and secondary links, and `unstyled` when only the shared focus and motion behavior is needed.

## 7. Accessibility rules

- Target WCAG 2.2 AA contrast for text, controls, interactive states, and focus indicators.
- Keep heading levels logical even when visual sizes differ.
- Use landmarks and native elements before adding ARIA.
- Never remove focus outlines without supplying an equally visible `:focus-visible` treatment.
- Ensure interactive targets are comfortably sized; the default Button is `2.5rem` high and the large size is `2.75rem`.
- Do not communicate state through color alone.
- Respect `prefers-reduced-motion`; animation must not be required to understand content or state.
- Test keyboard navigation and both themes after changing brand tokens.
- Keep body copy near the `--measure` line length for long-form reading.

## 8. Extension rules

- Add a token only when it represents a reusable decision, not a one-off value.
- Prefer semantic naming based on purpose rather than a literal color or pixel value.
- Add component variants only for meaningful visual or behavioral differences.
- Preserve shadcn/ui token names so newly installed source components inherit the theme.
- Do not add client-side theme state, a Section Library, presets, or external integrations as part of this foundation.

## 9. Visual showcase

During local development, the Design System catalog is available at:

```text
http://localhost:3000/dev/design-system
```

Start the development server with `pnpm dev`. The route demonstrates semantic colors and interactive states, typography, buttons, links, containers, section spacing, surfaces, shadows, and common primitive compositions.

The light/dark selector is intentionally local to the showcase. It does not persist a preference, modify the public site theme, or introduce a global provider.

The route calls `notFound()` outside development and declares `noindex` metadata. It is also intentionally absent from `sitemap.ts`. Do not use the route to expose client content, credentials, environment values, or private implementation notes.

### Adding a component to the showcase

1. Complete and document the component contract in `docs/COMPONENTS.md` first.
2. Add the example to the most relevant category in `src/app/dev/design-system/page.tsx`.
3. Render the real component and semantic tokens; do not recreate its appearance with a parallel set of styles.
4. Show meaningful variants, sizes, disabled behavior, focus behavior, and content edge cases where applicable.
5. Keep static examples in the Server Component. Create a route-local Client Component only when interaction cannot be demonstrated with native HTML and CSS.
6. Test both themes, keyboard navigation, reduced motion, narrow screens, and the production 404 behavior.

Showcase-only helpers are not reusable product components. Do not move preview cards, catalog headings, or documentation navigation into the Section Library unless a real public-site requirement emerges.
