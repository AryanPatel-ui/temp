'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Topbar from '@/components/Topbar';
import { Layers, ArrowLeft, Sparkles } from 'lucide-react';

export default function FlashcardsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Topbar />
      
      <main className="flex-1 flex items-center justify-center max-w-7xl mx-auto px-6 md:px-8 py-20 w-full relative overflow-hidden">
        {/* Elegant ambient glow behind */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center z-0">
          <div className="w-[500px] h-[500px] rounded-full bg-newton-blue-500/5 blur-3xl animate-pulse" />
          <div className="w-[300px] h-[300px] rounded-full bg-violet-500/5 blur-3xl animate-pulse delay-1000 -translate-x-20 translate-y-20" />
        </div>

        <div className="relative z-10 max-w-xl w-full flex flex-col items-center text-center">
          {/* Feature Icon Badge */}
          <div className="mb-8 relative">
            <div className="w-24 h-24 rounded-[32px] bg-white border-2 border-gray-50 shadow-[0_12px_40px_-8px_rgba(0,102,255,0.12)] flex items-center justify-center relative z-10">
              <div className="w-20 h-20 rounded-[24px] bg-newton-blue-50 flex items-center justify-center">
                <Layers size={36} className="text-newton-blue-500" />
              </div>
            </div>
            {/* Floating Sparkles Badge */}
            <div className="absolute -top-2 -right-2 px-2.5 py-1 rounded-full bg-[#FF6B00] text-white text-[9px] font-black uppercase tracking-widest flex items-center gap-1 shadow-lg animate-bounce">
              <Sparkles size={10} /> NEW
            </div>
          </div>

          {/* Badge Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-newton-blue-50 border border-newton-blue-100/80 text-newton-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-newton-blue-500 animate-ping" />
            Coming Soon
          </div>

          <h1 className="text-[2.5rem] sm:text-[3.5rem] font-black text-[#1A1D23] tracking-tight leading-[1.1]">
            Flashcards
          </h1>
          
          <p className="mt-6 text-[1rem] sm:text-[1.125rem] text-[#6B7280] font-medium leading-[1.7] max-w-md">
            Master key technical concepts and coding syntaxes with interactive spaced-repetition flashcards built to boost recall.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gray-900 text-white font-black text-[11px] uppercase tracking-[0.2em] hover:bg-newton-blue-500 transition-all duration-300 shadow-[0_20px_35px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_35px_-10px_rgba(0,102,255,0.2)] active:scale-95 group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
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
