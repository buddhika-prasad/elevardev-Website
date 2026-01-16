"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Send, CheckCircle2, Mail } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const pageRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      gsap.set([headingRef.current, formRef.current], { opacity: 1, y: 0 });
      return;
    }

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
          }
        );
      }

      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            delay: 0.1,
          }
        );
      }
    }, pageRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", company: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />
      <section
        ref={pageRef}
        className="pt-32 md:pt-40 pb-32 md:pb-40 px-5 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-4xl mx-auto">
          <div
            ref={headingRef}
            className="mb-16"
          >
            <h1
              id="contact-heading"
              className="text-2xl sm:text-3xl font-normal mb-4 tracking-tight text-[var(--text-primary)]"
            >
              Contact
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Have a project in mind? We'd love to hear from you.
            </p>
          </div>

          <div ref={formRef} className="space-y-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="h-12 w-12 text-[var(--text-primary)] mx-auto mb-4" />
                <h3 className="text-xl font-normal mb-2 text-[var(--text-primary)] tracking-tight">
                  Message Sent
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-normal text-[var(--text-primary)] mb-2"
                  >
                    Name <span className="text-[var(--text-secondary)]" aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded focus:ring-1 focus:ring-[var(--text-primary)] focus:border-[var(--text-primary)] transition-all outline-none text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]"
                    placeholder="Your name"
                    aria-required="true"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-normal text-[var(--text-primary)] mb-2"
                  >
                    Email <span className="text-[var(--text-secondary)]" aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded focus:ring-1 focus:ring-[var(--text-primary)] focus:border-[var(--text-primary)] transition-all outline-none text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]"
                    placeholder="your.email@example.com"
                    aria-required="true"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-normal text-[var(--text-primary)] mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded focus:ring-1 focus:ring-[var(--text-primary)] focus:border-[var(--text-primary)] transition-all outline-none text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]"
                    placeholder="Your company name"
                    autoComplete="organization"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-normal text-[var(--text-primary)] mb-2"
                  >
                    Message <span className="text-[var(--text-secondary)]" aria-label="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded focus:ring-1 focus:ring-[var(--text-primary)] focus:border-[var(--text-primary)] transition-all outline-none resize-none text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] leading-relaxed"
                    placeholder="Tell us about your project..."
                    aria-required="true"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 text-sm text-[var(--text-primary)] border border-[var(--border)] rounded hover:border-[var(--text-primary)] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  aria-label={isSubmitting ? "Sending message" : "Send message"}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[var(--text-primary)] border-t-transparent rounded-full animate-spin" role="status" aria-label="Loading" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            )}

            <div className="pt-8 border-t border-[var(--border)]">
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <a
                  href="mailto:hello@elevardev.com"
                  className="hover:text-[var(--text-primary)] transition-colors duration-200"
                >
                  hello@elevardev.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
