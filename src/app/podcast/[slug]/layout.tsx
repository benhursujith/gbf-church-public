import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Life Topics',
  description: 'Discover transformative life topics for spiritual growth.',
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
