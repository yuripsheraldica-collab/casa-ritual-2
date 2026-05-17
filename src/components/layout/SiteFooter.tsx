import Link from "next/link";
import { brand, contact } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--sand)] bg-[var(--white)] section-pad py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div>
          <p className="font-serif-display text-2xl text-[var(--ink)]">{brand.name}</p>
          <p className="mt-3 text-sm text-[var(--stone)]">São Paulo · Brasil</p>
        </div>

        <div className="space-y-2 text-sm text-[var(--stone)]">
          <p>{contact.company}</p>
          <p>CNPJ {contact.cnpj}</p>
          <p>
            <a href={`mailto:${contact.email}`} className="hover:text-[var(--ink)]">
              {contact.email}
            </a>
          </p>
        </div>

        <div className="max-w-sm space-y-3 text-xs leading-relaxed text-[var(--stone)]">
          <p>
            Produto de uso capilar sob orientação médica. Resultados variam conforme protocolo
            individual e indicação clínica.
          </p>
          <Link href="/privacidade" className="underline hover:text-[var(--ink)]">
            Política de privacidade (LGPD)
          </Link>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl text-[10px] tracking-[0.28em] text-[var(--stone)] uppercase">
        © {new Date().getFullYear()} {brand.name}
      </p>
    </footer>
  );
}
