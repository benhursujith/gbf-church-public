'use client';

import { WorkInProgress } from '@/components/layout/work-in-progress';

import { otherPages } from '@/constant/config';

export default function OurDistinctivesPage() {
  return (
    <WorkInProgress
      pageTitle="Our Distinctives"
      pageDescription="We are working on this content. Please check back soon for updates about what makes Grace Bible Fellowship distinct in our approach to faith, community, and service."
      otherPagesData1={otherPages[1]}
      otherPagesData2={otherPages[2]}
    />
  );
} 