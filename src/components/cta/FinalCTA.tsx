'use client';

import React from 'react';
import Image from 'next/image';
import { Download, Flag } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function FinalCTA() {
  return (
    <section
      className="relative py-32 sm:py-44 bg-[#08090B] overflow-hidden border-t border-white/10"
      aria-label="Final Call to Action"
    >
      {/* Background Graphic Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/feature-racing.jpg"
          alt="Two drag cars launching at the Christmas tree staging line"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.4] contrast-[1.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/60 to-[#08090B]/90" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-[#08090B]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <Badge variant="red" className="mb-6">
          <Flag className="w-3.5 h-3.5" />
          <span>JOIN THE ROSTER</span>
        </Badge>

        <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-[#F5F5F3] leading-[0.9]">
          YOUR NEXT RIVAL
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F3] via-[#FFFFFF] to-[#A4A7AC]">
            IS WAITING
          </span>
          <span className="text-[#E62935]">.</span>
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-[#A4A7AC] max-w-xl font-normal leading-relaxed">
          Build your machine. Perfect your tune. Line up at the tree.
        </p>

        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Button
            href="#download"
            variant="primary"
            size="xl"
            className="w-full sm:w-auto px-10 py-5 text-lg"
            icon={<Download className="w-5 h-5" />}
          >
            Get Rivals Reborn
          </Button>

          {siteConfig.socials.discord?.url && (
            <Button
              href={siteConfig.socials.discord.url}
              variant="secondary"
              size="xl"
              className="w-full sm:w-auto px-8 py-5 text-lg"
            >
              Join The Discord
            </Button>
          )}
        </div>

        <p className="mt-6 text-xs font-mono text-[#A4A7AC]/60 uppercase tracking-widest">
          Competitive Mobile Drag Racing • Coming to iOS & Android
        </p>
      </div>
    </section>
  );
}
