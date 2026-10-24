import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F5F3] flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="font-mono text-xs text-[#FF4552] uppercase tracking-widest px-3 py-1 bg-[#E62935]/10 border border-[#E62935]/30 mb-6">
        ERROR 404 // FALSE START
      </div>
      <h1 className="font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tight leading-none text-[#F5F5F3] mb-4">
        OFF TRACK<span className="text-[#E62935]">.</span>
      </h1>
      <p className="max-w-md text-[#A4A7AC] text-sm sm:text-base leading-relaxed mb-8">
        The lane you are looking for does not exist or has been retired. Head back to staging and line up again.
      </p>
      <Link
        href="/"
        className="px-8 py-3.5 bg-[#E62935] hover:bg-[#FF4552] text-white font-display font-bold uppercase tracking-widest text-sm transition-all shadow-[0_0_20px_rgba(230,41,53,0.35)]"
      >
        Return to Staging
      </Link>
    </div>
  );
}
