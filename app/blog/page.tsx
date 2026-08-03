import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import PageCTA from "@/components/PageCTA";
import { posts } from "@/lib/blog-adat";
import { service } from "@/lib/szolgaltatasok-adat";
import { firstSrc } from "@/lib/kepek";
import { ogImage, twitterImage } from "@/lib/seo";

const TITLE = "Blog — Hasznos tudnivalók Baján";
const DESCRIPTION =
  "Ablakcsere, ajtócsere, redőny, szúnyogháló, párkány, felújítás, festés és padlóburkolás — hasznos tanácsok Baján és Bács-Kiskun megyében élőknek.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    ...ogImage,
    title: `${TITLE} | Szeko Ablak Kft`,
    description: DESCRIPTION,
    url: "/blog",
  },
  twitter: { ...twitterImage, title: `${TITLE} | Szeko Ablak Kft`, description: DESCRIPTION },
};

export default function BlogPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Blog"
        title="Hasznos tudnivalók Baján"
        subtitle="Tanácsok ablakcseréhez, ajtócseréhez, redőnyhöz, szúnyoghálóhoz, párkányhoz, felújításhoz, festéshez és burkoláshoz — Baja és Bács-Kiskun megye szemszögéből."
        image="/referenciak/ablak/ablak-13.webp"
        crumbs={[
          { label: "Főoldal", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-px">
          <Reveal className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((p) => {
              const s = service(p.serviceSlug);
              const image = firstSrc(p.serviceSlug) ?? "/referenciak/ablak/ablak-13.webp";
              return (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-[0_18px_40px_-26px_rgba(17,23,32,0.3)] transition-transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={image}
                      alt={`${p.title} — Szeko Ablak Kft`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    {s && (
                      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-brand">
                        {s.shortName}
                      </span>
                    )}
                    <h2 className="text-lg font-medium leading-snug tracking-tight text-ink">
                      {p.title}
                    </h2>
                    <p className="line-clamp-3 text-sm leading-relaxed text-ink-soft">
                      {p.excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand">
                      Elolvasom <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </Reveal>
        </div>
      </section>

      <PageCTA
        title="Nem találja a választ a kérdésére?"
        text="Kérjen ingyenes árajánlatot, vagy hívjon minket — 1-2 munkanapon belül válaszolunk."
      />
    </main>
  );
}
