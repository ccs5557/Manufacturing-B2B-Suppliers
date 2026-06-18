"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { SIDE_NAV } from "./nav";

/** Desktop vertical side-nav pinned to the right edge, reading bottom-to-top. */
export function SideNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed right-0 top-0 z-50 hidden h-screen w-14 flex-col items-center justify-center gap-[72px] lg:flex"
    >
      {SIDE_NAV.map((item) => {
        const active = item.href === pathname;
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`font-mono text-[11px] tracking-[0.2em] transition-colors duration-300 [writing-mode:vertical-rl] rotate-180 hover:text-ink ${
              active ? "text-metal" : "text-[#cfcfcb]"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
      <button
        type="button"
        aria-label="Search"
        className="text-[#cfcfcb] transition-colors duration-300 hover:text-ink"
      >
        <Search className="h-[15px] w-[15px]" strokeWidth={1.5} />
      </button>
    </nav>
  );
}
