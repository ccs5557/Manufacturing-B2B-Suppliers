import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutManifesto } from "@/components/about/AboutManifesto";
import { AboutLedger } from "@/components/about/AboutLedger";
import { AboutProcess } from "@/components/about/AboutProcess";
import { AboutCredentials } from "@/components/about/AboutCredentials";
import { AboutClose } from "@/components/about/AboutClose";

export const metadata: Metadata = {
  title: "About",
  description:
    "GEOMETRIX is a premium B2B precision-manufacturing supplier in Sitiawan, Perak — engineered components and high-performance materials, audited to ISO 9001 / AS9100D / NADCAP, shipped to 40+ countries.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutManifesto />
      <AboutLedger />
      <AboutProcess />
      <AboutCredentials />
      <AboutClose />
    </>
  );
}
