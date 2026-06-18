import Image from "next/image";
import { Cta } from "@/components/site/Cta";

const HEADLINE = ["GEOMETRIX.", "PRECISION.", "APPLIED."];

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-surface lg:h-[860px] lg:min-h-0">
      {/* Background gear — portrait crop on mobile, landscape on desktop */}
      <Image
        src="/images/mobile-hero.webp"
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) 0px, 100vw"
        className="object-cover object-center lg:hidden"
      />
      <Image
        src="/images/hero-gear.webp"
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) 100vw, 0px"
        className="hidden object-cover object-[70%_center] lg:block"
      />

      {/* Scrim — keeps left-aligned copy legible over the metal */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/85 via-surface/35 to-surface lg:bg-gradient-to-r lg:from-surface lg:via-surface/55 lg:to-surface/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />

      {/* Copy — high on mobile (matches the mobile artboard), centered on desktop */}
      <div className="relative z-10 flex h-full flex-col justify-start px-5 pt-24 lg:justify-center lg:px-14 lg:pt-0">
        <div className="max-w-[720px]">
          <p className="eyebrow reveal" style={{ animationDelay: "0ms" }}>
            Advanced Engineering Solutions
          </p>

          <h1 className="mt-5 font-display font-bold uppercase leading-[0.94] tracking-[-0.025em]">
            {HEADLINE.map((line, i) => (
              <span
                key={line}
                className="headline-metal reveal block text-[clamp(2.6rem,11vw,6.25rem)]"
                style={{ animationDelay: `${120 + i * 90}ms` }}
              >
                {line}
              </span>
            ))}
          </h1>

          <p
            className="reveal mt-6 max-w-[460px] font-body text-[15px] leading-[1.5] text-ink-2 lg:text-base"
            style={{ animationDelay: "440ms" }}
          >
            Premium B2B supply of engineered components and high-performance
            materials. Built in Sitiawan, Perak — trusted worldwide.
          </p>

          <div className="reveal mt-8" style={{ animationDelay: "560ms" }}>
            <Cta href="/capabilities">EXPLORE CAPABILITIES</Cta>
          </div>
        </div>
      </div>

      {/* Trusted strip */}
      <div
        className="reveal absolute inset-x-0 bottom-7 z-10 flex flex-col gap-3 px-5 lg:bottom-9 lg:px-14"
        style={{ ["--d" as string]: "720ms" }}
      >
        <span className="font-mono text-[10px] tracking-[0.2em] text-ink-3">
          TRUSTED ACROSS AEROSPACE · ENERGY · MOBILITY
        </span>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2 font-display text-sm font-semibold tracking-[0.04em] text-ink-2/70">
          <span>AEROFLUX</span>
          <span>NORDHAVN</span>
          <span>VANTA&nbsp;IND.</span>
          <span className="hidden sm:inline">KESTREL</span>
          <span className="hidden sm:inline">MERIDIAN</span>
        </div>
      </div>
    </section>
  );
}
