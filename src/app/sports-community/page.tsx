'use client';

import { WorkInProgress } from '@/components/layout/work-in-progress';

import { otherPages } from '@/constant/config';

export default function SportsCommunityPage() {
  return (
    <WorkInProgress
      pageTitle="Sports Community"
      pageDescription="We are working on this content. Please check back soon for updates about our Sports Community and how we build relationships through sports and recreation."
      otherPagesData1={otherPages[1]}
      otherPagesData2={otherPages[2]}
    />
  );
}
