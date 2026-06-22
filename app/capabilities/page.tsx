import type { Metadata } from "next";
import { CapabilitiesHero } from "@/components/capabilities/CapabilitiesHero";
import { CapabilityDossier } from "@/components/capabilities/CapabilityDossier";
import { CapabilityMatrix } from "@/components/capabilities/CapabilityMatrix";
import { MaterialsStrip } from "@/components/capabilities/MaterialsStrip";
import { CtaBand } from "@/components/site/CtaBand";
import { CAPABILITIES } from "@/components/capabilities/capabilities";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "CNC machining, robotic automation, composite lay-up, metrology and finishing — a vertically integrated precision-manufacturing stack held to micron tolerances. ISO 9001 / AS9100D / NADCAP.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <CapabilitiesHero />
      {CAPABILITIES.map((c, i) => (
        <CapabilityDossier key={c.slug} c={c} flip={i % 2 === 1} />
      ))}
      <CapabilityMatrix />
      <MaterialsStrip />
      <CtaBand eyebrow="Get Started" title="Need a process that holds spec?" />
    </>
  );
}
