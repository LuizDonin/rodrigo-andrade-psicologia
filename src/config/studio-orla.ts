import type { Metadata } from "next";

import { resolveThemeTokens, type ThemeTokens } from "@/lib/theme";

export const studioOrlaPath = "/dev/site-orla" as const;

export const studioOrlaConfig = {
  name: "Estúdio Orla",
  descriptor: "Arquitetura e interiores · projeto demonstrativo",
  description:
    "Estúdio fictício de arquitetura e interiores orientado por luz, matéria e rotina.",
  locale: "pt-BR",
  navigation: [
    { label: "Projetos", href: `${studioOrlaPath}/projetos` },
    { label: "Sobre", href: `${studioOrlaPath}/sobre` },
    { label: "Contato", href: `${studioOrlaPath}/contato` },
  ],
  contact: {
    email: "projetos@studio-orla.example",
    phone: "+55 (11) 4000-2718",
    address: "São Paulo · atendimento mediante agendamento",
  },
  social: [
    { label: "Instagram demonstrativo", href: "https://example.com" },
    { label: "Pinterest demonstrativo", href: "https://example.com" },
  ],
  footerNote:
    "Marca, projetos, pessoas e contatos são fictícios e existem somente para demonstração.",
} as const;

export function createStudioOrlaMetadata(
  title: string,
  description: string,
  image?: string,
): Metadata {
  return {
    title: { absolute: `${title} | ${studioOrlaConfig.name}` },
    description,
    robots: { index: false, follow: false, nocache: true },
    openGraph: {
      type: "website",
      locale: studioOrlaConfig.locale.replace("-", "_"),
      siteName: studioOrlaConfig.name,
      title,
      description,
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

const studioOrlaBrandTheme = {
  "--brand-font-sans": '"Segoe UI", Arial, Helvetica, sans-serif',
  "--brand-font-heading": 'Georgia, "Times New Roman", serif',
  "--brand-radius": "0.375rem",
  "--brand-primary": "oklch(0.43 0.095 43)",
  "--brand-primary-hover": "oklch(0.37 0.095 43)",
  "--brand-primary-active": "oklch(0.32 0.085 43)",
  "--brand-focus": "oklch(0.5 0.12 43)",
  "--primary-foreground": "oklch(0.985 0.008 80)",
  "--background": "oklch(0.975 0.012 82)",
  "--foreground": "oklch(0.2 0.022 48)",
  "--surface": "oklch(0.995 0.006 82)",
  "--surface-foreground": "var(--foreground)",
  "--muted": "oklch(0.925 0.022 72)",
  "--muted-foreground": "oklch(0.41 0.035 50)",
  "--secondary": "oklch(0.895 0.035 65)",
  "--secondary-hover": "oklch(0.85 0.048 60)",
  "--secondary-foreground": "oklch(0.25 0.04 45)",
  "--accent": "oklch(0.88 0.045 55)",
  "--accent-hover": "oklch(0.82 0.06 50)",
  "--accent-foreground": "oklch(0.24 0.04 45)",
  "--border": "oklch(0.82 0.025 65)",
  "--input": "oklch(0.82 0.025 65)",
  "--link": "oklch(0.38 0.09 43)",
  "--link-hover": "oklch(0.31 0.085 43)",
  "--type-display-size": "clamp(2.9rem, 2.05rem + 4.25vw, 5.25rem)",
  "--space-section-lg": "clamp(5rem, 3.5rem + 7.5vw, 9rem)",
} satisfies ThemeTokens;

export const studioOrlaTheme = resolveThemeTokens(studioOrlaBrandTheme);
