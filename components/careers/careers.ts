export type Role = {
  n: string;
  title: string;
  dept: string;
  type: string;
  loc: string;
};

export const ROLES: Role[] = [
  { n: "01", title: "5-Axis CNC Machinist", dept: "Production", type: "Full-time", loc: "Sitiawan" },
  { n: "02", title: "Metrology & Quality Engineer", dept: "Quality", type: "Full-time", loc: "Sitiawan" },
  { n: "03", title: "Composite Lay-up Technician", dept: "Composites", type: "Full-time", loc: "Sitiawan" },
  { n: "04", title: "Automation & Robotics Engineer", dept: "Engineering", type: "Full-time", loc: "Sitiawan" },
  { n: "05", title: "Manufacturing Engineer · NPI", dept: "Engineering", type: "Full-time", loc: "Sitiawan" },
  { n: "06", title: "Supply Desk Coordinator", dept: "Operations", type: "Full-time", loc: "Sitiawan" },
];

export const VALUES: { k: string; v: string }[] = [
  { k: "Measured, not guessed", v: "Every call is backed by data and metrology. We don't ship best-effort — we ship to spec." },
  { k: "Own the tolerance", v: "You own your part end to end — from setup and first article to the certified inspection report." },
  { k: "Cross the stack", v: "Train across machining, composites, metrology and automation. Generalists with depth go furthest here." },
  { k: "Certified ground", v: "Work to ISO 9001, AS9100D and NADCAP. The discipline you build here travels to any plant on earth." },
];

// Pre-built mailto for a role application.
export const applyHref = (role: string) =>
  `mailto:careers@geometrix.io?subject=${encodeURIComponent(`Application — ${role}`)}`;
