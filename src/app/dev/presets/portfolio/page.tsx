import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PresetShell } from "@/app/dev/presets/_components/preset-shell";
import { AboutSplit } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { ImageGallery } from "@/components/sections/gallery";
import { HeroSplit } from "@/components/sections/hero";
import { FeaturedProject, ProjectsGrid } from "@/components/sections/projects";
import { portfolioPreset } from "@/config/presets";
import { portfolioContent } from "@/content/presets/portfolio";

export const metadata: Metadata = {
  ...portfolioPreset.metadata,
  robots: { index: false, follow: false, nocache: true },
};

export default function PortfolioPresetPage() {
  if (process.env.NODE_ENV !== "development") notFound();

  return (
    <PresetShell config={portfolioPreset}>
      <HeroSplit {...portfolioContent.hero} />
      <ProjectsGrid
        id="projetos"
        header={{
          eyebrow: "Seleção",
          title: "Três estudos, uma mesma atenção ao enquadramento.",
          titleAs: "h2",
        }}
        projects={portfolioContent.projects}
        columns={2}
        variant="editorial"
        className="bg-surface border-y"
      />
      <FeaturedProject {...portfolioContent.featured} />
      <AboutSplit {...portfolioContent.about} />
      <ImageGallery
        header={{
          eyebrow: "Caderno visual",
          title: "Fragmentos de um arquivo inteiramente demonstrativo.",
          titleAs: "h2",
        }}
        images={portfolioContent.gallery}
        variant="editorial"
        className="bg-muted"
      />
      <ContactSection {...portfolioContent.contact} />
    </PresetShell>
  );
}
