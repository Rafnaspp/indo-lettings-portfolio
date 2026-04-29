"use client";
import React, { useState, useEffect } from 'react';
import GlassyNavBar from '@/components/glassyNavBar';
import Footer from '@/components/footer';
import { useParams } from 'next/navigation';
import InfoTemplate from '@/components/info_template';
import DepositInfo from '@/components/services/depositInfo';
import FAQSection from '@/components/FAQsection';
import YieldCalculator from '@/components/yield_calculator'; // Assuming this is still needed for investors
import Link from 'next/link';

// This object maps the slugs to their specific content
interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  features?: string[];
  process?: string[];
  stats?: Record<string, string>;
  cta?: string;
  faqs?: string[];
}

const serviceContent: Record<string, ServiceData> = {
  sale: {
    title: "Property for Sale",
    subtitle: "Achieve the best market price with a targeted, data-backed sales strategy.",
    description:
      "We combine hyper-local expertise with advanced digital marketing to position your property for maximum visibility and value. From pricing intelligence to negotiation, we handle the full lifecycle.",

    features: [
      "Accurate property valuation using market analytics",
      "Professional photography, videography, and virtual tours",
      "Multi-channel marketing (portals, social, email campaigns)",
      "Buyer screening and qualified lead generation",
      "Expert negotiation to maximize final sale price"
    ],

    process: [
      "Initial valuation & strategy planning",
      "Property preparation & media production",
      "Listing launch & targeted promotion",
      "Viewings & buyer qualification",
      "Offer negotiation & closing"
    ],

    stats: {
      avgSaleTime: "21 days",
      successRate: "98%",
      avgPriceAboveMarket: "5%"
    },

    cta: "Get a Free Property Valuation",

    faqs: [
      "How do you determine the right price?",
      "What marketing channels do you use?",
      "How long will it take to sell?"
    ]
  },

  residential: {
    title: "Residential Rent",
    subtitle: "Effortless renting with reliable tenants and zero compliance headaches.",
    description:
      "Whether you're a landlord or tenant, we streamline the rental journey. Our rigorous screening and compliance-first approach ensure security and peace of mind.",

    features: [
      "Tenant sourcing and background verification",
      "Rental price optimization",
      "Legal documentation and compliance handling",
      "Move-in/move-out coordination",
      "Ongoing landlord support"
    ],

    process: [
      "Property listing & tenant outreach",
      "Screening & referencing",
      "Agreement drafting & signing",
      "Move-in support",
      "Ongoing assistance"
    ],

    stats: {
      tenantRetention: "85%",
      avgVacancyPeriod: "7 days"
    },

    cta: "Find a Tenant / Rent a Home",

    faqs: [
      "How do you screen tenants?",
      "What documents are required?",
      "Do you manage disputes?"
    ]
  },

  commercial: {
    title: "Commercial Property",
    subtitle: "Maximize ROI with strategic commercial real estate solutions.",
    description:
      "We specialize in office, retail, and industrial properties with a focus on long-term returns, lease structuring, and asset performance.",

    features: [
      "Market analysis and location strategy",
      "Lease negotiation and structuring",
      "Tenant acquisition for commercial spaces",
      "Investment advisory",
      "Portfolio optimization"
    ],

    process: [
      "Requirement analysis",
      "Market research & site selection",
      "Negotiation & documentation",
      "Transaction closure",
      "Post-deal advisory"
    ],

    stats: {
      avgLeaseValueIncrease: "12%",
      occupancyRate: "92%"
    },

    cta: "Explore Commercial Opportunities",

    faqs: [
      "What types of commercial properties do you handle?",
      "Do you assist with lease negotiations?",
      "Can you help with portfolio growth?"
    ]
  },

  deposit: {
    title: "Deposit Management",
    subtitle: "Secure, compliant, and transparent deposit handling.",
    description:
      "We ensure deposits are protected under approved schemes, reducing disputes and ensuring fairness for both landlords and tenants.",

    features: [
      "Government-approved deposit protection",
      "Transparent documentation and tracking",
      "Dispute resolution support",
      "Compliance with legal frameworks",
      "End-of-tenancy settlement management"
    ],

    process: [
      "Deposit registration",
      "Secure holding & documentation",
      "Monitoring during tenancy",
      "Dispute handling (if any)",
      "Deposit release"
    ],

    stats: {
      disputeResolutionRate: "95%",
      complianceRate: "100%"
    },

    cta: "Secure Your Deposit Today",

    faqs: [
      "Is my deposit legally protected?",
      "How are disputes handled?",
      "When will I get my deposit back?"
    ]
  },

  investors: {
    title: "Investors & Developments",
    subtitle: "Data-driven investment strategies for scalable property wealth.",
    description:
      "We help investors identify high-yield opportunities, including off-market deals and emerging growth zones, backed by strong analytics and local insights.",

    features: [
      "Access to off-market investment opportunities",
      "Yield and ROI analysis",
      "Portfolio diversification strategy",
      "End-to-end property management",
      "Development project advisory"
    ],

    process: [
      "Investment goal assessment",
      "Opportunity sourcing",
      "Financial analysis",
      "Acquisition support",
      "Ongoing portfolio management"
    ],

    stats: {
      avgROI: "15%",
      portfolioGrowth: "2x in 3 years"
    },

    cta: "Start Investing Today",

    faqs: [
      "What returns can I expect?",
      "Do you manage properties post-purchase?",
      "Are there off-market deals available?"
    ]
  }
};

