'use client';

import React from 'react';
import Image from 'next/image';
import { Gauge, Flame, Trophy } from 'lucide-react';
import { siteConfig } from '@/config/site';

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
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#E62935] mb-3">
              THE VISION
            </p>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#F5F5F3] leading-[0.92]">
              BUILT FOR THE ONES
              <br />
              <span className="text-[#E62935]">WHO RACE</span>.
            </h2>
          </div>

          <div className="lg:col-span-4 pb-2">
            <p className="text-base sm:text-lg text-[#A4A7AC] leading-relaxed">
              Real drag racing isn&apos;t about arcade assists or tapping a button when an icon flashes green.
              It&apos;s about knowing your car&apos;s exact power band, holding RPMs on the launch limiter,
              dropping at the perfect microsecond, and pulling manual paddle shifts right before the limiter.
            </p>
          </div>
        </div>

        {/* Hero Editorial Composition */}
        <div className="relative border border-white/10 bg-[#141619] p-3 sm:p-5 mb-16 sm:mb-24">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            <Image
              src={siteConfig.assets.heroPoster}
              alt="Drag racing staging line under floodlights"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center filter brightness-[0.85] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-black/30" />

            {/* Image Info Overlays */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-xs text-white/90 font-medium tracking-wide bg-black/75 px-3 py-1.5 rounded border border-white/10 backdrop-blur-md">
              Reaction Time 0.009s &bull; Elapsed 2.048s
            </div>
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-xs text-white/90 font-medium tracking-wide bg-black/75 px-3 py-1.5 rounded border border-white/10 backdrop-blur-md">
              Trap Speed 180 MPH &bull; N2O Boost
            </div>
          </div>
        </div>

        {/* Editorial Pillars (Asymmetrical 3-Column Focus) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Pillar 1 */}
          <div className="border-l-2 border-[#E62935] pl-6 sm:pl-8 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E62935]">
              <Gauge className="w-4 h-4" />
              <span>01 &bull; Reaction &amp; Paddle Shifting</span>
            </div>
            <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3]">
              MANUAL PADDLE SHIFTS & N2O
            </h3>
            <p className="text-sm text-[#A4A7AC] leading-relaxed">
              Every millisecond counts. Drop your launch on the green light, pull manual paddle shifts right on
              the shift light window, and time your nitrous boost down the strip. Miss your shift window and you
              get hit with a late shift that costs you the race.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="border-l-2 border-white/20 pl-6 sm:pl-8 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A4A7AC]">
              <Flame className="w-4 h-4" />
              <span>02 &bull; High Stakes Pink Slips</span>
            </div>
            <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3]">
              CASH, CARS & REPUTATION
            </h3>
            <p className="text-sm text-[#A4A7AC] leading-relaxed">
              Tired of racing ghosts without consequences? Line up in real time against live opponents where
              actual pink slips and cash wagers are on the line. When you put your car on the line, you either
              back up your tune or hand over your keys.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="border-l-2 border-white/20 pl-6 sm:pl-8 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A4A7AC]">
              <Trophy className="w-4 h-4" />
              <span>03 &bull; 3D Garage &amp; Crew Wars</span>
            </div>
            <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3]">
              CAR SPECS & CREW TOURNAMENTS
            </h3>
            <p className="text-sm text-[#A4A7AC] leading-relaxed">
              Manage your fleet with in-depth performance metrics: power, weight, grip, and shift speed. Perform maintenance,
              unlock crate R&amp;D upgrades, customize aero and widebody kits, and dominate weekly crew turf events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
