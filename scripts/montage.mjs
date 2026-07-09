// Kontaktív (bélyegkép-rács) készítése a besoroláshoz.
//   node scripts/montage.mjs <mappa>
import { readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const dir = path.resolve(process.argv[2] || "_kepek/_bejovo");
const outDir = path.resolve(process.argv[3] || dir);
await mkdir(outDir, { recursive: true });
const CELL_W = 340, CELL_H = 250, COLS = 5, PER_SHEET = 20;
const EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".heic", ".heif", ".tif", ".tiff"]);

const files = (await readdir(dir))
  .filter((f) => EXT.has(path.extname(f).toLowerCase()))
  .sort((a, b) => a.localeCompare(b, "hu"));

const badge = (n) =>
  Buffer.from(
    `<svg width="${CELL_W}" height="${CELL_H}"><rect x="0" y="0" width="46" height="30" rx="4" fill="#2457ff"/><text x="23" y="21" font-family="Arial" font-size="18" font-weight="bold" fill="#fff" text-anchor="middle">${n}</text></svg>`
  );

async function cell(file, idx) {
  const thumb = await sharp(path.join(dir, file), { failOn: "none" })
    .rotate()
    .resize(CELL_W, CELL_H, { fit: "contain", background: "#eef1f5" })
    .toBuffer();
  return sharp(thumb)
    .composite([{ input: badge(idx + 1), top: 0, left: 0 }])
    .toBuffer();
}

const mapping = {};
let sheet = 0;
for (let start = 0; start < files.length; start += PER_SHEET) {
  const chunk = files.slice(start, start + PER_SHEET);
  const cells = await Promise.all(chunk.map((f, i) => cell(f, start + i)));
  const rows = Math.ceil(chunk.length / COLS);
  const composites = cells.map((buf, i) => ({
    input: buf,
    top: Math.floor(i / COLS) * CELL_H,
    left: (i % COLS) * CELL_W,
  }));
  sheet++;
  const outName = `_sheet-${sheet}.jpg`;
  await sharp({
    create: { width: COLS * CELL_W, height: rows * CELL_H, channels: 3, background: "#ffffff" },
  })
    .composite(composites)
    .jpeg({ quality: 80 })
    .toFile(path.join(dir, outName));
  chunk.forEach((f, i) => (mapping[start + i + 1] = f));
  console.log(`${outName}: ${chunk.length} kép (index ${start + 1}–${start + chunk.length})`);
}

await writeFile(path.join(dir, "_mapping.json"), JSON.stringify(mapping, null, 2));
console.log(`\nÖsszesen ${files.length} kép, ${sheet} kontaktív. Mapping: _mapping.json`);
