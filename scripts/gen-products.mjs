// Generate brand-matching product photos with gpt-image-2, then encode to webp.
// Usage: OPENAI_API_KEY=... node scripts/gen-products.mjs
// (the key lives in ai-product-studio/.env.local — never commit it here)
import sharp from "sharp";
import path from "node:path";
import { mkdir } from "node:fs/promises";

const KEY = process.env.OPENAI_API_KEY;
if (!KEY) {
  console.error("OPENAI_API_KEY not set — aborting.");
  process.exit(1);
}

const OUT = path.resolve(process.cwd(), "public/images");
await mkdir(OUT, { recursive: true });

// Shared house style so the six shots read as one catalog and match the site.
const STYLE =
  "Premium industrial product photography of a single hero subject, centered, " +
  "dramatic low-key studio lighting from one side, deep near-black charcoal background (#0a0a0b), " +
  "a thin cool rim light revealing brushed-metal surface texture and crisp machined edges, " +
  "shallow depth of field, ultra-sharp macro detail, cinematic high-end engineering-catalog aesthetic, " +
  "monochromatic cool steel tones with one faint warm metallic highlight. " +
  "Absolutely no text, no numbers, no logos, no watermarks, no people, no hands.";

const PRODUCTS = [
  { name: "prod-valve", subject: "A precision CNC-machined 316L stainless steel industrial valve body with titanium-grey accents, several threaded ports, a polished circular flange and intricate internal milled passages, resting on a dark reflective surface." },
  { name: "prod-cylinder", subject: "A heavy-duty hydraulic cylinder with a fully extended mirror-polished chrome piston rod, a hard-anodized matte-black aluminium barrel and precisely machined end caps." },
  { name: "prod-carbon", subject: "An aerospace-grade carbon-fibre composite structural component with a glossy 2x2 twill weave pattern, a sculptural aerodynamic curved form, its edges catching a thin highlight." },
  { name: "prod-material", subject: "A floating exploded stack of five distinct engineered material sample plates separated by small gaps — brushed steel, woven titanium mesh, carbon-fibre weave, perforated aluminium and a white polymer plate." },
  { name: "prod-machined", subject: "A single complex 5-axis CNC-machined aluminium aerospace bracket with intricate pockets, thin structural ribs, chamfered edges and precision bolt holes, lightly anodized." },
  { name: "prod-surface", subject: "A small group of PVD surface-treated precision metal components with an iridescent titanium-nitride sheen shifting between steel-blue and bronze, a jewel-like polished finish, arranged on a dark surface." },

  // Capabilities — process / facility themed (same house style)
  { name: "cap-robotic", subject: "A modern six-axis industrial robotic arm fitted with a precision gripper holding a freshly machined metal part inside an automated manufacturing cell, dramatic spotlight." },
  { name: "cap-cnc", subject: "An extreme close-up of a 5-axis CNC milling spindle cutting a gleaming aluminium component, fine curled metal chips and a thin mist of coolant catching the light." },
  { name: "cap-assembly", subject: "Precision machined metal components being aligned and assembled together in a dark anodised fixture on a clean workbench, focused task lighting." },
  { name: "cap-metrology", subject: "A coordinate-measuring-machine touch probe inspecting a precision machined metal part on a black granite surface plate, dramatic lighting, ultra-precise." },
  { name: "cap-composite", subject: "Layers of glossy 2x2 twill carbon-fibre fabric being laid into a dark mould during composite lay-up, the weave catching a thin highlight, vacuum film at the edges." },
  { name: "cap-finishing", subject: "A neat row of freshly PVD-coated and mirror-polished metal components with an iridescent titanium sheen emerging from a dark coating chamber lit by a subtle cool glow." },
];

async function gen(p) {
  const body = { model: "gpt-image-2", prompt: `${p.subject} ${STYLE}`, size: "1536x1024", quality: "high", n: 1 };
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const r = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${KEY}` },
        body: JSON.stringify(body),
      });
      if (!r.ok) {
        const txt = await r.text();
        if ((r.status === 429 || r.status >= 500) && attempt < 3) {
          await new Promise((s) => setTimeout(s, 2000 * attempt));
          continue;
        }
        throw new Error(`HTTP ${r.status}: ${txt.slice(0, 220)}`);
      }
      const json = await r.json();
      const b64 = json.data?.[0]?.b64_json;
      if (!b64) throw new Error("no b64_json in response");
      const buf = Buffer.from(b64, "base64");
      const info = await sharp(buf)
        .resize({ width: 1400, withoutEnlargement: true })
        .webp({ quality: 82, effort: 5 })
        .toFile(path.join(OUT, `${p.name}.webp`));
      console.log(`OK   ${p.name}.webp  ${(info.size / 1024).toFixed(0)}KB  ${info.width}x${info.height}`);
      return true;
    } catch (e) {
      if (attempt === 3) {
        console.error(`FAIL ${p.name}: ${e.message}`);
        return false;
      }
      await new Promise((s) => setTimeout(s, 1500 * attempt));
    }
  }
}

// Optional CLI filter: `node gen-products.mjs prod-surface prod-material`
const filter = process.argv.slice(2);
const list = filter.length ? PRODUCTS.filter((p) => filter.includes(p.name)) : PRODUCTS;

// Sequential — gentler on the image endpoint (parallel bursts can trip 520s).
let ok = 0;
for (const p of list) {
  if (await gen(p)) ok++;
}
console.log(`\nDone: ${ok}/${list.length} product images written to public/images`);
