import type { ThemeTokens } from "@/lib/theme";

export type PresetNavigationItem = {
  label: string;
  href: `#${string}`;
};

export type PresetConfig = {
  id: "landing" | "portfolio" | "institutional";
  name: string;
  descriptor: string;
  metadata: {
    title: string;
    description: string;
  };
  navigation: readonly PresetNavigationItem[];
  footerNote: string;
  appearance: "light" | "dark";
  theme: ThemeTokens;
};

export const landingPreset = {
  id: "landing",
  name: "Nexo Flow",
  descriptor: "Plataforma fictícia de operações",
  metadata: {
    title: "Nexo Flow — Preset Landing",
    description:
      "Demonstração fictícia de uma landing page orientada à conversão.",
  },
  navigation: [
    { label: "Benefícios", href: "#beneficios" },
    { label: "Resultados", href: "#resultados" },
    { label: "Dúvidas", href: "#duvidas" },
  ],
  footerNote: "Uma demonstração do Website Starter Kit.",
  appearance: "light",
  theme: {
    "--brand-font-sans": '"Trebuchet MS", Arial, sans-serif',
    "--brand-font-heading": '"Trebuchet MS", Arial, sans-serif',
    "--brand-radius": "1rem",
    "--type-display-size": "clamp(2.75rem, 2.15rem + 3vw, 4.75rem)",
    "--space-section-lg": "clamp(4.5rem, 3.25rem + 6.25vw, 8rem)",
    "--brand-primary": "oklch(0.46 0.19 151)",
    "--brand-primary-hover": "oklch(0.4 0.18 151)",
    "--brand-primary-active": "oklch(0.35 0.16 151)",
    "--brand-focus": "oklch(0.52 0.2 151)",
    "--primary-foreground": "oklch(0.99 0 0)",
    "--background": "oklch(0.99 0.01 105)",
    "--foreground": "oklch(0.19 0.03 155)",
    "--surface": "oklch(1 0 0)",
    "--surface-foreground": "var(--foreground)",
    "--muted": "oklch(0.95 0.025 135)",
    "--muted-foreground": "oklch(0.42 0.045 155)",
    "--secondary": "oklch(0.91 0.045 135)",
    "--secondary-hover": "oklch(0.87 0.06 135)",
    "--secondary-foreground": "oklch(0.25 0.08 151)",
    "--accent": "oklch(0.92 0.05 135)",
    "--accent-hover": "oklch(0.87 0.07 135)",
    "--accent-foreground": "oklch(0.24 0.08 151)",
    "--border": "oklch(0.87 0.025 145)",
    "--input": "oklch(0.87 0.025 145)",
    "--ring": "var(--brand-focus)",
    "--link": "oklch(0.39 0.17 151)",
    "--link-hover": "oklch(0.32 0.15 151)",
  },
} satisfies PresetConfig;

export const portfolioPreset = {
  id: "portfolio",
  name: "Lume Atelier",
  descriptor: "Direção de arte e fotografia fictícia",
  metadata: {
    title: "Lume Atelier — Preset Portfolio",
    description:
      "Demonstração fictícia de um portfólio editorial para um estúdio criativo.",
  },
  navigation: [
    { label: "Projetos", href: "#projetos" },
    { label: "Atelier", href: "#atelier" },
    { label: "Contato", href: "#contato" },
  ],
  footerNote: "Imagens e projetos exclusivamente demonstrativos.",
  appearance: "dark",
  theme: {
    "--brand-font-sans": "Arial, Helvetica, sans-serif",
    "--brand-font-heading": 'Georgia, "Times New Roman", serif',
    "--brand-radius": "0.25rem",
    "--type-display-size": "clamp(3rem, 2.15rem + 4.25vw, 5.5rem)",
    "--space-section-lg": "clamp(5.5rem, 3.9rem + 8vw, 10rem)",
    "--brand-primary": "oklch(0.78 0.11 72)",
    "--brand-primary-hover": "oklch(0.84 0.09 72)",
    "--brand-primary-active": "oklch(0.88 0.07 72)",
    "--brand-focus": "oklch(0.78 0.11 72)",
    "--primary-foreground": "oklch(0.16 0.018 55)",
    "--background": "oklch(0.14 0.015 55)",
    "--foreground": "oklch(0.94 0.015 80)",
    "--surface": "oklch(0.19 0.018 55)",
    "--surface-foreground": "var(--foreground)",
    "--muted": "oklch(0.22 0.02 55)",
    "--muted-foreground": "oklch(0.75 0.025 75)",
    "--secondary": "oklch(0.27 0.025 60)",
    "--secondary-hover": "oklch(0.33 0.03 60)",
    "--secondary-foreground": "var(--foreground)",
    "--accent": "oklch(0.3 0.035 65)",
    "--accent-hover": "oklch(0.36 0.045 65)",
    "--accent-foreground": "var(--foreground)",
    "--border": "oklch(0.94 0.015 80 / 18%)",
    "--input": "oklch(0.94 0.015 80 / 22%)",
    "--ring": "var(--brand-focus)",
    "--link": "var(--brand-primary)",
    "--link-hover": "var(--brand-primary-hover)",
  },
} satisfies PresetConfig;

export const institutionalPreset = {
  id: "institutional",
  name: "Vértice Engenharia",
  descriptor: "Consultoria técnica fictícia",
  metadata: {
    title: "Vértice Engenharia — Preset Institucional",
    description:
      "Demonstração fictícia de um site institucional orientado à clareza e credibilidade.",
  },
  navigation: [
    { label: "Empresa", href: "#empresa" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ],
  footerNote: "Empresa, indicadores e contatos são fictícios.",
  appearance: "light",
  theme: {
    "--brand-font-sans": '"Segoe UI", Arial, Helvetica, sans-serif',
    "--brand-font-heading": '"Segoe UI", Arial, Helvetica, sans-serif',
    "--brand-radius": "0.5rem",
    "--type-display-size": "clamp(2.65rem, 2.05rem + 3vw, 4.5rem)",
    "--space-section-lg": "clamp(4rem, 3rem + 5vw, 7rem)",
    "--brand-primary": "oklch(0.38 0.12 245)",
    "--brand-primary-hover": "oklch(0.33 0.12 245)",
    "--brand-primary-active": "oklch(0.29 0.11 245)",
    "--brand-focus": "oklch(0.5 0.14 245)",
    "--primary-foreground": "oklch(0.99 0 0)",
    "--background": "oklch(0.985 0.004 240)",
    "--foreground": "oklch(0.2 0.025 245)",
    "--surface": "oklch(1 0 0)",
    "--surface-foreground": "var(--foreground)",
    "--muted": "oklch(0.95 0.012 235)",
    "--muted-foreground": "oklch(0.43 0.035 245)",
    "--secondary": "oklch(0.92 0.025 230)",
    "--secondary-hover": "oklch(0.87 0.04 230)",
    "--secondary-foreground": "oklch(0.28 0.08 245)",
    "--accent": "oklch(0.91 0.035 225)",
    "--accent-hover": "oklch(0.86 0.05 225)",
    "--accent-foreground": "oklch(0.25 0.08 245)",
    "--border": "oklch(0.85 0.02 235)",
    "--input": "oklch(0.85 0.02 235)",
    "--ring": "var(--brand-focus)",
    "--link": "var(--brand-primary)",
    "--link-hover": "var(--brand-primary-hover)",
  },
} satisfies PresetConfig;
