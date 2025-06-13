import Image from 'next/image';

import { SubHeading } from '@/components/layout/sub-heading';

import { whatWeBelieveHero, whatWeDoContent } from '@/constant/config';

export function WhatWeDo() {
  return (
    <>
      {/* Sub-Heading */}
      <SubHeading
        title={whatWeBelieveHero.whatWeDoTitle}
        description={whatWeBelieveHero.whatWeDoDescription}
        color='black'
      />

      {/* What we do Images */}
      <section className='relative z-10 overflow-hidden bg-black text-white'>
        <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
          <div className='pt-16 md:pt-0 pb-16 md:pb-24'>
            <div className='flex flex-wrap items-center  '>
              <div className='w-full px-4 md:w-full'>
                <div className='headline-defaults copy-defaults'>
                  <div className='flex flex-wrap -mx-4 my-4'>
                    {/* Go through what we do images here */}
                    {whatWeDoContent.map((content, index) => (
                      <div
                        key={index}
                        className='w-full xs:w-1/2 px-4 my-4 	md:w-1/4 text-center'
                      >
                        <div className='xl:pr-4'>
                          <div className='w-24 h-24 flex items-center justify-center my-4 md:my-6 mx-auto'>
                            <Image
                              data-loaded='false'
                              onLoad={(event) => {
                                event.currentTarget.setAttribute(
                                  'data-loaded',
                                  'true'
                                );
                              }}
                              className='data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
                              src={content.image}
                              width='71'
                              height='72'
                              alt={content.title}
                            />
                          </div>
                          <p className='font-sans font-bold text-xl sm:text-2xl lg:text-3xl'>
                            {content.title}
                          </p>
                          <div className='text-sm max-w-md xl:px-4'>
                            <p>{content.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
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
