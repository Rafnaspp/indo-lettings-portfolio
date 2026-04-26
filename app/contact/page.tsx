import React from 'react';
import { Mail } from 'lucide-react';

const team = [
  { name: "Sarah Johnson", role: "Managing Director", img: "https://i.pravatar.cc/150?u=sarah" },
  { name: "Marcus Chen", role: "Head of Lettings", img: "https://i.pravatar.cc/150?u=marcus" },
  { name: "Elena Rodriguez", role: "Sales Manager", img: "https://i.pravatar.cc/150?u=elena" },
  { name: "David Smith", role: "Property Management", img: "https://i.pravatar.cc/150?u=david" },
];

const accreditations = ["ARLA", "Propertymark", "DPS", "The Property Ombudsman"];

const TeamSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Accreditations / Logo Cloud */}
        <div className="mb-24">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">Accredited by the industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
            {accreditations.map(logo => (
              <span key={logo} className="text-2xl font-black text-gray-900 tracking-tighter">{logo}</span>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Experts</h2>
          <p className="text-gray-500">The dedicated team behind IndoLettings’ success.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group relative">
              <div className="aspect-[4/5] rounded-[32px] overflow-hidden mb-6 bg-gray-100">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8 gap-4">
                  <button className="p-3 bg-white rounded-full text-gray-900 hover:bg-red-600 hover:text-white transition-all">LinkedIn</button>
                  <button className="p-3 bg-white rounded-full text-gray-900 hover:bg-red-600 hover:text-white transition-all"><Mail size={18} /></button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-500 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;