import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import PageCTA from "@/components/PageCTA";
import FAQSection from "@/components/FAQSection";
import { posts, post } from "@/lib/blog-adat";
import { service } from "@/lib/szolgaltatasok-adat";
import { firstSrc } from "@/lib/kepek";
import { SITE_URL, ogImage, twitterImage } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = post(slug);
  if (!p) return {};

  return {
    title: p.seoTitle,
    description: p.metaDescription,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      ...ogImage,
      type: "article",
      title: `${p.seoTitle} | Szeko Ablak Kft`,
      description: p.metaDescription,
      url: `/blog/${p.slug}`,
      publishedTime: p.publishedAt,
    },
    twitter: {
      ...twitterImage,
      title: `${p.seoTitle} | Szeko Ablak Kft`,
      description: p.metaDescription,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = post(slug);
  if (!p) notFound();

  const s = service(p.serviceSlug);
  const heroImage = firstSrc(p.serviceSlug) ?? "/referenciak/ablak/ablak-13.webp";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.metaDescription,
    datePublished: p.publishedAt,
    dateModified: p.publishedAt,
    author: { "@type": "Organization", name: "Szeko Ablak Kft" },
    publisher: {
      "@type": "HomeAndConstructionBusiness",
      name: "Szeko Ablak Kft",
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${p.slug}`,
    url: `${SITE_URL}/blog/${p.slug}`,
  };

  const faqSchema = p.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: p.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }
    : null;

  return (
    <main className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <PageHero
        eyebrow="Blog"
        title={p.title}
        subtitle={p.excerpt}
        image={heroImage}
        crumbs={[
          { label: "Főoldal", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: p.title, href: `/blog/${p.slug}` },
        ]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-px mx-auto max-w-3xl">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink-soft">{p.intro}</p>
          </Reveal>

          <div className="mt-14 flex flex-col gap-10">
            {p.body.map((b) => (
              <Reveal key={b.heading}>
                <h2 className="text-2xl font-medium tracking-tight text-ink lg:text-3xl">
                  {b.heading}
                </h2>
                <p className="mt-3 leading-relaxed text-ink-soft">{b.text}</p>
              </Reveal>
            ))}
          </div>

          {s && (
            <Reveal className="mt-14 rounded-2xl bg-surface px-6 py-8">
              <p className="text-sm font-medium uppercase tracking-wider text-brand">
                Kapcsolódó szolgáltatás
              </p>
              <h2 className="mt-3 text-xl font-medium tracking-tight text-ink">
                {s.name} Baján és Bács-Kiskun megyében
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{s.areaText}</p>
              <Link
                href={`/szolgaltatasok/${s.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-brand transition-colors hover:text-brand-dark"
              >
                Részletek a(z) {s.name.toLowerCase()} szolgáltatásról
                <span aria-hidden>→</span>
              </Link>
            </Reveal>
          )}
        </div>
      </section>

      {p.faqs.length > 0 && (
        <FAQSection
          eyebrow="GYIK"
          title="Amit erről a témáról kérdeznek."
          faqs={p.faqs}
          includeSchema={false}
        />
      )}

      <PageCTA
        title={p.ctaTitle}
        text="Töltse ki az űrlapot, vagy hívjon minket — 1-2 munkanapon belül tételes ajánlattal jelentkezünk."
      />
    </main>
  );
}
