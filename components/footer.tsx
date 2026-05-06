import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Find a Home': [
      { name: 'Search Properties', href: '/properties' },
      { name: 'Buy a Home', href: '/properties?mode=buy' },
      { name: 'Rent a Home', href: '/properties?mode=rent' },
      { name: 'Mortgage Calculator', href: '/mortgages/calculator' },
    ],
    'Owners': [
      { name: 'Free Valuation', href: '/evaluation' },
      { name: 'Selling Guide', href: '/selling/why-choose-us' },
      { name: 'Lettings Services', href: '/landlords/lettings-services' },
      { name: 'Investors & Developers', href: '/services/investors' },
    ],
    Company: [
      { name: 'Meet The Team', href: '/about/team' },
      { name: 'Our Accreditation', href: '/about/accreditation' },
      { name: 'Latest Blogs', href: '/about/blogs' },
      { name: 'Mortgage Advisor', href: '/mortgages/advisor' },
    ],
    Support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Maintenance Issue', href: '/about/Maintenance' },
      { name: 'Opening Hours', href: '/about/opening-hours' },
      { name: 'General Enquiries', href: '/about/Enquiries' },
    ],
  };

  const portals = [
    { name: 'Rightmove', src: '/logos/rightmove.png' },
    { name: 'Zoopla', src: '/logos/zoopla.png' },
    { name: 'OnTheMarket', src: '/logos/onthemarket.png' },
    { name: 'Gumtree', src: '/logos/gumtree.png' },
    { name: 'SpareRoom', src: '/logos/spareroom.png' },
  ];

  const compliance = [
    { name: 'PRS', src: '/logos/prs.png' },
    { name: 'My Deposits', src: '/logos/mydeposits.png' },
    { name: 'Client Money Protect', src: '/logos/cmp.png' },
  ];

  return (
    <footer className="!bg-stone-100 border-t border-gray-200/50 pt-20 pb-10 group/footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Branding and Links */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-y-12 gap-x-8 lg:gap-x-12 mb-16 items-start">
          <div className="col-span-2">
            <Link href="/" className="mb-6 block">
              <Image src="/logo.png" alt="IndoLettings Logo" width={180} height={50} className="h-auto w-auto" priority />
            </Link>
            <p className="text-gray-500 mb-6 max-w-xs leading-relaxed text-sm">
              Your trusted partner in property management and real estate. We combine local expertise with modern technology.
            </p>
            <div className="flex gap-4 mb-8">
              <a href="https://instagram.com/indolettings" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white border border-gray-200 text-gray-400 hover:text-red-600 hover:border-red-600 hover:bg-red-50 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
            <div className="space-y-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-500 hover:text-red-600 transition-colors">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <span className="text-sm">Unit 6, 234 - 236, Whitechapel Rd, London E1 1BJ</span>
              </a>
              <a href="mailto:info@indolettings.co.uk" className="flex items-center gap-3 text-gray-500 hover:text-red-600 transition-colors">
                <Mail size={18} className="shrink-0" />
                <span className="text-sm">info@indolettings.co.uk</span>
              </a>
              <a href="tel:02078707966" className="flex items-center gap-3 text-gray-500 hover:text-red-600 transition-colors">
                <Phone size={18} className="shrink-0" />
                <span className="text-sm">0207 870 7966</span>
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h4 className="font-bold text-gray-900 mb-6 uppercase text-[10px] tracking-widest">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-500 hover:text-red-600 transition-colors text-sm">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section: Divided Logos */}
        <div className="py-10 border-t border-gray-200/30">
          {/* Portals Row */}
          <div className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-6 text-center lg:text-left font-bold">Featured On</p>
            <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 transition-all duration-700 grayscale opacity-60 group-hover/footer:grayscale-0 group-hover/footer:opacity-100">
              {portals.map((item) => (
                <Image key={item.name} src={item.src} alt={item.name} width={120} height={40} className="h-6 w-auto object-contain hover:scale-110 transition-transform" />
              ))}
            </div>
          </div>

          {/* Compliance Row */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-6 text-center lg:text-left font-bold">Professional Affiliations</p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-12 transition-all duration-700 grayscale opacity-60 group-hover/footer:grayscale-0 group-hover/footer:opacity-100">
              {compliance.map((item) => {
                const isWhiteLogo = item.src.includes('cmp.png') || item.src.includes('mydeposits.png');
                return (
                  <Image 
                    key={item.name} 
                    src={item.src} 
                    alt={item.name} 
                    width={100} 
                    height={40} 
                    className={`h-8 w-auto object-contain transition-all duration-500 ${
                      isWhiteLogo 
                        ? 'invert brightness-0 group-hover/footer:invert-0 group-hover/footer:brightness-100' 
                        : 'hover:scale-110'
                    }`} 
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 border-t border-gray-200/50 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-gray-400 text-xs text-center md:text-left">
            © {currentYear} IndoLettings. All rights reserved. Registered in England & Wales.
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400 font-medium">
            <Link href="/privacy" className="hover:text-red-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-red-600 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-red-600 transition-colors">Cookie Settings</Link>
            <Link href="/sitemap" className="hover:text-red-600 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;