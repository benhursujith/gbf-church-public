import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { SubHeading } from '@/components/layout/sub-heading';

import { sermonPageHero, sermonPageSermons } from '@/constant/config';

export function SermonsList() {
  const [visibleItems, setVisibleItems] = useState(2);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 2);
  };

  return (
    <>
      {/* Sub-Heading */}
      <SubHeading
        title={sermonPageHero.sermonSeriesTitle}
        description={sermonPageHero.sermonSeriesDescription}
        color='black'
      />
      <section className='relative z-10 overflow-hidden bg-black text-white'>
        <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
          <div className='pt-16 md:pt-24 pb-16 md:pb-0'>
            <div className='flex flex-wrap headline-defaults copy-defaults'>
              {/* list */}
              <div className='load-more-wrapper no-request'>
                <div className='fade-hover-area'>
                  <div className='flex flex-wrap load-more-container'>
                    {sermonPageSermons
                      .slice(0, visibleItems)
                      .map((sermon, index) => (
                        <div
                          key={index}
                          className='w-full sm:w-1/2 md:w-1/2 px-4 my-8 md:my-12 animate-in effect-fade-in entered'
                        >
                          <Link
                            className='group w-full h-full flex flex-col headline-defaults copy-defaults fade-hover-area-trigger'
                            href={sermon.link}
                          >
                            <Image
                              data-loaded='false'
                              onLoad={(event) => {
                                event.currentTarget.setAttribute(
                                  'data-loaded',
                                  'true'
                                );
                              }}
                              className='w-full mb-6 ls-is-cached lazyloaded data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
                              width='1600'
                              height='960'
                              alt={sermon.title}
                              src={sermon.image}
                              sizes='100vw'
                            />

                            <h3>{sermon.title}</h3>
                            <div className='max-w-2xl mb-4 md:text-lg'>
                              <p>{sermon.description}</p>
                            </div>
                            <div className='border-t border-gray-600 flex items-center mt-auto mb-0 py-2'>
                              <span className='font-sans font-bold'>
                                Explore
                              </span>
                              <ArrowRight className='w-4 h-4 ml-auto mr-2 group-hover:mr-0 transition-margin' />
                            </div>
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
                {/* More button */}
                <div className='flex flex-wrap'>
                  <div className='w-full px-4 my-8 text-center copy-defaults'>
                    <p>
                      {visibleItems < sermonPageSermons.length && (
                        <span
                          className='btn cursor-pointer load-more-trigger'
                          onClick={handleLoadMore}
                        >
                          Load More
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
