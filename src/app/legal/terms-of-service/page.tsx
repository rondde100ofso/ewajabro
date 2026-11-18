import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { LegalLayout } from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Official Terms of Service for ${siteConfig.brandName}. Operated by Launch Control Studios LLC and owned by Anthony Frangiose.`,
};

export default function TermsOfServicePage() {
  const meta = siteConfig.legal.documents.termsOfService;

  const tocItems = [
    { id: 'who-we-are', label: '1. Who We Are & Agreement' },
    { id: 'who-can-play', label: '2. Who Can Play & Your Account' },
    { id: 'fair-play', label: "3. Fair Play – What Isn't Allowed" },
    { id: 'names-photos-chat', label: '4. Names, Photos & Chat' },
    { id: 'how-we-enforce', label: '5. How We Enforce These Terms' },
    { id: 'races-pinks-trading', label: '6. Races, Pinks & Trading' },
    { id: 'virtual-items', label: '7. RRC, Gems & Virtual Items' },
    { id: 'purchases-refunds', label: '8. Purchases, Refunds & Chargebacks' },
    { id: 'ownership-copyright', label: '9. Ownership, Copyright & Use' },
    { id: 'ads-and-changes', label: '10. Ads, Other Services & Changes' },
    { id: 'deleting-account', label: '11. Deleting Your Account' },
    { id: 'disclaimers-and-law', label: '12. Disclaimers, Law & Contact' },
  ];

  return (
    <LegalLayout
      title={meta.title}
      effectiveDate={meta.effectiveDate}
      lastUpdated={meta.lastUpdated}
      tocItems={tocItems}
    >
      {/* 1. Who we are and agreeing to these Terms */}
      <section id="who-we-are" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          1. Who we are and agreeing to these Terms
        </h2>
        <p>
          Rivals Reborn (the &ldquo;Game&rdquo;) is operated by Launch Control Studios LLC, a Texas limited liability company
          (&ldquo;we&rdquo;, &ldquo;us&rdquo;). The Game and everything in it are owned by Anthony Frangiose and licensed to
          Launch Control Studios LLC.
        </p>
        <p>
          These Terms of Service are a contract between you and us. You accept them when you create your account, by
          ticking the box that says you agree to these Terms and the Privacy Policy and then tapping CONFIRM. When we
          change them, we&apos;ll ask you to agree again the same way. If you don&apos;t agree, don&apos;t play.
        </p>
        <p>
          Our Privacy Policy explains what information we collect and how we use it:{' '}
          <Link href="/legal/privacy-policy" className="text-[#FF4552] underline">
            rivalsrebornofficial.com/privacy
          </Link>
        </p>
        <div className="p-3 bg-[#141619] border border-white/10 text-xs text-[#A4A7AC]">
          <strong className="text-[#F5F5F3]">Effective date:</strong> November 2, 2026
        </div>
      </section>

      {/* 2. Who can play, and your account */}
      <section id="who-can-play" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          2. Who can play, and your account
        </h2>
        <ul className="list-disc pl-6 space-y-2.5">
          <li>
            <strong className="text-[#F5F5F3]">Age:</strong> you must be at least 13. If you are under 18 (or the age of adulthood where you live), a parent or guardian must agree to these Terms for you and approve any purchases.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">One account per person.</strong> Each person may have one Rivals Reborn account.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">One account per phone, for good.</strong> A phone can only ever create one account. Deleting your account does not free the phone to make another.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Two accounts per home internet connection.</strong> A home connection can be used to create at most two accounts, ever.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">No getting around the limits:</strong> don&apos;t sign out to make another account, and don&apos;t use other phones, mobile data, VPNs, proxies or someone else&apos;s connection to make more.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">No sharing.</strong> Don&apos;t share your account or let anyone else play on it. Keep your login private &ndash; you are responsible for everything done on your account.
          </li>
          <li>
            We may refuse to create an account, for example on a VPN or proxy, or when a phone or connection has reached its limit.
          </li>
        </ul>
      </section>

      {/* 3. Fair play - what isn't allowed */}
      <section id="fair-play" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          3. Fair play &ndash; what isn&apos;t allowed
        </h2>
        <div className="p-4 bg-[#141619] border-l-2 border-[#E62935] text-sm text-[#F5F5F3] font-medium leading-relaxed">
          <strong>Zero tolerance.</strong> We have zero tolerance for cheating of any kind, including auto-launch and auto-shift tools, self-feeding, self-crushing, farming, and abusing bugs or the Game in any way. If you&apos;re caught, you&apos;ll be temporarily or permanently banned, depending on how serious it is. That&apos;s at our discretion, and getting caught again can mean a permanent ban. The rules are the same for every player, with no exceptions and no favoritism, so don&apos;t do it.
        </div>
        <p>Any of the following can get you banned:</p>
        <ul className="list-disc pl-6 space-y-2.5">
          <li>
            <strong className="text-[#F5F5F3]">Cheating:</strong> modifying the Game&apos;s files, using a hacked or modded copy, or anything else that changes race times or results.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Automation:</strong> bots, macros, auto-clickers, auto-launch and auto-shift tools, scripts, or connected keyboards or controllers used to race.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Emulators and PCs:</strong> playing on an emulator, a PC or a rooted or jailbroken phone.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Bug abuse:</strong> using a bug or exploit you find instead of reporting it to us.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Farming:</strong> having more than one account on purpose; using bots, other phones or other accounts to farm RRC, gems, cars, XP or rewards; or getting around the device, home-connection or IP limits in any way.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Moving value to remake accounts:</strong> passing cars, RRC or items to another account and then deleting or remaking yours. This counts as getting around the one-account rule.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Self-feeding and self-crushing:</strong> racing yourself, or racing friends, to pass wins, cars, cash or Turf and Showdown points between accounts; losing on purpose; or crushing cars won that way.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Lopsided trades:</strong> selling or trading cars far below their normal price to move value to another player.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Ban evasion:</strong> playing on, or making, another account while banned.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Account sharing</strong> (section 2) and <strong className="text-[#F5F5F3]">chargeback abuse</strong> (section 8).
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Attacking the Game:</strong> private servers, hacking our servers, or interfering with other players&apos; games.
          </li>
        </ul>
        <p className="text-xs text-[#A4A7AC]">
          This list is not complete. We may also act on anything else we reasonably consider cheating, farming or abuse. If you find a bug, report it to us instead of using it.
        </p>
      </section>

      {/* 4. Names, photos and chat */}
      <section id="names-photos-chat" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          4. Names, photos and chat
        </h2>
        <p className="font-medium text-[#F5F5F3]">
          We have zero tolerance for objectionable content and abusive players.
        </p>
        <ul className="list-disc pl-6 space-y-2.5">
          <li>
            <strong className="text-[#F5F5F3]">Racer names:</strong> no names that are egregiously offensive &ndash; slurs, hate, sexual content, threats, or pretending to be our staff. An offensive name gets you banned, temporarily or permanently depending on how bad it is, and the name may be changed.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Profile photos:</strong> no photos that are egregiously offensive, sexual, hateful or illegal, and no images made to break or glitch the Game. Either gets you permanently banned.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Chat:</strong> no harassment, threats, hate, spam, scams, or sharing anyone&apos;s personal information. Chat is filtered, and we may review messages that are reported or flagged.
          </li>
          <li>
            You can mute, block and report other players. We review reports and act on them.
          </li>
          <li>
            You keep the rights to what you post (names, photos, messages), but you let us store, show and moderate it to run the Game.
          </li>
        </ul>
      </section>

      {/* 5. How we enforce these Terms */}
      <section id="how-we-enforce" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          5. How we enforce these Terms
        </h2>
        <p>
          We reserve the right to suspend or ban any account, with or without warning, if we believe it has broken these Terms or harmed the Game or other players. Bans are at our discretion.
        </p>
        <ul className="list-disc pl-6 space-y-2.5">
          <li>
            <strong className="text-[#F5F5F3]">Under investigation:</strong> an account flagged for cheating is locked for 8 hours while we investigate, so it can&apos;t race or trade and ruin other players&apos; games. We may extend the lock if the investigation needs longer.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Permanent ban:</strong> any of the things in section 3 can lead to a permanent ban. A ban can also stop the phone and home connection it was used on from making new accounts.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Your items while banned:</strong> the cars, RRC and gems on a banned account stay on that account. They are not refunded, moved or paid out.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Fixing the damage:</strong> we may remove anything gained by cheating, farming or a bug, and correct balances, races or trades affected by it.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Appeals:</strong> email <a href="mailto:undergroundrivals26@gmail.com" className="text-[#FF4552] underline">undergroundrivals26@gmail.com</a> with your racer name and why you think the ban is wrong. The ban stays in place while we review it.
          </li>
        </ul>
      </section>

      {/* 6. Races, pinks and trading */}
      <section id="races-pinks-trading" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          6. Races, pinks and trading
        </h2>
        <ul className="list-disc pl-6 space-y-2.5">
          <li>
            <strong className="text-[#F5F5F3]">All races are final,</strong> including pinks races. A car won or lost in a pinks race is not returned.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">The one exception:</strong> if you have video proof that a player cheated and took your car, email it to us. If we confirm the cheating, we may give you a replacement &ndash; at our discretion, not guaranteed.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Leaving a race:</strong> quitting, closing the Game or losing connection before you cross the line counts as a loss.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Trades in the Game are final.</strong> Check what you&apos;re buying or selling before you confirm.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Selling outside the Game:</strong> we don&apos;t stop players selling cars, RRC or accounts to each other for real money, but it isn&apos;t part of the Game. It&apos;s at your own risk: we don&apos;t check, guarantee or step into these deals, and we don&apos;t help with scams or disputes. A bought account becomes the buyer&apos;s one account (section 2). Selling far below the normal price on purpose to move value is a lopsided trade (section 3).
          </li>
        </ul>
      </section>

      {/* 7. RRC, gems and virtual items */}
      <section id="virtual-items" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          7. RRC, gems and virtual items
        </h2>
        <ul className="list-disc pl-6 space-y-2.5">
          <li>
            RRC (the Game&apos;s cash), gems, cars and every other item are licensed to you for use in the Game only. You don&apos;t own them.
          </li>
          <li>
            They have no real-world value, can&apos;t be exchanged for money with us, and aren&apos;t refundable except where the law requires.
          </li>
          <li>
            We may change prices, sales and bonuses at any time, including the RRC and gem amounts in packs.
          </li>
          <li>
            We may correct balances or items that are wrong because of a bug, an error or abuse.
          </li>
          <li>
            If the Game closes, RRC, gems and items end with it, without refund except where the law requires.
          </li>
        </ul>
      </section>

      {/* 8. Purchases, refunds and chargebacks */}
      <section id="purchases-refunds" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          8. Purchases, refunds and chargebacks
        </h2>
        <ul className="list-disc pl-6 space-y-2.5">
          <li>
            <strong className="text-[#F5F5F3]">Buying:</strong> all purchases go through Google Play or the Apple App Store and follow their terms. They handle payment and billing; we never see your card.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Refunds:</strong> Google and Apple decide refunds. If you change your mind about a purchase you haven&apos;t used at all, ask within 14 days through Google or Apple, or email us and we&apos;ll help.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Refunds and chargebacks take things back.</strong> When a purchase is refunded or charged back, the RRC and gems it gave you are removed, and so are cars bought with them.
          </li>
        </ul>

        <div className="p-4 bg-[#141619] border border-white/10 space-y-2 mt-2">
          <h4 className="font-display font-bold text-sm uppercase text-[#E62935]">
            Spending a purchase and then getting your money back is against these Terms:
          </h4>
          <ol className="list-decimal pl-6 space-y-1.5 text-xs text-[#A4A7AC]">
            <li>Any chargeback, or refund of a purchase you already used: your account is banned for 3 months, and you can&apos;t make another account during that time.</li>
            <li>A chargeback after your account was banned: the account is deleted, and you are permanently banned from making accounts.</li>
            <li>Moving cars or RRC to another account and then charging back: every account involved is permanently banned.</li>
          </ol>
        </div>

        <p className="text-xs text-[#A4A7AC]">
          Mandatory consumer rights where you live are not affected.
        </p>
      </section>

      {/* 9. Ownership, copyright and commercial use */}
      <section id="ownership-copyright" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          9. Ownership, copyright and commercial use
        </h2>
        <p>
          The Game and everything in it &ndash; its code, servers, art, 3D models, cars as modelled, tracks, logos, music and sounds &ndash; are owned by Anthony Frangiose, licensed to Launch Control Studios LLC, and protected by copyright and other laws. We give you a personal, limited, non-transferable licence to play the Game for fun, under these Terms.
        </p>
        <p>You may not:</p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-[#A4A7AC]">
          <li>copy, sell, share, modify or reverse-engineer the Game or its code;</li>
          <li>use any of its code, assets, models, art, music or sounds in another product, or for any commercial purpose;</li>
          <li>extract or data-mine the Game&apos;s files;</li>
          <li>run, join or make a private server, server emulator or copy of the Game. This is strictly prohibited, and we will take legal action.</li>
        </ul>
        <p>
          <strong className="text-[#F5F5F3]">Videos and streams</strong> of you playing the Game are allowed, including monetised ones, as long as they don&apos;t show or promote cheats, leaked content or private servers, and don&apos;t suggest we endorse you.
        </p>
        <p className="text-xs text-[#A4A7AC]">
          Real car makes and models in the Game belong to their owners. Their appearance doesn&apos;t mean those companies endorse the Game.
        </p>
      </section>

      {/* 10. Ads, other services and changes to the Game */}
      <section id="ads-and-changes" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          10. Ads, other services and changes to the Game
        </h2>
        <ul className="list-disc pl-6 space-y-2.5">
          <li>
            <strong className="text-[#F5F5F3]">Rewarded ads</strong> are optional: you choose to watch one for a reward. Outside the EU, UK and Switzerland they may be personalized; the Privacy Policy explains how to turn that off. A reward is only given once the ad is finished. Rewarded ads are coming in a future update. Until then the Game shows no ads and doesn&apos;t use your advertising ID.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Other services:</strong> the Game uses services from other companies (such as Google, Apple, Firebase, AdMob and Discord), which have their own terms.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Changes:</strong> we keep working on the Game. We may change, balance or remove cars, parts, prices, events, rewards and features at any time, and some updates may be required to keep playing.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Availability:</strong> the Game may be unavailable during maintenance or problems, and we may close it. We don&apos;t promise it will always be available or free of bugs.
          </li>
        </ul>
      </section>

      {/* 11. Deleting your account */}
      <section id="deleting-account" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          11. Deleting your account
        </h2>
        <p>
          You can delete your account in the Game (<strong className="text-[#F5F5F3]">Settings &gt; DELETE ACCOUNT</strong>) or by emailing{' '}
          <a href="mailto:undergroundrivals26@gmail.com" className="text-[#FF4552] underline">
            undergroundrivals26@gmail.com
          </a>{' '}
          (<Link href="/delete-account" className="text-[#FF4552] underline">rivalsrebornofficial.com/delete-account</Link> explains how). A banned account can only be deleted by email.
        </p>
        <p>
          Deletion is permanent: your cars, RRC, gems and progress are lost and can&apos;t be restored or refunded. Your phone stays counted as having made an account, so it can&apos;t be used to create a new one. The Privacy Policy explains what we keep after deletion.
        </p>
      </section>

      {/* 12. Disclaimers, liability, law and contact */}
      <section id="disclaimers-and-law" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          12. Disclaimers, liability, law and contact
        </h2>
        <div className="space-y-3">
          <p>
            <strong className="text-[#F5F5F3]">The Game is provided &ldquo;as is&rdquo;.</strong> To the extent the law allows, we don&apos;t promise it will be error-free, uninterrupted or meet your expectations.
          </p>
          <p>
            <strong className="text-[#F5F5F3]">Limit of liability.</strong> To the extent the law allows, we are not liable for indirect or lost-profit damages, or for losses caused by other players, outside trades, or your own account security. Our total liability to you is limited to what you paid us in the 12 months before the claim. Nothing here limits rights the law doesn&apos;t let us limit.
          </p>
          <p>
            <strong className="text-[#F5F5F3]">Governing law.</strong> These Terms are governed by the laws of the State of Texas, United States. Disputes go to the state or federal courts in Texas, unless the consumer laws where you live give you the right to bring them at home.
          </p>
          <p>
            <strong className="text-[#F5F5F3]">Apple.</strong> If you play on an Apple device, these Terms are between you and us, not Apple. Apple isn&apos;t responsible for the Game or its support, and Apple and its subsidiaries may enforce these Terms as third-party beneficiaries.
          </p>
          <p>
            <strong className="text-[#F5F5F3]">Changes to these Terms.</strong> When we change these Terms, we&apos;ll update the effective date and ask you to agree again in the Game before you keep playing.
          </p>
        </div>

        <div className="p-4 bg-[#141619] border border-white/10 mt-4 text-xs text-[#A4A7AC] space-y-1">
          <div className="font-display font-bold text-sm uppercase text-[#F5F5F3] mb-1">
            Contact
          </div>
          <div>Launch Control Studios LLC, 1304 Summer Oak Drive, Austin, TX 78704, United States</div>
          <div>
            Email:{' '}
            <a href="mailto:undergroundrivals26@gmail.com" className="text-[#FF4552] underline">
              undergroundrivals26@gmail.com
            </a>
          </div>
          <div>
            Website:{' '}
            <a href="https://rivalsrebornofficial.com" className="text-[#FF4552] underline">
              rivalsrebornofficial.com
            </a>
          </div>
        </div>
      </section>
    </LegalLayout>
  );
}
