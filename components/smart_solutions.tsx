import React from 'react';
import Link from 'next/link';
import { smartSolutions, Solution } from '../data/solutions';

const SmartSolutions = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="w-12 h-1 bg-red-600 mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart solutions for every property
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We leverage the latest technology to simplify the rental process, 
            providing a seamless experience for both landlords and tenants.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {smartSolutions.map((solution: Solution, index: number) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group text-center"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors duration-300">
                <solution.icon 
                  size={32} 
                  className="text-red-600 group-hover:text-white transition-colors duration-300" 
                />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {solution.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                {solution.description}
              </p>

              {/* Call to Action Link */}
              <Link 
                href={`/solutions/${solution.slug}`}
                className="text-red-600 font-bold text-sm uppercase tracking-wider hover:text-red-700 transition-colors inline-block"
              >
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartSolutions;