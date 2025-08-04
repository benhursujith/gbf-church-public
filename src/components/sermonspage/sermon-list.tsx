/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { Bounce, toast } from 'react-toastify';

import { AlternateHeroHeading } from '@/components/layout/hero-heading';
import { SubHeading } from '@/components/layout/sub-heading';
import Loader from '@/components/ui/loader';
import { VideoModal } from '@/components/ui/video-modal';

import { sermonPageHero, sermonPageSermons } from '@/constant/config';
import { fetchData } from '@/utils/fetch-api';

interface Snippet {
  title: string;
  description: any;
  thumbnails: {
    maxres?: {
      url: any;
      width: number;
      height: number;
    };
    // Define other thumbnail sizes if needed
  };
  resourceId?: {
    videoId: string;
  };
  // Define other properties if needed
}

export function SermonList({ slug }: { slug: string }) {
  const sermonLink = `/sermon/${slug}`;

  const [videos, setVideos] = useState<any>([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { sermonId, sermonTitle, sermonDescription, sermonImage } =
    findSermonByLink(sermonLink);

  const fetchVideos = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetchData(sermonId, 3, nextPageToken, '');

      setVideos([...videos, ...response.items]);
      setNextPageToken(response.nextPageToken || ''); // Set empty string if no nextPageToken
    } catch (error) {
      toast.error(`Error fetching videos: ${error}`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce,
      });
    } finally {
      setIsLoading(false);
    }
  }, [nextPageToken, slug, videos]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleLoadMore = () => {
    fetchVideos();
  };

  if (videos.length === 0) return <Loader />;

  return (
    <>
      {/* Header */}
      <AlternateHeroHeading
        data={{
          title: sermonTitle,
          description: sermonDescription,
          image: sermonImage,
        }}
      />

      {/* Sub-Heading */}
      <SubHeading
        title={sermonPageHero.sermonAPITitle}
        description={sermonPageHero.sermonAPIDescription}
        color='black'
      />
      <section className='relative z-10 overflow-hidden bg-black text-white'>
        <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
          <div className='pt-3 md:pt-0 pb-16 md:pb-24'>
            <div className='flex flex-wrap headline-defaults copy-defaults'>
              <div className='load-more-wrapper no-request'>
                {/* sermons */}
                <div className='fade-hover-area'>
                  <div className='flex flex-wrap load-more-container resource-content'>
                    {videos.map(
                      ({
                        id,
                        snippet = {
                          title: '',
                          description: '',
                          thumbnails: {
                            maxres: {
                              url: '',
                              width: 0,
                              height: 0,
                            },
                          },
                        },
                      }: {
                        id: number;
                        snippet: Snippet;
                      }) => {
                        const {
                          title,
                          description,
                          thumbnails = {},
                          resourceId = {
                            videoId: '',
                          },
                        } = snippet;
                        const { maxres } = thumbnails;

                        // Calculate title, description, scripture and notes
                        const desc = description.substring(
                          0,
                          description.indexOf('Series:')
                        );
                        const sp = description.split('Speaker:').pop();
                        const speaker = sp?.split('Scripture')[0].trim();
                        const scripture = description
                          .split('Scripture:')[1]
                          .split('Sermon:')[0]
                          .trim()
                          .split('\n')[0]
                          .trim();

                        const notes = description.includes('Notes : ')
                          ? description.split('Notes : ')[1].trim()
                          : ''; // If 'Notes : ' is not found, return an empty string

                        return (
                          <div
                            key={id}
                            className='w-full md:w-1/3 px-4 my-8 md:my-12 animate-in effect-fade-in entered'
                          >
                            <div
                              className='group w-full h-full flex flex-col headline-defaults copy-defaults fade-hover-area-trigger'
                              //href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                            >
                              <Image
                                data-loaded='false'
                                onLoad={(event) => {
                                  event.currentTarget.setAttribute(
                                    'data-loaded',
                                    'true'
                                  );
                                }}
                                className='data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10 w-full mb-6 ls-is-cached lazyloaded'
                                width='1200'
                                height='750'
                                alt={title}
                                src={maxres?.url}
                                sizes='100vw'
                              />

                              <h3>{title}</h3>
                              <div className='max-w-2xl mb-4 md:text-lg'>
                                <p className='subhead'>
                                  Speaker : {speaker} <br /> Scripture :{' '}
                                  {scripture} <br />
                                  {notes && (
                                    <>
                                      Notes :{' '}
                                      <Link
                                        download='notes'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        href={notes}
                                        className='underline'
                                      >
                                        Download
                                      </Link>
                                    </>
                                  )}
                                </p>
                                <p>{desc}</p>
                              </div>
                              <div className='border-t border-gray-600 flex items-center mt-auto mb-0 py-2'>
                                <VideoModal video={resourceId.videoId} />
                                <ArrowRight className='w-4 h-4 ml-auto mr-2 group-hover:mr-0 transition-margin' />
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
                {/* Load More */}
                <div className='flex flex-wrap'>
                  <div className='w-full px-4 my-8 text-center copy-defaults'>
                    <p>
                      {nextPageToken && !isLoading && (
                        <span
                          className='btn cursor-pointer load-more-trigger'
                          onClick={handleLoadMore}
                        >
                          Load More
                        </span>
                      )}
                    </p>
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

function findSermonByLink(link: string) {
  const sermon = sermonPageSermons.find((sermon) => sermon.link === link);
  if (sermon) {
    const {
      id: sermonId,
      title: sermonTitle,
      description: sermonDescription,
      image: sermonImage,
    } = sermon;
    return { sermonId, sermonTitle, sermonDescription, sermonImage };
  } else {
    return {
      sermonId: '',
      sermonTitle: '',
      sermonDescription: '',
      sermonImage: '',
    };
  }
}
