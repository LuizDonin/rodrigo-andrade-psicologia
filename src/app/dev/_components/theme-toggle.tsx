"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

type ShowcaseTheme = "light" | "dark";

export function ThemeToggle({ targetId }: { targetId: string }) {
  const [theme, setTheme] = useState<ShowcaseTheme>("light");

  function selectTheme(nextTheme: ShowcaseTheme) {
    const showcase = document.getElementById(targetId);

    if (!showcase) return;

    showcase.classList.toggle("dark", nextTheme === "dark");
    setTheme(nextTheme);
  }

  return (
    <div
      role="group"
      aria-label="Tema do showcase"
      className="bg-muted flex w-fit items-center gap-1 rounded-xl border p-1"
    >
      <Button
        type="button"
        size="sm"
        variant={theme === "light" ? "secondary" : "ghost"}
        aria-pressed={theme === "light"}
        onClick={() => selectTheme("light")}
      >
        <Sun aria-hidden="true" />
        Claro
      </Button>
      <Button
        type="button"
        size="sm"
        variant={theme === "dark" ? "secondary" : "ghost"}
        aria-pressed={theme === "dark"}
        onClick={() => selectTheme("dark")}
      >
        <Moon aria-hidden="true" />
        Escuro
      </Button>
    </div>
  );
}
