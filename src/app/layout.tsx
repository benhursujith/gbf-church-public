import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { VercelToolbar } from '@vercel/toolbar/next';
import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import * as React from 'react';

import '@/styles/globals.css';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },

  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  authors: [
    {
      name: 'Jestin James',
      url: 'https://cbf-church.org/',
    },
  ],
};

const openSans = Open_Sans({
  weight: ['400', '700'], // Specify the weights you want to include
  subsets: ['latin'], // Specify any subsets if needed
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={openSans.className}>
        {children}
        {/* Vercel */}
        <Analytics />
        <SpeedInsights />
        <VercelToolbar />
      </body>
    </html>
  );
}
