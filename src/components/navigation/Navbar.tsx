'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Download, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Game', href: '#the-game' },
    { label: 'Features', href: '#features' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Community', href: '#community' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#08090B]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
            : 'bg-gradient-to-b from-[#08090B]/90 via-[#08090B]/40 to-transparent py-5'
        }`}
      >
        {/* Top Announcement Bar if enabled */}
        {siteConfig.announcement.enabled && !scrolled && (
          <div className="hidden md:flex items-center justify-center gap-2.5 pb-3 text-xs font-mono tracking-wider text-[#A4A7AC] border-b border-white/5 mb-3">
            <span className="inline-block px-2 py-0.5 text-[10px] uppercase font-bold bg-[#E62935]/20 text-[#FF4552] border border-[#E62935]/30 rounded">
              {siteConfig.announcement.badge}
            </span>
            <span>{siteConfig.announcement.text}</span>
            {siteConfig.announcement.linkHref && (
              <a
                href={siteConfig.announcement.linkHref}
                className="text-[#F5F5F3] hover:text-[#E62935] inline-flex items-center gap-0.5 underline underline-offset-4 decoration-white/20 hover:decoration-[#E62935]"
              >
                {siteConfig.announcement.linkText || 'Learn More'}
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Wordmark */}
            <Link
              href="/"
              className="relative block w-32 sm:w-44 md:w-52 h-10 sm:h-12 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E62935]"
              aria-label={`${siteConfig.brandName} Home`}
            >
              <Image
                src={siteConfig.assets.logo}
                alt={siteConfig.brandName}
                fill
                priority
                className="object-contain object-left drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-display uppercase tracking-widest font-semibold text-[#A4A7AC] hover:text-[#F5F5F3] transition-colors py-1 group"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E62935] group-hover:w-full transition-all duration-200" />
                </a>
              ))}
            </nav>

            {/* Desktop Action CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                href="#download"
                variant="primary"
                size="sm"
                icon={<Download className="w-4 h-4" />}
                className="shadow-lg"
              >
                Download Game
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-[#A4A7AC] hover:text-white hover:bg-white/5 rounded border border-white/10 transition-colors"
                aria-label="Open mobile navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
