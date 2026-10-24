'use client';

import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { PaintFinish } from '@/types/site';

function PaintFinishesShowcase({
  tag,
  paintFinishes,
}: {
  tag: string;
  paintFinishes: PaintFinish[];
}) {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const activeFinish = paintFinishes[activeIdx] || paintFinishes[0];

  return (
    <div className="relative border border-white/10 bg-[#141619] p-2 sm:p-3 overflow-hidden">
      {/* Main Spotlight Preview */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
        <Image
          key={activeFinish.id}
          src={activeFinish.imageSrc}
          alt={activeFinish.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 680px"
          className="object-cover object-center filter brightness-[0.92] contrast-[1.05] transition-opacity duration-300"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/60 via-transparent to-transparent pointer-events-none" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-wider bg-black/75 backdrop-blur-md text-white/90 px-3 py-1 rounded border border-white/10">
          {tag}
        </div>

        {/* Active Finish Identifier overlay in bottom right */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-2 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded border border-white/15 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#E62935]" />
          <span className="text-xs font-bold uppercase tracking-wider text-white">
            {activeFinish.label} Finish
          </span>
        </div>
      </div>

      {/* 3 Paint Finish Selector Thumbnails */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-2 sm:mt-3">
        {paintFinishes.map((finish, idx) => {
          const isSelected = activeIdx === idx;
          return (
            <button
              key={finish.id}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`relative text-left p-1.5 sm:p-2 border transition-all duration-200 group/finish cursor-pointer ${
                isSelected
                  ? 'border-[#E62935] bg-[#1a1d22]'
                  : 'border-white/10 bg-[#0d0e11] hover:border-white/25 hover:bg-[#141619]'
              }`}
              aria-label={`Show ${finish.label} paint finish`}
              aria-pressed={isSelected}
            >
              <div className="relative aspect-[2.4/1] w-full overflow-hidden bg-black mb-1.5 border border-white/5">
                <Image
                  src={finish.imageSrc}
                  alt={finish.label}
                  fill
                  sizes="(max-width: 1024px) 33vw, 220px"
                  className="object-cover object-center group-hover/finish:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                    isSelected ? 'text-[#F5F5F3]' : 'text-[#A4A7AC] group-hover/finish:text-white'
                  }`}
                >
                  {finish.label}
                </span>
                <span
                  className={`text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded transition-colors ${
                    isSelected
                      ? 'bg-[#E62935] text-white'
                      : 'text-[#A4A7AC]/60 group-hover/finish:text-[#A4A7AC]'
                  }`}
                >
                  {isSelected ? 'Active' : 'Preview'}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function FeatureSections() {
  const { features } = siteConfig;

  return (
    <section
      id="features"
      className="relative py-28 sm:py-36 bg-[#08090B] border-t border-white/5 overflow-hidden"
      aria-label="Core Gameplay Features"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#E62935] mb-3">
            ENGINEERING &amp; COMPETITION
          </p>
          <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#F5F5F3]">
            BUILT FROM THE TIRES UP
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A4A7AC]">
            Every aspect of Rivals Reborn is meant to test your skills, and deliver an authentic drag racing experience. Combined with real physics, grip, and launch values, to test your skills and build your garage from the ground up. No gimmicks. Just you, and your skills on the line for bragging rights.
          </p>
        </div>

        {/* Alternating Feature Stories */}
        <div className="space-y-28 sm:space-y-36">
          {features.map((feature, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={feature.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Media Column */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {feature.paintFinishes && feature.paintFinishes.length > 0 ? (
                    <PaintFinishesShowcase
                      tag={feature.tag}
                      paintFinishes={feature.paintFinishes}
                    />
                  ) : (
                    <div className="relative group border border-white/10 bg-[#141619] p-2 sm:p-3 overflow-hidden">
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                        <Image
                          src={feature.imageSrc}
                          alt={feature.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 680px"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.88] contrast-[1.08]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/60 via-transparent to-transparent pointer-events-none" />

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-wider bg-black/75 backdrop-blur-md text-white/90 px-3 py-1 rounded border border-white/10">
                          {feature.tag}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#E62935] uppercase block">
                      {feature.tag}
                    </span>
                    <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#F5F5F3] leading-[0.95]">
                      {feature.title}
                    </h3>
                  </div>

                  {feature.subtitle && (
                    <p className="font-display text-lg sm:text-xl text-[#F5F5F3]/90 font-semibold tracking-wide">
                      {feature.subtitle}
                    </p>
                  )}

                  <p className="text-sm sm:text-base text-[#A4A7AC] leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Technical Specs / Stats */}
                  {feature.stats && (
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                      {feature.stats.map((stat, i) => (
                        <div key={i} className="bg-[#141619] p-3.5 border border-white/5">
                          <span className="text-[11px] text-[#A4A7AC] uppercase font-medium tracking-wider block">
                            {stat.label}
                          </span>
                          <span className="font-display font-bold text-base sm:text-lg text-[#F5F5F3] tracking-wide mt-0.5 block">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