const SingleServicePage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const data = serviceContent[slug];

  const [mode, setMode] = useState<'buy' | 'rent'>(slug === 'sale' ? 'buy' : 'rent'); // Keep mode to determine button text

  // Update filter mode based on the current service slug
  useEffect(() => {
    setMode(slug === 'sale' ? 'buy' : 'rent');
  }, [slug]);

  const onApplyFilters = () => {
    // This function is no longer needed here as PropertyFilter is removed.
    // It's kept as a placeholder if any other logic needs to be triggered.
  };

  // Fallback if slug doesn't exist
  if (!data) return <div className="pt-40 text-center">Service not found.</div>;

  return (
    <>
    <div>
    <GlassyNavBar/>
      <InfoTemplate 
        title={data.title}
        subtitle={data.subtitle}
        content={
          <div className="space-y-12">
            <p className="text-gray-600 text-lg leading-relaxed">{data.description}</p>

            {/* Statistics Dashboard */}
            {data.stats && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-10 border-y border-gray-100">
                {Object.entries(data.stats).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-3xl font-black text-red-600">{value}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Key Features Grid */}
            {data.features && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">What's Included</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                      <span className="text-sm font-medium leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Procedural Steps */}
            {data.process && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900">How It Works</h3>
                <div className="grid grid-cols-1 gap-6">
                  {data.process.map((step, index) => (
                    <div key={index} className="flex gap-6 items-start group">
                      <div className="w-10 h-10 rounded-2xl bg-gray-50 text-gray-400 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center font-bold shrink-0 transition-all duration-300">
                        {index + 1}
                      </div>
                      <div className="pt-2">
                        <p className="text-gray-600 font-medium">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Inject specific components based on the service */}
            {slug === 'deposit' && <DepositInfo />}
            {slug === 'investors' && <YieldCalculator />} {/* Assuming YieldCalculator is still relevant for investors */}
            {(slug === 'sale' || slug === 'residential' || slug === 'commercial') && (
                <div className="pt-10 border-t border-gray-100">
                    <h3 className="text-2xl font-bold mb-6">Explore Properties</h3>
                    <Link href={`/properties?mode=${mode}`} passHref>
                      <button className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors">
                        {`View Properties for ${mode === 'buy' ? 'Sale' : 'Rent'}`}
                      </button>
                    </Link>
                </div>
            )}

            {/* Integrated FAQ Section */}
            {data.faqs && (
              <FAQSection 
                title="Service FAQs" 
                items={data.faqs.map(q => ({ question: q, answer: "Please contact our advisory team for specific details regarding this requirement." }))} 
              />
            )}
          </div>
        }
      />
      
    </div>
    <Footer/>
    </>
  );
};

export default SingleServicePage;
// DELETE THIS FILE AND THE [id] FOLDER. 
// Next.js conflicts with the [slug] folder in the same directory.