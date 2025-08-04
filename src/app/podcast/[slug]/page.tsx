/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import 'react-toastify/dist/ReactToastify.css';

import { OtherPages } from '@/components/layout/other-pages';
import { PageLayout } from '@/components/layout/page-layout';
import { PodcastList } from '@/components/podcastspage/podcast-list';

import { otherPages } from '@/constant/config';

export default function PodcastRoute({ params }: { params: { slug: string } }) {
  return (
    <PageLayout>
      {/* Podcast list */}
      <PodcastList slug={params.slug} />
      {/* Other pages links */}
      <OtherPages data1={otherPages[3]} data2={otherPages[4]} />
    </PageLayout>
  );
}
