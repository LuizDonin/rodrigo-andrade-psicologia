import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Link } from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import type { PresetConfig } from "@/config/presets";
import { resolveThemeTokens } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function PresetShell({
  config,
  children,
}: {
  config: PresetConfig;
  children: ReactNode;
}) {
  return (
    <div
      data-preset={config.id}
      style={resolveThemeTokens(config.theme)}
      className={cn(
        "bg-background text-foreground flex min-h-screen min-w-0 flex-col overflow-x-clip font-sans",
        config.appearance === "dark" && "dark",
      )}
    >
      <a
        href="#preset-content"
        className="bg-primary text-primary-foreground focus-visible:ring-ring sr-only z-50 rounded-md px-4 py-2 focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus-visible:ring-2"
      >
        Pular para o conteúdo
      </a>

      <header className="bg-background/90 sticky top-0 z-40 border-b backdrop-blur">
        <Container className="flex flex-col items-stretch gap-2 py-3 sm:min-h-16 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:py-0">
          <div className="min-w-0">
            <Link
              href="#preset-content"
              variant="unstyled"
              className="font-heading block truncate text-base font-semibold tracking-tight"
            >
              {config.name}
            </Link>
            <Text size="sm" tone="muted" className="hidden truncate sm:block">
              {config.descriptor}
            </Text>
          </div>
          <nav
            aria-label={`Navegação de ${config.name}`}
            className="min-w-0 border-t pt-2 sm:border-t-0 sm:pt-0"
          >
            <ul className="flex w-full [scrollbar-width:none] items-center justify-between gap-1 overflow-x-auto sm:w-auto sm:justify-start sm:gap-2">
              {config.navigation.map((item) => (
                <li key={item.href} className="shrink-0">
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

      <main id="preset-content" className="min-w-0 flex-1">
        {children}
      </main>

      <footer className="border-t py-8">
        <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Text size="sm" tone="muted">
            {config.name} · {config.footerNote}
          </Text>
          <Link href="/" variant="subtle" className="w-fit text-sm font-medium">
            Voltar ao Website Starter Kit
          </Link>
        </Container>
      </footer>
    </div>
  );
}
