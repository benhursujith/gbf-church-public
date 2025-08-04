/* eslint-disable @typescript-eslint/no-explicit-any */
import { Bounce, toast } from 'react-toastify';
import { create } from 'zustand';

import { fetchData } from '@/utils/fetch-api';
type SermonStore = {
  sermon: any[];
  isLoading: boolean;
  fetchSermon: () => Promise<void>;
};

export const useSermonStore = create<SermonStore>((set) => ({
  sermon: [],
  isLoading: false,
  fetchSermon: async () => {
    set({ isLoading: true });
    try {
      const playlistId = process.env.NEXT_PUBLIC_SUNDAY_SERMON_ID;
      const response = await fetchData(playlistId, 1, '', 'date');

      set({ sermon: [response.items] });
    } catch (error) {
      toast.error(`Error fetching sermon: ${error}`, {
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
}));
