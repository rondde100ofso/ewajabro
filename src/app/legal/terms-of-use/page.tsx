import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { LegalLayout } from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Website Use',
  description: `Official conditions governing visitor use of the public marketing website for ${siteConfig.brandName}.`,
};

export default function TermsOfUsePage() {
  const meta = siteConfig.legal.documents.termsOfUse;

  const tocItems = [
    { id: 'scope', label: '1. Website Scope & Application' },
    { id: 'acceptable-use', label: '2. Acceptable Use Policy' },
    { id: 'proprietary-rights', label: '3. Intellectual Property Rights' },
    { id: 'third-party-links', label: '4. External Links & Storefronts' },
    { id: 'availability', label: '5. Website Availability & Maintenance' },
    { id: 'user-submissions', label: '6. User Inquiries & Feedback' },
    { id: 'disclaimer-liability', label: '7. Disclaimers & Limitations' },
    { id: 'amendments', label: '8. Amendments & Inquiries' },
  ];

  return (
    <LegalLayout
      title={meta.title}
      effectiveDate={meta.effectiveDate}
      lastUpdated={meta.lastUpdated}
      tocItems={tocItems}
    >
      <section id="scope" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          1. Website Scope & Application
        </h2>
        <p>
          These Terms of Website Use (&ldquo;Website Terms&rdquo;) govern your browsing and use of the public marketing
          website located at <strong>{siteConfig.domain}</strong> and its associated subdomains (collectively, the
          &ldquo;Website&rdquo;), hosted and operated by {siteConfig.legal.publisherLegalName}.
        </p>
        <p>
          These Website Terms specifically regulate the informational, promotional, and media content presented on
          this portal. Gameplay, account authorization, digital purchases, and multiplayer interactions are
          separately governed by our{' '}
          <a href="/legal/terms-of-service" className="text-[#FF4552] underline">
            Terms of Service
          </a>.
        </p>
      </section>

      <section id="acceptable-use" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          2. Acceptable Use Policy
        </h2>
        <p>
          You agree to browse and interact with the Website strictly for lawful, non-commercial personal purposes.
          When using the Website, you must not:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Deploy automated scrapers, crawlers, spiders, or data mining software to systematically extract text,
            graphics, or media without express written authorization.
          </li>
          <li>
            Circumvent, disable, or tamper with security-related controls, rate limiters, or access restrictions.
          </li>
          <li>
            Transmit malicious code, viruses, Trojan horses, or corrupted data designed to degrade server performance
            or compromise visitor connectivity.
          </li>
          <li>
            Misrepresent your affiliation with {siteConfig.brandName} or attempt to create unauthorized mirrors or
            phishing replicas of the Website.
          </li>
        </ul>
      </section>

      <section id="proprietary-rights" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          3. Intellectual Property Rights & Media Usage
        </h2>
        <p>
          All typography, graphic styling, video trailers, high-resolution renders, screenshot previews, and
          brand marks displayed on the Website are protected by copyright, trademark, and international
          intellectual property treaties.
        </p>
        <p>
          You may view and download single temporary copies of public media for personal, non-commercial reference
          only. You may not broadcast, syndicate, resell, repackage, or publicly redistribute any asset from this
          Website without written permission from {siteConfig.legal.publisherLegalName}.
        </p>
      </section>

      <section id="third-party-links" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          4. External Links & Official Storefronts
        </h2>
        <p>
          The Website features hyperlinks pointing to external websites and platforms, including Apple App Store,
          Google Play Store, Discord, YouTube, TikTok, Instagram, and X. These links are provided solely for your
          convenience and community engagement.
        </p>
        <p>
          We do not control and are not responsible for the content, privacy practices, or availability of third-party
          platforms. Accessing external platforms is done entirely at your own discretion.
        </p>
      </section>

      <section id="availability" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          5. Website Availability & Maintenance
        </h2>
        <p>
          We strive to maintain continuous availability of the Website. However, we do not warrant that access
          will be uninterrupted, timely, or error-free. The Website may be temporarily suspended without notice for
          scheduled server maintenance, emergency patches, or infrastructure upgrades.
        </p>
      </section>

      <section id="user-submissions" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          6. User Inquiries, Creative Feedback & Submissions
        </h2>
        <p>
          If you send us feedback, vehicle suggestions, tuning balance notes, or creative submissions via email or
          community channels, you acknowledge that we may utilize such ideas without restriction, financial
          compensation, or attribution to you.
        </p>
      </section>

      <section id="disclaimer-liability" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          7. Disclaimers & Permissible Limitations
        </h2>
        <p>
          THE WEBSITE AND ALL INFORMATIONAL CONTENT ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS
          AVAILABLE&rdquo; BASIS. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL STATUTORY OR IMPLIED
          WARRANTIES. WE SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES RESULTING
          FROM YOUR USE OR INABILITY TO USE THE WEBSITE.
        </p>
      </section>

      <section id="amendments" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          8. Amendments & Inquiries
        </h2>
        <p>
          We reserve the right to revise these Website Terms at any time. Any changes will become effective
          immediately upon publication with an updated effective date.
        </p>
        <p>
          For queries concerning website usage or content licensing, please contact:{' '}
          <a href={`mailto:${siteConfig.legal.contactEmail}`} className="text-[#FF4552] underline">
            {siteConfig.legal.contactEmail}
          </a>.
        </p>
      </section>
    </LegalLayout>
  );
}
