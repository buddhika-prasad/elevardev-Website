"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-sm text-[var(--text-secondary)]">
            © {new Date().getFullYear()} ElevarDev. All rights reserved.
          </div>
          
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
    </footer>
  );
}
