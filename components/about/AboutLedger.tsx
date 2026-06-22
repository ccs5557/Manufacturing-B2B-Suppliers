import { Section } from "@/components/site/Section";

const ROWS = [
  { id: "P·01", param: "Years in operation", note: "Since 2008", value: "18" },
  { id: "P·02", param: "Countries shipped", note: "Six continents", value: "40+" },
  { id: "P·03", param: "Typical tolerance", note: "Held at scale", value: "±2µm" },
  { id: "P·04", param: "Parts inspected", note: "Inline metrology", value: "100%" },
];

export function AboutLedger() {
  return (
    <Section className="blueprint-grid border-t border-line">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3.5">
            <span className="h-px w-7 bg-metal" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-metal">
              02 — On Record
            </span>
          </div>
          <h2
            data-shine
            className="headline-metal font-display text-[clamp(2rem,6vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em]"
          >
            Held to spec.
          </h2>
        </div>
        <p className="max-w-[340px] font-body text-[14px] leading-[1.6] text-ink-2">
          Continuously logged, independently audited. The figures we measure
          ourselves against — not marketing rounding.
        </p>
      </div>

      {/* Record header */}
      <div className="mt-14 flex items-center justify-between border-b border-line-2 pb-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
          Inspection Record
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
          Rev · 2026
        </span>
      </div>

      {/* Rows */}
      <ul>
        {ROWS.map((r) => (
          <li
            key={r.id}
            className="relative grid grid-cols-[auto_1fr_auto] items-end gap-x-5 gap-y-1 pb-5 pt-7 sm:grid-cols-[64px_1fr_auto] sm:gap-x-8"
          >
            <span className="self-center font-mono text-[11px] tracking-[0.12em] text-metal">
              {r.id}
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink sm:text-[13px]">
                {r.param}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
                {r.note}
              </span>
            </div>
            <span
              data-animate
              className="justify-self-end font-display text-[clamp(2.4rem,7vw,4.25rem)] font-bold leading-[0.85] tracking-[-0.04em] text-ink"
            >
              {r.value}
            </span>
            {/* measuring hairline */}
            <span
              data-measure
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-px origin-left bg-line"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
