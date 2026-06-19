import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

/* ── Desktop data ── */
const TILES = [
  { src: "/images/tile-robotic.webp", label: "ROBOTIC CELL", index: "01" },
  { src: "/images/tile-assembly.webp", label: "ASSEMBLY LINE", index: "02" },
  { src: "/images/tile-machined.webp", label: "MACHINED PARTS", index: "03" },
];
const ABSTRACT = [
  { src: "/images/steel-flow.webp", label: "STEEL / FLOW", sub: "Brushed-steel light streaks" },
  { src: "/images/structure-atomic.webp", label: "STRUCTURE / ATOMIC", sub: "Molecular lattice render" },
];

function PhotoTile({ src, label, index, className = "" }: { src: string; label: string; index: string; className?: string }) {
  return (
    <figure data-animate="" className={`relative overflow-hidden rounded-[4px] border border-line ${className}`}>
      <Image src={src} alt={label} fill sizes="33vw" className="object-cover" />
      <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-surface/90 to-transparent px-[18px] pb-4 pt-7">
        <span className="font-mono text-[11px] tracking-[0.14em] text-ink">{label}</span>
        <span className="font-mono text-[11px] tracking-[0.14em] text-ink-3">{index}</span>
      </figcaption>
    </figure>
  );
}

function AbstractTile({ src, label, sub, className = "" }: { src: string; label: string; sub: string; className?: string }) {
  return (
    <figure data-animate="" className={`relative overflow-hidden rounded-[4px] border border-line ${className}`}>
      <Image src={src} alt={label} fill sizes="50vw" className="object-cover" />
      <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-gradient-to-t from-surface to-transparent px-[22px] pb-5 pt-9">
        <span className="font-mono text-[11px] tracking-[0.14em] text-ink">{label}</span>
        <span className="font-body text-[13px] text-ink-2">{sub}</span>
      </figcaption>
    </figure>
  );
}

/* ── Mobile data + card ── */
const M_BIG = { src: "/images/tile-assembly.webp", title: "AUTOMATED PRODUCTION" };
const M_HALF = [
  { src: "/images/tile-machined.webp", title: "CNC MACHINING" },
  { src: "/images/valve.webp", title: "QUALITY ASSURANCE" },
];

function MobileProcessCard({ src, title, className = "" }: { src: string; title: string; className?: string }) {
  return (
    <figure data-animate="" className={`relative flex flex-col justify-end overflow-hidden rounded-xl border border-line ${className}`}>
      <Image src={src} alt={title} fill sizes="(max-width:640px) 50vw, 100vw" className="object-cover" />
      <figcaption className="relative bg-gradient-to-t from-surface via-surface/70 to-transparent px-3.5 pb-3.5 pt-10">
        <span className="font-display text-[15px] font-semibold leading-[1.12] tracking-[-0.01em] text-ink">
          {title.split(" ").map((w) => (
            <span key={w} className="block">
              {w}
            </span>
          ))}
        </span>
      </figcaption>
    </figure>
  );
}

export function ProductionOptimized() {
  return (
    <Section id="production" className="bg-surface">
      {/* ── Mobile ── */}
      <div className="lg:hidden">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-2">
            Production &amp; Process
          </p>
        </Reveal>
        <div className="mt-6 flex flex-col gap-3.5">
          <MobileProcessCard {...M_BIG} className="h-[200px]" />
          <div className="grid grid-cols-2 gap-3.5">
            {M_HALF.map((c) => (
              <MobileProcessCard key={c.title} {...c} className="h-[150px]" />
            ))}
          </div>
        </div>
      </div>

      {/* ── Desktop ── */}
      <div className="hidden lg:block">
        <Reveal>
          <div className="flex items-center gap-3.5">
            <span className="h-px w-7 bg-metal" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-metal">
              Module 02 / Automation
            </span>
          </div>
          <h2 data-shine="" className="headline-metal mt-9 font-display text-[clamp(2.4rem,9vw,6rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em]">
            Production, Optimized.
          </h2>
          <div className="mt-9 flex items-end justify-between">
            <p className="max-w-[560px] font-body text-base leading-[1.55] text-ink-2">
              Closed-loop automation drives our high-precision metal manufacturing.
              Robotic cells, adaptive tooling, and inline metrology hold sub-micron
              tolerances at production scale — every part measured, every cycle
              optimized.
            </p>
            <div className="flex items-center gap-3">
              <button type="button" aria-label="Previous" className="flex h-14 w-14 items-center justify-center rounded-full border border-line-2 text-ink transition-colors hover:border-ink">
                <ArrowLeft className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <button type="button" aria-label="Next" className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-[#0a0a0b] transition-[filter] hover:brightness-105">
                <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-14">
          <div className="grid grid-cols-3 gap-4">
            {TILES.map((t) => (
              <PhotoTile key={t.index} {...t} className="h-[360px]" />
            ))}
          </div>
        </div>

        <div className="mt-4">
          <div className="grid grid-cols-2 gap-4">
            {ABSTRACT.map((a) => (
              <AbstractTile key={a.label} {...a} className="h-[300px]" />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
