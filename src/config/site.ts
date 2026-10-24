import { SiteConfig } from '@/types/site';

export const siteConfig: SiteConfig = {
  brandName: 'Rivals Reborn',
  tagline: 'Pure Reaction. Real Stakes.',
  shortDescription:
    'Build your garage, tune your vehicle correctly, and put your ride on the line. True manual drag racing built for raw reaction and high stakes rivalries.',
  longDescription:
    'Rivals Reborn brings authentic, skill based quarter mile drag racing to iOS and Android. Built on a dedicated physics engine with precise launch windows, true manual shifting, deep performance tuning, visual personalization, and high stakes pink slip racing.',
  domain: 'rivalsrebornofficial.com',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://rivalsrebornofficial.com',
  releaseStatus: 'closed-alpha',
  releaseDateText: 'Closed Invite Only Alpha',

  announcement: {
    enabled: true,
    badge: 'Under Development',
    text: 'Currently in closed invite only alpha testing. Pre registration and Closed Beta invitations opening soon.',
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
      badgeLabel: 'Invite Only Alpha',
      minVersion: 'iOS 16.0 or later',
    },
    android: {
      platform: 'android',
      name: 'Google Play Store',
      storeName: 'Google Play',
      url: null, // Play Console review in progress: set to official store URL once approved
      status: 'closed-alpha',
      badgeLabel: 'Invite Only Alpha',
      minVersion: 'Android 11.0 or later',
    },
  },

  socials: {
    discord: {
      name: 'Discord',
      url: 'https://discord.gg/rivalsreborn', // Official community server
      icon: 'Discord',
      label: 'Join our official Discord server for announcements & alpha access',
      isOfficial: true,
    },
    youtube: {
      name: 'YouTube',
      url: 'https://www.youtube.com/@rivalsrebornofficial',
      icon: 'Youtube',
      label: 'Subscribe on YouTube for developer logs and gameplay trailers',
      isOfficial: true,
    },
    tiktok: {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@rivals_reborn',
      icon: 'Tiktok',
      label: 'Watch gameplay clips and tuning showcases on TikTok',
      isOfficial: true,
    },
    instagram: {
      name: 'Instagram',
      url: 'https://www.instagram.com/official_rivalsreborn',
      icon: 'Instagram',
      label: 'Follow @official_rivalsreborn on Instagram for car reveals',
      isOfficial: true,
    },
    x: {
      name: 'X (Twitter)',
      url: 'https://x.com/officialur26',
      icon: 'Twitter',
      label: 'Follow @officialur26 on X for instant news and announcements',
      isOfficial: true,
    },
    facebook: {
      name: 'Facebook',
      url: 'https://www.facebook.com/RivalsRemastered',
      icon: 'Facebook',
      label: 'Follow our official Facebook page for community updates',
      isOfficial: true,
    },
    patreon: {
      name: 'Patreon',
      url: 'https://www.patreon.com/cw/Undergroundrivals',
      icon: 'Patreon',
      label: 'Support development and unlock exclusive backer perks on Patreon',
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
      title: 'TUNE, COMPETE, COLLECT',
      description:
        'Buy, upgrade, and win distinguished racing machines to dominate the strip. Every vehicle in your garage carries distinct power to weight ratios, drivetrain dynamics, and upgrade paths designed for raw quarter mile dominance and pushing to your absolute limits.',
      imageSrc: '/images/feature-garage.png',
      imageAlt: 'Pagani Zonda Revolucion in the Rivals Reborn garage workshop',
      aspectRatio: '1024 / 470',
      stats: [
        { label: 'Drivetrains', value: 'RWD / AWD / FWD' },
        { label: 'Classes', value: 'D to R3' },
      ],
    },
    {
      id: 'tuning',
      tag: 'PRECISION CALIBRATION',
      title: 'AUTO TUNING & TUNE BOOK',
      subtitle: 'Save custom profiles to your Tune Book and apply tunes or upgrade parts faster with Auto Tune.',
      description:
        'Calibrate your build across engine, turbo, and nitrous pro tiers, then save your winning setups directly into your Tune Book with custom profile names. Auto Tune allows you to apply saved tunes and upgrade your parts easier and more time efficient, getting your vehicle dialed in for the quarter mile with zero downtime.',
      imageSrc: '/images/feature-tuning.png',
      imageAlt: 'Rivals Reborn Tune Bench showing auto tuning, pro parts calibration, and saved tune book',
      aspectRatio: '1024 / 470',
      stats: [
        { label: 'Auto Tune', value: 'Fast & Efficient Upgrades' },
        { label: 'Tune Book', value: 'Save & Load Profiles' },
      ],
    },
    {
      id: 'customization',
      tag: 'VISUAL IDENTITY',
      title: 'AESTHETICS WITHOUT COMPROMISE',
      subtitle: 'Make your vehicle unmistakably yours before the lights drop.',
      description:
        'Express your street identity with custom gem parts per car, wheel and rim sizing, special carbon fiber and glow rims, and multi stage pearlescent, satin, matte, and flake paint finishes. Your rival will see your taillights, make sure they remember you.',
      imageSrc: '/images/finishes/finish-matte.png',
      imageAlt: 'Custom drag racing car showcasing matte, metallic, and satin paint finishes',
      stats: [
        { label: 'Finishes', value: 'Matte, Satin, Metallic' },
        { label: 'Aero', value: 'Full Drag Kits & Spoilers' },
      ],
      paintFinishes: [
        {
          id: 'matte',
          label: 'Matte',
          imageSrc: '/images/finishes/finish-matte.png',
          imageAlt: 'Matte blue finish on high performance track hatchback',
        },
        {
          id: 'metallic',
          label: 'Metallic',
          imageSrc: '/images/finishes/finish-metallic.png',
          imageAlt: 'Metallic copper finish on custom drag GT vehicle',
        },
        {
          id: 'satin',
          label: 'Satin',
          imageSrc: '/images/finishes/finish-satin.png',
          imageAlt: 'Satin purple finish on widebody drag coupe',
        },
      ],
    },
    {
      id: 'drag-racing',
      tag: 'COMPETITIVE RACING',
      title: 'PURE REACTION DRAG RACING',
      subtitle: 'No steering assist. Raw timing, skill based perfect launching, and grip loss.',
      description:
        "Rev your engine to the limiter then drop at the right timing, or rev launch from 0 RPM's either choice, launch at the top of the window, and show off your skill with lightning fast and manual paddle shifting without slamming the limiter.",
      imageSrc: '/images/feature-racing.png',
      imageAlt: 'Manual paddle shifting, launch gauge, and RPM tachometer HUD in Rivals Reborn',
      stats: [
        { label: 'Distance', value: '1/4 Mile' },
        { label: 'Timing', value: 'Millisecond Precision' },
      ],
    },
    {
      id: 'rivalries',
      tag: 'HIGH STAKES',
      title: 'CREWS, BETS & PINK SLIPS',
      subtitle: 'Put your cash, your car, and your pride on the line.',
      description:
        'Form racing crews with trusted drivers, coordinate builds across every class, and battle for leaderboard dominance in live head to head showdowns. Back up your tune in authentic pink slip races where the winner takes the keys, no safety nets, no second chances.',
      imageSrc: '/images/feature-rivals.jpg',
      imageAlt: 'Two drag racers staging for a high stakes pink slip showdown',
      stats: [
        { label: 'High Stakes', value: 'Pink Slips & Bets' },
        { label: 'Competition', value: 'Live 1v1 & Crew Turf' },
      ],
    },
  ],

  gallery: [
    {
      id: 'gallery-zonda',
      title: 'Pagani Zonda Revolucion',
      category: 'Garage',
      orientation: 'landscape',
      src: '/images/feature-garage.png',
      alt: 'Pagani Zonda Revolucion staging in the Rivals Reborn garage workshop',
      caption: 'Full carbon fiber Pagani Zonda Revolucion staging in the high-stakes garage workshop with turbo and nitrous setup.',
      isRealGameplay: true,
    },
    {
      id: 'gallery-tuning-bench',
      title: 'Tune Bench & Auto Tune',
      category: 'Tuning',
      orientation: 'landscape',
      src: '/images/feature-tuning.png',
      alt: 'F1 GTR Tune Bench showing engine calibration and Tune Book',
      caption: 'In-depth Tune Bench showing engine component Pro tiers, multi-profile Tune Book, and fast Auto Tune part upgrades.',
      isRealGameplay: true,
    },
    {
      id: 'gallery-launch-hud',
      title: 'Pure Reaction Launch HUD',
      category: 'Drag Racing',
      orientation: 'landscape',
      src: '/images/feature-racing.png',
      alt: 'In-cockpit manual drag launch HUD showing tachometer, shift lights, and launch button',
      caption: 'True manual paddle shifting, RPM launch window, and instant nitrous boost down the quarter mile strip.',
      isRealGameplay: true,
    },
    {
      id: 'gallery-matte-hatch',
      title: 'Matte Blue Track Hatch',
      category: 'Customization',
      orientation: 'landscape',
      src: '/images/finishes/finish-matte.png',
      alt: 'Matte blue finish on high performance track hatchback',
      caption: 'Flat non-reflective matte blue finish with custom track aero, mesh racing rims, and neon purple underglow.',
      isRealGameplay: true,
    },
    {
      id: 'gallery-metallic-gt',
      title: 'Metallic Copper Drag GT',
      category: 'Customization',
      orientation: 'landscape',
      src: '/images/finishes/finish-metallic.png',
      alt: 'Metallic copper finish on custom drag GT vehicle',
      caption: 'Deep metallic copper gloss highlighting specular light reflections and high-speed aero components.',
      isRealGameplay: true,
    },
    {
      id: 'gallery-satin-m3',
      title: 'Satin Purple Pro Drag M3',
      category: 'Customization',
      orientation: 'landscape',
      src: '/images/finishes/finish-satin.png',
      alt: 'Satin purple finish on widebody drag coupe',
      caption: 'Silky smooth satin purple sheen on a widebody drag coupe with custom side exhaust ports.',
      isRealGameplay: true,
    },
    {
      id: 'gallery-pink-slips',
      title: 'High Stakes Pink Slip Lobby',
      category: 'Multiplayer',
      orientation: 'landscape',
      src: '/images/gameplay-wager.png',
      alt: 'Live challenge lobby showing pink slip and cash wagering options against rival racers',
      caption: 'Live head-to-head challenge lobby with real-time cash wagers and pink slip stakes.',
      isRealGameplay: true,
    },
  ],
};
