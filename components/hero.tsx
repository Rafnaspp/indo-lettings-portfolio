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
      
      {/* Background Image with Overlay (Kept from original) */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-12 pb-20 flex-1 flex flex-col justify-center">
        
        {/* --- MOBILE VERSION (Visible only on small screens) --- */}
        <div className="md:hidden flex flex-col w-full">
          <header className="mb-8">
            <h1 className="text-[42px] leading-[1.1] font-extrabold text-white tracking-tight">
              Find your perfect <span className="text-red-500">dream home</span> today.
            </h1>
            <p className="mt-4 text-gray-200 text-lg font-medium">
              Discover thousands of curated properties across the country's premium locations.
            </p>
          </header>

          {/* Nestly-style Search Card for Mobile */}
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

          {/* Stats bar for Mobile */}
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

        {/* --- DESKTOP VERSION (Your original layout) --- */}
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

      </div>
    </section>
  );
};

export default Hero;