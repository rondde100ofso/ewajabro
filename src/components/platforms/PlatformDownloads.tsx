'use client';

import React from 'react';
import { Apple, Play, Bell, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function PlatformDownloads() {
  const { ios, android } = siteConfig.stores;

  return (
    <section
      id="download"
      className="relative py-24 sm:py-32 bg-[#08090B] border-t border-b border-white/5 overflow-hidden"
      aria-label="Platform Availability & Downloads"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-full h-[300px] bg-[#E62935]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#E62935] mb-3">
            PLATFORM AVAILABILITY
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#F5F5F3]">
            BUILT FOR IOS & ANDROID
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A4A7AC]">
            Rivals Reborn is engineered from the ground up for mobile devices. Built with a dedicated
            drag physics engine, zero latency input response, and authentic quarter mile timing gear.
          </p>
        </div>

        {/* Store Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* iOS Card */}
          <div className="relative bg-[#141619] border border-white/10 p-6 sm:p-10 flex flex-col justify-between group hover:border-[#E62935]/50 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1D2024] border border-white/10 flex items-center justify-center text-white group-hover:text-[#E62935] transition-colors flex-shrink-0">
                  <Apple className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <span className="text-[11px] font-medium tracking-wider text-[#A4A7AC] uppercase block">
                    Download on the
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wider text-[#F5F5F3]">
                    {ios.storeName}
                  </h3>
                </div>
              </div>

              <Badge variant={ios.status === 'available' ? 'red' : 'graphite'}>
                {ios.status === 'available' ? 'Available Now' : ios.status === 'closed-alpha' ? 'Closed Alpha' : 'Coming Soon'}
              </Badge>
            </div>

            <div className="my-6 sm:my-8 space-y-2 border-t border-b border-white/5 py-4">
              <div className="flex justify-between text-xs">
                <span className="text-[#A4A7AC]">Platform:</span>
                <span className="text-[#F5F5F3]">iPhone & iPad (TestFlight)</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#A4A7AC]">Requirements:</span>
                <span className="text-[#F5F5F3]">{ios.minVersion}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#A4A7AC]">Testing Phase:</span>
                <span className="text-[#E62935] font-medium">Closed Invite Only Alpha</span>
              </div>
            </div>

            {ios.url ? (
              <Button
                href={ios.url}
                variant="primary"
                size="lg"
                className="w-full justify-center"
              >
                Download on App Store
              </Button>
            ) : (
              <Button
                href={siteConfig.socials.discord?.url || '#community'}
                variant="secondary"
                size="lg"
                className="w-full justify-center border-white/10 hover:border-[#E62935]"
              >
                Request iOS Alpha Access
              </Button>
            )}
          </div>

          {/* Android Card */}
          <div className="relative bg-[#141619] border border-white/10 p-6 sm:p-10 flex flex-col justify-between group hover:border-[#E62935]/50 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1D2024] border border-white/10 flex items-center justify-center text-white group-hover:text-[#E62935] transition-colors flex-shrink-0">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
                </div>
                <div>
                  <span className="text-[11px] font-medium tracking-wider text-[#A4A7AC] uppercase block">
                    Get it on
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wider text-[#F5F5F3]">
                    {android.storeName}
                  </h3>
                </div>
              </div>

              <Badge variant={android.status === 'available' ? 'red' : 'graphite'}>
                {android.status === 'available' ? 'Available Now' : android.status === 'closed-alpha' ? 'Closed Alpha' : 'Coming Soon'}
              </Badge>
            </div>

            <div className="my-6 sm:my-8 space-y-2 border-t border-b border-white/5 py-4">
              <div className="flex justify-between text-xs">
                <span className="text-[#A4A7AC]">Platform:</span>
                <span className="text-[#F5F5F3]">Android (Internal Test Track)</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#A4A7AC]">Requirements:</span>
                <span className="text-[#F5F5F3]">{android.minVersion}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#A4A7AC]">Testing Phase:</span>
                <span className="text-[#E62935] font-medium">Closed Invite Only Alpha</span>
              </div>
            </div>

            {android.url ? (
              <Button
                href={android.url}
                variant="primary"
                size="lg"
                className="w-full justify-center"
              >
                Get it on Google Play
              </Button>
            ) : (
              <Button
                href={siteConfig.socials.discord?.url || '#community'}
                variant="secondary"
                size="lg"
                className="w-full justify-center border-white/10 hover:border-[#E62935]"
              >
                Request Android Alpha Access
              </Button>
            )}
          </div>
        </div>

        {/* Closed Alpha & Discord Community Announcement */}
        <div className="mt-12 max-w-4xl mx-auto bg-[#141619]/80 border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/5 border border-white/10 text-[#E62935] rounded-lg flex-shrink-0">
              <Bell className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#E62935]">
                  Under Development &bull; Invite Only Alpha
                </span>
              </div>
              <h4 className="font-display font-bold text-lg sm:text-xl uppercase tracking-wide text-[#F5F5F3]">
                Pre Registration & Closed Beta Testing Invitations Opening Soon
              </h4>
              <p className="mt-1 text-sm text-[#A4A7AC]">
                Rivals Reborn is currently in a restricted, invite only closed alpha testing phase. Pre registration
                and wider Closed Beta testing invitations will open soon. Join our verified Discord community to request
                alpha testing access and secure day one beta priority.
              </p>
            </div>
          </div>

          {siteConfig.socials.discord?.url && (
            <Button
              href={siteConfig.socials.discord.url}
              variant="primary"
              size="md"
              className="flex-shrink-0 whitespace-nowrap"
            >
              Join Alpha Discord
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
