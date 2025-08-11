'use client';

import 'react-toastify/dist/ReactToastify.css';

import { HeroHeading } from '@/components/layout/hero-heading';
import { OtherPages } from '@/components/layout/other-pages';
import { PageLayout } from '@/components/layout/page-layout';
import { PodcastsList } from '@/components/podcastspage/podcasts-list';
import { SocialLinks } from '@/components/ui/social-links';

import { otherPages, podcastPageHero } from '@/constant/config';

export default function PodcastPage() {
  return (
    <PageLayout>
      {/* Heading Section */}
      <HeroHeading data={podcastPageHero} />
      {/* Social Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Follow Our Content</h2>
            <p className="text-gray-600">Subscribe to our YouTube channel and Spotify podcast to stay tuned to our content</p>
          </div>
          <SocialLinks />
        </div>
      </section>
      {/* Life Topics List */}
      <PodcastsList />
      {/* Other pages links */}
      <OtherPages data1={otherPages[2]} data2={otherPages[0]} />
    </PageLayout>
  );
}
