import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { homepagePodcasts, homepageTrendingPodcasts } from '@/constant/config';

export function TrendingPodcasts() {
  return (
    <section className='relative z-10 overflow-hidden bg-black text-white'>
      <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
        <div className='pt-16 md:pt-24 pb-16 md:pb-24'>
          <div className='flex flex-wrap headline-defaults copy-defaults'>
            <div className='w-full px-4 text-center'>
              <h2 className='mx-auto'>
                <span className='my-4 md:my-8'>
                  {homepageTrendingPodcasts.title}
                </span>
              </h2>
              <div className='rich-text md:my-4 py-px text-lg max-w-4xl mx-auto'>
                <p>{homepageTrendingPodcasts.description}</p>
              </div>
            </div>
            <div className='load-more-wrapper no-request'>
              <div className='fade-hover-area'>
                <div className='flex flex-wrap load-more-container'>
                  {homepagePodcasts.slice(0, 3).map(
                    (
                      podcast: {
                        title: string;
                        description: string;
                        link: string;
                        image: string;
                      },
                      index: number
                    ) => (
                      <div
                        key={index}
                        className='w-full md:w-1/3 px-4 my-8 md:my-12 '
                      >
                        <Link
                          href={podcast.link}
                          className='group w-full h-full flex flex-col headline-defaults copy-defaults fade-hover-area-trigger'
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
                            width='1200'
                            height='750'
                            alt={podcast.title}
                            src={podcast.image}
                            sizes='100vw'
                          />

                          <p className='subhead'>
                            {homepageTrendingPodcasts.subtitle1}
                          </p>
                          <h3>{podcast.title}</h3>
                          <div className='max-w-2xl mb-4 md:text-lg'>
                            <p>{podcast.description}</p>
                          </div>
                          <div className='border-t border-gray-600 flex items-center mt-auto mb-0 py-2'>
                            <span className='font-sans font-bold'>
                              {homepageTrendingPodcasts.subtitle2}
                            </span>
                            <ArrowRight className='w-4 h-4 ml-auto mr-2 group-hover:mr-0 transition-margin' />
                          </div>
                        </Link>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
