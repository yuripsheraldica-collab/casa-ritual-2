"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { media } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function IngredientsSection() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-ingredient]", root);
      gsap.set(cards, { opacity: 0, x: 48 });

      ScrollTrigger.batch(cards, {
        start: "top 85%",
        onEnter: (elements) => {
          gsap.to(elements, {
            opacity: 1,
            x: 0,
            duration: 1.1,
            stagger: 0.14,
            ease: "power3.out",
          });
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-gap section-pad bg-[var(--cream)]">
      <div className="mx-auto max-w-6xl">
        <p className="label-tech text-[var(--gold)]">Ativos · formulação</p>
        <h2 className="mt-5 font-serif-display text-[clamp(2.25rem,4vw,3.5rem)] text-[var(--ink)]">
          O que entra na fórmula
        </h2>

        <div ref={rootRef} className="mt-16 space-y-0">
          {media.ingredients.map((item, idx) => (
            <article
              key={item.name}
              data-ingredient
              className="border-hairline grid gap-8 border-t bg-[var(--white)] p-8 md:grid-cols-[1fr_280px] md:items-center md:gap-12 md:p-10"
            >
              <div>
                <p className="label-tech">{String(idx + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-serif-display text-3xl text-[var(--ink)]">{item.name}</h3>
                <p className="mt-3 text-[var(--ink)]">{item.role}</p>
                <p className="mt-2 text-sm text-[var(--stone)]">{item.origin}</p>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--sand)]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
