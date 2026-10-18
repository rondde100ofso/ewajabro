'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Download, Play, Volume2, VolumeX, X, Film } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [trailerModalOpen, setTrailerModalOpen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Handle trailer modal escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && trailerModalOpen) {
        setTrailerModalOpen(false);
      }
    };
    if (trailerModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [trailerModalOpen]);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#08090B]"
        aria-label="Hero Introduction"
      >
        {/* Background Media Container */}
        <div className="absolute inset-0 z-0">
          {/* Poster Image (Primary visual & instant fallback) */}
          <div className="relative w-full h-full">
            <Image
              src={siteConfig.assets.heroPoster}
              alt="Rivals Reborn high-stakes street drag racing machines at starting line"
              fill
              priority
              sizes="100vw"
              quality={90}
              className="object-cover object-center filter brightness-[0.78] contrast-[1.12]"
            />
          </div>

          {/* Video Element from supplied introvideo.mp4 */}
          {siteConfig.assets.heroVideo && !prefersReducedMotion && (
            <video
              ref={videoRef}
              src={siteConfig.assets.heroVideo}
              poster={siteConfig.assets.heroPoster}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              onCanPlay={() => setVideoLoaded(true)}
              className={`absolute inset-0 w-full h-full object-cover filter brightness-[0.78] contrast-[1.12] transition-opacity duration-1000 ${
                videoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {/* Dark Cinematic Vignette & Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/40 to-[#08090B]/80 z-10" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#08090B]/30 to-[#08090B]/90 z-10" />

          {/* Subtle Speed Grid Texture */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 z-10 pointer-events-none" />
        </div>

        {/* Audio Toggle Control in bottom right */}
        {siteConfig.assets.heroVideo && videoLoaded && !prefersReducedMotion && (
          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? 'Unmute hero background video' : 'Mute hero background video'}
            className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-[#A4A7AC] hover:text-[#F5F5F3] bg-black/60 hover:bg-[#E62935]/20 border border-white/10 hover:border-[#E62935] rounded-none backdrop-blur-sm transition-all"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-[#A4A7AC]" />
                <span className="hidden sm:inline">Audio Off</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-[#FF4552] animate-pulse" />
                <span className="text-[#FF4552] hidden sm:inline">Audio On</span>
              </>
            )}
          </button>
        )}

        {/* Hero Foreground Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32 flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 text-xs sm:text-sm font-mono tracking-widest text-[#FF4552] uppercase bg-[#E62935]/10 border border-[#E62935]/30 rounded-none shadow-[0_0_15px_rgba(230,41,53,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E62935] animate-ping" />
            <span>{siteConfig.tagline}</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-extrabold uppercase text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.88] text-[#F5F5F3] drop-shadow-2xl max-w-5xl">
            RIVALS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F3] via-[#FFFFFF] to-[#A4A7AC]">
              REBORN
            </span>
            <span className="text-[#E62935]">.</span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#A4A7AC] max-w-2xl font-normal leading-relaxed text-balance">
            Build your garage. Tune your ride. Challenge your rivals. Make every race count.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
            <Button
              href="#download"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-base tracking-widest py-4 px-8"
              icon={<Download className="w-5 h-5" />}
            >
              Download The Game
            </Button>

            {siteConfig.assets.heroVideo && (
              <Button
                onClick={() => setTrailerModalOpen(true)}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-base tracking-widest py-4 px-8 border-[#E62935]/50 hover:bg-[#E62935]/15"
                icon={<Play className="w-4 h-4 fill-current text-[#FF4552]" />}
              >
                Watch Trailer
              </Button>
            )}

            <Button
              href="#the-game"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto text-base tracking-widest py-4 px-8"
            >
              Discover The Game
            </Button>
          </div>

          {/* Target Platform Metadata Pill */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-xs font-mono tracking-widest uppercase">
            <span className="text-[#FF4552] font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E62935] animate-ping" />
              Closed Invite-Only Alpha Active
            </span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="text-[#A4A7AC]">Pre-Registration & Beta Soon</span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="text-[#F5F5F3]">iOS & Android</span>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <a
          href="#the-game"
          aria-label="Scroll down to game introduction"
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#A4A7AC]/60 hover:text-[#E62935] transition-colors group cursor-pointer"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest group-hover:text-[#F5F5F3] transition-colors">
            SCROLL
          </span>
          <div className="w-5 h-9 border border-white/20 rounded-full flex justify-center p-1 group-hover:border-[#E62935] transition-colors">
            <div className="w-1 h-2 bg-[#E62935] rounded-full animate-bounce" />
          </div>
        </a>
      </section>

      {/* Cinematic Trailer Modal */}
      {trailerModalOpen && siteConfig.assets.heroVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Rivals Reborn Cinematic Teaser Video"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 lg:p-10 select-none animate-in fade-in duration-200"
        >
          {/* Top Bar */}
          <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-20">
            <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-[#F5F5F3]">
              <Film className="w-4 h-4 text-[#E62935]" />
              <span>Official Cinematic Teaser &bull; 49s</span>
            </div>

            <button
              onClick={() => setTrailerModalOpen(false)}
              type="button"
              aria-label="Close video player"
              className="p-2 text-[#A4A7AC] hover:text-[#F5F5F3] hover:bg-white/10 rounded transition-colors border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Video Player Container */}
          <div className="relative max-w-5xl w-full max-h-[80vh] flex items-center justify-center border border-white/10 bg-black shadow-2xl">
            <video
              src={siteConfig.assets.heroVideo}
              controls
              autoPlay
              playsInline
              className="w-full h-full max-h-[78vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
