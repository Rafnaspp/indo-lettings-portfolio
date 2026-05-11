"use client";
import React, { useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { reviews } from '../data/review';

const Reviews = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.children[0] as HTMLElement;
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        const gapWidth = 24;
        const scrollAmount = cardWidth + gapWidth;
        scrollContainerRef.current.scrollBy({ 
          left: direction === 'left' ? -scrollAmount : scrollAmount, 
          behavior: 'smooth' 
        });
      }
    }
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Changed from col-span-4 to col-span-12 to span full width */}
        <div className="w-full bg-[#e6fcf5] p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between text-center md:text-left text-black shadow-sm border border-[#c2f2e1]">
          
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-4xl font-bold mb-2">Excellent</h2>
            
            {/* Trustpilot Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-[#00b67a] p-1 shadow-sm">
                  <Star size={20} className="fill-white text-white" />
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-sm font-medium">
              Based on <span className="font-bold underline text-black">6,248 reviews</span>
            </p>
          </div>
          
          {/* Trustpilot Logo Area */}
          <div className="flex flex-col items-center md:items-end mt-8 md:mt-0">
            <div className="flex items-center gap-2">
              <Star className="fill-[#00b67a] text-[#00b67a]" size={32} />
              <span className="text-2xl font-bold tracking-tight text-black">Trustpilot</span>
            </div>
            
            {/* Navigation Buttons Commented Out */}
            {/* <div className="flex gap-3 mt-6">
              <button 
                onClick={() => scroll('left')}
                className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-all shadow-sm"
              >
                <ChevronLeft size={20} className="text-black" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-all shadow-sm"
              >
                <ChevronRight size={20} className="text-black" />
              </button>
            </div> 
            */}
          </div>
        </div>

        {/* Right Side: Individual Reviews - COMMENTED OUT AS REQUESTED */}
        {/* <div 
          ref={scrollContainerRef} 
          className="mt-12 flex gap-6 overflow-x-scroll scroll-smooth pb-6 no-scrollbar"
        >
          {reviews.map((review) => (
            <div key={review.id} ...>
              ...
            </div>
          ))} 
        </div> 
        */}
      </div>
    </section>
  );
};

export default Reviews;