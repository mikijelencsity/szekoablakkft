import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import PageCTA from "@/components/PageCTA";
import Gallery from "@/components/Gallery";
import { categories } from "@/lib/kepek";

export const metadata: Metadata = {
  title: "Referenciák | Szeko Ablak Kft",
  description:
    "Válogatás elkészült ablakcsere-, felújítási, festési és burkolási munkáinkból. Valódi projektek, valódi eredmények.",
};

export default function ReferenciakPage() {
  const shown = categories.filter((c) => c.images.length > 0);

  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Referenciák"
        title="Valódi projektek, valódi eredmények"
        subtitle="Válogatás elkészült munkáinkból — ablakcsere, felújítás, festés és burkolás a régió otthonaiban."
        image="/referenciak/ablak/02.webp"
        crumbs={[
          { label: "Főoldal", href: "/" },
          { label: "Referenciák", href: "/referenciak" },
        ]}
      />

      {shown.map((cat, i) => (
        <section
          key={cat.slug}
          className={i % 2 === 0 ? "bg-white py-16 lg:py-24" : "bg-brand-tint py-16 lg:py-24"}
        >
          <div className="container-px">
            <Reveal className="mb-8 flex items-baseline justify-between gap-4 lg:mb-12">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-brand">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 text-3xl font-medium leading-tight tracking-tight text-ink lg:text-4xl">
                  {cat.title}
                </h2>
              </div>
              <span className="shrink-0 text-sm text-ink-soft">
                {cat.images.length} kép
              </span>
            </Reveal>

            <Reveal>
              <Gallery images={cat.images} />
            </Reveal>
          </div>
        </section>
      ))}

      {/* Előtte / utána — a képek feltöltése után újra bekapcsoljuk.
      <section className="bg-brand-tint py-20 lg:py-28"> ... </section>
      */}

      <PageCTA
        title="Legyen az Ön otthona a következő referencia."
        text="Kérjen ingyenes helyszíni felmérést, és beszéljük át a projektjét."
      />
    </main>
  );
}
