/* eslint-disable @typescript-eslint/no-explicit-any */
import { Bounce, toast } from 'react-toastify';
import { create } from 'zustand';

import { fetchData } from '@/utils/fetch-api';
type VideoStore = {
  videos: any[];
  isLoading: boolean;
  nextPageToken: string;
  podcastId: string | undefined;
  fetchVideos: (podcastId: string) => Promise<void>;
  reset: () => void;
};

export const useVideoStore = create<VideoStore>((set, get) => ({
  videos: [],
  isLoading: false,
  nextPageToken: '',
  podcastId: '',
  fetchVideos: async (podcastId: string) => {
    set({ isLoading: true });

    try {
      const videoCount = process.env.NEXT_PUBLIC_NUMBER_OF_VIDEOS
        ? Number(process.env.NEXT_PUBLIC_NUMBER_OF_VIDEOS)
        : 3;
      const response = await fetchData(
        podcastId,
        videoCount,
        get().nextPageToken, // Access nextPageToken using get
        ''
      );

      set({
        videos: [...get().videos, ...response.items],
        nextPageToken: response.nextPageToken,
      });
    } catch (error) {
      // Handle error
      toast.error(`Oops, something went wrong! ${error}`, {
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
      set({ isLoading: false });
    }
  },
  reset: () => {
    set({ videos: [], isLoading: false, nextPageToken: '', podcastId: '' });
  },
}));
