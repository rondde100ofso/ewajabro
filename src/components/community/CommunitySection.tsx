'use client';

import React from 'react';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Badge } from '@/components/ui/Badge';

export function CommunitySection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Discord':
        return (
          <svg className="w-6 h-6 fill-[#5865F2]" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
        );
      case 'Youtube':
        return (
          <svg className="w-6 h-6 fill-[#FF0000]" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      case 'Tiktok':
        return (
          <svg className="w-6 h-6 fill-[#00F2FE]" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.7a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.56z" />
          </svg>
        );
      case 'Instagram':
        return (
          <svg className="w-6 h-6 fill-[#E1306C]" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      case 'Twitter':
        return (
          <svg className="w-6 h-6 fill-[#FFFFFF]" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      default:
        return <MessageSquare className="w-6 h-6 text-[#E62935]" />;
    }
  };

  const socialEntries = Object.entries(siteConfig.socials).filter(
    ([, social]) => social.url !== null
  );

  return (
    <section
      id="community"
      className="relative py-28 sm:py-36 bg-[#08090B] border-t border-white/5"
      aria-label="Community & Official Channels"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="red" className="mb-4">
            COMMUNITY & DEV LOGS
          </Badge>
          <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#F5F5F3]">
            YOUR RIVALS ARE OUT THERE.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A4A7AC]">
            Join the community, follow development, and stay connected with everything happening in
            Rivals Reborn.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {socialEntries.map(([key, social]) => {
            if (!social.url) return null;

            return (
              <a
                key={key}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group relative bg-[#141619] border border-white/10 p-6 flex flex-col justify-between hover:border-[#E62935] hover:bg-[#1A1D21] transition-all duration-300 shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-[#1D2024] border border-white/5 rounded-none group-hover:scale-110 transition-transform">
                      {getIcon(social.icon)}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#A4A7AC] group-hover:text-[#E62935] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h3 className="font-display font-bold text-xl uppercase tracking-wider text-[#F5F5F3]">
                    {social.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#A4A7AC] leading-relaxed">
                    {social.label}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#A4A7AC]">
                  <span>OFFICIAL HUB</span>
                  <span className="text-[#E62935] group-hover:underline">Connect &rarr;</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
