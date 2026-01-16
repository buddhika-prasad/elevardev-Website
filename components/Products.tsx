"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ArrowRight } from "lucide-react";

const products = [
  {
    category: "Hospitality",
    title: "Restaurant Management System",
    description: "Streamline table reservations, kitchen orders, and billing with our all-in-one restaurant management solution.",
    gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
    borderColor: "border-orange-500/40",
    icon: "🍽️",
  },
  {
    category: "Retail",
    title: "Retail Management Platform",
    description: "Empower your retail business with smart inventory tracking, sales analytics, and lightning-fast checkout.",
    gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
    borderColor: "border-blue-500/40",
    icon: "🛒",
  },
  {
    category: "Enterprise",
    title: "Unified Business Platform",
    description: "Centralize HR, CRM, Accounting, and Payroll into one unified platform for total business control.",
    gradient: "from-cyan-500/20 via-teal-500/20 to-green-500/20",
    borderColor: "border-cyan-500/40",
    icon: "🏢",
  },
  {
    category: "Automotive",
    title: "Workshop Management System",
    description: "Simplify repair scheduling, job cards, and parts inventory with our dedicated automotive workshop system.",
    gradient: "from-yellow-500/20 via-amber-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/40",
    icon: "🚗",
  },
];

export function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
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

      // Products animation - smooth fade in (simplified for performance)
      if (productsRef.current) {
        const products = gsap.utils.toArray(productsRef.current.children);
        
        products.forEach((product, index) => {
          const productElement = product as HTMLElement;
          
          // Enable GPU acceleration
          gsap.set(productElement, {
            willChange: "transform, opacity",
            force3D: true,
          });

          gsap.set(productElement, {
            y: 50,
            opacity: 0,
          });

          gsap.to(productElement, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: productElement,
              start: "top 85%",
              toggleActions: "play none none none",
              markers: false,
            },
            delay: index * 0.1,
            onComplete: () => {
              gsap.set(productElement, { willChange: "auto" });
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
      id="products"
      className="relative overflow-hidden py-32 md:py-40"
      style={{ 
        backgroundColor: "#F1F5F9",
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(129, 140, 248, 0.1) 0%, transparent 70%)"
      }}
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-20 md:mb-32">
          <h2
            id="products-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4"
          >
            Our <span className="gradient-text">Signature Software Suite</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of industry-specific software solutions designed to optimize operations, automate workflows, and accelerate your business growth.
          </p>
        </div>

        {/* Products Grid */}
        <div
          ref={productsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
          style={{ perspective: "1000px" }}
        >
          {products.map((product, index) => (
            <div
              key={product.category}
              className={`group relative p-8 md:p-10 rounded-3xl border-2 ${product.borderColor} bg-white/95 backdrop-blur-sm transition-all duration-500 overflow-hidden shadow-lg`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* White background with subtle gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
                aria-hidden="true"
              />

              {/* Icon */}
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {product.icon}
              </div>

              {/* Category Badge - White */}
              <div className="inline-block px-4 py-2 rounded-full bg-white backdrop-blur-sm border border-gray-200 mb-4 text-sm font-semibold text-gray-900 shadow-sm">
                {product.category}
              </div>

              {/* Content */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 tracking-tight">
                {product.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* CTA */}
              <div className="flex items-center text-[var(--accent-indigo)] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-sm">Learn More</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>

              {/* Shine effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl pointer-events-none"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

