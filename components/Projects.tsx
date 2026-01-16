"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const projects = [
  {
    title: "Enterprise SaaS",
    description: "Cloud-based solution for enterprise resource management with real-time collaboration.",
    tech: ["Next.js", "Node.js", "AWS"],
  },
  {
    title: "Mobile Commerce",
    description: "Native mobile application for iOS and Android with seamless shopping experience.",
    tech: ["Flutter", "Firebase"],
  },
  {
    title: "Healthcare Platform",
    description: "Secure, HIPAA-compliant platform for healthcare providers to manage patient records.",
    tech: ["React", "Python", "Docker"],
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
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

      if (projectsRef.current) {
        const projectElements = Array.from(projectsRef.current.children);
        projectElements.forEach((project, index) => {
          gsap.fromTo(
            project as HTMLElement,
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: project as HTMLElement,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              delay: index * 0.08,
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
      id="projects"
      className="py-24 md:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <div ref={headingRef} className="mb-16">
          <h2
            id="projects-heading"
            className="text-2xl sm:text-3xl font-normal tracking-tight text-[var(--text-primary)] mb-4"
          >
            Work
          </h2>
        </div>

        <div ref={projectsRef} className="space-y-12">
          {projects.map((project, index) => (
            <div key={project.title} className="border-b border-[var(--border)] pb-12 last:border-0">
              <h3 className="text-xl sm:text-2xl font-normal mb-3 text-[var(--text-primary)] tracking-tight">
                {project.title}
              </h3>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs border border-[var(--border)] rounded text-[var(--text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
