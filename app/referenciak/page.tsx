import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import PageCTA from "@/components/PageCTA";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export const metadata: Metadata = {
  title: "Referenciák | Szeko Ablak Kft",
  description:
    "Válogatás elkészült ablakcsere-, felújítási és festési munkáinkból. Valódi projektek, valódi eredmények.",
};

const U = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

const projects = [
  {
    title: "Családi ház ablakcsere",
    location: "Budapest, XI. kerület",
    image: "photo-1600566753086-00f18fb6b3ea",
    size: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Konyhafelújítás",
    location: "Szentendre",
    image: "photo-1615873968403-89e068629265",
    size: "",
  },
  {
    title: "Homlokzatfestés",
    location: "Gödöllő",
    image: "photo-1562259949-e8e7689d7828",
    size: "",
  },
  {
    title: "Fürdőszoba-felújítás",
    location: "Budakeszi",
    image: "photo-1584622650111-993a426fbf0a",
    size: "",
  },
  {
    title: "Redőny beépítés",
    location: "Vác",
    image: "photo-1560185007-cde436f6a4d0",
    size: "",
  },
];

export default function ReferenciakPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Referenciák"
        title="Valódi projektek, valódi eredmények"
        subtitle="Válogatás elkészült munkáinkból — ablakcsere, felújítás, festés és burkolás a régió otthonaiban."
        image={U("photo-1600607687939-ce8a6c25118c", 2000)}
        crumbs={[
          { label: "Főoldal", href: "/" },
          { label: "Referenciák", href: "/referenciak" },
        ]}
      />

      {/* Project grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-px grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {projects.map((p) => (
            <Reveal
              key={p.title}
              className={`group relative min-h-[280px] overflow-hidden rounded-2xl ${p.size}`}
            >
              <Image
                src={U(p.image)}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="font-medium text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.6)]">
                  {p.title}
                </p>
                <p className="text-sm text-white/80 [text-shadow:0_1px_10px_rgba(0,0,0,0.6)]">
                  {p.location}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Before / after */}
      <section className="bg-brand-tint py-20 lg:py-28">
        <div className="container-px">
          <Reveal className="mb-10 max-w-2xl lg:mb-14">
            <p className="text-sm font-medium uppercase tracking-wider text-brand">
              Előtte / utána
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-ink lg:text-4xl">
              Húzza a csúszkát az összehasonlításhoz.
            </h2>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <BeforeAfterSlider
                alt="Nappali ablakcsere"
                before={U("photo-1560448204-e02f11c3d0e2", 1200)}
                after={U("photo-1600566753086-00f18fb6b3ea", 1200)}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <BeforeAfterSlider
                alt="Fürdőszoba-felújítás"
                before={U("photo-1595515106969-1ce29566ff1c", 1200)}
                after={U("photo-1584622650111-993a426fbf0a", 1200)}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <PageCTA
        title="Legyen az Ön otthona a következő referencia."
        text="Kérjen ingyenes helyszíni felmérést, és beszéljük át a projektjét."
      />
    </main>
  );
}
