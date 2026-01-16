"use client";

import Link from "next/link";

interface LogoProps {
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ 
  className = "", 
  href = "/",
  size = "md"
}: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const LogoContent = () => (
    <span className={`font-normal tracking-tight ${sizeClasses[size]} ${className}`}>
      ElevarDev
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded transition-colors hover:opacity-70 duration-200"
        aria-label="ElevarDev home"
      >
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
}
