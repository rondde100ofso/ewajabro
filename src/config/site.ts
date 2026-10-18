import { SiteConfig } from '@/types/site';

export const siteConfig: SiteConfig = {
  brandName: 'Rivals Reborn',
  tagline: 'The Streets Are Calling',
  shortDescription:
    'Build your garage. Tune your ride. Challenge your rivals. Make every race count in the next generation of mobile drag racing.',
  longDescription:
    'Rivals Reborn is an underground mobile drag-racing game engineered for iOS and Android. Inspired by the golden era of competitive quarter-mile racing, experience real-time rivalries, deep dyno tuning, visual personalization, and high-stakes pink slip matchups.',
  domain: 'rivalsrebornofficial.com',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://rivalsrebornofficial.com',
  releaseStatus: 'closed-alpha',
  releaseDateText: 'Closed Invite-Only Alpha',

  announcement: {
    enabled: true,
    badge: 'Under Development',
    text: 'Currently in closed invite-only alpha testing. Pre-registration and Closed Beta invitations opening soon.',
    linkText: 'Join Discord',
    linkHref: '#community',
  },

  assets: {
    logo: '/images/rivalsrebornlogo.png',
    logoWidth: 1535,
    logoHeight: 1024,
    // Official gameplay / intro reel asset
    heroVideo: '/video/introvideo.mp4',
    heroPoster: '/images/hero-poster.jpg',
    ogImage: '/images/og-image.jpg',
    favicon: '/images/rivalsrebornlogo.png',
  },

  stores: {
    ios: {
      platform: 'ios',
      name: 'Apple App Store',
      storeName: 'App Store',
      url: null, // Store submission in progress: set to official store URL once approved
      status: 'closed-alpha',
      badgeLabel: 'Invite-Only Alpha',
      minVersion: 'iOS 16.0 or later',
    },
    android: {
      platform: 'android',
      name: 'Google Play Store',
      storeName: 'Google Play',
      url: null, // Play Console review in progress: set to official store URL once approved
      status: 'closed-alpha',
      badgeLabel: 'Invite-Only Alpha',
      minVersion: 'Android 11.0 or later',
    },
  },

  socials: {
    discord: {
      name: 'Discord',
      url: 'https://discord.gg/rivalsreborn', // Official community server
      icon: 'Discord',
      label: 'Join our official Discord server',
      isOfficial: true,
    },
    youtube: {
      name: 'YouTube',
      url: 'https://youtube.com/@rivalsreborn',
      icon: 'Youtube',
      label: 'Subscribe on YouTube for developer logs and gameplay trailers',
      isOfficial: true,
    },
    tiktok: {
      name: 'TikTok',
      url: 'https://tiktok.com/@rivalsreborn',
      icon: 'Tiktok',
      label: 'Watch short gameplay clips and tuning showcases on TikTok',
      isOfficial: true,
    },
    instagram: {
      name: 'Instagram',
      url: 'https://instagram.com/rivalsreborngame',
      icon: 'Instagram',
      label: 'Follow Rivals Reborn on Instagram',
      isOfficial: true,
    },
    x: {
      name: 'X (Twitter)',
      url: 'https://x.com/rivalsreborn',
      icon: 'Twitter',
      label: 'Follow @rivalsreborn on X for instant news and announcements',
      isOfficial: true,
    },
  },

  support: {
    email: 'support@rivalsrebornofficial.com',
    discordSupportChannel: 'https://discord.gg/rivalsreborn',
  },

  legal: {
    publisherLegalName: 'Rivals Reborn Interactive Studio',
    publisherEntity: 'Rivals Reborn Interactive Studio Inc. (In Formation)',
    contactEmail: 'legal@rivalsrebornofficial.com',
    privacyEmail: 'privacy@rivalsrebornofficial.com',
    registeredAddress: 'To be announced prior to public storefront launch',
    jurisdiction: 'United States & Applicable International Regulations (GDPR/CCPA)',
    documents: {
      termsOfService: {
        title: 'Terms of Service',
        effectiveDate: 'October 17, 2026',
        lastUpdated: 'October 17, 2026',
        requiresReview: true,
      },
      termsOfUse: {
        title: 'Terms of Website Use',
        effectiveDate: 'October 17, 2026',
        lastUpdated: 'October 17, 2026',
        requiresReview: true,
      },
      privacyPolicy: {
        title: 'Privacy Policy',
        effectiveDate: 'October 17, 2026',
        lastUpdated: 'October 17, 2026',
        requiresReview: true,
      },
    },
  },

  features: [
    {
      id: 'garage',
      tag: 'COLLECTION & CLASSICS',
      title: 'BUILD YOUR ULTIMATE GARAGE',
      subtitle: 'From grassroots project cars to elite track-bred monsters.',
      description:
        'Acquire, restore, and curate a distinguished collection of racing machines. Every vehicle in your stable carries distinct power-to-weight ratios, drivetrain dynamics, and upgrade paths designed for raw quarter-mile dominance.',
      imageSrc: '/images/feature-garage.jpg',
      imageAlt: 'High-performance tuning garage featuring customized drag vehicles',
      stats: [
        { label: 'Drivetrains', value: 'RWD / AWD / FWD' },
        { label: 'Classes', value: 'D to Unlimited' },
      ],
    },
    {
      id: 'tuning',
      tag: 'DYNO-PROVEN ENGINEERING',
      title: 'SURGICAL PERFORMANCE TUNING',
      subtitle: 'Microsecond shifts and millisecond reaction times won on the dyno.',
      description:
        'Dial in individual gear ratios, tire pressure, suspension stiffness, and forced-induction boost levels. An accurate physics engine rewards those who understand the balance between launch traction and top-end trap speed.',
      imageSrc: '/images/feature-tuning.jpg',
      imageAlt: 'Precision engine bay dyno calibration and forced induction setup',
      stats: [
        { label: 'Gearbox', value: 'Individual Ratio Adjust' },
        { label: 'Forced Induction', value: 'Turbo & Supercharger' },
      ],
    },
    {
      id: 'customization',
      tag: 'VISUAL IDENTITY',
      title: 'AESTHETICS WITHOUT COMPROMISE',
      subtitle: 'Make your vehicle unmistakably yours before the lights drop.',
      description:
        'Express your street identity with custom aero kits, wheel offsets, beadlock rims, parachute setups, and deep multi-stage pearlescent and satin finishes. Your rival will see your taillights—make sure they remember them.',
      imageSrc: '/images/feature-customization.jpg',
      imageAlt: 'Customized drag car visual customization and aerodynamic styling',
      stats: [
        { label: 'Finishes', value: 'Candy, Satin & Carbon' },
        { label: 'Aero', value: 'Full Drag Kits & Spoilers' },
      ],
    },
    {
      id: 'drag-racing',
      tag: 'COMPETITIVE RACING',
      title: 'PURE REACTION DRAG RACING',
      subtitle: 'No steering assists. Just raw timing, warm-up burnouts, and perfect launches.',
      description:
        'Warm your tires in the staging box to hit optimal operating temperature. Watch the Christmas tree lights drop, drop the clutch at peak torque RPM, and execute lightning-fast manual paddle shifts without kissing the rev limiter.',
      imageSrc: '/images/feature-racing.jpg',
      imageAlt: 'Two drag racing cars side by side at the Christmas tree staging line at night',
      stats: [
        { label: 'Distance', value: '1/4 & 1/8 Mile' },
        { label: 'Timing', value: 'Millisecond Precision' },
      ],
    },
    {
      id: 'rivalries',
      tag: 'HIGH STAKES',
      title: 'CREWS, RIVALRIES & HIGH STAKES',
      subtitle: 'Put your reputation—and your title—on the asphalt.',
      description:
        'Form racing crews with trusted drivers, stake claims over city territories, and participate in high-stakes bracket shootouts where true risk builds legendary respect in the community.',
      imageSrc: '/images/feature-rivals.jpg',
      imageAlt: 'High stakes drag racing showdown in an industrial district',
      stats: [
        { label: 'Competition', value: 'Crew Turf Battles' },
        { label: 'Stakes', value: 'Ranked Bracket Ladders' },
      ],
    },
  ],

  gallery: [
    {
      id: 'gallery-1',
      title: 'Midnight Staging Line',
      category: 'Drag Racing',
      orientation: 'landscape',
      src: '/images/gallery-1.jpg',
      alt: 'Two high-performance drag cars staged at the Christmas tree lights under sodium floodlights',
      caption: 'Staging under the industrial floodlights before the green light drops.',
      isRealGameplay: false,
    },
    {
      id: 'gallery-2',
      title: 'The Underground Lift',
      category: 'Garage',
      orientation: 'landscape',
      src: '/images/gallery-2.jpg',
      alt: 'Custom widebody drag machine on hydraulic lift in concrete garage workshop',
      caption: 'Detailed garage view showcasing widebody aerodynamics and race slicks.',
      isRealGameplay: false,
    },
    {
      id: 'gallery-3',
      title: 'Cockpit & Telemetry',
      category: 'Tuning',
      orientation: 'portrait',
      src: '/images/gallery-3.jpg',
      alt: 'Digital drag racing instrument cluster showing boost pressure and shift light at redline',
      caption: 'Digital tachometer with configurable shift indicators and live telemetry readouts.',
      isRealGameplay: false,
    },
    {
      id: 'gallery-4',
      title: 'Tire Burnout Box',
      category: 'Drag Racing',
      orientation: 'portrait',
      src: '/images/gallery-4.jpg',
      alt: 'Rear drag slicks spinning in the burnout box creating dense tire smoke',
      caption: 'Warming the compound in the water box to lock in maximum launch traction.',
      isRealGameplay: false,
    },
    {
      id: 'gallery-5',
      title: 'Dyno Tuning Chamber',
      category: 'Tuning',
      orientation: 'landscape',
      src: '/images/gallery-5.jpg',
      alt: 'Engine bay dyno pull with twin turbochargers and glowing exhaust manifolds',
      caption: 'Fine-tuning fuel maps and boost curves for peak power band delivery.',
      isRealGameplay: false,
    },
    {
      id: 'gallery-6',
      title: 'Finish Line Trap',
      category: 'Multiplayer',
      orientation: 'landscape',
      src: '/images/gallery-6.jpg',
      alt: 'Photo finish at the 1/4 mile trap beams with deployable drag parachute',
      caption: 'Crossing the finish traps at over 200 MPH with parachute deployment.',
      isRealGameplay: false,
    },
  ],
};
