const DESK = [
  { k: "Email", v: "supply@geometrix.io", href: "mailto:supply@geometrix.io" },
  { k: "Phone", v: "+60 5 691 0000", href: "tel:+6056910000" },
  { k: "Facility", v: "Sitiawan, Perak, Malaysia" },
  { k: "Coordinates", v: "4°13′N 100°41′E" },
  { k: "Hours", v: "Mon–Fri · 09:00–18:00 MYT" },
  { k: "Response", v: "Within 1 business day" },
];

export function ContactHero() {
  return (
    <section className="px-5 pb-8 pt-28 lg:px-14 lg:pb-12 lg:pt-40">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1fr_minmax(0,440px)] lg:items-start lg:gap-16">
        {/* Left — heading */}
        <div>
          <div className="flex items-center gap-3.5" data-hero>
            <span className="h-px w-7 bg-metal" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-metal">Get in Touch — 00</span>
          </div>
          <h1
            data-hero
            data-shine
            className="headline-metal mt-6 font-display text-[clamp(2.9rem,10vw,7.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.04em]"
          >
            Contact.
          </h1>
          <p data-hero className="mt-7 max-w-[460px] font-body text-[15px] leading-[1.6] text-ink-2 lg:text-base">
            Send us your specification — drawing, tolerance, volume — and our
            engineering desk replies within one business day with a tailored
            supply proposal.
          </p>
        </div>

        {/* Right — facility datasheet */}
        <div data-hero className="rounded-lg border border-line bg-surface-2/40 p-7 lg:p-8">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-metal">Supply Desk</span>
            <span aria-hidden className="relative flex h-4 w-4 items-center justify-center">
              <span className="absolute h-full w-px bg-ink-3/50" />
              <span className="absolute h-px w-full bg-ink-3/50" />
              <span className="h-1.5 w-1.5 rounded-full border border-metal" />
            </span>
          </div>
          <dl className="mt-5">
            {DESK.map((d) => (
              <div key={d.k} className="relative grid grid-cols-[88px_1fr] items-baseline gap-4 py-3">
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">{d.k}</dt>
                <dd className="font-mono text-[12px] tracking-[0.02em] text-ink">
                  {d.href ? (
                    <a href={d.href} className="transition-colors hover:text-metal">
                      {d.v}
                    </a>
                  ) : (
                    d.v
                  )}
                </dd>
                <span data-measure aria-hidden className="absolute inset-x-0 bottom-0 h-px origin-left bg-line" />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
