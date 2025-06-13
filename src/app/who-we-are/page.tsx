'use client';

import { HeroHeading } from '@/components/layout/hero-heading';
import { OtherPages } from '@/components/layout/other-pages';
import { PageLayout } from '@/components/layout/page-layout';
import { ChurchTimeline } from '@/components/whowearepage/church-timeline';

import { otherPages, whoWeAreHero } from '@/constant/config';

export default function AboutUsPage() {
  return (
    <PageLayout>
      {/* Heading Section */}
      <HeroHeading data={whoWeAreHero} />
      {/* Timeline */}
      <ChurchTimeline />
      {/* Other pages links */}
      <OtherPages data1={otherPages[1]} data2={otherPages[2]} />
    </PageLayout>
  );
}
