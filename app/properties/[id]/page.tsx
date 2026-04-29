"use client";

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { featuredProperties } from '@/data/all_properties'; // Use the full dataset
import PropertyGallery from '@/components/properties/property_gallery';
import BookingSidebar from '@/components/properties/booking_sidebar';
import { Bed, Bath, Move, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import GlassyNavBar from '@/components/glassyNavBar';
const PropertyDetailPage = () => {
  const params = useParams();
  
  // Find the property that matches the ID in the URL
  // Use String() conversion to ensure the comparison works regardless of data type
  const property = featuredProperties.find((p) => String(p.id) === String(params.id));

  // If no property is found, show the 404 page
  if (!property) {
    return notFound();
  }

  return (
      <main className="min-h-screen bg-white pt-24 pb-20">
        <GlassyNavBar/>
      <div className="max-w-7xl mx-auto px-4 mt-8">
        
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-gray-400 mb-6 gap-2">
          <Link href="/" className="hover:text-red-600">Home</Link> / 
          <Link href="/properties" className="hover:text-red-600">Properties</Link> / 
          <span className="text-gray-900 font-medium">{property.title}</span>
        </nav>

        {/* 1. Bento Grid Gallery - Pass the property images */}
        <PropertyGallery images={property.images} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          
          {/* Left Column: Details (8 Columns) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Header Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase">
                  For {property.mode}
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase">
                  {property.status}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{property.title}</h1>
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin size={18} className="text-red-600" />
                <span>{property.location || property.address}</span>
              </div>
            </div>

            {/* Quick Specs Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Bedrooms</span>
                <div className="flex items-center gap-2 font-bold text-gray-900">
                  <Bed size={20} className="text-red-600" /> {property.beds} Beds
                </div>
              </div>
              <div className="flex flex-col gap-1 text-gray-900">
                <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Bathrooms</span>
                <div className="flex items-center gap-2 font-bold">
                  <Bath size={20} className="text-red-600" /> {property.baths} Baths
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Area</span>
                <div className="flex items-center gap-2 font-bold text-gray-900">
                  <Move size={20} className="text-red-600" /> {property.sqft.toLocaleString()} sqft
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
                {property.description || `This stunning ${property.beds} bedroom ${property.type?.toLowerCase() || 'property'} located at ${property.address} offers a premium living experience. Finished to an impeccable standard, it features a modern design and spacious interiors.`}
              </p>
            </div>

            {/* Key Features */}
            {property.features && property.features.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Sidebar (4 Columns) */}
          <div className="lg:col-span-4 relative">
            <BookingSidebar 
              price={property.price} 
              mode={property.mode}
              title={property.title}
              address={(property.location || property.address)??''}
            />
          </div>

        </div>
      </div>
    </main>
  );
};

export default PropertyDetailPage;