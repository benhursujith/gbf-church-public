/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { HeroHeading } from '@/components/layout/hero-heading';
import { OtherPages } from '@/components/layout/other-pages';
import { PageLayout } from '@/components/layout/page-layout';
import { WhatWeBelieve } from '@/components/whatwebelievepage/what-we-believe';
import { WhatWeDo } from '@/components/whatwebelievepage/what-we-do';

import { otherPages, whatWeBelieveHero } from '@/constant/config';

export default function BeliefsPage() {
  return (
    <PageLayout>
      {/* Heading */}
      <HeroHeading data={whatWeBelieveHero} />
      <WhatWeBelieve />
      {/* Other pages links */}
      <OtherPages data1={otherPages[2]} data2={otherPages[0]} />
    </PageLayout>
  );
}
