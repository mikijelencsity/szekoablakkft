"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { RefImage } from "@/lib/referenciak";

export default function Gallery({ images }: { images: RefImage[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: number) =>
      setOpen((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
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
  }, [open, close, go]);

  return (
    <>
      {/* Masonry-szerű oszlopos rács */}
      <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpen(i)}
            className="group mb-3 block w-full overflow-hidden rounded-xl sm:mb-4"
            aria-label="Kép megnyitása"
          >
            <Image
              src={img.src}
              alt=""
              width={img.w}
              height={img.h}
              className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              sizes="(min-width: 1024px) 24vw, (min-width: 640px) 32vw, 48vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open !== null && (
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

          <div
            className="relative flex max-h-[86vh] max-w-[92vw] items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[open].src}
              alt=""
              width={images[open].w}
              height={images[open].h}
              className="max-h-[86vh] w-auto rounded-lg object-contain"
              sizes="92vw"
              priority
            />
          </div>

          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
            {open + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}
