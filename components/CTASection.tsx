"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Button from "./Button";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-content",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="bg-surface-dark py-28 text-center text-white lg:py-36"
    >
      <div className="cta-content container-px mx-auto max-w-xl">
        <h2 className="text-3xl font-medium leading-tight tracking-tight lg:text-4xl">
          Let&apos;s make your home better.
        </h2>
        <p className="mt-4 text-white/70">
          Free, no-obligation on-site inspection. No pressure, just a clear quote.
        </p>
        <div className="mt-9 flex justify-center">
          <Button href="/#contact" variant="onDark">
            Request a free quote
          </Button>
        </div>
      </div>
    </section>
  );
}
