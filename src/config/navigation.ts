export type NavigationItem = { label: string; href: string };

export const mainNavigation = [
  { label: "Sobre", href: "#sobre" },
  { label: "A escuta", href: "#escuta" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Dúvidas", href: "#duvidas" },
] satisfies NavigationItem[];
