"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const steps = [
  {
    title: "Agile Development Process",
    description:
      "We use iterative, transparent development cycles, ensuring you are involved at every step and the final product fits your vision perfectly.",
    icon: "🔄",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Scalable & Clean Code",
    description:
      "We build future-proof software using robust architecture that grows with your business, ensuring long-term performance and stability.",
    icon: "⚡",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "24/7 Deployment Support",
    description:
      "Our partnership doesn't end at launch. We provide dedicated maintenance to keep your applications running smoothly around the clock.",
    icon: "🚀",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      if (lineRef.current) {
        lineRef.current.style.strokeDashoffset = "0";
      }
      return;
    }

    const ctx = gsap.context(() => {
      // Heading animation - rotate in
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { rotation: -2, opacity: 0 },
          {
            rotation: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Timeline line draw animation
      if (lineRef.current && timelineRef.current) {
        const lineLength = lineRef.current.getTotalLength();
        lineRef.current.style.strokeDasharray = `${lineLength}`;
        lineRef.current.style.strokeDashoffset = `${lineLength}`;

        gsap.to(lineRef.current, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 75%",
            end: "bottom 25%",
            scrub: true,
          },
        });
      }

      // Step animations - smooth fade in
      if (timelineRef.current) {
        const steps = timelineRef.current.querySelectorAll(".step-item");
        steps.forEach((step, index) => {
          const stepElement = step as HTMLElement;
          gsap.set(stepElement, {
            willChange: "transform, opacity",
            force3D: true,
            y: 40,
            opacity: 0,
          });

          gsap.to(stepElement, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stepElement,
              start: "top 85%",
              toggleActions: "play none none none",
              markers: false,
            },
            delay: index * 0.1,
            onComplete: () => {
              gsap.set(stepElement, { willChange: "auto" });
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-40"
      style={{ 
        backgroundColor: "#F8FAFC",
        backgroundImage: "radial-gradient(circle at 0% 50%, rgba(129, 140, 248, 0.08) 0%, transparent 50%)"
      }}
      aria-labelledby="process-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div ref={headingRef} className="mb-20 md:mb-32 text-center">
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4"
          >
            Streamlined Development, <span className="gradient-text">Exceptional Results</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Our Process
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* SVG Line */}
          <svg
            className="absolute left-8 md:left-12 top-0 bottom-0 w-px hidden md:block"
            aria-hidden="true"
          >
            <line
              ref={lineRef}
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke="url(#gradient)"
              strokeWidth="1"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-indigo)" />
                <stop offset="100%" stopColor="var(--accent-cyan)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className={`step-item relative p-8 rounded-3xl border border-gray-200 bg-white shadow-lg hover:border-[var(--accent-indigo)]/30 transition-all duration-500 transform hover:scale-105`}
            >
              {/* Subtle gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-10 rounded-3xl`}
                aria-hidden="true"
              />
              
              {/* Icon */}
              <div className="text-5xl mb-6 transform hover:scale-110 transition-transform duration-300 relative z-10">
                {step.icon}
              </div>

              {/* Step Content */}
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 tracking-tight relative z-10">
                {step.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed relative z-10">
                {step.description}
              </p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}