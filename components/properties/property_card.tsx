import React from 'react';
import { Bed, Bath, Move, Heart, MapPin } from 'lucide-react';
import Link from 'next/link';

interface PropertyProps {
  property: {
    id: number | string;
    title: string;
    location?: string;
    price: number | string;
    beds: number | string;
    baths: number | string;
    sqft: number | string;
    tag?: string;
    image: string;
    mode?: 'rent' | 'buy';
  };
}

const PropertyCard = ({ property }: PropertyProps) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
      
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Status Tag */}
        {property.mode && (
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm ${
              property.mode === 'rent' ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'
            }`}>
              {property.mode === 'rent' ? 'For Rent' : 'For Sale'}
            </span>
          </div>
        ) || property.price && (
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-900 shadow-sm">
              {property.price}
            </span>
          </div>
        )}

        {/* Favorite Button */}
        <button className="absolute top-4 right-4 p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-600 transition-all duration-300">
          <Heart size={18} />
        </button>

        {/* Price Overlay */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-red-600 text-white px-4 py-2 rounded-xl font-bold shadow-lg">
            £{typeof property.price === 'number' ? property.price.toLocaleString() : Number(String(property.price).replace(/[^0-9.]+/g, "")).toLocaleString()}
            {property.mode === 'rent' && <span className="text-xs font-normal opacity-80"> / mo</span>}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
            {property.title}
          </h3>
        </div>

        {property.location && (
          <div className="flex items-center gap-1 text-gray-500 text-sm mb-6">
            <MapPin size={14} className="text-red-500" />
            {property.location}
          </div>
        )}

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-50">
          <div className="flex flex-col items-center gap-1">
            <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-red-50 transition-colors">
              <Bed size={18} className="text-gray-600 group-hover:text-red-600" />
            </div>
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">{property.beds} Beds</span>
          </div>
          
          <div className="flex flex-col items-center gap-1">
            <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-red-50 transition-colors">
              <Bath size={18} className="text-gray-600 group-hover:text-red-600" />
            </div>
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">{property.baths} Baths</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-red-50 transition-colors">
              <Move size={18} className="text-gray-600 group-hover:text-red-600" />
            </div>
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">{property.sqft} sqft</span>
          </div>
        </div>

        {/* Action Button */}
        <Link href={`/properties/${property.id}`} className="block w-full mt-4 py-3 bg-gray-900 text-white text-center text-sm font-bold rounded-xl hover:bg-red-600 transition-all duration-300">
            View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;