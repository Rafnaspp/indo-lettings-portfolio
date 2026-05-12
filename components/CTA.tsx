"use client";

import React from 'react';
import Link from 'next/link';
import { Target, Clock4, KeyRound, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const blocks = [
  {
    id: 1,
    image: "/images/cta-living-room.jpg",
    title: "Your next chapter starts with us.",
    description: "Whether you're moving in or moving up, we make the journey effortless. Access exclusive listings, 24/7 maintenance support, and flexible viewing times.",
    buttonText: "Find Your Home",
    href: "/properties",
    icon: KeyRound,
    reverse: false,
  },
  {
    id: 2,
    image: "/images/cta-portfolio.jpg",
    title: "Ready to sell or let? Get a free valuation.",
    description: "Discover the true market value of your property with our expert appraisal service. We provide detailed insights and strategic advice to help you achieve the best possible result.",
    buttonText: "Book Your Evaluation",
    href: "/evaluation",
    icon: Clock4,
    reverse: true,
  },
];

const features = [
  "Advanced Search Matching",
  "Transparent Fees & Accounting",
  "Digital Contract Management",
  "24/7 Dedicated Support",
  "Legal Support",
  "Eviction Process"
];

const CTA = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        {blocks.map((block) => (
          <div 
            key={block.id} 
            className={`grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center`}
          >
            {/* Content Side */}
            <motion.div 
              // Slides in from left if normal, right if reversed
              initial={{ opacity: 0, x: block.reverse ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`space-y-8 ${block.reverse ? 'md:order-2' : ''}`}
            >
              <div className="w-12 h-1 bg-red-600"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {block.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                {block.description}
              </p>
              
              {block.id === 1 && (
                <div className="grid grid-cols-2 gap-4 pt-4 text-sm font-medium text-gray-800">
                  {features.map((feature, i) => (
                    <motion.div 
                      key={feature}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      {feature}
                    </motion.div>
                  ))}
                </div>
              )}

              <Link href={block.href} className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all group">
                <block.icon size={20} />
                {block.buttonText}
                <span className="group-hover:translate-x-1.5 transition-transform">→</span>
              </Link>
            </motion.div>

            {/* Image Side */}
            <motion.div 
              // Slides in from opposite side of the text
              initial={{ opacity: 0, x: block.reverse ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`${block.reverse ? 'md:order-1' : ''}`}
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={block.image} 
                  alt={block.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CTA;