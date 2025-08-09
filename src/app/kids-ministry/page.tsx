'use client';

import { WorkInProgress } from '@/components/layout/work-in-progress';

import { otherPages } from '@/constant/config';

export default function KidsMinistryPage() {
  return (
    <WorkInProgress
      pageTitle="Kids' Ministry"
      pageDescription="We are working on this content. Please check back soon for updates about our Kids' Ministry and how we nurture the faith of children at Grace Bible Fellowship."
      otherPagesData1={otherPages[1]}
      otherPagesData2={otherPages[2]}
    />
  );
}
