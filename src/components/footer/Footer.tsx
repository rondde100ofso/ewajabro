'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MessageSquare, ArrowUpRight, Shield } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { openCookiePreferences } from '@/components/cookies/CookieConsentModal';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050607] border-t border-white/10 text-[#A4A7AC] overflow-hidden">
      {/* Upper Footer: Brand & Primary Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="relative block w-44 sm:w-52 h-12">
              <Image
                src={siteConfig.assets.logo}
                alt={siteConfig.brandName}
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-sm text-[#A4A7AC] max-w-sm leading-relaxed">
              {siteConfig.shortDescription}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#E62935]">
                STATUS: {siteConfig.releaseStatus.toUpperCase().replace('-', ' ')}
              </span>
              <span className="text-white/20">•</span>
              <span className="text-xs font-medium uppercase tracking-wider text-[#A4A7AC]">
                {siteConfig.releaseDateText}
              </span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-[#F5F5F3]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-[#E62935] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#the-game" className="hover:text-[#E62935] transition-colors">
                  The Game
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#E62935] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E62935] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-[#E62935] transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-[#E62935] transition-colors">
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Official Channels Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-[#F5F5F3]">
              Official Hubs
            </h4>
            <ul className="space-y-2 text-sm">
              {Object.entries(siteConfig.socials).map(([key, social]) => {
                if (!social.url) return null;
                return (
                  <li key={key}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#E62935] transition-colors inline-flex items-center gap-1"
                    >
                      <span>{social.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Support & Legal Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-[#F5F5F3]">
              Support & Inquiries
            </h4>
            <p className="text-xs text-[#A4A7AC] leading-relaxed">
              For technical inquiries, bug reports, and partnership proposals:
            </p>
            <div>
              <a
                href={`mailto:${siteConfig.support.email}`}
                className="inline-flex items-center gap-2 text-xs font-medium text-[#F5F5F3] hover:text-[#E62935] transition-colors p-2 bg-[#141619] border border-white/10 w-full"
              >
                <Mail className="w-4 h-4 text-[#E62935]" />
                <span>{siteConfig.support.email}</span>
              </a>
            </div>
            {siteConfig.support.discordSupportChannel && (
              <div>
                <a
                  href={siteConfig.support.discordSupportChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#A4A7AC] hover:text-white transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#5865F2]" />
                  <span>Discord Community Help Desk</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal Policies */}
      <div className="border-t border-white/5 bg-[#08090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-center md:text-left text-[#A4A7AC]/80 space-y-1">
            <div>
              &copy; {currentYear} {siteConfig.brandName}. All rights reserved. {siteConfig.legal.publisherLegalName}.
            </div>
            <div className="text-[11px] text-[#6B7078]">
              Official website designed &amp; built by{' '}
              <span className="text-[#A4A7AC] font-medium">Aslan Development</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-[#A4A7AC]/80">
            <Link
              href="/legal/terms-of-service"
              className="hover:text-[#F5F5F3] transition-colors"
            >
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/legal/terms-of-use" className="hover:text-[#F5F5F3] transition-colors">
              Terms of Use
            </Link>
            <span>•</span>
            <Link
              href="/legal/privacy-policy"
              className="hover:text-[#F5F5F3] transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <button
              type="button"
              onClick={openCookiePreferences}
              className="hover:text-[#E62935] transition-colors underline cursor-pointer"
            >
              Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
