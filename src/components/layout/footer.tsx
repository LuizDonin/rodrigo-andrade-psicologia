import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <Container className="flex flex-col gap-5 text-sm sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-heading text-2xl font-semibold">
            {siteConfig.name}
          </p>
          <p className="mt-1 opacity-75">Psicólogo · CRP 07/35989</p>
        </div>
        <p className="opacity-70">
          © {siteConfig.copyrightYear} · Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
