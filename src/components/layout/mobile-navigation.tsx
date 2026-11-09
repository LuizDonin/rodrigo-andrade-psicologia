"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import type { NavigationItem } from "@/config/navigation";

type MobileNavigationProps = {
  items: readonly NavigationItem[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    firstLinkRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;

      setIsOpen(false);
      buttonRef.current?.focus();
    }

    function handlePointerDown(event: PointerEvent) {
      if (rootRef.current?.contains(event.target as Node)) return;
      setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div ref={rootRef} className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-controls="mobile-navigation-panel"
        aria-expanded={isOpen}
        aria-label={
          isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
        }
        onClick={() => setIsOpen((open) => !open)}
        className="focus-visible:ring-ring text-primary hover:bg-secondary grid size-11 place-items-center rounded-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none motion-reduce:transition-none"
      >
        <span className="relative block h-4 w-5" aria-hidden="true">
          <span
            className={`bg-primary absolute top-1/2 left-0 block h-px w-5 transition-transform duration-200 motion-reduce:transition-none ${isOpen ? "rotate-45" : "-translate-y-1"}`}
          />
          <span
            className={`bg-primary absolute top-1/2 left-0 block h-px w-5 transition-transform duration-200 motion-reduce:transition-none ${isOpen ? "-rotate-45" : "translate-y-1"}`}
          />
        </span>
      </button>

      <div
        id="mobile-navigation-panel"
        aria-hidden={!isOpen}
        className={`bg-background border-border shadow-soft absolute top-full right-0 left-0 border-t border-b transition-[opacity,transform,visibility] duration-200 motion-reduce:transition-none ${isOpen ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-2 opacity-0"}`}
      >
        <nav aria-label="Navegação mobile" className="px-gutter py-4">
          <ul className="divide-border divide-y">
            {items.map((item, index) => (
              <li key={item.href}>
                <Link
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  tabIndex={isOpen ? 0 : -1}
                  onClick={closeMenu}
                  className="focus-visible:ring-ring text-primary hover:bg-secondary flex min-h-12 items-center justify-between rounded-sm px-2 font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset motion-reduce:transition-none"
                >
                  {item.label}
                  <span className="text-accent text-lg" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
