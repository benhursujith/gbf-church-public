import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { NotFoundContent } from '@/constant/config';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <div className='bg-black relative z-10 '>
      <main role='main' className='main relative z-10'>
        <section className='relative flex items-center overflow-hidden pt-16 md:pt-32 lg:min-h-hero h-screen'>
          <div className='wrapper py-12 md:py-24 lg:py-32'>
            <div className='flex flex-wrap copy-defaults  '>
              <div className='w-full md:w-3/4 xl:w-9/12 px-4 z-20 headline-defaults copy-defaults relative '>
                <h1 className=''>{NotFoundContent.title}</h1>
                <div className='my-8 text-xl  max-w-4xl'>
                  <p>{NotFoundContent.description}</p>
                </div>
                <p>
                  <Link
                    className='btn items-center group outline'
                    href='/'
                    data-barba-prevent='self'
                  >
                    <span>{NotFoundContent.link}</span>
                  </Link>
                </p>
              </div>
              <div
                className='absolute z-10 w-full h-full top-0 left-0 object-cover rellax'
                style={{ transform: 'translate3d(0px, 0px, 0px)' }}
              >
                <Image
                  className='absolute top-0 left-0 w-full h-full object-cover ls-is-cached lazyloaded'
                  width='3840'
                  height='1680'
                  alt='Not Found'
                  src='/images/404.jpg'
                  data-srcset=''
                  sizes='100vw'
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
