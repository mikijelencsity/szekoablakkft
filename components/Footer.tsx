import Link from "next/link";
import Image from "next/image";

const nav = [
  { label: "Szolgáltatások", href: "/szolgaltatasok" },
  { label: "Rólunk", href: "/rolunk" },
  { label: "Referenciák", href: "/referenciak" },
  { label: "Kapcsolat", href: "/kapcsolat" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-surface-dark text-white"
    >
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="aurora-1 absolute -left-[8%] -top-[30%] h-[120%] w-[46%] rounded-full opacity-50 blur-[60px]"
          style={{
            background:
              "radial-gradient(circle, rgba(36,87,255,0.5), transparent 65%)",
          }}
        />
        <div
          className="aurora-2 absolute -right-[6%] -top-[10%] h-[120%] w-[40%] rounded-full opacity-50 blur-[60px]"
          style={{
            background:
              "radial-gradient(circle, rgba(90,130,255,0.4), transparent 65%)",
          }}
        />
        <div
          className="aurora-3 absolute -bottom-[40%] left-[40%] h-full w-[34%] rounded-full opacity-50 blur-[60px]"
          style={{
            background:
              "radial-gradient(circle, rgba(18,59,181,0.5), transparent 65%)",
          }}
        />
      </div>

      <div className="container-px relative z-10 pb-8 pt-16 lg:pt-20">
        {/* Top CTA */}
        <div className="flex flex-col gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-md text-3xl font-medium leading-tight tracking-tight lg:text-4xl">
            Kezdjük el a projektjét?
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/kapcsolat"
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Kérjen ingyenes árajánlatot
            </Link>
            <a
              href="tel:+36000000000"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
            >
              +36 00 000 0000
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logo.webp"
              alt="Szeko Ablak Kft"
              width={783}
              height={282}
              className="h-8 w-auto"
            />
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-white/50">
              Ablak · Redőny · Felújítás
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-white/50">
              Oldalak
            </p>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-1 text-white/80 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-white/50">
              Elérhetőség
            </p>
            <a
              href="tel:+36000000000"
              className="block py-1 text-white/80 transition-colors hover:text-white"
            >
              +36 00 000 0000
            </a>
            <a
              href="mailto:info@szekoablak.hu"
              className="block py-1 text-white/80 transition-colors hover:text-white"
            >
              info@szekoablak.hu
            </a>
            <p className="py-1 text-white/80">H–P 8:00–17:00</p>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-white/50">
              Kövessen
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-brand"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 22v-8h3l1-4h-4V7.5c0-1 .3-1.5 1.7-1.5H17V2.3C16.5 2.2 15.3 2 14.2 2 11.6 2 10 3.6 10 6.7V10H7v4h3v8z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-brand"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Szeko Ablak Kft. Minden jog fenntartva.
          </span>
          <span>Adatvédelem · ÁSZF</span>
        </div>
      </div>
    </footer>
  );
}
