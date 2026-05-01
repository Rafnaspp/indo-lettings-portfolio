 
"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import InfoTemplate from '@/components/info_template';
import TeamSection from '@/components/TeamSection';
import ContactPage from '@/app/contact/page'; // Reusing the high-end contact layout
import GlassyNavBar from '@/components/glassyNavBar';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Clock, Shield, Hammer, ClipboardList, MessageSquare } from 'lucide-react';
import { insights } from '@/data/insights';

const aboutContent: any = {
  'contact-us': { isContact: true },
  'register-requirements': {
    title: "Register Your Requirements",
    subtitle: "Tell us what you're looking for, and we'll find it first.",
    isForm: true,
    icon: <ClipboardList className="text-red-600" size={40} />
  },
  'opening-hours': {
    title: "Opening Hours",
    subtitle: "When you can find us at our London office.",
    isHours: true,
    icon: <Clock className="text-red-600" size={40} />
  },
  'Maintenance': {
    title: "Urgent Maintenance",
    subtitle: "Reporting an issue? We're here to help 24/7.",
    isUrgent: true,
    icon: <Hammer className="text-red-600" size={40} />
  },
  'Enquiries': {
    title: "General Enquiries",
    subtitle: "Have a question? Our team has the answer.",
    isForm: true,
    icon: <MessageSquare className="text-red-600" size={40} />
  },
  'team': {
    title: "Meet The Team",
    subtitle: "The experts behind IndoLettings.",
    isTeam: true
  },
  'accreditation': {
    title: "Our Accreditations",
    subtitle: "Regulated by the industry's highest standards.",
    isAccredited: true,
    icon: <Shield className="text-red-600" size={40} />
  },
  'blogs': {
    title: "Property Insights & News",
    subtitle: "Stay updated with the latest London property trends.",
    isBlog: true
  }
};

const AboutDynamicPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const data = aboutContent[slug];

  if (!data) return <div className="pt-40 text-center text-gray-400 uppercase tracking-widest">Section Coming Soon</div>;

  // 1. Direct Page Overrides
  if (data.isContact) return <><GlassyNavBar/><ContactPage/><Footer/></>;

  return (
    <>
      <GlassyNavBar />
      <InfoTemplate 
        title={data.title}
        subtitle={data.subtitle}
        content={
          <div className="space-y-12">
            {/* Team Section Logic */}
            {data.isTeam && <TeamSection />}

            {/* Maintenance/Urgent Logic */}
            {data.isUrgent && (
              <div className="bg-red-50 p-10 rounded-[40px] border-2 border-red-100">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-red-600 text-white rounded-2xl"><Hammer size={24}/></div>
                    <h3 className="text-2xl font-bold text-gray-900">Emergency Protocol</h3>
                </div>
                <p className="text-gray-600 mb-8">For out-of-hours emergencies regarding plumbing, electrical, or structural issues, please call our 24/7 hotline at <strong>020 7123 4567</strong>.</p>
                <button className="w-full bg-red-600 text-white py-4 rounded-2xl font-bold hover:bg-red-700 transition-all">Report Issue Now</button>
              </div>
            )}

            {/* Opening Hours Logic */}
            {data.isHours && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-gray-50 rounded-3xl">
                    <h4 className="font-bold text-gray-900 mb-4">Standard Hours</h4>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex justify-between"><span>Mon - Fri</span> <span>09:00 - 18:00</span></li>
                        <li className="flex justify-between"><span>Saturday</span> <span>10:00 - 16:00</span></li>
                        <li className="flex justify-between"><span>Sunday</span> <span className="text-red-600 font-bold">Closed</span></li>
                    </ul>
                </div>
              </div>
            )}

            {/* Blog Placeholder */}
            {data.isBlog && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {insights.map((post) => (
                  <Link key={post.id} href={post.link} className="group cursor-pointer">
                    <div className="aspect-video bg-gray-100 rounded-3xl mb-4 overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">{post.category}</span>
                    <h4 className="text-xl font-bold group-hover:text-red-600 transition-colors mt-1">{post.title}</h4>
                    <p className="text-sm text-gray-500 mt-2">Read more →</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        }
      />
      <Footer />
    </>
  );
};

export default AboutDynamicPage;