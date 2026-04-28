'use client';
import React, { useState, useMemo, useEffect, Suspense } from 'react';
import PropertyFilter from '@/components/properties/propperty_filter';
import PropertyCard from './property_card';
import { featuredProperties } from '@/data/all_properties';
import { Property } from '@/data/properties';
import GlassyNavBar from '../glassyNavBar';
import { useSearchParams } from 'next/navigation';

// Helper to convert property.beds to number safely
const getPropertyBeds = (beds: string | number): number => {
  if (typeof beds === 'string' && beds.toLowerCase() === 'n/a') {
    return 0; // Or some other appropriate default for commercial properties
  }
  return Number(beds);
};

const PropertyListingContent = () => {
  const searchParams = useSearchParams();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [mode, setMode] = useState<'rent' | 'buy'>('rent'); // Still primary mode toggle

  // New filter states for the modal
  const [availability, setAvailability] = useState('all'); // 'all', 'available', 'sold'
  const [currency, setCurrency] = useState('GBP'); // Default currency
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minBeds, setMinBeds] = useState('');
  const [maxBeds, setMaxBeds] = useState('');
  const [minBaths, setMinBaths] = useState('0'); // 'Any' maps to 0
  const [minSqft, setMinSqft] = useState('');
  const [minAcres, setMinAcres] = useState('');
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([]);
  const [selectedAccessibilityFeatures, setSelectedAccessibilityFeatures] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Multiple of 5 for our 5-column grid

  // Function to apply filters (called from FilterModal)
  const applyFilters = () => {
    // This function can be used to trigger a re-render of filteredProperties
    // by updating a dummy state or simply relying on state changes
    // For now, just ensuring states are updated is enough as useMemo depends on them.
  };

  // Function to clear all filters (called from FilterModal)
  const clearAllFilters = () => {
    setAvailability('all');
    setCurrency('GBP');
    setMinPrice('');
    setMaxPrice('');
    setMinBeds('');
    setMaxBeds('');
    setMinBaths('0');
    setMinSqft('');
    setMinAcres('');
    setSelectedPropertyTypes([]);
    setSelectedAccessibilityFeatures([]);
    setSelectedFeatures([]);
    setSearchQuery(''); // Clear search query as well
  };

  // Sync with URL parameters for the NavBar links
  useEffect(() => {
    const urlMode = searchParams.get('mode');
    const urlSearchQuery = searchParams.get('searchQuery');
    const urlAvailability = searchParams.get('availability');
    const urlCurrency = searchParams.get('currency');
    const urlMinPrice = searchParams.get('minPrice');
    const urlMaxPrice = searchParams.get('maxPrice');
    const urlMinBeds = searchParams.get('minBeds');
    const urlMaxBeds = searchParams.get('maxBeds');
    const urlMinBaths = searchParams.get('minBaths');
    const urlMinSqft = searchParams.get('minSqft');
    const urlMinAcres = searchParams.get('minAcres');
    const urlPropertyTypes = searchParams.getAll('propertyType'); // Use getAll for arrays
    const urlAccessibilityFeatures = searchParams.getAll('accessibilityFeature');
    const urlFeatures = searchParams.getAll('feature');

    setMode(urlMode === 'buy' || urlMode === 'rent' ? urlMode : 'rent');
    setSearchQuery(urlSearchQuery || '');
    setAvailability(urlAvailability || 'all');
    setCurrency(urlCurrency || 'GBP');
    setMinPrice(urlMinPrice || '');
    setMaxPrice(urlMaxPrice || '');
    setMinBeds(urlMinBeds || '');
    setMaxBeds(urlMaxBeds || '');
    setMinBaths(urlMinBaths || '0');
    setMinSqft(urlMinSqft || '');
    setMinAcres(urlMinAcres || '');
    setSelectedPropertyTypes(urlPropertyTypes);
    setSelectedAccessibilityFeatures(urlAccessibilityFeatures);
    setSelectedFeatures(urlFeatures);
  }, [searchParams]); // Depend on searchParams to re-run when URL changes

  // Reset pagination to first page whenever filters change
  useEffect(() => { setCurrentPage(1); }, [searchQuery, mode, availability, minPrice, maxPrice, minBeds, maxBeds, minBaths, minSqft, minAcres, selectedPropertyTypes, selectedAccessibilityFeatures, selectedFeatures]);

  const filteredProperties = useMemo(() => {
    return (featuredProperties as Property[]).filter(property => {
      const matchesSearch = 
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (property.location || '').toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesMode = property.mode === mode;
      
      const price = Number(property.price);
      const matchesMinPrice = minPrice === '' || price >= Number(minPrice);
      const matchesMaxPrice = maxPrice === '' || price <= Number(maxPrice);

      // Availability filter
      const matchesAvailability = availability === 'all' ||
        (availability === 'available' && property.status !== 'Under Offer' && property.status !== 'Sold') ||
        (availability === 'sold' && property.status === 'Sold');

      // Beds filter
      const propertyBeds = getPropertyBeds(property.beds); // Handle 'N/A' for commercial if needed, assuming residential here
      const matchesMinBeds = minBeds === '' || propertyBeds >= Number(minBeds);
      const matchesMaxBeds = maxBeds === '' || propertyBeds <= Number(maxBeds);

      // Baths filter
      const propertyBaths = Number(property.baths);
      const matchesMinBaths = minBaths === '0' || propertyBaths >= Number(minBaths);

      // Size filter
      const matchesMinSqft = minSqft === '' || property.sqft >= Number(minSqft);
      const matchesMinAcres = minAcres === '' || (property.landAcres && property.landAcres >= Number(minAcres));

      // Property Type filter (multi-select)
      const matchesPropertyTypes = selectedPropertyTypes.length === 0 ||
        (property.propertyType && selectedPropertyTypes.map(t => t.toLowerCase()).includes(property.propertyType.toLowerCase()));
      
      // Features filter (multi-select) - combines general features and accessibility features
      const allSelectedFeatures = [...selectedFeatures, ...selectedAccessibilityFeatures];
      const matchesFeatures = allSelectedFeatures.length === 0 ||
        (Array.isArray(property.features) &&
         property.features.some((pf: any) => allSelectedFeatures.map(f => f.toLowerCase()).includes(String(pf).toLowerCase())));

      // Currency filter (currently only for display, no conversion logic)
      // If currency conversion is needed, this logic would be more complex.
      // For now, it's assumed all prices in `featuredProperties` are in GBP.
      const matchesCurrency = currency === 'GBP'; // Always true if no conversion

      return matchesSearch && matchesMode && matchesMinPrice && matchesMaxPrice &&
             matchesAvailability && matchesMinBeds && matchesMaxBeds && matchesMinBaths &&
             matchesMinSqft && matchesMinAcres && matchesPropertyTypes && matchesFeatures &&
             matchesCurrency;
    });
  }, [searchQuery, mode, availability, currency, minPrice, maxPrice, minBeds, maxBeds, minBaths, minSqft, minAcres, selectedPropertyTypes, selectedAccessibilityFeatures, selectedFeatures]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProperties = useMemo(() => {
    return filteredProperties.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProperties, startIndex]);

  return (
    <>
      {/* Hero Section Wrapper with Background Image */}
      <div className="relative pt-32 pb-8 bg-white">
        {/* Header Content - positioned above the overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-gray-900 mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight capitalize">
            Properties for <span className="text-red-600">{mode}</span>
          </h1>
          <p className="mt-2 text-gray-500 font-medium">Showing {filteredProperties.length} curated listings</p>
        </div>

        {/* Property Filter - positioned above the overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4"> {/* Added max-w-7xl and px-4 for alignment */}
          <PropertyFilter 
            searchQuery={searchQuery} setSearchQuery={setSearchQuery}
            mode={mode} setMode={setMode}
            // New filter props
            availability={availability}
            setAvailability={setAvailability}
            currency={currency}
            setCurrency={setCurrency} 
            minPrice={minPrice} setMinPrice={setMinPrice}
            maxPrice={maxPrice} setMaxPrice={setMaxPrice}
            minBeds={minBeds} setMinBeds={setMinBeds}
            maxBeds={maxBeds} setMaxBeds={setMaxBeds}
            minBaths={minBaths} setMinBaths={setMinBaths}
            minSqft={minSqft} setMinSqft={setMinSqft}
            minAcres={minAcres} setMinAcres={setMinAcres}
            selectedPropertyTypes={selectedPropertyTypes}
            setSelectedPropertyTypes={setSelectedPropertyTypes}
            selectedAccessibilityFeatures={selectedAccessibilityFeatures}
            setSelectedAccessibilityFeatures={setSelectedAccessibilityFeatures}
            selectedFeatures={selectedFeatures}
            setSelectedFeatures={setSelectedFeatures}
            onApplyFilters={applyFilters}
            onClearAllFilters={clearAllFilters}
          />
        </div>
      </div> {/* End Hero Section Wrapper */}

      <section className="max-w-7xl mx-auto px-4 py-12">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
            <h2 className="text-xl font-semibold text-gray-900">No matching properties</h2>
            <p className="text-gray-500">Try adjusting your filters or searching a different area.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {paginatedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
            
          {/* Lead Generation Card - Injected into the grid */}
          <div className="bg-red-600 rounded-3xl p-8 text-white flex flex-col justify-center items-center text-center space-y-6">
            <h3 className="text-2xl font-bold">Don't see what you're looking for?</h3>
            <p className="text-red-100">Register your requirements and get notified as soon as a matching property hits the market.</p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-xl font-bold hover:bg-red-50 transition-colors">
              Join the Waiting List
            </button>
          </div>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-200 rounded-lg text-gray-400 disabled:opacity-50"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-bold transition-all ${page === currentPage ? 'bg-red-600 text-white' : 'hover:bg-gray-100 text-gray-600'}`}
              >
              {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-200 rounded-lg text-gray-900 hover:bg-gray-100 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </section>
    </>
  );
};

const PropertyListingPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <GlassyNavBar />
      <div className="min-h-screen">
        <Suspense fallback={
          <div className="flex flex-col items-center justify-center min-h-[60vh] pt-32">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mb-4"></div>
            <p className="text-gray-500 font-medium">Loading properties...</p>
          </div>
        }>
          <PropertyListingContent />
        </Suspense>
      </div>
    </main>
  );
};

export default PropertyListingPage;