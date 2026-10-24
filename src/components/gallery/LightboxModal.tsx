'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '@/types/site';
import { Badge } from '@/components/ui/Badge';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function LightboxModal({
  items,
  currentIndex,
  isOpen,
  onClose,
  onSelectIndex,
}: LightboxModalProps) {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    onSelectIndex((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    onSelectIndex((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onSelectIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Media gallery lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 lg:p-10 select-none animate-in fade-in duration-200"
    >
      {/* Top Header Bar */}
      <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <Badge variant="red">{currentItem.category}</Badge>
          <span className="text-xs font-medium text-[#A4A7AC]">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          type="button"
          aria-label="Close lightbox"
          className="p-2 text-[#A4A7AC] hover:text-[#F5F5F3] hover:bg-white/10 rounded transition-colors border border-white/10"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={handlePrev}
        type="button"
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 text-[#A4A7AC] hover:text-[#F5F5F3] bg-[#141619]/80 hover:bg-[#E62935] border border-white/10 rounded transition-all shadow-xl"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        type="button"
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 text-[#A4A7AC] hover:text-[#F5F5F3] bg-[#141619]/80 hover:bg-[#E62935] border border-white/10 rounded transition-all shadow-xl"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Stage */}
      <div className="relative max-w-6xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center">
        <div
          className={`relative w-full h-full max-h-[70vh] flex items-center justify-center ${
            currentItem.orientation === 'portrait' ? 'max-w-md' : 'max-w-5xl'
          }`}
        >
          <Image
            src={currentItem.src}
            alt={currentItem.alt}
            fill
            sizes="90vw"
            priority
            className="object-contain"
          />
        </div>

        {/* Caption & Metadata Footer */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <h4 className="font-display font-bold text-xl uppercase tracking-wider text-[#F5F5F3]">
            {currentItem.title}
          </h4>
          <p className="mt-1 text-sm text-[#A4A7AC]">{currentItem.caption}</p>
        </div>
      </div>
    </div>
  );
}
