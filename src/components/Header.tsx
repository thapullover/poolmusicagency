"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const navItems = [
  { href: "/grandi-artisti", label: "Grandi Artisti" },
  { href: "/produzioni", label: "Le Nostre Produzioni" },
  { href: "/contatti", label: "Contatti" },
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b-4 border-neo-ink bg-neo-canvas shadow-[8px_8px_0px_0px_#000]">
      <div className="mx-auto flex min-h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-black uppercase tracking-tighter text-lg sm:text-xl"
        >
          Pool Music Agency
        </Link>

        {/* Desktop: orizzontale con bottoni */}
        <nav className="hidden items-center gap-3 md:flex" aria-label="Menu principale">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Button
                key={item.href}
                href={item.href}
                variant={
                  item.href === "/contatti"
                    ? "primary"
                    : item.href === "/produzioni"
                      ? "muted"
                      : "secondary"
                }
              >
                {item.label}
              </Button>
            );
          })}
        </nav>

        {/* Mobile: Hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          className="flex h-14 min-w-14 -mr-2 flex-col items-center justify-center gap-1.5 border-4 border-neo-ink bg-neo-secondary p-2 transition-all duration-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#000] md:hidden"
          style={{ boxShadow: "4px 4px 0px 0px #000" }}
        >
          <span
            className={`block h-1 w-6 bg-neo-ink transition-all duration-100 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-1 w-6 bg-neo-ink transition-all duration-100 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-1 w-6 bg-neo-ink transition-all duration-100 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile: dropdown */}
      <nav
        className={`overflow-hidden border-t-4 border-neo-ink bg-neo-canvas transition-all duration-200 md:hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <ul className="flex flex-col py-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block border-b-4 border-neo-ink px-6 py-4 font-bold uppercase tracking-widest transition-colors duration-100 hover:bg-neo-secondary ${
                    isActive ? "bg-neo-secondary" : "bg-neo-canvas"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
