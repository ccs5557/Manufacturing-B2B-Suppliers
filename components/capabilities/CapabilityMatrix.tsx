import { Section } from "@/components/site/Section";
import { CAPABILITIES } from "./capabilities";

export function CapabilityMatrix() {
  return (
    <Section className="blueprint-grid border-t border-line">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3.5">
            <span className="h-px w-7 bg-metal" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-metal">Reference</span>
          </div>
          <h2
            data-shine
            className="headline-metal font-display text-[clamp(2rem,6vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em]"
          >
            At a glance.
          </h2>
        </div>
        <p className="max-w-[340px] font-body text-[14px] leading-[1.6] text-ink-2">
          Indicative figures across the stack. Exact tolerances and lead times
          are quoted per part on enquiry.
        </p>
      </div>

      {/* Matrix */}
      <div data-animate className="mt-12">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-line-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
              <th className="py-3 pr-3 font-normal">#</th>
              <th className="py-3 pr-4 font-normal">Capability</th>
              <th className="py-3 pr-4 font-normal">Tolerance</th>
              <th className="hidden py-3 pr-4 font-normal md:table-cell">Materials</th>
              <th className="hidden py-3 pr-4 font-normal lg:table-cell">Lead time</th>
              <th className="py-3 text-right font-normal">Cert</th>
            </tr>
          </thead>
          <tbody>
            {CAPABILITIES.map((c) => (
              <tr key={c.slug} className="border-b border-line align-middle">
                <td className="py-4 pr-3 font-mono text-[12px] tracking-[0.1em] text-metal">{c.n}</td>
                <td className="py-4 pr-4 font-display text-[15px] font-semibold tracking-[-0.01em] text-ink sm:text-base">
                  {c.title}
                </td>
                <td className="py-4 pr-4 font-mono text-[12px] tracking-[0.02em] text-ink">{c.tolerance}</td>
                <td className="hidden py-4 pr-4 font-mono text-[11px] tracking-[0.02em] text-ink-2 md:table-cell">
                  {c.materials}
                </td>
                <td className="hidden py-4 pr-4 font-mono text-[11px] tracking-[0.02em] text-ink-2 lg:table-cell">
                  {c.lead}
                </td>
                <td className="py-4 text-right">
                  <span className="inline-block whitespace-nowrap rounded-[3px] border border-line-2 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-ink-2">
                    {c.cert}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
