import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Topbar from '@/components/Topbar';
import { FileCode, Globe, Braces, Binary, Terminal, ExternalLink } from 'lucide-react';

const questionCategories = [
  {
    id: 'html-css',
    title: 'HTML & CSS',
    description: 'Master the building blocks of the web, layout algorithms, and styling properties.',
    icon: Globe,
    color: 'text-newton-orange-500',
    bgColor: 'bg-newton-orange-50',
    count: 'Frontend',
  },
  {
    id: 'react',
    title: 'React',
    description: 'Deep dive into components, hooks, state management, and the virtual DOM.',
    icon: FileCode,
    color: 'text-newton-blue-500',
    bgColor: 'bg-newton-blue-50',
    count: 'Library',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    description: 'Understand closures, promises, the event loop, and modern ES6+ features.',
    icon: Braces,
    color: 'text-newton-yellow-500',
    bgColor: 'bg-newton-yellow-50',
    count: 'Language',
  },
  {
    id: 'dsa',
    title: 'DSA',
    description: 'Strengthen your problem-solving skills with data structures and algorithms.',
    icon: Binary,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    count: 'Logic',
  },
  {
    id: 'python',
    title: 'Python',
    description: 'Practice object-oriented programming, data structures, and Pythonic patterns.',
    icon: Terminal,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    count: 'Backend',
  },
];

export default function QuestionsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Topbar />
      
      <main className="flex-1 max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16 w-full">
        <div className="max-w-3xl mb-12">
          <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-black text-[#1A1D23] tracking-[-0.02em] leading-[1.1]">
            Technical <span className="text-newton-blue-500">Interview</span> Questions
          </h1>
          <p className="mt-4 text-[1rem] sm:text-[1.125rem] text-[#6B7280] font-medium max-w-2xl leading-[1.6]">
            Prepare for your next interview with our curated collection of technical questions across various domains. 
            Select a topic to start practicing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {questionCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                href={`#`}
                className="bg-white rounded-[32px] border border-gray-100 shadow-[0_1px_2px_rgba(17,24,39,0.03)] p-5 sm:p-6 lg:p-8 hover:shadow-[0_0_0_1px_rgba(17,24,39,0.05),0_18px_38px_rgba(0,102,255,0.05)] transition-all duration-200 ease-in-out group flex flex-col h-full relative overflow-hidden"
              >
                {/* Decorative Brand Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-newton-blue-500/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-110" />

                {/* Top Section */}
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] sm:rounded-[20px] bg-white flex items-center justify-center border-2 border-gray-50 shadow-sm group-hover:shadow-[0_8px_18px_rgba(0,102,255,0.08)] transition-all duration-300 overflow-hidden">
                      <div className={`w-full h-full rounded-[16px] sm:rounded-[18px] ${category.bgColor} flex items-center justify-center`}>
                        <Icon size={26} strokeWidth={2} className={`sm:w-7 sm:h-7 ${category.color}`} />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase">
                          {category.count}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-gray-900 mt-1 leading-tight group-hover:text-newton-blue-500 transition-colors line-clamp-2">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8 relative z-10 flex-grow">
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">
                    {category.description}
                  </p>
                </div>
                
                {/* Bottom Section */}
                <div className="mt-auto pt-6 sm:pt-8 border-t border-gray-50 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-newton-blue-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      PRACTICE NOW
                    </span>
                  </div>
                  <div className="flex items-center gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 bg-gray-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-newton-blue-500 transition-all duration-300 shadow-xl shadow-gray-200 hover:shadow-newton-blue-100 group/btn">
                    Start
                    <ExternalLink
                      size={14}
                      className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/images/logo.png"
              alt="Kairo logo"
              width={32}
              height={32}
              className="h-8 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-900 leading-none mb-1">Kairo</span>
            </div>
          </div>
          <p className="text-xs text-gray-400 font-medium max-w-xs text-center sm:text-right leading-relaxed">
            Verified application links. Listings refreshed daily.
          </p>
        </div>
      </footer>
    </div>
  );
}
