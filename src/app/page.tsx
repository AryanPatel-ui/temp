import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Topbar from '@/components/Topbar';
import { ArrowRight, Briefcase, MapPin, Clock, Zap } from 'lucide-react';

export default function RootPage() {
  return (
    <div className="min-h-screen bg-white">
      <Topbar />

      <main>
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0066FF] text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
              Listings updated daily
            </div>

            <h1 className="text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] font-black text-[#1A1D23] tracking-[-0.02em] leading-[1.08]">
              Land Your <span className="text-[#0066FF]">Dream Role</span>
              <br className="hidden sm:block" />
              With Trusted Listings.
            </h1>

            <p className="mt-5 text-[1rem] sm:text-[1.125rem] text-[#6B7280] font-medium max-w-2xl leading-[1.7]">
              We bridge the gap between talent and top companies. Discover curated, high-impact
              internships with verified application links and daily updates.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/internship-listings"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#0066FF] text-white font-black text-sm tracking-wide hover:bg-[#0052CC] transition-all shadow-[0_8px_24px_-6px_rgba(0,102,255,0.5)] active:scale-[0.98]"
              >
                Browse Internships
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/questions"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                Practice Questions
              </Link>
            </div>
          </div>
        </section>

        {/* Feature cards */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Briefcase size={20} className="text-[#0066FF]" />,
                bg: 'bg-blue-50',
                title: 'Curated Listings',
                desc: 'Hand-picked internships from top companies with verified apply links.',
              },
              {
                icon: <MapPin size={20} className="text-violet-600" />,
                bg: 'bg-violet-50',
                title: 'Work From Home & On-Site',
                desc: 'Filter by remote or city-based roles across India and beyond.',
              },
              {
                icon: <Clock size={20} className="text-amber-600" />,
                bg: 'bg-amber-50',
                title: 'Deadline Tracking',
                desc: 'Never miss a closing date — every listing shows exact deadlines.',
              },
              {
                icon: <Zap size={20} className="text-green-600" />,
                bg: 'bg-green-50',
                title: 'Daily Updates',
                desc: 'Fresh opportunities added every day so you stay ahead of the crowd.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-11 h-11 rounded-xl ${card.bg} flex items-center justify-center mb-4`}>
                  {card.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{card.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA banner */}
          <div className="mt-8 rounded-2xl bg-[#0066FF] px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-black text-white">Ready to find your internship?</h2>
              <p className="text-white/70 text-sm mt-1">Sign in and browse hundreds of verified listings.</p>
            </div>
            <Link
              href="/internship-listings"
              className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white text-[#0066FF] font-black text-sm hover:bg-blue-50 transition-colors shadow-md"
            >
              Browse Now <ArrowRight size={14} />
            </Link>
          </div>
        </section>
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
            <span className="text-sm font-bold text-gray-900">Kairo</span>
          </div>
          <p className="text-xs text-gray-400 font-medium max-w-xs text-center sm:text-right leading-relaxed">
            Verified application links. Listings refreshed daily.
          </p>
        </div>
      </footer>
    </div>
  );
}
