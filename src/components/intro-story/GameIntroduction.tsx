'use client';

import React from 'react';
import Image from 'next/image';
import { Gauge, Flame, Trophy, ShieldAlert } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Badge } from '@/components/ui/Badge';

export function GameIntroduction() {
  return (
    <section
      id="the-game"
      className="relative py-28 sm:py-36 bg-[#08090B] overflow-hidden"
      aria-label="Game Introduction"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Top Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 sm:mb-24">
          <div className="lg:col-span-8">
            <Badge variant="red" className="mb-4">
              THE VISION
            </Badge>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#F5F5F3] leading-[0.92]">
              BUILT FOR THE ONES
              <br />
              <span className="text-[#E62935]">WHO RACE</span>.
            </h2>
          </div>

          <div className="lg:col-span-4 pb-2">
            <p className="text-base sm:text-lg text-[#A4A7AC] leading-relaxed">
              Mobile drag racing was never about tapping a nitrous button when an icon flashes green.
              It was about the smell of burnt rubber in the staging box, the mechanical dread of
              false-starting by three milliseconds, and the rush of putting your best ride on the line.
            </p>
          </div>
        </div>

        {/* Hero Editorial Composition */}
        <div className="relative border border-white/10 bg-[#141619] p-3 sm:p-5 mb-16 sm:mb-24">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            <Image
              src="/images/gallery-1.jpg"
              alt="Midnight drag racing staging line under sodium floodlights"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center filter brightness-[0.85] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-black/30" />

            {/* Corner telemetry overlays */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 font-mono text-[10px] sm:text-xs text-white/80 tracking-widest uppercase bg-black/60 px-3 py-1.5 border border-white/10 backdrop-blur-sm">
              SECTOR 01 // STAGING BOX 02:44 AM
            </div>
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 font-mono text-[10px] sm:text-xs text-[#FF4552] tracking-widest uppercase bg-black/70 px-3 py-1.5 border border-[#E62935]/40 backdrop-blur-sm">
              TRAP SPEED 214.6 MPH
            </div>
          </div>
        </div>

        {/* Editorial Pillars (Asymmetrical 3-Column Focus) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Pillar 1 */}
          <div className="border-l-2 border-[#E62935] pl-6 sm:pl-8 space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#FF4552] tracking-widest uppercase">
              <Gauge className="w-4 h-4" />
              <span>01 // MECHANICAL REACTION</span>
            </div>
            <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3]">
              UNASSISTED MANUAL LAUNCH
            </h3>
            <p className="text-sm text-[#A4A7AC] leading-relaxed">
              Every millisecond counts. Feather your throttle in the burnout box to bring tire compound
              up to optimum temperature, preload the drivetrain against the transmission brake, and launch
              the instant the amber lights transition.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="border-l-2 border-white/20 pl-6 sm:pl-8 space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#A4A7AC] tracking-widest uppercase">
              <Flame className="w-4 h-4" />
              <span>02 // HIGH-STAKES PINK SLIPS</span>
            </div>
            <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3]">
              REAL RISK. REAL REPUTATION.
            </h3>
            <p className="text-sm text-[#A4A7AC] leading-relaxed">
              Tired of racing ghosts without consequences? Enter high-stakes bracket races where pink
              slips can change owners in under eight seconds. Genuine tension that makes your hands
              sweat before staging.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="border-l-2 border-white/20 pl-6 sm:pl-8 space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#A4A7AC] tracking-widest uppercase">
              <Trophy className="w-4 h-4" />
              <span>03 // UNDERGROUND CREWS</span>
            </div>
            <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3]">
              TERRITORY & LEADERBOARDS
            </h3>
            <p className="text-sm text-[#A4A7AC] leading-relaxed">
              Band together with up to 20 drivers in dedicated racing syndicates. Battle across weekly
              turf wars, pool blueprint research, and claim exclusive championship vehicles reserved
              for top-tier teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
