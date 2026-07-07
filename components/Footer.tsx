import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white py-14 text-sm text-ink-soft">
      <div className="container-px flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <Image
            src="/logo.webp"
            alt="Szeko Ablak Kft"
            width={783}
            height={282}
            className="h-auto w-44"
          />
          <p className="mt-4 max-w-xs">
            Ablak, redőny, felújítás és építőipari munkák otthonokra a régióban.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-medium text-ink">Kapcsolat</p>
          <a href="tel:+36000000000" className="hover:text-brand">
            +36 00 000 0000
          </a>
          <a href="mailto:info@szekoablak.hu" className="hover:text-brand">
            info@szekoablak.hu
          </a>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-medium text-ink">Oldal</p>
          <Link href="#services" className="hover:text-brand">
            Szolgáltatások
          </Link>
          <Link href="#projects" className="hover:text-brand">
            Referenciák
          </Link>
          <Link href="#faq" className="hover:text-brand">
            GYIK
          </Link>
          <Link href="#cta" className="hover:text-brand">
            Kérjen árajánlatot
          </Link>
        </div>
      </div>

      <div className="container-px mt-12 border-t border-black/10 pt-6 text-xs">
        © {new Date().getFullYear()} Szeko Ablak Kft. Minden jog fenntartva.
      </div>
    </footer>
  );
}
