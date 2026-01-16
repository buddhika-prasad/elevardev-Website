import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <SkipLink />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)]">
        <Navbar />
        <Hero />
        <Services />
        <WhyUs />
        <Projects />
        <Footer />
      </main>
    </>
  );
}

