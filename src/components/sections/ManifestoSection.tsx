"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { LiquidMacroCanvas } from "@/components/canvas/LiquidMacroCanvas";
import { media } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function MacroSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { y: 48, scale: 1.06 },
          {
            y: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          },
        );
      }

      if (copyRef.current) {
        gsap.fromTo(
          copyRef.current,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: copyRef.current,
              start: "top 82%",
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-gap section-pad bg-[var(--white)]">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
        <div ref={copyRef}>
          <p className="label-tech text-[var(--gold)]">Materialidade</p>
          <h2 className="mt-5 font-serif-display text-[clamp(2.25rem,4vw,3.5rem)] leading-tight text-[var(--ink)]">
            Textura em escala clínica
          </h2>
          <p className="mt-6 max-w-md text-[var(--stone)] leading-relaxed">
            Macro do produto: viscosidade, camadas e reflexo. Substitua pelo frasco real em fundo
            creme #F7F4EF com luz lateral quente.
          </p>
        </div>
        <LiquidMacroCanvas />
      </div>

      <div className="mx-auto mt-20 max-w-6xl">
        <div ref={imageRef} className="relative aspect-[21/9] overflow-hidden border-hairline">
          <Image
            src={media.macroImage}
            alt="Frasco premium — placeholder editorial"
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
        <p className="mt-4 text-xs tracking-[0.2em] text-[var(--stone)] uppercase">
          Placeholder · Unsplash — substituir por still do frasco Casa Ritual
        </p>
      </div>
    </section>
  );
}
