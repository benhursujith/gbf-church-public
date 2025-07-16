'use client';

import * as React from 'react';

import 'react-toastify/dist/ReactToastify.css';

import { ChurchLocation } from '@/components/homepage/church-location';
import { HeroSection } from '@/components/homepage/hero-section';
import { LatestSermon } from '@/components/homepage/latest-sermon';
import { TableOfLinks } from '@/components/homepage/table-of-links';
import { TrendingPodcasts } from '@/components/homepage/trending-podcasts';
import { OtherPages } from '@/components/layout/other-pages';
import { PageLayout } from '@/components/layout/page-layout';

import { otherPages } from '@/constant/config';

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <HeroSection />
      {/* Table of Links */}
      <TableOfLinks />
      {/* Latest Sermon Section */}
      <LatestSermon />
      {/* Sunday Gathering Location */}
      <ChurchLocation />
      {/* Trending Podcasts */}
      <TrendingPodcasts />
      {/* Other pages links */}
      <OtherPages data1={otherPages[0]} data2={otherPages[1]} />
    </PageLayout>
  );
}
