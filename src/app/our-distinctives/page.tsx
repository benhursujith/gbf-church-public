'use client';

import { HeroHeading } from '@/components/layout/hero-heading';
import { OtherPages } from '@/components/layout/other-pages';
import { PageLayout } from '@/components/layout/page-layout';

import { otherPages } from '@/constant/config';

export default function OurDistinctivesPage() {
  return (
    <PageLayout>
      {/* Heading Section */}
      <HeroHeading 
        data={{ 
          header: 'Our Distinctives',
          title: 'What Makes Us',
          subtitle: 'Unique.',
          description: 'We are working on this content. Please check back soon for updates about what makes Grace Bible Fellowship distinct in our approach to faith, community, and service.',
          image: '/images/church.jpg'
        }} 
      />
      
      {/* Under Development Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are currently developing content for this page. Our team is working hard to share what makes Grace Bible Fellowship unique in our approach to faith, community, and service.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
                <ul className="text-left space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Our unique approach to biblical teaching and community</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Distinctive aspects of our worship and fellowship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>How we serve our community and city</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Our commitment to welcoming all who seek truth</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other pages links */}
      <OtherPages data1={otherPages[1]} data2={otherPages[2]} />
    </PageLayout>
  );
} 