import { useEffect, useRef, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseGSAPOptions {
  scope?: RefObject<HTMLElement>;
  dependencies?: any[];
  revertOnUpdate?: boolean;
}

export function useGSAP(
  callback: (ctx: gsap.Context) => void | (() => void),
  options: UseGSAPOptions = {}
) {
  const { scope, dependencies = [], revertOnUpdate = true } = options;
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cleanup = callback(ctx);
      if (cleanup) {
        return cleanup;
      }
    }, scope);

    ctxRef.current = ctx;

    return () => {
      ctx.revert();
      ctxRef.current = null;
    };
  }, dependencies);

  useEffect(() => {
    if (revertOnUpdate && ctxRef.current) {
      ctxRef.current.revert();
      const ctx = gsap.context(() => {
        callback(ctx);
      }, scope);
      ctxRef.current = ctx;
      return () => ctx.revert();
    }
  }, dependencies);
}


