"use client";

import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import Navbar from './navBar';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();
  const [mode, setMode] = useState<'rent' | 'buy'>('rent');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    const params = new URLSearchParams();
    params.set('mode', mode);
    if (searchQuery) {
      params.set('searchQuery', searchQuery);
    }
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center">
      <Navbar />
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-32">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Find smarter <br /> 
            <span className="text-red-500">lettings</span>, faster.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-lg">
            Discover your perfect home or investment. Rent, let, and sell properties with ease.
          </p>

          {/* Search Container */}
          <div className="bg-white/10 backdrop-blur-md p-2 rounded-3xl border border-white/20 shadow-2xl w-full">
            <div className="flex flex-col md:flex-row items-center gap-4">
              
              {/* 1. Search Input (Widest) */}
              <div className="relative flex-1 w-full">
                <MapPin className="absolute left-4 top-1/2  -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                <input 
                  type="text" 
                  placeholder="Search location, area or property name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ 
                    color: '#000000', 
                    opacity: 1, 
                    WebkitTextFillColor: '#000000' 
                  }}
                  className="w-full pl-12 pr-4 py-1 h-[72px] rounded-2xl bg-white font-medium text-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder:text-gray-400"
                />
              </div>

              {/* 2. Rent/Buy Toggle (Smaller) */}
              <div className="flex bg-gray-100 p-1.5 rounded-2xl shrink-0 w-auto gap-2 h-7">
                <button
                  onClick={() => setMode('rent')}
                  className={`flex-1 px-6 py-1 rounded-xl h-7 text-sm font-bold transition-all ${mode === 'rent' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-900 hover:text-black'}`}
                >
                  Rent
                </button>
                <button
                  onClick={() => setMode('buy')}
                  className={`flex-1 px-6 rounded-xl text-sm font-bold transition-all ${mode === 'buy' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-900 hover:text-black'}`}
                >
                  Buy
                </button>
              </div>

              {/* 3. Search Button (Smaller) */}
              <button 
                onClick={handleSearch} 
                className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-4 py-1 h-[72px] rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shrink-0"
              >
                <Search size={18} />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 py-8 border border-gray-100">
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-3xl font-bold text-gray-900">12,500+</span>
              <span className="text-gray-500 uppercase tracking-wider text-xs font-semibold mt-1">Properties Sold</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-3xl font-bold text-gray-900">480+</span>
              <span className="text-gray-500 uppercase tracking-wider text-xs font-semibold mt-1">Lettings Managed</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-3xl font-bold text-gray-900">14 Days</span>
              <span className="text-gray-500 uppercase tracking-wider text-xs font-semibold mt-1">Avg. Sale Time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;