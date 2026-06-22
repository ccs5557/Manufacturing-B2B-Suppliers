import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/site/Section";
import { ROLES, applyHref } from "./careers";

export function RolesList() {
  return (
    <Section id="roles" className="border-t border-line">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3.5">
            <span className="h-px w-7 bg-metal" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-metal">01 — Open Roles</span>
          </div>
          <h2
            data-shine
            className="headline-metal font-display text-[clamp(2rem,6vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em]"
          >
            Open roles.
          </h2>
        </div>
        <p className="max-w-[320px] font-body text-[14px] leading-[1.6] text-ink-2">
          All roles are on-site at our Sitiawan facility. Apply by email — a real
          engineer reads every application.
        </p>
      </div>

      <div className="mt-12 border-t border-line-2">
        {ROLES.map((r) => (
          <a
            key={r.n}
            href={applyHref(r.title)}
            data-animate
            className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-4 border-b border-line py-5 transition-colors hover:bg-surface-2/40 sm:grid-cols-[56px_1fr_160px_130px_auto] sm:gap-x-6 sm:py-6"
          >
            <span className="font-mono text-[12px] tracking-[0.12em] text-metal">{r.n}</span>

            <div className="flex flex-col gap-1">
              <span className="font-display text-lg font-bold uppercase tracking-[-0.01em] text-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-xl lg:text-2xl">
                {r.title}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3 sm:hidden">
                {r.dept} · {r.type}
              </span>
            </div>

            <span className="hidden font-mono text-[11px] uppercase tracking-[0.1em] text-ink-2 sm:block">{r.dept}</span>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3 sm:block">
              {r.type} · {r.loc}
            </span>

            <span className="flex h-9 w-9 items-center justify-center justify-self-end rounded-full border border-line-2 text-ink-2 transition-colors group-hover:border-ink group-hover:text-ink">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.6} />
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
