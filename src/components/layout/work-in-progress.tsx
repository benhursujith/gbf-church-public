import { OtherPages } from '@/components/layout/other-pages';
import { PageLayout } from '@/components/layout/page-layout';

import { otherPages } from '@/constant/config';

interface WorkInProgressProps {
  pageTitle: string;
  pageDescription: string;
  otherPagesData1?: typeof otherPages[0];
  otherPagesData2?: typeof otherPages[1];
}

export function WorkInProgress({
  pageTitle,
  pageDescription,
  otherPagesData1 = otherPages[1],
  otherPagesData2 = otherPages[2]
}: WorkInProgressProps) {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{pageTitle}</h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                {pageDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work in Progress Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                We are currently developing content for this page. Our team is working hard to bring you the best possible experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other pages links */}
      <OtherPages data1={otherPagesData1} data2={otherPagesData2} />
    </PageLayout>
  );
}
