/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { PlayCircle } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { SubHeading } from '@/components/layout/sub-heading';
import Loader from '@/components/ui/loader';

import { sermonPageHero } from '@/constant/config';
import { useSermonStore } from '@/utils/sermonStore';

export function LatestSermon() {
  const { sermon, isLoading, fetchSermon } = useSermonStore();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    fetchSermon();
  }, []);

  if (
    isLoading ||
    !Array.isArray(sermon) ||
    sermon.length === 0 ||
    !Array.isArray(sermon[0]) ||
    sermon[0].length === 0 ||
    !sermon[0][0]
  ) return null; // No loader, just render nothing

  const { snippet } = sermon[0][0];
  const imageUrl = snippet?.thumbnails?.standard?.url;

  return (
    <>
      {/* Sub-Heading */}
      <SubHeading
        title={sermonPageHero.latestSermonTitle}
        description={sermonPageHero.latestSermonDescription}
        color='black'
      />
      <section className='relative z-10 overflow-hidden bg-black text-white'>
        <div className='wrapper relative z-20'>
          <div className='pt-6 md:pt-10 pb-6 md:pb-4'>
            <div className='flex flex-wrap items-center'>
              <div className='w-full px-4 md:w-full'>
                <div className='w-full flex flex-wrap'>
                  <div className='w-full xl:w-10/12 mx-auto'>
                    <div className='relative video-overlay-container min-h-[200px]'>
                      <div
                        id='latest-sermon'
                        className={`absolute z-20 top-0 left-0 w-full h-full flex items-center justify-center no-child-pointers cursor-pointer group video-overlay ${isPlaying ? 'disabled' : ''}`}
                        onClick={handlePlayClick}
                      >
                        <PlayCircle className='relative z-30 w-20 h-20 md:w-28 md:h-28 transform scale-90 group-hover:scale-100 transition-transform duration-500' />
                        <div className='absolute top-0 left-0 w-full h-full z-20 bg-black opacity-50 group-hover:opacity-25 transition-opacity duration-500' />
                        {/* Only render image if present */}
                        {imageUrl && (
                          <Image
                            data-loaded='false'
                            onLoad={(event) => {
                              event.currentTarget.setAttribute('data-loaded', 'true');
                            }}
                            className='absolute z-10 top-0 left-0 w-full h-full object-cover ls-is-cached lazyloaded data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
                            width='2518'
                            height='1416'
                            alt={sermonPageHero.latestSermonTitle}
                            src={imageUrl}
                            sizes='100vw'
                          />
                        )}
                      </div>
                      <div className='relative z-10 aspect-video'>
                        <iframe
                          className={`video-embed my-4 relative w-full h-full has-overlay focus:outline-none ${isPlaying ? 'autoplay' : ''}`}
                          src={`https://www.youtube.com/embed/${snippet.resourceId.videoId}${isPlaying ? '?autoplay=1&mute=1' : ''}`}
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                          allowFullScreen
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
    </>
  );
}
