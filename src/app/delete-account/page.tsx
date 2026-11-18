import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { LegalLayout } from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Delete Account & Data',
  description: `Step-by-step instructions for deleting your ${siteConfig.brandName} account and personal data, in compliance with Google Play and Apple App Store policies.`,
};

export default function DeleteAccountPage() {
  const meta = siteConfig.legal.documents.privacyPolicy;

  const tocItems = [
    { id: 'overview', label: '1. Overview' },
    { id: 'in-game-deletion', label: '2. In-Game Deletion (Instant)' },
    { id: 'email-deletion', label: '3. Email Deletion Request' },
    { id: 'data-deleted', label: '4. What Data Is Deleted' },
    { id: 'data-retained', label: '5. What Data Is Retained' },
    { id: 'important-notice', label: '6. Important Considerations' },
  ];

  return (
    <LegalLayout
      title="Account & Data Deletion"
      effectiveDate={meta.effectiveDate}
      lastUpdated={meta.lastUpdated}
      tocItems={tocItems}
    >
      {/* 1. Overview */}
      <section id="overview" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          1. Overview
        </h2>
        <p>
          At {siteConfig.brandName} (operated by Launch Control Studios LLC), you have full control over your account
          and personal data. In accordance with Section 7 of our Privacy Policy and Section 11 of our Terms of Service,
          you can delete your account at any time either directly within the game application or by submitting a written
          request via email.
        </p>
        <p className="text-xs text-[#A4A7AC]">
          These instructions satisfy Google Play&apos;s and Apple&apos;s account deletion requirements, allowing you to request
          deletion without needing to reinstall the application.
        </p>
      </section>

      {/* 2. In-Game Deletion */}
      <section id="in-game-deletion" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          2. In-Game Deletion (Instant)
        </h2>
        <p>
          If you have the game installed on your device, deleting your account is instantaneous:
        </p>

        <div className="p-4 bg-[#141619] border border-white/10 space-y-3">
          <ol className="list-decimal pl-6 space-y-2 text-sm text-[#F5F5F3]">
            <li>Open the <strong>Rivals Reborn</strong> application on your mobile device.</li>
            <li>Tap on the gear icon to open <strong>Settings</strong>.</li>
            <li>Scroll down and tap <strong>DELETE ACCOUNT</strong>.</li>
            <li>Type your <strong>Racer Name</strong> exactly as displayed to confirm your intention.</li>
            <li>Sign in again (via Firebase Authentication, Google, or Apple) to verify your identity.</li>
            <li>Confirm the prompt. Your account and associated game data are deleted immediately.</li>
          </ol>
        </div>

        <p className="text-xs text-[#A4A7AC]">
          <strong className="text-[#F5F5F3]">Note:</strong> You cannot delete your account in the middle of a race or while a car is staked in an active pinks (pink slip) race.
        </p>
      </section>

      {/* 3. Email Deletion Request */}
      <section id="email-deletion" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          3. Email Deletion Request
        </h2>
        <p>
          If you have uninstalled the game, no longer have access to your device, or if your account is banned, you can
          submit a deletion request via email:
        </p>

        <div className="p-4 bg-[#141619] border border-white/10 space-y-3 text-xs text-[#A4A7AC]">
          <div>
            <strong className="text-[#F5F5F3]">Send email to:</strong>{' '}
            <a href="mailto:undergroundrivals26@gmail.com" className="text-[#FF4552] underline">
              undergroundrivals26@gmail.com
            </a>
          </div>
          <div>
            <strong className="text-[#F5F5F3]">Subject line:</strong> Account Deletion Request &ndash; [Your Racer Name]
          </div>
          <div className="space-y-1.5 pt-2">
            <p className="text-[#F5F5F3] font-medium">Please include the following information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your in-game <strong>Racer Name</strong> and/or Player ID</li>
              <li>The email address or sign-in method used (Google Sign-In, Sign in with Apple, or Email)</li>
              <li>If you used Sign in with Apple with &ldquo;Hide My Email&rdquo;, include the relay email if available</li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-[#A4A7AC]">
          <strong className="text-[#F5F5F3]">Timeline &amp; Verification:</strong> To protect player accounts from unauthorized deletion, we may ask you to verify account ownership. Once ownership is confirmed, your account will be deleted within 30 days. Note that banned accounts can only be deleted through this email process.
        </p>
      </section>

      {/* 4. What Data Is Deleted */}
      <section id="data-deleted" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          4. What Data Is Permanently Deleted
        </h2>
        <p>
          When your account is deleted, the following data is permanently wiped from our production databases:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-sm text-[#A4A7AC]">
          <li><strong className="text-[#F5F5F3]">Authentication credentials:</strong> your login, authentication token, and associated credentials.</li>
          <li><strong className="text-[#F5F5F3]">Profile &amp; Identity:</strong> racer name, profile photo, level, XP, and stats.</li>
          <li><strong className="text-[#F5F5F3]">Garage &amp; Balances:</strong> cars, upgrades, tunes, cosmetics, and unspent RRC and gem balances.</li>
          <li><strong className="text-[#F5F5F3]">Social connections:</strong> friends and friend requests (removed on both sides), crew membership, and inbox mail.</li>
          <li><strong className="text-[#F5F5F3]">Chat history:</strong> your direct messages and messages in lobby, room, and crew chats.</li>
          <li><strong className="text-[#F5F5F3]">Marketplace &amp; Trades:</strong> open trades, offers, listings, and auction bids are cancelled first, and any items or currency held in escrow are returned to their respective owners.</li>
          <li><strong className="text-[#F5F5F3]">Sign in with Apple:</strong> if you authenticated via Apple, our servers revoke the Game&apos;s access token with Apple.</li>
        </ul>
      </section>

      {/* 5. What Data Is Retained */}
      <section id="data-retained" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          5. What Data Is Retained &amp; Retention Periods
        </h2>
        <p>
          As outlined in Section 6 and Section 7 of the Privacy Policy, certain records are retained for strictly defined periods after deletion to meet legal, financial, and fair-play requirements:
        </p>

        <ul className="list-disc pl-6 space-y-2.5 text-xs text-[#A4A7AC]">
          <li>
            <strong className="text-[#F5F5F3]">Purchase records (7 years):</strong> transaction receipts, store order IDs, and timestamps are retained for tax audits, statutory financial reporting, and chargeback verification.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Records of cash and cars passed to other players (180 days):</strong> retained to trace fraudulent transfers, refund abuse, and chargeback cascades.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Phone and home-connection records (lifetime of the Game):</strong> device identifier, scrambled IP hash, days seen, and Apple&apos;s two device marks are kept to enforce the one-account-per-phone and two-accounts-per-home rules. Your phone stays marked as having created an account.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Anti-cheat flags, staff alerts, and admin action log (5 years):</strong> retained to protect game security and maintain system audits.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Ban records (5 years after deletion):</strong> player ID, device identifier, scrambled connection, and ban reason to prevent ban evasion.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Crew Turf points:</strong> points already contributed to your crew&apos;s seasonal standings remain credited to that crew.
          </li>
        </ul>
      </section>

      {/* 6. Important Considerations */}
      <section id="important-notice" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          6. Important Considerations
        </h2>
        <div className="p-4 bg-[#141619] border-l-2 border-[#E62935] space-y-2 text-xs text-[#A4A7AC]">
          <p className="text-[#F5F5F3] font-bold uppercase tracking-wider">
            Permanent &amp; Irreversible
          </p>
          <p>
            Account deletion is permanent. Once completed, your progress, vehicles, RRC, gems, and items cannot be restored or refunded under any circumstances.
          </p>
          <p>
            <strong className="text-[#F5F5F3]">Uninstalling is not deleting:</strong> Simply deleting or uninstalling the Rivals Reborn app from your phone does not delete your account or data. You must follow the in-game deletion steps or email us.
          </p>
          <p>
            <strong className="text-[#F5F5F3]">Device Limit:</strong> Under Section 2 of the Terms of Service, each physical phone may only ever create one account. Deleting an account does not reset this device limit.
          </p>
        </div>

        <p className="text-xs text-[#A4A7AC] pt-2">
          Read our complete{' '}
          <Link href="/legal/privacy-policy" className="text-[#FF4552] underline">
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href="/legal/terms-of-service" className="text-[#FF4552] underline">
            Terms of Service
          </Link>.
        </p>
      </section>
    </LegalLayout>
  );
}
