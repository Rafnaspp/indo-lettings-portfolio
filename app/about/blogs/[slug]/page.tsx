"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { insights } from '@/data/insights';
import InfoTemplate from '@/components/info_template';
import GlassyNavBar from '@/components/glassyNavBar';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const BlogDetailPage = () => {
  const params = useParams();
  const id = params.slug;
  const post = insights.find((p) => p.id.toString() === id);

  if (!post) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-2xl font-bold">Blog post not found</h1>
        <Link href="/about/blogs" className="text-red-600 mt-4 inline-block">Back to blogs</Link>
      </div>
    );
  }

  return (
    <>
      <GlassyNavBar />
      <InfoTemplate 
        title={post.title}
        subtitle={`${post.category} • ${post.date}`}
        content={
          <div className="space-y-8">
            <Link href="/about/blogs" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-red-600 transition-colors mb-4">
                <ArrowLeft size={16} /> Back to Insights
            </Link>
            
            <div className="aspect-video w-full rounded-[40px] overflow-hidden bg-gray-100 shadow-2xl">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="text-xl font-medium text-gray-900 italic mb-8 border-l-4 border-red-600 pl-6">
                    {post.description}
                </p>
                <div className="whitespace-pre-line">{post.content}</div>
            </div>
          </div>
        }
      />
      <Footer />
    </>
  );
};

export default BlogDetailPage;