"use client";
import React, { useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviews } from '../data/review';

const Reviews = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Calculate scroll amount based on the width of one card plus the gap.
      // Assuming each card has min-w-[calc(50%-0.75rem)] and there's a gap-6 (1.5rem = 24px).
      const firstCard = scrollContainerRef.current.children[0] as HTMLElement;
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        const gapWidth = 24; // gap-6 is 1.5rem, assuming 1rem = 16px, so 24px
        const scrollAmount = cardWidth + gapWidth;

        scrollContainerRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
      }
    }
  };

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
              <button 
                onClick={() => scroll('left')}
                className="p-3 rounded-full border border-gray-200 hover:bg-white hover:shadow-md transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-3 rounded-full border border-gray-200 hover:bg-white hover:shadow-md transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Side: Individual Reviews */}
          <div ref={scrollContainerRef} className="lg:col-span-8 flex gap-6 overflow-x-scroll scroll-smooth pb-4">
            {reviews.map((review) => (
              <div 
                key={review.id} 
                // min-w-[calc(50%-0.75rem)] ensures two cards fit side-by-side with a gap-6 (1.5rem = 24px)
                // 0.75rem is half of the gap, so 50% of container width minus half the gap.
                className="min-w-[calc(50%-0.75rem)] bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all relative"
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