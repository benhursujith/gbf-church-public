'use client';

import { WorkInProgress } from '@/components/layout/work-in-progress';

import { otherPages } from '@/constant/config';

export default function VisionPurposePage() {
  return (
    <WorkInProgress
      pageTitle="Vision & Purpose"
      pageDescription="We are working on this content. Please check back soon for updates about our vision for the future and the purpose that drives Grace Bible Fellowship forward."
      otherPagesData1={otherPages[1]}
      otherPagesData2={otherPages[2]}
    />
  );
} 