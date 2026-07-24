import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import PageCTA from "@/components/PageCTA";
import FAQSection from "@/components/FAQSection";
import Gallery from "@/components/Gallery";
import { services, service } from "@/lib/szolgaltatasok-adat";
import { category, firstSrc } from "@/lib/kepek";

const SITE_URL = "https://szekoablak.hu";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = service(slug);
  if (!s) return {};

  return {
    title: s.seoTitle,
    description: s.metaDescription,
    alternates: { canonical: `/szolgaltatasok/${s.slug}` },
    openGraph: {
      title: `${s.seoTitle} | Szeko Ablak Kft`,
      description: s.metaDescription,
      url: `/szolgaltatasok/${s.slug}`,
    },
    twitter: { title: `${s.seoTitle} | Szeko Ablak Kft`, description: s.metaDescription },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = service(slug);
  if (!s) notFound();

  const cat = category(s.slug);
  const heroImage = firstSrc(s.slug) ?? "/referenciak/ablak/ablak-13.webp";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.name,
    name: `${s.name} — Szeko Ablak Kft`,
    description: s.metaDescription,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Szeko Ablak Kft",
      telephone: ["+36202191858", "+36202194514"],
      url: SITE_URL,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Bács-Kiskun vármegye" },
      { "@type": "City", name: "Baja" },
      { "@type": "City", name: "Kalocsa" },
      { "@type": "City", name: "Kecskemét" },
      { "@type": "City", name: "Sükösd" },
    ],
    url: `${SITE_URL}/szolgaltatasok/${s.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const otherServices = services.filter((o) => o.slug !== s.slug);

  return (
    <main className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow={s.eyebrow}
        title={s.name}
        subtitle={s.heroSubtitle}
        image={heroImage}
        crumbs={[
          { label: "Főoldal", href: "/" },
          { label: "Szolgáltatások", href: "/szolgaltatasok" },
          { label: s.name, href: `/szolgaltatasok/${s.slug}` },
        ]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-px mx-auto max-w-3xl">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink-soft">{s.intro}</p>
          </Reveal>

          <Reveal className="mt-10 grid gap-3 sm:grid-cols-2">
            {s.highlights.map((h) => (
              <div
                key={h}
                className="flex items-start gap-3 rounded-xl bg-surface px-4 py-3 text-[15px] text-ink"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {h}
              </div>
            ))}
          </Reveal>

          <div className="mt-14 flex flex-col gap-10">
            {s.body.map((b) => (
              <Reveal key={b.heading}>
                <h2 className="text-2xl font-medium tracking-tight text-ink lg:text-3xl">
                  {b.heading}
                </h2>
                <p className="mt-3 leading-relaxed text-ink-soft">{b.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 rounded-2xl bg-surface px-6 py-8">
            <h2 className="text-xl font-medium tracking-tight text-ink">
              {s.name} Bács-Kiskun megyében
            </h2>
            <p className="mt-3 leading-relaxed text-ink-soft">{s.areaText}</p>
          </Reveal>
        </div>
      </section>

      {cat && cat.images.length > 0 && (
        <section className="bg-surface py-20 lg:py-28">
          <div className="container-px">
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-wider text-brand">
                Referenciák
              </p>
              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-ink lg:text-4xl">
                Elkészült {s.shortName} munkáink
              </h2>
            </Reveal>
            <div className="mt-10">
              <Gallery images={cat.images.slice(0, 8)} title={s.name} />
            </div>
          </div>
        </section>
      )}

      <FAQSection
        eyebrow={`${s.name} — GYIK`}
        title="Amit erről a szolgáltatásról kérdeznek."
        faqs={s.faqs}
      />

      <section className="bg-white pb-20 lg:pb-28">
        <div className="container-px">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-wider text-brand">
              Más szolgáltatásaink
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {otherServices.map((o) => (
                <Link
                  key={o.slug}
                  href={`/szolgaltatasok/${o.slug}`}
                  className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  {o.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <PageCTA
        title={s.ctaTitle}
        text="Töltse ki az űrlapot, vagy hívjon minket — 1-2 munkanapon belül tételes ajánlattal jelentkezünk."
      />
    </main>
  );
}
