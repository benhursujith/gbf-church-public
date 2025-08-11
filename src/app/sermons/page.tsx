/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';

import { HeroHeading } from '@/components/layout/hero-heading';
import { OtherPages } from '@/components/layout/other-pages';
import { PageLayout } from '@/components/layout/page-layout';
import { LatestSermon } from '@/components/sermonspage/latest-sermon';
import { SermonsList } from '@/components/sermonspage/sermons-list';
import { SeriesBlocks } from '@/components/sermonspage/series-blocks';
import { SocialLinks } from '@/components/ui/social-links';
// import { SundayServiceBlock } from '@/components/sermonspage/sunday-service-block';
// import { SundaysTimeline } from '@/components/sundayspage/sundays-timeline';

import { otherPages, sermonPageHero } from '@/constant/config';

export default function SermonPage() {
  return (
    <PageLayout>
      {/* Heading Section */}
      <HeroHeading data={sermonPageHero} />
      {/* Social Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Follow Our Content</h2>
            <p className="text-gray-600">Subscribe to our YouTube channel and Spotify podcast to stay tuned to our content</p>
          </div>
          <SeriesBlocks />
          <SocialLinks />
        </div>
      </section>
      {/* Latest Sermon */}
      <LatestSermon />
      {/* Sermons list with Suspense boundary */}
      <Suspense fallback={<div className="py-12 text-center">Loading sermons...</div>}>
        <SermonsList />
      </Suspense>
      {/* Other pages links */}
      <OtherPages data1={otherPages[0]} data2={otherPages[1]} />
    </PageLayout>
  );
}
