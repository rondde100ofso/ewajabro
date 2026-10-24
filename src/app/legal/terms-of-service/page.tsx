import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { LegalLayout } from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Official terms of service governing player participation, digital licenses, and code of conduct for ${siteConfig.brandName}.`,
};

export default function TermsOfServicePage() {
  const meta = siteConfig.legal.documents.termsOfService;

  const tocItems = [
    { id: 'acceptance', label: '1. Acceptance & Eligibility' },
    { id: 'accounts', label: '2. Accounts & Security' },
    { id: 'licenses', label: '3. Limited Game License' },
    { id: 'virtual-goods', label: '4. Virtual Items & Purchases' },
    { id: 'conduct', label: '5. Prohibited Conduct & Cheating' },
    { id: 'suspension', label: '6. Suspension & Termination' },
    { id: 'intellectual-property', label: '7. Intellectual Property' },
    { id: 'disclaimers', label: '8. Disclaimers & Limitations' },
    { id: 'disputes', label: '9. Dispute Resolution & Governing Law' },
    { id: 'contact', label: '10. Contact Information' },
  ];

  return (
    <LegalLayout
      title={meta.title}
      effectiveDate={meta.effectiveDate}
      lastUpdated={meta.lastUpdated}
      tocItems={tocItems}
    >
      <section id="acceptance" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          1. Acceptance of Terms & Eligibility
        </h2>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern access to and play of the mobile application{' '}
          <strong>{siteConfig.brandName}</strong>, operated by {siteConfig.legal.publisherLegalName}{' '}
          (&ldquo;Publisher,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By downloading,
          installing, registering for, or playing the game, you enter into a binding legal contract with us.
        </p>
        <p>
          To play {siteConfig.brandName}, you must be at least 13 years old (or the minimum legal age of digital
          consent in your jurisdiction, such as 16 in certain European Union member states). If you are below the
          age of majority in your country of residence, you confirm that your parent or legal guardian has
          reviewed and consented to these Terms on your behalf.
        </p>
      </section>

      <section id="accounts" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          2. Account Registration & Security
        </h2>
        <p>
          Certain gameplay modes, crew memberships, cross-device synchronization, and online leaderboards
          require creating or authenticating a user account (via Apple Game Center, Google Play Games, or
          verified third-party single sign-on). You agree to provide accurate registration data and keep your
          credentials confidential.
        </p>
        <p>
          You are entirely responsible for all activity that occurs under your account. You may not sell, rent,
          transfer, or share your account credentials with any third party. If you discover unauthorized access to
          your account, notify us immediately at{' '}
          <a href={`mailto:${siteConfig.support.email}`} className="text-[#FF4552] underline">
            {siteConfig.support.email}
          </a>.
        </p>
      </section>

      <section id="licenses" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          3. Limited Game License
        </h2>
        <p>
          Subject to continuous compliance with these Terms, we grant you a personal, non-exclusive,
          non-transferable, non-sublicensable, revocable limited license to download, install, and execute one copy
          of {siteConfig.brandName} on compatible personal mobile devices solely for your non-commercial
          entertainment.
        </p>
        <p>
          No title, ownership, or intellectual property rights in the game software, client binaries, source
          code, sound recordings, visual assets, 3D vehicle geometry, or physics algorithms are transferred to you.
        </p>
      </section>

      <section id="virtual-goods" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          4. Virtual Items, In-App Purchases & Consumer Rights
        </h2>
        <p>
          The game may offer virtual in game currencies (such as credits or gold), blueprint upgrade parts, cosmetic
          vehicle liveries, or premium vehicles (&ldquo;Virtual Items&rdquo;). Virtual Items are licensed to you on
          a limited, revocable basis; they have no cash, monetary, or real world value and do not constitute
          personal property.
        </p>
        <p>
          All purchases made through the Apple App Store or Google Play Store are processed by Apple Inc. or Google
          LLC respectively and are governed by their platform terms and refund policies.
        </p>
        <div className="p-4 bg-[#141619] border border-white/10 rounded">
          <h4 className="font-display font-bold text-sm uppercase text-[#F5F5F3]">
            European Union Consumer Notice
          </h4>
          <p className="mt-1 text-xs text-[#A4A7AC]">
            If you reside in the European Union, you acknowledge that by purchasing and receiving instant digital
            delivery of Virtual Items, you expressly consent to immediate performance of the contract and waive
            your statutory 14-day right of withdrawal.
          </p>
        </div>
      </section>

      <section id="conduct" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          5. Prohibited Conduct & Anti-Cheating Enforcement
        </h2>
        <p>
          The competitive integrity of {siteConfig.brandName} is paramount. You agree not to engage in any of the
          following prohibited actions:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Using unauthorized third-party software, bots, automated tap macros, speed hacks, memory editors, or
            network packet injection tools to alter reaction timing or mechanical telemetry.
          </li>
          <li>
            Exploiting software bugs, staging glitches, or desynchronization vulnerabilities for competitive advantage.
          </li>
          <li>
            Reverse-engineering, decompiling, disassembling, or attempting to derive source code from the game client.
          </li>
          <li>
            Participating in win-trading, match-rigging, or unauthorized real money trading (&ldquo;RMT&rdquo;) of
            in game accounts or vehicles.
          </li>
          <li>
            Harassing, abusing, or defaming other players through crew chat, custom liveries, or player handles.
          </li>
        </ul>
      </section>

      <section id="suspension" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          6. Suspension, Reset & Termination
        </h2>
        <p>
          We reserve the right to suspend, restrict, or permanently terminate your account and revoke your game
          license without prior notice if you violate these Terms or engage in behavior detrimental to fair
          competition.
        </p>
        <p>
          In the event of termination due to cheating or misconduct, all unredeemed Virtual Items and leaderboard
          standings are forfeited without refund.
        </p>
      </section>

      <section id="intellectual-property" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          7. Intellectual Property & Automotive Trademarks
        </h2>
        <p>
          All trademarks, service marks, logos, brand names, visual styling, and game assets associated with{' '}
          {siteConfig.brandName} are the exclusive intellectual property of {siteConfig.legal.publisherLegalName}{' '}
          and its licensors.
        </p>
        <p>
          Any vehicle makes, models, aftermarket component names, or logos referenced in gameplay or concept
          materials are the intellectual property of their respective manufacturer owners. No endorsement or
          sponsorship by third-party automotive marques is implied unless explicitly stated.
        </p>
      </section>

      <section id="disclaimers" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          8. Disclaimers of Warranties & Limitations of Liability
        </h2>
        <p>
          {siteConfig.brandName} is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis. To the
          fullest extent permitted by applicable law, we disclaim all warranties, express or implied, including
          merchantability, fitness for a particular purpose, and uninterrupted operation.
        </p>
        <p>
          In no event shall {siteConfig.legal.publisherLegalName} or its directors, employees, or partners be liable
          for indirect, incidental, special, consequential, or punitive damages arising from the use of or
          inability to access the service.
        </p>
      </section>

      <section id="disputes" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          9. Dispute Resolution & Governing Law
        </h2>
        <p>
          These Terms shall be interpreted and governed in accordance with the laws of {siteConfig.legal.jurisdiction},
          without regard to conflict-of-law principles. Any legal claim or dispute arising under these Terms shall
          be resolved through competent courts or binding individual arbitration where enforceable.
        </p>
      </section>

      <section id="contact" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          10. Contact & Updates to Terms
        </h2>
        <p>
          We may update these Terms periodically to reflect game updates, new legal requirements, or platform
          policies. Continued play after updates take effect constitutes your agreement to the modified terms.
        </p>
        <p>
          For questions regarding these Terms of Service, contact our legal counsel at:{' '}
          <a href={`mailto:${siteConfig.legal.contactEmail}`} className="text-[#FF4552] underline">
            {siteConfig.legal.contactEmail}
          </a>.
        </p>
      </section>
    </LegalLayout>
  );
}
