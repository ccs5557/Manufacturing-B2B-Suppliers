import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { Consultation } from "@/components/sections/Consultation";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to GEOMETRIX engineering. Email supply@geometrix.io, call +60 5 691 0000, or visit our facility in Sitiawan, Perak, Malaysia.",
};

const DETAILS = [
  { Icon: Mail, label: "EMAIL", value: "supply@geometrix.io", href: "mailto:supply@geometrix.io" },
  { Icon: Phone, label: "PHONE", value: "+60 5 691 0000", href: "tel:+6056910000" },
  { Icon: MapPin, label: "FACILITY", value: "Sitiawan, Perak, Malaysia", href: undefined },
  { Icon: Clock, label: "HOURS", value: "Mon–Fri · 09:00–18:00 MYT", href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact."
        sub="Share your specifications and our engineering team responds within one business day with a tailored supply proposal."
      />

      <Section className="bg-surface" pad="tight">
        <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {DETAILS.map(({ Icon, label, value, href }) => {
            const inner = (
              <div className="flex h-full flex-col gap-4 rounded-lg border border-line bg-surface-2 p-6 transition-colors hover:border-line-2">
                <Icon className="h-5 w-5 text-metal" strokeWidth={1.6} />
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] tracking-[0.14em] text-ink-3">{label}</span>
                  <span className="font-body text-[15px] text-ink">{value}</span>
                </div>
              </div>
            );
            return href ? (
              <a key={label} href={href} className="block">
                {inner}
              </a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
        </Reveal>
      </Section>

      <Consultation />
    </>
  );
}
