import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Podcasts',
  description: 'Discover transformative podcasts for spiritual growth.',
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      {/* Vercel */}
      <Analytics />
      <SpeedInsights />
    </>
  );
}
