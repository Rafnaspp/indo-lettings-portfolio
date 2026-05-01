import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

interface BookingSidebarProps {
  price: string | number;
  mode?: 'rent' | 'buy';
  title: string;
  address: string;
}

const BookingSidebar = ({ price, mode = 'rent', title, address }: BookingSidebarProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Sanitize price to handle strings with commas or symbols (e.g. "4,250" or "£4,250")
  const numericPrice = typeof price === 'number' ? price : Number(String(price).replace(/[^0-9.]+/g, ""));

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Replace this with the URL you copied in Step 3
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxsoLcbzILe851qBWWI_BHkLn3TNw54jWMcuINGt_3So27idzE65I_WbKvKD-caTKzY/exec';

  const inquiryData = {
    name,
    email,
    propertyName: title,
    propertyAddress: address,
    timestamp: new Date().toLocaleString() // Readable format for the sheet
  };

  try {
    // We use 'no-cors' mode because Google Apps Script redirects can trigger CORS issues 
    // in simple fetch requests, or you can use a library like axios.
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inquiryData),
    });

    alert(`Interest registered! We will contact you shortly regarding: ${title}`);
    setName('');
    setEmail('');
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    alert("Something went wrong. Please try again later.");
  }
};

  return (
    <div className="sticky top-24 bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-gray-100/50">
      <div className="mb-6">
        <span className="text-gray-400 text-sm">{mode === 'rent' ? 'Rent per month' : 'Guide Price'}</span>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-gray-900">
            £{isNaN(numericPrice) ? price : numericPrice.toLocaleString()}
          </span>
          {mode === 'rent' && <span className="text-gray-500">pcm</span>}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Full Name</label>
          <input 
            type="text" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-red-600/20" 
            placeholder="John Doe" 
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Email Address</label>
          <input 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-red-600/20" 
            placeholder="john@example.com" 
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-red-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-lg shadow-red-200"
        >
          Register Interest
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-gray-50 flex items-center gap-3 text-sm text-gray-500">
        <div className="p-2 bg-green-50 text-green-600 rounded-lg">
          <ShieldCheck size={20} />
        </div>
        <span>Verified by IndoLettings. No hidden admin fees.</span>
      </div>
    </div>
  );
};

export default BookingSidebar;