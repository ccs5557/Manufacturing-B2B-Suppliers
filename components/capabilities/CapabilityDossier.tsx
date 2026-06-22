import Image from "next/image";
import type { Capability } from "./capabilities";

export function CapabilityDossier({ c, flip }: { c: Capability; flip: boolean }) {
  return (
    <section
      id={c.slug}
      className="scroll-mt-24 border-t border-line px-5 py-14 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Image — sticky on desktop while the spec sheet scrolls past. The
              sticky wrapper stays transform-free; the inner relative box is the
              fill-image's positioned parent and carries the reveal. */}
          <figure className={`lg:sticky lg:top-24 lg:self-start ${flip ? "lg:order-2" : ""}`}>
            <div
              data-animate
              className="relative h-[46vh] overflow-hidden rounded-[4px] border border-line lg:h-[68vh]"
            >
              <Image src={c.src} alt={c.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent" />
              <span className="absolute left-5 top-4 font-mono text-[11px] tracking-[0.16em] text-metal">/{c.n}</span>
            </div>
          </figure>

          {/* Spec sheet */}
          <div className={flip ? "lg:order-1" : ""}>
            <span className="font-display text-6xl font-bold leading-none tracking-[-0.04em] text-ink-3 lg:text-7xl">
              {c.n}
            </span>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,4.5vw,3.25rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.025em] text-ink">
              {c.title}
            </h2>
            <p className="mt-5 max-w-[480px] font-body text-[15px] leading-[1.65] text-ink-2">{c.lede}</p>

            <dl className="mt-10">
              {c.specs.map((s) => (
                <div
                  key={s.k}
                  className="relative grid grid-cols-[1fr_auto] items-baseline gap-4 py-3.5"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">{s.k}</dt>
                  <dd className="text-right font-mono text-[13px] tracking-[0.02em] text-ink">{s.v}</dd>
                  <span data-measure aria-hidden className="absolute inset-x-0 bottom-0 h-px origin-left bg-line" />
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
