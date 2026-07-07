import Link from "next/link";

export default function PhoneButton() {
  return (
    <Link
      href="tel:+36000000000"
      aria-label="Hívjon minket: +36 00 000 0000"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-brand py-3.5 pl-4 pr-5 text-sm font-semibold text-white shadow-[0_14px_34px_-8px_rgba(36,87,255,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1 .37 1.94.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.87.35 1.81.59 2.81.72A2 2 0 0 1 22 16.92z" />
        </svg>
      </span>
      <span className="tabular-nums">+36 00 000 0000</span>
    </Link>
  );
}
