import { AboutSplit } from "@/components/sections/about";
import { CTASection } from "@/components/sections/cta";
import { HeroSplit } from "@/components/sections/hero";
import { FeaturedProject, ProjectsGrid } from "@/components/sections/projects";
import { createStudioOrlaMetadata, studioOrlaPath } from "@/config/studio-orla";
import { studioOrlaPages } from "@/content/site-orla/pages";
import {
  studioProjectCards,
  studioProjects,
} from "@/content/site-orla/projects";

export const metadata = createStudioOrlaMetadata(
  "Arquitetura e interiores",
  "Estúdio Orla: projeto demonstrativo de arquitetura e interiores com linguagem editorial.",
  "/images/site-orla/studio/hero.svg",
);

export default function SiteOrlaHomePage() {
  const featured =
    studioProjects.find((item) => "featured" in item && item.featured) ??
    studioProjects[0];

  return (
    <>
      <HeroSplit
        eyebrow="Arquitetura e interiores · estúdio fictício"
        title={studioOrlaPages.home.title}
        description={studioOrlaPages.home.description}
        titleAs="h1"
        primaryAction={{
          label: "Conhecer projetos",
          href: `${studioOrlaPath}/projetos`,
        }}
        secondaryAction={{
          label: "Sobre o estúdio",
          href: `${studioOrlaPath}/sobre`,
          variant: "outline",
        }}
        image={{
          src: "/images/site-orla/studio/hero.svg",
          alt: "Composição arquitetônica abstrata em tons minerais e terrosos",
          sizes: "(max-width: 1024px) 100vw, 50vw",
          preload: true,
        }}
        ratio="portrait"
      />

      <ProjectsGrid
        header={{
          eyebrow: "Projetos selecionados",
          title: "Três maneiras de aproximar espaço e cotidiano.",
          description:
            "Projetos, lugares e créditos desta experiência são demonstrativos.",
          titleAs: "h2",
        }}
        projects={studioProjectCards}
        columns={2}
        variant="editorial"
        className="bg-surface border-y"
      />

      <FeaturedProject
        eyebrow={`${featured.project.category} · ${featured.location}`}
        title={featured.project.title}
        description={featured.narrative.introduction}
        titleAs="h2"
        image={{
          ...featured.project.image,
          sizes: "(max-width: 1024px) 100vw, 1200px",
        }}
        href={featured.project.href}
        linkLabel="Ver projeto completo"
        layout="editorial"
        ratio="wide"
      />

      <AboutSplit
        eyebrow="Estúdio"
        title="Desenhar o essencial, observar o que muda."
        description="O Estúdio Orla é uma identidade fictícia que combina investigação material, escuta e clareza técnica. O conteúdo demonstra uma presença autoral sem apresentar experiência inventada como credencial real."
        titleAs="h2"
        image={{
          src: "/images/site-orla/studio/worktable.svg",
          alt: "Mesa de trabalho com desenhos e amostras de materiais",
          sizes: "(max-width: 1024px) 100vw, 50vw",
        }}
        imagePosition="right"
        mobileContentOrder="text-first"
        ratio="landscape"
        action={{
          label: "Conhecer o estúdio",
          href: `${studioOrlaPath}/sobre`,
          variant: "outline",
        }}
      />

      <CTASection
        eyebrow="Novos projetos"
        title="Toda conversa começa pelo contexto."
        description="Conheça os canais demonstrativos e veja quais informações orientariam um primeiro encontro."
        titleAs="h2"
        primaryAction={{
          label: "Entrar em contato",
          href: `${studioOrlaPath}/contato`,
        }}
        secondaryAction={{
          label: "Rever projetos",
          href: `${studioOrlaPath}/projetos`,
          variant: "outline",
        }}
        layout="split"
        surface="primary"
      />
    </>
  );
}
