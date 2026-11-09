import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.isIndexable) return [];

  return [{ url: siteConfig.url, changeFrequency: "monthly", priority: 1 }];
}
