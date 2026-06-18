import Image from "next/image";
import { Leaf, Hexagon, Atom, Thermometer, ShieldCheck, ChevronRight } from "lucide-react";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

type Material = { n: string; name: string; spec: string };

const LEFT: Material[] = [
  { n: "01", name: "Brushed Steel", spec: "316L / 1.4404" },
  { n: "03", name: "Titanium Mesh", spec: "Ti-6Al-4V G5" },
  { n: "05", name: "Perforated Alloy", spec: "6061-T6" },
];
const RIGHT: Material[] = [
  { n: "02", name: "Carbon Fiber", spec: "T700 / 12K" },
  { n: "04", name: "Composite Laminate", spec: "Aramid / epoxy" },
  { n: "06", name: "Polymer Core", spec: "PEEK / PEI" },
];

const STATS: [string, string][] = [
  [">500°C", "THERMAL LIMIT"],
  ["8.4×", "STRENGTH / WEIGHT"],
  ["±2µm", "TOLERANCE"],
  ["100%", "INSPECTED"],
];
const CERTS = ["ISO 9001", "AS9100D", "NADCAP", "RoHS", "REACH"];

// Mobile spec rows — icon + label + connector line + chevron (matches the artboard).
const SPECS = [
  { Icon: Leaf, label: "STRENGTH-TO-WEIGHT RATIO" },
  { Icon: Hexagon, label: "COMPOSITES" },
  { Icon: Atom, label: "ENGINEERED POLYMERS" },
  { Icon: Thermometer, label: "HEAT RESISTANCE" },
  { Icon: ShieldCheck, label: "CERTIFICATIONS" },
];

const ROW_TOP = [60, 235, 410];

function Callout({ m, side, top }: { m: Material; side: "left" | "right"; top: number }) {
  const isLeft = side === "left";
  return (
    <div className={`absolute w-[230px] ${isLeft ? "left-0 text-right" : "right-0 text-left"}`} style={{ top }}>
      <div className={`flex items-center gap-2.5 ${isLeft ? "justify-end" : "justify-start"}`}>
        {!isLeft && <span className="font-mono text-[11px] text-metal">{m.n}</span>}
        <span className="font-display text-lg font-semibold tracking-[-0.01em] text-ink">{m.name}</span>
        {isLeft && <span className="font-mono text-[11px] text-metal">{m.n}</span>}
      </div>
      <span className="mt-1.5 block font-mono text-[10px] tracking-[0.1em] text-ink-3">{m.spec}</span>
      <span className={`absolute top-[11px] h-px w-[120px] bg-line-2 ${isLeft ? "left-full" : "right-full"}`} />
      <span className={`absolute top-[8px] h-[7px] w-[7px] rounded-full bg-metal ${isLeft ? "left-[calc(100%+114px)]" : "right-[calc(100%+114px)]"}`} />
    </div>
  );
}

export function MaterialScience() {
  return (
    <Section id="materials" className="bg-surface" pad="tight">
      {/* ── Mobile ── */}
      <div className="lg:hidden">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-2">Materials Science</p>
          <h2 className="headline-metal mt-4 whitespace-pre-line font-display text-[clamp(1.85rem,8.6vw,2.3rem)] font-extrabold uppercase leading-[1.0] tracking-[-0.02em]">
            {"Engineered\nfor Excellence."}
          </h2>
          <p className="mt-4 font-body text-[14px] leading-[1.5] text-ink-2">
            Advanced materials. Proven performance.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-6">
          <div className="relative h-[312px]">
            {/* glow */}
            <div
              className="absolute right-[-10px] top-1/2 h-[320px] w-[340px] -translate-y-1/2 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(69,69,79,0.45) 0%, rgba(10,10,11,0) 70%)" }}
            />
            {/* large stack image, right side, bleeds past the screen edge */}
            <div className="absolute inset-y-0 right-[-34px] w-[280px]">
              <Image
                src="/images/material-stack.webp"
                alt="Stacked engineered material samples"
                fill
                sizes="300px"
                className="object-contain object-center"
              />
            </div>
            {/* spec rows spread to span the height and align with the stack layers */}
            <ul className="absolute inset-y-0 left-0 z-10 flex w-[176px] flex-col justify-between py-2">
              {SPECS.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5">
                  <Icon className="h-[19px] w-[19px] shrink-0 text-ink-2" strokeWidth={1.4} />
                  <span className="font-display text-[11.5px] font-semibold leading-[1.12] tracking-[0.01em] text-ink">
                    {label}
                  </span>
                  <span className="h-px flex-1 bg-line-2" />
                  <ChevronRight className="h-3 w-3 shrink-0 text-ink-3" strokeWidth={1.5} />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* ── Desktop ── */}
      <div className="hidden lg:block">
        <Reveal className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3.5">
            <span className="h-px w-7 bg-metal" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-metal">Module 03 / Materials</span>
          </div>
          <h2 className="headline-metal mt-5 font-display text-[clamp(2.25rem,7vw,5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.025em]">
            Material Science.
          </h2>
          <p className="mt-5 max-w-[680px] font-body text-base leading-[1.55] text-ink-2">
            Every alloy and composite is characterized, certified, and stress-tested.
            We engineer the substrate before we engineer the part.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <div className="relative mx-auto h-[520px] max-w-[1080px]">
            <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: "radial-gradient(circle, rgba(69,69,79,0.5) 0%, rgba(10,10,11,0) 70%)" }} />
            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2">
              <Image src="/images/material-stack.webp" alt="Stacked engineered material samples" fill sizes="520px" className="object-contain" />
            </div>
            {LEFT.map((m, i) => (
              <Callout key={m.n} m={m} side="left" top={ROW_TOP[i]} />
            ))}
            {RIGHT.map((m, i) => (
              <Callout key={m.n} m={m} side="right" top={ROW_TOP[i]} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-14 flex flex-col items-center gap-7">
          <div className="grid w-full max-w-[820px] grid-cols-4 divide-x divide-line">
            {STATS.map(([v, k]) => (
              <div key={k} className="flex flex-col items-center gap-2 px-4">
                <span className="font-display text-[clamp(1.75rem,4vw,2.4rem)] font-bold tracking-[-0.04em] text-ink">{v}</span>
                <span className="font-mono text-[10px] tracking-[0.15em] text-ink-2">{k}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {CERTS.map((c) => (
              <span key={c} className="rounded-[4px] border border-line-2 px-3.5 py-2 font-mono text-[10px] tracking-[0.1em] text-ink-2">
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
