"use client";

import Image from "next/image";
import { brand, media } from "@/lib/content";

export function SocialSection() {
  return (
    <section className="section-gap section-pad border-t border-[var(--sand)] bg-[var(--white)]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="label-tech text-[var(--gold)]">Ciência · credencial</p>
            <h2 className="mt-5 font-serif-display text-[clamp(2rem,3.5vw,3rem)] text-[var(--ink)]">
              Desenvolvido por quem opera
            </h2>
            <p className="mt-6 text-[var(--stone)] leading-relaxed">{brand.authority}</p>
            <p className="mt-4 text-sm text-[var(--stone)]">
              Resultado mensurável. Linguagem técnica. Exclusividade para quem fez o procedimento.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
              {media.testimonials.map((t) => (
                <blockquote
                  key={t.author}
                  className="border-hairline min-w-[min(88vw,420px)] shrink-0 snap-start bg-[var(--cream)] p-8"
                >
                  <p className="font-serif-display text-xl leading-snug text-[var(--ink)]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-8">
                    <p className="text-sm text-[var(--ink)]">{t.author}</p>
                    <p className="mt-1 text-xs tracking-[0.18em] text-[var(--gold)] uppercase">
                      {t.metric}
                    </p>
                  </footer>
                </blockquote>
              ))}
            </div>

            <div className="relative mt-10 aspect-[16/7] overflow-hidden border-hairline">
              <Image
                src={media.clinicImage}
                alt="Ambiente clínico — placeholder"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 700px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
