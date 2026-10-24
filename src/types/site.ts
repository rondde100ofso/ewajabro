export type ReleaseStatus = 'pre-registration' | 'closed-alpha' | 'beta' | 'coming-soon' | 'live';

export interface SocialLink {
  name: string;
  url: string | null; // null if unconfigured/coming soon
  icon: string;
  label: string;
  isOfficial: boolean;
}

export interface PlatformStoreLink {
  platform: 'ios' | 'android';
  name: string;
  storeName: string;
  url: string | null; // null if pending store review / coming soon
  status: 'available' | 'pre-order' | 'coming-soon' | 'closed-alpha';
  badgeLabel: string;
  minVersion: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Garage' | 'Customization' | 'Drag Racing' | 'Tuning' | 'Multiplayer';
  orientation: 'landscape' | 'portrait';
  src: string;
  alt: string;
  caption: string;
  isRealGameplay: boolean;
}

export interface PaintFinish {
  id: string;
  label: string;
  imageSrc: string;
  imageAlt: string;
}

export interface FeatureItem {
  id: string;
  tag: string;
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  aspectRatio?: string;
  stats?: { label: string; value: string }[];
  paintFinishes?: PaintFinish[];
}

export interface LegalDocumentMetadata {
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  requiresReview: boolean; // Flagged as substantive draft requiring legal team sign-off before official publication
}

export interface LegalConfig {
  publisherLegalName: string;
  publisherEntity: string;
  contactEmail: string;
  privacyEmail: string;
  registeredAddress: string;
  jurisdiction: string;
  documents: {
    termsOfService: LegalDocumentMetadata;
    termsOfUse: LegalDocumentMetadata;
    privacyPolicy: LegalDocumentMetadata;
  };
}

export interface AnnouncementBanner {
  enabled: boolean;
  text: string;
  badge: string;
  linkText?: string;
  linkHref?: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  domain: string;
  baseUrl: string;
  releaseStatus: ReleaseStatus;
  releaseDateText: string;
  announcement: AnnouncementBanner;
  assets: {
    logo: string;
    logoWidth: number;
    logoHeight: number;
    heroVideo: string | null; // null or placeholder if actual gameplay video pending
    heroPoster: string;
    ogImage: string;
    favicon: string;
  };
  stores: {
    ios: PlatformStoreLink;
    android: PlatformStoreLink;
  };
  socials: Record<string, SocialLink>;
  support: {
    email: string;
    discordSupportChannel?: string;
  };
  legal: LegalConfig;
  features: FeatureItem[];
  gallery: GalleryItem[];
}
