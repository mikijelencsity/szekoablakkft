// Egyszeri besorolás: a _bejovo képeit a _mapping.json + az alábbi
// index->kategória táblázat alapján a kategória-mappákba mozgatja.
import { readFile, mkdir, rename } from "node:fs/promises";
import path from "node:path";

const SRC = path.resolve("_kepek/_bejovo");
const DST = path.resolve("_kepek");

const CAT = {
  ablak: [2, 3, 4, 5, 6, 11, 12, 14, 15, 17, 22, 26, 27, 28, 30, 31, 36, 38],
  redony: [19, 29],
  festes: [1, 21, 24, 35, 40],
  burkolas: [7, 8, 13, 39],
  felujitas: [9, 10, 16, 18, 20, 23, 25, 32, 33, 34, 37],
};

const mapping = JSON.parse(await readFile(path.join(SRC, "_mapping.json"), "utf8"));

for (const [cat, idxs] of Object.entries(CAT)) {
  await mkdir(path.join(DST, cat), { recursive: true });
  for (const idx of idxs) {
    const file = mapping[idx];
    if (!file) {
      console.warn(`  ⚠ nincs fájl a(z) ${idx} indexhez`);
      continue;
    }
    await rename(path.join(SRC, file), path.join(DST, cat, file));
  }
  console.log(`${cat}: ${idxs.length} kép`);
}
console.log("Kész.");
