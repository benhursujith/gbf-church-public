/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import 'react-toastify/dist/ReactToastify.css';

import { HeroHeading } from '@/components/layout/hero-heading';
import { OtherPages } from '@/components/layout/other-pages';
import { PageLayout } from '@/components/layout/page-layout';
import { LatestSermon } from '@/components/sermonspage/latest-sermon';
import { SermonsList } from '@/components/sermonspage/sermons-list';

import { otherPages, sermonPageHero } from '@/constant/config';

export default function SermonPage() {
  return (
    <PageLayout>
      {/* Heading Section */}
      <HeroHeading data={sermonPageHero} />
      {/* latest Sermon */}
      <LatestSermon />
      {/* Sermons list */}
      <SermonsList />
      {/* Other pages links */}
      <OtherPages data1={otherPages[0]} data2={otherPages[1]} />
    </PageLayout>
  );
}
