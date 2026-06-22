import { Section } from "@/components/site/Section";

const LINES = ["We engineer", "the substrate —", "before we ever", "engineer the part."];

export function AboutManifesto() {
  return (
    <Section className="border-t border-line">
      <div className="grid gap-12 lg:grid-cols-[0.3fr_0.7fr] lg:gap-16">
        {/* Sticky index rail */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="flex items-baseline gap-4 lg:flex-col lg:gap-3">
            <span className="font-display text-5xl font-bold tracking-[-0.04em] text-ink-3 lg:text-6xl">
              01
            </span>
            <div className="flex items-center gap-3 lg:mt-1">
              <span className="h-px w-7 bg-metal lg:hidden" />
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-metal">
                The Standard
              </span>
            </div>
          </div>
          <span className="mt-6 hidden font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3 lg:block">
            01 / 05 — Doctrine
          </span>
        </div>

        {/* Statement + supporting note */}
        <div>
          <h2 className="font-display text-[clamp(2rem,6vw,4.5rem)] font-extrabold uppercase leading-[0.96] tracking-[-0.03em]">
            {LINES.map((l, i) => (
              <span key={l} data-animate className="block headline-metal">
                {l}
              </span>
            ))}
          </h2>

          <div className="mt-12 grid max-w-[680px] gap-6 border-t border-line pt-8 sm:grid-cols-[auto_1fr] sm:gap-10">
            <span data-animate className="font-mono text-[10px] uppercase leading-[1.8] tracking-[0.16em] text-ink-3">
              Note —<br />
              Doctrine
            </span>
            <p data-animate className="font-body text-[15px] leading-[1.65] text-ink-2">
              Every alloy, every tolerance, every cycle is measured, logged, and
              held to spec at production scale. We design the material before the
              geometry, guarantee nothing to chance, and treat each part as a
              contract — not a best effort.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
