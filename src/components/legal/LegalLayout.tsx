'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Printer, Mail, AlertTriangle, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Footer } from '@/components/footer/Footer';
import { TableOfContents } from './TableOfContents';

interface LegalLayoutProps {
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  tocItems: { id: string; label: string }[];
  children: React.ReactNode;
}

export function LegalLayout({
  title,
  effectiveDate,
  lastUpdated,
  tocItems,
  children,
}: LegalLayoutProps) {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#08090B] text-[#F5F5F3]">
      {/* Top Header */}
      <header className="border-b border-white/10 bg-[#08090B]/95 backdrop-blur-md sticky top-0 z-30 py-4 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A4A7AC] hover:text-[#E62935] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Rivals Reborn</span>
          </Link>

          <Link href="/" className="relative block w-36 h-9">
            <Image
              src={siteConfig.assets.logo}
              alt={siteConfig.brandName}
              fill
              className="object-contain"
              priority
            />
          </Link>

          <button
            onClick={handlePrint}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium tracking-wider uppercase text-[#A4A7AC] hover:text-white bg-[#141619] border border-white/10 rounded transition-colors"
            aria-label="Print document"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Print</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        {/* Document Header */}
        <div className="pb-8 border-b border-white/10 mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E62935] mb-3">
            LEGAL DRAFT DOCUMENTATION
          </p>
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#F5F5F3]">
            {title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-[#A4A7AC]">
            <div>
              <span className="text-[#6B7078]">Effective:</span> {effectiveDate}
            </div>
            <span>•</span>
            <div>
              <span className="text-[#6B7078]">Last Updated:</span> {lastUpdated}
            </div>
            <span>•</span>
            <div>
              <span className="text-[#6B7078]">Entity:</span> {siteConfig.legal.publisherLegalName}
            </div>
          </div>

          {/* Legal Notice Box */}
          <div className="mt-6 p-4 bg-[#141619] border-l-2 border-[#E62935] text-xs text-[#A4A7AC] flex items-start gap-3 no-print">
            <AlertTriangle className="w-4 h-4 text-[#FF4552] flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#F5F5F3]">Formal Review Notice:</strong> This document represents
              the pre launch operational policy draft for Rivals Reborn. All provisions are subject to final
              statutory compliance audit prior to public iOS and Android storefront releases.
            </p>
          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Table of Contents Column */}
          <aside className="lg:col-span-4 no-print order-2 lg:order-1">
            <TableOfContents items={tocItems} />

            {/* Legal Support Box */}
            <div className="mt-6 p-5 bg-[#141619] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F5F5F3]">
                <ShieldCheck className="w-4 h-4 text-[#E62935]" />
                <span>Legal Assistance</span>
              </div>
              <p className="text-xs text-[#A4A7AC] leading-relaxed">
                Questions regarding rights, copyright notices, or data inquiries should be directed to our compliance team:
              </p>
              <a
                href={`mailto:${siteConfig.legal.contactEmail}`}
                className="inline-flex items-center gap-2 text-xs font-medium text-[#E62935] hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{siteConfig.legal.contactEmail}</span>
              </a>
            </div>
          </aside>

          {/* Legal Text Body */}
          <article className="lg:col-span-8 order-1 lg:order-2 space-y-12 text-[#A4A7AC] text-sm sm:text-base leading-relaxed print:text-black">
            {children}
          </article>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
