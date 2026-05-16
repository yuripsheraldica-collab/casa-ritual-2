"use client";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  createContext,
  useContext,
  useLayoutEffect,
  useRef,
  type MutableRefObject,
} from "react";

gsap.registerPlugin(ScrollTrigger);

type ScrollContextValue = {
  scrollRef: MutableRefObject<number>;
  limitRef: MutableRefObject<number>;
};

const ScrollContext = createContext<ScrollContextValue | null>(null);

export function useScrollRefs() {
  const ctx = useContext(ScrollContext);
  if (!ctx) {
    throw new Error("useScrollRefs must be used within ScrollProvider");
  }
  return ctx;
}

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef(0);
  const limitRef = useRef(1);

  useLayoutEffect(() => {
    document.documentElement.classList.add("lenis", "lenis-smooth");

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    lenis.on("scroll", (instance) => {
      scrollRef.current = instance.scroll;
      limitRef.current = instance.limit;
    });

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    const onRefresh = () => lenis.resize();
    ScrollTrigger.addEventListener("refresh", onRefresh);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("load", onLoad);
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      document.documentElement.classList.remove("lenis", "lenis-smooth");
      gsap.ticker.remove(onTick);
      lenis.destroy();
      ScrollTrigger.scrollerProxy(document.documentElement, {});
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollRef, limitRef }}>
      {children}
    </ScrollContext.Provider>
  );
}
