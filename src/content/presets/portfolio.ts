import type { AboutSplitProps } from "@/components/sections/about";
import type { ContactSectionProps } from "@/components/sections/contact";
import type { GalleryImage } from "@/components/sections/gallery";
import type { HeroSplitProps } from "@/components/sections/hero";
import type {
  FeaturedProjectProps,
  Project,
} from "@/components/sections/projects";

export const portfolioContent = {
  hero: {
    eyebrow: "Lume Atelier · arquivo 2026",
    title: "Imagens para histórias que pedem tempo e presença.",
    description:
      "Um portfólio fictício de direção de arte e fotografia, construído como uma sequência editorial de ritmo, matéria e luz.",
    titleAs: "h1",
    primaryAction: { label: "Explorar projetos", href: "#projetos" },
    secondaryAction: {
      label: "Conhecer o atelier",
      href: "#atelier",
      variant: "ghost",
    },
    image: {
      src: "/images/showcase/hero-landscape.svg",
      alt: "Paisagem costeira estilizada em luz de entardecer",
      sizes: "(max-width: 1024px) 100vw, 50vw",
      preload: true,
      objectPosition: "center",
    },
    imagePosition: "right",
    ratio: "portrait",
  } satisfies HeroSplitProps,
  projects: [
    {
      id: "mar-aberto",
      title: "Mar aberto",
      category: "Narrativa de paisagem",
      description:
        "Um ensaio demonstrativo sobre horizonte, deslocamento e pausa.",
      href: "#projeto-destaque",
      image: {
        src: "/images/showcase/project-coast.svg",
        alt: "Costa estilizada com mar e formações rochosas",
        sizes: "(max-width: 767px) 100vw, 58vw",
      },
    },
    {
      id: "entre-planos",
      title: "Entre planos",
      category: "Espaço e matéria",
      description:
        "Geometrias silenciosas organizam uma série sobre permanência.",
      href: "#projeto-destaque",
      image: {
        src: "/images/showcase/project-interior.svg",
        alt: "Interior estilizado com planos geométricos e luz lateral",
        sizes: "(max-width: 767px) 100vw, 42vw",
      },
    },
    {
      id: "cidade-vertical",
      title: "Cidade vertical",
      category: "Arquitetura",
      description:
        "Escala e repetição em uma leitura gráfica da cidade fictícia.",
      href: "#projeto-destaque",
      image: {
        src: "/images/showcase/project-tower.svg",
        alt: "Torre estilizada recortada contra o céu",
        sizes: "(max-width: 767px) 100vw, 58vw",
      },
    },
  ] satisfies readonly Project[],
  featured: {
    id: "projeto-destaque",
    eyebrow: "Projeto em foco · fictício",
    title: "Casa Pátio: a luz como elemento de orientação.",
    titleAs: "h2",
    description:
      "Uma narrativa visual demonstrativa acompanha a passagem do dia por superfícies, aberturas e encontros entre interior e jardim.",
    image: {
      src: "/images/showcase/project-courtyard.svg",
      alt: "Pátio arquitetônico estilizado com vegetação e luz",
      sizes: "(max-width: 1024px) 100vw, 1200px",
    },
    href: "#contato",
    linkLabel: "Conversar sobre uma narrativa",
    layout: "editorial",
    ratio: "wide",
  } satisfies FeaturedProjectProps,
  about: {
    id: "atelier",
    eyebrow: "Sobre o atelier",
    title: "Direção precisa. Espaço para o inesperado.",
    titleAs: "h2",
    description:
      "Lume Atelier é uma identidade fictícia criada para mostrar como a mesma biblioteca assume uma voz editorial. A composição privilegia sequência, contraste e uma leitura mais contemplativa.",
    image: {
      src: "/images/showcase/hero-studio.svg",
      alt: "Composição abstrata representando um atelier criativo",
      sizes: "(max-width: 1024px) 100vw, 50vw",
    },
    imagePosition: "right",
    mobileContentOrder: "text-first",
    ratio: "portrait",
    action: { label: "Ver contato", href: "#contato", variant: "outline" },
  } satisfies AboutSplitProps,
  gallery: [
    {
      id: "gallery-coast",
      src: "/images/showcase/project-coast.svg",
      alt: "Estudo visual de uma costa estilizada",
      caption: "Estudo de horizonte · demonstração",
      sizes: "(max-width: 767px) 100vw, 58vw",
    },
    {
      id: "gallery-interior",
      src: "/images/showcase/project-interior.svg",
      alt: "Estudo visual de um interior estilizado",
      caption: "Luz lateral · demonstração",
      sizes: "(max-width: 767px) 100vw, 42vw",
    },
    {
      id: "gallery-tower",
      src: "/images/showcase/project-tower.svg",
      alt: "Estudo visual de uma torre estilizada",
      caption: "Ritmo vertical · demonstração",
      sizes: "(max-width: 767px) 100vw, 58vw",
    },
  ] satisfies readonly GalleryImage[],
  contact: {
    id: "contato",
    eyebrow: "Novos projetos",
    title: "Vamos construir a próxima narrativa.",
    titleAs: "h2",
    description:
      "Os canais abaixo são demonstrativos. Substitua-os pelos dados reais do profissional antes de publicar.",
    email: { value: "atelier@example.com" },
    socialLinks: [
      { label: "Instagram demonstrativo", href: "https://example.com" },
      { label: "Behance demonstrativo", href: "https://example.com" },
    ],
  } satisfies ContactSectionProps,
} as const;
