"use client";

import React, { useState } from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import Navbar from './navBar';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();
  const [mode, setMode] = useState<'rent' | 'buy'>('rent');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    const params = new URLSearchParams();
    params.set('mode', mode);
    if (searchQuery) params.set('searchQuery', searchQuery);
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col">
      <Navbar />
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-12 pb-20 flex-1 flex flex-col justify-center">
        
        {/* --- MOBILE VERSION --- */}
        <div className="md:hidden flex flex-col w-full">
          <header className="mb-8">
            <h1 className="text-[42px] leading-[1.1] font-extrabold text-white tracking-tight">
              Find your perfect <span className="text-red-500">dream home</span> today.
            </h1>
            <p className="mt-4 text-gray-200 text-lg font-medium">
              Discover thousands of curated properties across the country's premium locations.
            </p>
          </header>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-[32px] border border-white/20 shadow-2xl">
            <div className="flex bg-white/20 p-1 rounded-2xl mb-4">
              <button
                onClick={() => setMode('rent')}
                className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${
                  mode === 'rent' ? 'bg-white text-red-600' : 'text-white'
                }`}
              >
                Rent
              </button>
              <button
                onClick={() => setMode('buy')}
                className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${
                  mode === 'buy' ? 'bg-white text-red-600' : 'text-white'
                }`}
              >
                Buy
              </button>
            </div>

            <div className="relative mb-4">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search location..."
                className="w-full pl-12 pr-4 h-[60px] rounded-2xl bg-white text-black outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <button
              onClick={handleSearch}
              className="w-full bg-red-600 text-white h-[60px] rounded-2xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              <Search size={20} />
              <span>Search Properties</span>
            </button>
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex justify-around border border-white/10">
            <div className="text-center">
              <div className="text-xl font-bold text-red-500">12k+</div>
              <div className="text-[10px] uppercase text-gray-300 font-bold">Listings</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-red-500">4.8</div>
              <div className="text-[10px] uppercase text-gray-300 font-bold">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-red-500">250+</div>
              <div className="text-[10px] uppercase text-gray-300 font-bold">Agents</div>
            </div>
          </div>
        </div>

        {/* --- DESKTOP VERSION --- */}
        <div className="hidden md:block max-w-2xl text-white">
          <h1 className="text-7xl font-bold leading-tight mb-6">
            Find smarter <br /> 
            <span className="text-red-500">lettings</span>, faster.
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-lg">
            Discover your perfect home or investment. Rent, let, and sell properties with ease.
          </p>

          <div className="bg-white/10 backdrop-blur-md p-2 rounded-3xl border border-white/20 shadow-2xl flex items-center gap-4">
            <div className="relative flex-1">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <input 
                type="text" 
                placeholder="Search location..."
                className="w-full pl-12 pr-4 h-[72px] rounded-2xl bg-white text-black font-medium text-lg focus:outline-none"
              />
            </div>
            <button 
              onClick={handleSearch} 
              className="bg-red-600 hover:bg-red-700 text-white px-8 h-[72px] rounded-2xl font-bold flex items-center gap-2 transition-all"
            >
              <Search size={18} />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Improved Desktop Stats Section - Overflowing the bottom edge */}
        <div className="hidden md:flex absolute -bottom-16 left-1/2 -translate-x-1/2 bg-white rounded-3xl p-2 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)] items-center border border-gray-100 z-20">
  <div className="bg-gray-50/50 rounded-2xl p-6 flex items-center gap-12">
    
    {/* Listings */}
    <div className="flex items-center gap-4 px-4">
      <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
      </div>
      <div>
        <div className="text-2xl font-black text-gray-900 tracking-tight leading-none">12,000+</div>
        <div className="text-[11px] uppercase tracking-[0.1em] text-gray-400 font-bold mt-1">Premium Listings</div>
      </div>
    </div>

    {/* Vertical Divider */}
    <div className="w-px h-10 bg-gray-200" />

    {/* Rating */}
    <div className="flex items-center gap-4 px-4">
      <div className="flex -space-x-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" /> 
        ))}
      </div>
      <div>
        <div className="text-2xl font-black text-gray-900 tracking-tight leading-none">4.8/5</div>
        <div className="text-[11px] uppercase tracking-[0.1em] text-gray-400 font-bold mt-1">User Satisfaction</div>
      </div>
    </div>

    {/* Vertical Divider */}
    <div className="w-px h-10 bg-gray-200" />

    {/* Agents */}
    <div className="flex items-center gap-4 px-4">
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <div>
        <div className="text-2xl font-black text-gray-900 tracking-tight leading-none">250+</div>
        <div className="text-[11px] uppercase tracking-[0.1em] text-gray-400 font-bold mt-1">Expert Agents</div>
      </div>
    </div>

  </div>
</div>



      </div>
    </section>
  );
};

export default Hero;