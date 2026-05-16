"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { brand, media } from "@/lib/content";

const HeroShaderCanvas = dynamic(
  () => import("@/components/canvas/HeroShaderCanvas").then((m) => m.HeroShaderCanvas),
  { ssr: false },
);

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showLogo, setShowLogo] = useState(false);
  const [useShader, setUseShader] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setShowLogo(true), 2800);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => setUseShader(true));
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--ink)]">
      {useShader ? (
        <HeroShaderCanvas />
      ) : (
        <>
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover opacity-90"
            autoPlay
            muted
            loop
            playsInline
            poster={media.heroPoster}
            onError={() => setUseShader(true)}
          >
            <source src={media.heroVideo} type="video/mp4" />
          </video>
          <Image
            src={media.heroPoster}
            alt=""
            fill
            className="absolute inset-0 -z-10 object-cover"
            priority
            sizes="100vw"
          />
        </>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-[var(--cream)]/20 via-[var(--ink)]/25 to-[var(--cream)]" />

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-end pb-[18vh] section-pad">
        <div
          className={`text-center transition-all duration-[2s] ease-out ${
            showLogo ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h1 className="font-serif-display text-[clamp(3rem,9vw,6.5rem)] leading-[0.92] text-[var(--cream)]">
            {brand.name}
          </h1>
          <p className="mt-5 font-serif-display text-lg tracking-[0.12em] text-[var(--sand)] md:text-xl">
            {brand.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
