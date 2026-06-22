import { ROLES } from "./careers";

const META = [
  { k: "Open roles", v: String(ROLES.length).padStart(2, "0") },
  { k: "Location", v: "Sitiawan, Perak" },
  { k: "Basis", v: "On-site · Full-time" },
];

export function CareersHero() {
  return (
    <section className="px-5 pb-10 pt-28 lg:px-14 lg:pb-16 lg:pt-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-center gap-3.5" data-hero>
          <span className="h-px w-7 bg-metal" />
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-metal">Join Us — 00</span>
        </div>

        <h1
          data-hero
          data-shine
          className="headline-metal mt-6 font-display text-[clamp(2.7rem,9vw,7rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.04em]"
        >
          Build precision
          <br />
          with us.
        </h1>

        <p data-hero className="mt-7 max-w-[620px] font-body text-[15px] leading-[1.6] text-ink-2 lg:text-base">
          We make parts the world&apos;s most demanding industries depend on — and
          we hire people who treat a tolerance as a promise. If you measure
          before you cut, you&apos;ll fit right in.
        </p>

        <dl data-hero className="mt-12 grid gap-6 border-t border-line pt-6 sm:grid-cols-3 sm:gap-10">
          {META.map((m) => (
            <div key={m.k} className="flex flex-col gap-1.5">
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">{m.k}</dt>
              <dd className="font-mono text-[13px] tracking-[0.04em] text-ink">{m.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
