import React from 'react';
import PropertyGallery from '@/components/properties/property_gallery';
import BookingSidebar from '@/components/properties/booking_sidebar';
import { Bed, Bath, Move, Calendar, Shield, MapPin } from 'lucide-react';

const PropertyDetailPage = () => {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-gray-400 mb-6 gap-2">
          <a href="/" className="hover:text-red-600">Home</a> / 
          <a href="/properties" className="hover:text-red-600">Properties</a> / 
          <span className="text-gray-900 font-medium">Canary Wharf Penthouse</span>
        </nav>

        {/* 1. Bento Grid Gallery */}
        <PropertyGallery />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          
          {/* Left Column: Details (8 Columns) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Header Info */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Luxury Penthouse with River Views</h1>
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin size={18} className="text-red-600" />
                <span>Marsh Wall, Canary Wharf, London E14</span>
              </div>
            </div>

            {/* Quick Specs Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Bedrooms</span>
                <div className="flex items-center gap-2 font-bold text-gray-900">
                  <Bed size={20} className="text-red-600" /> 3 Beds
                </div>
              </div>
              <div className="flex flex-col gap-1 text-gray-900">
                <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Bathrooms</span>
                <div className="flex items-center gap-2 font-bold">
                  <Bath size={20} className="text-red-600" /> 2 Baths
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Area</span>
                <div className="flex items-center gap-2 font-bold text-gray-900">
                  <Move size={20} className="text-red-600" /> 1,250 sqft
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Available</span>
                <div className="flex items-center gap-2 font-bold text-gray-900">
                  <Calendar size={20} className="text-red-600" /> Now
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">About this property</h3>
              <p className="text-gray-600 leading-relaxed">
                This stunning three-bedroom penthouse offers unparalleled views of the Thames and the London skyline. 
                Finished to an impeccable standard, the property features a vast open-plan living area, 
                a bespoke Italian kitchen with Gaggenau appliances, and a wrap-around private terrace.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Residents also benefit from 24-hour concierge services, a private cinema room, and access to 
                one of London's highest residential gym and spa facilities.
              </p>
            </div>
          </div>

          {/* Right Column: Sticky Sidebar (4 Columns) */}
          <div className="lg:col-span-4 relative">
            <BookingSidebar />
          </div>

        </div>
      </div>
    </main>
  );
};

export default PropertyDetailPage;