import sharp from "sharp";

const src = "C:/Users/chenc/Desktop/images/material-stack-custom.png";
const meta = await sharp(src).metadata();
console.log("source:", `${meta.width}x${meta.height}`, "hasAlpha:", meta.hasAlpha);

const info = await sharp(src).trim({ threshold: 12 }).toBuffer({ resolveWithObject: true });
console.log(
  "trimmed:",
  `${info.info.width}x${info.info.height}`,
  `(offsetTop ${info.info.trimOffsetTop}, offsetLeft ${info.info.trimOffsetLeft})`,
);

await sharp(src)
  .trim({ threshold: 12 })
  .resize({ width: 760, withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile("public/images/material-stack-tight.webp");

const out = await sharp("public/images/material-stack-tight.webp").metadata();
console.log("written material-stack-tight.webp:", `${out.width}x${out.height}`);
