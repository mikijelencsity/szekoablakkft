// Újrarajzolja az OG-kép alsó szövegsávját a public/og-image.jpg-n.
// Futtatás: node scripts/og-image.mjs
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";

const SRC = "public/og-image.jpg";
const W = 1200;
const H = 630;

const TITLE = "Nyílászáró · Redőny · Felújítás";
const SUB = "Ingyenes árajánlat · Baja és Bács-Kiskun megye egész területén";

const overlay = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#000" stop-opacity="0"/>
      <stop offset="0.55" stop-color="#000" stop-opacity="0.85"/>
      <stop offset="1" stop-color="#000" stop-opacity="1"/>
    </linearGradient>
  </defs>
  <rect x="0" y="420" width="${W}" height="90" fill="url(#fade)"/>
  <rect x="0" y="508" width="${W}" height="122" fill="#000"/>
  <text x="64" y="558" fill="#fff" font-family="Arial, Helvetica, sans-serif"
        font-size="48" font-weight="bold">${TITLE}</text>
  <text x="64" y="598" fill="#e8e8e8" font-family="Arial, Helvetica, sans-serif"
        font-size="26">${SUB}</text>
</svg>`;

const out = await sharp(await readFile(SRC))
  .composite([{ input: Buffer.from(overlay), top: 0, left: 0 }])
  .jpeg({ quality: 88 })
  .toBuffer();

await writeFile(SRC, out);
console.log("kész:", SRC, out.length, "bájt");
