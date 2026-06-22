import { Check } from "lucide-react";
import { Section } from "@/components/site/Section";

const CERTS = [
  { code: "ISO 9001", scope: "Quality management system", reg: "REG · 9001-MY-0042" },
  { code: "AS9100D", scope: "Aerospace quality management", reg: "REG · 9100D-AS-0188" },
  { code: "NADCAP", scope: "Special-process accreditation", reg: "REG · NDC-7741" },
  { code: "RoHS", scope: "Restricted-substance compliance", reg: "DIR · 2011/65/EU" },
  { code: "REACH", scope: "Chemical safety registration", reg: "EC · 1907/2006" },
];

function Seal() {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line-2 text-metal">
      <Check className="h-4 w-4" strokeWidth={2} />
    </span>
  );
}

export function AboutCredentials() {
  return (
    <Section className="border-t border-line">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3.5">
            <span className="h-px w-7 bg-metal" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-metal">04 — On File</span>
          </div>
          <h2
            data-shine
            className="headline-metal font-display text-[clamp(2rem,6vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em]"
          >
            Accredited.
          </h2>
        </div>
        <p className="max-w-[340px] font-body text-[14px] leading-[1.6] text-ink-2">
          Every claim is backed by an active certification, audited by an
          independent body and renewed on schedule.
        </p>
      </div>

      {/* Credential grid */}
      <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {CERTS.map((c) => (
          <article key={c.code} data-animate className="flex flex-col justify-between gap-10 bg-surface p-7 lg:p-8">
            <div className="flex items-start justify-between">
              <span className="font-display text-2xl font-bold tracking-[-0.02em] text-ink lg:text-[1.75rem]">
                {c.code}
              </span>
              <Seal />
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="font-body text-[14px] leading-[1.45] text-ink-2">{c.scope}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3">{c.reg}</span>
            </div>
          </article>
        ))}
        {/* Audit note cell completes the 3×2 grid */}
        <article data-animate className="flex flex-col justify-between gap-10 bg-surface-2 p-7 lg:p-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-metal">Status</span>
          <p className="font-display text-lg font-semibold leading-[1.2] tracking-[-0.01em] text-ink">
            Independently audited &amp; re-certified annually.
          </p>
        </article>
      </div>
    </Section>
  );
}
