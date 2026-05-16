"use client";

import type { FormEvent } from "react";
import { contact } from "@/lib/content";

const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`;

export function CTASection() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const body = encodeURIComponent(
      `Nome: ${name}\nE-mail: ${email}\n\n${message || contact.whatsappMessage}`,
    );
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent("Protocolo Casa Ritual")}&body=${body}`;
  };

  return (
    <section id="contato" className="section-gap section-pad bg-[var(--cream)] scroll-mt-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="label-tech">Acesso exclusivo</p>
        <h2 className="mt-6 font-serif-display text-[clamp(2rem,4vw,3.25rem)] leading-tight text-[var(--ink)]">
          Para o paciente que não abre mão do resultado
        </h2>
        <p className="mt-5 text-sm text-[var(--stone)]">
          Indicação médica ou contato direto com a equipe clínica.
        </p>

        <form
          className="mx-auto mt-12 flex max-w-md flex-col gap-4 text-left"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            type="text"
            required
            placeholder="Nome completo"
            className="h-12 border-hairline bg-[var(--white)] px-5 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--stone)] focus:border-[var(--gold)]"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="seu@email.com"
            className="h-12 border-hairline bg-[var(--white)] px-5 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--stone)] focus:border-[var(--gold)]"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Conte em poucas linhas seu momento no protocolo (opcional)"
            className="border-hairline bg-[var(--white)] px-5 py-3 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--stone)] focus:border-[var(--gold)]"
          />
          <button type="submit" className="btn-gold py-4">
            Enviar solicitação
          </button>
        </form>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold mt-4 inline-block w-full max-w-md py-4"
        >
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
