"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef, type ReactNode } from "react";
import { useScrollRefs } from "@/components/scroll/ScrollProvider";

function canvasOpacity(progress: number): number {
  if (progress < 0.14) return 1 - progress * 0.35;
  if (progress >= 0.36 && progress <= 0.62) return 0.92;
  if (progress >= 0.7 && progress <= 0.88) return 0.95;
  if (progress > 0.14 && progress < 0.36) return Math.max(0, 1 - (progress - 0.14) * 4);
  if (progress > 0.62 && progress < 0.7) return Math.max(0, 1 - (progress - 0.62) * 8);
  if (progress > 0.88) return Math.max(0, 1 - (progress - 0.88) * 6);
  return 0;
}

export function CanvasLayer({ children }: { children: ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollRef, limitRef } = useScrollRefs();

  useLayoutEffect(() => {
    const update = () => {
      const limit = limitRef.current || 1;
      const p = scrollRef.current / limit;
      if (wrapRef.current) {
        wrapRef.current.style.opacity = String(canvasOpacity(p));
      }
    };

    gsap.ticker.add(update);
    update();
    return () => gsap.ticker.remove(update);
  }, [scrollRef, limitRef]);

  return (
    <div ref={wrapRef} className="pointer-events-none fixed inset-0 z-[5]">
      {children}
    </div>
  );
}
