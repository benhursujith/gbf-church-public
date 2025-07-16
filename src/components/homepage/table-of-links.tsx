/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
  aboutMenuSection,
  connectMenuSection,
  otherPages,
  sermonPageSermons,
} from '@/constant/config';
import { fetchSermonsFromSheet } from '@/utils/fetch-sermons-from-sheet';

export function TableOfLinks() {
  const [series, setSeries] = useState<string[]>([]);

  useEffect(() => {
    fetchSermonsFromSheet().then((data) => {
      const uniqueSeries = Array.from(
        new Set(
          data
            .filter((s) => s.type === 'sermon' && s.series)
            .map((s) => s.series)
        )
      ).filter(Boolean);
      setSeries(uniqueSeries.slice(0, 3));
    });
  }, []);

  return (
    <section className='relative z-10 overflow-hidden bg-black text-white'>
      <div className='wrapper relative z-20 '>
        <div className='pt-16 md:pt-24 pb-16 md:pb-24'>
          <div className='flex flex-wrap items-center '>
            <div className='w-full px-4 md:w-1/2 xl:w-11/24'>
              <div className='headline-defaults copy-defaults py-4 md:py-8 2xl:pr-6 '>
                <h2>
                  <span className='my-4 md:my-8'>{aboutMenuSection.title}</span>
                </h2>
                <div className='rich-text md:my-4 py-px max-w-4xl lg:pr-8 xl:pr-16 '>
                  <p>{aboutMenuSection.description}</p>
                </div>
                <div className='fade-hover-area fade-hover-area-dark'>
                  {otherPages.slice(0, 3).map((page, index) => (
                    <p
                      key={index}
                      className='relative my-0 lg:mr-8 xl:mr-16 max-w-7xl'
                    >
                      <Link
                        className='group fade-hover-area-trigger flex items-center py-3 font-bold font-sans no-child-pointers'
                        href={page.link}
                      >
                        <span>{page.title}</span>
                        <span className='ml-auto mr-4 group-hover:mr-2 transition-margin'>
                          <ArrowRight className='w-4 h-4' />
                        </span>
                      </Link>
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className='w-full px-4 md:w-11/24 md:mr-1/24 md:ml-auto'>
              <div className='headline-defaults copy-defaults py-4 md:py-8 2xl:pr-6 '>
                <h2>
                  <span className='my-4 md:my-8'>
                    {connectMenuSection.title}
                  </span>
                </h2>
                <div className='rich-text md:my-4 py-px max-w-4xl lg:pr-8 xl:pr-16 '>
                  <p>{connectMenuSection.description}</p>
                </div>
                <div className='fade-hover-area fade-hover-area-dark'>
                  {series.length > 0
                    ? series.map((s, index) => (
                      <p
                        key={index}
                        className='relative my-0 lg:mr-8 xl:mr-16 max-w-7xl'
                      >
                        <Link
                          className='group fade-hover-area-trigger flex items-center py-3 font-bold font-sans no-child-pointers'
                          href={`/sermons?series=${encodeURIComponent(s)}`}
                        >
                          <span>{s}</span>
                          <span className='ml-auto mr-4 group-hover:mr-2 transition-margin'>
                            <ArrowRight className='w-4 h-4' />
                          </span>
                        </Link>
                      </p>
                    ))
                    : sermonPageSermons.slice(0, 3).map((page, index) => (
                      <p
                        key={index}
                        className='relative my-0 lg:mr-8 xl:mr-16 max-w-7xl'
                      >
                        <Link
                          className='group fade-hover-area-trigger flex items-center py-3 font-bold font-sans no-child-pointers'
                          href={page.link}
                        >
                          <span>{page.title}</span>
                          <span className='ml-auto mr-4 group-hover:mr-2 transition-margin'>
                            <ArrowRight className='w-4 h-4' />
                          </span>
                        </Link>
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
