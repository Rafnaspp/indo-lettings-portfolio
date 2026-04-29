import React from 'react';

interface PropertyImages {
  main?: string;
  kitchen?: string;
  bedroom?: string;
  bathroom?: string;
  balcony?: string;
}

interface PropertyGalleryProps {
  images?: PropertyImages;
}

const PropertyGallery = ({ images }: PropertyGalleryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
      {/* Main Large Image */}
      <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden group">
        <img 
          src={images?.main || "/properties/prop1.png"} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          alt="Main view" 
        />
      </div>
      
      {/* Side Images */}
      <div className="rounded-3xl overflow-hidden group">
        <img src={images?.kitchen || "/properties/prop2.png"} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Kitchen" />
      </div>
      <div className="rounded-3xl overflow-hidden group">
        <img src={images?.bedroom || "/properties/prop3.png"} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Bedroom" />
      </div>
      <div className="rounded-3xl overflow-hidden group">
        <img src={images?.bathroom || "/properties/prop1.png"} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Bathroom" />
      </div>
      <div className="rounded-3xl overflow-hidden relative group">
        <img src={images?.balcony || "/properties/prop2.png"} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Balcony" />
        <button className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold text-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
          View all 24 photos
        </button>
      </div>
    </div>
  );
};

export default PropertyGallery;