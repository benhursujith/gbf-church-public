import Image from 'next/image';
import Link from 'next/link';

import { homepageChurchLocation } from '@/constant/config';

export function ChurchLocation() {
  return (
    <section className='relative z-10 overflow-hidden bg-black text-white'>
      <div className='absolute z-10 w-full h-full top-0 left-0'>
        <Image
          data-loaded='false'
          onLoad={(event) => {
            event.currentTarget.setAttribute('data-loaded', 'true');
          }}
          className='absolute top-0 left-0 w-full h-full object-cover ls-is-cached lazyloaded data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
          width='3840'
          height='1560'
          alt={homepageChurchLocation.title}
          src={homepageChurchLocation.image}
        />
      </div>
      <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
        <div className='pt-16 md:pt-24 pb-16 md:pb-24'>
          <div className='flex flex-wrap'>
            <div className='w-full md:w-3/4 lg:w-1/2 xl:w-2/5 px-4 '>
              <div className='bg-white text-black p-12 xl:py-20 headline-defaults copy-defaults'>
                <h2>{homepageChurchLocation.title}</h2>
                <div className='my-8'>
                  <p>{homepageChurchLocation.subtitle}</p>
                  <p>{homepageChurchLocation.description}</p>
                </div>
                <p>
                  <Link
                    className='btn items-center group '
                    href={homepageChurchLocation.link}
                  >
                    <span>{homepageChurchLocation.linkText}</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
