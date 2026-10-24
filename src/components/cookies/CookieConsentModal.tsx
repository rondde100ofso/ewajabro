'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Check, X, Settings2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

export function CookieConsentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('rivals_cookie_consent');
      if (!saved || saved.trim() === '') {
        // Show initial prompt
        const timer = setTimeout(() => setShowBanner(true), 1200);
        return () => clearTimeout(timer);
      } else {
        const parsed = JSON.parse(saved) as CookiePreferences;
        if (parsed && typeof parsed === 'object') {
          setAnalytics(Boolean(parsed.analytics));
          setMarketing(Boolean(parsed.marketing));
        } else {
          setShowBanner(true);
        }
      }
    } catch {
      // Storage or parse error, fallback to banner
      setShowBanner(true);
    }

    // Listen for custom event to open preferences from footer
    const handleOpenPreferences = () => {
      setIsOpen(true);
      setShowBanner(false);
    };

    window.addEventListener('open-cookie-preferences', handleOpenPreferences);
    return () => window.removeEventListener('open-cookie-preferences', handleOpenPreferences);
  }, []);

  const savePreferences = (ana: boolean, mkt: boolean) => {
    const prefs: CookiePreferences = {
      necessary: true,
      analytics: ana,
      marketing: mkt,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem('rivals_cookie_consent', JSON.stringify(prefs));
    } catch {
      // Storage unavailable
    }
    setAnalytics(ana);
    setMarketing(mkt);
    setIsOpen(false);
    setShowBanner(false);
  };

  const handleAcceptAll = () => savePreferences(true, true);
  const handleRejectOptional = () => savePreferences(false, false);
  const handleSaveCustom = () => savePreferences(analytics, marketing);

  return (
    <>
      {/* Floating Bottom Banner for first-time visitors */}
      {showBanner && !isOpen && (
        <div
          role="region"
          aria-label="Privacy and Cookie Notice"
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-40 bg-[#141619] border border-white/10 p-5 shadow-2xl animate-in slide-in-from-bottom duration-300"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#1D2024] border border-white/10 text-[#FF4552] flex-shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base uppercase tracking-wider text-[#F5F5F3]">
                Privacy & Data Preferences
              </h4>
              <p className="mt-1 text-xs text-[#A4A7AC] leading-relaxed">
                We use necessary cookies for core website functionality and session preferences.
                Optional analytics help us monitor site stability and performance with your consent.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Button
                  onClick={handleAcceptAll}
                  variant="primary"
                  size="sm"
                  className="text-xs px-3 py-1.5"
                >
                  Accept All
                </Button>
                <Button
                  onClick={handleRejectOptional}
                  variant="secondary"
                  size="sm"
                  className="text-xs px-3 py-1.5"
                >
                  Reject Optional
                </Button>
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="text-xs font-medium text-[#A4A7AC] hover:text-[#F5F5F3] underline ml-1"
                >
                  Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Detailed Cookie Preferences Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Manage Cookie Preferences"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
        >
          <div className="relative bg-[#141619] border border-white/10 max-w-lg w-full p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <Settings2 className="w-5 h-5 text-[#E62935]" />
                <h3 className="font-display font-bold text-xl uppercase tracking-wider text-[#F5F5F3]">
                  Cookie Preferences
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-[#A4A7AC] hover:text-white p-1"
                aria-label="Close preferences"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="mt-4 text-xs text-[#A4A7AC] leading-relaxed">
              Customize how cookies and device identifiers are stored on your device. Strictly necessary
              storage cannot be disabled as it is required for fundamental operation.
            </p>

            <div className="mt-6 space-y-4">
              {/* Strictly Necessary */}
              <div className="p-4 bg-[#1D2024]/60 border border-white/5 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-sm uppercase text-[#F5F5F3]">
                      Strictly Necessary
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-white/10 text-white rounded">
                      Always Active
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#A4A7AC]">
                    Required for site navigation, security tokens, and preserving preference choices.
                  </p>
                </div>
              </div>

              {/* Analytics */}
              <div className="p-4 bg-[#1D2024]/60 border border-white/5 flex items-start justify-between">
                <div>
                  <span className="font-display font-bold text-sm uppercase text-[#F5F5F3]">
                    Performance & Analytics
                  </span>
                  <p className="mt-1 text-xs text-[#A4A7AC]">
                    Measures aggregated traffic, loading performance, and viewport engagement.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-[#E62935] cursor-pointer"
                  aria-label="Toggle analytics cookies"
                />
              </div>

              {/* Marketing */}
              <div className="p-4 bg-[#1D2024]/60 border border-white/5 flex items-start justify-between">
                <div>
                  <span className="font-display font-bold text-sm uppercase text-[#F5F5F3]">
                    Marketing & Attribution
                  </span>
                  <p className="mt-1 text-xs text-[#A4A7AC]">
                    Enables campaign conversion tracking for pre registration and app store releases.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-[#E62935] cursor-pointer"
                  aria-label="Toggle marketing cookies"
                />
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-end gap-3">
              <Button
                onClick={handleRejectOptional}
                variant="ghost"
                size="sm"
                className="text-xs"
              >
                Reject All
              </Button>
              <Button
                onClick={handleSaveCustom}
                variant="primary"
                size="sm"
                className="text-xs"
              >
                Save Preferences
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function openCookiePreferences() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-cookie-preferences'));
  }
}
