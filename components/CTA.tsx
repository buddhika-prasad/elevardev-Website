"use client";

import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Content animation - scale and fade
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-40 relative overflow-hidden"
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid #E2E8F0",
      }}
      aria-labelledby="cta-heading"
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(129, 140, 248, 0.3) 0%, transparent 70%)"
        }}
        aria-hidden="true"
      />
      
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 text-center relative z-10">
        <div ref={contentRef} className="space-y-8 md:space-y-12">
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight"
          >
            Ready to Transform Your <span className="gradient-text">Business?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Stay ahead of the curve. Get the latest updates on software innovation and digital trends.
          </p>
          <Link
            ref={buttonRef}
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--accent-indigo)] to-[var(--accent-cyan)] text-white rounded-lg font-semibold text-sm tracking-tight hover:shadow-lg hover:shadow-[var(--accent-indigo)]/50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--accent-indigo)] focus:ring-offset-2"
            aria-label="Get started with your project"
          >
            Get Started
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}