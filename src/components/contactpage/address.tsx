import { ArrowUpRightSquare } from 'lucide-react';
import Link from 'next/link';

import { contactUsContent } from '@/constant/config';

export function Address() {
  return (
    <section className='relative z-10 overflow-hidden bg-black text-white'>
      <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
        <div className='pt-16 md:pt-24 pb-16 md:pb-24'>
          <div className='flex flex-wrap items-center '>
            <div className='w-full px-4 md:w-5/12'>
              <div className='headline-defaults copy-defaults py-4 md:py-8 2xl:pr-6 '>
                <h2 className=' '>
                  <span className='my-4 md:my-8'>
                    {contactUsContent.addressHeading}
                  </span>
                </h2>
                <div className='rich-text md:my-4 py-px max-w-4xl lg:pr-8 xl:pr-16 '>
                  <p className='redactor-paragraph font-bold'>
                    <span>{contactUsContent.addressTitle}</span>
                    <br />
                  </p>
                  <p className='redactor-paragraph'>
                    <span>{contactUsContent.address}</span>
                    <br />
                  </p>
                </div>
                <p>
                  <Link
                    className='btn items-center group '
                    href={contactUsContent.location}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <span>Visit now</span>
                    <span>
                      <ArrowUpRightSquare className='ml-2 w-6 h-6 group-hover:ml-4 group-hover:-mr-2 transition-margin' />
                    </span>
                  </Link>
                </p>
              </div>
            </div>
            <div className='w-full px-4 md:w-7/12'>
              <div className='my-4'>
                {/* <Link
                  href={contactUsContent.location}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <Image
                    data-loaded='false'
                    onLoad={(event) => {
                      event.currentTarget.setAttribute('data-loaded', 'true');
                    }}
                    className=' lazyloaded data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
                    width='1000'
                    height='709'
                    alt={contactUsContent.addressTitle}
                    src={contactUsContent.addressImage}
                    data-srcset=''
                    sizes='100vw'
                  />
                </Link> */}
                <div className='google-map-area'>
                  <div className='mapouter'>
                    <div className='gmap_canvas'>
                      <iframe
                        className='w-full h-[50vh]'
                        id='gmap_canvas'
                        src='https://g.co/kgs/9XuLd9o'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
