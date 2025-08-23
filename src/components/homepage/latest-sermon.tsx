import Link from 'next/link';
import { useEffect, useState } from 'react';

import { homepageLatestSermon } from '@/constant/config';
import { fetchSermonsFromSheet } from '@/utils/fetch-sermons-from-sheet';

export function LatestSermon() {
  const [latestSermon, setLatestSermon] = useState<any>(null);

  useEffect(() => {
    fetchSermonsFromSheet().then(items => {
      // Filter for sermons only
      const sermons = items.filter((item: any) => item.type === 'sermon');
      
      // Sort in reverse order (latest first - last entry in sheet)
      const sortedSermons = sermons.reverse();
      
      if (sortedSermons.length > 0) {
        setLatestSermon(sortedSermons[0]); // First item after reverse sort is the latest
      }
    });
  }, []);

  // Helper to extract YouTube video ID from link
  function getYoutubeId(url: string) {
    let videoId = null;
    
    // Try to match standard YouTube watch URL
    const watchMatch = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([\w-]{11})/);
    if (watchMatch && watchMatch[1]) {
      videoId = watchMatch[1];
    }
    
    // Try to match shortened youtu.be URL
    const shortMatch = url.match(/(?:https?:\/\/)?(?:www\.)?youtu\.be\/([\w-]{11})/);
    if (shortMatch && shortMatch[1]) {
      videoId = shortMatch[1];
    }
    
    return videoId || '';
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
