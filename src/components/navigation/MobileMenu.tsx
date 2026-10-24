'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, ArrowRight, Download, Disc as DiscordIcon, Shield } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#08090B]/98 backdrop-blur-xl animate-in fade-in duration-200"
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <Link href="/" onClick={onClose} className="relative block w-36 h-10">
          <Image
            src={siteConfig.assets.logo}
            alt={siteConfig.brandName}
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <button
          onClick={onClose}
          type="button"
          aria-label="Close menu"
          className="p-2.5 text-[#A4A7AC] hover:text-[#F5F5F3] hover:bg-white/5 rounded transition-colors border border-white/10"
        >
          <X className="w-5 h-5 text-[#F5F5F3]" />
        </button>
      </div>

      {/* Nav Items */}
      <div
        ref={menuRef}
        className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between"
      >
        <nav className="flex flex-col space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="group flex items-center justify-between py-4 text-2xl font-display uppercase tracking-wider font-bold text-[#F5F5F3] hover:text-[#E62935] border-b border-white/5 transition-colors"
            >
              <span>{link.label}</span>
              <ArrowRight className="w-5 h-5 text-[#A4A7AC] group-hover:text-[#E62935] transform group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="pt-8 space-y-4">
          <Button
            href="#download"
            onClick={onClose}
            variant="primary"
            size="lg"
            className="w-full justify-center"
            icon={<Download className="w-5 h-5" />}
          >
            Download Game
          </Button>

          {siteConfig.socials.discord?.url && (
            <a
              href={siteConfig.socials.discord.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center justify-center gap-2.5 py-3 px-4 w-full text-xs font-semibold tracking-wider uppercase text-[#A4A7AC] hover:text-[#F5F5F3] bg-[#141619] border border-white/10 rounded transition-colors"
            >
              <span>Official Discord Community</span>
            </a>
          )}

          <div className="pt-4 flex items-center justify-center gap-6 text-xs text-[#A4A7AC]/60">
            <Link href="/legal/terms-of-service" onClick={onClose} className="hover:text-white">
              Terms
            </Link>
            <span>•</span>
            <Link href="/legal/privacy-policy" onClick={onClose} className="hover:text-white">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
