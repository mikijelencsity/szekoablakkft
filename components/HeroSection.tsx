"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { gsap } from "@/lib/gsap";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=75&w=1920&auto=format&fit=crop";

const HEADLINE = ["Megbízható kivitelezés,", "látható minőségben."];

const CREDENTIALS = [
  { value: "2007", label: "Alapítva" },
  { value: "640+", label: "Befejezett projekt" },
  { value: "18+ év", label: "Tapasztalat" },
  { value: "Teljes körű", label: "Garancia" },
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
        { scale: 1, duration: 2.4, ease: "power2.out" },
        0
      )
        .from(
          eyebrowRef.current,
          { y: 12, autoAlpha: 0, duration: 0.6 },
          0.2
        )
        .from(
          lineRefs.current.filter(Boolean),
          { y: 28, autoAlpha: 0, duration: 0.9, stagger: 0.12, ease: "power3.out" },
          0.35
        )
        .from(
          ctaRef.current,
          { y: 14, autoAlpha: 0, duration: 0.7 },
          "-=0.45"
        )
        .from(
          barRef.current,
          { autoAlpha: 0, y: 16, duration: 0.8 },
          "-=0.4"
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
        <Image
          src={HERO_IMAGE}
          alt="Modern otthon nagy ablakokkal"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,9,14,0.72)_0%,rgba(6,9,14,0.5)_28%,rgba(6,9,14,0.5)_52%,rgba(6,9,14,0.72)_78%,rgba(6,9,14,0.96)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
      </div>

      {/* Body */}
      <div className="container-px relative z-10 flex flex-1 items-end pt-28 lg:pt-32">
        <div className="max-w-2xl pb-14 lg:pb-20">
          <div
            ref={eyebrowRef}
            className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-white/90 [text-shadow:0_1px_12px_rgba(0,0,0,0.7)]"
          >
            Ablak · Redőny · Felújítás — Alapítva 2007
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

          <div ref={ctaRef} className="mt-9 flex flex-wrap items-center gap-5">
            <Button href="#ajanlatkeres">Kérjen ingyenes árajánlatot</Button>
            <Link
              href="/referenciak"
              className="text-[15px] font-medium text-white underline-offset-4 [text-shadow:0_1px_10px_rgba(0,0,0,0.7)] hover:underline"
            >
              Referenciák →
            </Link>
          </div>
        </div>
      </div>

      {/* Credential bar */}
      <div
        ref={barRef}
        className="container-px relative z-10 grid grid-cols-2 gap-y-6 pb-28 sm:grid-cols-4 sm:gap-y-0 sm:pb-24"
      >
        {CREDENTIALS.map((c) => (
          <div
            key={c.label}
            className="border-t border-white/25 px-1 pt-4 sm:px-4"
          >
            <div className="text-base font-bold tabular-nums text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.7)] lg:text-lg">
              {c.value}
            </div>
            <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.05em] text-white/80 [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]">
              {c.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
