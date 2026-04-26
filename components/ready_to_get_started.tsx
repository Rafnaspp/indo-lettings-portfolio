import React from 'react';
import Link from 'next/link';

const ReadyToStart = () => {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Title & Description */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Ready to get started?
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Whether you're looking to buy, sell, or rent, our team of experts is 
          here to guide you through every step of your property journey.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/register" 
            className="w-full sm:w-auto bg-red-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-red-700 hover:shadow-lg hover:shadow-red-200 transition-all active:scale-95"
          >
            Get started
          </Link>
          
          <Link 
            href="/contact" 
            className="w-full sm:w-auto bg-white text-gray-900 border-2 border-gray-200 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStart;