  "use client";

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
  { name: 'The Property Ombudsman', src: '/logos/prs.png' },
  { name: 'My Deposits', src: '/logos/mydeposits.png',isWhite:true },
  { name: 'Client Money Protect', src: '/logos/cmp.png', isWhite: true }, // Added flag
  { name: 'TDS', src: '/logos/tds.png', isSmall: true },                 // Added flag
  { name: 'Propertymark', src: '/logos/propertymark.png', isSmall: true }, // Added flag
];

    const socialLinks = [
      { name: 'Instagram', href: 'https://instagram.com/indolettings', svg: <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01" /> },
      { name: 'Facebook', href: 'https://facebook.com', svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
      { name: 'Linkedin', href: 'https://linkedin.com', svg: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" /> },
      { name: 'Youtube', href: 'https://youtube.com', svg: <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z M9.75 15.02V8.98L15 12l-5.25 3.02z" /> },
    ];

    return (
      <footer className="bg-[#F8F9FA] border-t border-gray-200 pt-16 pb-10 group/footer">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Top Section */}
          <div className="flex flex-col items-start mb-12">
            <Link href="/" className="mb-6 block">
              <Image src="/logo.png" alt="IndoLettings Logo" width={180} height={50} className="h-auto brightness-0" priority />
            </Link>

            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black hover:text-red-600 hover:border-red-600 shadow-sm transition-all"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social.svg}
                  </svg>
                </a>
              ))}
            </div>

            <p className="text-gray-500 mb-8 max-w-sm text-[15px] leading-relaxed font-medium text-left">
              Your trusted partner in property management and real estate.
            </p>
            
            <div className="flex flex-col gap-4 items-start">
              <a href="https://www.google.com/maps/place//@51.5194418,-0.0599648,17z" className="flex items-start gap-3 text-gray-500 hover:text-red-600 text-sm font-medium">
                <MapPin size={18} className="text-gray-400 shrink-0 mt-1" />
                <span className="flex flex-col leading-relaxed">
                  <span>Unit-6</span>
                  <span>234 - 236, Whitechapel Rd</span>
                  <span>London</span>
                  <span>E1 1BJ</span>
                </span>
              </a>
              <a href="mailto:info@indolettings.co.uk" className="flex items-center gap-3 text-gray-500 hover:text-red-600 text-sm font-medium transition-colors">
                <Mail size={18} className="text-gray-400 shrink-0" />
                <span>info@indolettings.co.uk</span>
              </a>
              <a href="tel:02078707966" className="flex items-center gap-3 text-gray-500 hover:text-red-600 text-sm font-medium transition-colors">
                <Phone size={18} className="text-gray-400 shrink-0" />
                <span>0207 870 7966</span>
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16 text-left">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-extrabold text-gray-900 mb-6 uppercase text-[11px] tracking-[0.15em]">{title}</h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-gray-500 hover:text-red-600 transition-colors text-[14px] font-medium">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Compliance Section */}
          <div className="pt-12 border-t border-gray-200">
            <div className="mb-12">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-8 font-bold text-left">Featured On</p>
              <div className="flex flex-wrap items-center justify-start gap-8 grayscale opacity-60 group-hover/footer:grayscale-0 group-hover/footer:opacity-100 transition-all duration-700">
                {portals.map((item) => (
                  <Image 
                    key={item.name} 
                    src={item.src} 
                    alt={item.name} 
                    width={120} 
                    height={40} 
                    className="h-5 w-auto object-contain" 
                  />
                ))}
              </div>
            </div>

            <div className="text-left">
  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-8 font-bold">
    Professional Affiliations
  </p>
  <div className="flex flex-wrap items-center justify-start gap-10 grayscale opacity-60 group-hover/footer:grayscale-0 group-hover/footer:opacity-100 transition-all duration-700">
    {compliance.map((item) => (
      <div key={item.name} className="flex items-center">
        <Image
          src={item.src}
          alt={item.name}
          width={120}
          height={60}
          className={`
            object-contain transition-all
            ${item.isWhite ? 'brightness-0' : ''} 
            ${item.isSmall ? 'h-19' : 'h-8'}
            w-auto
          `}
        />
      </div>
    ))}
  </div>
</div>
</div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-400 text-[12px]">
            <p className="text-left">© {currentYear} IndoLettings. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-medium">
              <Link href="/privacy" className="hover:text-red-600 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-red-600 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;