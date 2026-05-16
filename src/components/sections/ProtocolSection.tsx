"use client";

import Image from "next/image";
import { media } from "@/lib/content";

export function ProtocolSection() {
  return (
    <section className="section-gap section-pad bg-[var(--cream)]">
      <div className="mx-auto max-w-6xl">
        <p className="label-tech text-[var(--gold)]">Protocolo clínico</p>
        <h2 className="mt-5 font-serif-display text-[clamp(2.25rem,4vw,3.5rem)] text-[var(--ink)]">
          Três fases. Uma linha.
        </h2>
        <p className="mt-4 max-w-xl text-[var(--stone)]">
          Formulacao de precisao para couro cabeludo pos-implante. Ativos lentos, sem agressao ao
          foliculo.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {media.protocol.map((step) => (
            <article
              key={step.id}
              className={`flex flex-col overflow-hidden bg-[var(--white)] ${
                step.featured ? "ring-1 ring-[var(--gold)]" : "border-hairline"
              }`}
            >
              <div className="relative aspect-[4/3]">
                <Image src={step.image} alt={step.title} fill className="object-cover" sizes="33vw" />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <p className="label-tech">{step.code}</p>
                <h3 className="mt-3 font-serif-display text-2xl text-[var(--ink)]">{step.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--stone)]">{step.copy}</p>
                <button type="button" className="btn-gold mt-8 w-full py-3">
                  Ver fase
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
