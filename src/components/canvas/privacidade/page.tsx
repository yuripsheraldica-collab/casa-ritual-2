import Link from "next/link";
import { brand, contact } from "@/lib/content";

export const metadata = {
  title: `Privacidade — ${brand.name}`,
};

export default function PrivacidadePage() {
  return (
    <main className="section-pad section-gap mx-auto max-w-2xl">
      <Link href="/" className="label-tech text-[var(--gold)]">
        ← Voltar
      </Link>
      <h1 className="mt-8 font-serif-display text-4xl text-[var(--ink)]">Política de privacidade</h1>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-[var(--stone)]">
        <p>
          A {brand.name} trata dados pessoais enviados por formulário ou WhatsApp exclusivamente para
          contato comercial e orientação sobre protocolos capilares, em conformidade com a LGPD.
        </p>
        <p>
          Para exercer seus direitos (acesso, correção ou exclusão), escreva para{" "}
          <a href={`mailto:${contact.email}`} className="text-[var(--ink)] underline">
            {contact.email}
          </a>
          .
        </p>
        <p>Responsável: {contact.company} · CNPJ {contact.cnpj}</p>
      </div>
    </main>
  );
}
