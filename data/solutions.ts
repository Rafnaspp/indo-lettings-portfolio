import { Zap, ShieldCheck, BarChart3, LucideIcon } from 'lucide-react';

export interface Solution {
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  icon: LucideIcon;
  features: string[];
}

export const smartSolutions: Solution[] = [
  {
    title: "Smart Matching",
    slug: "smart-matching",
    description: "Our advanced algorithm matches tenants with their ideal homes based on lifestyle, budget, and location preferences.",
    fullDescription: "Finding the right tenant is more than just checking a credit score. Our proprietary Smart Matching algorithm analyzes over 20 data points—including lifestyle requirements, commute patterns, and long-term stability—to ensure a perfect fit between the property and the occupant. This reduces turnover rates and fosters harmonious tenancies.",
    icon: Zap,
    features: ["Behavioral compatibility analysis", "Commute-time optimization", "Automated reference verification", "Lifestyle-based filtering"]
  },
  {
    title: "Proactive Management",
    slug: "proactive-management",
    description: "We use real-time data to predict maintenance needs and ensure your property remains in top-tier condition.",
    fullDescription: "Traditional property management is reactive. We changed the game by utilizing IoT sensors and historical maintenance data to predict issues before they become expensive repairs. Our proactive approach ensures that minor leaks don't become floods and that your asset's value is preserved through consistent, high-standard care.",
    icon: ShieldCheck,
    features: ["24/7 IoT health monitoring", "Predictive repair scheduling", "Verified contractor network", "Detailed photographic inspections"]
  },
  {
    title: "Transparent ROI",
    slug: "transparent-roi",
    description: "Landlords can track performance, rental yield, and expenses through our intuitive 24/7 digital dashboard.",
    fullDescription: "Stop waiting for end-of-month statements. Our real-time financial dashboard gives you a live view of your property portfolio's performance. Track every penny from rental income to maintenance costs, view projected yields, and download tax-ready reports with a single click. Total transparency, zero guesswork.",
    icon: BarChart3,
    features: ["Live yield tracking", "Automated expense logging", "Tax-ready financial exports", "Multi-property portfolio view"]
  }
];