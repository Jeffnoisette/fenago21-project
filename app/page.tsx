import { Suspense, ReactNode } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueSnapshot from "@/components/ValueSnapshot";
import Problem from "@/components/Problem";
import ProductShowcase from "@/components/ProductShowcase";
import MidPageCTA from "@/components/MidPageCTA";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import SocialProofB2C from "@/components/SocialProofB2C";
import SpecialOffer from "@/components/SpecialOffer";
import FAQB2C from "@/components/FAQB2C";
import CTA from "@/components/CTA";
import StickyCTA from "@/components/StickyCTA";
import MobileOptimizations from "@/components/MobileOptimizations";
import ScrollAnimations from "@/components/ScrollAnimations";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

// Add metadata for SEO
export const metadata: Metadata = {
  title: 'FeNAgO - Agentic AI SaaS Platform Template',
  description: 'The complete platform for building agentic AI-powered SaaS products—ideal for students, developers, startups, and entrepreneurs looking to innovate rapidly. In the near future, every traditional SaaS application will inevitably be surpassed by an Agentic SaaS solution, redefining the competitive landscape.',
  keywords: 'agentic AI, SaaS template, AI platform, DrLee, AI development, FeNAgO, AI startup',
};

export default function Home(): JSX.Element {
  return (
    <>
      {/* Top Banner Offer */}
      <SpecialOffer 
        variant="limited-time"
        position="banner"
      />
      
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <main>
        {/* FeNAgO - The complete platform for building agentic AI-powered SaaS products */}
        <Hero />
        <ValueSnapshot />
        <Problem />
        <ProductShowcase />
        
        {/* Mid-page CTA after seeing the product demo */}
        <MidPageCTA 
          title="Convinced? Let's Build Your Dream SaaS"
          description="You've seen how it works. Now experience the transformation yourself."
          buttonText="🎯 Start My Success Story"
          variant="default"
        />
        
        <FeaturesAccordion />
        
        {/* Urgent CTA before pricing */}
        <MidPageCTA 
          title="Don't Let Another Day Pass"
          description="While you're thinking, your competitors are building. Start today and launch before they do."
          buttonText="⚡ Beat the Competition"
          variant="urgent"
        />
        
        <Pricing />
        <SocialProofB2C />
        
        {/* Minimal CTA after social proof */}
        <MidPageCTA 
          title="Join the Success Stories"
          description="Be the next creator to transform their idea into reality"
          buttonText="🌟 Start Building Today"
          variant="minimal"
          showStats={false}
        />
        
        {/* Special Offer with Urgency */}
        <SpecialOffer 
          variant="early-bird"
          position="section"
        />
        
        <FAQB2C />
        <CTA />
      </main>
      
      {/* Mobile optimizations and scroll animations */}
      <MobileOptimizations />
      <ScrollAnimations />
      
      {/* Sticky CTA that appears on scroll */}
      <StickyCTA />
      
      <Footer />
    </>
  );
}
