'use client'; // Error components must be Client Components

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { Bounce, toast } from 'react-toastify';

import { Button } from '@/components/ui/button';

import { ErrorContent, NotFoundContent } from '@/constant/config';
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    toast.error(`Oops, something went wrong! ${error}`, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Bounce,
    });
  }, [error]);

  return (
    <>
      <div className='bg-black relative z-10 '>
        <main role='main' className='main relative z-10'>
          <section className='relative flex items-center overflow-hidden pt-16 md:pt-32 lg:min-h-hero h-screen'>
            <div className='wrapper py-12 md:py-24 lg:py-32'>
              <div className='flex flex-wrap copy-defaults  '>
                <div className='w-full md:w-3/4 xl:w-9/12 px-4 z-20 headline-defaults copy-defaults relative '>
                  <h1 className=''>{ErrorContent.title}</h1>
                  <div className='my-8 text-xl  max-w-4xl'>
                    <p>{ErrorContent.description}</p>
                  </div>
                  <p>
                    <Button
                      className='btn items-center group outline'
                      onClick={reset}
                      data-barba-prevent='self'
                    >
                      <span>{ErrorContent.link}</span>
                    </Button>
                  </p>
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
    </>
  );
}
