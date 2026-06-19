"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Timer, Lock } from "lucide-react";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

const CONTACT: [string, string][] = [
  ["EMAIL", "supply@geometrix.io"],
  ["PHONE", "+60 5 691 0000"],
  ["FACILITY", "Sitiawan, Perak, Malaysia"],
];

export function Consultation() {
  const [value, setValue] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Consultation request — GEOMETRIX");
    const body = encodeURIComponent(`${value || "(project details)"}\n\n— sent from geometrix.io`);
    window.location.href = `mailto:supply@geometrix.io?subject=${subject}&body=${body}`;
  }

  return (
    <Section id="consultation" className="bg-surface">
      {/* ── Mobile ── */}
      <div className="lg:hidden">
        <Reveal>
          <h2 data-shine="" className="headline-metal font-display text-[clamp(1.9rem,9vw,2.5rem)] font-bold uppercase leading-[1.04] tracking-[-0.02em]">
            Ready to Engineer What&apos;s Next?
          </h2>
          <p className="mt-4 font-body text-[13.5px] leading-[1.45] text-ink-2">
            Talk to our experts about your project needs.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-6">
          <form
            onSubmit={submit}
            className="relative flex flex-col gap-3.5 overflow-hidden rounded-[10px] border border-[#6e6e68] p-5"
            style={{ boxShadow: "0 20px 40px -10px rgba(0,0,0,0.7)" }}
          >
            <Image src="/images/form-plate.webp" alt="" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/25 to-black/15" />

            <h3 className="relative font-display text-[17px] font-semibold tracking-[0.02em] text-[#0c0c0d]">
              REQUEST CONSULTATION
            </h3>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Describe your project scope"
              aria-label="Project scope"
              className="relative h-[46px] rounded-[4px] border border-[#7c7c76] bg-[#bab8b3] px-3.5 font-body text-sm text-[#1a1a18] placeholder:text-[#484845]"
            />
            <button
              type="submit"
              className="relative flex h-12 items-center justify-center gap-2.5 rounded-[4px] bg-[#191917] font-mono text-[11.5px] tracking-[0.15em] text-[#edebe6] transition-[filter] hover:brightness-125"
            >
              SEND REQUEST
              <ArrowRight className="h-[15px] w-[15px]" strokeWidth={1.8} />
            </button>
            <div className="relative flex items-center justify-between pt-0.5">
              <span className="flex items-center gap-1.5 font-mono text-[9px] tracking-[0.05em] text-[#3a3a37]">
                <Timer className="h-3 w-3" strokeWidth={1.8} /> RESPONSE WITHIN 24H
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[9px] tracking-[0.05em] text-[#3a3a37]">
                <Lock className="h-3 w-3" strokeWidth={1.8} /> CONFIDENTIAL &amp; SECURE
              </span>
            </div>
          </form>
        </Reveal>
      </div>

      {/* ── Desktop ── */}
      <div className="hidden lg:block">
        <Reveal className="flex flex-col items-center text-center">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-metal">Get in touch</span>
          <h2 data-shine="" className="headline-metal mt-5 max-w-[840px] font-display text-[clamp(1.9rem,5vw,3.25rem)] font-bold uppercase leading-[1.02] tracking-[-0.02em]">
            Let&apos;s Engineer Your Next Breakthrough.
          </h2>
          <p className="mt-5 max-w-[560px] font-body text-base leading-[1.55] text-ink-2">
            Share your specifications and our engineering team will respond within
            one business day with a tailored supply proposal.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div
            className="relative mx-auto w-full max-w-[820px] overflow-hidden rounded-xl border border-[#6e6e68]"
            style={{ boxShadow: "0 26px 55px -10px rgba(0,0,0,0.65), 0 1.5px 0 rgba(255,255,255,0.35)" }}
          >
            <Image src="/images/form-plate.webp" alt="" fill sizes="820px" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-black/25" />
            <div className="pointer-events-none absolute inset-3 rounded-lg border border-white/10" />

            {/* Raised rail — runs from the left and continues behind the form plate */}
            <div
              className="absolute left-10 right-[40%] top-1/2 h-[30px] -translate-y-1/2 rounded-[4px] border border-[#1a1a18]"
              style={{ background: "linear-gradient(180deg,#2a2a28 0%,#4a4a47 55%,#6e6e6a 100%)", boxShadow: "0 5px 9px rgba(0,0,0,0.45), 0 -2px 2px rgba(255,255,255,0.25)" }}
            />

            <div className="relative grid gap-8 p-7 lg:grid-cols-[1fr_minmax(0,420px)] lg:items-stretch">
              <div className="relative z-10 flex h-full flex-col justify-between py-1">
                <span className="font-mono text-[10px] tracking-[0.22em] text-[#2b2b27]">GEOMETRIX // SUPPLY DESK</span>
                <span className="font-mono text-[10px] tracking-[0.18em] text-[#2b2b27]">ISO 9001 · AS9100D · NADCAP</span>
              </div>

              <form
                onSubmit={submit}
                className="relative z-10 flex flex-col gap-3.5 overflow-hidden rounded-[10px] border border-[#8e8e8a] p-5"
                style={{ boxShadow: "0 12px 24px -6px rgba(0,0,0,0.6), 0 2px 0 rgba(255,255,255,0.4)" }}
              >
                <Image src="/images/form-plate.webp" alt="" fill sizes="420px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-black/20" />
                <h3 className="relative font-display text-lg font-semibold tracking-[0.02em] text-[#1a1a18]" style={{ textShadow: "0 1px 0 rgba(255,255,255,0.55)" }}>
                  REQUEST CONSULTATION
                </h3>
                <input
                  type="email"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="you@company.com"
                  aria-label="Your email"
                  className="relative h-12 rounded-[4px] border border-[#7c7c77] bg-[#c8c6c2] px-4 font-body text-sm text-[#1a1a18] placeholder:text-[#6b6b66] focus:border-[#1a1a18]"
                  style={{ boxShadow: "inset 0 2px 4px rgba(0,0,0,0.4)" }}
                />
                <button
                  type="submit"
                  className="relative h-12 rounded-[4px] border border-[#3a3a36] bg-[#191917] font-mono text-xs tracking-[0.15em] text-[#e8e6e1] transition-[filter] hover:brightness-125"
                  style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.2)" }}
                >
                  SEND CONSULTATION REQUEST
                </button>
              </form>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
            {CONTACT.map(([k, v]) => (
              <div key={k} className="flex items-center gap-4">
                <span className="w-[72px] font-mono text-[11px] tracking-[0.08em] text-ink-3">{k}</span>
                <span className="font-body text-[15px] text-ink">{v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
