"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { MENU_NAV } from "./nav";

/** Mobile top bar (logo + hamburger) with a slide-down full menu. */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="lg:hidden">
      <div
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 transition-colors duration-300 ${
          scrolled && !open
            ? "border-b border-line bg-surface/85 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <Link
          prefetch={false}
          href="/"
          aria-label="GEOMETRIX home"
          onClick={() => setOpen(false)}
          className="brand-metal font-display text-lg font-bold tracking-[0.02em]"
          style={{ textShadow: "0 1px 6px rgba(0,0,0,0.65)" }}
        >
          GEOMETRIX.
        </Link>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-[#cfcdc7]"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Full-screen menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-surface/97 px-6 backdrop-blur-sm transition-opacity duration-[450ms] ease-out ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {MENU_NAV.map((item, i) => {
          const active = item.href === pathname;
          return (
            <Link
              key={item.label}
              prefetch={false}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`border-b border-line py-4 font-display text-3xl font-bold tracking-[-0.01em] transition-all duration-[450ms] ease-out ${
                active ? "text-metal" : "text-ink"
              } ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
              style={{ transitionDelay: open ? `${90 + i * 60}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          );
        })}
        <p className="mt-8 font-mono text-[11px] tracking-[0.1em] text-ink-3">
          SITIAWAN, PERAK · MALAYSIA
        </p>
      </div>
    </div>
  );
}
