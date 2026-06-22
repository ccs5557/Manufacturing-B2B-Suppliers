import { CtaBand } from "@/components/site/CtaBand";

const CONTACT = [
  { k: "Email", v: "supply@geometrix.io" },
  { k: "Phone", v: "+60 5 691 0000" },
  { k: "Datum", v: "4°13′N 100°41′E" },
];

export function AboutClose() {
  return (
    <CtaBand
      eyebrow="05 — Next"
      title="Let's engineer your next breakthrough."
      contact={CONTACT}
    />
  );
}
