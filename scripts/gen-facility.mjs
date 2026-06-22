// One-off: generate the About-page facility shot with gpt-image-2 (medium) →
// webp. Elevated 3/4 aerial at dusk, brand-matched (near-black + steel + warm
// glints), tropical context for Sitiawan/Perak. Key read at runtime from env
// or ../ai-product-studio/.env.local — never written into any geometrix file.
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
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

const prompt =
  "Cinematic elevated aerial drone photograph, three-quarter bird's-eye angle " +
  "(NOT straight top-down), of a modern precision-manufacturing facility and " +
  "advanced engineering campus at dusk. Sleek dark low-rise industrial buildings " +
  "with clean rectilinear architecture and metal-clad roofs, warm interior light " +
  "spilling from windows and loading bays, organised yards, access roads and a few " +
  "parked trucks. Surrounded by lush tropical greenery and palm trees suggesting " +
  "Malaysia (Sitiawan, Perak). Deep near-black blue-hour sky, cool steel tones with " +
  "warm amber light accents, dramatic moody low-key lighting, subtle ground mist, " +
  "ultra-detailed high-end architectural and industrial photography. " +
  "Absolutely no text, no numbers, no logos, no watermarks, no people.";

const out = path.join(ROOT, "public", "images", "facility-aerial.webp");

for (let attempt = 1; attempt <= 3; attempt++) {
  try {
    console.log(`gpt-image-2 (medium) attempt ${attempt}…`);
    const r = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${KEY}` },
      body: JSON.stringify({ model: "gpt-image-2", prompt, size: "1536x1024", quality: "medium", n: 1 }),
    });
    if (!r.ok) {
      const txt = await r.text();
      if ((r.status === 429 || r.status >= 500) && attempt < 3) { await new Promise((s) => setTimeout(s, 2000 * attempt)); continue; }
      throw new Error(`HTTP ${r.status}: ${txt.slice(0, 220)}`);
    }
    const b64 = (await r.json()).data?.[0]?.b64_json;
    if (!b64) throw new Error("no image in response");
    const info = await sharp(Buffer.from(b64, "base64"))
      .resize({ width: 1400, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(out);
    console.log(`OK  public/images/facility-aerial.webp  ${(info.size / 1024).toFixed(0)}KB  ${info.width}x${info.height}`);
    break;
  } catch (e) {
    if (attempt === 3) { console.error(`FAIL: ${e.message}`); process.exit(1); }
    await new Promise((s) => setTimeout(s, 1500 * attempt));
  }
}
