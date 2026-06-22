// Rasterize the brand mark (app/icon.svg) into the raster icons browsers still
// need: a full-bleed apple-icon.png (iOS masks its own corners, so no rounding
// here) and a multi-size favicon.ico (16/32/48, PNG-encoded). The SVG itself
// (app/icon.svg) is the primary icon for every modern browser.
import sharp from "sharp";
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP = path.join(ROOT, "app");
mkdirSync(APP, { recursive: true });

const SILVER = `<linearGradient id="silver" gradientUnits="userSpaceOnUse" x1="16" y1="14" x2="48" y2="50">
  <stop offset="0" stop-color="#fdfdfc"/><stop offset=".3" stop-color="#e4e2dd"/>
  <stop offset=".56" stop-color="#b6b4ae"/><stop offset=".76" stop-color="#8c8a84"/>
  <stop offset="1" stop-color="#d2d0ca"/></linearGradient>`;

const MARK = `<g fill="none" stroke="url(#silver)" stroke-width="7.5" stroke-linecap="butt">
    <path d="M47.34 21.66 A18.5 18.5 0 1 0 47.34 42.34"/>
    <path d="M50.5 32 L34 32"/>
  </g>
  <rect x="30" y="28.25" width="7.5" height="7.5" rx="1" fill="url(#silver)"/>`;

// rounded tile (matches app/icon.svg) — used for the .ico
const tileSvg = (round) => `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <defs><linearGradient id="tile" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#1b1b1f"/><stop offset="1" stop-color="#0a0a0b"/></linearGradient>${SILVER}</defs>
  <rect x="0" y="0" width="64" height="64" rx="${round}" fill="url(#tile)"/>
  ${round ? `<rect x="0.75" y="0.75" width="62.5" height="62.5" rx="${round - 0.75}" fill="none" stroke="#ffffff" stroke-opacity="0.06" stroke-width="1.5"/>` : ""}
  ${MARK}
</svg>`;

// PNG-based ICO container (Vista+). header + per-image dir entries + PNG blobs.
function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);
  const entries = Buffer.alloc(16 * images.length);
  let offset = 6 + entries.length;
  const blobs = [];
  images.forEach((img, i) => {
    const e = i * 16;
    entries.writeUInt8(img.size >= 256 ? 0 : img.size, e + 0); // width (0 = 256)
    entries.writeUInt8(img.size >= 256 ? 0 : img.size, e + 1); // height
    entries.writeUInt8(0, e + 2); // palette
    entries.writeUInt8(0, e + 3); // reserved
    entries.writeUInt16LE(1, e + 4); // color planes
    entries.writeUInt16LE(32, e + 6); // bits per pixel
    entries.writeUInt32LE(img.png.length, e + 8); // bytes in resource
    entries.writeUInt32LE(offset, e + 12); // offset
    offset += img.png.length;
    blobs.push(img.png);
  });
  return Buffer.concat([header, entries, ...blobs]);
}

// 1) favicon.ico — rounded tile, transparent corners, 16/32/48
const sizes = [16, 32, 48];
const imgs = [];
for (const s of sizes) {
  const png = await sharp(Buffer.from(tileSvg(14)), { density: 600 })
    .resize(s, s).png().toBuffer();
  imgs.push({ size: s, png });
}
writeFileSync(path.join(APP, "favicon.ico"), buildIco(imgs));
console.log(`favicon.ico: ${sizes.join("/")} px`);

// 2) apple-icon.png — full-bleed (no rounding), flattened, 180x180
const apple = await sharp(Buffer.from(tileSvg(0)), { density: 600 })
  .resize(180, 180).flatten({ background: "#0a0a0b" }).png().toBuffer();
writeFileSync(path.join(APP, "apple-icon.png"), apple);
console.log(`apple-icon.png: 180x180 (${(apple.length / 1024).toFixed(1)}KB)`);
