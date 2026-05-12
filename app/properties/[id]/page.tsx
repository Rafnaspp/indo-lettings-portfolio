"use client";

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion
import { featuredProperties } from '@/data/all_properties'; 
import PropertyGallery from '@/components/properties/property_gallery';
import BookingSidebar from '@/components/properties/booking_sidebar';
import { Bed, Bath, Move, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import GlassyNavBar from '@/components/glassyNavBar';

const PropertyDetailPage = () => {
  const params = useParams();
  const property = featuredProperties.find((p) => String(p.id) === String(params.id));

  if (!property) {
    return notFound();
  }

  // Animation variants for staggered list items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-white pt-24 pb-20 overflow-hidden">
      <GlassyNavBar />
      
      <div className="max-w-7xl mx-auto px-4 mt-8">
        
        {/* Breadcrumbs - Simple Fade In */}
        <motion.nav 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex text-sm text-gray-400 mb-6 gap-2"
        >
          <Link href="/" className="hover:text-red-600">Home</Link> / 
          <Link href="/properties" className="hover:text-red-600">Properties</Link> / 
          <span className="text-gray-900 font-medium">{property.title}</span>
        </motion.nav>

        {/* Gallery - Scale and Fade entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <PropertyGallery images={property.images} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Header Info - Slide up */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>

            {/* Quick Specs Bar - Staggered Slide In */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-50 rounded-3xl border border-gray-100"
            >
              {[
                { label: 'Bedrooms', value: `${property.beds} Beds`, icon: Bed },
                { label: 'Bathrooms', value: `${property.baths} Baths`, icon: Bath },
                { label: 'Area', value: `${property.sqft.toLocaleString()} sqft`, icon: Move },
                { label: 'Available', value: 'Now', icon: Calendar },
              ].map((spec, i) => (
                <motion.div key={i} variants={itemVariants} className="flex flex-col gap-1">
                  <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">{spec.label}</span>
                  <div className="flex items-center gap-2 font-bold text-gray-900">
                    <spec.icon size={20} className="text-red-600" /> {spec.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Description - Fade In */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900">About this property</h3>
              <p className="text-gray-600 leading-relaxed">
                {property.description || `This stunning ${property.beds} bedroom ${property.type?.toLowerCase() || 'property'} located at ${property.address} offers a premium living experience.`}
              </p>
            </motion.div>

            {/* Key Features - Checkmarks appearing one by one */}
            {property.features && property.features.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Key Features</h3>
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {property.features.map((feature: string, index: number) => (
                    <motion.div 
                      key={index} 
                      variants={itemVariants}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Sidebar - Slide in from the Right */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4 relative"
          >
            <BookingSidebar 
              price={property.price} 
              mode={property.mode}
              title={property.title}
              address={(property.location || property.address)??''}
            />
          </motion.div>

        </div>
      </div>
    </main>
  );
};

export default PropertyDetailPage;