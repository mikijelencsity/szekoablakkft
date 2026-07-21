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
      className="angle-top relative overflow-hidden bg-surface-dark py-32 text-center text-white lg:py-40"
    >
      {/* Extra background — spotlight + drifting aurora + blueprint grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-60 [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_34px),repeating-linear-gradient(90deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_34px)] [mask-image:radial-gradient(circle_at_50%_42%,#000,transparent_72%)]" />
        <div className="absolute left-1/2 top-[-10%] h-[70%] w-[85%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(36,87,255,0.30),transparent_62%)] blur-3xl" />
        <div className="aurora-1 absolute left-[12%] top-[24%] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(36,87,255,0.38),transparent_65%)] blur-3xl" />
        <div className="aurora-2 absolute right-[10%] bottom-[8%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(94,124,255,0.30),transparent_65%)] blur-3xl" />
      </div>

      <div className="cta-content container-px relative z-10 mx-auto max-w-2xl">
        <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Tegyük szebbé az otthonát.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75 lg:text-xl">
          Kérjen ingyenes, kötelezettség nélküli árajánlatot — utána egyeztetünk
          egy helyszíni felmérésről.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="#ajanlatkeres" variant="onDark">
            Kérjen ingyenes árajánlatot
          </Button>
        </div>
      </div>
    </section>
  );
}
