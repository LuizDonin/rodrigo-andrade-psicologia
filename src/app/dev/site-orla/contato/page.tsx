import { ContactSection } from "@/components/sections/contact";
import { HeroCentered } from "@/components/sections/hero";
import {
  createStudioOrlaMetadata,
  studioOrlaConfig,
} from "@/config/studio-orla";
import { studioOrlaPages } from "@/content/site-orla/pages";

export const metadata = createStudioOrlaMetadata(
  "Contato",
  "Canais demonstrativos para iniciar uma conversa com o fictício Estúdio Orla.",
);

export default function StudioOrlaContactPage() {
  return (
    <>
      <HeroCentered
        eyebrow="Contato demonstrativo"
        title={studioOrlaPages.contact.title}
        description={studioOrlaPages.contact.description}
        titleAs="h1"
      />
      <ContactSection
        eyebrow="Canais"
        title="Uma conversa clara começa com contexto."
        description="Em um site real, informe localização, tipo de projeto, prazo desejado e como prefere ser contatado. Os dados abaixo são fictícios."
        titleAs="h2"
        email={{
          label: "E-mail demonstrativo",
          value: studioOrlaConfig.contact.email,
        }}
        phone={{
          label: "Telefone demonstrativo",
          value: studioOrlaConfig.contact.phone,
        }}
        address={studioOrlaConfig.contact.address}
        socialLinks={studioOrlaConfig.social}
      />
    </>
  );
}
