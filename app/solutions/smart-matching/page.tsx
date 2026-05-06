import InfoTemplate from '@/components/info_template';
import { 
  ShieldCheck, Wallet, UserCheck, Briefcase, 
  FileText, Clock, Heart, CheckCircle, ArrowLeft 
} from 'lucide-react';
import Link from 'next/link';

const SmartMatchingPage = () => {
  const points = [
    { title: "Financial Stability", icon: <Wallet className="text-red-600 w-5 h-5" />, text: "Analysis of debt-to-income ratios and long-term affordability markers." },
    { title: "Rental History & References", icon: <UserCheck className="text-red-600 w-5 h-5" />, text: "Authenticated verification of past residency behavior and landlord testimonials." },
    { title: "Employment Validation", icon: <Briefcase className="text-red-600 w-5 h-5" />, text: "Verification of contract types and income stability across all sectors." },
    { title: "Right to Rent Compliance", icon: <ShieldCheck className="text-red-600 w-5 h-5" />, text: "Automated legal residency checks to ensure 100% regulatory compliance." },
    { title: "Guarantor Analysis", icon: <CheckCircle className="text-red-600 w-5 h-5" />, text: "Rigorous vetting of secondary financial backers for added security." },
    { title: "Pre-Screening Questions", icon: <FileText className="text-red-600 w-5 h-5" />, text: "Custom questionnaires to filter applicants before the first viewing." },
    { title: "Benefits & Subsidies", icon: <Heart className="text-red-600 w-5 h-5" />, text: "Inclusive processing of housing support for secure payment structures." },
    { title: "Commute Optimization", icon: <Clock className="text-red-600 w-5 h-5" />, text: "Matching based on daily travel patterns and local amenities." },
  ];

  const smartMatchingContent = (
    <div className="space-y-12">
      <section>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Finding the right tenant is more than just checking a credit score. Our proprietary 
          Smart Matching algorithm analyzes over 20 data points to ensure a perfect fit 
          between the property and the occupant.
        </p>
        
        {/* Key Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose">
          {points.map((point, index) => (
            <div key={index} className="flex gap-4 p-5 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300 group">
              <div className="mt-1 p-2 rounded-lg bg-red-50 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                {/* Clone element to apply dynamic classes if needed, or just pass icon */}
                {point.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">{point.title}</h4>
                <p className="text-sm text-gray-500 leading-snug">{point.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dark Highlight Section */}
      <section className="bg-gray-900 text-white p-10 rounded-[2rem] not-prose shadow-2xl">
        <h3 className="text-2xl font-bold mb-4">Behavioral compatibility analysis</h3>
        <p className="text-gray-400 mb-0 leading-relaxed">
          Our system goes beyond paperwork to predict long-term stability. By analyzing 
          lifestyle requirements and historical data, we reduce turnover rates and 
          foster more harmonious tenancies for both parties.
        </p>
      </section>

      {/* Navigation Footer */}
      <div className="pt-12 border-t border-gray-100 not-prose">
        <Link 
          href="/" 
          className="group inline-flex items-center gap-3 text-gray-500 hover:text-red-600 font-medium transition-all duration-300"
        >
          <div className="p-2 rounded-full border border-gray-200 group-hover:border-red-600 group-hover:bg-red-50 transition-all">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </div>
          Back to all solutions
        </Link>
      </div>
    </div>
  );

  return (
    <InfoTemplate
      title="Smart Matching"
      subtitle="Our advanced algorithm matches tenants with their ideal homes based on lifestyle, budget, and location preferences."
      content={smartMatchingContent}
    />
  );
};

export default SmartMatchingPage;