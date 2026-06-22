import Image from "next/image";

/* A short L-bracket registration mark, like a drawing's crop corner. */
function CropMark({ className }: { className: string }) {
  return <span aria-hidden className={`absolute h-4 w-4 ${className}`} />;
}

/* One cell of the title-block readout. */
function Cell({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex flex-col gap-1 border-l border-line pl-3 first:border-l-0 first:pl-0 sm:pl-4">
      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-3">{k}</span>
      <span className="font-mono text-[11px] tracking-[0.08em] text-ink-2">{v}</span>
    </div>
  );
}

export function AboutHero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* Aerial backdrop */}
      <Image
        src="/images/facility-aerial.webp"
        alt="Aerial view of the GEOMETRIX precision-manufacturing facility in Sitiawan, Perak at dusk"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Legibility scrim — heavier toward the lower-left where the headline sits */}
      <div className="absolute inset-0 bg-gradient-to-tr from-surface via-surface/70 to-surface/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/40" />

      {/* Registration frame */}
      <CropMark className="left-5 top-24 border-l border-t border-ink-3/55 lg:left-14 lg:top-14" />
      <CropMark className="right-5 top-24 border-r border-t border-ink-3/55 lg:right-14 lg:top-14" />
      <CropMark className="bottom-6 left-5 border-b border-l border-ink-3/55 lg:bottom-10 lg:left-14" />
      <CropMark className="bottom-6 right-5 border-b border-r border-ink-3/55 lg:bottom-10 lg:right-14" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-5 pb-10 pt-24 lg:px-14 lg:pb-14 lg:pt-20">
        {/* Title-block readout */}
        <div
          data-hero
          className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-9"
        >
          <Cell k="Document" v="GX·CORP·001" />
          <Cell k="Facility" v="Sitiawan · Perak" />
          <Cell k="Datum" v="4°13′N 100°41′E" />
          <Cell k="Established" v="2008" />
        </div>

        {/* Headline block, anchored low-left */}
        <div className="mt-auto flex flex-col gap-6">
          <div className="flex items-center gap-3.5" data-hero>
            <span className="h-px w-7 bg-metal" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-metal">
              Who We Are — 00
            </span>
          </div>

          <h1
            data-hero
            data-shine
            className="headline-metal whitespace-pre-line font-display text-[clamp(2.9rem,9.5vw,7.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.035em]"
          >
            {"Precision,\nby design."}
          </h1>

          {/* Dimension line annotating the scene (desktop/tablet — hidden on
              narrow phones where the long label would overflow) */}
          <div data-hero className="hidden items-center gap-3 pt-1 sm:flex" aria-hidden>
            <span className="h-2.5 w-px bg-ink-3/60" />
            <span className="h-px flex-1 bg-gradient-to-r from-ink-3/10 via-ink-3/45 to-ink-3/10" />
            <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3">
              Engineered components &amp; high-performance materials
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-ink-3/10 via-ink-3/45 to-ink-3/10" />
            <span className="h-2.5 w-px bg-ink-3/60" />
          </div>

          <p
            data-hero
            className="max-w-[620px] font-body text-[15px] leading-[1.6] text-ink-2 lg:text-base"
          >
            GEOMETRIX engineers and supplies high-performance components and
            materials for the world&apos;s most demanding industries — built in
            Sitiawan, Perak, shipped to 40+ countries.
          </p>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        data-hero
        className="pointer-events-none absolute inset-x-0 bottom-3 z-10 flex justify-center"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-ink-3">
          Scroll
        </span>
      </div>
    </section>
  );
}
