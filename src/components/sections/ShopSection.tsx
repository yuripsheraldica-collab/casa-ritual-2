"use client";

import Image from "next/image";
import { media } from "@/lib/content";

export function ShopSection() {
  return (
    <section className="section-gap section-pad bg-[var(--cream)]">
      <div className="mx-auto max-w-6xl">
        <p className="label-tech text-[var(--gold)]">Linha</p>
        <h2 className="mt-5 font-serif-display text-[clamp(2.25rem,4vw,3.5rem)] text-[var(--ink)]">
          Protocolos em produto
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {media.products.map((product) => (
            <article
              key={product.name}
              className="group border-hairline bg-[var(--white)] transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden bg-[var(--sand)]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif-display text-2xl text-[var(--ink)]">{product.name}</h3>
                <p className="mt-2 text-sm text-[var(--stone)]">{product.note}</p>
                <p className="mt-6 font-medium tracking-wide text-[var(--gold)]">{product.price}</p>
                <button type="button" className="btn-gold mt-6 px-6 py-3">
                  Solicitar acesso
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
