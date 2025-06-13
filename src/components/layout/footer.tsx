/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import Link from 'next/link';
import { Key } from 'react';

import {
  footerAboutLinks,
  footerQuickLinks,
  footerSocialLinks,
  siteConfig,
} from '@/constant/config';

export function Footer() {
  return (
    <footer className='bg-gray-400 text-black headline-defaults copy-defaults relative z-10'>
      <div className='wrapper relative z-10'>
        <div className='flex flex-wrap py-8 md:pt-16 md:pb-24'>
          {/* Logo */}
          <div className='w-full xl:w-2/5 px-4'>
            <Image
              data-loaded='false'
              onLoad={(event) => {
                event.currentTarget.setAttribute('data-loaded', 'true');
              }}
              src='/logos/CBF_WT_Full_Coral.png'
              alt='bg'
              loading='eager'
              className='object-cover data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
              height={200}
              width={400}
            />
          </div>
          {/* links */}
          <div className='w-full xl:w-3/5'>
            <div className='flex flex-wrap'>
              <div className='w-1/2 md:w-1/3 px-4'>
                <p className='subhead'>
                  <span className='hover:underline'>About Us</span>
                </p>
                <ul className='list-none pl-0 font-sans xl:mt-8'>
                  {footerAboutLinks.map(
                    ({ title, link }: any, index: Key | null | undefined) => (
                      <li key={index} className='pr-4'>
                        <Link
                          className='hover:underline hover:text-coral'
                          href={link}
                        >
                          {title}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className='w-1/2 md:w-1/3 px-4'>
                <p className='subhead'>
                  <span className='hover:underline'>Quick Links</span>
                </p>
                <ul className='list-none pl-0 font-sans xl:mt-8'>
                  {footerQuickLinks.map(
                    ({ title, link }: any, index: Key | null | undefined) => (
                      <li key={index} className='pr-4'>
                        <Link
                          className='hover:underline hover:text-coral'
                          href={link}
                        >
                          {title}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className='w-1/2 md:w-1/3 px-4'>
                <p className='subhead'>{siteConfig.questions}</p>
                <ul className='list-none pl-0 font-sans xl:mt-8'>
                  <li className='pr-4'>
                    <Link
                      className='hover:underline hover:text-coral font-bold'
                      href={`mailto:${siteConfig.email}`}
                    >
                      {siteConfig.email}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Social */}
        <div className='flex flex-wrap items-center my-4 md:mt-0 md:mb-8 md:px-2'>
          {footerSocialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block w-6 h-6 mx-4 md:mx-2 text-black hover:text-[#c63b3f] transition-colors'
            >
              {social.component}
            </Link>
          ))}
        </div>
      </div>
      <div className='border-t border-gray-800 relative z-20'>
        <div className='wrapper'>
          <div className='flex flex-wrap px-4 xl:py-4 xl:items-center'>
            <div className='w-full xl:flex-1 flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-between -mb-4 xl:-mb-0 relative z-20'>
              <p className='subhead xl:mr-8 relative z-10'>
                Copyright © {new Date().getFullYear()} {siteConfig.title}. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
