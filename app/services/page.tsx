import React from 'react';
import { Home, Key, Building2, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const allServices = [
  {
    title: 'Property Sale',
    slug: 'sale',
    desc: 'Expert valuation, professional photography, and strategic marketing to ensure your property sells for the highest possible price.',
    icon: <Home size={32} />,
    features: ['Professional Photography', 'Floorplans & EPC', 'Portal Listing (Rightmove/Zillow)']
  },
  {
    title: 'Residential Rent',
    slug: 'residential',
    desc: 'Connecting quality tenants with high-end homes. We handle referencing, contracts, and move-ins with total efficiency.',
    icon: <Key size={32} />,
    features: ['Tenant Screening', 'Rent Collection', 'Maintenance Handling']
  },
  {
    title: 'Commercial Rent',
    slug: 'commercial',
    desc: 'Specialized services for office, retail, and industrial spaces. We understand the complexities of commercial leases.',
    icon: <Building2 size={32} />,
    features: ['Lease Negotiations', 'Asset Management', 'Strategic Advice']
  },
  {
    title: 'Deposit Protection',
    slug: 'deposit',
    desc: 'Legal compliance is our priority. We manage deposit registrations and disputes via government-approved schemes.',
    icon: <ShieldCheck size={32} />,
    features: ['DPS Registration', 'Compliance Audit', 'End-of-Tenancy Mediation']
  },
  {
    title: 'Investors & Developments',
    slug: 'investors',
    desc: 'Exclusive access to off-market deals and high-yield developments for serious property portfolios.',
    icon: <TrendingUp size={32} />,
    features: ['Yield Analysis', 'Sourcing Deals', 'Portfolio Growth']
  }
];

const ServicesPage = () => {
  return (
    <main className="pt-32 pb-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Comprehensive <span className="text-red-600">Property Solutions.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Whether you are selling a family home, looking for a commercial unit, or building a global investment portfolio, we have the expertise to deliver results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service) => (
            <div key={service.title} className="group bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
              <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>

              <ul className="space-y-3 mb-10">
                {service.features.map(f => (
                  <li key={f} className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> {f}
                  </li>
                ))}
              </ul>

              <Link href={`/services/${service.slug}`} className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-2xl text-gray-900 font-bold group-hover:bg-red-600 group-hover:text-white transition-all">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-24 bg-gray-900 rounded-[50px] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">Not sure which service you need?</h2>
                <p className="text-gray-400 mb-10 max-w-xl mx-auto">Book a free 15-minute consultation with one of our property specialists to discuss your requirements.</p>
                <button className="bg-red-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-900/20">
                    Schedule a Consultation
                </button>
            </div>
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;