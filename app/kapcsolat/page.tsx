import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import QuoteForm from "@/components/QuoteForm";

const TITLE = "Kapcsolat";
const DESCRIPTION =
  "Kérjen ingyenes, kötelezettség nélküli árajánlatot. Hívjon minket, írjon e-mailt, vagy töltse ki az ajánlatkérő űrlapot.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/kapcsolat" },
  openGraph: { title: `${TITLE} | Szeko Ablak Kft`, description: DESCRIPTION, url: "/kapcsolat" },
  twitter: { title: `${TITLE} | Szeko Ablak Kft`, description: DESCRIPTION },
};

const contacts = [
  {
    label: "Telefon",
    links: [
      { value: "06 20 219 1858", href: "tel:+36202191858" },
      { value: "06 20 219 4514", href: "tel:+36202194514" },
    ],
    hint: "H–P 8:00–17:00",
  },
  {
    label: "E-mail",
    links: [{ value: "szeko2010@gmail.com", href: "mailto:szeko2010@gmail.com" }],
    hint: "Válasz 1-2 munkanapon belül",
  },
];

export default function KapcsolatPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Kapcsolat"
        title="Kérjen ingyenes árajánlatot"
        subtitle="Töltse ki az űrlapot, vagy keressen minket telefonon — 1-2 munkanapon belül tételes ajánlattal jelentkezünk."
        image="/referenciak/ablak/ablak-01.webp"
        crumbs={[
          { label: "Főoldal", href: "/" },
          { label: "Kapcsolat", href: "/kapcsolat" },
        ]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-px grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          {/* Contact info */}
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-wider text-brand">
              Elérhetőségek
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-ink lg:text-4xl">
              Beszéljük át a projektjét.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
              Akár egyetlen ablakról, akár teljes lejavításról van szó,
              szívesen segítünk. Az árajánlat mindig ingyenes és
              kötelezettség nélküli.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {contacts.map((c) => (
                <div
                  key={c.label}
                  className="rounded-2xl border border-black/5 bg-white p-5 shadow-[0_16px_40px_-30px_rgba(17,23,32,0.35)] transition-colors hover:border-brand/30"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft">
                    {c.label}
                  </p>
                  <div className="mt-1 flex flex-col gap-0.5">
                    {c.links.map((l) =>
                      l.href ? (
                        <a
                          key={l.value}
                          href={l.href}
                          className="text-lg font-semibold text-ink transition-colors hover:text-brand"
                        >
                          {l.value}
                        </a>
                      ) : (
                        <span
                          key={l.value}
                          className="text-lg font-semibold text-ink"
                        >
                          {l.value}
                        </span>
                      )
                    )}
                  </div>
                  <p className="mt-1 text-sm text-ink-soft">{c.hint}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Quote form */}
          <Reveal delay={0.08} id="ajanlatkeres">
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
