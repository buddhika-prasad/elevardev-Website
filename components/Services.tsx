"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const services = [
  "Web Application Development",
  "Mobile Application Development",
  "Standalone System Development",
  "Research and Development",
  "IoT Application Development",
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
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

      if (listRef.current) {
        const items = Array.from(listRef.current.children);
        items.forEach((item, index) => {
          gsap.fromTo(
            item as HTMLElement,
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item as HTMLElement,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              delay: index * 0.05,
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 md:py-32"
      aria-labelledby="services-heading"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <div ref={headingRef} className="mb-16">
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl font-normal tracking-tight text-[var(--text-primary)] mb-4"
          >
            Services
          </h2>
        </div>

        <ul ref={listRef} className="space-y-3">
          {services.map((service, index) => (
            <li
              key={index}
              className="text-base sm:text-lg text-[var(--text-secondary)]"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
