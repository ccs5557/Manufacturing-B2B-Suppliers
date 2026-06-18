import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

// Source PNGs live outside the repo. Override with SRC_IMAGES, else default to
// a sibling `images/` two levels up (the original design-asset folder).
const SRC = process.env.SRC_IMAGES || path.resolve(process.cwd(), "../../images");
const OUT = path.resolve(process.cwd(), "public/images");

// Source PNG -> semantic webp name + max width (height auto). Quality 80.
const MAP = [
  ["hero-gear-custom.png", "hero-gear.webp", 2000],
  ["mobile-hero-custom.png", "mobile-hero.webp", 900],
  ["generated-1781508161397.png", "valve.webp", 1200],
  ["generated-1781508162779.png", "cylinder.webp", 800],
  ["generated-1781508163240.png", "fiber.webp", 1400],
  ["generated-1781511495847.png", "tile-robotic.webp", 900],
  ["generated-1781511498334.png", "tile-assembly.webp", 900],
  ["generated-1781511497945.png", "tile-machined.webp", 900],
  ["generated-1781508213000.png", "steel-flow.webp", 1200],
  ["generated-1781508213263.png", "structure-atomic.webp", 1200],
  ["material-stack-custom.png", "material-stack.webp", 1200],
  ["generated-1781508713055.png", "form-plate.webp", 1000],
  // mobile-only capability cards
  ["01.png", "cap-components.webp", 820],
  ["2.png", "cap-materials.webp", 820],
  ["3.png", "cap-precision.webp", 820],
];

await mkdir(OUT, { recursive: true });

let ok = 0;
for (const [src, dst, maxW] of MAP) {
  const srcPath = path.join(SRC, src);
  if (!existsSync(srcPath)) {
    console.log(`MISS  ${src}`);
    continue;
  }
  const outPath = path.join(OUT, dst);
  const info = await sharp(srcPath)
    .resize({ width: maxW, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(outPath);
  console.log(`OK    ${dst.padEnd(24)} ${(info.size / 1024).toFixed(0)}KB  ${info.width}x${info.height}`);
  ok++;
}
console.log(`\nDone: ${ok}/${MAP.length} images written to public/images`);
