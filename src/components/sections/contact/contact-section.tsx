import type { ReactNode } from "react";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import {
  SectionHeading,
  type SectionHeadingContent,
} from "@/components/sections/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { Text } from "@/components/ui/text";

type ContactValue = {
  label?: string;
  value: string;
};

export type ContactSocialLink = {
  label: string;
  href: string;
};

export type ContactSectionProps = SectionHeadingContent & {
  id?: string;
  className?: string;
  email?: ContactValue;
  phone?: ContactValue;
  whatsapp?: { label?: string; href: string };
  address?: ReactNode;
  socialLinks?: readonly ContactSocialLink[];
  action?: { label: string; href: string };
};

function normalizePhone(number: string) {
  return number.replace(/[^+\d]/g, "");
}

export function ContactSection({
  id,
  className,
  email,
  phone,
  whatsapp,
  address,
  socialLinks = [],
  action,
  ...heading
}: ContactSectionProps) {
  return (
    <Section id={id} spacing="lg" className={className}>
      <Container>
        <div className="grid min-w-0 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <SectionHeading {...heading} />
            {action ? (
              <Button asChild size="lg" className="mt-8">
                <Link href={action.href} variant="unstyled">
                  {action.label}
                </Link>
              </Button>
            ) : null}
          </div>

          <div className="min-w-0 space-y-8">
            <address className="grid gap-5 not-italic sm:grid-cols-2">
              {email ? (
                <div className="min-w-0">
                  <Mail
                    aria-hidden="true"
                    className="text-primary mb-3 size-5"
                  />
                  <Text size="sm" tone="muted">
                    {email.label ?? "E-mail"}
                  </Text>
                  <Link
                    href={`mailto:${email.value}`}
                    className="mt-1 max-w-full [overflow-wrap:anywhere]"
                  >
                    {email.value}
                  </Link>
                </div>
              ) : null}
              {phone ? (
                <div className="min-w-0">
                  <Phone
                    aria-hidden="true"
                    className="text-primary mb-3 size-5"
                  />
                  <Text size="sm" tone="muted">
                    {phone.label ?? "Telefone"}
                  </Text>
                  <Link
                    href={`tel:${normalizePhone(phone.value)}`}
                    className="mt-1"
                  >
                    {phone.value}
                  </Link>
                </div>
              ) : null}
              {whatsapp ? (
                <div className="min-w-0">
                  <MessageCircle
                    aria-hidden="true"
                    className="text-primary mb-3 size-5"
                  />
                  <Text size="sm" tone="muted">
                    WhatsApp
                  </Text>
                  <Link
                    href={whatsapp.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1"
                  >
                    {whatsapp.label ?? "Iniciar conversa"}
                    <ArrowUpRight aria-hidden="true" className="ml-1 size-4" />
                  </Link>
                </div>
              ) : null}
              {address ? (
                <div className="min-w-0">
                  <MapPin
                    aria-hidden="true"
                    className="text-primary mb-3 size-5"
                  />
                  <Text size="sm" tone="muted" className="mb-1">
                    Endereço
                  </Text>
                  <Text>{address}</Text>
                </div>
              ) : null}
            </address>

            {socialLinks.length > 0 ? (
              <div className="border-t pt-6">
                <Text size="sm" tone="muted" className="mb-3">
                  Redes sociais
                </Text>
                <ul className="flex flex-wrap gap-x-5 gap-y-3">
                  {socialLinks.map((social) => (
                    <li key={`${social.label}-${social.href}`}>
                      <Link
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium"
                      >
                        {social.label}
                        <ArrowUpRight
                          aria-hidden="true"
                          className="ml-1 size-4"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}
