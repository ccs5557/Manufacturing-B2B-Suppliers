// Fresh capability hero images for the Capabilities v2 page — gpt-image-2
// (medium) → webp as cap2-*.webp. Framed as dramatic single-machine "hero
// portraits" so they read distinct from the small cap-* process tiles reused
// on the About production line. Key read at runtime from env or
// ../ai-product-studio/.env.local — never written into any geometrix file.
import sharp from "sharp";
import { readFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
function apiKey() {
  if (process.env.OPENAI_API_KEY) return process.env.OPENAI_API_KEY;
  try {
    const env = readFileSync(path.join(ROOT, "..", "ai-product-studio", ".env.local"), "utf8");
    const m = env.match(/^OPENAI_API_KEY\s*=\s*(.+)$/m);
    if (m) return m[1].trim().replace(/^["']|["']$/g, "");
  } catch {}
  return null;
}
const KEY = apiKey();
if (!KEY) { console.error("OPENAI_API_KEY not found — aborting."); process.exit(1); }

const STYLE =
  "Premium industrial process photography, single dramatic hero subject, " +
  "low-key studio lighting from one side, deep near-black charcoal background (#0a0a0b), " +
  "a thin cool rim light revealing brushed-metal and machine detail, shallow depth of field, " +
  "ultra-sharp, cinematic high-end engineering aesthetic, monochromatic cool steel tones with " +
  "one faint warm metallic glint. Absolutely no text, no numbers, no logos, no watermarks, no people, no hands.";

const ITEMS = [
  { name: "cap2-robotic", subject: "A single articulated six-axis industrial robot arm with a precision gripper holding a freshly machined metal part, captured as a dramatic hero portrait inside a dark automated cell, cool light raking along its joints." },
  { name: "cap2-cnc", subject: "An extreme close-up hero shot of a 5-axis CNC machining center mid-cut on a gleaming aluminium component, a spray of fine curled metal chips and a thin coolant mist catching cool light." },
  { name: "cap2-assembly", subject: "Precision machined metal components being aligned into a dark anodised assembly fixture by an automated arm on an immaculate workbench under a single beam of focused task light." },
  { name: "cap2-metrology", subject: "A coordinate-measuring-machine touch probe descending onto a precision machined metal part on a black granite surface plate, a single shaft of cool light, ultra-precise hero shot." },
  { name: "cap2-composite", subject: "A hero macro of glossy 2x2 twill carbon-fibre fabric being laid into a dark composite mould, translucent vacuum film at the edges, a thin highlight raking across the weave." },
  { name: "cap2-finishing", subject: "A neat row of freshly PVD-coated mirror-polished precision metal parts with an iridescent titanium-nitride sheen, emerging from a dark coating chamber lit by a subtle cool glow." },
];

const OUT = path.join(ROOT, "public", "images");

async function gen(it) {
  const body = { model: "gpt-image-2", prompt: `${it.subject} ${STYLE}`, size: "1536x1024", quality: "medium", n: 1 };
  for (let a = 1; a <= 3; a++) {
    try {
      const r = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${KEY}` },
        body: JSON.stringify(body),
      });
      if (!r.ok) {
        const txt = await r.text();
        if ((r.status === 429 || r.status >= 500) && a < 3) { await new Promise((s) => setTimeout(s, 2000 * a)); continue; }
        throw new Error(`HTTP ${r.status}: ${txt.slice(0, 200)}`);
      }
      const b64 = (await r.json()).data?.[0]?.b64_json;
      if (!b64) throw new Error("no image");
      const info = await sharp(Buffer.from(b64, "base64"))
        .resize({ width: 1400, withoutEnlargement: true })
        .webp({ quality: 82, effort: 5 })
        .toFile(path.join(OUT, `${it.name}.webp`));
      console.log(`OK  ${it.name}.webp  ${(info.size / 1024).toFixed(0)}KB`);
      return true;
    } catch (e) {
      if (a === 3) { console.error(`FAIL ${it.name}: ${e.message}`); return false; }
      await new Promise((s) => setTimeout(s, 1500 * a));
    }
  }
}

const filter = process.argv.slice(2);
const list = filter.length ? ITEMS.filter((i) => filter.includes(i.name)) : ITEMS;
let ok = 0;
for (const it of list) { if (await gen(it)) ok++; }
console.log(`\nDone: ${ok}/${list.length} capability images → public/images`);
