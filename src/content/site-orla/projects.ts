import type { Project } from "@/components/sections/projects";
import { studioOrlaPath } from "@/config/studio-orla";
import type { StudioProject } from "@/types/studio-project";

export const studioProjects = [
  {
    slug: "casa-areia",
    project: {
      id: "casa-areia",
      title: "Casa Areia",
      category: "Residencial",
      description:
        "Uma casa térrea fictícia organizada por pátios, sombra e continuidade entre dentro e fora.",
      href: `${studioOrlaPath}/projetos/casa-areia`,
      image: {
        src: "/images/site-orla/projects/casa-areia/cover.svg",
        alt: "Casa térrea de volumes claros voltada para um jardim",
        sizes: "(max-width: 767px) 100vw, 58vw",
        objectPosition: "center",
      },
    },
    seo: {
      title: "Casa Areia",
      description:
        "Projeto residencial fictício do Estúdio Orla organizado por pátios, sombra e materiais naturais.",
      socialImage: "/images/site-orla/projects/casa-areia/cover.svg",
    },
    location: "Itupeva, SP",
    year: "2025",
    scope: ["Arquitetura", "Interiores", "Acompanhamento de obra"],
    credits: [
      { role: "Arquitetura", name: "Estúdio Orla · equipe fictícia" },
      { role: "Imagens", name: "Composições demonstrativas do projeto" },
    ],
    narrative: {
      introduction:
        "A Casa Areia parte de uma rotina tranquila e de um terreno longitudinal. Os ambientes se distribuem ao redor de dois pátios que filtram luz, ventilação e vistas.",
      concept:
        "Planos baixos, beirais generosos e uma paleta mineral criam continuidade. A narrativa é fictícia e demonstra como apresentar decisões espaciais sem transformar o texto em memorial técnico.",
    },
    gallery: [
      {
        id: "casa-areia-patio",
        src: "/images/site-orla/projects/casa-areia/patio.svg",
        alt: "Pátio interno com vegetação e paredes em tom de areia",
        caption: "Pátio central · imagem demonstrativa",
        sizes: "(max-width: 767px) 100vw, 58vw",
      },
      {
        id: "casa-areia-sala",
        src: "/images/site-orla/projects/casa-areia/interior.svg",
        alt: "Sala com mobiliário baixo e abertura para o jardim",
        caption: "Sala e jardim · imagem demonstrativa",
        sizes: "(max-width: 767px) 100vw, 42vw",
      },
      {
        id: "casa-areia-luz",
        src: "/images/site-orla/projects/casa-areia/light.svg",
        alt: "Luz atravessando uma parede curva em acabamento mineral",
        caption: "Luz da tarde · imagem demonstrativa",
        sizes: "(max-width: 767px) 100vw, 58vw",
      },
    ],
    featured: true,
  },
  {
    slug: "apartamento-linha",
    project: {
      id: "apartamento-linha",
      title: "Apartamento Linha",
      category: "Interiores",
      description:
        "Marcenaria contínua e poucos materiais reorganizam um apartamento urbano fictício.",
      href: `${studioOrlaPath}/projetos/apartamento-linha`,
      image: {
        src: "/images/site-orla/projects/apartamento-linha/cover.svg",
        alt: "Interior contemporâneo com estante linear em madeira",
        sizes: "(max-width: 767px) 100vw, 42vw",
        objectPosition: "center",
      },
    },
    seo: {
      title: "Apartamento Linha",
      description:
        "Projeto fictício de interiores do Estúdio Orla com marcenaria contínua e organização flexível.",
      socialImage: "/images/site-orla/projects/apartamento-linha/cover.svg",
    },
    location: "São Paulo, SP",
    year: "2024",
    scope: ["Interiores", "Marcenaria", "Curadoria de mobiliário"],
    credits: [
      { role: "Interiores", name: "Estúdio Orla · equipe fictícia" },
      { role: "Imagens", name: "Composições demonstrativas do projeto" },
    ],
    narrative: {
      introduction:
        "O Apartamento Linha usa uma peça contínua de marcenaria para reunir biblioteca, armazenamento e passagens. A intervenção preserva áreas livres para diferentes usos ao longo do dia.",
      concept:
        "Madeira, pedra clara e tecidos naturais formam uma base silenciosa. Cor e objetos aparecem em pontos precisos, permitindo que o espaço acompanhe mudanças de rotina.",
    },
    gallery: [
      {
        id: "linha-estante",
        src: "/images/site-orla/projects/apartamento-linha/shelving.svg",
        alt: "Estante de madeira atravessando a sala do apartamento",
        caption: "Marcenaria contínua · imagem demonstrativa",
        sizes: "(max-width: 767px) 100vw, 58vw",
      },
      {
        id: "linha-cozinha",
        src: "/images/site-orla/projects/apartamento-linha/kitchen.svg",
        alt: "Cozinha integrada com bancada clara e armários de madeira",
        caption: "Cozinha integrada · imagem demonstrativa",
        sizes: "(max-width: 767px) 100vw, 42vw",
      },
      {
        id: "linha-detalhe",
        src: "/images/site-orla/projects/apartamento-linha/detail.svg",
        alt: "Detalhe de encontro entre madeira, pedra e metal escuro",
        caption: "Encontro de materiais · imagem demonstrativa",
        sizes: "(max-width: 767px) 100vw, 58vw",
      },
    ],
  },
  {
    slug: "pousada-entre-patios",
    project: {
      id: "pousada-entre-patios",
      title: "Pousada Entre Pátios",
      category: "Hospitalidade",
      description:
        "Uma hospedagem fictícia em que percursos sombreados conectam quartos, jardins e áreas comuns.",
      href: `${studioOrlaPath}/projetos/pousada-entre-patios`,
      image: {
        src: "/images/site-orla/projects/pousada-entre-patios/cover.svg",
        alt: "Pousada de volumes terrosos entre jardins tropicais",
        sizes: "(max-width: 767px) 100vw, 58vw",
        objectPosition: "center",
      },
    },
    seo: {
      title: "Pousada Entre Pátios",
      description:
        "Projeto fictício de hospitalidade do Estúdio Orla com percursos sombreados e jardins internos.",
      socialImage: "/images/site-orla/projects/pousada-entre-patios/cover.svg",
    },
    location: "Paraty, RJ",
    year: "2026",
    scope: ["Arquitetura", "Interiores", "Paisagismo conceitual"],
    credits: [
      { role: "Arquitetura", name: "Estúdio Orla · equipe fictícia" },
      { role: "Imagens", name: "Composições demonstrativas do projeto" },
    ],
    narrative: {
      introduction:
        "A Pousada Entre Pátios organiza doze acomodações fictícias em pequenos núcleos. O percurso alterna compressão, sombra e abertura para marcar a chegada a cada ambiente.",
      concept:
        "Muros terrosos, coberturas leves e vegetação definem uma experiência de escala doméstica. Áreas comuns se abrem para pátios que ajudam a orientar e ventilar o conjunto.",
    },
    gallery: [
      {
        id: "pousada-chegada",
        src: "/images/site-orla/projects/pousada-entre-patios/arrival.svg",
        alt: "Caminho sombreado entre muros terrosos e vegetação",
        caption: "Chegada entre muros · imagem demonstrativa",
        sizes: "(max-width: 767px) 100vw, 58vw",
      },
      {
        id: "pousada-quarto",
        src: "/images/site-orla/projects/pousada-entre-patios/room.svg",
        alt: "Quarto aberto para um pequeno jardim privado",
        caption: "Quarto e jardim · imagem demonstrativa",
        sizes: "(max-width: 767px) 100vw, 42vw",
      },
      {
        id: "pousada-patio",
        src: "/images/site-orla/projects/pousada-entre-patios/courtyard.svg",
        alt: "Área comum ao redor de um pátio com espelho d'água",
        caption: "Pátio comum · imagem demonstrativa",
        sizes: "(max-width: 767px) 100vw, 58vw",
      },
    ],
  },
] as const satisfies readonly StudioProject[];

export const studioProjectCards = studioProjects.map(
  ({ project }) => project,
) satisfies readonly Project[];

export function getStudioProject(slug: string) {
  return studioProjects.find((item) => item.slug === slug);
}

export function getNextStudioProject(slug: string) {
  const index = studioProjects.findIndex((item) => item.slug === slug);
  if (index < 0) return undefined;
  return studioProjects[(index + 1) % studioProjects.length];
}
