import { Section } from "@/components/site/Section";

const MATERIALS = [
  "316L Steel",
  "Ti-6Al-4V",
  "7075-T6 Al",
  "Inconel 718",
  "T700 Carbon",
  "PEEK / PTFE",
];

export function MaterialsStrip() {
  return (
    <Section className="border-t border-line" pad="tight">
      <div className="flex items-center gap-3.5">
        <span className="h-px w-7 bg-metal" />
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-metal">Materials</span>
      </div>

      <p className="mt-9 flex flex-wrap items-baseline gap-x-5 gap-y-3 font-display text-[clamp(1.5rem,4.5vw,3.25rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.02em]">
        {MATERIALS.map((m, i) => (
          <span key={m} data-animate className="flex items-baseline gap-x-5 text-ink">
            {i > 0 && <span className="text-metal">·</span>}
            {m}
          </span>
        ))}
      </p>

      <p className="mt-9 max-w-[520px] font-body text-[14px] leading-[1.6] text-ink-2">
        Certified alloys, composites and engineering polymers — every batch
        sourced with full material traceability and on-file certification.
      </p>
    </Section>
  );
}
