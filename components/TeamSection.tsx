import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

const teamMembers = [
  {
    name: "Marcus Sterling",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    bio: "Over 15 years of experience in the London luxury property market."
  },
  {
    name: "Sarah Chen",
    role: "Head of Lettings",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    bio: "Specializes in high-yield residential portfolios and tenant relations."
  },
  {
    name: "James Wilson",
    role: "Senior Sales Consultant",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    bio: "Expert negotiator with a deep focus on the Docklands and Canary Wharf."
  },
  {
    name: "Elena Rodriguez",
    role: "Property Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    bio: "Ensuring 24/7 peace of mind for our landlords and tenants alike."
  }
];

const accreditations = [
  { name: "ARLA", full: "Propertymark Protected" },
  { name: "DPS", full: "Deposit Protection Service" },
  { name: "The Property Ombudsman", full: "Independent Redress" },
  { name: "SafeAgent", full: "Client Money Protection" }
];

const TeamSection = () => {
  return (
    <div className="space-y-24">
      {/* 1. Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="group flex flex-col">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] mb-6 bg-gray-100">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
              <div className="absolute bottom-4 right-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex gap-2">
                  <div className="p-3 bg-white rounded-full shadow-lg text-gray-900 hover:bg-red-600 hover:text-white transition-colors cursor-pointer">
                    LinkedIn
                  </div>
                  <div className="p-3 bg-white rounded-full shadow-lg text-gray-900 hover:bg-red-600 hover:text-white transition-colors cursor-pointer">
                    <Mail size={18} />
                  </div>
                </div>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
            <p className="text-red-600 text-sm font-bold uppercase tracking-widest mb-3">{member.role}</p>
            <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
          </div>
        ))}
      </div>

      {/* 2. Accreditation Cloud */}
      <div className="pt-20 border-t border-gray-100">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-4">Fully Regulated & Accredited</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
          {accreditations.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-2xl font-black text-gray-900 tracking-tighter mb-1">{item.name}</span>
              <span className="text-[10px] font-bold text-gray-500 uppercase">{item.full}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Join the Team CTA */}
      <div className="bg-gray-50 rounded-[40px] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Want to work with us?</h3>
          <p className="text-gray-500">We are always looking for passionate property professionals.</p>
        </div>
        <button className="flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 rounded-2xl font-bold text-gray-900 hover:border-red-600 hover:text-red-600 transition-all">
          View Careers <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default TeamSection;