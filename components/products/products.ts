export type Product = {
  code: string;
  title: string;
  src: string;
  category: string;
  /** short line shown on the card */
  blurb: string;
  /** 1–2 sentence intro for the modal */
  description: string;
  specs: { label: string; value: string }[];
  applications: string[];
  certs: string[];
};

export const PRODUCTS: Product[] = [
  {
    code: "GX-VAL",
    title: "Precision Valve Bodies",
    src: "/images/prod-valve.webp",
    category: "Fluid Control",
    blurb: "316L / Ti-6Al-4V",
    description:
      "Single-billet machined valve bodies for high-pressure fluid and gas control. Sub-micron sealing faces and characterized internal passages deliver predictable, repeatable flow.",
    specs: [
      { label: "Material", value: "316L · Ti-6Al-4V G5" },
      { label: "Pressure rating", value: "up to 690 bar" },
      { label: "Tolerance", value: "±2 µm" },
      { label: "Port sizes", value: '1/4"–2" NPT / BSPP' },
      { label: "Surface finish", value: "Ra 0.2 µm" },
    ],
    applications: ["Hydraulics", "Aerospace", "Oil & Gas", "Semiconductor"],
    certs: ["ISO 9001", "AS9100D", "NADCAP"],
  },
  {
    code: "GX-CYL",
    title: "Hydraulic Cylinders",
    src: "/images/prod-cylinder.webp",
    category: "Motion Systems",
    blurb: "6061-T6 / hard-anodized",
    description:
      "Custom-bore hydraulic actuators with hard-anodized barrels and induction-hardened chrome rods. Engineered for repeatable force delivery under continuous duty.",
    specs: [
      { label: "Barrel", value: "6061-T6 hard-anodized" },
      { label: "Rod", value: "Induction-hardened chrome" },
      { label: "Bore", value: "25–200 mm" },
      { label: "Stroke", value: "up to 3000 mm" },
      { label: "Pressure", value: "250 bar" },
    ],
    applications: ["Industrial Automation", "Heavy Machinery", "Marine"],
    certs: ["ISO 9001", "CE"],
  },
  {
    code: "GX-CFX",
    title: "Carbon Fiber Structures",
    src: "/images/prod-carbon.webp",
    category: "Composites",
    blurb: "T700 / 12K weave",
    description:
      "Autoclave-cured T700 structures with co-bonded metallic inserts. Maximum stiffness-to-weight for load-bearing aerospace and motorsport assemblies.",
    specs: [
      { label: "Fibre", value: "T700 / 12K" },
      { label: "Weave", value: "2×2 twill" },
      { label: "Resin", value: "Toughened epoxy" },
      { label: "Cure", value: "Autoclave, 120 °C" },
      { label: "Fibre volume", value: "60 %" },
    ],
    applications: ["Aerospace", "Motorsport", "Robotics", "UAV"],
    certs: ["AS9100D", "RoHS", "REACH"],
  },
  {
    code: "GX-MAT",
    title: "Engineered Material Stock",
    src: "/images/prod-material.webp",
    category: "Materials",
    blurb: "Alloys · composites · polymers",
    description:
      "Certified raw and semi-finished stock — alloys, composites, mesh and engineering polymers — characterized and fully traceable from a single supply desk.",
    specs: [
      { label: "Alloys", value: "316L · Ti · 6061 · Inconel" },
      { label: "Composites", value: "Carbon · aramid laminate" },
      { label: "Polymers", value: "PEEK · PEI · POM" },
      { label: "Forms", value: "Plate · bar · mesh · core" },
      { label: "Traceability", value: "Full mill certificate" },
    ],
    applications: ["Aerospace", "Medical", "Energy", "Tooling"],
    certs: ["ISO 9001", "RoHS", "REACH"],
  },
  {
    code: "GX-CNC",
    title: "Machined Assemblies",
    src: "/images/prod-machined.webp",
    category: "Precision Machining",
    blurb: "5-axis · ±2µm",
    description:
      "Complex 5-axis machined assemblies with inline metrology. Topology-lightweighted, tight stack tolerances, production-ready straight out of the cell.",
    specs: [
      { label: "Process", value: "5-axis CNC" },
      { label: "Tolerance", value: "±2 µm" },
      { label: "Materials", value: "Aluminium · Ti · steel" },
      { label: "Inspection", value: "100 % CMM" },
      { label: "Finish", value: "Anodize / passivate" },
    ],
    applications: ["Aerospace", "Medical", "Semiconductor", "Defence"],
    certs: ["ISO 9001", "AS9100D", "NADCAP"],
  },
  {
    code: "GX-SUR",
    title: "Surface-Treated Components",
    src: "/images/prod-surface.webp",
    category: "Surface Engineering",
    blurb: "PVD · passivated",
    description:
      "PVD coatings, passivation and anodizing that extend service life and control friction — jewel-grade finishes with measured, repeatable layer thickness.",
    specs: [
      { label: "Coatings", value: "TiN · CrN · DLC" },
      { label: "Thickness", value: "1–4 µm" },
      { label: "Hardness", value: "up to 3000 HV" },
      { label: "Passivation", value: "ASTM A967" },
      { label: "Colour", value: "Steel · bronze · black" },
    ],
    applications: ["Cutting Tools", "Medical", "Optics", "Luxury"],
    certs: ["ISO 9001", "NADCAP", "RoHS"],
  },
];
