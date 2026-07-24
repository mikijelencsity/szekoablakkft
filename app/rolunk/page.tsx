import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import PageCTA from "@/components/PageCTA";

const TITLE = "Rólunk";
const DESCRIPTION =
  "Több mint 16 éve végezünk ablakcserét, redőny- és felújítási munkákat a régióban. Ismerje meg a csapatot és az értékeinket.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/rolunk" },
  openGraph: { title: `${TITLE} | Szeko Ablak Kft`, description: DESCRIPTION, url: "/rolunk" },
  twitter: { title: `${TITLE} | Szeko Ablak Kft`, description: DESCRIPTION },
};

const stats = [
  { value: "2010", label: "Alapítva" },
  { value: "1-2 nap", label: "Válasz az árajánlatra" },
  { value: "16+ év", label: "Tapasztalat" },
  { value: "5 év", label: "Termékgarancia" },
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
    desc: "Az ablakokra és ajtókra 5 év termékgarancia, a beépítésre 1 év garancia vonatkozik.",
  },
];

export default function RolunkPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Rólunk"
        title="16 éve az otthonok szolgálatában"
        subtitle="Egy összeszokott csapat, amely a felméréstől az utolsó ellenőrzésig végigviszi a munkát."
        image="/referenciak/felujitas/felujitas-02.webp"
        crumbs={[
          { label: "Főoldal", href: "/" },
          { label: "Rólunk", href: "/rolunk" },
        ]}
      />

      {/* Story */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-px grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col justify-center">
            <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-brand">
              <span className="h-px w-8 bg-brand" />
              A történetünk
            </p>
            <h2 className="mt-5 text-3xl font-medium leading-tight tracking-tight text-ink lg:text-4xl">
              Kis csapatból megbízható partnerré.
            </h2>
            <div className="mt-6 flex flex-col gap-4 leading-relaxed text-ink-soft">
              <p>
                A Szeko Ablak Kft. 2010 óta végez ablakcserét, redőny- és
                felújítási munkákat a régió otthonaiban. A kezdetek óta ugyanaz
                a törzscsapat dolgozik együtt — nincs cserélődő alvállalkozó,
                nincs kiszervezett minőség.
              </p>
              <p>
                Több mint 16 év tapasztalatával tudjuk, hogy egy jó munka nem a
                bontással kezdődik, hanem az őszinte tanácsadással és a pontos
                felméréssel.
              </p>
            </div>

            <ul className="mt-8 flex flex-col gap-3 border-t border-black/10 pt-6">
              {[
                "Ugyanaz a törzscsapat 2010 óta",
                "Ingyenes árajánlat, ingyenes szaktanácsadás",
                "Tételes, átlátható árajánlat — rejtett költségek nélkül",
              ].map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-ink">
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
                  <span className="text-[15px] font-medium">{pt}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="relative min-h-[360px] overflow-hidden rounded-2xl shadow-[0_26px_54px_-28px_rgba(17,23,32,0.4)] lg:min-h-0">
            <Image
              src="/referenciak/ablak/ablak-06.webp"
              alt="Szeko Ablak Kft munka"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="absolute bottom-4 left-4 rounded-xl bg-brand px-5 py-3.5 text-white shadow-[0_16px_36px_-12px_rgba(36,87,255,0.6)]">
              <div className="text-2xl font-bold leading-none">16+ év</div>
              <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-white/85">
                tapasztalat
              </p>
            </div>
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
