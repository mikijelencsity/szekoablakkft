"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Reveal({
  children,
  className = "",
  y = 32,
  delay = 0,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        y,
        autoAlpha: 0,
        duration: 0.8,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      });
    }, ref);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} id={id} className={className}>
      {children}
    </div>
  );
}
