"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import type { RefImage } from "@/lib/referenciak";

export default function Lightbox({
  images,
  index,
  setIndex,
}: {
  images: RefImage[];
  index: number | null;
  setIndex: (i: number | null) => void;
}) {
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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
      onClick={close}
    >
      <button
        type="button"
        onClick={close}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20"
        aria-label="Bezárás"
      >
        ✕
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20 sm:left-6"
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
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20 sm:right-6"
            aria-label="Következő"
          >
            ›
          </button>
        </>
      )}

      <div
        className="relative flex max-h-[86vh] max-w-[92vw] items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index].src}
          alt=""
          width={images[index].w}
          height={images[index].h}
          className="max-h-[86vh] w-auto rounded-lg object-contain"
          sizes="92vw"
          priority
        />
      </div>

      {images.length > 1 && (
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
          {index + 1} / {images.length}
        </span>
      )}
    </div>
  );
}
