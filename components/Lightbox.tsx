"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import type { RefImage } from "@/lib/referenciak";

export default function Lightbox({
  images,
  index,
  setIndex,
  title,
}: {
  images: RefImage[];
  index: number | null;
  setIndex: (i: number | null) => void;
  title?: string;
}) {
  const touchX = useRef<number | null>(null);

  const close = useCallback(() => setIndex(null), [setIndex]);
  const go = useCallback(
    (dir: number) => {
      if (index === null || images.length === 0) return;
      setIndex((index + dir + images.length) % images.length);
    },
    [index, images.length, setIndex]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, go]);

  if (index === null || !images[index]) return null;

  const multi = images.length > 1;
  const arrow =
    "flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-2xl text-white transition-colors hover:bg-white/25";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
      onClick={close}
    >
      <button
        type="button"
        onClick={close}
        className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-2xl text-white transition-colors hover:bg-white/25"
        aria-label="Bezárás"
      >
        ✕
      </button>

      {/* Desktop side arrows */}
      {multi && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className={`absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 lg:flex ${arrow}`}
            aria-label="Előző"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className={`absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 lg:flex ${arrow}`}
            aria-label="Következő"
          >
            ›
          </button>
        </>
      )}

      {/* Image — swipeable on touch */}
      <div
        className="relative flex max-h-[80vh] max-w-[94vw] items-center justify-center sm:max-w-[92vw]"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <Image
          src={images[index].src}
          alt={title ? `${title} — referencia kép ${index + 1}` : ""}
          width={images[index].w}
          height={images[index].h}
          className="max-h-[80vh] w-auto rounded-lg object-contain"
          sizes="94vw"
          priority
        />
      </div>

      {/* Bottom controls — always tappable, especially on mobile */}
      {multi && (
        <div
          className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => go(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-2xl text-white transition-colors hover:bg-white/25"
            aria-label="Előző"
          >
            ‹
          </button>
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
            {index + 1} / {images.length}
          </span>
          <button
            type="button"
            onClick={() => go(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-2xl text-white transition-colors hover:bg-white/25"
            aria-label="Következő"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
