"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

const IMAGE = "/referenciak/ablak/17.webp";

const COLS = 4;
const ROWS = 2;
const PANES = Array.from({ length: COLS * ROWS }, (_, i) => ({
  col: i % COLS,
  row: Math.floor(i / COLS),
}));

export default function PaneReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const paneRefs = useRef<Array<HTMLDivElement | null>>([]);
  const framingRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panes = paneRefs.current.filter(Boolean);
      gsap.set(panes, { transformOrigin: "left center" });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      });

      tl.from(panes, {
        rotationY: 78,
        z: 70,
        autoAlpha: 0,
        duration: 0.85,
        stagger: 0.07,
      })
        .from(framingRef.current, { autoAlpha: 0, duration: 0.6 }, "-=0.25")
        .from(
          copyRef.current,
          { y: 20, autoAlpha: 0, duration: 0.7 },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[62vh] min-h-[420px] w-full overflow-hidden bg-surface-dark lg:h-[80vh]"
    >
      <div
        className="grid h-full w-full grid-cols-4 grid-rows-2"
        style={{ perspective: "1600px", transformStyle: "preserve-3d" }}
      >
        {PANES.map((pane, i) => (
          <div
            key={i}
            ref={(el) => {
              paneRefs.current[i] = el;
            }}
            className="relative overflow-hidden"
          >
            <div
              className="absolute"
              style={{
                width: `${COLS * 100}%`,
                height: `${ROWS * 100}%`,
                left: `${-pane.col * 100}%`,
                top: `${-pane.row * 100}%`,
              }}
            >
              <Image
                src={IMAGE}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* frame + mullions + tint */}
      <div ref={framingRef} className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
        <div className="absolute left-1/4 top-0 h-full w-[3px] bg-gradient-to-r from-black/60 via-white/10 to-black/60" />
        <div className="absolute left-2/4 top-0 h-full w-[3px] bg-gradient-to-r from-black/60 via-white/10 to-black/60" />
        <div className="absolute left-3/4 top-0 h-full w-[3px] bg-gradient-to-r from-black/60 via-white/10 to-black/60" />
        <div className="absolute left-0 top-1/2 h-[3px] w-full bg-gradient-to-b from-black/60 via-white/10 to-black/60" />
      </div>

      <div className="absolute inset-0 z-10 flex items-center">
        <div ref={copyRef} className="container-px max-w-2xl">
          <div className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-white/75">
            <span className="h-px w-8 bg-brand" />
            Munkáink
          </div>
          <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl [text-shadow:0_2px_30px_rgba(0,0,0,0.55)]">
            Nyissunk ablakot a minőségre.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/85 [text-shadow:0_1px_16px_rgba(0,0,0,0.5)]">
            Nézze meg, hogyan alakítjuk át a valódi otthonokat — tiszta
            munkával, pontos kivitelezéssel.
          </p>
          <a
            href="#projects"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/20"
          >
            Nézze meg a projekteket
            <span
              aria-hidden
              className="transition-transform duration-300 ease-out group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
