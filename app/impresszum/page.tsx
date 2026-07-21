import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

const TITLE = "Impresszum";
const DESCRIPTION =
  "A Szeko Ablak Kft weboldal üzemeltetőjének jogszabály szerinti adatai.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/impresszum" },
  robots: { index: false, follow: true },
};

export default function ImpresszumPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Jogi információk"
        title="Impresszum"
        image="/referenciak/ablak/13.webp"
        crumbs={[
          { label: "Főoldal", href: "/" },
          { label: "Impresszum", href: "/impresszum" },
        ]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-px mx-auto max-w-2xl">
          <div className="flex flex-col gap-10 leading-relaxed text-ink-soft">
            <div>
              <h2 className="mb-3 text-xl font-semibold text-ink">
                Szolgáltató adatai
              </h2>
              <p>
                Cégnév: SZEKO-Ablak Kereskedelmi és Szolgáltató Korlátolt
                Felelősségű Társaság (rövidített név: SZEKO-Ablak Kft.)
                <br />
                Székhely: 6346 Sükösd, Dózsa György út 285.
                <br />
                Cégjegyzékszám: 03-09-120425
                <br />
                Nyilvántartó bíróság: Kecskeméti Törvényszék Cégbírósága
                <br />
                Adószám: 22736505-1-03
                <br />
                Alapítás éve: 2010
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-ink">
                Elérhetőségek
              </h2>
              <p>
                Telefon: +36 20 219 1858, +36 20 219 4514
                <br />
                E-mail:{" "}
                <a
                  href="mailto:szeko2010@gmail.com"
                  className="text-brand hover:text-brand-dark"
                >
                  szeko2010@gmail.com
                </a>
                <br />
                Ügyfélfogadás: H–P 8:00–17:00
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-ink">
                Tárhelyszolgáltató
              </h2>
              <p>
                Vercel Inc.
                <br />
                340 S Lemon Ave #4133, Walnut, CA 91789, Egyesült Államok
                <br />
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:text-brand-dark"
                >
                  vercel.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-ink">
                A weboldal tartalmáról
              </h2>
              <p>
                A weboldalon található információk kizárólag tájékoztató
                jellegűek, nem minősülnek szerződéses ajánlattételnek. A
                Szeko Ablak Kft. az oldal tartalmának pontosságára törekszik,
                de nem vállal felelősséget az esetleges elírásokért vagy az
                időközben megváltozott adatokért. A weboldalon szereplő
                fényképek saját, elkészült munkákat ábrázolnak.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-ink">
                Szerzői jogok
              </h2>
              <p>
                A weboldal tartalma (szövegek, fényképek, grafikai elemek,
                logó) szerzői jogi védelem alatt áll. Ezek másolása,
                terjesztése vagy felhasználása kizárólag a Szeko Ablak Kft.
                előzetes írásbeli engedélyével lehetséges.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-ink">
                Panaszkezelés, jogorvoslat
              </h2>
              <p>
                Panaszával elsődlegesen a fenti elérhetőségeinken
                kereshet minket. Amennyiben panaszát nem sikerül
                rendezni, az alábbi hatóságokhoz fordulhat:
              </p>
              <p className="mt-3">
                Bács-Kiskun Vármegyei Kormányhivatal Fogyasztóvédelmi
                Hatósága
                <br />
                Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)
                <br />
                1055 Budapest, Falk Miksa utca 9–11.
                <br />
                <a
                  href="https://naih.hu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:text-brand-dark"
                >
                  naih.hu
                </a>
              </p>
            </div>

            <p className="text-sm text-ink-soft/70">
              Utolsó frissítés: 2026. július.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
