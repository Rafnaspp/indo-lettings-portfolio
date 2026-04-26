import React from 'react';
import { Search, Home, ArrowRight } from 'lucide-react';

const ValuationHero = () => {
  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 skew-x-12 translate-x-20" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-sm font-bold tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Instant Property Valuation
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Curious what your <span className="text-red-600">home is worth?</span>
            </h2>
            
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
              Get a free, instant estimate of your property's value in less than 60 seconds. Trusted by thousands of homeowners.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-gray-900 bg-gray-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=user${i}`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="text-white font-bold">Over 1,200 valuations</p>
                <p className="text-gray-500">performed this month alone.</p>
              </div>
            </div>
          </div>

          {/* Right: The Valuation Card */}
          <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get your valuation</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-3 tracking-widest">
                  Property Postcode
                </label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="e.g. E14 9GE" 
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-50 rounded-2xl focus:border-red-600 focus:bg-white transition-all outline-none text-lg font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="flex flex-col items-center justify-center p-4 border-2 border-red-600 bg-red-50 rounded-2xl text-red-600 transition-all">
                  <Home size={24} className="mb-2" />
                  <span className="text-sm font-bold">To Sell</span>
                </button>
                <button type="button" className="flex flex-col items-center justify-center p-4 border-2 border-gray-100 hover:border-red-100 rounded-2xl text-gray-500 transition-all">
                  <Search size={24} className="mb-2" />
                  <span className="text-sm font-bold">To Let</span>
                </button>
              </div>

              <button className="group w-full bg-gray-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-red-600 transition-all flex items-center justify-center gap-3 shadow-xl">
                Get Instant Result
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-[10px] text-gray-400 leading-relaxed uppercase tracking-widest">
                By clicking, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValuationHero;