import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface OtherData {
  title: string;
  link: string;
  desc: string;
}

export function OtherPages({
  data1,
  data2,
}: {
  data1: OtherData;
  data2: OtherData;
}) {
  const { title: title1, link: link1, desc: desc1 } = data1;
  const { title: title2, link: link2, desc: desc2 } = data2;

  return (
    <section className='relative z-10 bg-black text-white'>
      <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
        <div className='pt-16 md:pt-36 pb-16 md:pb-36'>
          <div className='flex flex-wrap px-2'>
            <div className='w-full md:w-1/2 px-2 my-2'>
              <Link
                className='group flex flex-col h-full px-12 py-6 headline-defaults copy-defaults transition-colors no-child-pointers bg-[#2e71ea] text-white hover:bg-white hover:text-black'
                href={link1}
              >
                <p className='subhead'>{title1}</p>
                <h3 className='pb-8 md:pb-12 sm:pr-8 lg:pr-16'>{desc1}</h3>
                <div className='mt-auto mb-2 ml-0 group-hover:ml-2 transition-margin'>
                  <ArrowRight className='w-6 h-6' />
                </div>
              </Link>
            </div>
            <div className='w-full md:w-1/2 px-2 my-2'>
              <Link
                className='group flex flex-col h-full px-12 py-6 headline-defaults copy-defaults transition-colors no-child-pointers bg-coral text-white hover:bg-white hover:text-black'
                href={link2}
              >
                <p className='subhead'>{title2}</p>
                <h3 className='pb-8 md:pb-12 sm:pr-8 lg:pr-16'>{desc2}</h3>
                <div className='mt-auto mb-2 ml-0 group-hover:ml-2 transition-margin'>
                  <ArrowRight className='w-6 h-6' />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
