/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { Bounce, toast } from 'react-toastify';

import { AlternateHeroHeading } from '@/components/layout/hero-heading';
import { SubHeading } from '@/components/layout/sub-heading';
import Loader from '@/components/ui/loader';
import { VideoModal } from '@/components/ui/video-modal';

import { homepagePodcasts, podcastPageHero } from '@/constant/config';
import { fetchData } from '@/utils/fetch-api';

interface Snippet {
  title: string;
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

export function PodcastList({ slug }: { slug: string }) {
  const podcastLink = `/podcast/${slug}`;
  const [videos, setVideos] = useState<any>([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { podcastId, podcastTitle, podcastDescription, podcastImage } =
    findPodcastByLink(podcastLink);

  const fetchVideos = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetchData(podcastId, 3, nextPageToken, '');

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
          title: podcastTitle,
          description: podcastDescription,
          image: podcastImage,
        }}
      />
      {/* Sub-Heading */}
      <SubHeading
        title={podcastPageHero.podcastAPITitle}
        description={podcastPageHero.podcastAPIDescription}
        color='black'
      />
      <section className='relative z-10 overflow-hidden bg-black text-white'>
        <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
          <div className='pt-16 md:pt-24 pb-16 md:pb-24'>
            <div className='flex flex-wrap headline-defaults copy-defaults'>
              <div className='load-more-wrapper no-request'>
                {/* podcasts */}
                <div className='fade-hover-area'>
                  <div className='flex flex-wrap load-more-container resource-content'>
                    {videos.map(
                      ({
                        id,
                        snippet = {
                          title: '',
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
                          thumbnails = {},
                          resourceId = {
                            videoId: '',
                          },
                        } = snippet;
                        const { maxres } = thumbnails;

                        return (
                          <div
                            key={id}
                            className='w-full md:w-1/3 px-4 my-8 md:my-12 animate-in effect-fade-in entered'
                          >
                            <div className='group w-full h-full flex flex-col headline-defaults copy-defaults fade-hover-area-trigger'>
                              <Image
                                data-loaded='false'
                                onLoad={(event) => {
                                  event.currentTarget.setAttribute(
                                    'data-loaded',
                                    'true'
                                  );
                                }}
                                className='w-full mb-6 ls-is-cached lazyloaded data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
                                width='1200'
                                height='750'
                                alt={title}
                                src={maxres?.url}
                                sizes='100vw'
                              />

                              <p className='subhead'>PODCAST</p>
                              <h3>{title}</h3>
                              <div className='max-w-2xl mb-4 md:text-lg'>
                                <p>{podcastDescription}</p>
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
function findPodcastByLink(link: string) {
  const podcast = homepagePodcasts.find((podcast) => podcast.link === link);
  if (podcast) {
    const {
      id: podcastId,
      title: podcastTitle,
      description: podcastDescription,
      image: podcastImage,
    } = podcast;
    return { podcastId, podcastTitle, podcastDescription, podcastImage };
  } else {
    return {
      podcastId: '',
      podcastTitle: '',
      podcastDescription: '',
      podcastImage: '',
    };
  }
}
