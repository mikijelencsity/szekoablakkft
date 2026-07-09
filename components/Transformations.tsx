"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";
import { projects, type TrImage } from "@/lib/atalakulasok";

function Gallery({
  images,
  onOpen,
}: {
  images: TrImage[];
  onOpen: (i: number) => void;
}) {
  const n = images.length;
  return (
    <div className="grid aspect-square grid-cols-2 gap-2.5 [grid-auto-rows:1fr] sm:gap-3">
      {images.map((img, i) => {
        const wide = i === n - 1 && n % 2 === 1; // páratlan darab → utolsó teljes szélességű
        return (
          <button
            key={img.src}
            type="button"
            onClick={() => onOpen(i)}
            className={`group relative cursor-zoom-in overflow-hidden rounded-xl bg-black/5 ${
              wide ? "col-span-2" : ""
            }`}
            aria-label="Kép megnyitása"
          >
            <Image
              src={img.src}
              alt=""
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
              sizes="(min-width: 1024px) 22vw, 44vw"
            />
          </button>
        );
      })}
    </div>
  );
}

export default function Transformations({ limit }: { limit?: number }) {
  const [lbImages, setLbImages] = useState<TrImage[]>([]);
  const [lbIndex, setLbIndex] = useState<number | null>(null);
  const open = (imgs: TrImage[], i: number) => {
    setLbImages(imgs);
    setLbIndex(i);
  };

  const list = limit ? projects.slice(0, limit) : projects;
  if (!list.length) return null;

  return (
    <section className="bg-brand-tint py-20 lg:py-28">
      <div className="container-px">
        <Reveal className="mb-12 max-w-2xl lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-brand">
            Átalakulások
          </p>
          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-ink lg:text-4xl">
            Miből mi lett — a kiindulástól a kész otthonig.
          </h2>
        </Reveal>

        <div className="flex flex-col gap-14 lg:gap-20">
          {list.map((p) => (
            <Reveal key={p.slug} className="border-t border-black/10 pt-10 lg:pt-14">
              <div className="mb-7 flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-tight text-ink lg:text-2xl">
                  {p.title}
                </h3>
                {p.location && (
                  <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink-soft">
                    {p.location}
                  </span>
                )}
              </div>

              <div className="grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
                {/* Előtte kártya */}
                <div className="rounded-2xl bg-white p-4 shadow-[0_24px_50px_-34px_rgba(20,30,50,0.45)] sm:p-5">
                  <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/[0.06] px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink-soft/50" />
                    Előtte
                  </span>
                  <Gallery
                    images={p.before}
                    onOpen={(i) => open(p.before, i)}
                  />
                </div>

                {/* Nyíl */}
                <div className="flex items-center justify-center self-center py-1">
                  <div className="flex h-14 w-14 rotate-90 items-center justify-center rounded-full bg-brand text-white shadow-[0_18px_40px_-12px_rgba(36,87,255,0.75)] lg:h-20 lg:w-20 lg:rotate-0">
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 12h15M13 6l6 6-6 6" />
                    </svg>
                  </div>
                </div>

                {/* Utána kártya */}
                <div className="rounded-2xl bg-white p-4 shadow-[0_24px_50px_-34px_rgba(36,87,255,0.4)] ring-1 ring-brand/15 sm:p-5">
                  <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    Utána
                  </span>
                  <Gallery images={p.after} onOpen={(i) => open(p.after, i)} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {limit && projects.length > limit && (
          <Reveal className="mt-12">
            <Link
              href="/referenciak"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
            >
              Összes átalakulás
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        )}
      </div>

      <Lightbox images={lbImages} index={lbIndex} setIndex={setLbIndex} />
    </section>
  );
}
