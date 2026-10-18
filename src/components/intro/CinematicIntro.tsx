'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

interface CinematicIntroProps {
  onComplete?: () => void;
}

export function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [stage, setStage] = useState<'initial' | 'visible' | 'sweep' | 'completing' | 'done'>('initial');
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  const completeIntro = useCallback(() => {
    setStage('completing');
    try {
      sessionStorage.setItem('rivals_intro_played', 'true');
    } catch {
      // Storage unavailable or disabled
    }
    const timer = setTimeout(() => {
      setStage('done');
      if (onComplete) onComplete();
    }, 600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    setMounted(true);

    // Check if user already saw the intro this session
    try {
      if (sessionStorage.getItem('rivals_intro_played') === 'true') {
        setStage('done');
        if (onComplete) onComplete();
        return;
      }
    } catch {
      // Ignore sessionStorage exceptions
    }

    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setStage('done');
      if (onComplete) onComplete();
      return;
    }

    // Step 1: Reveal logo smoothly
    const t1 = setTimeout(() => {
      setStage('visible');
    }, 150);

    // Step 2: Animate sweep & progress
    const t2 = setTimeout(() => {
      setStage('sweep');
      const start = Date.now();
      const duration = 1600; // Total sweep duration ~1.6s
      const interval = setInterval(() => {
        const elapsed = Date.now() - start;
        const p = Math.min(100, Math.floor((elapsed / duration) * 100));
        setProgress(p);
        if (elapsed >= duration) {
          clearInterval(interval);
          completeIntro();
        }
      }, 30);
    }, 600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [completeIntro, onComplete]);

  // If not mounted yet (SSR) or finished, do not render overlay
  if (!mounted || stage === 'done') {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-label="Cinematic Introduction"
      aria-modal="true"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#08090B] transition-opacity duration-700 ease-out select-none ${
        stage === 'completing' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Skip Intro Control */}
      <button
        onClick={completeIntro}
        type="button"
        className="absolute top-6 right-6 md:top-8 md:right-10 z-20 px-4 py-2 text-xs font-mono tracking-widest text-[#A4A7AC] hover:text-[#F5F5F3] hover:border-[#E62935] border border-white/10 rounded transition-colors uppercase bg-black/40 backdrop-blur-sm"
        aria-label="Skip cinematic introduction"
      >
        Skip Intro [ESC]
      </button>

      {/* Center Cinematic Stage */}
      <div className="relative flex flex-col items-center justify-center px-6 max-w-lg w-full">
        {/* Subtle Ambient Red Glow behind logo */}
        <div
          className={`absolute w-72 h-72 rounded-full bg-[#E62935]/15 blur-3xl transition-opacity duration-1000 ${
            stage === 'sweep' ? 'opacity-100 scale-110' : 'opacity-0 scale-90'
          }`}
        />

        {/* Logo Container */}
        <div
          className={`relative transition-all duration-1000 ease-out transform ${
            stage === 'initial'
              ? 'opacity-0 scale-95 blur-sm'
              : stage === 'visible' || stage === 'sweep'
              ? 'opacity-100 scale-100 blur-0'
              : 'opacity-0 scale-105'
          }`}
        >
          <div className="relative w-64 sm:w-80 md:w-96 h-28 sm:h-36 md:h-44">
            <Image
              src={siteConfig.assets.logo}
              alt={siteConfig.brandName}
              fill
              priority
              className="object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>

        {/* Racing Red Sweep Line & Progress */}
        <div className="relative w-48 sm:w-64 mt-6 overflow-hidden">
          {/* Track */}
          <div className="h-[2px] w-full bg-white/10 relative">
            {/* Progress bar */}
            <div
              className="h-full bg-gradient-to-r from-[#E62935]/40 via-[#E62935] to-[#FF4552] transition-all duration-75 ease-linear shadow-[0_0_12px_#E62935]"
              style={{ width: `${progress}%` }}
            />
            {/* Laser sweep highlight */}
            <div
              className={`absolute top-0 bottom-0 w-16 bg-gradient-to-r from-transparent via-white to-transparent opacity-75 transform -skew-x-12 ${
                stage === 'sweep' ? 'animate-sweep' : 'hidden'
              }`}
            />
          </div>

          {/* Minimalist status line */}
          <div className="flex justify-between items-center mt-2.5 text-[10px] tracking-widest uppercase font-mono text-[#A4A7AC]/80">
            <span>STAGING SYSTEM</span>
            <span className="text-[#E62935]">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
