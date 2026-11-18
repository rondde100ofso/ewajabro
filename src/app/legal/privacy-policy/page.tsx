import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { LegalLayout } from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Official Privacy Policy for ${siteConfig.brandName}, operated by Launch Control Studios LLC. Explains what information we collect, why, retention periods, and player deletion rights.`,
};

export default function PrivacyPolicyPage() {
  const meta = siteConfig.legal.documents.privacyPolicy;

  const tocItems = [
    { id: 'who-we-are', label: '1. Who We Are' },
    { id: 'information-we-collect', label: '2. Information We Collect' },
    { id: 'how-we-use-information', label: '3. How We Use Information' },
    { id: 'how-information-is-shared', label: '4. How Information Is Shared' },
    { id: 'purchases', label: '5. Purchases' },
    { id: 'how-long-we-keep-information', label: '6. How Long We Keep Information' },
    { id: 'deleting-your-account', label: '7. Deleting Your Account & Data' },
    { id: 'your-choices-and-rights', label: '8. Your Choices & Rights' },
    { id: 'children', label: '9. Children' },
    { id: 'security-and-storage', label: '10. Security, Storage & Changes' },
  ];

  return (
    <LegalLayout
      title={meta.title}
      effectiveDate={meta.effectiveDate}
      lastUpdated={meta.lastUpdated}
      tocItems={tocItems}
    >
      {/* 1. Who we are */}
      <section id="who-we-are" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          1. Who we are
        </h2>
        <p>
          Rivals Reborn (the &ldquo;Game&rdquo;) is operated by Launch Control Studios LLC, a Texas limited liability company
          (&ldquo;we&rdquo;, &ldquo;us&rdquo;). This Privacy Policy explains what information the Game collects, why, who
          receives it, how long we keep it and how you can delete it. It covers the Game on Android and iOS and our support email.
        </p>

        <div className="p-4 bg-[#141619] border border-white/10 space-y-1.5 text-xs text-[#A4A7AC]">
          <div><strong className="text-[#F5F5F3]">Company:</strong> Launch Control Studios LLC, 1304 Summer Oak Drive, Austin, TX 78704, United States</div>
          <div>
            <strong className="text-[#F5F5F3]">Privacy and support contact:</strong>{' '}
            <a href="mailto:undergroundrivals26@gmail.com" className="text-[#FF4552] underline">
              undergroundrivals26@gmail.com
            </a>
          </div>
          <div>
            <strong className="text-[#F5F5F3]">Website:</strong>{' '}
            <a href="https://rivalsrebornofficial.com" className="text-[#FF4552] underline">
              rivalsrebornofficial.com
            </a>
          </div>
          <div><strong className="text-[#F5F5F3]">Effective date:</strong> November 2, 2026</div>
        </div>

        <p className="font-medium text-[#F5F5F3]">
          We do not sell your personal information.
        </p>
        <p className="text-xs text-[#A4A7AC] italic">
          Rewarded ads are coming in a future update. Until then the Game shows no ads and doesn&apos;t use your advertising ID.
        </p>
      </section>

      {/* 2. Information we collect */}
      <section id="information-we-collect" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          2. Information we collect
        </h2>
        <p>
          We collect what you give us, what the Game records while you play, and a small amount of technical information from your device.
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className="text-[#F5F5F3]">Account</strong> (from you, Google or Apple): your email address, or your Google or Apple account ID and the email it shares (Apple lets you hide yours); your player ID; your account status, including bans, reviews and holds; which version of the Terms of Service you agreed to and when. Your password is handled by Firebase Authentication and never seen by us.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Profile</strong> (from you and the Game): racer name; profile photo if you upload one; level, XP and stats; crew membership; friends and friend requests; online status and last-online time.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Game data</strong> (from the Game): cars, upgrades, tunes and cosmetics; RRC and gem balances; race results, times and wagers, including pinks; trades, offers, listings and auctions with other players; campaign, turf and showdown progress and points; rewards claimed; your block and mute lists; game messages in your inbox.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Gameplay input</strong> (from the Game): for each race, your launch, shift and boost timing, reaction time, how you revved the engine before the green light, and where on the screen you tapped (with the screen size); and your taps when the Game asks &ldquo;Are you still there?&rdquo;.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Chat and reports</strong> (from you and other players): lobby, room, friend and crew chat messages, with your racer name and player ID; reports you make or that are made about you, with a copy of the reported name or photo.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Device and technical</strong> (from your device, Google and Apple): a device identifier from your phone&apos;s operating system; platform and game build number; whether a keyboard or game controller is connected; which device your session is on; and app-integrity results &ndash; from Google Play Integrity, whether the phone is genuine and certified, whether the Game is the real copy from Google Play, and whether apps that can capture the screen or control taps are running; from Apple DeviceCheck, whether the iPhone is genuine, plus two marks Apple stores for that iPhone (whether it is banned, and whether an account has been made on it).
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Network</strong> (from your device and proxycheck.io): your IP address each time the Game connects. We store only a scrambled (hashed) form of it, the days each phone and account was seen on that connection, and the connection type our provider reports (such as home, mobile carrier or hosting, and whether it is a VPN or proxy).
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Ads</strong> (from your device, through Google AdMob): when you choose to watch a rewarded ad, your device&apos;s advertising ID (on iPhone, only if you allow tracking), device information, your IP address and how you interact with the ad. Outside the EU, UK and Switzerland, Google may use these to personalize ads.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Purchases</strong> (from Google Play and Apple): what you bought, price, time, the store&apos;s order or transaction ID, and refund or chargeback status. We never receive your card details.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Support</strong> (from you): emails you send us and anything you attach.
          </li>
        </ul>

        <div className="p-4 bg-[#141619] border border-white/5 space-y-2 mt-4 text-xs">
          <p>
            <strong className="text-[#F5F5F3]">Profile photos.</strong> The Game only opens your photo library when you choose to upload a photo, with your permission. Our server rebuilds every photo from its pixels, which removes hidden data such as the location it was taken, and other players can see the result.
          </p>
          <p className="text-[#F5F5F3] font-semibold">
            What we don&apos;t collect: <span className="font-normal text-[#A4A7AC]">precise location, contacts, or microphone or camera recordings.</span>
          </p>
        </div>
      </section>

      {/* 3. How we use information */}
      <section id="how-we-use-information" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          3. How we use information
        </h2>
        <p>
          We use information to run the Game, keep it fair and support you. We don&apos;t build advertising profiles ourselves; Google AdMob may personalize ads (section 4).
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className="text-[#F5F5F3]">Run your account and the Game:</strong> sign you in, save your progress, cars and balances, keep you signed in on one device at a time, and run lobbies, races, chat, friends, crews, trading, leaderboards and events.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Show you to other players:</strong> your racer name, photo, level, crew, cars, online status and race results appear in lobbies, friends lists, leaderboards and garages, and players in your lobby can watch replays of your recent races.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Deliver purchases:</strong> check with Google Play or Apple that a purchase is real before adding gems or items. If a purchase is refunded or charged back, we take back what is left of it.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Rewarded ads:</strong> show an ad when you choose to watch one, and give you the reward once Google confirms you finished it.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Keep the Game fair and secure:</strong>
            <ul className="list-circle pl-6 mt-2 space-y-1.5 text-xs text-[#A4A7AC]">
              <li>allow one account per phone, for good, and two accounts per home internet connection;</li>
              <li>refuse new accounts made through a VPN or proxy, and block VPNs and proxies in Turf Wars;</li>
              <li>confirm the Game is the real copy on a genuine phone &ndash; not modified, rooted, or running on an emulator or PC;</li>
              <li>check race times, engine revving, tap positions and inputs for auto-shifters, auto-clickers, bots and macros, and block connected keyboards and game controllers;</li>
              <li>ask &ldquo;Are you still there?&rdquo; after long racing sessions, to stop bots;</li>
              <li>link accounts that share a phone or home connection, and track cash and cars moving between players to find accounts feeding another account;</li>
              <li>after a refund or chargeback, find where the purchase&apos;s value went.</li>
            </ul>
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Review and enforce:</strong> our systems flag suspicious activity and alert our staff. A flagged account may be put under investigation and locked for 8 hours or more; a refund or chargeback does this automatically. A person reviews an account before a full ban, and a full ban can also stop that phone and home connection from making new accounts. See the Terms of Service for the rules.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Moderate:</strong> filter offensive words in chat and names, and review reported names, photos and messages.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Support:</strong> answer your emails, investigate problems and process deletion and privacy requests.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Legal:</strong> meet legal obligations, keep a record of the Terms you agreed to, and protect our rights and players&apos; safety.
          </li>
        </ul>

        <div className="p-4 bg-[#141619] border border-white/5 text-xs text-[#A4A7AC] mt-3">
          <strong className="text-[#F5F5F3]">EU and UK players:</strong> we rely on performing our contract with you (running the Game you signed up for), our legitimate interest in keeping the Game fair and secure, legal obligations, and your consent where we ask for it.
        </div>
      </section>

      {/* 4. How information is shared */}
      <section id="how-information-is-shared" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          4. How information is shared
        </h2>
        <p>
          We share information only with the companies that run parts of the Game for us, with other players as part of play, and when the law requires it. We don&apos;t sell it. Each provider below may use the data only to provide its service to us and must protect it at least as well as this policy does; Google AdMob also follows Google&apos;s own privacy policy.
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className="text-[#F5F5F3]">Google Firebase</strong> (Authentication, Firestore, Realtime Database, Cloud Functions, Cloud Storage, App Check) receives all Game data described in section 2, because it hosts our servers, accounts, database, chat and photos.{' '}
            <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-[#FF4552] underline">
              Privacy policy
            </a>
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Google</strong> (Google Sign-In, Google Play, Play Integrity) receives sign-in details, purchase and refund records, and app-integrity requests and results, for Google sign-in, Android purchases and checking the phone and the Game are genuine.{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#FF4552] underline">
              Privacy policy
            </a>
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Apple</strong> (Sign in with Apple, App Store, DeviceCheck) receives sign-in details, purchase and refund records, and device-check requests, for Apple sign-in, iOS purchases, checking the iPhone is genuine, and the two marks Apple stores for that iPhone.{' '}
            <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#FF4552] underline">
              Privacy policy
            </a>
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Google AdMob</strong> receives your advertising ID (on iPhone, only if you allow tracking), device information, your IP address and ad interactions when an ad is shown, to show rewarded ads (personalized outside the EU, UK and Switzerland), limit repeats, prevent fraud and confirm you finished them.{' '}
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-[#FF4552] underline">
              How Google uses this data
            </a>
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Discord</strong> receives your player ID, racer name and anti-cheat flags (what was detected and when), as alerts to our private staff channel so flagged accounts are reviewed quickly.{' '}
            <a href="https://discord.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#FF4552] underline">
              Privacy policy
            </a>
          </li>
          <li>
            <strong className="text-[#F5F5F3]">proxycheck.io</strong> receives your IP address when the Game checks your connection, to learn its type and whether it is a VPN or proxy.
          </li>
          <li>
            <strong className="text-[#F5F5F3]">Unity</strong> receives device and performance data for game engine analytics.{' '}
            <a href="https://unity.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#FF4552] underline">
              Privacy policy
            </a>
          </li>
        </ul>

        <div className="space-y-3 pt-2 text-sm text-[#A4A7AC]">
          <p>
            <strong className="text-[#F5F5F3]">Other players</strong> see your racer name, photo, level, crew, cars, online status, race results and chat messages.
          </p>
          <p>
            <strong className="text-[#F5F5F3]">Legal and safety.</strong> We may share information if the law requires it, to answer valid legal requests, to stop fraud or cheating, or to protect players&apos; safety.
          </p>
          <p>
            <strong className="text-[#F5F5F3]">If the business changes hands,</strong> player data may move to the new owner, who must keep following this policy.
          </p>
          <p>
            <strong className="text-[#F5F5F3]">Rewarded ads.</strong> Ads only appear when you choose to watch one for a reward. Outside the EU, UK and Switzerland, Google AdMob may personalize ads using your device&apos;s advertising ID. On iPhone, AdMob uses the advertising ID only if you tap Allow on Apple&apos;s tracking prompt. In the EU, UK and Switzerland, only Google&apos;s &ldquo;limited ads&rdquo; are shown, which aren&apos;t personalized and don&apos;t use device identifiers or store anything on your phone. You can reset your advertising ID or turn off ad personalization in your phone&apos;s settings at any time. Our server receives only a confirmation that you finished the ad.
          </p>
        </div>
      </section>

      {/* 5. Purchases */}
      <section id="purchases" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          5. Purchases
        </h2>
        <p>
          All real-money purchases go through Google Play or the Apple App Store; we never see or store your payment card. When you buy something, our server checks the purchase with Google or Apple before adding it to your account, and records the item, price, time, order or transaction ID and the player ID it belongs to.
        </p>
        <p>
          If a purchase is refunded, Google or Apple tells us, and we remove what it paid for from your account. Billing questions about a charge go to Google or Apple; questions about what arrived in the Game come to us.
        </p>
      </section>

      {/* 6. How long we keep information */}
      <section id="how-long-we-keep-information" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          6. How long we keep information
        </h2>
        <p>
          We keep your account data while your account exists and delete it when you delete your account (section 7). Some records are deleted sooner, and a few are kept for a limited time after deletion.
        </p>

        <ul className="list-disc pl-6 space-y-2.5">
          <li><strong className="text-[#F5F5F3]">Account, profile and game data:</strong> until you delete your account.</li>
          <li><strong className="text-[#F5F5F3]">Chat:</strong> only the newest messages are kept &ndash; 50 in each lobby or room chat, 50 in each friend conversation and 100 in each crew chat. Older messages are deleted automatically.</li>
          <li><strong className="text-[#F5F5F3]">Race wager records:</strong> 30 days after the race.</li>
          <li><strong className="text-[#F5F5F3]">Race verdicts, boost records and campaign race records:</strong> 7 days.</li>
          <li><strong className="text-[#F5F5F3]">App-integrity check tokens:</strong> 3 days.</li>
          <li><strong className="text-[#F5F5F3]">VPN check results:</strong> 1 hour (VPN found) to 24 hours (none found), stored only with the scrambled form of the IP address.</li>
          <li><strong className="text-[#F5F5F3]">Records of cash and cars passed to other players:</strong> 180 days, including after account deletion, so refunds and chargebacks can be traced.</li>
          <li><strong className="text-[#F5F5F3]">Phone and home-connection records</strong> (device identifier, scrambled connection, days seen, number of accounts made, and Apple&apos;s two marks on an iPhone): for as long as Rivals Reborn runs, including after account deletion &ndash; this is what keeps the one-account-per-phone and two-per-home rules.</li>
          <li><strong className="text-[#F5F5F3]">Reports about players:</strong> 1 year after the report is closed.</li>
          <li><strong className="text-[#F5F5F3]">Anti-cheat flags (including staff alerts) and our admin action log:</strong> 5 years.</li>
          <li><strong className="text-[#F5F5F3]">Support emails:</strong> 2 years.</li>
          <li><strong className="text-[#F5F5F3]">Purchase records:</strong> 7 years, including after account deletion, for tax, refund and fraud checks.</li>
          <li><strong className="text-[#F5F5F3]">Ban records:</strong> 5 years after a banned account is deleted &ndash; the player ID, device identifier, scrambled connection, ban reason and date, so a banned player can&apos;t simply make a new account.</li>
        </ul>
      </section>

      {/* 7. Deleting your account and data */}
      <section id="deleting-your-account" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          7. Deleting your account and data
        </h2>
        <p>
          You can delete your account at any time, in the Game or by email.
        </p>

        <div className="space-y-3">
          <div className="p-3.5 bg-[#141619] border border-white/5">
            <h4 className="font-display font-bold text-sm uppercase text-[#F5F5F3]">
              1. In the Game
            </h4>
            <p className="mt-1 text-xs text-[#A4A7AC]">
              Navigate to <strong className="text-[#F5F5F3]">Settings &gt; DELETE ACCOUNT</strong>. Type your racer name, sign in again to prove it&apos;s you, and your account is deleted immediately. You can&apos;t delete in the middle of a race or while a car is staked in a pinks race.
            </p>
          </div>

          <div className="p-3.5 bg-[#141619] border border-white/5">
            <h4 className="font-display font-bold text-sm uppercase text-[#F5F5F3]">
              2. By email
            </h4>
            <p className="mt-1 text-xs text-[#A4A7AC]">
              Email <a href="mailto:undergroundrivals26@gmail.com" className="text-[#FF4552] underline">undergroundrivals26@gmail.com</a> with your racer name and the email or sign-in method you use (<Link href="/delete-account" className="text-[#FF4552] underline">rivalsrebornofficial.com/delete-account</Link> explains how). We may ask you to prove the account is yours, then delete it within 30 days. A banned account can only be deleted this way.
            </p>
          </div>
        </div>

        <div className="space-y-3 text-sm text-[#A4A7AC] pt-2">
          <p>
            <strong className="text-[#F5F5F3]">What is deleted:</strong> your login, profile and photo, cars, upgrades, tunes, RRC and gem balances, progress, friends (on both sides), crew membership, chats and messages, and your mail. Open trades, offers, listings and auction bids are cancelled first, and anything held in them goes back to its owner. If you signed in with Apple, we also remove the Game&apos;s access to your Apple ID.
          </p>
          <p>
            <strong className="text-[#F5F5F3]">What is kept,</strong> for the periods in section 6: purchase records; records of cash and cars you passed to other players; reports, anti-cheat flags and our admin action log; turf points already counted for your crew; and your phone and home-connection records. Your phone stays counted as having made an account, so it can&apos;t be used to create a new one.
          </p>
          <p className="text-[#E62935] font-semibold text-xs">
            Deletion is permanent. Unspent RRC, gems and items are lost and can&apos;t be restored or refunded. Uninstalling the Game does not delete your account.
          </p>
        </div>
      </section>

      {/* 8. Your choices and rights */}
      <section id="your-choices-and-rights" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          8. Your choices and rights
        </h2>
        <p>
          <strong className="text-[#F5F5F3]">In the Game</strong> you can change your racer name, remove your profile photo, or never upload one. Your phone&apos;s settings let you refuse or remove the Game&apos;s access to your photo library.
        </p>
        <p>
          <strong className="text-[#F5F5F3]">By email</strong> to{' '}
          <a href="mailto:undergroundrivals26@gmail.com" className="text-[#FF4552] underline">
            undergroundrivals26@gmail.com
          </a>{' '}
          you can ask for a copy of your data, ask us to correct or delete it, or ask any question about this policy. We may confirm the account is yours first, and we answer within the time the law requires (usually 30-45 days). If we refuse a request, you can appeal by replying to our answer.
        </p>
        <p>
          <strong className="text-[#F5F5F3]">US state privacy laws</strong> (such as California&apos;s) give residents the right to know what we collect, get a copy, correct it and delete it. We don&apos;t sell personal information. Personalized rewarded ads from Google AdMob may count as &ldquo;sharing&rdquo; for targeted advertising under some of these laws. You can opt out by turning off ad personalization (Android) or not allowing tracking (iPhone) in your phone&apos;s settings, or by emailing us. We won&apos;t treat you differently for using these rights.
        </p>
        <p>
          <strong className="text-[#F5F5F3]">In the EU, UK and similar countries</strong> you can also restrict or object to how we use your data, take a copy to another service, withdraw consent you gave, and complain to your local data protection authority.
        </p>
      </section>

      {/* 9. Children */}
      <section id="children" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          9. Children
        </h2>
        <p>
          The Game is not made for children. You must be at least 13 years old to play. We don&apos;t knowingly collect information from children under 13. If we learn that a child under 13 has an account, we delete it.
        </p>
        <p>
          Parents who think their child has an account can email{' '}
          <a href="mailto:undergroundrivals26@gmail.com" className="text-[#FF4552] underline">
            undergroundrivals26@gmail.com
          </a>.
        </p>
      </section>

      {/* 10. Security, where data is stored, and changes */}
      <section id="security-and-storage" className="space-y-4">
        <h2 className="font-display font-bold text-2xl uppercase tracking-wider text-[#F5F5F3] pb-2 border-b border-white/10">
          10. Security, where data is stored, and changes
        </h2>
        <div className="space-y-3">
          <p>
            <strong className="text-[#F5F5F3]">Security.</strong> Data travels encrypted between the Game and our servers, and Google encrypts it where it is stored. Players can only read their own private data; changes to accounts, balances and cars are made only by our servers, and only we can access the admin tools. No system is perfectly secure; if a breach affects your data, we will tell you and the authorities where the law requires.
          </p>
          <p>
            <strong className="text-[#F5F5F3]">Where data is stored.</strong> Our servers run on Google Cloud in the United States (Iowa). If you play from another country, your data is transferred there, with the safeguards the law requires (such as the EU&apos;s standard contractual clauses).
          </p>
          <p>
            <strong className="text-[#F5F5F3]">Changes.</strong> If we change this policy, we&apos;ll update the effective date at the top and, for important changes, tell you in the Game before they apply.
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
