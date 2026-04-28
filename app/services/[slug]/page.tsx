"use client";
import React, { useState, useEffect } from 'react';
import GlassyNavBar from '@/components/glassyNavBar';
import Footer from '@/components/footer';
import { useParams } from 'next/navigation';
import InfoTemplate from '@/components/info_template';
import DepositInfo from '@/components/services/depositInfo';
import YieldCalculator from '@/components/yield_calculator';
import PropertyFilter from '@/components/properties/propperty_filter';

// This object maps the slugs to their specific content
const serviceContent: any = {
  'sale': {
    title: "Property for Sale",
    subtitle: "Achieve the best market price with our bespoke sales strategy and global reach.",
    description: "Our sales team combines local expertise with data-driven marketing. We don't just list properties; we sell lifestyles. From professional staging advice to high-end digital tours, we ensure your home stands out."
  },
  'residential': {
    title: "Residential Rent",
    subtitle: "Find the perfect tenant or your next home with our seamless rental process.",
    description: "We bridge the gap between reliable tenants and premium properties. Our residential service includes comprehensive referencing, legal compliance, and smooth move-in coordination."
  },
  'commercial': {
    title: "Commercial Property",
    subtitle: "Strategic solutions for office, retail, and industrial spaces.",
    description: "Commercial real estate requires a different lens. We focus on lease terms, square footage efficiency, and long-term asset value to help businesses and landlords thrive."
  },
  'deposit': {
    title: "Deposit Management",
    subtitle: "Total compliance and protection for your rental security deposits.",
    description: "We take the stress out of deposit legislation. By using government-approved schemes, we protect both landlords and tenants through fair, evidence-based mediation."
  },
  'investors': {
    title: "Investors & Developments",
    subtitle: "High-yield opportunities and portfolio management for the modern investor.",
    description: "Access off-market deals and regeneration hotspots. We provide the data and the boots-on-the-ground management needed to scale your property wealth."
  }
};

const SingleServicePage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const data = serviceContent[slug];

  // State for PropertyFilter
  const [searchQuery, setSearchQuery] = useState('');
  const [mode, setMode] = useState<'buy' | 'rent'>(slug === 'sale' ? 'buy' : 'rent');
  const [type, setType] = useState('all');
  const [beds, setBeds] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Update filter mode based on the current service slug
  useEffect(() => {
    setMode(slug === 'sale' ? 'buy' : 'rent');
  }, [slug]);

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
            
            {/* Inject specific components based on the service */}
            {slug === 'deposit' && <DepositInfo />}
            {slug === 'investors' && <YieldCalculator />}
            {(slug === 'sale' || slug === 'residential' || slug === 'commercial') && (
                <div className="pt-10 border-t border-gray-100">
                    <h3 className="text-2xl font-bold mb-6">Current Listings</h3>
                    <PropertyFilter 
                      searchQuery={searchQuery}
                      setSearchQuery={setSearchQuery}
                      mode={mode}
                      setMode={setMode}
                      type={type}
                      setType={setType}
                      beds={beds}
                      setBeds={setBeds}
                      minPrice={minPrice}
                      setMinPrice={setMinPrice}
                      maxPrice={maxPrice}
                      setMaxPrice={setMaxPrice}
                    />
                    {/* The Property Grid would go here */}
                </div>
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