import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PresetShell } from "@/app/dev/presets/_components/preset-shell";
import { AboutSplit } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { CTASection } from "@/components/sections/cta";
import { FeaturesGrid } from "@/components/sections/features";
import { HeroSplit } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services";
import { StatsSection } from "@/components/sections/stats";
import { institutionalPreset } from "@/config/presets";
import { institutionalContent } from "@/content/presets/institutional";

export const metadata: Metadata = {
  ...institutionalPreset.metadata,
  robots: { index: false, follow: false, nocache: true },
};

export default function InstitutionalPresetPage() {
  if (process.env.NODE_ENV !== "development") notFound();

  return (
    <PresetShell config={institutionalPreset}>
      <HeroSplit {...institutionalContent.hero} />
      <AboutSplit {...institutionalContent.about} />
      <StatsSection
        header={{
          eyebrow: "Indicadores fictícios",
          title: "Transparência também vale para conteúdo demonstrativo.",
          titleAs: "h2",
        }}
        items={institutionalContent.stats}
        columns={3}
        surface="muted"
      />
      <ServicesGrid
        id="servicos"
        header={{
          eyebrow: "Serviços",
          title: "Capacidades apresentadas com escopo compreensível.",
          titleAs: "h2",
          description:
            "Cada bloco explica uma frente sem depender de jargão ou destinos inexistentes.",
        }}
        items={institutionalContent.services}
        columns={3}
        variant="bordered"
      />
      <FeaturesGrid
        id="capacidades"
        header={{
          eyebrow: "Como trabalhamos",
          title: "Princípios que sustentam uma relação de confiança.",
          titleAs: "h2",
        }}
        items={institutionalContent.features}
        columns={3}
      />
      <CTASection {...institutionalContent.cta} />
      <ContactSection {...institutionalContent.contact} />
    </PresetShell>
  );
}
