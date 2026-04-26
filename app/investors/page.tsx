import React from 'react';
import YieldCalculator from '@/components/YieldCalculator';
import { BarChart3, TrendingUp, PieChart, ShieldCheck, ArrowUpRight } from 'lucide-react';

const InvestorPage = () => {
  return (
    <main className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Build your <span className="text-red-600">Wealth</span> through Property.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-lg">
              Expert-led investment strategies for the London market. We find the deals, calculate the yields, and manage the growth.
            </p>
            <div className="flex gap-4">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-600 transition-all flex items-center gap-2">
                View Opportunities <ArrowUpRight size={18} />
              </button>
              <button className="border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all">
                Download Guide
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-50 p-8 rounded-[40px] space-y-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-red-600 shadow-sm">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-3xl font-black text-gray-900">7.4%</h3>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Avg. Annual Yield</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-[40px] space-y-4 text-white">
              <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-red-500 shadow-sm">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-3xl font-black">£240M+</h3>
              <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Assets Managed</p>
            </div>
          </div>
        </div>

        {/* 2. The Yield Calculator Tool */}
        <YieldCalculator />

        {/* 3. Investment Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            <div className="p-8 rounded-[32px] border border-gray-100 hover:shadow-xl transition-all">
                <PieChart className="text-red-600 mb-6" size={40} />
                <h4 className="text-xl font-bold mb-4">Portfolio Strategy</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Diversified investment plans tailored to your long-term capital growth or immediate cash flow needs.</p>
            </div>
            <div className="p-8 rounded-[32px] border border-gray-100 hover:shadow-xl transition-all">
                <ShieldCheck className="text-red-600 mb-6" size={40} />
                <h4 className="text-xl font-bold mb-4">Risk Management</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Full due diligence on every development, ensuring your investment is secure and compliant.</p>
            </div>
            <div className="p-8 rounded-[32px] border border-gray-100 hover:shadow-xl transition-all">
                <TrendingUp className="text-red-600 mb-6" size={40} />
                <h4 className="text-xl font-bold mb-4">Development Access</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Early-stage access to off-market developments and high-yield regeneration zones across the UK.</p>
            </div>
        </div>
      </div>
    </main>
  );
};

export default InvestorPage;