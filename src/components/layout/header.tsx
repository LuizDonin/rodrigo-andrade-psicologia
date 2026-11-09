import { Container } from "@/components/layout/container";
import { Link } from "@/components/ui/link";
import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="bg-background/94 sticky top-0 z-40 border-b backdrop-blur-md">
      <Container className="flex min-h-20 flex-col justify-center gap-4 py-4 md:flex-row md:items-center md:justify-between md:gap-6 md:py-0">
        <Link
          href="/"
          variant="unstyled"
          className="font-heading text-primary self-start text-lg leading-[1.05] font-semibold sm:text-xl md:self-auto"
        >
          {siteConfig.name}
        </Link>
        <nav aria-label="Navegação principal" className="w-full md:w-auto">
          <ul className="grid grid-cols-2 gap-x-5 gap-y-2 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 md:flex-nowrap">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  variant="subtle"
                  className="group/nav relative inline-flex min-h-8 items-center text-sm font-medium after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:after:scale-x-100 motion-reduce:after:transition-none"
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
