"use client";

import { useState } from "react";
import Image from "next/image";
import type { RefImage } from "@/lib/referenciak";
import Lightbox from "./Lightbox";

export default function Gallery({ images }: { images: RefImage[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      {/* Masonry-szerű oszlopos rács */}
      <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpen(i)}
            className="group mb-3 block w-full cursor-zoom-in overflow-hidden rounded-xl sm:mb-4"
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

      <Lightbox images={images} index={open} setIndex={setOpen} />
    </>
  );
}
