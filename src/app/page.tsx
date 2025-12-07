// src\app\page.tsx
import { Demo } from "@/components/Demo";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { SocialProof } from "@/components/SocialProof";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 selection:bg-primary/20">
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Features />
      <WaitlistForm />
      <Demo />
      <FAQ />
      <Footer />
    </main>
  );
}
