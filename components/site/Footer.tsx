import Link from "next/link";
import { ShieldCheck } from "lucide-react";

const LEGAL = [
  { label: "Privacy", href: "/" },
  { label: "Terms", href: "/" },
  { label: "Careers", href: "/" },
  { label: "About", href: "/about" },
];

// Tidy mobile footer link set
const M_LINKS = [
  { label: "CAPABILITIES", href: "/capabilities" },
  { label: "PRODUCTS", href: "/products" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
  { label: "PRIVACY", href: "/" },
  { label: "TERMS", href: "/" },
];

function IsoChip() {
  return (
    <span className="inline-flex items-center gap-2 rounded-[4px] border border-line-2 px-3 py-1.5">
      <ShieldCheck className="h-3.5 w-3.5 text-metal" strokeWidth={1.8} />
      <span className="font-mono text-[9px] tracking-[0.1em] text-ink-2">ISO 9001</span>
    </span>
  );
}

/** Global footer bar — appears on every page below content. */
export function Footer() {
  return (
    <footer className="border-t border-line bg-surface px-5 pb-12 pt-10 lg:px-14 lg:pb-9 lg:pt-9">
      {/* ── Mobile: minimal, structured ── */}
      <div className="mx-auto flex max-w-[1440px] flex-col gap-7 lg:hidden">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-display text-xl font-bold tracking-[0.02em] text-ink">
            GEOMETRIX.
          </Link>
          <IsoChip />
        </div>

        <div className="h-px w-full bg-line" />

        <nav className="grid grid-cols-2 gap-x-4 gap-y-3.5">
          {M_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-2 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="h-px w-full bg-line" />

        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-[10px] tracking-[0.06em] text-ink-3">
            © 2026 GEOMETRIX GLOBAL INNOVATION
          </span>
          <span className="font-mono text-[10px] tracking-[0.06em] text-ink-3">
            SITIAWAN, PERAK · 4°13′N 100°41′E
          </span>
        </div>
      </div>

      {/* ── Desktop ── */}
      <div className="mx-auto hidden max-w-[1440px] flex-row items-center justify-between gap-10 lg:flex">
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
          <Link href="/" className="font-display text-lg font-bold tracking-[0.02em] text-ink">
            GEOMETRIX.
          </Link>
          {LEGAL.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="font-body text-[13px] text-ink-2 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <p className="font-mono text-[11px] tracking-[0.05em] text-ink-3">
          © 2026 GEOMETRIX GLOBAL INNOVATION
        </p>

        <div className="flex items-center gap-6">
          <span className="font-mono text-[11px] tracking-[0.05em] text-ink-3">4°13′N 100°41′E</span>
          <IsoChip />
        </div>
      </div>
    </footer>
  );
}
