"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

// Külön kép mobilra (álló, éles) és laptopra (fekvő, látványos oromfal).
const HEADLINE = ["Megbízható kivitelezés,", "látható minőségben."];

const icon = (paths: ReactNode) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {paths}
  </svg>
);

const CREDENTIALS = [
  {
    value: "2010",
    label: "Alapítva",
    icon: icon(
      <>
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </>
    ),
  },
  {
    value: "Ingyenes",
    label: "Szaktanácsadás",
    icon: icon(
      <>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </>
    ),
  },
  {
    value: "16+ év",
    label: "Tapasztalat",
    icon: icon(
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
  {
    value: "Gyártói &",
    label: "Beépítési garancia",
    icon: icon(
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let played = false;

    const ctx = gsap.context(() => {
      // Entrance timeline — paused until the preloader signals it's lifting.
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        parallaxRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 2, ease: "power2.out" },
        0
      )
        .from(
          eyebrowRef.current,
          { y: 10, autoAlpha: 0, duration: 0.45 },
          0.08
        )
        .from(
          lineRefs.current.filter(Boolean),
          { y: 24, autoAlpha: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" },
          0.2
        )
        .from(
          ctaRef.current,
          { y: 12, autoAlpha: 0, duration: 0.45 },
          0.4
        )
        .from(
          barRef.current,
          { autoAlpha: 0, y: 14, duration: 0.5 },
          0.52
        );

      // Slow parallax on scroll (independent of the entrance).
      gsap.to(parallaxRef.current, {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const play = () => {
        if (played) return;
        played = true;
        tl.play(0);
      };

      // Play after the preloader lifts. If it already fired (e.g. preloader
      // skipped this session), the flag catches it; otherwise listen + fallback.
      if ((window as Window & { __heroReady?: boolean }).__heroReady) {
        play();
      }
      window.addEventListener("hero:start", play, { once: true });
      const fallback = window.setTimeout(play, 4500);

      return () => {
        window.removeEventListener("hero:start", play);
        window.clearTimeout(fallback);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-surface-dark"
    >
      {/* Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 -top-[6%] h-[112%] w-full"
      >
        {/* Blueprint-rács + reflektorfény (fotó nélkül) — mobil + gép */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            background:
              "radial-gradient(120% 70% at 50% 0%, #16255a, #0a1428 60%)",
          }}
          aria-hidden
        >
          <div
            className="absolute inset-0 opacity-55"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(120,160,255,0.14) 0 1px, transparent 1px 30px), repeating-linear-gradient(90deg, rgba(120,160,255,0.14) 0 1px, transparent 1px 30px)",
              WebkitMaskImage:
                "radial-gradient(95% 62% at 50% 30%, #000, transparent 82%)",
              maskImage:
                "radial-gradient(95% 62% at 50% 30%, #000, transparent 82%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(72% 46% at 50% 3%, rgba(50,100,255,0.5), transparent 60%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1428] via-transparent to-transparent" />
        </div>
      </div>

      {/* Body */}
      <div className="container-px relative z-10 flex flex-1 items-end pt-28 lg:pt-32">
        <div className="max-w-2xl pb-14 lg:pb-20">
          <div
            ref={eyebrowRef}
            className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.7)] sm:text-[15px]"
          >
            <span className="h-0.5 w-8 rounded-full bg-brand" />
            Nyílászáró · Redőny · Felújítás — 2010 óta
          </div>

          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.4rem] [text-shadow:0_2px_18px_rgba(0,0,0,0.75),0_1px_3px_rgba(0,0,0,0.5)]">
            {HEADLINE.map((line, i) => (
              <span
                key={line}
                ref={(el) => {
                  lineRefs.current[i] = el;
                }}
                className="block"
              >
                {line}
              </span>
            ))}
          </h1>

          <div ref={ctaRef} className="mt-9 flex flex-wrap items-center gap-3.5">
            <Link
              href="#ajanlatkeres"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_34px_-8px_rgba(36,87,255,0.6)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              Kérjen ingyenes árajánlatot
              <span
                aria-hidden
                className="transition-transform duration-300 ease-out group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <Link
              href="/referenciak"
              className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/20"
            >
              Referenciák
              <span
                aria-hidden
                className="transition-transform duration-300 ease-out group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Credential bar */}
      <div
        ref={barRef}
        className="container-px relative z-10 grid grid-cols-2 gap-3 pb-28 sm:grid-cols-4 sm:gap-4 sm:pb-24"
      >
        {CREDENTIALS.map((c) => (
          <div
            key={c.label}
            className="flex flex-col gap-3 rounded-xl border border-white/15 bg-white/[0.07] p-4 backdrop-blur-md transition-colors hover:border-white/30 sm:p-5"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/25 text-white">
              {c.icon}
            </span>
            <div>
              <div className="text-2xl font-bold tabular-nums leading-none text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.7)] lg:text-3xl">
                {c.value}
              </div>
              <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-white/85 [text-shadow:0_1px_8px_rgba(0,0,0,0.7)] sm:text-xs">
                {c.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
