'use client';
import React, { useState, useMemo, useEffect, Suspense } from 'react';
import PropertyFilter from '@/components/properties/propperty_filter';
import PropertyCard from './property_card';
import { featuredProperties } from '@/data/all_properties';
import { Property } from '@/data/properties';
import GlassyNavBar from '../glassyNavBar';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion'; // Added Framer Motion

const getPropertyBeds = (beds: string | number): number => {
  if (typeof beds === 'string' && beds.toLowerCase() === 'n/a') {
    return 0;
  }
  return Number(beds);
};

const PropertyListingContent = () => {
  const searchParams = useSearchParams();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [mode, setMode] = useState<'rent' | 'buy'>('rent');
  const [availability, setAvailability] = useState('all');
  const [currency, setCurrency] = useState('GBP');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minBeds, setMinBeds] = useState('');
  const [maxBeds, setMaxBeds] = useState('');
  const [minBaths, setMinBaths] = useState('0');
  const [minSqft, setMinSqft] = useState('');
  const [minAcres, setMinAcres] = useState('');
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([]);
  const [selectedAccessibilityFeatures, setSelectedAccessibilityFeatures] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const applyFilters = () => {};

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
    setSearchQuery('');
  };

  useEffect(() => {
    const urlMode = searchParams.get('mode');
    setMode(urlMode === 'buy' || urlMode === 'rent' ? urlMode : 'rent');
    setSearchQuery(searchParams.get('searchQuery') || '');
    setAvailability(searchParams.get('availability') || 'all');
    setCurrency(searchParams.get('currency') || 'GBP');
    setMinPrice(searchParams.get('minPrice') || '');
    setMaxPrice(searchParams.get('maxPrice') || '');
    setMinBeds(searchParams.get('minBeds') || '');
    setMaxBeds(searchParams.get('maxBeds') || '');
    setMinBaths(searchParams.get('minBaths') || '0');
    setMinSqft(searchParams.get('minSqft') || '');
    setMinAcres(searchParams.get('minAcres') || '');
    setSelectedPropertyTypes(searchParams.getAll('propertyType'));
    setSelectedAccessibilityFeatures(searchParams.getAll('accessibilityFeature'));
    setSelectedFeatures(searchParams.getAll('feature'));
  }, [searchParams]);

  useEffect(() => { setCurrentPage(1); }, [searchQuery, mode, availability, minPrice, maxPrice, minBeds, maxBeds, minBaths, minSqft, minAcres, selectedPropertyTypes, selectedAccessibilityFeatures, selectedFeatures]);

  const filteredProperties = useMemo(() => {
    return (featuredProperties as Property[]).filter(property => {
      const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) || (property.location || '').toLowerCase().includes(searchQuery.toLowerCase());
      const matchesMode = property.mode === mode;
      const price = Number(property.price);
      const matchesMinPrice = minPrice === '' || price >= Number(minPrice);
      const matchesMaxPrice = maxPrice === '' || price <= Number(maxPrice);
      const matchesAvailability = availability === 'all' || (availability === 'available' && property.status !== 'Under Offer' && property.status !== 'Sold') || (availability === 'sold' && property.status === 'Sold');
      const propertyBeds = getPropertyBeds(property.beds);
      const matchesMinBeds = minBeds === '' || propertyBeds >= Number(minBeds);
      const matchesMaxBeds = maxBeds === '' || propertyBeds <= Number(maxBeds);
      const propertyBaths = Number(property.baths);
      const matchesMinBaths = minBaths === '0' || propertyBaths >= Number(minBaths);
      const matchesMinSqft = minSqft === '' || property.sqft >= Number(minSqft);
      const matchesMinAcres = minAcres === '' || (property.landAcres && property.landAcres >= Number(minAcres));
      const matchesPropertyTypes = selectedPropertyTypes.length === 0 || (property.propertyType && selectedPropertyTypes.map(t => t.toLowerCase()).includes(property.propertyType.toLowerCase()));
      const allSelectedFeatures = [...selectedFeatures, ...selectedAccessibilityFeatures];
      const matchesFeatures = allSelectedFeatures.length === 0 || (Array.isArray(property.features) && property.features.some((pf: any) => allSelectedFeatures.map(f => f.toLowerCase()).includes(String(pf).toLowerCase())));
      const matchesCurrency = currency === 'GBP';

      return matchesSearch && matchesMode && matchesMinPrice && matchesMaxPrice && matchesAvailability && matchesMinBeds && matchesMaxBeds && matchesMinBaths && matchesMinSqft && matchesMinAcres && matchesPropertyTypes && matchesFeatures && matchesCurrency;
    });
  }, [searchQuery, mode, availability, currency, minPrice, maxPrice, minBeds, maxBeds, minBaths, minSqft, minAcres, selectedPropertyTypes, selectedAccessibilityFeatures, selectedFeatures]);

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProperties = useMemo(() => {
    return filteredProperties.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProperties, startIndex]);

  return (
    <>
      <div className="relative pt-32 pb-8 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-7xl mx-auto px-4 text-gray-900 mb-8"
        >
          <h1 className="text-4xl font-extrabold tracking-tight capitalize">
            Properties for <span className="text-red-600">{mode}</span>
          </h1>
          <p className="mt-2 text-gray-500 font-medium">Showing {filteredProperties.length} curated listings</p>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <PropertyFilter 
            searchQuery={searchQuery} setSearchQuery={setSearchQuery}
            mode={mode} setMode={setMode}
            availability={availability} setAvailability={setAvailability}
            currency={currency} setCurrency={setCurrency} 
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
      </div>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {filteredProperties.length === 0 ? (
            <motion.div 
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300"
            >
              <h2 className="text-xl font-semibold text-gray-900">No matching properties</h2>
              <p className="text-gray-500">Try adjusting your filters or searching a different area.</p>
            </motion.div>
          ) : (
            <motion.div 
              key="results-grid"
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {paginatedProperties.map((property) => (
                  <motion.div
                    key={property.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <PropertyCard property={property} />
                  </motion.div>
                ))}
                
                {/* Lead Gen Card - Integrated into Layout */}
                <motion.div 
                  layout
                  className="bg-red-600 rounded-3xl p-8 text-white flex flex-col justify-center items-center text-center space-y-6"
                >
                  <h3 className="text-2xl font-bold">Not finding it?</h3>
                  <p className="text-red-100 text-sm">Register to get notified of new matching listings.</p>
                  <button className="bg-white text-red-600 px-8 py-3 rounded-xl font-bold hover:bg-red-50 transition-colors">
                    Join List
                  </button>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pagination - Animate Layout Changes */}
        {totalPages > 1 && (
          <motion.div 
            layout
            className="mt-16 flex justify-center items-center gap-2"
          >
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
          </motion.div>
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