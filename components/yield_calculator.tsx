"use client";
import React, { useState } from 'react';

const YieldCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState(450000);
  const [monthlyRent, setMonthlyRent] = useState(2800);

  const grossYield = ((monthlyRent * 12) / purchasePrice) * 100;

  return (
    <div className="bg-gray-50 rounded-[40px] p-8 md:p-12 border border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Yield Calculator</h2>
          <p className="text-gray-500">Calculate your potential gross rental return instantly.</p>
        </div>
        <div className="bg-white px-8 py-4 rounded-3xl border border-red-100 shadow-sm text-center min-w-[200px]">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Gross Yield</span>
          <span className="text-4xl font-black text-red-600">{grossYield.toFixed(2)}%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-4">Purchase Price (£)</label>
            <input 
              type="number" 
              value={purchasePrice} 
              onChange={(e) => setPurchasePrice(Number(e.target.value))}
              className="w-full p-5 bg-white border-none rounded-2xl shadow-inner focus:ring-2 focus:ring-red-600 transition-all text-xl font-bold"
            />
            <input 
              type="range" min="100000" max="2000000" step="10000"
              value={purchasePrice} onChange={(e) => setPurchasePrice(Number(e.target.value))}
              className="w-full mt-6 accent-red-600"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-4">Expected Monthly Rent (£)</label>
            <input 
              type="number" 
              value={monthlyRent} 
              onChange={(e) => setMonthlyRent(Number(e.target.value))}
              className="w-full p-5 bg-white border-none rounded-2xl shadow-inner focus:ring-2 focus:ring-red-600 transition-all text-xl font-bold"
            />
            <input 
              type="range" min="500" max="15000" step="100"
              value={monthlyRent} onChange={(e) => setMonthlyRent(Number(e.target.value))}
              className="w-full mt-6 accent-red-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YieldCalculator;