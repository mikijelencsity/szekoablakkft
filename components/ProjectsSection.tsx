"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

const projects = [
  {
    title: "Ablakcsere",
    image: "/referenciak/ablak/13.webp",
    size: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Felújítás",
    image: "/referenciak/felujitas/02.webp",
    size: "",
  },
  {
    title: "Festés",
    image: "/referenciak/festes/01.webp",
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
      <div className="container-px mb-14 flex flex-wrap items-end justify-between gap-4 lg:mb-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-brand">
            Bizonyíték, nem ígéret
          </p>
          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-ink lg:text-4xl">
            Valódi projektek, valódi eredmények.
          </h2>
        </div>
        <Link
          href="/referenciak"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
        >
          Összes referencia
          <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="container-px grid grid-cols-1 gap-5 lg:grid-cols-3 lg:grid-rows-2">
        {projects.map((project) => (
          <Link
            key={project.title}
            href="/referenciak"
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
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
