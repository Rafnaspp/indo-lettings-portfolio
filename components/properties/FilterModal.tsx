import React, { Dispatch, SetStateAction, useState } from 'react';
import { X, PoundSterling, Bed, Bath, Ruler, LandPlot, ChevronDown, ChevronUp } from 'lucide-react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Filter states and setters
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
  onApplyFilters: () => void;
  onClearAll: () => void;
}

const CollapsibleSection: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-50 last:border-none">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center py-4 text-left focus:outline-none">
        <span className="text-base font-bold text-gray-900 uppercase tracking-wider">{title}</span>
        {isOpen ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
      </button>
      {isOpen && <div className="pb-6 animate-in fade-in slide-in-from-top-1 duration-200">{children}</div>}
    </div>
  );
};

const propertyTypesOptions = [
  "Alternative", "Apartment", "Barn Conversion", "Castle", "Commercial building", "Cottage",
  "Development", "Development Plot", "Duplex", "Farm", "Farmhouse", "Flat", "Game Lodge",
  "Healthcare", "House", "Houseboat", "Institutional", "Island", "Land", "Lodge",
  "Parking Space", "Penthouse", "Residential building", "Residential Investment", "Retirement",
  "Single Storey", "Townhouse", "Warehouse Conversion"
];

const accessibilityOptions = [
  "Designated accessible parking", "Lateral", "Lateral living", "Lift",
  "Step free access to outside space", "Step free access to the property", "Wet room / flat floor shower"
];

const featuresOptions = [
  "24hr security", "24hr Security/Concierge", "Access control secondary accommodation",
  "Annexe secondary accommodation", "Available with zero deposit guarantee", "Balcony",
  "Barn Conversion", "Bike Store", "Business facilities", "Car Park", "CCTV Surveillance cameras",
  "Cellar", "Central heating", "Chain Free", "Cinema Room", "Clubhouse", "Coastal",
  "Coffee shop", "Communal Garden", "Concierge", "Conservation", "Conservatory", "Cottage",
  "Courtyard Garden", "Detached", "Double Garage", "Duplex", "End of Terrace", "Equestrian",
  "Family / Media room secondary accommodation", "Farm House", "Garage", "Garden", "Garden flat",
  "Garden View", "Gate House", "Gate house secondary accommodation", "Golf course", "Gym",
  "Harbour View", "Heater", "Holiday Let secondary accommodation", "Home office", "Island",
  "Lake View", "Land", "Leisure Facilities", "Level access throughout", "Lighthouse", "Linked",
  "Lodge House", "Lower Ground Floor", "Maisonette", "Mansion Blocks", "Meadow", "Mews",
  "Microwave oven", "Mill", "Modern", "Mooring/Berthing", "New Build", "New Development",
  "New Homes", "Nursery", "Oast House", "Outbuildings", "Outdoor space", "Paddock", "Parking",
  "Patio", "Patio/Terrace", "Penthouse", "Period", "Porter", "Porter / Concierge",
  "Possibility to extend", "Private Parking", "Purpose Built", "Raised Ground Floor",
  "Resident Parking", "Restoration project", "Restored", "Riverside", "Roof Terrace", "Rural",
  "Sauna", "Sauna rooms", "School", "Sea View", "Security System", "Semi-Detached", "SEN",
  "Shoot / Sporting", "Single Garage", "Spa", "Sprinklers", "Stabling",
  "Staff accommodation secondary accommodation", "Standalone", "Standalone secondary accommodation",
  "Storage area", "Studio", "Suburban", "Swimming Pool", "Tennis Court", "Terrace", "Town House",
  "Town/City", "Triplex", "Vehicle electric charging points", "Village", "Warehouse Conversion",
  "Waterside", "Wine cellar", "Woodland"
];

const currencyOptions = [
  { value: 'GBP', label: 'British Pounds (GBP)' },
  { value: 'EUR', label: 'European Euros (EUR)' },
  { value: 'USD', label: 'United States Dollars (USD)' },
];

