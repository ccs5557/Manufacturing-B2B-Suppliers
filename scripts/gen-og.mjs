// Build the 1200x630 Open Graph / Twitter card:
//   gpt-image-2 (medium) paints a metallic background → resvg overlays crisp
//   Archivo text (the brand wordmark + tagline + certs). The background is
//   cached in .tmp-icons/og-bg.png so re-running to tweak the layout costs no
//   API calls — delete that file to regenerate the art.
//
// Key: read from env, else parsed from ../ai-product-studio/.env.local at
// runtime only — never written into any geometrix file or commit.
import sharp from "sharp";
import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CACHE = path.join(ROOT, ".tmp-icons");
mkdirSync(CACHE, { recursive: true });
const BG = path.join(CACHE, "og-bg.png");

function apiKey() {
  if (process.env.OPENAI_API_KEY) return process.env.OPENAI_API_KEY;
  try {
    const env = readFileSync(path.join(ROOT, "..", "ai-product-studio", ".env.local"), "utf8");
    const m = env.match(/^OPENAI_API_KEY\s*=\s*(.+)$/m);
    if (m) return m[1].trim().replace(/^["']|["']$/g, "");
  } catch {}
  return null;
}

async function ensureBackground() {
  if (existsSync(BG)) {
    console.log("bg: using cached .tmp-icons/og-bg.png");
    return;
  }
  const KEY = apiKey();
  if (!KEY) {
    console.error("OPENAI_API_KEY not set and no cached bg — aborting.");
    process.exit(1);
  }
  const prompt =
    "Abstract premium industrial background for a precision-manufacturing brand. " +
    "Extreme macro of a brushed titanium and machined steel surface with crisp precise " +
    "edges and a thin cool rim light raking from the right. Deep near-black charcoal " +
    "(#08080a); the left two-thirds fall into deep shadow with lots of empty dark negative " +
    "space, dramatic light and metallic detail concentrated on the right edge. Cinematic, " +
    "high-end engineering catalog aesthetic, monochromatic cool steel tones with one faint " +
    "warm metallic glint. Absolutely no text, no numbers, no logos, no people, no hands.";
  console.log("bg: calling gpt-image-2 (medium)…");
  const r = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${KEY}` },
    body: JSON.stringify({ model: "gpt-image-2", prompt, size: "1536x1024", quality: "medium", n: 1 }),
  });
  if (!r.ok) {
    console.error(`gpt-image-2 HTTP ${r.status}: ${(await r.text()).slice(0, 240)}`);
    process.exit(1);
  }
  const b64 = (await r.json()).data?.[0]?.b64_json;
  if (!b64) { console.error("no image in response"); process.exit(1); }
  // cover-crop to the OG ratio and bake the cache
  const png = await sharp(Buffer.from(b64, "base64"))
    .resize(1200, 630, { fit: "cover", position: "right" })
    .png().toBuffer();
  writeFileSync(BG, png);
  console.log(`bg: cached (${(png.length / 1024).toFixed(0)}KB)`);
}

const W = 1200, H = 630, PAD = 84;
const SILVER = `
  <linearGradient id="silver" gradientUnits="userSpaceOnUse" x1="${PAD}" y1="170" x2="${PAD + 560}" y2="300">
    <stop offset="0" stop-color="#fdfdfc"/><stop offset=".3" stop-color="#e4e2dd"/>
    <stop offset=".56" stop-color="#b6b4ae"/><stop offset=".76" stop-color="#8c8a84"/>
    <stop offset="1" stop-color="#d2d0ca"/>
  </linearGradient>`;

// the G mark (glyph only — no tile), reused from app/icon.svg geometry
function gMark(x, y, scale) {
  return `<g transform="translate(${x},${y}) scale(${scale})">
    <defs><linearGradient id="markSilver" gradientUnits="userSpaceOnUse" x1="16" y1="14" x2="48" y2="50">
      <stop offset="0" stop-color="#fdfdfc"/><stop offset=".3" stop-color="#e4e2dd"/>
      <stop offset=".56" stop-color="#b6b4ae"/><stop offset=".76" stop-color="#8c8a84"/>
      <stop offset="1" stop-color="#d2d0ca"/></linearGradient></defs>
    <g fill="none" stroke="url(#markSilver)" stroke-width="7.5">
      <path d="M47.34 21.66 A18.5 18.5 0 1 0 47.34 42.34"/>
      <path d="M50.5 32 L34 32"/>
    </g>
    <rect x="30" y="28.25" width="7.5" height="7.5" rx="1" fill="url(#markSilver)"/>
  </g>`;
}

async function compose() {
  const bgB64 = readFileSync(BG).toString("base64");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <defs>
      ${SILVER}
      <linearGradient id="scrim" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#08080a" stop-opacity="0.97"/>
        <stop offset="0.5" stop-color="#08080a" stop-opacity="0.82"/>
        <stop offset="0.78" stop-color="#08080a" stop-opacity="0.45"/>
        <stop offset="1" stop-color="#08080a" stop-opacity="0.28"/>
      </linearGradient>
      <linearGradient id="vgnt" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#08080a" stop-opacity="0.35"/>
        <stop offset="0.4" stop-color="#08080a" stop-opacity="0"/>
        <stop offset="1" stop-color="#08080a" stop-opacity="0.55"/>
      </linearGradient>
    </defs>

    <image href="data:image/png;base64,${bgB64}" x="0" y="0" width="${W}" height="${H}" preserveAspectRatio="xMidYMid slice"/>
    <rect width="${W}" height="${H}" fill="url(#scrim)"/>
    <rect width="${W}" height="${H}" fill="url(#vgnt)"/>

    ${gMark(PAD, 92, 1.0)}

    <text x="${PAD}" y="178" font-family="Archivo" font-weight="700" font-size="21"
          letter-spacing="6" fill="#c9a57a">PRECISION MANUFACTURING</text>

    <text x="${PAD - 4}" y="288" font-family="Archivo" font-weight="800" font-size="104"
          letter-spacing="1.5" fill="url(#silver)">GEOMETRIX</text>

    <text x="${PAD}" y="346" font-family="Archivo" font-weight="700" font-size="33"
          fill="#e8e6e1">Engineered Components &amp; High-Performance Materials</text>

    <rect x="${PAD}" y="402" width="430" height="1.5" fill="#3a3a40"/>

    <text x="${PAD}" y="452" font-family="Archivo" font-weight="700" font-size="20"
          letter-spacing="3" fill="#9a9a98">ISO 9001  ·  AS9100D  ·  NADCAP</text>
    <text x="${PAD}" y="486" font-family="Archivo" font-weight="500" font-size="20"
          letter-spacing="2" fill="#5e5e60">SITIAWAN · PERAK · MALAYSIA</text>

    <text x="${W - PAD}" y="${H - 40}" text-anchor="end" font-family="Archivo" font-weight="700"
          font-size="22" letter-spacing="2" fill="#9a9a98">geometrix.io</text>
  </svg>`;

  const resvg = new Resvg(svg, {
    background: "#08080a",
    font: {
      fontFiles: ["scripts/fonts/Archivo-800.ttf", "scripts/fonts/Archivo-700.ttf"],
      loadSystemFonts: false,
      defaultFontFamily: "Archivo",
    },
  });
  const png = resvg.render().asPng();
  // Encode to JPG — a ~40KB photographic card loads everywhere (incl. WhatsApp,
  // which silently drops large OG images); PNG of this came out ~600KB.
  const jpg = await sharp(png).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  writeFileSync(path.join(ROOT, "app", "opengraph-image.jpg"), jpg);
  writeFileSync(path.join(ROOT, "app", "twitter-image.jpg"), jpg);
  console.log(`og: wrote app/opengraph-image.jpg + app/twitter-image.jpg (${(jpg.length / 1024).toFixed(0)}KB)`);
}

await ensureBackground();
await compose();
