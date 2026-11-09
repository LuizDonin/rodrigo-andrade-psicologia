import { AboutSplit } from "@/components/sections/about";
import { CTASection } from "@/components/sections/cta";
import { ImageGallery } from "@/components/sections/gallery";
import { HeroSplit } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services";
import { createStudioOrlaMetadata, studioOrlaPath } from "@/config/studio-orla";
import { studioOrlaPages, studioOrlaServices } from "@/content/site-orla/pages";

export const metadata = createStudioOrlaMetadata(
  "Sobre",
  "Conheça a abordagem fictícia do Estúdio Orla para arquitetura, interiores e acompanhamento.",
  "/images/site-orla/studio/worktable.svg",
);

export default function StudioOrlaAboutPage() {
  return (
    <>
      <HeroSplit
        eyebrow="Sobre o Estúdio Orla"
        title={studioOrlaPages.about.title}
        description={studioOrlaPages.about.description}
        titleAs="h1"
        primaryAction={{
          label: "Ver projetos",
          href: `${studioOrlaPath}/projetos`,
        }}
        image={{
          src: "/images/site-orla/studio/worktable.svg",
          alt: "Mesa de trabalho com desenhos e amostras de materiais",
          sizes: "(max-width: 1024px) 100vw, 50vw",
          preload: true,
        }}
        imagePosition="right"
        ratio="landscape"
      />

      <AboutSplit
        eyebrow="Abordagem"
        title="Escuta, síntese e presença material."
        description="Cada projeto demonstrativo parte do entendimento de rotinas, limites e oportunidades do lugar. As decisões são apresentadas com clareza, sem separar conceito, uso e viabilidade."
        titleAs="h2"
        image={{
          src: "/images/site-orla/studio/materials.svg",
          alt: "Composição de amostras minerais, madeira e tons terrosos",
          sizes: "(max-width: 1024px) 100vw, 50vw",
        }}
        imagePosition="left"
        ratio="square"
        action={{
          label: "Iniciar uma conversa",
          href: `${studioOrlaPath}/contato`,
        }}
      />

      <ServicesGrid
        header={{
          eyebrow: "Atuação",
          title: "Do espaço construído aos detalhes que sustentam a rotina.",
          description:
            "Escopos demonstrativos que deverão ser substituídos pelos serviços reais antes de uma publicação.",
          titleAs: "h2",
        }}
        items={studioOrlaServices}
        columns={3}
        variant="bordered"
      />

      <ImageGallery
        header={{
          eyebrow: "Caderno de processo",
          title: "Matéria, desenho e observação.",
          titleAs: "h2",
        }}
        images={[
          {
            id: "process-table",
            src: "/images/site-orla/studio/worktable.svg",
            alt: "Desenhos e materiais dispostos sobre uma mesa",
            caption: "Estudo e síntese · imagem demonstrativa",
            sizes: "(max-width: 767px) 100vw, 58vw",
          },
          {
            id: "process-materials",
            src: "/images/site-orla/studio/materials.svg",
            alt: "Amostras abstratas de materiais em paleta mineral",
            caption: "Paleta material · imagem demonstrativa",
            sizes: "(max-width: 767px) 100vw, 42vw",
          },
        ]}
        variant="editorial"
        className="bg-muted"
      />

      <CTASection
        title="Veja como essa abordagem aparece nos projetos."
        titleAs="h2"
        primaryAction={{
          label: "Explorar portfólio",
          href: `${studioOrlaPath}/projetos`,
        }}
        secondaryAction={{
          label: "Entrar em contato",
          href: `${studioOrlaPath}/contato`,
          variant: "outline",
        }}
        layout="split"
        surface="primary"
      />
    </>
  );
}
