"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

const reasons = [
  {
    title: "18 év, egy csapat",
    desc: "Ugyanaz a törzscsapat dolgozik együtt közel két évtizede — nincs cserélődő alvállalkozó.",
  },
  {
    title: "Tiszta kivitelezés",
    desc: "Letakarjuk a padlót, elzárjuk a port, és minden nap rendben hagyjuk a munkaterületet.",
  },
  {
    title: "Közvetlen kommunikáció",
    desc: "Azzal beszél, aki a munkát végzi — nem egy ügyfélszolgálati szöveggel.",
  },
];

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".why-item",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.to(imageRef.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="angle-top bg-surface-dark py-24 text-white lg:py-32"
    >
      <div className="container-px grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:aspect-auto">
          <div ref={imageRef} className="absolute inset-0 -top-[6%] h-[112%] w-full">
            <Image
              src="/referenciak/felujitas/10.webp"
              alt="Elkészült felújítás"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium uppercase tracking-wider text-white/60">
            Miért mi
          </p>
          <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-tight lg:text-4xl">
            Az otthonán végzett munka jó kezekben.
          </h2>

          <div className="mt-10 flex flex-col gap-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="why-item border-t border-white/10 pt-6">
                <h3 className="text-lg font-medium">{reason.title}</h3>
                <p className="mt-2 max-w-md text-white/65">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
