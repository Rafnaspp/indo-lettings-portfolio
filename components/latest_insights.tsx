"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { insights } from '../data/insights';

const LatestInsights = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Subtle Fade & Slide */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <div className="w-12 h-1 bg-red-600 mb-6"></div>
            <h2 className="text-4xl font-bold text-gray-900">Latest Insights</h2>
            <p className="text-gray-500 mt-2">Expert advice and news from the front-line of the property market.</p>
          </div>
          <Link href="/about/blogs" className="hidden md:flex items-center gap-2 text-gray-900 font-bold hover:text-red-600 transition-colors group">
            View all posts 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.slice(0, 3).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, // Staggered entry
                ease: "easeOut" 
              }}
            >
              <Link href={post.link} className="group h-full block">
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 h-full flex flex-col hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-900">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <span className="text-xs text-gray-400 mb-2">{post.date}</span>
                    <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-red-600 transition-colors">
                      {post.title}
                    </h3>
                    <div className="mt-auto pt-4 text-red-600 font-bold text-sm flex items-center gap-1">
                      Read More <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Featured Action Card - Different Animation (Scale In) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-red-600 rounded-2xl p-8 flex flex-col justify-between text-white shadow-lg shadow-red-200 hover:-translate-y-1 transition-transform duration-300"
          >
            <div>
              <motion.div 
                initial={{ rotate: -10 }}
                whileInView={{ rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
                className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6"
              >
                <FileText size={24} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Want the full report?</h3>
              <p className="text-red-100 text-sm leading-relaxed">
                Download our quarterly market analysis for deep-dives into property yields and trends.
              </p>
            </div>
            <button className="w-full bg-white text-red-600 font-bold py-3 rounded-xl mt-8 hover:bg-gray-100 active:scale-95 transition-all">
              Get Report
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default LatestInsights;