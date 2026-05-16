"use client";

import { brand } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 section-pad pt-8">
      <p className="font-serif-display text-xl tracking-tight text-[var(--ink)] md:text-2xl">
        {brand.name}
      </p>
    </header>
  );
}
