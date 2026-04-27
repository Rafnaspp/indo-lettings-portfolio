"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { name: 'Landlords', href: '#', dropdown: [
      { name: 'Landlord Guide', href: '/landlords/guide' },
      { name: 'Free Instant Valuation', href: '/landlords/valuation' },
      { name: 'Lettings Guide', href: '/landlords/lettings-guide' },
      { name: 'Landlord FAQs', href: '/landlords/faqs' },
      { name: 'Landlord Fees', href: '/landlords/fees' },
      { name: 'Guaranteed Rent', href: '/landlords/guaranteed-rent' },
      { name: 'Property Management', href: '/landlords/management' },
      { name: 'Lettings Services', href: '/landlords/lettings-services' },
      { name: 'Let Only Service', href: '/landlords/let-only' },
      { name: 'Why Rent With Us?', href: '/landlords/why-us' },
    ] },
    { name: 'Selling', href: '#', dropdown: [
      { name: 'Why choose us', href: '/selling/why-choose-us' },
      { name: 'Sales Faq', href: '/selling/sales-faq' },
      { name: 'Stamp Duty Calculator', href: '/selling/stamp-duty-calculator' },
      { name: 'Seller fees', href: '/selling/seller-fees' },
      { name: 'Instant Valuation', href: '/selling/instant-valuation' },
      { name: 'Find the right Mortgage deal', href: '/selling/find-the-right-mortgage-deal' },
      { name: 'Interactive 3-D tour', href: '/selling/interactive-3d-tour' },
      { name: 'Seller Property Guides', href: '/selling/seller-property-guides' },
    ] },
    { name: 'Mortgages', href: '#', dropdown: [
      { name: 'How Does Mortgage Work?', href: '/mortgages/working' },
      { name: 'Our Mortgage Service', href: '/mortgages/service' },
      { name: 'Mortgage Calculator', href: '/mortgages/calculator' },
      { name: 'Mortgage Advisor', href: '/mortgages/advisor' },
      { name: 'Mortgage Guides', href: '/mortgages/guides' },
    ] },
    { name: 'About', href: '#', dropdown: [
      { name: 'Contact Us', href: '/about/contact-us' },
      { name: 'Register requirements', href: '/about/register-requirements' },
      { name: 'Opening Hours', href: '/about/opening-hours' },
      { name: 'Urgent Maintenance', href: '/about/Maintenance' },
      { name: 'General Enquiries', href: '/about/Enquiries' },
      { name: 'Meet The Team', href: '/about/team' },
      { name: 'Accreditation', href: '/about/accreditation' },
      { name: 'Blogs', href: '/about/blogs' },
    ] },
  ];

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? "top-4" : "top-0"}`}>
      {/* Main Container - justify-between only works if Logo, Nav, and Button are direct children */}
      <div className={`transition-all flex justify-between items-center duration-300 ease-in-out mx-auto ${
        isScrolled 
          ? "max-w-7xl w-[92%] bg-white/20 backdrop-blur-sm rounded-full shadow-md py-3 px-10" 
          : "max-w-7xl w-full bg-transparent py-6 px-20"
      }`}>
        
        {/* 1. Logo Area */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className={`h-12 w-auto transition-all duration-300 ${isScrolled ? "" : "brightness-0 invert"}`}
            />
          </Link>
        </div>

        {/* 2. Desktop Navigation Links - Centered or spaced */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link 
                href={link.href} 
                className={`flex items-center font-medium transition-colors py-2 ${
                  isScrolled ? "text-gray-900 hover:text-red-600" : "text-white hover:text-red-200"
                }`}
              >
                {link.name}
                {link.dropdown && <ChevronDown className="ml-1 w-4 h-4 opacity-70" />}
              </Link>
              
              {link.dropdown && (
                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 rounded-2xl overflow-hidden py-2">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-6 py-3 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 3. Action Button - Pushed to the right */}
        {/* <div className="hidden md:block">
          <button className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 ${
            isScrolled 
              ? "bg-red-600 text-white hover:bg-red-700 shadow-md" 
              : "bg-white text-gray-900 hover:bg-gray-100"
          }`}>
            Register
          </button>
        </div> */}

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white fixed inset-0 top-0 z- overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <img src="/logo.png" className="h-10 w-auto" alt="Logo" />
              <button onClick={() => setIsOpen(false)} className="text-gray-900"><X size={32}/></button>
            </div>
            <div className="space-y-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <p className="text-xs font-black text-red-600 uppercase tracking-widest mb-3">{link.name}</p>
                  <div className="grid grid-cols-1 gap-4 pl-2">
                    {link.dropdown?.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-bold text-gray-800"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;