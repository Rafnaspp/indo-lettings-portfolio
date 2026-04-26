import React from 'react';
import PropertyFilter from '@/components/properties/propperty_filter';
import PropertyCard from './property_card';// Reuse your card component
import { featuredProperties } from '@/data/properties';

const PropertyListingPage = () => {
  return (
    <main className="min-h-screen bg-gray-50/50">
      {/* Header Section */}
      <div className="bg-white pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900">Properties for rent</h1>
          <p className="text-gray-500 mt-2">Showing {featuredProperties.length} results in London</p>
        </div>
      </div>

      <PropertyFilter />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
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