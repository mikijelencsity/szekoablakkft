"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

type Service = {
  n: string;
  name: string;
  desc: string;
  main: string;
  gallery: [string, string, string];
};

const services: Service[] = [
  {
    n: "01",
    name: "Ablakok",
    desc: "Energiatakarékos műanyag és alumínium ablakok — kevesebb zaj, kevesebb hőveszteség, alacsonyabb rezsi, pontos beépítéssel.",
    main: "photo-1531835551805-16d864c8d311",
    gallery: [
      "photo-1600566753086-00f18fb6b3ea",
      "photo-1600585154340-be6161a56a0c",
      "photo-1560185007-cde436f6a4d0",
    ],
  },
  {
    n: "02",
    name: "Redőnyök",
    desc: "Automata és hagyományos redőnyök a biztonságért, fényszabályozásért és a nyári hővédelemért — okos vezérléssel.",
    main: "photo-1560185007-cde436f6a4d0",
    gallery: [
      "photo-1531835551805-16d864c8d311",
      "photo-1600566753086-00f18fb6b3ea",
      "photo-1600585154340-be6161a56a0c",
    ],
  },
  {
    n: "03",
    name: "Felújítás",
    desc: "Teljes körű lakás- és házfelújítás egy kézből — tervezéstől a kulcsátadásig, tiszta munkaterülettel és tartható határidőkkel.",
    main: "photo-1621905251189-08b45d6a269e",
    gallery: [
      "photo-1541888946425-d81bb19240f5",
      "photo-1504307651254-35680f356dfd",
      "photo-1589939705384-5185137a7f0f",
    ],
  },
  {
    n: "04",
    name: "Festés",
    desc: "Tiszta, precíz bel- és kültéri festés — pontos élekkel, prémium anyagokkal, gyors kivitelezéssel.",
    main: "photo-1562259949-e8e7689d7828",
    gallery: [
      "photo-1615873968403-89e068629265",
      "photo-1604709177225-055f99402ea3",
      "photo-1600566753086-00f18fb6b3ea",
    ],
  },
  {
    n: "05",
    name: "Padlóburkolás",
    desc: "Hideg és meleg burkolatok szakszerű fektetése — laminált, parketta, csempe és kő, tartós, sík aljzatra.",
    main: "photo-1581858726788-75bc0f6a952d",
    gallery: [
      "photo-1584622650111-993a426fbf0a",
      "photo-1615873968403-89e068629265",
      "photo-1595515106969-1ce29566ff1c",
    ],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".service-row").forEach((row) => {
        gsap.fromTo(
          row,
          { y: 42, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 82%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24 lg:py-32">
      <div className="container-px mb-16 max-w-3xl lg:mb-24">
        <p className="text-sm font-medium uppercase tracking-wider text-brand lg:text-base">
          Amit csinálunk
        </p>
        <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Öt szolgáltatás, egy megbízható csapat.
        </h2>
      </div>

      <div className="container-px flex flex-col gap-16 lg:gap-24">
        {services.map((service, i) => {
          const isAlt = i % 2 === 1;
          return (
            <div
              key={service.name}
              className="service-row grid items-center gap-6 lg:grid-cols-2 lg:gap-0"
            >
              {/* Main photo */}
              <div
                className={`relative aspect-[16/11] overflow-hidden rounded-2xl shadow-[0_26px_54px_-28px_rgba(17,23,32,0.4)] ${
                  isAlt ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={U(service.main, 1400)}
                  alt={service.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
              </div>

              {/* Overlapping editorial card */}
              <div
                className={`relative z-10 rounded-2xl border border-black/5 bg-white p-7 shadow-[0_30px_60px_-30px_rgba(17,23,32,0.32)] lg:p-9 ${
                  isAlt ? "lg:order-1 lg:-mr-16" : "lg:-ml-16"
                }`}
              >
                <div className="font-mono text-2xl font-bold leading-none text-ink/10">
                  {service.n}
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
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

                {/* Mini gallery */}
                <div className="mt-6 flex gap-2.5">
                  {service.gallery.map((g, gi) => (
                    <div
                      key={gi}
                      className="relative aspect-square flex-1 overflow-hidden rounded-lg"
                    >
                      <Image
                        src={U(g, 400)}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 12vw, 28vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
