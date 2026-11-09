import type { ReactNode } from "react";

import type { SectionImage } from "@/components/sections/shared/section-media";

export type HeroTitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeroAction = {
  label: string;
  href: string;
  variant?: "default" | "secondary" | "outline" | "ghost";
  target?: "_blank" | "_self";
  rel?: string;
};

export type HeroImage = Omit<SectionImage, "preload"> &
  (
    | { preload?: boolean; priority?: never }
    | { preload?: never; priority?: boolean }
  );

export type HeroContent = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  titleAs?: HeroTitleLevel;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
};

export type HeroSectionProps = HeroContent & {
  id?: string;
  className?: string;
};
