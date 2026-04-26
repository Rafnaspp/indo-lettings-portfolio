import React from 'react';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';

const PropertyFilter = () => {
  return (
    <div className="bg-white border-b border-gray-100 sticky top-20 z-30 py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center gap-4">
        
        {/* Search Input */}
        <div className="flex-grow min-w-[300px] relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by city, area or postcode..." 
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-red-600/20 transition-all text-sm"
          />
        </div>

        {/* Dropdown Filters */}
        <div className="hidden lg:flex items-center gap-3">
          {['Property Type', 'Price Range', 'Bedrooms'].map((filter) => (
            <button key={filter} className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium hover:border-gray-300 transition-all">
              {filter} <ChevronDown size={14} className="text-gray-400" />
            </button>
          ))}
        </div>

        <button className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-red-700 transition-all ml-auto">
          <SlidersHorizontal size={18} />
          Filters
        </button>
      </div>
    </div>
  );
};

export default PropertyFilter;