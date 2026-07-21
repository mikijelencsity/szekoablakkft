"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

type Crumb = { label: string; href: string };

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  crumbs?: Crumb[];
}) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ph-reveal", {
        y: 22,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.1,
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const breadcrumbSchema = crumbs && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `https://szekoablak.hu${c.href}`,
    })),
  };

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[54vh] w-full items-end overflow-hidden bg-surface-dark"
    >
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,9,14,0.75)_0%,rgba(6,9,14,0.45)_45%,rgba(6,9,14,0.85)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
      </div>

      <div className="container-px relative z-10 w-full pb-14 pt-36 lg:pb-20 lg:pt-40">
        {crumbs && (
          <nav className="ph-reveal mb-5 flex items-center gap-2 text-xs text-white/70 [text-shadow:0_1px_10px_rgba(0,0,0,0.6)]">
            {crumbs.map((c, i) => (
              <span key={c.href} className="flex items-center gap-2">
                <Link href={c.href} className="hover:text-white">
                  {c.label}
                </Link>
                {i < crumbs.length - 1 && (
                  <span className="text-white/40">/</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="ph-reveal mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/90 [text-shadow:0_1px_12px_rgba(0,0,0,0.7)]">
          {eyebrow}
        </div>
        <h1 className="ph-reveal max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl [text-shadow:0_2px_18px_rgba(0,0,0,0.6)]">
          {title}
        </h1>
        {subtitle && (
          <p className="ph-reveal mt-6 max-w-xl text-lg leading-relaxed text-white/85 [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
