'use client';
import React, { useState, useMemo } from 'react';
import PropertyFilter from '@/components/properties/propperty_filter';
import PropertyCard from './property_card';
import { featuredProperties } from '@/data/all_properties';
import Navbar from '../navBar';

const PropertyListingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mode, setMode] = useState<'rent' | 'buy'>('rent');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [type, setType] = useState('all');
  const [beds, setBeds] = useState('all');

  const filteredProperties = useMemo(() => {
    return (featuredProperties as any[]).filter(property => {
      const matchesSearch = 
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (property.location || '').toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesMode = property.mode === mode;
      
      const price = Number(property.price);
      const matchesMin = minPrice === '' || price >= Number(minPrice);
      const matchesMax = maxPrice === '' || price <= Number(maxPrice);

      const matchesType = type === 'all' || property.tag?.toLowerCase() === type.toLowerCase();
      const matchesBeds = beds === 'all' || Number(property.beds) >= Number(beds);

      return matchesSearch && matchesMode && matchesMin && matchesMax && matchesType && matchesBeds;
    });
  }, [searchQuery, mode, minPrice, maxPrice, type, beds]);

  return (
    <main className="min-h-screen bg-gray-50/50">
      <Navbar/>
      {/* Header Section */}
      <div className="bg-gradient-to-b from-gray-100 to-white pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 capitalize">Properties for {mode}</h1>
          <p className="text-gray-500 mt-2">Showing {filteredProperties.length} results</p>
        </div>
      </div>

      <PropertyFilter 
        searchQuery={searchQuery} setSearchQuery={setSearchQuery}
        mode={mode} setMode={setMode}
        minPrice={minPrice} setMinPrice={setMinPrice}
        maxPrice={maxPrice} setMaxPrice={setMaxPrice}
        type={type} setType={setType}
        beds={beds} setBeds={setBeds}
      />

      <section className="max-w-7xl mx-auto px-4 py-12">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
            <h2 className="text-xl font-semibold text-gray-900">No matching properties</h2>
            <p className="text-gray-500">Try adjusting your filters or searching a different area.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
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
        <div className="mt-16 flex justify-center items-center gap-2">
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-400 disabled:opacity-50">Prev</button>
          {[1, 2, 3].map(page => (
            <button key={page} className={`w-10 h-10 rounded-lg font-bold transition-all ${page === 1 ? 'bg-red-600 text-white' : 'hover:bg-gray-100 text-gray-600'}`}>
              {page}
            </button>
          ))}
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-900 hover:bg-gray-100">Next</button>
        </div>
      </section>
    </main>
  );
};

export default PropertyListingPage;