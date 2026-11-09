import { Container } from "@/components/layout/container";
import { Link } from "@/components/ui/link";
import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="bg-background/92 sticky top-0 z-40 border-b backdrop-blur-md">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link
          href="/"
          variant="unstyled"
          className="font-heading text-primary max-w-52 text-lg leading-none font-semibold sm:max-w-none sm:text-xl"
        >
          {siteConfig.name}
        </Link>
        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  variant="subtle"
                  className="text-sm font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
