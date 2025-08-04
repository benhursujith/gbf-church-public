'use client';

import { HeroHeading } from '@/components/layout/hero-heading';
import { OtherPages } from '@/components/layout/other-pages';
import { PageLayout } from '@/components/layout/page-layout';

import { otherPages } from '@/constant/config';

export default function VisionPurposePage() {
  return (
    <PageLayout>
      {/* Heading Section */}
      <HeroHeading 
        data={{ 
          header: 'Vision & Purpose',
          title: 'Our Mission',
          subtitle: 'Forward.',
          description: 'We are working on this content. Please check back soon for updates about our vision for the future and the purpose that drives Grace Bible Fellowship forward.',
          image: '/images/vision.jpg'
        }} 
      />
      
      {/* Under Development Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are currently developing content for this page. Our team is working hard to share our vision for the future and the purpose that drives Grace Bible Fellowship forward.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
                <ul className="text-left space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Our vision for reaching our city and community</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>The purpose that guides our decisions and actions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>How we plan to grow and serve in the coming years</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Our commitment to making disciples and building community</span>
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