import Image from "next/image";

/** Full-bleed facility band — reuses the aerial as a "where you'll work" moment
 *  (NOT a hero, so it doesn't echo the About page's full-screen aerial). */
export function CareersFacility() {
  return (
    <section className="relative h-[58vh] min-h-[420px] overflow-hidden border-t border-line">
      <Image
        src="/images/facility-aerial.webp"
        alt="The GEOMETRIX precision-manufacturing facility in Sitiawan, Perak at dusk"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-surface/20" />

      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1440px] px-5 pb-10 lg:px-14 lg:pb-14">
        <div className="flex items-center gap-3.5">
          <span className="h-px w-7 bg-metal" />
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-metal">The Facility</span>
        </div>
        <h2 className="mt-5 max-w-[18ch] font-display text-[clamp(1.9rem,5vw,3.5rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.025em] text-ink">
          Where you&apos;ll work.
        </h2>
        <p className="mt-4 max-w-[480px] font-body text-[14px] leading-[1.6] text-ink-2 lg:text-[15px]">
          A modern, lights-out precision plant in Sitiawan, Perak — five
          integrated process lines under one certified roof.
        </p>
      </div>
    </section>
  );
}
