'use client';

import { HeroHeading } from '@/components/layout/hero-heading';
import { OtherPages } from '@/components/layout/other-pages';
import { PageLayout } from '@/components/layout/page-layout';
import { DeaconsList } from '@/components/leadershippage/deacons-list';
import { EldersList } from '@/components/leadershippage/elders-list';

import { leadershipPageHero, otherPages } from '@/constant/config';

export default function LeadershipPage() {
  return (
    <PageLayout>
      {/* Heading Section */}
      <HeroHeading data={leadershipPageHero} />
      {/* Eldership */}
      <EldersList />
      {/* Deacons */}
      <DeaconsList />
      {/* Other pages links */}
      <OtherPages data1={otherPages[0]} data2={otherPages[1]} />
    </PageLayout>
  );
}
