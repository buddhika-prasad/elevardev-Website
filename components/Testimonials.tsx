"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Client Name",
    role: "Company Name",
    quote: "ElevarDev's solutions completely transformed our operations. The custom software is robust, scalable, and their team provides exceptional support. Highly recommended!",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    name: "Client Name",
    role: "Company Name",
    quote: "We needed a custom application to handle our growing business, and ElevarDev delivered beyond expectations. The system is intuitive, well-designed, and their development process was transparent throughout.",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
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

      // Testimonials animation - smooth fade in
      if (testimonialsRef.current) {
        const testimonials = gsap.utils.toArray(testimonialsRef.current.children);
        
        testimonials.forEach((testimonial, index) => {
          const testimonialElement = testimonial as HTMLElement;
          
          gsap.set(testimonialElement, {
            willChange: "transform, opacity",
            force3D: true,
            y: 40,
            opacity: 0,
          });

          gsap.to(testimonialElement, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: testimonialElement,
              start: "top 85%",
              toggleActions: "play none none none",
              markers: false,
            },
            delay: index * 0.12,
            onComplete: () => {
              gsap.set(testimonialElement, { willChange: "auto" });
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
      id="testimonials"
      className="relative overflow-hidden py-32 md:py-40"
      style={{ 
        backgroundColor: "#F8FAFC",
        backgroundImage: "radial-gradient(circle at 20% 80%, rgba(129, 140, 248, 0.08) 0%, transparent 50%)"
      }}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-20 md:mb-32">
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4"
          >
            What Our <span className="gradient-text">Partners Say</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            See Our Solutions in Action
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={testimonialsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative p-8 md:p-10 rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:border-[var(--accent-indigo)]/30 hover:shadow-2xl`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[var(--accent-indigo)]/20">
                <Quote className="h-12 w-12" />
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8 relative z-10 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="relative z-10">
                <div className="h-px bg-gradient-to-r from-[var(--accent-indigo)] to-transparent mb-4" />
                <div className="font-semibold text-gray-900 text-lg">
                  {testimonial.name}
                </div>
                <div className="text-gray-600 text-sm">
                  {testimonial.role}
                </div>
              </div>

              {/* Subtle gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none`}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 text-center">
          <div className="inline-block px-8 py-6 rounded-2xl border border-gray-200 bg-white shadow-lg">
            <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">150+</div>
            <div className="text-lg text-gray-700">Successful projects delivered</div>
          </div>
        </div>
      </div>
    </section>
  );
}
