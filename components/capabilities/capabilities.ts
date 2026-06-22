export type Spec = { k: string; v: string };

export type Capability = {
  n: string;
  slug: string;
  title: string;
  src: string;
  lede: string;
  specs: Spec[];
  // condensed fields for the reference matrix
  tolerance: string;
  materials: string;
  lead: string;
  cert: string;
};

export const CAPABILITIES: Capability[] = [
  {
    n: "01",
    slug: "robotic-cells",
    title: "Robotic Cells",
    src: "/images/cap2-robotic.webp",
    lede: "Lights-out automation with adaptive tooling and in-process vision — production that runs unattended, around the clock.",
    specs: [
      { k: "Process", v: "6-axis automated cells" },
      { k: "Repeatability", v: "±0.02 mm" },
      { k: "Payload", v: "8 – 210 kg" },
      { k: "Sensing", v: "Vision + force feedback" },
      { k: "Uptime", v: "24/7 lights-out" },
      { k: "Certification", v: "ISO 9001" },
    ],
    tolerance: "±0.02 mm",
    materials: "Steel · Alloy",
    lead: "Continuous",
    cert: "ISO 9001",
  },
  {
    n: "02",
    slug: "cnc-machining",
    title: "CNC Machining",
    src: "/images/cap2-cnc.webp",
    lede: "Three-, four- and five-axis precision machining holding micron tolerances across hardened alloys and superalloys.",
    specs: [
      { k: "Axes", v: "3 / 4 / 5-axis simultaneous" },
      { k: "Tolerance", v: "±2 µm" },
      { k: "Envelope", v: "1200 × 800 × 600 mm" },
      { k: "Surface", v: "down to Ra 0.2 µm" },
      { k: "Materials", v: "Steel · Ti · Al · Inconel" },
      { k: "Certification", v: "AS9100D" },
    ],
    tolerance: "±2 µm",
    materials: "Steel · Ti · Al · Inconel",
    lead: "5 – 10 days",
    cert: "AS9100D",
  },
  {
    n: "03",
    slug: "assembly-integration",
    title: "Assembly & Integration",
    src: "/images/cap2-assembly.webp",
    lede: "Certified mechanical assembly with inline metrology and functional test — delivered as validated sub-systems, not loose parts.",
    specs: [
      { k: "Process", v: "Inline-metrology assembly" },
      { k: "Stack tolerance", v: "±5 µm" },
      { k: "Test", v: "Functional + leak" },
      { k: "Traceability", v: "Full serialisation" },
      { k: "Scale", v: "Production volume" },
      { k: "Certification", v: "AS9100D" },
    ],
    tolerance: "±5 µm stack",
    materials: "Multi-material",
    lead: "Per build",
    cert: "AS9100D",
  },
  {
    n: "04",
    slug: "metrology-qa",
    title: "Metrology & QA",
    src: "/images/cap2-metrology.webp",
    lede: "Every part inspected, certified and traceable — CMM and optical metrology backed by full PPAP / FAIR reporting.",
    specs: [
      { k: "Equipment", v: "CMM · optical · CT" },
      { k: "Accuracy", v: "±1 µm" },
      { k: "Coverage", v: "100% inspected" },
      { k: "Reporting", v: "PPAP / FAIR" },
      { k: "Traceability", v: "Serialised" },
      { k: "Certification", v: "NADCAP" },
    ],
    tolerance: "±1 µm",
    materials: "All",
    lead: "Inline",
    cert: "NADCAP",
  },
  {
    n: "05",
    slug: "composite-layup",
    title: "Composite Lay-up",
    src: "/images/cap2-composite.webp",
    lede: "Engineered carbon, aramid and glass laminates — autoclave-cured for the highest strength-to-weight.",
    specs: [
      { k: "Process", v: "Hand + automated lay-up" },
      { k: "Materials", v: "Carbon · aramid · glass" },
      { k: "Cure", v: "Autoclave" },
      { k: "Fibre volume", v: "up to 60%" },
      { k: "Tolerance", v: "±0.1 mm" },
      { k: "Certification", v: "AS9100D" },
    ],
    tolerance: "±0.1 mm",
    materials: "Carbon · Aramid",
    lead: "7 – 14 days",
    cert: "AS9100D",
  },
  {
    n: "06",
    slug: "finishing-coating",
    title: "Finishing & Coating",
    src: "/images/cap2-finishing.webp",
    lede: "PVD, anodising and passivation tuned for extreme operating envelopes — surface, hardness and corrosion held to spec.",
    specs: [
      { k: "Processes", v: "PVD · anodise · passivate" },
      { k: "Surface", v: "to Ra 0.05 µm" },
      { k: "Hardness", v: "to 2500 HV" },
      { k: "Salt-spray", v: "1000 h" },
      { k: "Finishes", v: "TiN range" },
      { k: "Certification", v: "NADCAP" },
    ],
    tolerance: "Ra 0.05 µm",
    materials: "Metals",
    lead: "3 – 7 days",
    cert: "NADCAP",
  },
];
