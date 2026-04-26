"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import InfoTemplate from '@/components/info_template';
import FAQSection from '@/components/FAQsection';
import ServiceTiers from '@/components/service_tiers';
import ValuationHero from '@/components/valuation_hero';
import Navbar from '@/components/navBar';
import Footer from '@/components/footer';

// Content Mapping for Landlord Requirements
const landlordContent: any = {
  'guide': {
    title: "Landlord Guide",
    subtitle: "Your comprehensive roadmap to successful property letting.",
    body: "Navigating the London rental market requires preparation. Our guide covers everything from preparing your property for viewings to understanding your safety obligations and tax responsibilities."
  },
  'valuation': {
    title: "Instant Rental Valuation",
    subtitle: "Get a real-time estimate of your property's rental potential.",
    isValuation: true
  },
  'lettings-guide': {
    title: "Lettings Guide",
    subtitle: "Understanding the letting process from start to finish.",
    body: "A successful tenancy starts with the right preparation. We walk you through the marketing phase, tenant selection, agreement signing, and the move-in process."
  },
  'faqs': {
    title: "Landlord FAQs",
    subtitle: "Quick answers to common property management questions.",
    isFaq: true
  },
  'fees': {
    title: "Landlord Fees",
    subtitle: "Transparent, competitive pricing with no hidden surprises.",
    showTiers: true
  },
  'guaranteed-rent': {
    title: "Guaranteed Rent",
    subtitle: "Total financial security with zero void periods.",
    body: "Our Guaranteed Rent service provides landlords with a fixed monthly income, regardless of whether the property is occupied or the tenant pays. We become your ideal tenant."
  },
  'management': {
    title: "Property Management",
    subtitle: "Hands-off landlordship with our 24/7 management service.",
    showTiers: true,
    body: "Our full management service is designed to take the stress out of being a landlord. We handle everything from emergency repairs to legal compliance."
  },
  'lettings-services': {
    title: "Lettings Services",
    subtitle: "Professional marketing and tenant sourcing solutions.",
    showTiers: true,
    body: "We offer a range of letting services tailored to your level of involvement, ensuring you find high-quality tenants quickly."
  },
  'let-only': {
    title: "Let Only Service",
    subtitle: "We find the tenants, you manage the property.",
    showTiers: true,
    body: "Designed for experienced landlords who want professional marketing and tenant vetting but prefer to handle the day-to-day management themselves."
  },
  'why-us': {
    title: "Why Rent With Us?",
    subtitle: "Discover the IndoLettings difference in property management.",
    body: "We combine high-end studio photography, rigorous tenant screening, and a proactive management approach to protect your investment."
  }
};

const landlordFaqs = [
  { question: "How long does it take to find a tenant?", answer: "On average, we find qualified tenants within 12-14 days through our extensive database." },
  { question: "What happens if a tenant doesn't pay?", answer: "With our Full Management or Guaranteed Rent options, we handle all legal proceedings and rent recovery." }
];

const LandlordDynamicPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const data = landlordContent[slug];

  if (!data) return <div className="pt-40 text-center">Page under construction.</div>;

  // 1. Special Case: Valuation Page
  if (data.isValuation) {
    return (
      <>
        <Navbar />
        <div className="pt-20">
          <ValuationHero />
        </div>
        <Footer />
      </>
    );
  }

  // 2. Standard Content Pages
  return (
    <>
      <Navbar />
      <InfoTemplate 
        title={data.title}
        subtitle={data.subtitle}
        content={
          <div className="space-y-12">
            {/* Main Text Content */}
            {data.body && (
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                {data.body}
              </p>
            )}
            
            {/* FAQ Component Integration */}
            {data.isFaq && (
              <FAQSection items={landlordFaqs} title="Frequently Asked Questions" />
            )}
            
            {/* Pricing Tiers Integration */}
            {data.showTiers && (
              <div className="pt-10 border-t border-gray-100">
                <ServiceTiers />
              </div>
            )}
            
            {/* Custom "Why Us" styling if slug matches */}
            {slug === 'why-us' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                {[
                  { t: "Studio Photography", d: "Professional visuals for every listing." },
                  { t: "Full Compliance", d: "We keep you up to date with UK laws." },
                  { t: "Expert Marketing", d: "Maximum exposure on all major portals." },
                  { t: "24/7 Support", d: "Always here for you and your tenants." }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-red-50 rounded-2xl border border-red-100">
                    <h4 className="font-bold text-gray-900 mb-2">{item.t}</h4>
                    <p className="text-sm text-gray-600">{item.d}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        }
      />
      <Footer />
    </>
  );
};

export default LandlordDynamicPage;