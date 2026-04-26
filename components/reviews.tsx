import React from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviews } from '../data/review';

const Reviews = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Summary Card */}
          <div className="lg:col-span-4 bg-gray-50 p-10 rounded-3xl border border-gray-100 flex flex-col items-start">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-red-600 text-red-600" />
              ))}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Excellent</h2>
            <p className="text-gray-600 mb-8">
              Based on <span className="font-bold text-gray-900">1,200+ reviews</span> on Trustpilot and Google.
            </p>
            
            <div className="flex gap-3 mt-auto">
              <button className="p-3 rounded-full border border-gray-200 hover:bg-white hover:shadow-md transition-all">
                <ChevronLeft size={20} />
              </button>
              <button className="p-3 rounded-full border border-gray-200 hover:bg-white hover:shadow-md transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Side: Individual Reviews */}
          <div className="lg:col-span-8 flex flex-col md:flex-row gap-6">
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="flex-1 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all relative"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-red-600 text-red-600" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 leading-relaxed mb-8 italic">
                  "{review.content}"
                </p>

                {/* Profile Info */}
                <div className="flex items-center gap-4">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full border-2 border-red-50"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 leading-none">{review.name}</h4>
                    <span className="text-sm text-gray-500">{review.role}</span>
                  </div>
                </div>

                {/* Decorative Quote Icon */}
                <Quote className="absolute top-8 right-8 text-red-50 w-12 h-12 -z-0 opacity-50" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reviews;