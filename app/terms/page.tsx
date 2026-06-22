import type { Metadata } from "next";
import { LegalDoc, type LegalDocData } from "@/components/legal/LegalDoc";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern use of geometrix.io and the supply of components and materials by GEOMETRIX.",
};

const DOC: LegalDocData = {
  kind: "Terms",
  title: "Terms of Service.",
  updated: "21 June 2026",
  intro:
    "These terms govern your use of geometrix.io and any quotation, order or supply of components and materials by GEOMETRIX. By using the site or placing an order, you agree to them.",
  sections: [
    {
      n: "01",
      id: "agreement",
      heading: "The agreement",
      body: [
        "These terms form the agreement between you and GEOMETRIX Global Innovation, Sitiawan, Perak, Malaysia. Where a signed supply agreement exists, that agreement prevails over these terms to the extent of any conflict.",
      ],
    },
    {
      n: "02",
      id: "quotations-orders",
      heading: "Quotations & orders",
      body: [
        "Quotations are indicative and valid for 30 days unless stated otherwise. An order becomes binding only once we confirm it in writing.",
        "Lead times are estimates and depend on specification, material availability and volume.",
      ],
    },
    {
      n: "03",
      id: "specifications",
      heading: "Specifications & tolerances",
      body: [
        "We manufacture to the drawings, materials and tolerances agreed in writing for each order. Unless a tighter tolerance is specified, our standard machining tolerance is ±2 µm.",
        "You are responsible for ensuring the specifications you provide are correct and complete.",
      ],
    },
    {
      n: "04",
      id: "intellectual-property",
      heading: "Intellectual property",
      body: [
        "Drawings, specifications and technical data you provide remain your property. Our manufacturing processes, tooling, know-how and the content of this site — text, images and marks — remain the property of GEOMETRIX.",
        "Nothing in these terms transfers ownership of either party's intellectual property.",
      ],
    },
    {
      n: "05",
      id: "confidentiality",
      heading: "Confidentiality",
      body: [
        "We treat your technical information as confidential and disclose it only to personnel and vetted suppliers who need it to fulfil your order.",
        "A mutual non-disclosure agreement is available on request before sensitive work begins.",
      ],
    },
    {
      n: "06",
      id: "warranties-liability",
      heading: "Warranties & liability",
      body: [
        "We warrant that delivered parts conform to the agreed specification and certifications (ISO 9001 / AS9100D / NADCAP where stated). Your remedy for non-conforming parts is repair, replacement or credit, at our option.",
        "To the extent permitted by law, our liability is limited to the value of the affected order; we are not liable for indirect or consequential loss.",
      ],
    },
    {
      n: "07",
      id: "governing-law",
      heading: "Governing law",
      body: [
        "These terms are governed by the laws of Malaysia, and the courts of Perak have exclusive jurisdiction.",
        "Questions about these terms can be sent to supply@geometrix.io.",
      ],
    },
  ],
};

export default function TermsPage() {
  return <LegalDoc doc={DOC} />;
}
