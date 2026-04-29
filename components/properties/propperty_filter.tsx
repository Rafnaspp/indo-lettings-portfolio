import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import {Dispatch, SetStateAction} from 'react';
import FilterModal from './FilterModal'; // Import the new FilterModal component

export interface FilterProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  mode: 'buy' | 'rent';
  setMode: Dispatch<SetStateAction<'buy' | 'rent'>>;
  // New filter states for the modal
  availability: string;
  setAvailability: Dispatch<SetStateAction<string>>;
  currency: string;
  setCurrency: Dispatch<SetStateAction<string>>;
  minPrice: string;
  setMinPrice: Dispatch<SetStateAction<string>>;
  maxPrice: string;
  setMaxPrice: Dispatch<SetStateAction<string>>;
  minBeds: string;
  setMinBeds: Dispatch<SetStateAction<string>>;
  maxBeds: string;
  setMaxBeds: Dispatch<SetStateAction<string>>;
  minBaths: string;
  setMinBaths: Dispatch<SetStateAction<string>>;
  minSqft: string;
  setMinSqft: Dispatch<SetStateAction<string>>;
  minAcres: string;
  setMinAcres: Dispatch<SetStateAction<string>>;
  selectedPropertyTypes: string[];
  setSelectedPropertyTypes: Dispatch<SetStateAction<string[]>>;
  selectedAccessibilityFeatures: string[];
  setSelectedAccessibilityFeatures: Dispatch<SetStateAction<string[]>>;
  selectedFeatures: string[];
  setSelectedFeatures: Dispatch<SetStateAction<string[]>>;
  // Callback for applying filters from modal
  onApplyFilters: () => void;
  onClearAllFilters: () => void;
}

const PropertyFilter: React.FC<FilterProps> = ({
  searchQuery,
  setSearchQuery,
  mode,
  setMode,
  availability,
  setAvailability,
  currency,
  setCurrency,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  minBeds,
  setMinBeds,
  maxBeds,
  setMaxBeds,
  minBaths,
  setMinBaths,
  minSqft,
  setMinSqft,
  minAcres,
  setMinAcres,
  selectedPropertyTypes,
  setSelectedPropertyTypes,
  selectedAccessibilityFeatures,
  setSelectedAccessibilityFeatures,
  selectedFeatures,
  setSelectedFeatures,
  onApplyFilters,
  onClearAllFilters
}) => { 
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white shadow-2xl shadow-gray-200/40 rounded-2xl p-2 md:p-2.5 mb-8 border border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-row items-center gap-3 text-black">
        
        {/* Rent/Buy Toggle */}
        <div className="flex bg-gray-100 p-1 rounded-xl shrink-0 w-32 md:w-40">
          <button 
            onClick={() => setMode('rent')}
            className={`flex-1 lg:flex-none px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${mode === 'rent' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-900 hover:text-black'}`}
          >
            Rent
          </button>
          <button 
            onClick={() => setMode('buy')}
            className={`flex-1 lg:flex-none px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${mode === 'buy' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-900 hover:text-black'}`}
          >
            Buy
          </button>
        </div>
        
        {/* Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black z-10" size={18} />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search location, area or property name..." 
            /* Inline styles bypass any external CSS files */
            style={{ 
              color: '#000000', 
              opacity: 1, 
              WebkitTextFillColor: '#000000' 
            }}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:outline-none transition-all text-base font-bold placeholder:text-gray-400"
          />
        </div>

        {/* Advanced Filters Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition-all shrink-0 w-32 md:w-40"
        >
          <SlidersHorizontal size={18} />
          <span className="inline">Filters</span>
        </button>
      </div>

      {/* Advanced Filter Modal */}
      <FilterModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        availability={availability}
        setAvailability={setAvailability}
        currency={currency}
        setCurrency={setCurrency}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        minBeds={minBeds}
        setMinBeds={setMinBeds}
        maxBeds={maxBeds}
        setMaxBeds={setMaxBeds}
        minBaths={minBaths}
        setMinBaths={setMinBaths}
        minSqft={minSqft}
        setMinSqft={setMinSqft}
        minAcres={minAcres}
        setMinAcres={setMinAcres}
        selectedPropertyTypes={selectedPropertyTypes}
        setSelectedPropertyTypes={setSelectedPropertyTypes}
        selectedAccessibilityFeatures={selectedAccessibilityFeatures}
        setSelectedAccessibilityFeatures={setSelectedAccessibilityFeatures}
        selectedFeatures={selectedFeatures}
        setSelectedFeatures={setSelectedFeatures}
        onApplyFilters={onApplyFilters}
        onClearAll={onClearAllFilters}
      />
    </div>
  );
};

export default PropertyFilter;