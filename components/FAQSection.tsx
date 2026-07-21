"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Mennyibe kerül a munka?",
    a: "A munka terjedelmétől függ, de mindig átlátható, tételes árajánlatot kap — az ingyenes árajánlat és a helyszíni felmérés után, még mielőtt bármilyen munka elkezdődne.",
  },
  {
    q: "Mennyi ideig tart egy tipikus munka?",
    a: "Egy ablakcsere általában 1–3 nap otthononként. A teljes felújítások ideje változó, és reális ütemtervet adunk az árajánlatban.",
  },
  {
    q: "Hogy néz ki a folyamat?",
    a: "Felveszi velünk a kapcsolatot, ingyenes árajánlatot készítünk, egyeztetünk egy helyszíni felmérésről, majd elvégezzük a munkát, és közös átadással zárunk.",
  },
  {
    q: "Vállalnak garanciát?",
    a: "Igen — minden beépítési munkára garanciát vállalunk, az anyagokra pedig gyártói garancia vonatkozik. A részletek az árajánlatban szerepelnek.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="angle-top bg-white py-24 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-px mx-auto max-w-2xl">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-brand">
          Gyakori kérdések
        </p>
        <h2 className="mt-4 text-center text-3xl font-medium leading-tight tracking-tight text-ink lg:text-4xl">
          Mielőtt kérdezné, válaszolunk.
        </h2>

        <div className="mt-12 flex flex-col divide-y divide-black/10 border-t border-black/10">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium text-ink">{faq.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/10 text-ink transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-md pb-6 text-ink-soft">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
