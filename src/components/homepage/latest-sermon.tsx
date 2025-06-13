import Link from 'next/link';

import { homepageLatestSermon } from '@/constant/config';

export function LatestSermon() {
  return (
    <section className='relative z-10 overflow-hidden bg-gray-200 text-black'>
      <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
        <div className='pt-16 md:pt-24 pb-3 md:pb-24'>
          <div className='flex flex-wrap items-center '>
            <div className='w-full px-4 md:w-1/2 xl:w-11/24'>
              <div className='headline-defaults copy-defaults py-4 md:py-8 2xl:pr-6 '>
                <h2 className=' '>
                  <span className='my-4 md:my-8'>
                    {homepageLatestSermon.title}
                  </span>
                </h2>
                <div className='rich-text md:my-4 py-px max-w-4xl lg:pr-8 xl:pr-16 '>
                  <p>{homepageLatestSermon.description}</p>
                </div>
                <p>
                  <Link
                    className='btn items-center group '
                    href={homepageLatestSermon.link}
                  >
                    <span>{homepageLatestSermon.subtitle}</span>
                  </Link>
                </p>
              </div>
            </div>
            <div className='w-full px-4 md:w-11/24 md:mr-1/24 md:ml-auto'>
              <div className=''>
                <video
                  className='video-embed my-4 relative w-full pointer-events-none fade-on-load focus:outline-none ready'
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                >
                  <source type='video/mp4' src='/videos/sermon.mp4' />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
