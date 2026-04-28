import React from 'react';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const BookingSidebar = () => {
  return (
    <div className="sticky top-24 bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-gray-100/50">
      <div className="mb-6">
        <span className="text-gray-400 text-sm">Rent per month</span>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-gray-900">£4,250</span>
          <span className="text-gray-500">pcm</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Full Name</label>
          <input type="text" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-red-600/20" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Email Address</label>
          <input type="email" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-red-600/20" placeholder="john@example.com" />
        </div>
        <Link href="/contact">
        <button className="w-full bg-red-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-lg shadow-red-200">
          Contact Agent
        </button>
        </Link>

        \
      </div>

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