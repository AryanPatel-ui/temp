import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Topbar from '@/components/Topbar';
import { ArrowLeft, BookOpen, ExternalLink, Code2, GitBranch } from 'lucide-react';

export default function JavascriptQuestionsPage() {
  const resources = [
    {
      title: "JavaScript Coding Questions",
      description: "A comprehensive roadmap and set of questions for JavaScript coding interviews. Perfect for testing your core JS knowledge.",
      url: "https://roadmap.sh/questions/javascript-coding",
      icon: Code2,
      color: "text-newton-yellow-500",
      bgColor: "bg-newton-yellow-50",
    },
    {
      title: "GeeksforGeeks JS Questions",
      description: "Extensive collection of JavaScript coding questions and answers by GeeksforGeeks, covering various concepts and patterns.",
      url: "https://www.geeksforgeeks.org/javascript/javascript-coding-questions-and-answers/",
      icon: BookOpen,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
    },
    {
      title: "github #1",
      description: "Explore practical JavaScript coding challenges, interview preparation guides, and algorithms in this GitHub repository.",
      url: "http://github.com/ssagar1999/javascript-problem-solving",
      icon: GitBranch,
      color: "text-gray-900",
      bgColor: "bg-gray-100",
    },
    {
      title: "github #2",
      description: "Explore practical JavaScript coding challenges, interview preparation guides, and algorithms in this GitHub repository.",
      url: "https://github.com/ssagar1999/super-Assignment-lite-problems",
      icon: GitBranch,
      color: "text-gray-900",
      bgColor: "bg-gray-100",
    },
    {
      title: "github #3",
      description: "Explore practical JavaScript coding challenges, interview preparation guides, and algorithms in this GitHub repository.",
      url: "https://github.com/ssagar1999/javascript-dsa",
      icon: GitBranch,
      color: "text-gray-900",
      bgColor: "bg-gray-100",
    },
    {
      title: "github #4",
      description: "Explore practical JavaScript coding challenges, interview preparation guides, and algorithms in this GitHub repository.",
      url: "https://github.com/ssagar1999/ASSIGNMENT-Shaping-Data-with-Array-Methods",
      icon: GitBranch,
      color: "text-gray-900",
      bgColor: "bg-gray-100",
    },
    {
      title: "github #5",
      description: "Explore practical JavaScript coding challenges, interview preparation guides, and algorithms in this GitHub repository.",
      url: "https://github.com/ssagar1999/string-methods",
      icon: GitBranch,
      color: "text-gray-900",
      bgColor: "bg-gray-100",
    },
    {
      title: "github #6",
      description: "Explore practical JavaScript coding challenges, interview preparation guides, and algorithms in this GitHub repository.",
      url: "https://github.com/ssagar1999/Problem-Solving-with-JS-main",
      icon: GitBranch,
      color: "text-gray-900",
      bgColor: "bg-gray-100",
    },
    {
      title: "github #7",
      description: "Explore practical JavaScript coding challenges, interview preparation guides, and algorithms in this GitHub repository.",
      url: "https://github.com/ssagar1999/object-exercises",
      icon: GitBranch,
      color: "text-gray-900",
      bgColor: "bg-gray-100",
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Topbar />

      <main className="flex-1 max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16 w-full relative">
        {/* Elegant ambient glow behind */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center z-0 overflow-hidden">
          <div className="w-[600px] h-[600px] rounded-full bg-newton-yellow-500/5 blur-[80px] animate-pulse" />
        </div>

        <div className="relative z-10 flex flex-col">
          <Link
            href="/questions"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-8 font-medium w-fit group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Topics
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="px-3.5 py-1.5 rounded-full bg-newton-yellow-50 border border-newton-yellow-100 text-newton-yellow-600 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-newton-yellow-500 animate-ping" />
              Language
            </div>
          </div>

          <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] font-black text-[#1A1D23] tracking-tight leading-[1.1] mb-6">
            JavaScript <span className="text-newton-yellow-500">Resources</span>
          </h1>
          <p className="text-[1.125rem] sm:text-[1.25rem] text-[#6B7280] font-medium max-w-2xl leading-[1.6] mb-12">
            Master closures, promises, the event loop, and modern ES6+ features with these curated practice materials.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Link
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 sm:p-8 rounded-[32px] border-2 border-gray-100 hover:border-newton-yellow-500/30 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(234,179,8,0.15)] transition-all duration-300 group flex flex-col h-full"
                >
                  <div className={`w-16 h-16 rounded-[24px] ${resource.bgColor} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <Icon size={30} className={resource.color} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3 leading-tight">{resource.title}</h3>
                  <p className="text-base text-gray-500 font-medium mb-10 flex-1 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="text-sm font-black text-gray-900 group-hover:text-newton-yellow-600 flex items-center gap-2 mt-auto transition-colors uppercase tracking-widest">
                    Open Resource <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
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
