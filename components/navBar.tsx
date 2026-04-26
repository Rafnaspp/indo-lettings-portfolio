"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { 
      name: 'Our Services', 
      href: '/services', 
      dropdown: [
        { name: 'Sale', href: '/services/sale' },
        { name: 'Residential Rent', href: '/services/residential' },
        { name: 'Commercial Rent', href: '/services/commercial' },
        { name: 'Deposit', href: '/services/deposit' },
        { name: 'Investors & Developments', href: '/services/investors' }
      ] 
    },
    { name: 'Landlords', href: '#', dropdown: [{ name: 'Landlord Guide', href: '/landlords/guide' },
      { name: 'Free Instant Valuation', href: '/landlords/valuation' },
      { name: 'Lettings Guide', href: '/landlords/lettings-guide' },
      { name: 'Landlord FAQs', href: '/landlords/faqs' },
      { name: 'Landlord Fees', href: '/landlords/fees' },
      { name: 'Guaranteed Rent', href: '/landlords/guaranteed-rent' },
      { name: 'Property Management', href: '/landlords/management' },
      { name: 'Lettings Services', href: '/landlords/lettings-services' },
      { name: 'Let Only Service', href: '/landlords/let-only' },
      { name: 'Why Rent With Us?', href: '/landlords/why-us' },] },
    { name: 'Selling', href: '#', dropdown: [
      {name:'Why choose us',href:'/selling/why-choose-us'},
      {name:'Sales Faq',href:'/selling/sales-faq'},
      {name:'Stamp Duty Calculator',href:'/selling/stamp-duty-calculator'},
      {name:'Seller fees',href:'/selling/seller-fees'},
      {name:'Instand Valuation',href:'/selling/instant-valuation'},
      {name:'Find the right Mortgage deal',href:'/selling/find-the-right-mortgage-deal'},
      {name:'Interactive 3-D tour',href:'/selling/interactive-3d-tour'},
      {name:'Seller Property Guides',href:'/selling/seller-property-guides'},
    ] },
    { name: 'Mortgages', href: '#', dropdown: [
      {name:'How Does Mortgage Work?',href:'/mortgages/working'},
      {name:'Our Mortgage Service',href:'/mortgages/service'},
      {name:'Mortgage Calculator',href:'/mortgages/calculator'},
      {name:'Mortgage Adcisor',href:'/mortgages/advisor'},
      {name:'Montgage Guides',href:'/mortgages/guides'},
    ] },
    { name: 'About', href: '#',dropdown:[
      {name:'Contact Us',href:'/about/contact-us'},
      {name:'Register your requirements',href:'/about/register-requirements'},
      {name:'Opening Hours',href:'/about/opening-hours'},
      {name:'Urgent Maintenance Issue',href:'/about/Maintenance'},
      {name:'General Enquiries',href:'/about/Enquiries'},
      {name:'Meet The Team',href:'/about/team'},
      {name:'Accrediation',href:'/about/accreditation'},
      {name:'Blogs',href:'/about/blogs'},
    ] },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-red-600 tracking-tight">
              <img
                src="/logo.png"
                width={180}
                height={180}
                >
                
             </img>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link href={link.href} className="flex items-center text-gray-700 hover:text-red-600 font-medium transition-colors py-2">
                  {link.name}
                  {link.dropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>
                
                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-b-md">
                    {link.dropdown.map((item) => (
                      <Link
                        key={typeof item === 'string' ? item : item.name}
                        href={typeof item === 'string' ? '#' : item.href}
                        className="block px-4 py-3 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600"
                      >
                        {typeof item === 'string' ? item : item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <button className="bg-red-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-red-700 transition-all">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-2xl h-screen overflow-y-auto pb-20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name} className="py-2">
                <Link 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-bold text-gray-900 px-3 py-2 border-l-4 border-red-600 bg-gray-50 mb-2"
                >
                  {link.name}
                </Link>
                {link.dropdown ? (
                  <div className="grid grid-cols-1 gap-1 pl-4">
                    {link.dropdown.map((item) => (
                      <Link
                        key={typeof item === 'string' ? item : item.name}
                        href={typeof item === 'string' ? '#' : item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-base text-gray-600 hover:text-red-600"
                      >
                        {typeof item === 'string' ? item : item.name}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="pt-6 px-3">
              <button className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg">
                Register Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;