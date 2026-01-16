"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
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
      id="about"
      className="py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <div ref={headingRef} className="mb-12">
          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl font-normal tracking-tight text-[var(--text-primary)] mb-4"
          >
            Why Us
          </h2>
        </div>

        <div ref={contentRef} className="space-y-6">
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            We provide high-quality software applications and services by precisely understanding customer requirements and delivering solutions that meet expectations.
          </p>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Our developers ensure that your project is built on a foundation of robust, future-proof code using modern tech stacks and cutting-edge technology.
          </p>
        </div>
      </div>
    </section>
  );
}
