import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

const TITLE = "Adatkezelési tájékoztató";
const DESCRIPTION =
  "Tájékoztató arról, hogyan kezeli a Szeko Ablak Kft az ajánlatkérő űrlapon megadott személyes adatokat.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/adatkezeles" },
  robots: { index: false, follow: true },
};

export default function AdatkezelesPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Jogi információk"
        title="Adatkezelési tájékoztató"
        image="/referenciak/ablak/13.webp"
        crumbs={[
          { label: "Főoldal", href: "/" },
          { label: "Adatkezelés", href: "/adatkezeles" },
        ]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-px mx-auto max-w-2xl">
          <div className="flex flex-col gap-10 leading-relaxed text-ink-soft">
            <p>
              Jelen tájékoztató az Európai Parlament és a Tanács (EU)
              2016/679 rendelete (GDPR), valamint az információs
              önrendelkezési jogról és az információszabadságról szóló
              2011. évi CXII. törvény (Infotv.) alapján készült. Célja,
              hogy átlátható tájékoztatást adjon arról, milyen személyes
              adatokat kezel a Szeko Ablak Kft. (a továbbiakban:
              Adatkezelő) a weboldalán keresztül, és milyen jogok illetik
              meg ezzel kapcsolatban az érintetteket.
            </p>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-ink">
                1. Az adatkezelő adatai
              </h2>
              <p>
                SZEKO-Ablak Kereskedelmi és Szolgáltató Korlátolt
                Felelősségű Társaság
                <br />
                Székhely: 6346 Sükösd, Dózsa György út 285.
                <br />
                Adószám: 22736505-1-03
                <br />
                E-mail:{" "}
                <a
                  href="mailto:szeko2010@gmail.com"
                  className="text-brand hover:text-brand-dark"
                >
                  szeko2010@gmail.com
                </a>
                <br />
                Telefon: +36 20 219 1858
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-ink">
                2. Milyen adatokat kezelünk
              </h2>
              <p>
                A weboldal ajánlatkérő űrlapján az alábbi adatokat kérjük
                el, és az érintett önkéntesen adja meg:
              </p>
              <ul className="mt-3 list-disc pl-5">
                <li>név</li>
                <li>telefonszám</li>
                <li>e-mail cím (ha megadja)</li>
                <li>a kiválasztott szolgáltatás típusa</li>
                <li>az üzenetben megadott egyéb, önkéntesen közölt adatok</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-ink">
                3. Az adatkezelés célja és jogalapja
              </h2>
              <p>
                Az adatkezelés célja az ajánlatkérés fogadása, a
                kapcsolatfelvétel és az árajánlat elkészítése. Az
                adatkezelés jogalapja az érintett önkéntes hozzájárulása
                (GDPR 6. cikk (1) bekezdés a) pont), amelyet az űrlap
                elküldésével, a hozzájárulási jelölőnégyzet
                bejelölésével ad meg.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-ink">
                4. Az adatkezelés időtartama
              </h2>
              <p>
                A megadott adatokat az ajánlatkérés, illetve az abból
                esetlegesen létrejövő megbízás teljesítéséhez szükséges
                ideig, de legfeljebb az adatközléstől számított 2 évig
                kezeljük, kivéve, ha jogszabály (pl. számviteli,
                adózási előírás) ennél hosszabb megőrzési kötelezettséget
                ír elő a létrejött szerződéssel kapcsolatos iratokra.
                Az érintett a hozzájárulását bármikor visszavonhatja,
                ez esetben az adatokat töröljük, amennyiben azok
                megőrzését jogszabály nem írja elő.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-ink">
                5. Kik férnek hozzá az adatokhoz (adatfeldolgozók)
              </h2>
              <p>
                Az ajánlatkérő űrlapon megadott adatokat a Szeko Ablak
                Kft. munkatársai ismerhetik meg, kizárólag az ajánlatadás
                céljából. Az űrlap elküldött adatait e-mailben a Resend
                (Resend, Inc., Egyesült Államok) nevű technikai
                szolgáltató továbbítja hozzánk — ő a GDPR szerinti
                adatfeldolgozónak minősül, az adatokat önálló célra nem
                használja fel. Harmadik országba (USA) történő
                adattovábbítás esetén a szolgáltató a vonatkozó uniós
                adatvédelmi garanciák (pl. megfelelő szerződéses
                garanciák) szerint jár el.
              </p>
              <p className="mt-3">
                Az adatokat egyéb harmadik félnek nem adjuk át, és nem
                értékesítjük.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-ink">
                6. Az érintett jogai
              </h2>
              <p>Az érintett a GDPR alapján jogosult:</p>
              <ul className="mt-3 list-disc pl-5">
                <li>tájékoztatást kérni a kezelt adatairól,</li>
                <li>kérni az adatai helyesbítését,</li>
                <li>kérni az adatai törlését,</li>
                <li>kérni az adatkezelés korlátozását,</li>
                <li>tiltakozni az adatkezelés ellen,</li>
                <li>
                  adathordozhatóságot kérni, azaz az adatait tagolt,
                  géppel olvasható formátumban megkapni.
                </li>
              </ul>
              <p className="mt-3">
                Ezeket a jogokat a fenti elérhetőségeinken
                (
                <a
                  href="mailto:szeko2010@gmail.com"
                  className="text-brand hover:text-brand-dark"
                >
                  szeko2010@gmail.com
                </a>
                ) gyakorolhatja.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-ink">
                7. Jogorvoslati lehetőségek
              </h2>
              <p>
                Amennyiben úgy ítéli meg, hogy adatai kezelése
                jogsértő, panasszal fordulhat a Nemzeti Adatvédelmi és
                Információszabadság Hatósághoz (NAIH):
              </p>
              <p className="mt-3">
                Cím: 1055 Budapest, Falk Miksa utca 9–11.
                <br />
                Postacím: 1363 Budapest, Pf. 9.
                <br />
                E-mail: ugyfelszolgalat@naih.hu
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
              <p className="mt-3">
                Emellett jogorvoslatért a lakóhelye vagy tartózkodási
                helye szerint illetékes törvényszékhez is fordulhat.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-ink">
                8. Sütik (cookie-k)
              </h2>
              <p>
                A weboldal jelenleg nem használ statisztikai vagy
                marketing célú sütiket. Amennyiben a jövőben ilyen
                eszközök (pl. látogatottság-mérés) bevezetésre kerülnek,
                ezt a tájékoztatót frissítjük, és — ahol jogszabály
                előírja — előzetes hozzájárulást kérünk.
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
