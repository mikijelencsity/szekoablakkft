"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import BeforeAfterSlider from "./BeforeAfterSlider";

const projects = [
  {
    title: "Családi ház ablakcsere",
    location: "Budapest, XI. kerület",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop",
    size: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Konyhafelújítás",
    location: "Szentendre",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1600&auto=format&fit=crop",
    size: "",
  },
  {
    title: "Homlokzatfestés",
    location: "Gödöllő",
    image:
      "https://images.unsplash.com/photo-1595514535215-a68f0e6a1b5c?q=80&w=1600&auto=format&fit=crop",
    size: "",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".project-tile").forEach((tile, i) => {
        gsap.fromTo(
          tile,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: tile,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="angle-top bg-white py-24 lg:py-32">
      <div className="container-px mb-14 max-w-2xl lg:mb-20">
        <p className="text-sm font-medium uppercase tracking-wider text-brand">
          Bizonyíték, nem ígéret
        </p>
        <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-ink lg:text-4xl">
          Valódi projektek, valódi eredmények.
        </h2>
      </div>

      <div className="container-px grid grid-cols-1 gap-5 lg:grid-cols-3 lg:grid-rows-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`project-tile group relative min-h-[280px] overflow-hidden rounded-2xl ${project.size}`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 translate-y-3 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="font-medium text-white">{project.title}</p>
              <p className="text-sm text-white/75">{project.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="container-px mt-20">
        <p className="mb-6 text-sm font-medium uppercase tracking-wider text-brand">
          Húzza az összehasonlításhoz
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          <BeforeAfterSlider
            alt="Nappali ablakcsere"
            before="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop"
            after="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
          />
          <BeforeAfterSlider
            alt="Homlokzatfestés"
            before="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop"
            after="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1200&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
}
