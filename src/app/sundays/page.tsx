'use client';

import { HeroHeading } from '@/components/layout/hero-heading';
import { PageLayout } from '@/components/layout/page-layout';
import { OtherPages } from '@/components/layout/other-pages';
import { SundayServiceBlock } from '@/components/sermonspage/sunday-service-block';
import { SundaysTimeline } from '@/components/sundayspage/sundays-timeline';
import { SundaysFAQ } from '@/components/sundayspage/sundays-faq';

import { otherPages, sundaysHero } from '@/constant/config';

export default function SundaysPage() {
  return (
    <PageLayout>
      {/* Hero Section (no timing/location) */}
      <HeroHeading data={sundaysHero} />
      {/* Sunday Service Block (second container) */}
      <SundayServiceBlock />
      {/* Order of Service Timeline (hero-matching dark container) */}
      <section className="py-20 border-t border-gray-100" style={{ background: '#0B0B1F' }}>
        <div className="wrapper">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Order of Service</h3>
          <SundaysTimeline />
        </div>
      </section>
      {/* FAQ Section */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="wrapper">
          <h3 className="text-3xl font-bold text-center mb-12 text-black">Frequently Asked Questions</h3>
          <SundaysFAQ />
        </div>
      </section>
      {/* Other Pages */}
      <OtherPages data1={otherPages[0]} data2={otherPages[1]} />
    </PageLayout>
  );
} 