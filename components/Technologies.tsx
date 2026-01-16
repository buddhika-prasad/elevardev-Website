"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Flutter", category: "Mobile" },
  { name: "Kotlin", category: "Mobile" },
  { name: "Swift", category: "Mobile" },
  { name: "Firebase", category: "Backend" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
];

export function Technologies() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (badgesRef.current) {
        const badges = badgesRef.current.children;
        gsap.fromTo(
          badges,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: badgesRef.current,
              start: "top 75%",
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
      className="py-32 md:py-40"
      style={{ 
        backgroundColor: "var(--bg-primary)",
        backgroundImage: "radial-gradient(circle at 50% 0%, rgba(129, 140, 248, 0.04) 0%, transparent 50%)"
      }}
      aria-labelledby="technologies-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div
          ref={headingRef}
          className="text-center mb-20 md:mb-28"
        >
          <h2
            id="technologies-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 tracking-tight text-[var(--text-primary)]"
          >
            Technologies We <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-[1.7] tracking-tight font-light">
            Modern tools and frameworks to build cutting-edge solutions
          </p>
        </div>

        <div ref={badgesRef} className="flex flex-wrap justify-center gap-4 md:gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group px-7 md:px-9 py-3.5 md:py-4.5 glass-card rounded-xl shadow-sm hover:shadow-xl border border-[var(--border)] hover:border-primary-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 will-change-transform cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/10 group-hover:to-accent-500/10 transition-all duration-300 rounded-xl" aria-hidden="true" />
              <span className="relative z-10 text-[15px] md:text-base font-medium text-[var(--text-primary)] tracking-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
