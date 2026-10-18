import React from 'react';
import { CinematicIntro } from '@/components/intro/CinematicIntro';
import { Navbar } from '@/components/navigation/Navbar';
import { HeroSection } from '@/components/hero/HeroSection';
import { GameIntroduction } from '@/components/intro-story/GameIntroduction';
import { FeatureSections } from '@/components/features/FeatureSections';
import { PlatformDownloads } from '@/components/platforms/PlatformDownloads';
import { GameplayGallery } from '@/components/gallery/GameplayGallery';
import { CommunitySection } from '@/components/community/CommunitySection';
import { FinalCTA } from '@/components/cta/FinalCTA';
import { Footer } from '@/components/footer/Footer';
import { CookieConsentModal } from '@/components/cookies/CookieConsentModal';

export default function HomePage() {
  return (
    <>
      {/* Cinematic Logo Introduction Overlay (session-cached) */}
      <CinematicIntro />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* Section B: Hero */}
        <HeroSection />

        {/* Section D: Game Introduction */}
        <GameIntroduction />

        {/* Section E: Gameplay Features */}
        <FeatureSections />

        {/* Section C: Platform Downloads */}
        <PlatformDownloads />

        {/* Section F: Media & Gameplay Gallery */}
        <GameplayGallery />

        {/* Section G: Community Hubs */}
        <CommunitySection />

        {/* Section H: Final Call to Action */}
        <FinalCTA />
      </main>

      {/* Section I: Global Footer */}
      <Footer />

      {/* Privacy & Cookie Management Banner / Modal */}
      <CookieConsentModal />
    </>
  );
}
