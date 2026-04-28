"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { insights } from '../data/insights';

const GlassyNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { 
      name: 'Find a property', 
      href: '/properties', 
      isMega: true,
      description: "From modern apartments to character country houses, start the journey to your dream home.",
      sections: [
        {
          title: "Find a property",
          links: [
            { name: 'For sale', href: '/properties?mode=buy' },
            { name: 'For rent', href: '/properties?mode=rent' },
          ]
        },
        {
          title: "Property types",
          links: [
            { name: 'New build', href: '/properties?mode=buy&type=new build' },
            { name: 'Cottages', href: '/properties?mode=buy&type=cottages' },
            { name: 'Period homes', href: '/properties?mode=buy&type=period homes' },
            { name: 'Mews', href: '/properties?mode=buy&type=mews' },
            { name: 'Farm houses', href: '/properties?mode=buy&type=farm houses' },
            { name: 'Penthouses', href: '/properties?mode=buy&type=penthouses' },
            { name: 'Conversions', href: '/properties?mode=buy&type=conversions' },
            { name: 'Alpine chalets', href: '/properties?mode=buy&type=alpine chalets' },
          ]
        },
        {
          title: "Top features",
          links: [
            { name: 'Village', href: '/properties?mode=buy&feature=village' },
            { name: 'London commute', href: '/properties?mode=buy&feature=london commute' },
            { name: 'Swimming pool', href: '/properties?mode=buy&feature=swimming pool' },
            { name: 'Coastal', href: '/properties?mode=buy&feature=coastal' },
            { name: 'Accessible', href: '/properties?mode=buy&feature=accessible' },
            { name: 'With land', href: '/properties?mode=buy&feature=with land' },
            { name: 'Thameside', href: '/properties?mode=buy&feature=thameside' },
          ]
        }
      ]
    },
    { 
      name: 'Sell or let', 
      href: '#', 
      isMega: true,
      description: "As local experts with global reach, we’ll help you find the right buyer or tenant for your property.",
      sections: [
        {
          title: "Explore our services",
          links: [
            { name: 'Arrange a valuation', href: '/evaluation' },
            { name: 'Sell with us', href: '/selling/why-choose-us' },
            { name: 'Let with us', href: '/landlords/lettings-services' },
          ]
        },
        {
          title: "Specialist teams",
          links: [
            { name: 'Super prime sales', href: '/properties?mode=buy' },
            { name: 'Country houses and estates', href: '/properties?mode=buy' },
            { name: 'Waterfront homes', href: '/properties?mode=buy&feature=thameside' },
            { name: 'Super-prime lettings', href: '/properties?mode=rent' },
            { name: 'Short lettings', href: '/properties?mode=rent' },
            { name: 'International', href: '/properties' },
          ]
        },
        {
          title: "GET STARTED",
          isCTA: true,
          links: []
        }
      ]
    },
    { 
      name: 'Our services', 
      href: '#', 
      isMega: true,
      description: "From property management to financial services, we offer a complete suite of solutions for all your real estate needs.",
      sections: [
        {
          title: "Property Services",
          links: [
            { name: 'Property for Sale', href: '/services/sale' },
            { name: 'Residential Rent', href: '/services/residential' },
            { name: 'Commercial Property', href: '/services/commercial' },
            { name: 'Deposit Management', href: '/services/deposit' },
            { name: 'Investors & Developments', href: '/services/investors' },
          ]
        }
      ]
    },
    { 
      name: 'Mortgages', 
      href: '#', 
      isMega: true,
      description: "Navigate the mortgage market with confidence. Our experts provide tools and advice to help you secure the best deal.",
      sections: [
        {
          title: "Mortgage Options",
          links: [
            { name: 'How Does Mortgage Work?', href: '/mortgages/working' },
            { name: 'Our Mortgage Service', href: '/mortgages/service' },
            { name: 'Mortgage Calculator', href: '/mortgages/calculator' },
            { name: 'Mortgage Advisor', href: '/mortgages/advisor' },
            { name: 'Mortgage Guides', href: '/mortgages/guides' },
          ]
        }
      ]
    },
    { 
      name: 'About', 
      href: '#', 
      isMega: true,
      description: "Learn about IndoLettings, our commitment to excellence, and our dedicated team of property experts.",
      sections: [
        {
          title: "Company",
          links: [
            { name: 'Contact Us', href: '/contact' },
            { name: 'Register requirements', href: '/about/register-requirements' },
            { name: 'Opening Hours', href: '/about/opening-hours' },
            { name: 'Urgent Maintenance', href: '/about/Maintenance' },
            { name: 'General Enquiries', href: '/about/Enquiries' },
            { name: 'Meet The Team', href: '/about/team' },
            { name: 'Accreditation', href: '/about/accreditation' },
            { name: 'Blogs', href: '/about/blogs' },
          ]
        },
        {
          title: "Recent Insights",
          links: insights.slice(0, 3).map(post => ({ name: post.title, href: post.link }))
        }
      ]
    },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="max-w-7xl w-[92%] bg-white/60 backdrop-blur-xl rounded-full shadow-lg py-3 px-10 border border-white/20 mx-auto flex justify-between items-center">
        
        <div className="flex-shrink-0">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link 
                href={link.href} 
                className="flex items-center font-medium transition-colors py-2 text-gray-900 hover:text-red-600"
              >
                {link.name}
                {link.isMega && <ChevronDown className="ml-1 w-4 h-4 opacity-70" />}
              </Link>
              
              {link.isMega && (
                <div className="fixed left-0 right-0 mt-2 mx-auto max-w-7xl w-[95%] bg-white border border-gray-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 rounded-[40px] overflow-hidden p-12">
                  <div className="grid grid-cols-12 gap-10 p-4">
                    <div className="col-span-4 border-r border-gray-100 pr-10">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{link.name}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{link.description}</p>
                    </div>
                    <div className="col-span-8 grid grid-cols-3 gap-8">
                      {link.sections?.map((section) => (
                        section.isCTA ? (
                          <div key={section.title} className="bg-gray-50 rounded-3xl p-6 flex flex-col justify-between border border-gray-100">
                            <div>
                              <h4 className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-2">{section.title}</h4>
                              <p className="text-sm font-bold text-gray-900 mb-4">Ready to move?</p>
                              <p className="text-xs text-gray-500 mb-6">Get a professional valuation from our local experts.</p>
                            </div>
                            <Link href="/evaluation" className="w-full bg-red-600 text-white text-center py-3 rounded-xl text-sm font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-100">
                              Book your free valuation
                            </Link>
                          </div>
                        ) : (
                        <div key={section.title}>
                          <h4 className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-4">{section.title}</h4>
                          <ul className="space-y-3">
                            {section.links.map((item) => (
                              <li key={item.name}>
                                <Link href={item.href} className="text-sm font-semibold text-gray-600 hover:text-red-600 transition-colors">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white fixed inset-0 top-0 z-50 overflow-y-auto p-6">
          <div className="flex justify-between items-center mb-8">
            <img src="/logo.png" className="h-10 w-auto" alt="Logo" />
            <button onClick={() => setIsOpen(false)} className="text-gray-900"><X size={32}/></button>
          </div>
          <div className="space-y-6">
            {/* Mobile links logic... */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default GlassyNavBar;