import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importing Next.js Image component
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

  return (
    <footer className="!bg-stone-100 border-t border-gray-200/50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Branding and Links */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-y-12 gap-x-8 lg:gap-x-12 mb-16 items-start">
          
          {/* Brand Column - Takes 2 columns on large screens */}
          <div className="col-span-2">
            <Link href="/" className="mb-6 block">
              <Image 
                src="/logo.png" 
                alt="IndoLettings Logo" 
                width={180} 
                height={50} 
                className="h-auto w-auto"
                priority
              />
            </Link>
            <p className="text-gray-500 mb-8 max-w-xs leading-relaxed text-sm">
              Your trusted partner in property management and real estate. We combine local expertise with modern technology.
            </p>
            {/* Contact Information */}
            <div className="space-y-4">
              <a 
                href="https://www.google.com/maps?sca_esv=a2a26c5991e8083d&output=search&q=Unit+6,+234+-+236,+whitechapel+rd,+London+E1+1BJ&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1QD8TCIDJfGa0vqjN9IHrvHWDsmeORdhBsKKB7YhOFCEnujh40JoXm8mJ1XD2aOLFzvCDdiRYHZvxPRlffyPQahEFPoq7neR61oywFMHCxrccH2HyEryNALG8VWSO5q_B5Xta3xaljfDjjTlFoPNszmmQ_2mqLWaOuE2eIpGVb1Enor5gQ&entry=mc&ved=1t:200715&ictx=111" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-500 hover:text-red-600 transition-colors group"
              >
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <span className="text-sm">Unit 6, 234 - 236, Whitechapel Rd, London E1 1BJ</span>
              </a>
              <a 
                href="mailto:info@indolettings.co.uk" 
                className="flex items-center gap-3 text-gray-500 hover:text-red-600 transition-colors"
              >
                <Mail size={18} className="shrink-0" />
                <span className="text-sm">info@indolettings.co.uk</span>
              </a>
              <a 
                href="tel:02078707966" 
                className="flex items-center gap-3 text-gray-500 hover:text-red-600 transition-colors"
              >
                <Phone size={18} className="shrink-0" />
                <span className="text-sm">0207 870 7966</span>
              </a>
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h4 className="font-bold text-gray-900 mb-6 uppercase text-[10px] tracking-widest">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-500 hover:text-red-600 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="pt-10 border-t border-gray-200/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-xs">
            © {currentYear} IndoLettings. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400">
            <Link href="/" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-gray-900 transition-colors">Cookie Settings</Link>
            <Link href="/" className="hover:text-gray-900 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;