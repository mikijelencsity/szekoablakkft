import Link from "next/link";
import Reveal from "./Reveal";

export default function PageCTA({
  title = "Készen áll a következő projektjére?",
  text = "Kérjen ingyenes, kötelezettség nélküli helyszíni felmérést. Válaszidő általában 1 munkanap.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-surface-dark py-24 text-center text-white lg:py-28">
      <Reveal className="container-px mx-auto max-w-xl">
        <h2 className="text-3xl font-medium leading-tight tracking-tight lg:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-white/70">{text}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/kapcsolat"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-brand hover:text-white"
          >
            Kérjen ingyenes árajánlatot
          </Link>
          <a
            href="tel:+36000000000"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
          >
            +36 00 000 0000
          </a>
        </div>
      </Reveal>
    </section>
  );
}
