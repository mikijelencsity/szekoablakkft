"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLenis } from "@/lib/lenis";

const HOLD_MS = 1700;

export default function Preloader() {
  const { lenis } = useLenis();
  const lenisRef = useRef(lenis);
  lenisRef.current = lenis;

  const [reduce] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [done, setDone] = useState(false);
  const [phase, setPhase] = useState<"init" | "play" | "reveal">("init");

  const wipeMs = reduce ? 60 : 900;
  const cardSec = reduce ? 0.001 : 0.8;

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";

    const unlock = () => {
      document.documentElement.style.overflow = "";
      lenisRef.current?.start();
    };
    const fireHeroStart = () => {
      (window as Window & { __heroReady?: boolean }).__heroReady = true;
      window.dispatchEvent(new Event("hero:start"));
    };

    // Only show the intro once per browser session — refreshes are instant.
    if (sessionStorage.getItem("preloaded")) {
      unlock();
      fireHeroStart();
      setDone(true);
      return;
    }

    const hold = reduce ? 250 : HOLD_MS;

    const raf = requestAnimationFrame(() => setPhase("play"));
    const t1 = setTimeout(() => {
      setPhase("reveal");
      fireHeroStart();
      sessionStorage.setItem("preloaded", "1");
      unlock();
    }, hold);
    const t2 = setTimeout(() => setDone(true), hold + wipeMs);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      unlock();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (done) return null;

  const playing = phase !== "init";
  const revealing = phase === "reveal";

  return (
    <div
      role="status"
      aria-label="Betöltés"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 overflow-hidden bg-white"
      style={{
        clipPath: revealing ? "inset(0 0 100% 0)" : "inset(0 0 0% 0)",
        transition: `clip-path ${wipeMs}ms cubic-bezier(0.76,0,0.24,1)`,
      }}
    >
      {/* Blueprint grid */}
      <div
        className={`preloader-grid pointer-events-none absolute inset-0 transition-opacity duration-700 ${
          playing ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Logo */}
      <Image
        src="/szeko-logo.webp"
        alt="Szeko Ablak Kft"
        width={900}
        height={332}
        priority
        className="relative h-auto w-72 sm:w-[26rem]"
        style={{
          opacity: playing ? 1 : 0,
          transform: playing
            ? "translateY(0) scale(1)"
            : "translateY(26px) scale(0.98)",
          transition: `opacity ${cardSec}s cubic-bezier(0.2,0.9,0.2,1), transform ${cardSec}s cubic-bezier(0.2,0.9,0.2,1)`,
        }}
      />

      {/* Caption */}
      <span
        className="relative font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft"
        style={{
          opacity: playing ? 1 : 0,
          transition: "opacity 0.5s ease",
          transitionDelay: playing ? "400ms" : "0ms",
        }}
      >
        Alapítva 2007
      </span>
    </div>
  );
}
