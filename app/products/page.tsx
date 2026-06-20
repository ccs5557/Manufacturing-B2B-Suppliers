import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Engineered components and high-performance materials — precision valves, machined assemblies, composite structures, and alloy stock from GEOMETRIX.",
};

const PRODUCTS = [
  { src: "/images/valve.webp", code: "GX-VAL", title: "Precision Valve Bodies", spec: "316L / Ti-6Al-4V" },
  { src: "/images/cylinder.webp", code: "GX-CYL", title: "Hydraulic Cylinders", spec: "6061-T6 / hard-anodized" },
  { src: "/images/fiber.webp", code: "GX-CFX", title: "Carbon Fiber Structures", spec: "T700 / 12K weave" },
  { src: "/images/material-stack.webp", code: "GX-MAT", title: "Engineered Material Stock", spec: "Alloys · composites · polymers" },
  { src: "/images/tile-machined.webp", code: "GX-CNC", title: "Machined Assemblies", spec: "5-axis · ±2µm" },
  { src: "/images/steel-flow.webp", code: "GX-SUR", title: "Surface-Treated Components", spec: "PVD · passivated" },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Catalog"
        title="Engineered Components."
        sub="A growing catalog of B2B components and material stock — every line characterized, certified, and built to spec."
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.code} delay={(i % 3) * 80}>
              <article className="group relative overflow-hidden rounded-lg border border-line">
                <div className="relative h-64">
                  <Image src={p.src} alt={p.title} fill sizes="(max-width:1024px) 50vw, 33vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] tracking-[0.14em] text-metal">{p.code}</span>
                    <h2 className="font-display text-lg font-semibold tracking-[-0.01em] text-ink">{p.title}</h2>
                    <span className="font-mono text-[10px] tracking-[0.08em] text-ink-3">{p.spec}</span>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line-2 text-ink transition-colors group-hover:border-ink">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
