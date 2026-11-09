import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteOrlaShell } from "@/app/dev/site-orla/_components/site-orla-shell";
import { studioOrlaConfig } from "@/config/studio-orla";

export const metadata: Metadata = {
  title: {
    default: studioOrlaConfig.name,
    template: `%s | ${studioOrlaConfig.name}`,
  },
  description: studioOrlaConfig.description,
  robots: { index: false, follow: false, nocache: true },
  openGraph: {
    type: "website",
    locale: studioOrlaConfig.locale.replace("-", "_"),
    siteName: studioOrlaConfig.name,
    title: studioOrlaConfig.name,
    description: studioOrlaConfig.description,
  },
  twitter: {
    card: "summary",
    title: studioOrlaConfig.name,
    description: studioOrlaConfig.description,
  },
};

export default function SiteOrlaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  if (process.env.NODE_ENV !== "development") notFound();

  return <SiteOrlaShell>{children}</SiteOrlaShell>;
}
