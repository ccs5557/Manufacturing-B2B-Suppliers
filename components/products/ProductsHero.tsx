const META = [
  { k: "Part families", v: "06" },
  { k: "Material range", v: "316L → Inconel" },
  { k: "Accreditation", v: "ISO 9001 · AS9100D · NADCAP" },
];

export function ProductsHero() {
  return (
    <section className="px-5 pb-10 pt-28 lg:px-14 lg:pb-14 lg:pt-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-center gap-3.5" data-hero>
          <span className="h-px w-7 bg-metal" />
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-metal">Catalog — 00</span>
        </div>

        <h1
          data-hero
          data-shine
          className="headline-metal mt-6 font-display text-[clamp(2.6rem,9vw,7rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.035em]"
        >
          Engineered
          <br />
          Components.
        </h1>

        <p data-hero className="mt-7 max-w-[600px] font-body text-[15px] leading-[1.6] text-ink-2 lg:text-base">
          A catalog of precision-machined parts and certified material stock —
          every line characterized, traceable and built to spec. Select a part
          for its full specification.
        </p>

        {/* catalog metadata */}
        <dl data-hero className="mt-12 grid gap-6 border-t border-line pt-6 sm:grid-cols-3 sm:gap-10">
          {META.map((m) => (
            <div key={m.k} className="flex flex-col gap-1.5">
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">{m.k}</dt>
              <dd className="font-mono text-[13px] tracking-[0.04em] text-ink">{m.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
