import { ArrowUpRight } from "lucide-react";
import { CAPABILITIES } from "./capabilities";

export function CapabilitiesHero() {
  return (
    <section className="px-5 pb-10 pt-28 lg:px-14 lg:pb-16 lg:pt-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-center gap-3.5" data-hero>
          <span className="h-px w-7 bg-metal" />
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-metal">What We Do — 00</span>
        </div>

        <h1
          data-hero
          data-shine
          className="headline-metal mt-6 font-display text-[clamp(2.9rem,11vw,8.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.04em]"
        >
          Capabilities.
        </h1>

        <p data-hero className="mt-7 max-w-[640px] font-body text-[15px] leading-[1.6] text-ink-2 lg:text-base">
          From raw substrate to certified, production-ready parts — a vertically
          integrated precision stack. Six capabilities, each measured to spec.
        </p>

        {/* Capability index — a spec-document contents */}
        <div className="mt-14 border-t border-line-2">
          {CAPABILITIES.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              data-animate
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-4 border-b border-line py-5 transition-colors hover:bg-surface-2/40 sm:grid-cols-[64px_1fr_160px_auto] sm:gap-x-8 sm:py-6"
            >
              <span className="font-mono text-[12px] tracking-[0.12em] text-metal">{c.n}</span>
              <span className="font-display text-xl font-bold uppercase tracking-[-0.01em] text-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl lg:text-[1.75rem]">
                {c.title}
              </span>
              <span className="hidden font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3 sm:block sm:text-right">
                {c.tolerance}
              </span>
              <span className="flex h-9 w-9 items-center justify-center justify-self-end rounded-full border border-line-2 text-ink-2 transition-colors group-hover:border-ink group-hover:text-ink">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.6} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
