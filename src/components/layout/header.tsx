import { Container } from "@/components/layout/container";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Link } from "@/components/ui/link";
import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="bg-background/94 sticky top-0 z-40 border-b backdrop-blur-md">
      <Container className="flex h-[4.25rem] items-center justify-between gap-4 md:min-h-20">
        <Link
          href="/"
          variant="unstyled"
          className="font-heading text-primary text-xl leading-none font-semibold md:hidden"
          aria-label="Rodrigo Criveleto de Andrade — página inicial"
        >
          Rodrigo Andrade
        </Link>
        <Link
          href="/"
          variant="unstyled"
          className="font-heading text-primary hidden text-xl leading-none font-semibold md:inline-flex"
        >
          {siteConfig.name}
        </Link>

        <MobileNavigation items={mainNavigation} />

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-x-6">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  variant="subtle"
                  className="group/nav relative inline-flex min-h-8 items-center text-sm font-medium after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none"
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
