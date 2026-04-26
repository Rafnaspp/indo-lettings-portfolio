"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import InfoTemplate from '@/components/info_template';
import FAQSection from '@/components/FAQsection';
import ValuationHero from '@/components/valuation_hero';
import MortgageCalculator from '@/components/mortgage_calculator';
import Navbar from '@/components/navBar';
import Footer from '@/components/footer';
import { Box, Camera, Zap, Award } from 'lucide-react';

const sellingContent: any = {
  'why-choose-us': {
    title: "Why sell with IndoLettings?",
    subtitle: "Premium marketing and expert negotiation to unlock your property's value.",
    body: "We combine high-end studio photography with targeted digital marketing to ensure your property reaches the right buyers. Our agents are local experts dedicated to achieving the best possible price for your home."
  },
  'sales-faq': {
    title: "Sales FAQs",
    subtitle: "Common questions about the selling process, timelines, and legalities.",
    isFaq: true
  },
  'stamp-duty-calculator': {
    title: "Stamp Duty Calculator",
    subtitle: "Calculate the Stamp Duty Land Tax (SDLT) for your next home purchase.",
    isStampDuty: true
  },
  'seller-fees': {
    title: "Seller Fees",
    subtitle: "Simple, transparent commission structures.",
    body: "We operate on a 'No Sale, No Fee' basis. Our standard commission includes professional photography, floorplans, and listings on all major portals with no hidden marketing costs."
  },
  'instant-valuation': {
    title: "Instant Sales Valuation",
    isValuation: true
  },
  'find-the-right-mortgage-deal': {
    title: "Find the Right Mortgage",
    subtitle: "Compare rates and see what you can borrow with our integrated tools.",
    isMortgage: true
  },
  'interactive-3d-tour': {
    title: "Interactive 3D Tours",
    subtitle: "Give buyers a virtual walkthrough of your home from anywhere in the world.",
    is3D: true
  },
  'seller-property-guides': {
    title: "Seller Property Guides",
    subtitle: "Expert advice on preparing your home for a successful sale.",
    body: "Download our step-by-step guides on everything from 'Kerb Appeal' to navigating the legal exchange of contracts."
  }
};

const salesFaqs = [
  { question: "How long does a typical sale take?", answer: "In the current market, it takes an average of 12 weeks from offer acceptance to completion." },
  { question: "Do I need a solicitor before I list?", answer: "While not required immediately, having a solicitor ready can speed up the process once an offer is accepted." }
];

const SellingDynamicPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const data = sellingContent[slug];

  if (!data) return <div className="pt-40 text-center uppercase tracking-widest text-gray-400">Page Coming Soon</div>;

  // Handle Full Page Components
  if (data.isValuation) return <> <Navbar/> <ValuationHero /> <Footer/> </>;
  if (data.isMortgage) return <> <Navbar/> <MortgageCalculator /> <Footer/> </>;

  return (
    <>
      <Navbar/>
      <InfoTemplate 
        title={data.title}
        subtitle={data.subtitle}
        content={
          <div className="space-y-12">
            {data.body && <p className="text-gray-600 text-lg leading-relaxed">{data.body}</p>}
            
            {/* Stamp Duty Logic placeholder */}
            {data.isStampDuty && (
              <div className="p-10 bg-gray-900 rounded-[40px] text-white">
                <h4 className="text-xl font-bold mb-4">Stamp Duty Calculator Coming Soon</h4>
                <p className="text-gray-400">We are integrating the latest HMRC tax rates into this tool.</p>
              </div>
            )}

            {/* 3D Tour Showcase */}
            {data.is3D && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-video bg-gray-100 rounded-3xl flex items-center justify-center border-2 border-dashed border-gray-200">
                    <Box size={48} className="text-gray-300" />
                </div>
                <div className="space-y-4 justify-center flex flex-col">
                    <div className="flex gap-3 items-center text-red-600 font-bold"><Camera size={20}/> Matterport Integration</div>
                    <p className="text-gray-500 text-sm">We provide high-fidelity 3D walkthroughs for all our premium listings, allowing remote buyers to explore every corner of the property.</p>
                </div>
              </div>
            )}

            {data.isFaq && <FAQSection items={salesFaqs} title="Selling Questions" />}

            {slug === 'why-choose-us' && (
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 border border-gray-100 rounded-2xl flex items-center gap-4">
                    <div className="p-3 bg-red-50 text-red-600 rounded-xl"><Zap size={20}/></div>
                    <span className="font-bold text-sm">Fast Turnaround</span>
                  </div>
                  <div className="p-6 border border-gray-100 rounded-2xl flex items-center gap-4">
                    <div className="p-3 bg-red-50 text-red-600 rounded-xl"><Award size={20}/></div>
                    <span className="font-bold text-sm">Award Winning</span>
                  </div>
               </div>
            )}
          </div>
        }
      />
      <Footer/>
    </>
  );
};

export default SellingDynamicPage;