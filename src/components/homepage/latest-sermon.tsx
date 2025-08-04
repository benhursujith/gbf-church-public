import { useEffect, useState } from 'react';
import Link from 'next/link';
import { homepageLatestSermon } from '@/constant/config';
import { fetchSermonsFromSheet } from '@/utils/fetch-sermons-from-sheet';

export function LatestSermon() {
  const [latestSermon, setLatestSermon] = useState<any>(null);

  useEffect(() => {
    fetchSermonsFromSheet().then(items => {
      const sermons = items.filter(item => item.type === 'sermon');
      // Sort by date if available, else by order in sheet
      sermons.sort((a, b) => (a.date || '').localeCompare(b.date || ''));
      if (sermons.length > 0) {
        setLatestSermon(sermons[sermons.length - 1]);
      }
    });
  }, []);

  // Helper to extract YouTube video ID from link
  function getYoutubeId(url: string) {
    const match = url.match(/(?:v=|youtu.be\/|embed\/)([\w-]{11})/);
    return match ? match[1] : '';
  }

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
                {latestSermon && latestSermon.link && getYoutubeId(latestSermon.link) ? (
                  <div style={{ position: 'relative', width: '80%', margin: '0 auto', paddingBottom: '45%' }}> {/* 16:9 aspect ratio, compact */}
                    <iframe
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      src={`https://www.youtube.com/embed/${getYoutubeId(latestSermon.link)}`}
                      title={latestSermon.title}
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                      className='w-full h-full rounded-lg shadow-md'
                    />
                  </div>
                ) : (
                  <div className='w-full h-[315px] bg-gray-300 rounded-lg flex items-center justify-center'>
                    <span className='text-gray-500'>No latest sermon available</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
