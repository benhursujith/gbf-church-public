'use client';

import 'react-toastify/dist/ReactToastify.css';

import { HeroHeading } from '@/components/layout/hero-heading';
import { OtherPages } from '@/components/layout/other-pages';
import { PageLayout } from '@/components/layout/page-layout';
import { PodcastsList } from '@/components/podcastspage/podcasts-list';

import { otherPages, podcastPageHero } from '@/constant/config';

export default function PodcastPage() {
  return (
    <PageLayout>
      {/* Heading Section */}
      <HeroHeading data={podcastPageHero} />
      {/* Life Topics List */}
      <PodcastsList />
      {/* Other pages links */}
      <OtherPages data1={otherPages[2]} data2={otherPages[0]} />
    </PageLayout>
  );
}
