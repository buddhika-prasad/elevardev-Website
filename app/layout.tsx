import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#6366F1" },
    { media: "(prefers-color-scheme: dark)", color: "#6366F1" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://elevardev.com"),
  title: {
    default: "ElevarDev - Scalable Digital Products That Elevate Businesses",
    template: "%s | ElevarDev",
  },
  description: "Custom software development, web applications, mobile apps, and SaaS products. Serving clients globally from Sri Lanka. Expert developers delivering scalable solutions.",
  keywords: ["software development", "web development", "mobile app development", "SaaS", "Sri Lanka", "custom software", "Next.js", "React", "Flutter", "Node.js"],
  authors: [{ name: "ElevarDev", url: "https://elevardev.com" }],
  creator: "ElevarDev",
  publisher: "ElevarDev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elevardev.com",
    siteName: "ElevarDev",
    title: "ElevarDev - Scalable Digital Products That Elevate Businesses",
    description: "We build scalable digital products that elevate businesses. Custom software development, web applications, and mobile apps.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ElevarDev - Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ElevarDev - Scalable Digital Products",
    description: "We build scalable digital products that elevate businesses",
    creator: "@elevardev",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://elevardev.com",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

