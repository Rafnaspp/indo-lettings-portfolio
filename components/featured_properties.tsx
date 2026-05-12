"use client"; // Required for Framer Motion in Next.js App Router

import React from 'react';
import Link from 'next/link';
import { Bed, Bath, Move, Heart } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion
import { featuredProperties } from '../data/properties';

const FeaturedProperties = () => {
  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Area - Fades in and slides down */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Properties</h2>
            <p className="text-gray-500 mt-2">Explore our hand-picked selection of premium listings.</p>
          </div>
          <Link href="/properties" className="hidden md:block text-red-600 font-semibold border-b-2 border-red-600 hover:text-red-700 transition-colors">
            View All Properties
          </Link>
        </motion.div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((prop, index) => (
            <motion.div
              key={prop.id}
              // Alternates sliding from left (even) and right (odd)
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1, // Staggered effect
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
            >
              <Link 
                href={`/properties/${prop.id}`} 
                className="group block cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={prop.image} 
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider ${
                      prop.status === 'New' ? 'bg-green-500' : prop.status === 'Hot' ? 'bg-red-600' : 'bg-blue-500'
                    }`}>
                      {prop.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-600 transition-all">
                    <Heart size={20} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 mb-4">{prop.address}</p>
                  
                  <div className="flex items-center justify-between border-y border-gray-50 py-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Bed size={18} className="text-red-500" />
                      <span className="text-sm font-medium">{prop.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Bath size={18} className="text-red-500" />
                      <span className="text-sm font-medium">{prop.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Move size={18} className="text-red-500" />
                      <span className="text-sm font-medium">{prop.sqft} sqft</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">{prop.price}</span>
                    <span className="text-sm font-bold text-red-600 group-hover:underline">View Details</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;