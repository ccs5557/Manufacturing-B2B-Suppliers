import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { Cta } from "@/components/site/Cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "GEOMETRIX is a premium B2B precision-manufacturing supplier in Sitiawan, Perak — engineered components and high-performance materials, trusted worldwide.",
};

const STATS = [
  { v: "18+", k: "YEARS IN OPERATION", n: 18, prefix: "", suffix: "+", decimals: 0 },
  { v: "40+", k: "COUNTRIES SHIPPED", n: 40, prefix: "", suffix: "+", decimals: 0 },
  { v: "±2µm", k: "TYPICAL TOLERANCE", n: 2, prefix: "±", suffix: "µm", decimals: 0 },
  { v: "100%", k: "PARTS INSPECTED", n: 100, prefix: "", suffix: "%", decimals: 0 },
];
const CERTS = ["ISO 9001", "AS9100D", "NADCAP", "RoHS", "REACH"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title={"Precision,\nBy Design."}
        sub="GEOMETRIX engineers and supplies high-performance components and materials for the world's most demanding industries — built in Sitiawan, Perak, shipped worldwide."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal className="relative h-72 overflow-hidden rounded-lg border border-line lg:h-[480px]">
            <Image src="/images/steel-flow.webp" alt="GEOMETRIX facility" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-metal">The Standard</p>
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold uppercase leading-[1.02] tracking-[-0.02em] text-ink">
              We engineer the substrate before we engineer the part.
            </h2>
            <p className="font-body text-[15px] leading-[1.6] text-ink-2">
              From closed-loop automation and inline metrology to certified alloys
              and composites, every process is built to hold sub-micron tolerances
              at production scale. We measure everything, guarantee nothing to chance,
              and treat each part as a contract.
            </p>
            <div className="pt-2">
              <Cta href="/contact">START A PROJECT</Cta>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-line" pad="tight">
        <Reveal className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:divide-x sm:divide-line">
          {STATS.map((s) => (
            <div key={s.k} className="flex flex-col items-center gap-2 px-4 text-center">
              <span
                className="font-display text-[clamp(1.9rem,4vw,2.75rem)] font-bold tracking-[-0.04em] text-ink"
                data-count={s.n}
                data-prefix={s.prefix}
                data-suffix={s.suffix}
                data-decimals={s.decimals}
              >
                {s.v}
              </span>
              <span className="font-mono text-[10px] tracking-[0.15em] text-ink-2">{s.k}</span>
            </div>
          ))}
        </Reveal>
        <Reveal delay={120} className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
          {CERTS.map((c) => (
            <span key={c} className="rounded-[4px] border border-line-2 px-3.5 py-2 font-mono text-[10px] tracking-[0.1em] text-ink-2">
              {c}
            </span>
          ))}
        </Reveal>
      </Section>
    </>
  );
}
