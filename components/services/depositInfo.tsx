import React from 'react';
import { ShieldCheck, Scale, Landmark } from 'lucide-react';

const DepositInfo = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl w-fit"><ShieldCheck size={32} /></div>
            <h4 className="text-xl font-bold text-gray-900">Secure Protection</h4>
            <p className="text-gray-500 text-sm">All deposits are registered with the Deposit Protection Service (DPS) within 30 days of receipt.</p>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 text-green-600 rounded-2xl w-fit"><Landmark size={32} /></div>
            <h4 className="text-xl font-bold text-gray-900">Compliance First</h4>
            <p className="text-gray-500 text-sm">We ensure all Prescribed Information is served to tenants to protect your legal position as a landlord.</p>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl w-fit"><Scale size={32} /></div>
            <h4 className="text-xl font-bold text-gray-900">Fair Mediation</h4>
            <p className="text-gray-500 text-sm">Our team handles end-of-tenancy negotiations and evidence gathering for any required claims.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositInfo;