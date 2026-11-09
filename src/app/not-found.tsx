import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="conteudo">
      <Container className="flex min-h-[60vh] flex-col items-start justify-center py-20">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase">
          Erro 404
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Página não encontrada.
        </h1>
        <p className="text-muted-foreground mt-4 max-w-lg text-lg">
          O endereço pode ter mudado ou a página ainda não existe.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Voltar ao início</Link>
        </Button>
      </Container>
    </main>
  );
}
