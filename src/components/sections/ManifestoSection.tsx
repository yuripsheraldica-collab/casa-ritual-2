"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { manifestoLines } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function ManifestoSection() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>("[data-word]", root);
      gsap.set(words, { opacity: 0.12, y: 24 });

      gsap.to(words, {
        opacity: 1,
        y: 0,
        stagger: 0.035,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 0.6,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="section-gap section-pad bg-[var(--cream)]"
      aria-label="Manifesto"
    >
      <div className="mx-auto max-w-5xl space-y-10 md:space-y-14">
        {manifestoLines.map((line) => (
          <p
            key={line}
            className="font-serif-display text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.15] text-[var(--ink)]"
          >
            {line.split(" ").map((word, i) => (
              <span key={`${line}-${i}`} className="mr-[0.28em] inline-block">
                <span data-word className="inline-block">
                  {word}
                </span>
              </span>
            ))}
          </p>
        ))}
      </div>
    </section>
  );
}
