import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PresetShell } from "@/app/dev/presets/_components/preset-shell";
import { CTASection } from "@/components/sections/cta";
import { FAQSection } from "@/components/sections/faq";
import { FeaturesGrid } from "@/components/sections/features";
import { HeroCentered } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { landingPreset } from "@/config/presets";
import { landingContent } from "@/content/presets/landing";

export const metadata: Metadata = {
  ...landingPreset.metadata,
  robots: { index: false, follow: false, nocache: true },
};

export default function LandingPresetPage() {
  if (process.env.NODE_ENV !== "development") notFound();

  return (
    <PresetShell config={landingPreset}>
      <HeroCentered {...landingContent.hero} />
      <FeaturesGrid
        id="beneficios"
        header={{
          eyebrow: "Benefícios",
          title: "Menos dispersão. Mais contexto para agir.",
          titleAs: "h2",
          description:
            "Uma progressão simples apresenta valor antes de pedir qualquer compromisso.",
        }}
        items={landingContent.features}
        columns={3}
      />
      <StatsSection
        id="resultados"
        header={{
          eyebrow: "Cenário demonstrativo",
          title: "Números que deixam claro o que está sendo simulado.",
          titleAs: "h2",
        }}
        items={landingContent.stats}
        columns={3}
        surface="primary"
      />
      <TestimonialsSection
        header={{
          eyebrow: "Prova social fictícia",
          title: "Vozes criadas somente para validar a composição.",
          titleAs: "h2",
          description:
            "Em um projeto real, publique apenas depoimentos autorizados e corretamente atribuídos.",
        }}
        items={landingContent.testimonials}
        layout="editorial"
      />
      <FAQSection
        id="duvidas"
        header={{
          eyebrow: "Perguntas frequentes",
          title: "O que esta demonstração inclui?",
          titleAs: "h2",
        }}
        items={landingContent.faq}
        surface="muted"
      />
      <CTASection {...landingContent.cta} />
    </PresetShell>
  );
}
