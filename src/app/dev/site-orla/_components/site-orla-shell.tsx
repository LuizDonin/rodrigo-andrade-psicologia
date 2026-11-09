import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Link } from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import {
  studioOrlaConfig,
  studioOrlaPath,
  studioOrlaTheme,
} from "@/config/studio-orla";

export function SiteOrlaShell({ children }: { children: ReactNode }) {
  return (
    <div
      data-site="studio-orla"
      style={studioOrlaTheme}
      className="bg-background text-foreground flex min-h-screen min-w-0 flex-col overflow-x-clip font-sans"
    >
      <a
        href="#orla-content"
        className="bg-primary text-primary-foreground focus-visible:ring-ring sr-only z-50 rounded-md px-4 py-2 focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus-visible:ring-2"
      >
        Pular para o conteúdo
      </a>

      <header className="bg-background/92 sticky top-0 z-40 border-b backdrop-blur">
        <Container className="flex flex-col items-stretch gap-2 py-3 sm:min-h-18 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-0">
          <div className="min-w-0">
            <Link
              href={studioOrlaPath}
              variant="unstyled"
              className="font-heading block text-lg font-semibold tracking-tight"
            >
              {studioOrlaConfig.name}
            </Link>
            <Text size="sm" tone="muted" className="hidden sm:block">
              {studioOrlaConfig.descriptor}
            </Text>
          </div>

          <nav
            aria-label={`Navegação de ${studioOrlaConfig.name}`}
            className="min-w-0 border-t pt-2 sm:border-t-0 sm:pt-0"
          >
            <ul className="flex w-full items-center justify-between gap-1 sm:w-auto sm:justify-start sm:gap-2">
              {studioOrlaConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    variant="subtle"
                    className="rounded-md px-2 py-2 text-sm font-medium sm:px-3"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </header>

      <main id="orla-content" className="min-w-0 flex-1">
        {children}
      </main>

      <footer className="bg-foreground text-background border-t py-10">
        <Container className="grid gap-8 sm:grid-cols-2 sm:items-end">
          <div>
            <Text as="p" size="lead" tone="inherit" className="font-heading">
              {studioOrlaConfig.name}
            </Text>
            <Text size="sm" tone="inherit" className="mt-2 max-w-xl opacity-75">
              {studioOrlaConfig.footerNote}
            </Text>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
            <Link
              href={`${studioOrlaPath}/projetos`}
              variant="unstyled"
              className="text-sm underline underline-offset-4"
            >
              Projetos
            </Link>
            <Link
              href={`${studioOrlaPath}/contato`}
              variant="unstyled"
              className="text-sm underline underline-offset-4"
            >
              Contato
            </Link>
            <Link
              href="/"
              variant="unstyled"
              className="text-sm underline underline-offset-4"
            >
              Website Starter Kit
            </Link>
          </div>
        </Container>
      </footer>
    </div>
  );
}
