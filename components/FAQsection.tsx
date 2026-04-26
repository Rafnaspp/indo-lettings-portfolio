"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = ({ items, title }: { items: FAQItem[], title: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">{title}</h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm transition-all">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900 pr-8">{item.question}</span>
                {openIndex === index ? <Minus size={20} className="text-red-600 shrink-0" /> : <Plus size={20} className="text-gray-400 shrink-0" />}
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-height-auto opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-6 pt-0 text-gray-500 leading-relaxed border-t border-gray-50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;