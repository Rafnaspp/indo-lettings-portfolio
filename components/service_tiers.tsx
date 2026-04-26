import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: "Let Only",
    price: "8%",
    desc: "Perfect for landlords who want to manage the day-to-day themselves.",
    features: ["Marketing & Advertising", "Tenant Referencing", "Tenancy Agreement Preparation", "Deposit Registration"]
  },
  {
    name: "Full Management",
    price: "12%",
    recommended: true,
    desc: "Complete peace of mind. We handle everything from rent to repairs.",
    features: ["Everything in Let Only", "Rent Collection & Statements", "Property Inspections", "24/7 Maintenance Handling", "Legal Compliance Support"]
  },
  {
    name: "Guaranteed Rent",
    price: "Fixed",
    desc: "Zero void periods. You get paid even if the property is empty.",
    features: ["Everything in Full Management", "No Void Periods", "Internal Maintenance Included", "No Management Fees"]
  }
];

const ServiceTiers = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Landlord Service Tiers</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Choose the level of support that fits your investment strategy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative p-8 rounded-[32px] bg-white border-2 transition-all ${tier.recommended ? 'border-red-600 shadow-2xl scale-105 z-10' : 'border-gray-100 hover:border-red-100'}`}>
              {tier.recommended && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Recommended
                </span>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-red-600">{tier.price}</span>
                <span className="text-gray-400 text-sm">{tier.price.includes('%') ? 'of monthly rent' : ''}</span>
              </div>
              
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">{tier.desc}</p>
              
              <ul className="space-y-4 mb-10">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                    <div className="mt-1 bg-red-50 rounded-full p-1">
                      <Check size={12} className="text-red-600" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${tier.recommended ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-200' : 'bg-gray-50 text-gray-900 hover:bg-gray-100'}`}>
                Choose {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTiers;