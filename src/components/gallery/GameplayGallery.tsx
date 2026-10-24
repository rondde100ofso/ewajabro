'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, Camera, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { LightboxModal } from './LightboxModal';

export function GameplayGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Garage', 'Tuning', 'Drag Racing', 'Customization'];

  const filteredItems =
    selectedCategory === 'All'
      ? siteConfig.gallery
      : siteConfig.gallery.filter((item) => item.category === selectedCategory);

  const hasItems = siteConfig.gallery.length > 0;

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
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#E62935] mb-3">
              VISUAL REEL
            </p>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#F5F5F3]">
              THE UNDERGROUND GALLERY
            </h2>
            <p className="mt-3 text-base text-[#A4A7AC] max-w-xl">
              Official in game captures and media drops will be showcased here. Featuring the 3D garage, live drag race HUD, manual paddle shifters, and car builds.
            </p>
          </div>

          {/* Filter Pills - only shown when items exist */}
          {hasItems && (
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 rounded border ${
                    selectedCategory === cat
                      ? 'bg-[#E62935] text-white border-[#E62935] shadow-[0_0_15px_rgba(230,41,53,0.3)]'
                      : 'bg-[#141619] text-[#A4A7AC] border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Gallery Content */}
        {!hasItems ? (
          <div className="relative border border-white/10 bg-[#141619] p-8 sm:p-14 text-center flex flex-col items-center justify-center max-w-2xl mx-auto shadow-2xl rounded-xl">
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E62935] mb-5">
              <Camera className="w-6 h-6" />
            </div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#E62935] mb-3">
              Live Gameplay Media
            </p>
            <h3 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-[#F5F5F3] mb-3">
              IN GAME SCREENSHOTS INCOMING
            </h3>
            <p className="text-sm sm:text-base text-[#A4A7AC] max-w-lg leading-relaxed mb-8">
              Check back as we update the gallery with in game race captures, performance tuning showcases, and garage builds. In the meantime, join our Discord for development previews and car reveals.
            </p>
            {siteConfig.socials.discord?.url && (
              <a
                href={siteConfig.socials.discord.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#E62935] hover:bg-[#FF4552] text-white font-display font-bold uppercase tracking-widest text-sm transition-all shadow-[0_0_20px_rgba(230,41,53,0.35)] rounded"
              >
                <span>Join Discord for Previews</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {filteredItems.map((item, index) => {
              return (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative bg-[#141619] border border-white/10 overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#E62935] shadow-xl"
                >
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-black">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter brightness-[0.95] contrast-[1.05]"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

                    {/* Top Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-semibold uppercase tracking-wider bg-black/75 backdrop-blur-md text-white/90 px-2.5 py-1 rounded border border-white/10">
                        {item.category}
                      </span>
                    </div>

                    {/* Zoom Icon Button */}
                    <div className="absolute top-3 right-3 p-2 bg-black/60 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity rounded">
                      <Maximize2 className="w-4 h-4 text-[#FF4552]" />
                    </div>

                    {/* Bottom Title & Details */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform bg-gradient-to-t from-[#08090B] via-[#08090B]/80 to-transparent">
                      <h3 className="font-display font-bold text-lg sm:text-xl uppercase tracking-wider text-[#F5F5F3]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#A4A7AC] line-clamp-2">{item.caption}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

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
