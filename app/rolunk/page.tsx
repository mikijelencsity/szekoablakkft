import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Rólunk | Szeko Ablak Kft",
  description:
    "Több mint 18 éve végezünk ablakcserét, redőny- és felújítási munkákat a régióban. Ismerje meg a csapatot és az értékeinket.",
};

const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

const stats = [
  { value: "2007", label: "Alapítva" },
  { value: "640+", label: "Befejezett projekt" },
  { value: "18+ év", label: "Tapasztalat" },
  { value: "45 km", label: "Vállalási kör" },
];

const values = [
  {
    title: "Megbízhatóság",
    desc: "Amit vállalunk, azt betartjuk — fix árajánlat, tartható határidő, közösen egyeztetett ütemterv.",
  },
  {
    title: "Tiszta kivitelezés",
    desc: "Letakarjuk a padlót, elzárjuk a port, és minden nap rendben hagyjuk a munkaterületet.",
  },
  {
    title: "Közvetlen kommunikáció",
    desc: "Azzal beszél, aki a munkát végzi — nincs ügyfélszolgálati szöveg, nincs félreértés.",
  },
  {
    title: "Garancia",
    desc: "Minden beépítési munkára garanciát vállalunk, az anyagokra pedig gyártói garancia vonatkozik.",
  },
];

export default function RolunkPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Rólunk"
        title="18 éve az otthonok szolgálatában"
        subtitle="Egy összeszokott csapat, amely a felméréstől az utolsó ellenőrzésig végigviszi a munkát."
        image={U("photo-1521791136064-7986c2920216", 2000)}
        crumbs={[
          { label: "Főoldal", href: "/" },
          { label: "Rólunk", href: "/rolunk" },
        ]}
      />

      {/* Story */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-px grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-wider text-brand">
              A történetünk
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-ink lg:text-4xl">
              Kis csapatból megbízható partnerré.
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-lg leading-relaxed text-ink-soft">
              <p>
                A Szeko Ablak Kft. 2007 óta végez ablakcserét, redőny- és
                felújítási munkákat a régió otthonaiban. A kezdetek óta ugyanaz
                a törzscsapat dolgozik együtt — nincs cserélődő alvállalkozó,
                nincs kiszervezett minőség.
              </p>
              <p>
                Több mint 640 befejezett projekt tapasztalatával tudjuk, hogy
                egy jó munka nem a bontással kezdődik, hanem az őszinte
                tanácsadással és a pontos felméréssel. Ezért minden projekt egy
                ingyenes helyszíni felméréssel és egy tételes, átlátható
                árajánlattal indul.
              </p>
              <p>
                A célunk egyszerű: az otthona modernebb, kényelmesebb és
                értékesebb legyen — stressz nélkül, tiszta munkával.
              </p>
            </div>
          </Reveal>

          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_26px_54px_-28px_rgba(17,23,32,0.4)]">
            <Image
              src="/referenciak/ablak/06.webp"
              alt="Szeko Ablak Kft munka"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-tint py-16 lg:py-20">
        <Reveal className="container-px grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-semibold text-ink lg:text-4xl">
                {s.value}
              </div>
              <p className="mt-2 text-sm text-ink-soft">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Values */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-px">
          <Reveal className="mb-12 max-w-2xl lg:mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-brand">
              Az értékeink
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-ink lg:text-4xl">
              Amiért nyugodtan ránk bízhatja az otthonát.
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 0.05}
                className="rounded-2xl border border-black/5 bg-white p-7 shadow-[0_20px_50px_-34px_rgba(17,23,32,0.35)]"
              >
                <h3 className="text-xl font-semibold text-ink">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </main>
  );
}
