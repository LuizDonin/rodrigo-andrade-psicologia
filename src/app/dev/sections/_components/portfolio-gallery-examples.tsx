import { Container } from "@/components/layout/container";
import { ImageGallery, type GalleryImage } from "@/components/sections/gallery";
import {
  FeaturedProject,
  ProjectsGrid,
  type Project,
} from "@/components/sections/projects";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const projects: readonly Project[] = [
  {
    id: "courtyard-house",
    title: "Casa Pátio",
    category: "Arquitetura residencial",
    description:
      "Uma residência organizada ao redor da luz natural, da vegetação e de espaços de convivência protegidos.",
    href: "#featured-project",
    image: {
      src: "/images/showcase/project-courtyard.svg",
      alt: "Pátio geométrico com volumes claros, vegetação e piscina",
      sizes: "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
    },
  },
  {
    id: "horizon-tower",
    title: "Torre Horizonte",
    category: "Uso misto",
    description:
      "Estrutura vertical que combina ritmo urbano, áreas comuns e uma materialidade acolhedora.",
    href: "#gallery-editorial",
    image: {
      src: "/images/showcase/project-tower.svg",
      alt: "Torre abstrata em terracota contra um céu azul",
      sizes: "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
      objectPosition: "center 38%",
    },
  },
  {
    id: "quiet-interior",
    title: "Interiores Silenciosos",
    category: "Design de interiores",
    description:
      "Uma pesquisa sobre escala, textura e permanência em ambientes de uso cotidiano.",
    href: "#gallery-uniform",
    image: {
      src: "/images/showcase/project-interior.svg",
      alt: "Sala minimalista com mobiliário escuro e iluminação quente",
      sizes: "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
    },
  },
  {
    id: "coastal-retreat",
    title: "Refúgio Atlântico",
    category: "Hospitalidade",
    description:
      "Um projeto costeiro de longa permanência, concebido para enquadrar a paisagem e acompanhar diferentes ritmos de ocupação sem transformar a arquitetura em mero pano de fundo.",
    href: "#featured-project",
    image: {
      src: "/images/showcase/project-coast.svg",
      alt: "Casa branca entre falésias e o mar azul",
      sizes: "(max-width: 768px) 100vw, 50vw",
    },
  },
  {
    id: "material-study",
    title: "Estudo de Matéria",
    category: "Pesquisa",
    href: "#gallery-editorial",
    image: {
      src: "/images/showcase/hero-studio.svg",
      alt: "Composição abstrata de materiais em tons naturais",
      sizes: "(max-width: 768px) 100vw, 50vw",
    },
  },
] as const;

