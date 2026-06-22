import type { Metadata } from "next";
import { LegalDoc, type LegalDocData } from "@/components/legal/LegalDoc";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How GEOMETRIX collects, uses and protects your information, in line with Malaysia's Personal Data Protection Act (PDPA).",
};

const DOC: LegalDocData = {
  kind: "Privacy",
  title: "Privacy Policy.",
  updated: "21 June 2026",
  intro:
    "This policy explains what information GEOMETRIX collects when you contact us or use geometrix.io, how we use it, and the choices you have. We handle personal data in line with Malaysia's Personal Data Protection Act 2010 (PDPA).",
  sections: [
    {
      n: "01",
      id: "overview",
      heading: "Overview",
      body: [
        "GEOMETRIX Global Innovation (“GEOMETRIX”, “we”) operates geometrix.io from Sitiawan, Perak, Malaysia. This policy covers the personal data we process as a data controller through this site and our supply desk.",
      ],
    },
    {
      n: "02",
      id: "what-we-collect",
      heading: "Information we collect",
      body: [
        "Information you give us — your name, company, email, phone, and the project details, drawings or specifications you send when requesting a quotation or consultation.",
        "Information collected automatically — basic, aggregated usage data such as pages viewed and device type, used only to keep the site fast and secure. We do not use advertising or cross-site tracking cookies.",
      ],
    },
    {
      n: "03",
      id: "how-we-use",
      heading: "How we use it",
      body: [
        "We use your information only to respond to your enquiry, prepare quotations, fulfil and support supply agreements, and meet our legal and accounting obligations.",
        "We do not sell your data, and we never use your drawings or specifications for any purpose other than serving your project.",
      ],
    },
    {
      n: "04",
      id: "sharing",
      heading: "Sharing & disclosure",
      body: [
        "We share personal data only with vetted service providers who help us operate — for example email and hosting — under confidentiality terms, and where required by law or to protect our rights.",
        "Technical data you share is treated as confidential and is not disclosed to third parties without your consent.",
      ],
    },
    {
      n: "05",
      id: "retention-security",
      heading: "Retention & security",
      body: [
        "We keep personal data only as long as needed for the purpose it was collected, or as required by law, then delete or anonymise it.",
        "Data is stored with access controls and encrypted in transit. Your drawings and specifications are held under the same confidentiality controls we apply to all client technical information.",
      ],
    },
    {
      n: "06",
      id: "your-rights",
      heading: "Your rights & contact",
      body: [
        "Under the PDPA you may request access to, correction of, or deletion of your personal data, and you may withdraw consent at any time.",
        "To exercise these rights, email supply@geometrix.io and we will respond within one business day.",
      ],
    },
  ],
};

export default function PrivacyPage() {
  return <LegalDoc doc={DOC} />;
}
