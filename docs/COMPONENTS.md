# Website Starter Kit — Components

**Version:** 1.0.0  
**Scope:** Design System primitives

This document describes the public contracts of the reusable primitives under `src/components`. All primitives support `className` for bounded composition, use semantic design tokens, and render as Server Components unless a future interaction explicitly requires otherwise.

## General conventions

- Import components through the `@/` alias.
- Prefer composition over adding boolean props for one-off layouts.
- Use semantic HTML and keep heading levels in document order.
- Use token-backed utilities instead of hardcoded colors, shadows, radii, or transition values.
- Avoid overriding a component state with arbitrary values. Extend the public variant contract when a repeated requirement is proven.
- Event handlers make a consuming tree interactive; the primitives themselves do not declare `"use client"`.

## Container

**Path:** `@/components/layout/container`

Constrains content width and applies the responsive page gutter.

| Property       | Type                                     | Default | Purpose                              |
| -------------- | ---------------------------------------- | ------- | ------------------------------------ |
| `size`         | `"sm" \| "md" \| "lg" \| "xl" \| "full"` | `"xl"`  | Selects the maximum content width    |
| `className`    | `string`                                 | —       | Adds composition-specific utilities  |
| HTML div props | `React.ComponentPropsWithoutRef<"div">`  | —       | Passes native attributes to the root |

```tsx
import { Container } from "@/components/layout/container";

<Container size="lg">Page content</Container>;
```

Use `full` only when a composition still needs the standard gutter but must not have a maximum width.

## Section

**Path:** `@/components/layout/section`

Provides semantic vertical rhythm and optional surface treatment. It intentionally does not create a `Container`.

| Property           | Type                                             | Default     | Purpose                                          |
| ------------------ | ------------------------------------------------ | ----------- | ------------------------------------------------ |
| `spacing`          | `"none" \| "sm" \| "md" \| "lg"`                 | `"md"`      | Controls fluid vertical padding                  |
| `surface`          | `"default" \| "muted" \| "surface" \| "primary"` | `"default"` | Selects semantic background and foreground roles |
| HTML section props | `React.ComponentPropsWithoutRef<"section">`      | —           | Supports IDs, ARIA, and native attributes        |

```tsx
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

<Section id="services" spacing="lg" surface="muted">
  <Container>Section content</Container>
</Section>;
```

## Heading

**Path:** `@/components/ui/heading`

Separates semantic level from visual size. The `as` property controls the HTML element; `size` controls only presentation.

| Property  | Type                                           | Default  | Purpose                           |
| --------- | ---------------------------------------------- | -------- | --------------------------------- |
| `as`      | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"` | `"h2"`   | Sets the semantic heading level   |
| `size`    | `"display" \| "h1" \| "h2" \| "h3" \| "h4"`    | `"h2"`   | Selects the fluid visual scale    |
| `align`   | `"left" \| "center" \| "right"`                | `"left"` | Controls text alignment           |
| `balance` | `boolean`                                      | `true`   | Enables balanced heading wrapping |

```tsx
import { Heading } from "@/components/ui/heading";

<Heading as="h1" size="display">
  Page title
</Heading>
<Heading as="h2" size="h3">
  A visually compact section title
</Heading>;
```

Never skip a heading level to obtain a visual size. Choose the correct `as` value first, then select `size`.

## Text

**Path:** `@/components/ui/text`

Applies the shared body scale, semantic tone, and optional readable measure.

| Property  | Type                                             | Default     | Purpose                              |
| --------- | ------------------------------------------------ | ----------- | ------------------------------------ |
| `as`      | `"p" \| "span" \| "div"`                         | `"p"`       | Selects the appropriate text element |
| `size`    | `"sm" \| "body" \| "lead"`                       | `"body"`    | Selects size and line-height         |
| `tone`    | `"default" \| "muted" \| "primary" \| "inherit"` | `"default"` | Selects a semantic text color        |
| `measure` | `boolean`                                        | `false`     | Limits line length to `--measure`    |

```tsx
import { Text } from "@/components/ui/text";

<Text size="lead" tone="muted" measure>
  Introductory copy with a readable line length.
</Text>;
```

Use a native `p` or `span` directly when no shared size, tone, or measure behavior is required.

## Button

**Path:** `@/components/ui/button`

Represents actions with consistent hierarchy, state styling, focus visibility, target sizing, and reduced-motion behavior.

| Property     | Type                                                                                 | Default     |
| ------------ | ------------------------------------------------------------------------------------ | ----------- |
| `variant`    | `"default" \| "outline" \| "secondary" \| "ghost" \| "destructive" \| "link"`        | `"default"` |
| `size`       | `"xs" \| "sm" \| "default" \| "lg" \| "icon" \| "icon-xs" \| "icon-sm" \| "icon-lg"` | `"default"` |
| `asChild`    | `boolean`                                                                            | `false`     |
| Button props | `React.ComponentProps<"button">`                                                     | —           |

```tsx
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";

<Button type="button">Save</Button>
<Button variant="secondary">Preview</Button>
<Button variant="destructive">Delete</Button>
<Button asChild>
  <Link href="/contact" variant="unstyled">
    Contact <ArrowRight aria-hidden="true" />
  </Link>
</Button>;
```

Use `asChild` for navigation styled as a button. Do not nest an anchor inside a button. Icon-only buttons require an accessible name through `aria-label` or visible text.

The exported `buttonVariants` helper may be used when another source-owned primitive must share the exact Button presentation without rendering a Button root.

## Link

**Path:** `@/components/ui/link`

Wraps Next.js Link with shared semantic color, focus, and motion behavior.

| Property           | Type                                    | Default     | Purpose                                            |
| ------------------ | --------------------------------------- | ----------- | -------------------------------------------------- |
| `variant`          | `"default" \| "subtle" \| "unstyled"`   | `"default"` | Selects visual emphasis                            |
| Next.js Link props | `React.ComponentProps<typeof NextLink>` | —           | Supports typed `href` and native anchor attributes |

```tsx
import { Link } from "@/components/ui/link";

<Link href="/about">About</Link>
<Link href="/projects" variant="subtle">
  Projects
</Link>;
```

- `default`: inline link with semantic link color and underline.
- `subtle`: navigation and secondary actions.
- `unstyled`: inherits surrounding color while retaining shared focus and motion behavior.

## Header and Footer

**Paths:** `@/components/layout/header` and `@/components/layout/footer`

These are site-level layout components rather than low-level primitives. They read typed project configuration and navigation, then compose `Container` and `Link`. Customize site content in `src/config`; do not embed client-specific values in reusable primitives.

## Accessibility checklist for component changes

- Confirm keyboard operation and a visible `:focus-visible` indicator.
- Keep disabled controls programmatically disabled with the native `disabled` attribute.
- Give icon-only controls an accessible name.
- Verify every variant in light and dark themes.
- Check normal, hover, active, focus, disabled, and invalid states where applicable.
- Respect `prefers-reduced-motion` for transitions and animations.
- Test long labels, translated content, narrow screens, and 200% zoom.
- Preserve native elements and behavior before introducing ARIA or client-side interaction.

The local `/dev/design-system` route is the visual verification surface for these contracts. Update its examples whenever a public variant or component API changes.
