'use client';

import { HeroHeading } from '@/components/layout/hero-heading';
import { OtherPages } from '@/components/layout/other-pages';
import { PageLayout } from '@/components/layout/page-layout';
import { whatWeBelieveHero, otherPages } from '@/constant/config';
import { CareGroups } from '@/components/whatwebelievepage/care-groups';

export default function CareGroupsPage() {
  const heroData = {
    header: 'Care Groups',
    title: 'Our',
    subtitle: 'Care Groups',
    description: whatWeBelieveHero.careGroupDescription,
    image: '/images/sermons.jpg', // Use a local image for now
  };
  return (
    <PageLayout>
      <HeroHeading data={heroData} />
      <CareGroups />
      <OtherPages data1={otherPages[0]} data2={otherPages[1]} />
    </PageLayout>
  );
} 