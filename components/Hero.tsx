"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[70vh] flex items-center"
      aria-label="Hero section"
    >
      <div className="w-full max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-32">
        <div ref={contentRef} className="space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.4] tracking-tight text-[var(--text-primary)] max-w-2xl">
            We build reliable digital products for growing businesses.
          </h1>
          
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed">
            Custom software development, web applications, and mobile apps. Serving clients globally from Sri Lanka.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-6 py-3 text-sm text-[var(--text-primary)] border border-[var(--border)] rounded hover:border-[var(--text-primary)] transition-colors duration-200"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
