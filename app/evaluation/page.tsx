"use client";
import React, { useState } from 'react';
import GlassyNavBar from '@/components/glassyNavBar';
import Footer from '@/components/footer';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxL7vR_YULl1exOh2ov7FoLcx6JwR3EoBC-d4LdiQeT4iVmq-Vf5qabXEyqOALO2Ym26w/exec"; // Placeholder

const ValuationPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Example fetch to Google Sheets Webhook
      await fetch(GOOGLE_SHEET_WEBHOOK_URL, { method: 'POST', body: JSON.stringify(data) });
      console.log("Form Data:", data);
      setTimeout(() => {
        setSubmitted(true);
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Submission error", error);
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <>
        <GlassyNavBar />
        <div className="min-h-[80vh] flex items-center justify-center pt-20">
          <div className="text-center space-y-6 max-w-md px-4">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={40} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Request Received</h1>
            <p className="text-gray-500 leading-relaxed">
              Thank you for booking your free valuation. One of our local experts will contact you shortly to confirm the appointment.
            </p>
            <button onClick={() => setSubmitted(false)} className="text-red-600 font-bold hover:underline">
              Submit another request
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <GlassyNavBar />
      <main className="pt-32 pb-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-[40px] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
            <div className="p-8 md:p-12 border-b border-gray-50">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Book your property valuation</h1>
              <p className="text-gray-500">Whether you are selling or renting, get an expert opinion on your property's market value.</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
              {/* Personal Details */}
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-red-600">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Title (optional)</label>
                    <select name="title" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 font-medium" style={{ color: '#000000' }}>
                      <option value="">Select...</option>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Ms">Ms</option>
                      <option value="Dr">Dr</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                    <input required name="firstName" type="text" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 font-medium" style={{ color: '#000000' }} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                    <input required name="lastName" type="text" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 font-medium" style={{ color: '#000000' }} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input required name="email" type="email" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 font-medium" style={{ color: '#000000' }} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2" style={{ color: '#000000' }}>Phone Number (optional)</label>
                    <input name="phone" type="tel" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 font-medium" style={{ color: '#000000' }} />
                  </div>
                </div>
              </div>

              {/* Reason */}
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-red-600">Reason for valuation</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Sell', 'Let', 'Remortgage', 'Formal Sell/Let'].map((reason) => (
                    <label key={reason} className="relative flex flex-col items-center justify-center p-4 border-2 border-gray-100 rounded-2xl cursor-pointer hover:border-red-100 has-[:checked]:border-red-600 has-[:checked]:bg-red-50 transition-all">
                      <input type="radio" name="reason" value={reason} required className="sr-only" />
                      <span className="text-sm font-bold text-gray-800">{reason}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Property Address */}
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-red-600">Property Address</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input required name="address1" placeholder="Address line 1" type="text" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 font-medium" style={{ color: '#000000', opacity: 1, WebkitTextFillColor: '#000000' }} />
                    <input name="address2" placeholder="Address line 2 (optional)" type="text" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 font-medium" style={{ color: '#000000', opacity: 1, WebkitTextFillColor: '#000000' }} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <input required name="town" placeholder="Town / City" type="text" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 font-medium" style={{ color: '#000000', opacity: 1, WebkitTextFillColor: '#000000' }} />
                    <input name="county" placeholder="County (optional)" type="text" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 font-medium" style={{ color: '#000000', opacity: 1, WebkitTextFillColor: '#000000' }} />
                    <input required name="postcode" placeholder="Postcode" type="text" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 font-medium" style={{ color: '#000000', opacity: 1, WebkitTextFillColor: '#000000' }} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Country</label>
                    <input readOnly name="country" value="United Kingdom" type="text" className="w-full p-4 bg-gray-100 border-none rounded-2xl font-medium text-gray-500 cursor-not-allowed" />
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-red-600">Additional Information</h3>
                <textarea 
                  name="additionalInfo"
                  rows={4}
                  placeholder="Add any additional information we may need to know about your property (optional)..."
                  className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 font-medium resize-none"
                  style={{ color: '#000000', opacity: 1, WebkitTextFillColor: '#000000' }}
                />
              </div>

              <div className="pt-6 space-y-6">
                <button 
                  disabled={loading}
                  type="submit" 
                  className="w-full bg-red-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-red-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-red-100 disabled:opacity-50"
                >
                  {loading ? "Processing..." : "Send Request"}
                  {!loading && <ArrowRight size={22} />}
                </button>
                
                <p className="text-center text-[10px] text-gray-400 leading-relaxed uppercase tracking-widest px-8">
                  We take the processing and privacy of your information very seriously. 
                  Your data is collected and used in accordance with our 
                  <a href="#" className="underline ml-1">terms and conditions</a> and 
                  <a href="#" className="underline ml-1">global privacy policy</a>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ValuationPage;