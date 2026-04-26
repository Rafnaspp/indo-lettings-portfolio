import React from 'react';
import { Target, Clock4, KeyRound, CheckCircle } from 'lucide-react';

const blocks = [
  {
    id: 1,
    image: "/images/cta-living-room.png", // Replace with your generated image path
    title: "Your next chapter starts with us.",
    description: "Whether you're moving in or moving up, we make the journey effortless. Access exclusive listings, 24/7 maintenance support, and flexible viewing times.",
    buttonText: "Find Your Home",
    icon: KeyRound,
    reverse: false, // Standard layout: Text on left, Image on right
  },
  {
    id: 2,
    image: "/images/cta-portfolio.png", // Replace with your generated image path
    title: "Maximize your portfolio's potential.",
    description: "Unlock high-yield investment opportunities and expert asset management. We provide data-driven insights to minimize vacancies and maximize ROI for landlords.",
    buttonText: "Maximize ROI",
    icon: Target,
    reverse: true, // Reversed layout: Image on left, Text on right
  },
];

const features = [
  "Advanced Search Matching",
  "Transparent Fees & Accounting",
  "Digital Contract Management",
  "24/7 Dedicated Support"
];

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        {blocks.map((block) => (
          <div 
            key={block.id} 
            className={`grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center ${
              block.reverse ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Content Side */}
            <div className={`space-y-8 ${block.reverse ? 'order-2' : ''}`}>
              <div className="w-12 h-1 bg-red-600"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {block.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                {block.description}
              </p>
              
              {/* Features List (Matching the first block in UI) */}
              {block.id === 1 && (
                <div className="grid grid-cols-2 gap-4 pt-4 text-sm font-medium text-gray-800">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600" />
                      {feature}
                    </div>
                  ))}
                </div>
              )}

              <button className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all group">
                <block.icon size={20} />
                {block.buttonText}
                <span className="group-hover:translate-x-1.5 transition-transform">→</span>
              </button>
            </div>

            {/* Image Side */}
            <div className={` ${block.reverse ? 'order-1' : ''}`}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={block.image} 
                  alt={block.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CTA;