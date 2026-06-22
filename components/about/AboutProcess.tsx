"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/site/Section";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const STAGES = [
  { i: "01", src: "/images/cap-robotic.webp", name: "Robotic Cells", spec: "Lights-out automation · adaptive tooling" },
  { i: "02", src: "/images/cap-cnc.webp", name: "5-Axis CNC", spec: "Micron-level machining · ±2µm" },
  { i: "03", src: "/images/cap-composite.webp", name: "Composite Lay-up", spec: "Engineered carbon & aramid laminate" },
  { i: "04", src: "/images/cap-metrology.webp", name: "Metrology", spec: "100% inspected · fully traceable" },
  { i: "05", src: "/images/cap-finishing.webp", name: "Finishing", spec: "Surface treatment · coatings" },
];

function Panel({ s, className = "" }: { s: (typeof STAGES)[number]; className?: string }) {
  return (
    <article className={`group relative shrink-0 overflow-hidden rounded-[4px] border border-line ${className}`}>
      <Image src={s.src} alt={s.name} fill sizes="(max-width:1024px) 80vw, 560px" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/15 to-surface/40" />
      <span className="absolute left-5 top-4 font-mono text-[11px] tracking-[0.16em] text-metal">/{s.i}</span>
      <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-5 lg:p-6">
        <span className="font-display text-xl font-bold uppercase tracking-[-0.01em] text-ink lg:text-2xl">
          {s.name}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-2">{s.spec}</span>
      </figcaption>
    </article>
  );
}

export function AboutProcess() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const t = track.current;
      if (!t || window.innerWidth < 1024) return; // desktop only — mobile uses native scroll
      const distance = () => Math.max(0, t.scrollWidth - window.innerWidth);

      const tween = gsap.to(t, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          pin: true,
          start: "top top",
          end: () => "+=" + distance(),
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (fill.current) fill.current.style.transform = `scaleX(${self.progress})`;
          },
        },
      });

      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);
      return () => {
        window.removeEventListener("load", onLoad);
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: root },
  );

  return (
    <>
      {/* ── Desktop: pinned horizontal production line ── */}
      <section ref={root} className="relative hidden h-[100svh] overflow-hidden border-t border-line lg:block">
        {/* Top chrome — eyebrow + ruler progress */}
        <div className="absolute inset-x-0 top-0 z-10 px-14 pt-14">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between">
            <div className="flex items-center gap-3.5">
              <span className="h-px w-7 bg-metal" />
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-metal">
                03 — Inside the Line
              </span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
              Robotic → CNC → Composite → Metrology → Finishing
            </span>
          </div>
          {/* ruler */}
          <div className="mx-auto mt-5 max-w-[1440px]">
            <div className="relative h-px w-full bg-line">
              <span ref={fill} className="absolute inset-0 origin-left scale-x-0 bg-metal" />
            </div>
          </div>
        </div>

        {/* Track */}
        <div ref={track} className="flex h-full items-center gap-5 pl-14 pr-[12vw] will-change-transform">
          {/* Intro panel */}
          <div className="flex h-[58vh] w-[44vw] max-w-[560px] shrink-0 flex-col justify-end pb-2">
            <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-ink">
              The production
              <br />
              line.
            </h2>
            <p className="mt-6 max-w-[420px] font-body text-[15px] leading-[1.6] text-ink-2">
              From raw substrate to certified part — five vertically integrated
              stages, each measured and logged. Keep scrolling to walk the line.
            </p>
            <span className="mt-8 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-3">
              Scroll →
            </span>
          </div>
          {STAGES.map((s) => (
            <Panel key={s.i} s={s} className="h-[62vh] w-[34vw] max-w-[460px]" />
          ))}
        </div>
      </section>

      {/* ── Mobile: native snap strip ── */}
      <div className="lg:hidden">
        <Section className="border-t border-line" pad="tight">
          <div className="flex items-center gap-3.5">
            <span className="h-px w-7 bg-metal" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-metal">03 — Inside the Line</span>
          </div>
          <h2 className="mt-6 font-display text-[clamp(2rem,8vw,2.75rem)] font-extrabold uppercase leading-[0.96] tracking-[-0.03em] text-ink">
            The production line.
          </h2>
          <p className="mt-4 max-w-[440px] font-body text-[14px] leading-[1.6] text-ink-2">
            From raw substrate to certified part — five vertically integrated
            stages, each measured and logged.
          </p>
        </Section>
        <div className="-mt-2 overflow-x-auto pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory scroll-pl-5">
          <div className="flex gap-3.5 pl-5">
            {STAGES.map((s) => (
              <Panel key={s.i} s={s} className="h-[56vh] w-[78vw] max-w-[360px] snap-start" />
            ))}
            <div className="w-2 shrink-0" aria-hidden />
          </div>
        </div>
      </div>
    </>
  );
}
