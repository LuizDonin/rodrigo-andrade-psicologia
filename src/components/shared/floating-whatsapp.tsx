"use client";

import { useEffect, useState } from "react";

type FloatingWhatsAppProps = {
  href: string;
  contactCtaId: string;
};

export function FloatingWhatsApp({
  href,
  contactCtaId,
}: FloatingWhatsAppProps) {
  const [isContactCtaVisible, setIsContactCtaVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    const contactCta = document.getElementById(contactCtaId);
    const mobileMenu = document.getElementById("mobile-navigation-panel");

    const contactObserver = contactCta
      ? new IntersectionObserver(
          ([entry]) => setIsContactCtaVisible(entry.isIntersecting),
          { threshold: 0.2 },
        )
      : null;

    if (contactCta) contactObserver?.observe(contactCta);

    function syncMenuState() {
      setIsMenuOpen(mobileMenu?.getAttribute("aria-hidden") === "false");
    }

    syncMenuState();

    const menuObserver = mobileMenu
      ? new MutationObserver(syncMenuState)
      : null;

    menuObserver?.observe(mobileMenu!, {
      attributes: true,
      attributeFilter: ["aria-hidden"],
    });

    return () => {
      contactObserver?.disconnect();
      menuObserver?.disconnect();
    };
  }, [contactCtaId]);

  const isHidden = isMenuOpen || (isContactCtaVisible && !hasFocus);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar atendimento pelo WhatsApp"
      aria-hidden={isHidden}
      tabIndex={isHidden ? -1 : 0}
      onFocus={() => setHasFocus(true)}
      onBlur={() => setHasFocus(false)}
      className={`bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:ring-ring fixed right-5 z-30 grid size-14 place-items-center rounded-full shadow-sm transition-[opacity,visibility,background-color,box-shadow] duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none motion-reduce:transition-none sm:right-6 ${isHidden ? "pointer-events-none invisible opacity-0" : "visible opacity-100"}`}
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-7 fill-current"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.273.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.895 6.993c-.002 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    </a>
  );
}
