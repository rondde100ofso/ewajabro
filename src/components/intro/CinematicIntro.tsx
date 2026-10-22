'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

interface CinematicIntroProps {
  onComplete?: () => void;
}

type StagingStep =
  | 'idle'
  | 'red'
  | 'yellow_1'
  | 'yellow_2'
  | 'yellow_3'
  | 'green'
  | 'launch'
  | 'done';

export function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [step, setStep] = useState<StagingStep>('idle');
  const [mounted, setMounted] = useState(false);
  const [rpm, setRpm] = useState(1100);
  const rpmIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const completeIntro = useCallback(() => {
    setStep('launch');
    try {
      sessionStorage.setItem('rivals_intro_played', 'true');
    } catch {
      // Storage unavailable or disabled
    }
    const timer = setTimeout(() => {
      setStep('done');
      if (onComplete) onComplete();
    }, 450);
    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    setMounted(true);

    // Skip if user already experienced intro this session
    try {
      if (sessionStorage.getItem('rivals_intro_played') === 'true') {
        setStep('done');
        if (onComplete) onComplete();
        return;
      }
    } catch {
      // Storage unavailable
    }

    // Skip if reduced motion is requested
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setStep('done');
      if (onComplete) onComplete();
      return;
    }

    // --- Choreographed Drag Racing Tree Timeline (RED -> YELLOW -> GREEN) ---
    const timers: NodeJS.Timeout[] = [];

    // Step 1: RED lights ignite - Staged & Spooling (500ms)
    timers.push(
      setTimeout(() => {
        setStep('red');
        setRpm(4200);
      }, 500)
    );

    // Step 2: Yellow 1 drops (1200ms)
    timers.push(
      setTimeout(() => {
        setStep('yellow_1');
        setRpm(6800);
      }, 1200)
    );

    // Step 3: Yellow 2 drops (1850ms)
    timers.push(
      setTimeout(() => {
        setStep('yellow_2');
        setRpm(8100);
      }, 1850)
    );

    // Step 4: Yellow 3 drops, rev limiter bounces (2500ms)
    timers.push(
      setTimeout(() => {
        setStep('yellow_3');
        setRpm(8850);
        rpmIntervalRef.current = setInterval(() => {
          setRpm(8850 + Math.floor(Math.random() * 80 - 40));
        }, 50);
      }, 2500)
    );

    // Step 5: GREEN LIGHT BLAST! (3200ms)
    timers.push(
      setTimeout(() => {
        if (rpmIntervalRef.current) clearInterval(rpmIntervalRef.current);
        setStep('green');
        setRpm(9150);
      }, 3200)
    );

    // Step 6: Launch transition into page (4000ms)
    timers.push(
      setTimeout(() => {
        completeIntro();
      }, 4000)
    );

    return () => {
      timers.forEach(clearTimeout);
      if (rpmIntervalRef.current) clearInterval(rpmIntervalRef.current);
    };
  }, [completeIntro, onComplete]);

  if (!mounted || step === 'done') {
    return null;
  }

  // Active bulb states (Only Red, Yellow, Green)
  const redOn = step === 'red' || step === 'yellow_1' || step === 'yellow_2' || step === 'yellow_3';
  const yellow1On = step === 'yellow_1' || step === 'yellow_2' || step === 'yellow_3';
  const yellow2On = step === 'yellow_2' || step === 'yellow_3';
  const yellow3On = step === 'yellow_3';
  const greenOn = step === 'green' || step === 'launch';

  return (
    <div
      role="dialog"
      aria-label="Cinematic Christmas Tree Staging Introduction"
      aria-modal="true"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#08090B] overflow-hidden transition-all duration-500 ease-out select-none ${
        step === 'launch'
          ? 'opacity-0 scale-105 pointer-events-none'
          : step === 'green'
          ? 'scale-[1.01]'
          : 'opacity-100 scale-100'
      }`}
    >
      {/* Radiant Green Flash on launch */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 z-10 ${
          greenOn
            ? 'bg-radial-gradient from-[#00FF66]/30 via-[#00FF66]/10 to-transparent opacity-100'
            : 'opacity-0'
        }`}
      />

      {/* Speed lines & asphalt grid texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Top Controls: Skip Button */}
      <button
        onClick={completeIntro}
        type="button"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-10 z-30 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-mono tracking-widest text-[#A4A7AC] hover:text-[#F5F5F3] hover:border-[#E62935] border border-white/10 rounded-none transition-all uppercase bg-black/60 backdrop-blur-md cursor-pointer"
        aria-label="Skip drag racing staging intro"
      >
        Skip [ESC]
      </button>

      {/* Main Staging Rig */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 max-w-2xl w-full">
        {/* Dynamic Glow Aura */}
        <div
          className={`absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full blur-3xl transition-all duration-500 pointer-events-none ${
            greenOn
              ? 'bg-[#00FF66]/25 scale-125'
              : yellow1On
              ? 'bg-[#FFB800]/20 scale-110'
              : redOn
              ? 'bg-[#E62935]/20 scale-100'
              : 'bg-transparent scale-90'
          }`}
        />

        {/* ======================================================== */}
        {/* THE DRAG TREE TOWER (RED • YELLOW • GREEN)               */}
        {/* ======================================================== */}
        <div className="flex flex-col items-center mb-6 sm:mb-8">
          {/* Top Post Cap */}
          <div className="w-16 h-1.5 bg-[#22262B] border-t border-x border-white/15" />

          {/* Tree Housing Box */}
          <div className="bg-[#121417] border border-white/15 px-3.5 py-3.5 sm:px-4 sm:py-4 shadow-[0_10px_35px_rgba(0,0,0,0.8)] flex flex-col items-center gap-2.5 relative">
            {/* 1. RED STAGING FLOODLIGHTS (Top Pair) */}
            <div className="flex items-center gap-4">
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border transition-all duration-100 relative ${
                  redOn && !greenOn
                    ? 'bg-[#E62935] border-[#FF4552] shadow-[0_0_20px_#E62935,0_0_40px_rgba(230,41,53,0.85)] scale-105'
                    : 'bg-[#261416] border-white/10'
                }`}
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-black/40 rounded-t-full" />
              </div>
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border transition-all duration-100 relative ${
                  redOn && !greenOn
                    ? 'bg-[#E62935] border-[#FF4552] shadow-[0_0_20px_#E62935,0_0_40px_rgba(230,41,53,0.85)] scale-105'
                    : 'bg-[#261416] border-white/10'
                }`}
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-black/40 rounded-t-full" />
              </div>
            </div>

            {/* Tree Divider */}
            <div className="w-full h-px bg-white/10 my-0.5" />

            {/* 2. YELLOW COUNTDOWN FLOODLIGHTS (3 Pairs) */}
            {/* Yellow 1 */}
            <div className="flex items-center gap-4">
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border transition-all duration-75 relative ${
                  yellow1On && !greenOn
                    ? 'bg-[#FFB800] border-[#FFE600] shadow-[0_0_20px_#FFB800,0_0_40px_rgba(255,184,0,0.8)] scale-105'
                    : 'bg-[#2A2315] border-white/10'
                }`}
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-black/40 rounded-t-full" />
              </div>
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border transition-all duration-75 relative ${
                  yellow1On && !greenOn
                    ? 'bg-[#FFB800] border-[#FFE600] shadow-[0_0_20px_#FFB800,0_0_40px_rgba(255,184,0,0.8)] scale-105'
                    : 'bg-[#2A2315] border-white/10'
                }`}
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-black/40 rounded-t-full" />
              </div>
            </div>

            {/* Yellow 2 */}
            <div className="flex items-center gap-4">
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border transition-all duration-75 relative ${
                  yellow2On && !greenOn
                    ? 'bg-[#FFB800] border-[#FFE600] shadow-[0_0_20px_#FFB800,0_0_40px_rgba(255,184,0,0.8)] scale-105'
                    : 'bg-[#2A2315] border-white/10'
                }`}
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-black/40 rounded-t-full" />
              </div>
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border transition-all duration-75 relative ${
                  yellow2On && !greenOn
                    ? 'bg-[#FFB800] border-[#FFE600] shadow-[0_0_20px_#FFB800,0_0_40px_rgba(255,184,0,0.8)] scale-105'
                    : 'bg-[#2A2315] border-white/10'
                }`}
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-black/40 rounded-t-full" />
              </div>
            </div>

            {/* Yellow 3 */}
            <div className="flex items-center gap-4">
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border transition-all duration-75 relative ${
                  yellow3On && !greenOn
                    ? 'bg-[#FFB800] border-[#FFE600] shadow-[0_0_25px_#FFB800,0_0_50px_rgba(255,184,0,0.9)] scale-110'
                    : 'bg-[#2A2315] border-white/10'
                }`}
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-black/40 rounded-t-full" />
              </div>
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border transition-all duration-75 relative ${
                  yellow3On && !greenOn
                    ? 'bg-[#FFB800] border-[#FFE600] shadow-[0_0_25px_#FFB800,0_0_50px_rgba(255,184,0,0.9)] scale-110'
                    : 'bg-[#2A2315] border-white/10'
                }`}
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-black/40 rounded-t-full" />
              </div>
            </div>

            {/* Tree Divider */}
            <div className="w-full h-px bg-white/10 my-0.5" />

            {/* 3. GREEN LAUNCH FLOODLIGHTS (Bottom Pair) */}
            <div className="flex items-center gap-4">
              <div
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border transition-all duration-75 relative ${
                  greenOn
                    ? 'bg-[#00FF66] border-[#70FFA3] shadow-[0_0_35px_#00FF66,0_0_70px_rgba(0,255,102,1)] scale-115'
                    : 'bg-[#122619] border-white/10'
                }`}
              >
                <div className="absolute top-0 inset-x-0 h-1.5 bg-black/40 rounded-t-full" />
              </div>
              <div
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border transition-all duration-75 relative ${
                  greenOn
                    ? 'bg-[#00FF66] border-[#70FFA3] shadow-[0_0_35px_#00FF66,0_0_70px_rgba(0,255,102,1)] scale-115'
                    : 'bg-[#122619] border-white/10'
                }`}
              >
                <div className="absolute top-0 inset-x-0 h-1.5 bg-black/40 rounded-t-full" />
              </div>
            </div>
          </div>

          {/* Tree Base Post */}
          <div className="w-6 h-4 bg-[#1E2227] border-b border-x border-white/15" />
        </div>

        {/* ======================================================== */}
        {/* CENTER LOGO BRANDING                                      */}
        {/* ======================================================== */}
        <div
          className={`relative transition-all duration-500 ease-out transform ${
            greenOn
              ? 'scale-105 filter brightness-125'
              : step === 'idle'
              ? 'opacity-60 scale-95'
              : 'opacity-100 scale-100'
          }`}
        >
          <div className="relative w-64 sm:w-80 md:w-96 h-20 sm:h-24 md:h-28">
            <Image
              src={siteConfig.assets.logo}
              alt={siteConfig.brandName}
              fill
              priority
              className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
            />
          </div>
        </div>

        {/* ======================================================== */}
        {/* DIGITAL TACHOMETER & 2-STEP REV LIMITER TELEMETRY         */}
        {/* ======================================================== */}
        <div className="w-full max-w-sm mt-5 sm:mt-6 flex flex-col items-center">
          {/* Shift Light Array (8-Segment Racing Cluster) */}
          <div className="flex items-center gap-1.5 mb-2.5">
            {[...Array(8)].map((_, i) => {
              const active = rpm > 2000 + i * 880;
              const isRed = i >= 6;
              const isYellow = i >= 3 && i < 6;

              return (
                <div
                  key={i}
                  className={`w-4 sm:w-5 h-2 rounded-xs border transition-all duration-75 ${
                    active
                      ? isRed
                        ? 'bg-[#E62935] border-[#FF4552] shadow-[0_0_10px_#E62935]'
                        : isYellow
                        ? 'bg-[#FFB800] border-[#FFE600] shadow-[0_0_10px_#FFB800]'
                        : 'bg-[#00FF66] border-[#70FFA3] shadow-[0_0_10px_#00FF66]'
                      : 'bg-white/5 border-white/10'
                  }`}
                />
              );
            })}
          </div>

          {/* RPM Display Bar */}
          <div className="w-full h-1.5 bg-white/10 relative overflow-hidden rounded-full mb-3">
            <div
              className={`h-full transition-all duration-100 ease-out ${
                greenOn
                  ? 'bg-[#00FF66] shadow-[0_0_15px_#00FF66]'
                  : yellow1On
                  ? 'bg-gradient-to-r from-[#FFB800] to-[#E62935] shadow-[0_0_15px_#E62935]'
                  : 'bg-[#E62935] shadow-[0_0_10px_#E62935]'
              }`}
              style={{ width: `${Math.min(100, (rpm / 9200) * 100)}%` }}
            />
          </div>

          {/* Telemetry Numbers */}
          <div className="flex items-center justify-between w-full font-mono text-[11px] sm:text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-[#A4A7AC]">RPM:</span>
              <span
                className={`font-bold tabular-nums transition-colors ${
                  greenOn
                    ? 'text-[#00FF66]'
                    : yellow3On
                    ? 'text-[#E62935] animate-pulse'
                    : yellow1On
                    ? 'text-[#FFB800]'
                    : 'text-[#FF4552]'
                }`}
              >
                {rpm.toLocaleString()}
              </span>
            </div>

            <div className="flex items-center gap-1 text-[#A4A7AC]">
              <span>GEAR:</span>
              <span className="text-white font-bold">{greenOn ? '1ST [LAUNCH]' : 'N // TRANSBRAKE'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
