// Referenciaképek feldolgozása.
//   node scripts/kepek.mjs
//
// Beolvassa a _kepek/ mappát, minden képet átméretez + .webp-re optimalizál,
// auto-forgat (EXIF), kiszedi a metaadatot (helyadat), és legyártja a
// public/referenciak/ könyvtárat + a lib/referenciak.ts adatfájlt.

import { readdir, mkdir, rm, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(root, "_kepek");
const OUT = path.join(root, "public", "referenciak");

const MAX = 1600; // leghosszabb oldal px
const QUALITY = 78;
const EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff", ".heic", ".heif"]);

// Szolgáltatás-mappák és a megjelenített címük (sorrend = oldalsorrend)
const CATEGORIES = [
  { slug: "ablak", title: "Ablakcsere" },
  { slug: "redony", title: "Redőnyök" },
  { slug: "festes", title: "Festés" },
  { slug: "felujitas", title: "Felújítás" },
  { slug: "burkolas", title: "Burkolás" },
];

const isImage = (f) => EXT.has(path.extname(f).toLowerCase());
const pad = (n) => String(n).padStart(2, "0");

async function listImages(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }
  return entries
    .filter((e) => e.isFile() && isImage(e.name))
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b, "hu"));
}

// Egy képet legyárt: átméretez, webp, forgat, meta ki. Visszaadja {src,w,h}.
async function convert(srcFile, outFile) {
  const img = sharp(srcFile, { failOn: "none" }).rotate();
  const meta = await img.metadata();
  const pipeline = img
    .resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true })
    .webp({ quality: QUALITY });
  const info = await pipeline.toFile(outFile);
  return { w: info.width, h: info.height, orig: meta.format };
}

async function main() {
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  const categories = [];
  let count = 0;

  // 1) Szolgáltatás-mappák
  for (const cat of CATEGORIES) {
    const dir = path.join(SRC, cat.slug);
    const files = await listImages(dir);
    if (!files.length) continue;

    const outDir = path.join(OUT, cat.slug);
    await mkdir(outDir, { recursive: true });

    const images = [];
    let i = 1;
    for (const f of files) {
      const name = `${pad(i)}.webp`;
      const dims = await convert(path.join(dir, f), path.join(outDir, name));
      images.push({ src: `/referenciak/${cat.slug}/${name}`, w: dims.w, h: dims.h });
      console.log(`  ${cat.slug}/${name}  ← ${f} (${dims.orig})`);
      i++;
      count++;
    }
    categories.push({ slug: cat.slug, title: cat.title, images });
  }

  // 2) Előtte / utána párok
  const pairs = [];
  const euRoot = path.join(SRC, "elotte-utana");
  let euDirs = [];
  try {
    euDirs = (await readdir(euRoot, { withFileTypes: true }))
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .sort((a, b) => a.localeCompare(b, "hu"));
  } catch {
    euDirs = [];
  }

  for (const dirName of euDirs) {
    const dir = path.join(euRoot, dirName);
    const files = await listImages(dir);
    const beforeFile = files.find((f) => /el[őo]tte|before/i.test(f));
    const afterFile = files.find((f) => /ut[áa]n|after/i.test(f));
    if (!beforeFile || !afterFile) {
      console.warn(
        `  ⚠ "${dirName}": nem találom az elotte/utana párt (${files.join(", ") || "üres"}) — kihagyva`
      );
      continue;
    }
    const outDir = path.join(OUT, "elotte-utana", dirName);
    await mkdir(outDir, { recursive: true });
    await convert(path.join(dir, beforeFile), path.join(outDir, "elotte.webp"));
    await convert(path.join(dir, afterFile), path.join(outDir, "utana.webp"));
    pairs.push({
      slug: dirName,
      before: `/referenciak/elotte-utana/${dirName}/elotte.webp`,
      after: `/referenciak/elotte-utana/${dirName}/utana.webp`,
    });
    console.log(`  elotte-utana/${dirName}  ← ${beforeFile} + ${afterFile}`);
    count += 2;
  }

  // 3) Adatfájl
  const ts = `// AUTOMATIKUSAN GENERÁLT — ne szerkeszd kézzel.
// Frissítés: node scripts/kepek.mjs

export type RefImage = { src: string; w: number; h: number };
export type RefCategory = { slug: string; title: string; images: RefImage[] };
export type RefPair = { slug: string; before: string; after: string };

export const categories: RefCategory[] = ${JSON.stringify(categories, null, 2)};

export const pairs: RefPair[] = ${JSON.stringify(pairs, null, 2)};
`;
  await mkdir(path.join(root, "lib"), { recursive: true });
  await writeFile(path.join(root, "lib", "referenciak.ts"), ts, "utf8");

  console.log(
    `\n✓ Kész: ${count} kép feldolgozva — ${categories.reduce(
      (n, c) => n + c.images.length,
      0
    )} galéria + ${pairs.length} előtte/utána pár.`
  );
  console.log("  Adatfájl: lib/referenciak.ts");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
