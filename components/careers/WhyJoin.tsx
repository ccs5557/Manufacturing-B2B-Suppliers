import { Section } from "@/components/site/Section";
import { VALUES } from "./careers";

export function WhyJoin() {
  return (
    <Section className="border-t border-line">
      <div className="flex items-center gap-3.5">
        <span className="h-px w-7 bg-metal" />
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-metal">02 — What We Look For</span>
      </div>
      <h2
        data-shine
        className="headline-metal mt-5 max-w-[14ch] font-display text-[clamp(2rem,6vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em]"
      >
        People who measure first.
      </h2>

      <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {VALUES.map((v) => (
          <div key={v.k} data-animate className="border-t border-line pt-6">
            <h3 className="font-display text-xl font-bold tracking-[-0.01em] text-ink lg:text-2xl">{v.k}</h3>
            <p className="mt-3 max-w-[440px] font-body text-[15px] leading-[1.6] text-ink-2">{v.v}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
