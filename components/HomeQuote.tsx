import Reveal from "./Reveal";
import QuoteForm from "./QuoteForm";

const points = [
  "Ingyenes, kötelezettség nélküli helyszíni felmérés",
  "Tételes, átlátható árajánlat rejtett költségek nélkül",
  "Válaszidő általában 1 munkanap",
];

export default function HomeQuote() {
  return (
    <section id="ajanlatkeres" className="bg-brand-tint py-24 lg:py-32">
      <div className="container-px grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-wider text-brand">
            Ajánlatkérés
          </p>
          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-ink lg:text-4xl">
            Kérjen ingyenes árajánlatot
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
            Írja le pár szóban, miben segíthetünk, és pár napon belül tételes
            ajánlattal jelentkezünk. Semmi nyomás, semmi kötelezettség.
          </p>
          <ul className="mt-8 flex flex-col gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-ink">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--brand-blue)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="text-[15px]">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
