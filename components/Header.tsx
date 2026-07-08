"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLenis } from "@/lib/lenis";

const NAV = [
  { n: "01", label: "Szolgáltatások", href: "/szolgaltatasok" },
  { n: "02", label: "Rólunk", href: "/rolunk" },
  { n: "03", label: "Referenciák", href: "/referenciak" },
  { n: "04", label: "Kapcsolat", href: "/kapcsolat" },
];

export default function Header() {
  const { lenis } = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      lenis?.stop();
      document.documentElement.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.documentElement.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = "";
    };
  }, [open, lenis]);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[80] flex justify-center p-3.5">
        <div className="pointer-events-auto relative w-[calc(100%-1rem)] lg:w-auto">
          <header
            className={`flex items-center justify-between gap-4 rounded-2xl border border-white/60 py-2 pl-5 pr-2 backdrop-blur-xl transition-all duration-300 lg:justify-start lg:gap-7 lg:rounded-full ${
              scrolled
                ? "bg-white/95 shadow-[0_12px_34px_-12px_rgba(17,23,32,0.28)]"
                : "bg-white/70 shadow-[0_12px_34px_-16px_rgba(17,23,32,0.22)]"
            }`}
          >
            <Link
              href="/"
              aria-label="Szeko Ablak Kft"
              className="flex items-center"
            >
              <Image
                src="/logo.webp"
                alt="Szeko Ablak Kft"
                width={900}
                height={332}
                priority
                className="h-8 w-auto sm:h-9"
              />
            </Link>

            <nav className="hidden items-center gap-6 text-[14px] text-ink/85 lg:flex">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/kapcsolat"
              className="hidden rounded-full bg-brand px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-brand-dark lg:inline-flex"
            >
              Árajánlat
            </Link>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Menü bezárása" : "Menü"}
              aria-expanded={open}
              className="relative z-[80] flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-xl text-ink lg:hidden"
            >
              <span
                className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </header>
        </div>
      </div>

      {/* Fullscreen mobile menu */}
      <div
        className={`fixed inset-0 z-[70] lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Panel */}
        <div
          className={`absolute inset-0 origin-top overflow-hidden bg-surface-dark transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
          }`}
        >
          {/* ambient glow */}
          <div className="pointer-events-none absolute -left-1/4 top-0 h-2/3 w-2/3 rounded-full bg-brand/25 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-1/2 w-1/2 rounded-full bg-brand/10 blur-[120px]" />
        </div>

        {/* Content */}
        <div className="relative flex h-full flex-col px-6 pb-10 pt-24">

          <nav className="flex flex-1 flex-col justify-center">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4 border-b border-white/10 py-4"
                style={{
                  transition:
                    "opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                  transitionDelay: open ? `${140 + i * 70}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(24px)",
                }}
              >
                <span className="font-mono text-xs text-brand">{item.n}</span>
                <span className="text-3xl font-semibold tracking-tight text-white transition-colors group-hover:text-brand">
                  {item.label}
                </span>
                <span className="ml-auto translate-x-0 self-center text-white/40 transition-all group-hover:translate-x-1 group-hover:text-white">
                  →
                </span>
              </Link>
            ))}
          </nav>

          <div
            className="flex flex-col gap-4"
            style={{
              transition:
                "opacity 0.5s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: open ? "480ms" : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="flex flex-col gap-1 text-sm text-white/70">
              <a href="tel:+36000000000" className="hover:text-white">
                +36 00 000 0000
              </a>
              <a href="mailto:info@szekoablak.hu" className="hover:text-white">
                info@szekoablak.hu
              </a>
              <span className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">
                H–P 8:00–17:00 · Budapest &amp; 45 km
              </span>
            </div>
            <Link
              href="/kapcsolat"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-brand px-5 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Kérjen ingyenes árajánlatot
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
