"use client";

import { brand } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--sand)] bg-[var(--cream)]/85 backdrop-blur-md">
      <div className="section-pad flex items-center justify-between py-6 md:py-7">
        <p className="font-serif-display text-2xl tracking-tight text-[var(--ink)] md:text-[1.75rem]">
          {brand.name}
        </p>
        <a href="#contato" className="label-tech text-[var(--gold)] hover:text-[var(--ink)]">
          Contato
        </a>
      </div>
    </header>
  );
}
