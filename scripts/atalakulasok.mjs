// Átalakulás-projektek feldolgozása (előtte/utána galériák).
//   node scripts/atalakulasok.mjs
//
// Beolvassa a _kepek/atalakulasok/<projekt>/{elotte,utana} mappákat,
// optimalizálja a képeket, és legyártja a public/atalakulasok/ könyvtárat
// + a lib/atalakulasok.ts adatfájlt.

import { readdir, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(root, "_kepek", "atalakulasok");
const OUT = path.join(root, "public", "atalakulasok");

const MAX = 1600;
const QUALITY = 78;
const EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".heic", ".heif", ".tif", ".tiff"]);

// Projekt-címek (szerkeszthető — a valódi nevek/helyszínek ide jönnek)
const META = {
  "projekt-1": { title: "Szoba-kamra felújítás", location: "2024" },
  "projekt-2": { title: "Lakásfelújítás", location: "2023" },
  "projekt-3": { title: "Szobafelújítás", location: "2023" },
};

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

async function convertDir(srcDir, outDir, urlBase) {
  const files = await listImages(srcDir);
  await mkdir(outDir, { recursive: true });
  const out = [];
  let i = 1;
  for (const f of files) {
    const name = `${pad(i)}.webp`;
    const info = await sharp(path.join(srcDir, f), { failOn: "none" })
      .rotate()
      .resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(path.join(outDir, name));
    out.push({ src: `${urlBase}/${name}`, w: info.width, h: info.height });
    i++;
  }
  return out;
}

async function main() {
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  let projectSlugs = [];
  try {
    projectSlugs = (await readdir(SRC, { withFileTypes: true }))
      .filter((e) => e.isDirectory() && !e.name.startsWith("_"))
      .map((e) => e.name)
      .sort((a, b) => a.localeCompare(b, "hu"));
  } catch {
    projectSlugs = [];
  }

  const projects = [];
  for (const slug of projectSlugs) {
    const before = await convertDir(
      path.join(SRC, slug, "elotte"),
      path.join(OUT, slug, "elotte"),
      `/atalakulasok/${slug}/elotte`
    );
    const after = await convertDir(
      path.join(SRC, slug, "utana"),
      path.join(OUT, slug, "utana"),
      `/atalakulasok/${slug}/utana`
    );
    if (!before.length && !after.length) continue;
    const meta = META[slug] || { title: slug, location: "" };
    projects.push({ slug, title: meta.title, location: meta.location, before, after });
    console.log(`  ${slug}: ${before.length} előtte, ${after.length} utána`);
  }

  const ts = `// AUTOMATIKUSAN GENERÁLT — ne szerkeszd kézzel.
// Frissítés: node scripts/atalakulasok.mjs
// (A projekt-címeket a scripts/atalakulasok.mjs META blokkjában állítsd.)

export type TrImage = { src: string; w: number; h: number };
export type TrProject = {
  slug: string;
  title: string;
  location: string;
  before: TrImage[];
  after: TrImage[];
};

export const projects: TrProject[] = ${JSON.stringify(projects, null, 2)};
`;
  await mkdir(path.join(root, "lib"), { recursive: true });
  await writeFile(path.join(root, "lib", "atalakulasok.ts"), ts, "utf8");

  console.log(`\n✓ Kész: ${projects.length} projekt. Adatfájl: lib/atalakulasok.ts`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
