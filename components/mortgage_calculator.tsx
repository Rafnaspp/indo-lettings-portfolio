"use client";
import React, { useState, useEffect } from 'react';
import { PoundSterling, Percent, Timer, Calculator } from 'lucide-react';

const MortgageCalculator = () => {
  const [price, setPrice] = useState(350000);
  const [deposit, setDeposit] = useState(35000);
  const [interest, setInterest] = useState(4.5);
  const [term, setTerm] = useState(25);
  const [monthly, setMonthly] = useState(0);

  useEffect(() => {
    const principal = price - deposit;
    const monthlyRate = interest / 100 / 12;
    const numberOfPayments = term * 12;
    
    const x = Math.pow(1 + monthlyRate, numberOfPayments);
    const monthlyPayment = (principal * x * monthlyRate) / (x - 1);
    
    setMonthly(isNaN(monthlyPayment) ? 0 : monthlyPayment);
  }, [price, deposit, interest, term]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gray-900 rounded-[40px] p-8 md:p-16 overflow-hidden relative">
          {/* Design element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 blur-[120px] -translate-y-1/2 translate-x-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Mortgage Calculator</h2>
              <p className="text-gray-400 mb-12 text-lg">
                Estimate your monthly repayments and see how much you could borrow for your dream home.
              </p>

              <div className="space-y-8">
                {/* Property Price Slider */}
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="text-gray-300 font-medium">Property Price</label>
                    <span className="text-white font-bold text-xl">£{price.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" min="50000" max="2000000" step="5000"
                    value={price} onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                </div>

                {/* Deposit Slider */}
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="text-gray-300 font-medium">Deposit</label>
                    <span className="text-white font-bold text-xl">£{deposit.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" min="5000" max={price * 0.9} step="1000"
                    value={deposit} onChange={(e) => setDeposit(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">Interest Rate (%)</label>
                    <input 
                      type="number" value={interest} onChange={(e) => setInterest(Number(e.target.value))}
                      className="w-full bg-gray-800 border-none rounded-xl p-4 text-white font-bold focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">Term (Years)</label>
                    <input 
                      type="number" value={term} onChange={(e) => setTerm(Number(e.target.value))}
                      className="w-full bg-gray-800 border-none rounded-xl p-4 text-white font-bold focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results Card */}
            <div className="bg-white rounded-[32px] p-10 text-center">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calculator className="text-red-600" size={32} />
              </div>
              <p className="text-gray-500 font-medium mb-2 uppercase tracking-widest text-xs">Estimated Monthly Payment</p>
              <div className="text-6xl font-black text-gray-900 mb-8">
                £{Math.round(monthly).toLocaleString()}
              </div>
              
              <div className="space-y-4 pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-400">Total amount to borrow: <span className="font-bold text-gray-900">£{(price - deposit).toLocaleString()}</span></p>
                <button className="w-full bg-red-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-100">
                  Speak to an Advisor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MortgageCalculator;