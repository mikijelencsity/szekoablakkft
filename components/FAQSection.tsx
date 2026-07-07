"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How much will my project cost?",
    a: "It depends on scope, but you'll always get a transparent, itemized quote after a free on-site inspection — before any work begins.",
  },
  {
    q: "How long does a typical project take?",
    a: "Window replacement usually takes 1–3 days per home. Full renovations vary, and we give you a realistic timeline in your quote.",
  },
  {
    q: "What does the process actually look like?",
    a: "Contact us, we visit and inspect on-site, you receive an offer, we execute the work, and we finish with a walkthrough together.",
  },
  {
    q: "Do you offer any guarantees?",
    a: "Yes — all installation work is covered by warranty, and materials carry manufacturer guarantees. Details are included in your quote.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-px max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wider text-brand">
          Common questions
        </p>
        <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-ink lg:text-4xl">
          Before you ask, we answer.
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