const galleryImages: readonly GalleryImage[] = [
  {
    id: "gallery-courtyard",
    src: "/images/showcase/project-courtyard.svg",
    alt: "Vista ampla do pátio e da piscina",
    caption: "Casa Pátio — luz, água e vegetação definem o centro do projeto.",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  {
    id: "gallery-tower",
    src: "/images/showcase/project-tower.svg",
    alt: "Fachada vertical da Torre Horizonte",
    caption: "Torre Horizonte — estudo de ritmo na fachada.",
    sizes: "(max-width: 768px) 100vw, 50vw",
    objectPosition: "center 35%",
  },
  {
    id: "gallery-interior",
    src: "/images/showcase/project-interior.svg",
    alt: "Interior com formas curvas e luz suave",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  {
    id: "gallery-coast",
    src: "/images/showcase/project-coast.svg",
    alt: "Casa costeira enquadrada pelo mar",
    caption: "Refúgio Atlântico — a paisagem como parte da arquitetura.",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  {
    id: "gallery-detail",
    src: "/images/showcase/hero-studio.svg",
    alt: "Detalhe abstrato de materiais e superfícies",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
] as const;

const uniformThreeColumnProjects = projects.slice(0, 3).map((project) => ({
  ...project,
  image: {
    ...project.image,
    sizes: "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw",
  },
}));

const editorialTwoColumnProjects = projects.map((project, index) => ({
  ...project,
  image: {
    ...project.image,
    sizes:
      index % 2 === 0
        ? "(max-width: 767px) 100vw, 58vw"
        : "(max-width: 767px) 100vw, 42vw",
  },
}));

const uniformTwoColumnGallery = galleryImages.slice(0, 4).map((image) => ({
  ...image,
  sizes: "(max-width: 639px) 100vw, 50vw",
}));

const editorialGallery = galleryImages.map((image, index) => ({
  ...image,
  sizes:
    index % 2 === 0
      ? "(max-width: 767px) 100vw, 58vw"
      : "(max-width: 767px) 100vw, 42vw",
}));

function CategoryIntro() {
  return (
    <section
      id="portfolio-gallery"
      className="bg-surface py-section-sm scroll-mt-28 border-y"
    >
      <Container>
        <Text
          size="sm"
          tone="primary"
          className="mb-3 font-semibold tracking-[0.16em] uppercase"
        >
          05 / Portfolio &amp; Gallery
        </Text>
        <Heading as="h2" size="h2">
          Projetos e imagens com ritmo editorial.
        </Heading>
        <Text size="lead" tone="muted" measure className="mt-4">
          Grids apresentam projetos navegáveis; galerias constroem sequências
          visuais sem transformar imagens estáticas em controles interativos.
        </Text>
      </Container>
    </section>
  );
}

export function PortfolioGalleryExamples() {
  return (
    <>
      <CategoryIntro />

      <ProjectsGrid
        header={{
          eyebrow: "Grid uniforme / três colunas",
          title: "Uma visão consistente do portfólio.",
          titleAs: "h3",
          description:
            "Três projetos com descrições de extensões diferentes mantêm proporção e alinhamento sem truncar conteúdo.",
        }}
        projects={uniformThreeColumnProjects}
        columns={3}
        itemTitleAs="h4"
      />

      <ProjectsGrid
        className="bg-muted"
        header={{
          eyebrow: "Grid editorial / duas colunas",
          title: "Escala e proporção criam uma sequência mais expressiva.",
          titleAs: "h3",
          description:
            "Cinco itens validam uma quantidade ímpar, imagens verticais e horizontais e uma descrição deliberadamente longa.",
        }}
        projects={editorialTwoColumnProjects}
        columns={2}
        variant="editorial"
        itemTitleAs="h4"
      />

      <FeaturedProject
        id="featured-project"
        eyebrow="Projeto em destaque"
        title="Refúgio Atlântico aproxima arquitetura e horizonte."
        titleAs="h3"
        description="A implantação acompanha a topografia e abre os espaços de convivência para o mar. Materiais duráveis, áreas de transição generosas e enquadramentos precisos permitem que a experiência continue legível em uma narrativa mais longa, sem comprimir a imagem ou transformar o destaque em uma abertura de página."
        image={{
          src: "/images/showcase/project-coast.svg",
          alt: "Casa branca inserida entre falésias e o oceano",
          sizes: "(max-width: 1024px) 100vw, 50vw",
        }}
        href="#gallery-uniform"
        linkLabel="Explorar imagens do projeto"
        imagePosition="right"
        ratio="wide"
      />

      <FeaturedProject
        className="bg-surface"
        eyebrow="Composição editorial"
        title="A imagem ampla conduz a narrativa sem assumir o papel de Hero."
        titleAs="h3"
        description="Título, contexto e navegação permanecem associados ao projeto, enquanto a mídia ocupa sua própria linha e preserva uma proporção previsível."
        image={{
          src: "/images/showcase/project-interior.svg",
          alt: "Interior minimalista com luz quente e mobiliário escuro",
          sizes: "(max-width: 1280px) 100vw, 1280px",
        }}
        layout="editorial"
        ratio="wide"
      />

      <ImageGallery
        id="gallery-uniform"
        header={{
          eyebrow: "Galeria uniforme",
          title: "Uma grade estável para uma série coesa.",
          titleAs: "h3",
          description:
            "Quatro imagens demonstram legendas opcionais e enquadramento consistente, sem links ou comportamentos ocultos.",
        }}
        images={uniformTwoColumnGallery}
        columns={2}
        ratio="square"
      />

      <ImageGallery
        id="gallery-editorial"
        className="bg-muted"
        header={{
          eyebrow: "Galeria editorial",
          title: "Uma sequência previsível para diferentes proporções.",
          titleAs: "h3",
          description:
            "Cinco imagens testam uma lista ímpar. Os itens alternam larguras complementares e preservam o mesmo padrão de composição até o fim da sequência.",
        }}
        images={editorialGallery}
        variant="editorial"
      />
    </>
  );
}
