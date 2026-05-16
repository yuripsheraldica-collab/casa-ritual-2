"use client";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { CTASection } from "./CTASection";
import { HeroSection } from "./HeroSection";
import { IngredientsSection } from "./IngredientsSection";
import { MacroSection } from "./MacroSection";
import { ManifestoSection } from "./ManifestoSection";
import { ProtocolSection } from "./ProtocolSection";
import { ShopSection } from "./ShopSection";
import { SocialSection } from "./SocialSection";

export function Sections() {
  return (
    <div className="relative z-10 bg-[var(--cream)]">
      <HeroSection />
      <ManifestoSection />
      <IngredientsSection />
      <MacroSection />
      <ProtocolSection />
      <ShopSection />
      <SocialSection />
      <CTASection />
      <SiteFooter />
    </div>
  );
}
