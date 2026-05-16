"use client";

import { useEffect, useRef, useState } from "react";
import { brand, media } from "@/lib/content";

const FALLBACK_VIDEO =
  "https://assets.mixkit.co/videos/preview/mixkit-barber-cutting-hair-close-up-1208-large.mp4";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setShowLogo(true), 2800);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => undefined);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={media.heroPoster}
        onError={(e) => {
          const el = e.currentTarget;
          if (el.src !== FALLBACK_VIDEO) el.src = FALLBACK_VIDEO;
        }}
      >
        <source src={media.heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[var(--cream)]/30 via-[var(--cream)]/15 to-[var(--cream)]" />

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-end pb-[18vh] section-pad">
        <div
          className={`text-center transition-all duration-[2s] ease-out ${
            showLogo ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h1 className="font-serif-display text-[clamp(3rem,9vw,6.5rem)] leading-[0.92] text-[var(--ink)]">
            {brand.name}
          </h1>
          <p className="mt-5 text-sm tracking-[0.28em] text-[var(--stone)] uppercase">
            {brand.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
