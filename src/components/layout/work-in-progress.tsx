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



      {/* Other pages links */}
      <OtherPages data1={otherPagesData1} data2={otherPagesData2} />
    </PageLayout>
  );
}
