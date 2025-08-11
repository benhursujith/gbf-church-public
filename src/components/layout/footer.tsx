/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import Link from 'next/link';
import { Key } from 'react';

import {
  footerColumn1Links,
  footerColumn2Links,
  footerColumn3Links,
  footerSocialLinks,
  siteConfig,
} from '@/constant/config';

export function Footer() {
  return (
    <footer className='bg-gray-400 text-black headline-defaults copy-defaults relative z-10'>
      <div className='wrapper relative z-10'>
        <div className='flex flex-wrap md:flex-nowrap items-start justify-between py-8 md:pt-16 md:pb-24 px-4'>
          {/* Logo */}
          <div className='w-full md:w-1/4 xl:w-1/4 flex justify-center mb-8 md:mb-0'>
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
          {/* Column 1 Links */}
          <div className='w-full md:w-1/4 xl:w-1/4 flex flex-col items-start md:ml-12'>
            <ul className='list-none pl-0 font-sans xl:mt-4'>
              {footerColumn1Links.map(({ title, link }: any, index: Key | null | undefined) => (
                <li key={index} className='pr-4 mb-1'>
                  <Link className='hover:underline hover:text-[#2e71ea]' href={link}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Column 2 Links */}
          <div className='w-full md:w-1/4 xl:w-1/4 flex flex-col items-start mt-8 md:mt-0'>
            <ul className='list-none pl-0 font-sans xl:mt-4'>
              {footerColumn2Links.map(({ title, link }: any, index: Key | null | undefined) => (
                <li key={index} className='pr-4 mb-1'>
                  <Link className='hover:underline hover:text-[#2e71ea]' href={link}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Column 3 Links */}
          <div className='w-full md:w-1/4 xl:w-1/4 flex flex-col items-start mt-8 md:mt-0'>
            <ul className='list-none pl-0 font-sans xl:mt-4'>
              {footerColumn3Links.map(({ title, link, isEmail, email }: any, index: Key | null | undefined) => (
                <>
                  <li key={`title-${index}`} className='pr-4 mb-1'>
                    <span className={`${isEmail ? 'font-bold' : ''}`}>
                      {title}
                    </span>
                  </li>
                  {email && (
                    <li key={`email-${index}`} className='pr-4 mb-1 mt-2'>
                      <Link 
                        className='hover:underline hover:text-[#2e71ea] text-sm' 
                        href={link}
                      >
                        {email}
                      </Link>
                    </li>
                  )}
                </>
              ))}
            </ul>
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
      <div className='relative z-20'>
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
