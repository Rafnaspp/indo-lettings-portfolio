"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import InfoTemplate from '@/components/info_template';
import MortgageCalculator from '@/components/mortgage_calculator';
import GlassyNavBar from '@/components/glassyNavBar';
import Footer from '@/components/footer';
import { Landmark, UserCheck, FileText, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const mortgageContent: any = {
  'working': {
    title: "How Does a Mortgage Work?",
    subtitle: "Breaking down the journey from application to owning your keys.",
    body: "A mortgage is a loan taken out to buy property or land. Most run for 25 years, but the term can be shorter or longer. The loan is 'secured' against the value of your home until it's paid off.",
    icon: <HelpCircle className="text-red-600" size={40} />
  },
  'service': {
    title: "Our Mortgage Service",
    subtitle: "Expert advice tailored to your financial goals.",
    body: "We partner with leading brokers to offer you access to a wide range of mortgage products. Whether you are a first-time buyer, moving home, or remortgaging, our service ensures you get the most competitive rates available.",
    icon: <Landmark className="text-red-600" size={40} />
  },
  'calculator': {
    title: "Mortgage Calculator",
    isCalculator: true
  },
  'advisor': {
    title: "Speak with a Mortgage Advisor",
    subtitle: "Personalized financial guidance for your property journey.",
    body: "Our advisors take the time to understand your circumstances. We help with AIPs (Agreement in Principle), fee structures, and navigating the application process to minimize stress.",
    icon: <UserCheck className="text-red-600" size={40} />
  },
  'guides': {
    title: "Mortgage Guides",
    subtitle: "In-depth resources to help you make informed decisions.",
    body: "From 'Buy-to-Let' basics to 'Fixed vs Variable' rates, our library of guides simplifies the complex world of property finance.",
    icon: <FileText className="text-red-600" size={40} />
  }
};

const MortgageDynamicPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const data = mortgageContent[slug];

  if (!data) return <div className="pt-40 text-center text-gray-400">Page under construction.</div>;

  // Handle the Calculator as a full-page feature
  if (data.isCalculator) {
    return (
      <>
        <GlassyNavBar />
        <div className="pt-10">
          <MortgageCalculator />
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <GlassyNavBar />
      <InfoTemplate 
        title={data.title}
        subtitle={data.subtitle}
        content={
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="p-6 bg-red-50 rounded-[32px]">
                    {data.icon}
                </div>
                <div className="flex-1">
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {data.body}
                    </p>
                    
                    {slug === 'working' && (
                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-4">The 3 Key Pillars:</h4>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex gap-2"><strong>1. Deposit:</strong> Usually 5% to 20% of the property price.</li>
                                <li className="flex gap-2"><strong>2. Interest:</strong> The cost the lender charges you for the loan.</li>
                                <li className="flex gap-2"><strong>3. Term:</strong> The number of years you have to pay it back.</li>
                            </ul>
                        </div>
                    )}

                    {slug === 'advisor' && (
                      <Link href='/contact'>
                        <button className="bg-gray-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-red-600 transition-all">
                            Book a Free Consultation
                        </button>
                        </Link>
                    )}
                </div>
            </div>
          </div>
        }
      />
      <Footer />
    </>
  );
};

export default MortgageDynamicPage;