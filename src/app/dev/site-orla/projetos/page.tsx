import { CTASection } from "@/components/sections/cta";
import { HeroCentered } from "@/components/sections/hero";
import { ProjectsGrid } from "@/components/sections/projects";
import { createStudioOrlaMetadata, studioOrlaPath } from "@/config/studio-orla";
import { studioOrlaPages } from "@/content/site-orla/pages";
import { studioProjectCards } from "@/content/site-orla/projects";

export const metadata = createStudioOrlaMetadata(
  "Projetos",
  "Portfólio fictício de arquitetura residencial, interiores e hospitalidade do Estúdio Orla.",
  "/images/site-orla/projects/casa-areia/cover.svg",
);

export default function StudioOrlaProjectsPage() {
  return (
    <>
      <HeroCentered
        eyebrow="Arquivo selecionado · 2024–2026"
        title={studioOrlaPages.projects.title}
        description={studioOrlaPages.projects.description}
        titleAs="h1"
        primaryAction={{
          label: "Conversar sobre um projeto",
          href: `${studioOrlaPath}/contato`,
        }}
      />
      <ProjectsGrid
        header={{
          eyebrow: "Portfólio demonstrativo",
          title: "Residencial, interiores e hospitalidade.",
          titleAs: "h2",
        }}
        projects={studioProjectCards}
        columns={2}
        variant="editorial"
        className="bg-surface border-y"
      />
      <CTASection
        title="Um espaço começa pelas perguntas certas."
        description="Os canais desta demonstração ilustram o próximo passo de uma experiência real."
        titleAs="h2"
        primaryAction={{
          label: "Ver contato",
          href: `${studioOrlaPath}/contato`,
        }}
        secondaryAction={{
          label: "Conhecer o estúdio",
          href: `${studioOrlaPath}/sobre`,
          variant: "outline",
        }}
        surface="primary"
      />
    </>
  );
}
