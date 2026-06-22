import type { Metadata } from "next";
import { CareersHero } from "@/components/careers/CareersHero";
import { RolesList } from "@/components/careers/RolesList";
import { WhyJoin } from "@/components/careers/WhyJoin";
import { CareersFacility } from "@/components/careers/CareersFacility";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build precision with GEOMETRIX — machining, metrology, composites and automation roles at our ISO 9001 / AS9100D / NADCAP facility in Sitiawan, Perak. Now hiring.",
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <RolesList />
      <WhyJoin />
      <CareersFacility />
      <CtaBand
        eyebrow="Introduce Yourself"
        title="Don't see your role? Tell us anyway."
        ctaHref="mailto:careers@geometrix.io"
        ctaLabel="Email careers"
      />
    </>
  );
}
