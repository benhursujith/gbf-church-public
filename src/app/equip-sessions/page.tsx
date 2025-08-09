'use client';

import { WorkInProgress } from '@/components/layout/work-in-progress';

import { otherPages } from '@/constant/config';

export default function EquipSessionsPage() {
  return (
    <WorkInProgress
      pageTitle="Equip Sessions"
      pageDescription="We are working on this content. Please check back soon for updates about our Equip Sessions and how we equip believers for practical Christian living."
      otherPagesData1={otherPages[1]}
      otherPagesData2={otherPages[2]}
    />
  );
}
