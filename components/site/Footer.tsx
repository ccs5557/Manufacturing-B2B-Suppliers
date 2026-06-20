import Link from "next/link";

type FooterLink = { label: string; href: string; chip?: string };

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Components", href: "/products" },
      { label: "Materials", href: "/capabilities" },
      { label: "Capabilities", href: "/capabilities" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Certifications", href: "/about" },
      { label: "Quality System", href: "/about" },
      { label: "Data Sheets", href: "/products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/contact", chip: "WE'RE HIRING" },
    ],
  },
];

// Brand glyphs as inline paths (lucide dropped trademarked social icons).
const SOCIAL = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  },
  {
    label: "X",
    href: "https://x.com",
    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com",
    d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
];

const LEGAL: FooterLink[] = [
  { label: "Security", href: "/" },
  { label: "Terms of Service", href: "/" },
  { label: "Privacy Policy", href: "/" },
];

const TAGLINE =
  "GEOMETRIX engineers precision components and high-performance materials — built in Sitiawan, Perak.";

function Socials() {
  return (
    <div className="flex items-center gap-2.5">
      {SOCIAL.map(({ d, label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink-2 transition-colors hover:border-line-2 hover:text-ink"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[15px] w-[15px]">
            <path d={d} />
          </svg>
        </a>
      ))}
    </div>
  );
}

function HiringChip() {
  return (
    <span className="ml-2 inline-flex items-center rounded-full border border-line-2 bg-panel px-2 py-[3px] font-mono text-[9px] uppercase tracking-[0.12em] text-ink-2">
      We&apos;re hiring
    </span>
  );
}

function LinkColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div className="flex flex-col gap-3.5">
      <h3 className="font-display text-[15px] font-semibold tracking-[-0.01em] text-ink">{title}</h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.label} className="flex items-center">
            <Link
              prefetch={false}
              href={l.href}
              className="font-body text-[14px] text-ink-2 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
            {l.chip && <HiringChip />}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Giant engineering-blueprint wordmark — outline stroke, clipped by a baseline
 *  hairline with measurement ticks. The signature element of the footer. */
function Wordmark() {
  return (
    <div className="relative mt-14 overflow-hidden lg:mt-20">
      <span className="font-mono text-[10px] tracking-[0.2em] text-ink-3">FIG. 01 — IDENTITY MARK</span>
      <div className="relative mt-2">
        <div
          aria-hidden="true"
          className="wordmark-stroke select-none whitespace-nowrap font-display font-extrabold leading-[0.82] tracking-[-0.02em] text-[clamp(2.6rem,14vw,14rem)]"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, #000 44%, transparent 98%)",
            maskImage: "linear-gradient(to bottom, #000 44%, transparent 98%)",
          }}
        >
          GEOMETRIX
        </div>
        {/* crisp divider line crossing the dissolving lower portion of the mark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-[16%] h-px bg-line-2"
        />
      </div>
    </div>
  );
}

/** Global footer — appears on every page below content. */
export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-line px-5 pb-9 pt-12 lg:px-14 lg:pb-10 lg:pt-16">
      <div className="mx-auto max-w-[1440px]">
        {/* ── Top: tagline + columns ── */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-[1.7fr_1fr_1fr_1fr] lg:gap-x-10">
          <div className="col-span-2 flex flex-col gap-6 lg:col-span-1 lg:pr-8">
            <Link
              prefetch={false}
              href="/"
              className="font-display text-xl font-bold tracking-[0.01em] text-ink"
            >
              GEOMETRIX.
            </Link>
            <p className="max-w-[300px] font-body text-[14px] leading-[1.55] text-ink-2">{TAGLINE}</p>
            <Socials />
          </div>

          {COLUMNS.map((c) => (
            <LinkColumn key={c.title} {...c} />
          ))}
        </div>

        {/* ── Signature blueprint wordmark ── */}
        <Wordmark />

        {/* ── Legal bar ── */}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] tracking-[0.06em] text-ink-3">
            © 2026 GEOMETRIX GLOBAL INNOVATION · Reject all substitutes
          </p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {LEGAL.map((l) => (
              <Link
                key={l.label}
                prefetch={false}
                href={l.href}
                className="font-body text-[13px] text-ink-2 transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
