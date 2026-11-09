import type { ReactNode } from "react";
import { Plus } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import {
  SectionHeading,
  type SectionHeadingContent,
} from "@/components/sections/shared/section-heading";
import { Text } from "@/components/ui/text";

export type FAQItem = {
  id: string;
  question: string;
  answer: ReactNode;
};

export type FAQSectionProps = {
  id?: string;
  className?: string;
  header?: SectionHeadingContent;
  items: readonly FAQItem[];
  surface?: "default" | "muted";
};

export function FAQSection({
  id,
  className,
  header,
  items,
  surface = "default",
}: FAQSectionProps) {
  return (
    <Section id={id} spacing="lg" surface={surface} className={className}>
      <Container size="lg">
        {header ? <SectionHeading {...header} className="mb-10" /> : null}
        <div className="divide-y border-y">
          {items.map((item) => (
            <details key={item.id} className="group min-w-0">
              <summary className="focus-visible:ring-ring hover:text-primary flex cursor-pointer list-none items-center justify-between gap-6 rounded-sm py-6 font-semibold transition-colors [transition-duration:var(--duration-fast)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none motion-reduce:transition-none [&::-webkit-details-marker]:hidden">
                <span className="min-w-0 [overflow-wrap:anywhere]">
                  {item.question}
                </span>
                <Plus
                  aria-hidden="true"
                  className="size-5 shrink-0 transition-transform [transition-duration:var(--duration-fast)] group-open:rotate-45 motion-reduce:transition-none"
                />
              </summary>
              <Text as="div" tone="muted" measure className="pr-10 pb-6">
                {item.answer}
              </Text>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
