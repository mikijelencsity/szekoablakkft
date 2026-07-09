import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Szolgáltatások | Szeko Ablak Kft",
  description:
    "Ablakcsere, redőnyök, teljes körű felújítás, festés és padlóburkolás egy megbízható csapattól. Nézze meg részletes szolgáltatásainkat.",
};

const services = [
  {
    n: "01",
    name: "Ablakok",
    desc: "Energiatakarékos műanyag, alumínium és fa-alu ablakok pontos beépítéssel — kevesebb zaj, kevesebb hőveszteség, alacsonyabb rezsi.",
    features: [
      "Műanyag, alumínium és fa-alu profilok",
      "Hő- és hangszigetelt üvegezés",
      "Egyedi méretek, gyártótól",
      "Beépítés 10 év garanciával",
    ],
    image: "/referenciak/ablak/04.webp",
  },
  {
    n: "02",
    name: "Redőnyök",
    desc: "Redőnyök a biztonságért, a fényszabályozásért és a nyári hővédelemért.",
    features: [
      "Motoros és távvezérelt megoldások",
      "Alumínium és műanyag lamellák",
      "Szúnyogháló és árnyékolás",
    ],
    image: "/referenciak/redony/01.webp",
  },
  {
    n: "03",
    name: "Felújítás",
    desc: "Teljes körű lakás- és házfelújítás egy kézből — a tervezéstől a kulcsátadásig, tiszta munkaterülettel és tartható határidőkkel.",
    features: [
      "Teljes lakás- és házfelújítás",
      "Tervezéstől a kivitelezésig",
      "Egy felelős kapcsolattartó",
      "Tiszta munkaterület, fix határidő",
    ],
    image: "/referenciak/felujitas/02.webp",
  },
  {
    n: "04",
    name: "Festés",
    desc: "Tiszta, precíz bel- és kültéri festés — pontos élekkel, alapos felületkezeléssel és prémium anyagokkal, gyors kivitelezéssel.",
    features: [
      "Bel- és kültéri festés",
      "Glettelés, felületkezelés",
      "Precíz élek, alapos takarás",
      "Prémium festékek",
    ],
    image: "/referenciak/festes/01.webp",
  },
  {
    n: "05",
    name: "Padlóburkolás",
    desc: "Hideg és meleg burkolatok szakszerű fektetése — laminált, parketta, csempe és kő, tartós, sík aljzatra.",
    features: [
      "Laminált és parketta",
      "Csempe és kőburkolat",
      "Aljzatkiegyenlítés",
      "Tartós, sík felület",
    ],
    image: "/referenciak/burkolas/01.webp",
  },
];

export default function SzolgaltatasokPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Szolgáltatások"
        title="Amit egy kézből elvégzünk"
        subtitle="Ablaktól a padlóig — egy megbízható csapat, tiszta kivitelezés és garancia minden munkára."
        image="/referenciak/ablak/13.webp"
        crumbs={[
          { label: "Főoldal", href: "/" },
          { label: "Szolgáltatások", href: "/szolgaltatasok" },
        ]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-px flex flex-col gap-20 lg:gap-28">
          {services.map((s, i) => {
            const alt = i % 2 === 1;
            return (
              <Reveal
                key={s.name}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_26px_54px_-28px_rgba(17,23,32,0.4)] ${
                    alt ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 48vw, 100vw"
                  />
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold leading-none text-ink/10">
                    {s.n}
                  </div>
                  <h2 className="mt-3 text-3xl font-medium tracking-tight text-ink lg:text-4xl">
                    {s.name}
                  </h2>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">
                    {s.desc}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2.5">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-ink"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--brand-blue)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span className="text-[15px]">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <PageCTA
        title="Melyik szolgáltatás érdekli?"
        text="Kérjen ingyenes helyszíni felmérést, és pár napon belül tételes árajánlatot adunk."
      />
    </main>
  );
}
