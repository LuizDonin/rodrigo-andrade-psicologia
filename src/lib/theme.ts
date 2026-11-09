import type { CSSProperties } from "react";

export type ThemeTokens = CSSProperties & {
  [token: `--${string}`]: string | number;
};

const semanticThemeAliases = {
  "--font-sans": "var(--brand-font-sans)",
  "--font-heading": "var(--brand-font-heading)",
  "--font-mono": "var(--brand-font-mono)",
  "--primary": "var(--brand-primary)",
  "--primary-hover": "var(--brand-primary-hover)",
  "--primary-active": "var(--brand-primary-active)",
  "--ring": "var(--brand-focus)",
  "--link": "var(--brand-primary)",
  "--link-hover": "var(--brand-primary-hover)",
  "--radius": "var(--brand-radius)",
  "--surface-foreground": "var(--foreground)",
  "--card": "var(--surface)",
  "--card-foreground": "var(--surface-foreground)",
  "--popover": "var(--surface)",
  "--popover-foreground": "var(--surface-foreground)",
} satisfies ThemeTokens;

export function resolveThemeTokens(theme: ThemeTokens): ThemeTokens {
  return { ...semanticThemeAliases, ...theme };
}
