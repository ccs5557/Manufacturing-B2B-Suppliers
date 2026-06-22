import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { Consultation } from "@/components/sections/Consultation";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to GEOMETRIX engineering. Email supply@geometrix.io, call +60 5 691 0000, or visit our facility in Sitiawan, Perak, Malaysia. Response within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <Consultation />
    </>
  );
}