const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
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
  onClearAll,
}) => {
  if (!isOpen) return null;

  const handlePropertyTypeChange = (type: string) => {
    setSelectedPropertyTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleAccessibilityChange = (feature: string) => {
    setSelectedAccessibilityFeatures(prev =>
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  const handleFeatureChange = (feature: string) => {
    setSelectedFeatures(prev =>
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center items-center p-4">
      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col relative">
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-gray-50 shrink-0">
          <h2 className="text-2xl font-black text-gray-900">Filters</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-900 transition-all">
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-8 py-2 space-y-2">
          {/* Availability */}
          <CollapsibleSection title="Availability" defaultOpen>
            <div className="grid grid-cols-3 gap-3">
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="availability"
                  value="all"
                  checked={availability === 'all'}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="form-radio h-4 w-4 text-red-600 border-gray-300"
                />
                <span className="ml-2">All properties</span>
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="availability"
                  value="available"
                  checked={availability === 'available'}
                  onChange={(e) => setAvailability(e.target.value)}
                  
                  className="form-radio h-4 w-4 text-red-600 border-gray-300"
                />
                <span className="ml-2">Available</span>
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="availability"
                  value="sold"
                  checked={availability === 'sold'}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="form-radio h-4 w-4 text-red-600 border-gray-300"
                />
                <span className="ml-2">Sold</span>
              </label>
            </div>
          </CollapsibleSection>

          {/* Price */}
          <CollapsibleSection title="Budget & Currency" defaultOpen>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative flex-1">
                <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  placeholder="Minimum"
                  style={{ 
                    color: '#000000', 
                    opacity: 1, 
                    WebkitTextFillColor: '#000000' 
                  }}
                  className="w-full pl-8 pr-3 py-3 bg-gray-50 border-none rounded-xl text-sm text-black placeholder:text-gray-500 focus:ring-2 focus:ring-red-600/20"
                />
              </div>
              <span className="text-gray-400">-</span>
              <div className="relative flex-1">
                <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder="Maximum"
                  style={{ 
                    color: '#000000', 
                    opacity: 1, 
                    WebkitTextFillColor: '#000000' 
                  }}
                  className="w-full pl-8 pr-3 py-3 bg-gray-50 border-none rounded-xl text-sm text-black placeholder:text-gray-500 focus:ring-2 focus:ring-red-600/20"
                />
              </div>
            </div>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              style={{ 
                    color: '#000000', 
                    opacity: 1, 
                    WebkitTextFillColor: '#000000' 
                  }}
              className="w-full bg-gray-50 border-none rounded-xl text-sm text-black py-3 px-4 focus:ring-2 focus:ring-red-600/20"
            >
              {currencyOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </CollapsibleSection>

          {/* Bedrooms */}
          <CollapsibleSection title="Bedrooms">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Bed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                <input
                  type="number"
                  value={minBeds}
                  onChange={(e) => setMinBeds(e.target.value)}
                  placeholder="Minimum"
                  style={{ 
                    color: '#000000', 
                    opacity: 1, 
                    WebkitTextFillColor: '#000000' 
                  }}
                  className="w-full pl-8 pr-3 py-3 bg-gray-50 border-none rounded-xl text-sm text-black placeholder:text-gray-500 focus:ring-2 focus:ring-red-600/20"
                />
              </div>
              <span className="text-gray-400">-</span>
              <div className="relative flex-1">
                <Bed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                <input
                  type="number"
                  value={maxBeds}
                  onChange={(e) => setMaxBeds(e.target.value)}
                  placeholder="Maximum"
                  style={{ 
                    color: '#000000', 
                    opacity: 1, 
                    WebkitTextFillColor: '#000000' 
                  }}
                  className="w-full pl-8 pr-3 py-3 bg-gray-50 border-none rounded-xl text-sm text-black placeholder:text-gray-500 focus:ring-2 focus:ring-red-600/20"
                />
              </div>
            </div>
          </CollapsibleSection>

          {/* Bathrooms */}
          <CollapsibleSection title="Bathrooms">
            <div className="flex flex-wrap gap-2">
              {['Any', '1+', '2+', '3+', '4+', '5+'].map(option => (
                <button
                  key={option}
                  onClick={() => setMinBaths(option === 'Any' ? '0' : option.replace('+', ''))}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    minBaths === (option === 'Any' ? '0' : option.replace('+', '')) || (minBaths === '0' && option === 'Any')
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </CollapsibleSection>

          {/* Size */}
          <CollapsibleSection title="Size & Land">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                <input
                  type="number"
                  value={minSqft}
                  onChange={(e) => setMinSqft(e.target.value)}
                  placeholder="Floor area (sqft) Minimum"
                  style={{ 
                    color: '#000000', 
                    opacity: 1, 
                    WebkitTextFillColor: '#000000' 
                  }}
                  className="w-full pl-8 pr-3 py-3 bg-gray-50 border-none rounded-xl text-sm text-black placeholder:text-gray-500 focus:ring-2 focus:ring-red-600/20"
                />
              </div>
              <div className="relative">
                <LandPlot className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                <input
                  type="number"
                  value={minAcres}
                  onChange={(e) => setMinAcres(e.target.value)}
                  placeholder="Land Area (acres) Minimum"
                  style={{ 
                    color: '#000000', 
                    opacity: 1, 
                    WebkitTextFillColor: '#000000' 
                  }}
                  className="w-full pl-8 pr-3 py-3 bg-gray-50 border-none rounded-xl text-sm text-black placeholder:text-gray-500 focus:ring-2 focus:ring-red-600/20"
                />
              </div>
            </div>
          </CollapsibleSection>

          {/* Property Type */}
          <CollapsibleSection title="Property Type">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {propertyTypesOptions.map(type => (
                <label key={type} className="flex items-center text-gray-700">
                  <input
                    type="checkbox"
                    checked={selectedPropertyTypes.includes(type)}
                    onChange={() => handlePropertyTypeChange(type)}
                    className="form-checkbox h-4 w-4 text-red-600 rounded border-gray-300"
                  />
                  <span className="ml-2 text-sm">{type}</span>
                </label>
              ))}
            </div>
          </CollapsibleSection>

          {/* Accessibility */}
          <CollapsibleSection title="Accessibility">
            <div className="grid grid-cols-1 gap-2">
              {accessibilityOptions.map(feature => (
                <label key={feature} className="flex items-center text-gray-700">
                  <input
                    type="checkbox"
                    checked={selectedAccessibilityFeatures.includes(feature)}
                    onChange={() => handleAccessibilityChange(feature)}
                    className="form-checkbox h-4 w-4 text-red-600 rounded border-gray-300"
                  />
                  <span className="ml-2 text-sm">{feature}</span>
                </label>
              ))}
            </div>
          </CollapsibleSection>

          {/* Features */}
          <CollapsibleSection title="Features">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {featuresOptions.map(feature => (
                <label key={feature} className="flex items-center text-gray-700">
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(feature)}
                    onChange={() => handleFeatureChange(feature)}
                    className="form-checkbox h-4 w-4 text-red-600 rounded border-gray-300"
                  />
                  <span className="ml-2 text-sm">{feature}</span>
                </label>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-gray-50 flex justify-between items-center shrink-0">
          <button
            onClick={onClearAll}
            className="text-sm font-bold text-gray-900 hover:text-red-600 transition-colors underline underline-offset-4"
          >
            Clear All
          </button>
          <button
            onClick={() => { onApplyFilters(); onClose(); }}
            className="px-6 py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;