import React from 'react';
import { Search, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/hero.png')" }} // Ensure your image is in public folder
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
          <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/20 shadow-2xl max-w-3xl">
            <div className="flex flex-col md:flex-row items-center gap-2">
              {/* Location Input */}
              <div className="relative flex-grow w-full">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Property Location..." 
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Type Select */}
              <select className="w-full md:w-48 px-4 py-4 rounded-lg bg-white text-gray-900 font-medium focus:outline-none cursor-pointer">
                <option>Residential</option>
                <option>Commercial</option>
              </select>

              {/* Search Button */}
              <button className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all">
                <Search size={20} />
                Search
              </button>
            </div>
            
            {/* Quick Filter Labels */}
            <div className="flex gap-4 mt-3 ml-2 text-sm text-gray-200">
              <label className="flex items-center gap-1 cursor-pointer hover:text-white">
                <input type="radio" name="type" className="accent-red-500" defaultChecked /> Residential
              </label>
              <label className="flex items-center gap-1 cursor-pointer hover:text-white">
                <input type="radio" name="type" className="accent-red-500" /> Commercial
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Stats Bar (The white section at the bottom) */}
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