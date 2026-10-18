import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { LegalLayout } from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Official privacy policy explaining data collection, cookies, GDPR compliance, and player privacy rights for ${siteConfig.brandName}.`,
};

export default function PrivacyPolicyPage() {
  const meta = siteConfig.legal.documents.privacyPolicy;

  const tocItems = [
    { id: 'controller', label: '1. Data Controller Identity' },
    { id: 'data-collected', label: '2. Personal Data We Collect' },
    { id: 'cookies', label: '3. Cookies & Local Storage' },
    { id: 'legal-bases', label: '4. Legal Bases for Processing' },
    { id: 'data-sharing', label: '5. Data Sharing & Service Providers' },
    { id: 'international-transfers', label: '6. International Transfers' },
    { id: 'retention', label: '7. Data Retention Periods' },
    { id: 'security', label: '8. Technical Security Safeguards' },
    { id: 'rights', label: '9. Your GDPR & CCPA Data Rights' },
    { id: 'children', label: '10. Children\'s Privacy' },
    { id: 'contact', label: '11. Privacy Contact & DPO' },
  ];

  return (
    <LegalLayout
      title={meta.title}
      effectiveDate={meta.effectiveDate}
      lastUpdated={meta.lastUpdated}
      tocItems={tocItems}
    >
      <section id="controller" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          1. Data Controller Identity
        </h2>
        <p>
          For the purposes of the General Data Protection Regulation (&ldquo;GDPR&rdquo;), UK Data Protection Act,
          and applicable global data privacy statutes, the Data Controller responsible for personal data processed
          through this Website and associated services is:
        </p>
        <div className="p-4 bg-[#141619] border border-white/10 space-y-1 font-mono text-xs">
          <div><strong className="text-[#F5F5F3]">Entity:</strong> {siteConfig.legal.publisherLegalName}</div>
          <div><strong className="text-[#F5F5F3]">Jurisdiction:</strong> {siteConfig.legal.jurisdiction}</div>
          <div><strong className="text-[#F5F5F3]">Privacy Contact:</strong> {siteConfig.legal.privacyEmail}</div>
        </div>
      </section>

      <section id="data-collected" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          2. Personal Data We Collect
        </h2>
        <p>
          We adhere to data minimization principles. We only collect personal information that is strictly necessary
          to deliver, protect, and optimize our services.
        </p>
        <div className="space-y-3">
          <div className="p-3.5 bg-[#141619] border border-white/5">
            <h4 className="font-display font-bold text-sm uppercase text-[#F5F5F3]">
              A. Information Provided Voluntarily
            </h4>
            <p className="mt-1 text-xs text-[#A4A7AC]">
              When you contact us via email, submit a support ticket, or sign up for pre-registration notifications,
              we process your email address, handle, and message details to respond to your inquiry.
            </p>
          </div>

          <div className="p-3.5 bg-[#141619] border border-white/5">
            <h4 className="font-display font-bold text-sm uppercase text-[#F5F5F3]">
              B. Technical Information & Server Telemetry
            </h4>
            <p className="mt-1 text-xs text-[#A4A7AC]">
              When you connect to our servers, automated technical logs record IP addresses (anonymized where feasible),
              browser user-agent, operating system version, HTTP referrers, request timestamps, and response status
              codes for DDoS prevention and diagnostics.
            </p>
          </div>
        </div>
      </section>

      <section id="cookies" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          3. Cookies & Local Storage Technologies
        </h2>
        <p>
          We utilize essential client-side storage technologies to deliver core interactive features:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Session Storage (rivals_intro_played):</strong> Records whether you have already viewed the
            cinematic logo sequence during your active browser session, preventing repetitive playback.
          </li>
          <li>
            <strong>Local Storage (rivals_cookie_consent):</strong> Stores your explicit privacy preference choices
            regarding optional analytics and marketing categories.
          </li>
        </ul>
        <p>
          No non-essential third-party tracking or advertising cookies are loaded until you grant express consent
          through our Cookie Preferences control.
        </p>
      </section>

      <section id="legal-bases" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          4. Legal Bases for Processing (GDPR Art. 6)
        </h2>
        <p>
          We process personal data only when substantiated by recognized legal grounds under GDPR Art. 6:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Performance of Contract (Art. 6(1)(b)):</strong> To deliver requested game content, manage account
            credentials, and facilitate customer support.
          </li>
          <li>
            <strong>Legitimate Interests (Art. 6(1)(f)):</strong> To maintain infrastructure security, mitigate cheating
            and exploits, prevent server degradation, and analyze aggregated platform stability.
          </li>
          <li>
            <strong>Consent (Art. 6(1)(a)):</strong> For optional marketing updates, newsletter notifications, and
            optional analytical measurement technologies.
          </li>
        </ul>
      </section>

      <section id="data-sharing" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          5. Data Sharing & Processors
        </h2>
        <p>
          We do not sell, rent, or trade your personal data to data brokers or advertisers. Data is shared exclusively
          with vetted technical service providers acting under binding Data Processing Agreements (&ldquo;DPAs&rdquo;):
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Edge hosting and CDN providers for resilient static content distribution.</li>
          <li>Authentication and mobile store partners (Apple Game Center, Google Play Services).</li>
          <li>Email delivery infrastructure for transactional support communications.</li>
        </ul>
      </section>

      <section id="international-transfers" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          6. International Data Transfers
        </h2>
        <p>
          Because our servers and operations span international regions, your information may be processed in
          jurisdictions outside the European Economic Area (&ldquo;EEA&rdquo;). Where transfers occur, we implement
          Standard Contractual Clauses (&ldquo;SCCs&rdquo;) approved by the European Commission to ensure adequate
          data protection safeguards.
        </p>
      </section>

      <section id="retention" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          7. Data Retention Criteria
        </h2>
        <p>
          We retain personal data only for as long as strictly required to fulfill the operational purpose for which
          it was gathered, resolve disputes, comply with financial audit requirements, or enforce our Terms of Service.
          Server access logs are rotated and deleted on a standard 30-day automated cycle.
        </p>
      </section>

      <section id="security" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          8. Technical Security Safeguards
        </h2>
        <p>
          We employ robust technical and organizational measures, including TLS 1.3 encryption in transit, strict
          firewalls, isolated staging environments, and principle-of-least-privilege access controls to protect
          your data from unauthorized interception or loss.
        </p>
      </section>

      <section id="rights" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          9. Your GDPR & CCPA Data Rights
        </h2>
        <p>
          Depending on your jurisdiction, you possess statutory rights regarding your personal information:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Right of Access:</strong> Request copies of the personal data we hold about you.</li>
          <li><strong>Right to Rectification:</strong> Request correction of inaccurate personal records.</li>
          <li><strong>Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> Request deletion of your personal data.</li>
          <li><strong>Right to Restrict or Object:</strong> Restrict processing or object to processing based on legitimate interests.</li>
          <li><strong>Right to Data Portability:</strong> Obtain your personal data in a structured, machine-readable format.</li>
        </ul>
        <p>
          To exercise any of these rights, contact our privacy team at{' '}
          <a href={`mailto:${siteConfig.legal.privacyEmail}`} className="text-[#FF4552] underline">
            {siteConfig.legal.privacyEmail}
          </a>.
        </p>
      </section>

      <section id="children" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          10. Children&apos;s Privacy (COPPA & GDPR Art. 8)
        </h2>
        <p>
          {siteConfig.brandName} does not knowingly solicit or collect personal data from children under 13 (or under
          16 in applicable EU jurisdictions) without verified parental consent. If we become aware that personal
          data has been submitted by a child without parental consent, we will promptly delete such records.
        </p>
      </section>

      <section id="contact" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          11. Privacy Contact & Updates
        </h2>
        <p>
          For privacy inquiries, data deletion requests, or questions regarding our compliance practices:
        </p>
        <div className="p-4 bg-[#141619] border border-white/10">
          <p className="text-xs font-mono text-[#F5F5F3]">
            {siteConfig.legal.publisherLegalName} &mdash; Data Protection Officer
          </p>
          <a
            href={`mailto:${siteConfig.legal.privacyEmail}`}
            className="text-xs font-mono text-[#FF4552] hover:underline mt-1 inline-block"
          >
            {siteConfig.legal.privacyEmail}
          </a>
        </div>
      </section>
    </LegalLayout>
  );
}
