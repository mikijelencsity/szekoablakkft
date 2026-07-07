"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const steps = [
  {
    n: "01",
    name: "Kapcsolat",
    short: "Keressen minket telefonon vagy űrlapon.",
    desc: "Keressen minket telefonon vagy űrlapon — pár mező, semmi bonyolult.",
  },
  {
    n: "02",
    name: "Helyszíni felmérés",
    short: "Kiszállunk és pontosan felmérünk.",
    desc: "Kiszállunk, felmérünk és pontosan megnézzük a munkát — ingyenesen.",
  },
  {
    n: "03",
    name: "Árajánlat",
    short: "Tételes, átlátható árajánlat.",
    desc: "Tételes, átlátható árajánlatot kap. Nincs rejtett költség, nincs nyomás.",
  },
  {
    n: "04",
    name: "Kivitelezés",
    short: "Tisztán, ütemterv szerint.",
    desc: "Csapatunk tisztán és a megbeszélt ütemterv szerint dolgozik.",
  },
  {
    n: "05",
    name: "Átadás",
    short: "Közös átadás és ellenőrzés.",
    desc: "Közös átadás és ellenőrzés, hogy biztos lehessen az eredményben.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const procRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: procRef.current,
        start: "top 72%",
        once: true,
        onEnter: () => procRef.current?.classList.add("is-active"),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-brand-tint py-24 lg:py-32">
      <div className="container-px max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wider text-brand">
          Hogyan dolgozunk
        </p>
        <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-ink lg:text-4xl">
          Egyszerű, kiszámítható folyamat.
        </h2>
      </div>

      <div ref={procRef} className="proc container-px mt-16 lg:mt-24">
        {/* Desktop: horizontal timeline */}
        <div className="relative hidden h-[240px] lg:block">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-black/10">
            <div className="proc-fill-h h-full bg-brand" />
          </div>

          {steps.map((step, i) => {
            const up = i % 2 === 0;
            const delay = `${0.16 + i * 0.32}s`;
            return (
              <div
                key={step.n}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${10 + i * 20}%` }}
              >
                <div
                  className="proc-dot flex h-11 w-11 items-center justify-center rounded-full border-2 border-black/15 bg-white text-sm font-bold text-ink-soft"
                  style={{ transitionDelay: delay }}
                >
                  {step.n}
                </div>
                <div
                  className={`absolute left-1/2 w-40 -translate-x-1/2 text-center ${
                    up ? "bottom-full mb-5" : "top-full mt-5"
                  }`}
                >
                  <b className="block text-[15px] font-semibold text-ink">
                    {step.name}
                  </b>
                  <span className="mt-1 block text-[13px] leading-snug text-ink-soft">
                    {step.short}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: vertical timeline */}
        <ol className="relative lg:hidden">
          <div className="absolute bottom-3 left-[21px] top-3 w-0.5 bg-black/10">
            <div className="proc-fill-v w-full bg-brand" />
          </div>

          {steps.map((step, i) => (
            <li
              key={step.n}
              className="relative flex gap-5 pb-9 last:pb-0"
            >
              <div
                className="proc-dot z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-black/15 bg-white text-sm font-bold text-ink-soft"
                style={{ transitionDelay: `${0.16 + i * 0.32}s` }}
              >
                {step.n}
              </div>
              <div className="pt-1.5">
                <b className="block text-lg font-semibold text-ink">
                  {step.name}
                </b>
                <p className="mt-1 max-w-md text-ink-soft">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
