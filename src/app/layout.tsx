import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://f1-reaction-game.vercel.app'),
  title: {
    default: 'F1 Start Reaction Game - Test Your Formula 1 Reflexes',
    template: '%s | F1 Reaction Game'
  },
  description: 'Can you beat the F1 lights? Test your Formula 1 race start reaction time and compare with real F1 drivers. Free online reaction test game.',
  keywords: [
    'F1 reaction time', 'Formula 1 game', 'reaction test', 
    'F1 start lights', 'racing reflexes', 'F1 reaction game',
    'formula one reaction', 'race start simulator', 'F1 lights out',
    'reaction time test', 'F1 driver reaction', 'racing game'
  ],
  authors: [{ name: 'ziv247' }],
  creator: 'ziv247',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://f1-reaction-game.vercel.app',
    siteName: 'F1 Reaction Game',
    title: 'F1 Start Reaction Game - Can You Beat the Lights?',
    description: 'Test your Formula 1 race start reaction time! Compare your reflexes with real F1 drivers. Free online game.',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'F1 Reaction Game - Test Your Reflexes'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'F1 Start Reaction Game - Can You Beat the Lights?',
    description: 'Test your F1 race start reaction time! Compare with real F1 drivers.',
    images: ['/og-image.png'],
    creator: '@ziv247'
  },
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
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/icon-192.png',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#e60000',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'F1 Start Reaction Game',
  description: 'Test your Formula 1 race start reaction time and compare with real F1 drivers',
  applicationCategory: 'Game',
  operatingSystem: 'Web Browser',
  url: 'https://f1-reaction-game.vercel.app',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '150'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* AdSense verification script - required for site approval */}
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
