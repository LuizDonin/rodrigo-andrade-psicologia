import { siteConfig } from "@/config/site";

export const whatsappMessage =
  "Olá, Rodrigo. Encontrei seu site e gostaria de saber mais sobre o atendimento psicológico online.";

export function buildWhatsAppHref(phone: string, message: string) {
  const normalizedPhone = phone.replace(/\D/g, "");

  if (!normalizedPhone) {
    throw new Error("A WhatsApp phone number is required.");
  }

  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}

export const whatsappHref = buildWhatsAppHref(
  siteConfig.contact.whatsapp,
  whatsappMessage,
);
