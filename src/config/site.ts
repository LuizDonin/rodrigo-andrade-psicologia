import { resolveBasePath } from "@/config/deployment";

export type SiteConfig = {
  name: string;
  professionalTitle: string;
  registration: string;
  description: string;
  url: string;
  basePath: string;
  isIndexable: boolean;
  locale: string;
  copyrightYear: number;
  contact: {
    email?: string;
    whatsapp?: string;
    whatsappDisplay?: string;
  };
  social: { instagram?: string; linkedin?: string };
};

const localSiteUrl = "http://localhost:3000";

function resolveSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) return { url: localSiteUrl, isConfigured: false };

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(configuredUrl);
  } catch {
    throw new Error("NEXT_PUBLIC_SITE_URL must be an absolute URL.");
  }

  if (!["http:", "https:"].includes(parsedUrl.protocol)) {
    throw new Error("NEXT_PUBLIC_SITE_URL must use http or https.");
  }

  if (parsedUrl.pathname !== "/" || parsedUrl.search || parsedUrl.hash) {
    throw new Error("NEXT_PUBLIC_SITE_URL must contain only the site origin.");
  }

  return { url: parsedUrl.origin, isConfigured: true };
}

const resolvedSiteUrl = resolveSiteUrl();
const indexableRequested = process.env.SITE_INDEXABLE === "true";
const deploymentBasePath = resolveBasePath();

if (
  indexableRequested &&
  (!resolvedSiteUrl.isConfigured || !resolvedSiteUrl.url.startsWith("https://"))
) {
  throw new Error(
    "SITE_INDEXABLE=true requires NEXT_PUBLIC_SITE_URL to be an explicit HTTPS origin.",
  );
}

export const siteConfig = {
  name: "Rodrigo Criveleto de Andrade",
  professionalTitle: "Psicólogo",
  registration: "CRP 07/35989",
  description:
    "Psicologia Clínica online, fundamentada na Psicanálise, com escuta ética e acolhedora.",
  url: `${resolvedSiteUrl.url}${deploymentBasePath}/`,
  basePath: deploymentBasePath,
  isIndexable: indexableRequested,
  locale: "pt-BR",
  copyrightYear: 2026,
  contact: {
    whatsapp: "555591075674",
    whatsappDisplay: "+55 55 9107-5674",
  },
  social: {},
} satisfies SiteConfig;
