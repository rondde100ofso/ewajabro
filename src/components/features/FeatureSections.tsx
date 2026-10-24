'use client';

import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Badge } from '@/components/ui/Badge';
import { ChevronRight } from 'lucide-react';

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
          <Badge variant="red" className="mb-4">
            ENGINEERING & COMPETITION
          </Badge>
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

                      {/* Tactical HUD badge */}
                      <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest uppercase bg-black/70 text-[#FF4552] border border-[#E62935]/40 px-2.5 py-1 backdrop-blur-sm">
                        SYS // {feature.tag}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono tracking-widest text-[#FF4552] uppercase block">
                      {feature.tag}
                    </span>
                    <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#F5F5F3] leading-[0.95]">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="font-display text-lg sm:text-xl text-[#F5F5F3]/90 font-semibold tracking-wide">
                    {feature.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-[#A4A7AC] leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Technical Specs / Stats */}
                  {feature.stats && (
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                      {feature.stats.map((stat, i) => (
                        <div key={i} className="bg-[#141619] p-3.5 border border-white/5">
                          <span className="text-[10px] font-mono tracking-wider text-[#A4A7AC] uppercase block">
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
