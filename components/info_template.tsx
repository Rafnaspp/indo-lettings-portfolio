import Link from 'next/link';
import React from 'react';

interface InfoTemplateProps {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  sidebar?: React.ReactNode;
}

const InfoTemplate = ({ title, subtitle, content, sidebar }: InfoTemplateProps) => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content Area */}
          <div className="lg:col-span-8 prose prose-lg prose-red max-w-none">
            {content}
          </div>

          {/* Sidebar Area (Call to Action / Quick Links) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              {sidebar || (
                <div className="bg-red-600 rounded-3xl p-8 text-white shadow-xl shadow-red-100">
                  <h3 className="text-xl font-bold mb-4">Need Expert Advice?</h3>
                  <p className="text-red-100 mb-6 text-sm">
                    Speak to our team today for tailored property solutions.
                  </p>
                  <Link href='/contact'>
                  <button className="w-full py-4 bg-white text-red-600 rounded-xl font-bold hover:bg-red-50 transition-colors">
                    Contact an Advisor
                  </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTemplate;