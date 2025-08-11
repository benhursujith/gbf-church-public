import { ArrowUpRightSquare } from 'lucide-react';
import Link from 'next/link';

import { contactUsContent } from '@/constant/config';

export function Address() {
  return (
    <section className='relative z-10 overflow-hidden bg-white text-black'>
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
                <div className='rounded-lg overflow-hidden shadow-md border border-gray-200'>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.640792564692!2d77.60353027635654!3d12.930793287380839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15a40c7762df%3A0xc042dbe4e5424cae!2sGrace%20Bible%20Fellowship!5e0!3m2!1sen!2sin!4v1752766947452!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Grace Bible Fellowship Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
