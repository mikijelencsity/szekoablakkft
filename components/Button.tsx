import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "onDark";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[15px] font-medium transition-all duration-300 ease-out";

  const styles = {
    primary:
      "bg-brand text-white hover:bg-brand-dark hover:shadow-[0_8px_30px_-6px_rgba(36,87,255,0.5)] hover:-translate-y-0.5",
    ghost:
      "bg-white/90 text-ink border border-black/10 hover:bg-white hover:-translate-y-0.5",
    onDark:
      "bg-white text-ink hover:bg-brand hover:text-white hover:-translate-y-0.5",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
