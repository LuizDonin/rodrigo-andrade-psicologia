export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  isIndexable: boolean;
  locale: string;
  copyrightYear: number;
  contact: { email?: string; whatsapp?: string };
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
const githubRepositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const deploymentBasePath =
  process.env.GITHUB_ACTIONS === "true" && githubRepositoryName
    ? `/${githubRepositoryName}`
    : "";

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
  description:
    "Psicologia Clínica online, fundamentada na Psicanálise, com escuta ética e acolhedora.",
  url: `${resolvedSiteUrl.url}${deploymentBasePath}`,
  isIndexable: indexableRequested,
  locale: "pt-BR",
  copyrightYear: 2026,
  contact: {
    whatsapp: "555591075674",
  },
  social: {},
} satisfies SiteConfig;
