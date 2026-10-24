import type { Metadata, Viewport } from 'next';
import { Barlow_Condensed, Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';

const displayFont = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

const sansFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#08090B',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: `${siteConfig.brandName} | ${siteConfig.tagline} | Mobile Drag Racing`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.shortDescription,
  applicationName: siteConfig.brandName,
  authors: [{ name: siteConfig.legal.publisherLegalName }],
  generator: 'Next.js',
  keywords: [
    'Rivals Reborn',
    'mobile drag racing',
    'drag racing game',
    'iOS drag racing',
    'Android racing game',
    'car tuning',
    'dyno tuning',
    'bracket racing',
    'quarter mile racing',
    'pink slip racing',
    'manual shift racing',
  ],
  creator: siteConfig.brandName,
  publisher: siteConfig.legal.publisherLegalName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/rivalsrebornlogo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/rivalsrebornlogo.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/images/rivalsrebornlogo.png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.baseUrl,
    siteName: siteConfig.brandName,
    title: `${siteConfig.brandName} | High Stakes Mobile Drag Racing`,
    description: siteConfig.shortDescription,
    images: [
      {
        url: siteConfig.assets.logo,
        width: 1535,
        height: 1024,
        alt: `${siteConfig.brandName} Official Key Art`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.brandName} | Mobile Drag Racing`,
    description: siteConfig.shortDescription,
    images: [siteConfig.assets.logo],
    creator: '@officialur26',
  },
  alternates: {
    canonical: siteConfig.baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.baseUrl}/#website`,
        url: siteConfig.baseUrl,
        name: siteConfig.brandName,
        description: siteConfig.shortDescription,
        publisher: {
          '@type': 'Organization',
          name: siteConfig.legal.publisherLegalName,
          url: siteConfig.baseUrl,
          logo: `${siteConfig.baseUrl}${siteConfig.assets.logo}`,
        },
      },
      {
        '@type': 'VideoGame',
        '@id': `${siteConfig.baseUrl}/#game`,
        name: siteConfig.brandName,
        url: siteConfig.baseUrl,
        description: siteConfig.longDescription,
        genre: ['Racing', 'Drag Racing', 'Simulation', 'Automotive Tuning'],
        operatingSystem: ['iOS', 'Android'],
        applicationCategory: 'Game',
        publisher: {
          '@type': 'Organization',
          name: siteConfig.legal.publisherLegalName,
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-brand-text antialiased selection:bg-brand-red selection:text-white flex flex-col w-full max-w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
