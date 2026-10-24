'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Download, Play, Pause, Volume2, VolumeX, X, Film } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
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

  // Attempt autoplay on mount
  useEffect(() => {
    if (videoRef.current) {
      const p = videoRef.current.play();
      if (p !== undefined) {
        p.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      }
    }
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

  const togglePlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
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
          {/* Logo in the back when background trailer is not playing */}
          {(!videoLoaded || !isPlaying) && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[6] transition-opacity duration-1000">
              <div className="relative w-[340px] sm:w-[560px] md:w-[760px] lg:w-[920px] aspect-[1535/1024] max-w-[90vw] opacity-75 sm:opacity-85 filter drop-shadow-[0_0_90px_rgba(230,41,53,0.5)]">
                <Image
                  src={siteConfig.assets.logo}
                  alt="Rivals Reborn Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          )}

          {/* Video Element from supplied introvideo.mp4 */}
          {siteConfig.assets.heroVideo && !prefersReducedMotion && (
            <video
              ref={videoRef}
              src={siteConfig.assets.heroVideo}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              onCanPlay={() => {
                setVideoLoaded(true);
                if (videoRef.current && !videoRef.current.paused) {
                  setIsPlaying(true);
                }
              }}
              className={`absolute inset-0 w-full h-full object-cover filter brightness-[0.78] contrast-[1.12] transition-opacity duration-1000 ${
                videoLoaded && isPlaying ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {/* Dark Cinematic Vignette & Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/40 to-[#08090B]/80 z-10" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#08090B]/30 to-[#08090B]/90 z-10" />

          {/* Subtle Speed Grid Texture */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 z-10 pointer-events-none" />
        </div>

        {/* Background Trailer Controls (Play/Pause & Audio) in bottom right */}
        {siteConfig.assets.heroVideo && !prefersReducedMotion && (
          <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 z-20 flex items-center gap-2">
            <button
              type="button"
              onClick={togglePlayback}
              aria-label={isPlaying ? 'Pause background trailer' : 'Play background trailer'}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-1.5 text-xs font-semibold uppercase tracking-wider text-[#A4A7AC] hover:text-white bg-black/75 hover:bg-black/90 border border-white/10 hover:border-white/20 rounded backdrop-blur-md transition-all cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A4A7AC]" />
                  <span className="hidden sm:inline">Pause Video</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E62935] fill-current" />
                  <span className="text-[#E62935] hidden sm:inline">Play Video</span>
                </>
              )}
            </button>

            {videoLoaded && (
              <button
                type="button"
                onClick={toggleSound}
                aria-label={isMuted ? 'Unmute hero background video' : 'Mute hero background video'}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-1.5 text-xs font-semibold uppercase tracking-wider text-[#A4A7AC] hover:text-white bg-black/75 hover:bg-black/90 border border-white/10 hover:border-white/20 rounded backdrop-blur-md transition-all cursor-pointer"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A4A7AC]" />
                    <span className="hidden sm:inline">Audio Off</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E62935]" />
                    <span className="text-[#E62935] hidden sm:inline">Audio On</span>
                  </>
                )}
              </button>
            )}
          </div>
        )}

        {/* Hero Foreground Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-40 sm:pb-32 flex flex-col items-center text-center">
          {/* Eyebrow */}
          <p className="font-display font-bold uppercase text-xs sm:text-sm tracking-[0.25em] text-[#E62935] mb-4 sm:mb-6">
            {siteConfig.tagline}
          </p>

          {/* Main Heading */}
          <h1 className="font-display font-extrabold uppercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] sm:leading-[0.88] text-[#F5F5F3] drop-shadow-2xl max-w-5xl">
            RIVALS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F3] via-[#FFFFFF] to-[#A4A7AC]">
              REBORN
            </span>
            <span className="text-[#E62935]">.</span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-4 sm:mt-8 text-sm sm:text-lg md:text-xl text-[#A4A7AC] max-w-2xl font-normal leading-relaxed text-balance px-2 sm:px-0">
            Build your garage. Tune your vehicle correctly. Stage your car. Make every millisecond count.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-3 sm:gap-5 w-full sm:w-auto">
            <Button
              href="#download"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-base tracking-widest py-3.5 sm:py-4 px-6 sm:px-8 justify-center shadow-[0_0_25px_rgba(230,41,53,0.3)]"
              icon={<Download className="w-4 h-4 sm:w-5 sm:h-5" />}
            >
              Download The Game
            </Button>

            <div className="grid grid-cols-2 gap-2.5 w-full sm:flex sm:w-auto">
              {siteConfig.assets.heroVideo && (
                <Button
                  onClick={() => setTrailerModalOpen(true)}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-xs sm:text-base tracking-wider sm:tracking-widest py-3 sm:py-4 px-3 sm:px-8 border-[#E62935]/50 hover:bg-[#E62935]/15 justify-center"
                  icon={<Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-[#FF4552]" />}
                >
                  Watch Trailer
                </Button>
              )}

              <Button
                href="#the-game"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto text-xs sm:text-base tracking-wider sm:tracking-widest py-3 sm:py-4 px-3 sm:px-8 justify-center"
              >
                Discover The Game
              </Button>
            </div>
          </div>

          {/* Target Platform Metadata Pill */}
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs font-semibold uppercase tracking-wider text-center px-2">
            <span className="text-[#E62935]">
              Closed Invite Only Alpha Active
            </span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="text-[#A4A7AC]">Pre Registration &amp; Beta Soon</span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="text-[#F5F5F3]">iOS &amp; Android</span>
          </div>
        </div>

        {/* Scroll Down Indicator - Hidden on mobile touchscreens */}
        <a
          href="#the-game"
          aria-label="Scroll down to game introduction"
          className="hidden sm:flex absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 text-[#A4A7AC]/60 hover:text-[#E62935] transition-colors group cursor-pointer"
        >
          <span className="text-[10px] font-semibold uppercase tracking-widest group-hover:text-[#F5F5F3] transition-colors">
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
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#F5F5F3]">
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
