import React from 'react';
import { notFound } from 'next/navigation';
import { smartSolutions } from '@/data/solutions';
import InfoTemplate from '@/components/info_template';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return smartSolutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = smartSolutions.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  const Icon = solution.icon;

  return (
    <InfoTemplate
      title={solution.title}
      subtitle={solution.description}
      content={
        <div className="space-y-12">
          <div className="p-8 bg-red-50 rounded-3xl inline-flex mb-8">
            <Icon size={48} className="text-red-600" />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">How it works</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {solution.fullDescription}
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {solution.features.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 size={20} className="text-red-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8 border-t border-gray-100">
            <Link href="/about" className="text-gray-500 hover:text-red-600 transition-colors inline-flex items-center gap-2">
              &larr; Back to all solutions
            </Link>
          </div>
        </div>
      }
    />
  );
}