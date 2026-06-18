import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

/* ── Mobile capability cards (matches the Pencil mobile design) ── */
const CAPS = [
  {
    src: "/images/cap-components.webp",
    title: "ADVANCED COMPONENTS",
    desc: "High-performance parts engineered for critical applications.",
    href: "/products",
  },
  {
    src: "/images/cap-materials.webp",
    title: "MATERIALS SCIENCE",
    desc: "Engineered polymers, composites, and advanced materials for extreme environments.",
    href: "/capabilities",
  },
  {
    src: "/images/cap-precision.webp",
    title: "PRECISION ENGINEERING",
    desc: "Tight tolerances, advanced processes, consistent results.",
    href: "/capabilities",
  },
];

function CapabilityCard({
  src,
  title,
  desc,
  href,
}: (typeof CAPS)[number]) {
  return (
    <Link
      prefetch={false}
      href={href}
      className="group relative block h-[188px] overflow-hidden rounded-xl border border-line"
    >
      <Image src={src} alt={title} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-surface/75 via-surface/10 to-transparent" />
      <div className="absolute left-5 top-5 flex w-[210px] flex-col gap-2.5">
        <h3 className="font-display text-xl font-semibold leading-[1.08] tracking-[-0.01em] text-ink">
          {title.split(" ").map((w) => (
            <span key={w} className="block">
              {w}
            </span>
          ))}
        </h3>
        <p className="font-body text-[12.5px] leading-[1.4] text-ink-2">{desc}</p>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-ink transition-colors group-hover:border-white/80">
          <ArrowRight className="h-[15px] w-[15px]" strokeWidth={1.6} />
        </span>
      </div>
    </Link>
  );
}

/* ── Desktop bento tiles ── */
function Tile({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-md border border-line ${className}`}>
      <Image src={src} alt="" fill sizes="50vw" className="object-cover" />
    </div>
  );
}

function SpecPanel() {
  return (
    <div className="flex h-full flex-col justify-between rounded-md border border-line bg-panel p-7">
      <span className="font-mono text-xs tracking-[0.08em] text-ink-3">01 / CARBON</span>
      <div className="flex flex-col gap-2.5">
        <h3 className="font-display text-2xl font-semibold leading-[1.1] text-ink">
          Micro-Scale Carbon Fiber Composite
        </h3>
        <p className="font-body text-[13px] leading-[1.5] text-ink-2">
          Layered weave engineered for maximum strength at minimal mass.
        </p>
      </div>
    </div>
  );
}

export function AdvancedComponents() {
  return (
    <Section id="components" className="bg-surface">
      {/* ── Mobile: capability cards ── */}
      <div className="lg:hidden">
        <Reveal>
          <p className="eyebrow">Advanced Capabilities</p>
        </Reveal>
        <Reveal delay={80} className="mt-6 flex flex-col gap-4">
          {CAPS.map((c) => (
            <CapabilityCard key={c.title} {...c} />
          ))}
        </Reveal>
      </div>

      {/* ── Desktop: full module + bento ── */}
      <div className="hidden lg:block">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">Module 01</p>
              <h2 className="headline-metal mt-4 font-display text-[clamp(2rem,6vw,4rem)] font-bold uppercase leading-none tracking-[-0.02em]">
                Advanced Components.
              </h2>
            </div>
            <p className="max-w-[340px] font-body text-[15px] leading-[1.55] text-ink-2">
              Micro-scale tolerances and aerospace-grade materials. Engineered for
              the most demanding operating environments.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="grid h-[600px] grid-cols-[minmax(0,540px)_1fr] gap-5">
            <Tile src="/images/valve.webp" className="h-full" />
            <div className="grid grid-rows-[290px_minmax(0,1fr)] gap-5">
              <div className="grid grid-cols-[minmax(0,1fr)_300px] gap-5">
                <SpecPanel />
                <Tile src="/images/cylinder.webp" className="h-full" />
              </div>
              <Tile src="/images/fiber.webp" className="h-full" />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
