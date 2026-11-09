import type { GalleryImage } from "@/components/sections/gallery";
import type { Project } from "@/components/sections/projects";

export type StudioProjectCredit = {
  role: string;
  name: string;
};

export type StudioProject = {
  slug: string;
  project: Project;
  seo: {
    title: string;
    description: string;
    socialImage: string;
  };
  location: string;
  year: string;
  scope: readonly string[];
  credits: readonly StudioProjectCredit[];
  narrative: {
    introduction: string;
    concept?: string;
  };
  gallery: readonly GalleryImage[];
  featured?: boolean;
};
