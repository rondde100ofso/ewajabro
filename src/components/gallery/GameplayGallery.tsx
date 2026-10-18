'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, Filter } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Badge } from '@/components/ui/Badge';
import { LightboxModal } from './LightboxModal';

export function GameplayGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Drag Racing', 'Garage', 'Tuning', 'Multiplayer'];

  const filteredItems =
    selectedCategory === 'All'
      ? siteConfig.gallery
      : siteConfig.gallery.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="gallery"
      className="relative py-28 sm:py-36 bg-[#08090B] border-t border-white/5 overflow-hidden"
      aria-label="Gameplay and Media Gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-18">
          <div>
            <Badge variant="red" className="mb-4">
              VISUAL REEL
            </Badge>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#F5F5F3]">
              THE UNDERGROUND GALLERY
            </h2>
            <p className="mt-3 text-base text-[#A4A7AC] max-w-xl">
              Inspect vehicle geometry, cockpit instrumentation, high-speed trap passes, and
              the gritty midnight atmospheres of Rivals Reborn.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-widest uppercase transition-all duration-200 border ${
                  selectedCategory === cat
                    ? 'bg-[#E62935] text-white border-[#E62935] shadow-[0_0_15px_rgba(230,41,53,0.3)]'
                    : 'bg-[#141619] text-[#A4A7AC] border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isPortrait = item.orientation === 'portrait';

            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className={`group relative bg-[#141619] border border-white/10 overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#E62935] ${
                  isPortrait ? 'md:row-span-2' : ''
                }`}
              >
                <div
                  className={`relative w-full ${
                    isPortrait ? 'h-[500px] md:h-full min-h-[440px]' : 'aspect-[16/10]'
                  } overflow-hidden`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter brightness-[0.88] contrast-[1.05]"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono tracking-widest uppercase bg-black/70 text-[#A4A7AC] px-2 py-0.5 border border-white/10 backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Zoom Icon Button */}
                  <div className="absolute top-3 right-3 p-2 bg-black/60 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity rounded">
                    <Maximize2 className="w-4 h-4 text-[#FF4552]" />
                  </div>

                  {/* Bottom Title & Details */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                    <h3 className="font-display font-bold text-lg sm:text-xl uppercase tracking-wider text-[#F5F5F3]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#A4A7AC] line-clamp-1">{item.caption}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <LightboxModal
            items={filteredItems}
            currentIndex={lightboxIndex}
            isOpen={lightboxIndex !== null}
            onClose={() => setLightboxIndex(null)}
            onSelectIndex={(idx) => setLightboxIndex(idx)}
          />
        )}
      </div>
    </section>
  );
}
