import React from 'react';
import { Search, SlidersHorizontal, ChevronDown, PoundSterling } from 'lucide-react';
import {Dispatch, SetStateAction} from 'react';

export interface FilterProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  mode: 'buy' | 'rent';
  setMode: Dispatch<SetStateAction<'buy' | 'rent'>>;
  type: string;
  setType: Dispatch<SetStateAction<string>>;
  beds: string;
  setBeds: Dispatch<SetStateAction<string>>;
  minPrice: string;
  setMinPrice: Dispatch<SetStateAction<string>>;
  maxPrice: string;
  setMaxPrice: Dispatch<SetStateAction<string>>;
}

const PropertyFilter: React.FC<FilterProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  mode, 
  setMode, 
  type, 
  setType,
  beds,
  setBeds,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice
}) => { 
  return (
    <div className="bg-white border-b border-gray-100 sticky top-20 z-30 py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-4">
        
        {/* Rent/Buy Toggle */}
        <div className="flex bg-gray-100 p-1 rounded-xl w-full lg:w-auto shrink-0">
          <button 
            onClick={() => setMode('rent')}
            className={`flex-1 lg:flex-none px-6 py-2 rounded-lg text-sm font-bold transition-all ${mode === 'rent' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Rent
          </button>
          <button 
            onClick={() => setMode('buy')}
            className={`flex-1 lg:flex-none px-6 py-2 rounded-lg text-sm font-bold transition-all ${mode === 'buy' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Buy
          </button>
        </div>

        {/* Search Input */}
        <div className="flex-grow min-w-[300px] relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search location, area or property name..." 
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-red-600/20 transition-all text-sm"
          />
        </div>

        {/* Price Range */}
        <div className="flex items-center gap-2 w-full lg:w-auto">
          <div className="relative flex-1 lg:w-32">
            <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} placeholder="Min Price" className="w-full pl-8 pr-3 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-red-600/20" />
          </div>
          <span className="text-gray-400">-</span>
          <div className="relative flex-1 lg:w-32">
            <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder="Max Price" className="w-full pl-8 pr-3 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-red-600/20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilter;