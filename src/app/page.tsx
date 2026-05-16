"use client";

import dynamic from "next/dynamic";
import { CanvasLayer } from "@/components/canvas/CanvasLayer";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ScrollProvider } from "@/components/scroll/ScrollProvider";
import { Sections } from "@/components/sections/Sections";

const FixedExperience = dynamic(
  () => import("@/components/canvas/FixedExperience").then((m) => m.FixedExperience),
  { ssr: false },
);

export default function Home() {
  return (
    <ScrollProvider>
      <SiteHeader />
      <CanvasLayer>
        <FixedExperience />
      </CanvasLayer>
      <Sections />
    </ScrollProvider>
  );
}
