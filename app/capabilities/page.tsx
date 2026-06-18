import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "CNC machining, automated production, materials science, and 100% metrology — GEOMETRIX capabilities for precision B2B manufacturing.",
};

const CAPS = [
  { src: "/images/tile-robotic.webp", index: "01", title: "Robotic Cells", desc: "Closed-loop automation with adaptive tooling for lights-out production." },
  { src: "/images/tile-machined.webp", index: "02", title: "CNC Machining", desc: "5-axis precision machining holding micron-level tolerances." },
  { src: "/images/tile-assembly.webp", index: "03", title: "Assembly & Integration", desc: "Inline metrology and certified assembly at production scale." },
  { src: "/images/valve.webp", index: "04", title: "Quality Assurance", desc: "Every part inspected, certified, and traceable end to end." },
  { src: "/images/fiber.webp", index: "05", title: "Composite Lay-up", desc: "Engineered carbon and aramid laminates for high strength-to-weight." },
  { src: "/images/cylinder.webp", index: "06", title: "Finishing & Coating", desc: "Surface treatments and tolerancing for extreme operating envelopes." },
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Capabilities."
        sub="From raw substrate to certified, production-ready parts — a vertically integrated precision-manufacturing stack."
      />

      <Section className="bg-surface">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {CAPS.map((c, i) => (
            <Reveal key={c.index} delay={(i % 3) * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface-2">
                <div className="relative h-52">
                  <Image src={c.src} alt={c.title} fill sizes="(max-width:1024px) 50vw, 33vw" className="object-cover" />
                </div>
                <div className="flex flex-col gap-2 p-6">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-metal">{c.index}</span>
                  <h2 className="font-display text-xl font-semibold tracking-[-0.01em] text-ink">{c.title}</h2>
                  <p className="font-body text-[14px] leading-[1.5] text-ink-2">{c.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
