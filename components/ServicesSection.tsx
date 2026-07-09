"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { catImages } from "@/lib/kepek";
import type { RefImage } from "@/lib/referenciak";
import Lightbox from "./Lightbox";

type Service = {
  n: string;
  name: string;
  cat: string;
  desc: string;
};

const services: Service[] = [
  {
    n: "01",
    name: "Ablakok",
    cat: "ablak",
    desc: "Energiatakarékos műanyag és alumínium ablakok — kevesebb zaj, kevesebb hőveszteség, alacsonyabb rezsi, pontos beépítéssel.",
  },
  {
    n: "02",
    name: "Redőnyök",
    cat: "redony",
    desc: "Redőnyök a biztonságért, fényszabályozásért és a nyári hővédelemért.",
  },
  {
    n: "03",
    name: "Felújítás",
    cat: "felujitas",
    desc: "Teljes körű lakás- és házfelújítás egy kézből — tervezéstől a kulcsátadásig, tiszta munkaterülettel és tartható határidőkkel.",
  },
  {
    n: "04",
    name: "Festés",
    cat: "festes",
    desc: "Tiszta, precíz bel- és kültéri festés — pontos élekkel, prémium anyagokkal, gyors kivitelezéssel.",
  },
  {
    n: "05",
    name: "Padlóburkolás",
    cat: "burkolas",
    desc: "Hideg és meleg burkolatok szakszerű fektetése — laminált, parketta, csempe és kő, tartós, sík aljzatra.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const [lbImages, setLbImages] = useState<RefImage[]>([]);
  const [lbIndex, setLbIndex] = useState<number | null>(null);

  const openLb = (imgs: RefImage[], i: number) => {
    setLbImages(imgs);
    setLbIndex(i);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading — fade up + hand-drawn underline draws in
      const head = headRef.current;
      if (head) {
        gsap.from(head.querySelectorAll<HTMLElement>(".he-fx"), {
          y: 22,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: head, start: "top 82%" },
        });
      }

      gsap.utils
        .toArray<HTMLElement>(".service-row, .service-divider")
        .forEach((el) => {
          gsap.fromTo(
            el,
            { y: 32, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
              },
            }
          );
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#eef3ff] via-[#f6f8ff] to-white py-24 lg:py-32"
    >
      <div
        ref={headRef}
        className="container-px mx-auto mb-16 max-w-3xl text-center lg:mb-24"
      >
        <span className="he-fx inline-flex items-center gap-2.5 rounded-full bg-brand-tint px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand">
          <span className="dot-pulse h-[7px] w-[7px] rounded-full bg-brand" />
          Amit csinálunk
        </span>
        <h2 className="he-fx mx-auto mt-6 max-w-2xl text-[1.9rem] font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl sm:leading-[1.05] lg:text-6xl">
          Öt szolgáltatás, egy megbízható csapat.
        </h2>
      </div>

      <div className="container-px flex flex-col">
        {services.map((service, i) => {
          const isAlt = i % 2 === 1;
          const imgs = catImages(service.cat);
          const main = imgs[0]?.src;
          const thumbs = imgs.slice(1, 4);
          return (
            <div key={service.name}>
              {/* D1 · numbered index divider */}
              <div
                className={`service-divider flex items-center gap-5 pb-8 lg:gap-6 lg:pb-10 ${
                  i === 0 ? "pt-0" : "pt-20 lg:pt-28"
                }`}
              >
                <span className="font-mono text-4xl font-bold leading-none text-ink/[0.08] lg:text-5xl">
                  {service.n}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft whitespace-nowrap">
                  {service.name}
                </span>
                <span className="h-px flex-1 bg-black/10" />
              </div>

              <div className="service-row grid items-center gap-6 lg:grid-cols-2 lg:gap-0">
                {/* Main photo */}
                <div
                  className={`relative aspect-[16/11] overflow-hidden rounded-2xl shadow-[0_26px_54px_-28px_rgba(17,23,32,0.4)] ${
                    isAlt ? "lg:order-2" : ""
                  }`}
                >
                  {main && (
                    <button
                      type="button"
                      onClick={() => openLb(imgs, 0)}
                      className="group absolute inset-0 cursor-zoom-in"
                      aria-label={`${service.name} — kép megnyitása`}
                    >
                      <Image
                        src={main}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        sizes="(min-width: 1024px) 48vw, 100vw"
                      />
                    </button>
                  )}
                </div>

                {/* Overlapping editorial card — aurora glass */}
                <div
                  className={`relative z-10 ${
                    isAlt ? "lg:order-1 lg:-mr-16" : "lg:-ml-16"
                  }`}
                >
                  {/* Aurora glow behind the frosted glass */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                    <span className="svc-aur1 absolute left-[42%] top-[-12%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(111,155,255,0.55),transparent_65%)] blur-2xl" />
                    <span className="svc-aur2 absolute left-[58%] top-[34%] h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(157,123,255,0.5),transparent_65%)] blur-2xl" />
                  </div>

                  {/* Frosted glass card */}
                  <div className="relative rounded-2xl border border-white/60 bg-white/55 p-7 shadow-[0_30px_60px_-30px_rgba(17,23,32,0.42),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl lg:p-9">
                  <h3 className="text-2xl font-semibold tracking-tight text-ink">
                    {service.name}
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
                    {service.desc}
                  </p>

                  <Link
                    href="#ajanlatkeres"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                  >
                    Kérjen árajánlatot
                    <span aria-hidden>→</span>
                  </Link>

                  {/* Mini gallery — fix méretű bélyegképek, lightboxot nyitnak */}
                  {thumbs.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {thumbs.map((t, gi) => (
                        <button
                          type="button"
                          key={t.src}
                          onClick={() => openLb(imgs, gi + 1)}
                          className="group relative h-[4.25rem] w-[4.25rem] shrink-0 cursor-zoom-in overflow-hidden rounded-lg"
                          aria-label="Kép megnyitása"
                        >
                          <Image
                            src={t.src}
                            alt=""
                            fill
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                            sizes="80px"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Lightbox images={lbImages} index={lbIndex} setIndex={setLbIndex} />
    </section>
  );
}
