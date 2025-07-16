import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { SubHeading } from '@/components/layout/sub-heading';
import { sermonPageHero } from '@/constant/config';
import { fetchSermonsFromSheet } from '@/utils/fetch-sermons-from-sheet';

const PAGE_SIZE = 9;

export function SermonsList() {
  const [sermons, setSermons] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [series, setSeries] = useState('All');
  const [page, setPage] = useState(0);

  // Read series from query string on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const seriesParam = params.get('series');
      if (seriesParam) setSeries(seriesParam);
    }
  }, []);

  useEffect(() => {
    fetchSermonsFromSheet()
      .then((data) => {
        setSermons(data.filter((s) => s.type === 'sermon'));
      })
      .catch(() => {
        setSermons([]);
      });
  }, []);

  // Get unique series values
  const allSeries = Array.from(
    new Set(sermons.map((s) => s.series).filter(Boolean))
  );

  // Filter sermons by search and series
  const filteredSermons = sermons.filter((sermon: any) => {
    const q = search.toLowerCase();
    const matchesSearch =
      sermon.title?.toLowerCase().includes(q) ||
      sermon.description?.toLowerCase().includes(q);
    const matchesSeries =
      series === 'All' || !series ? true : sermon.series === series;
    return matchesSearch && matchesSeries;
  });

  // Pagination
  const totalPages = Math.ceil(filteredSermons.length / PAGE_SIZE);
  const paginatedSermons = filteredSermons.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE
  );

  // Reset to first page if search or series changes
  useEffect(() => {
    setPage(0);
  }, [search, series]);

  // Show message if no sermons
  if (!filteredSermons.length) {
    return (
      <>
        <SubHeading
          title={sermonPageHero.sermonSeriesTitle}
          description={sermonPageHero.sermonSeriesDescription}
          color='black'
        />
        <div className='max-w-2xl mx-auto my-6 flex flex-col md:flex-row md:items-center gap-4'>
          <input
            type='text'
            placeholder='Search sermons...'
            className='flex-1 px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black shadow-sm transition'
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <select
            className='px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition'
            value={series}
            onChange={e => setSeries(e.target.value)}
          >
            <option value='All'>All Series</option>
            {allSeries.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className='py-12'><span className='block text-center'>No sermons found.</span></div>
      </>
    );
  }

  return (
    <>
      {/* Sub-Heading */}
      <SubHeading
        title={sermonPageHero.sermonSeriesTitle}
        description={sermonPageHero.sermonSeriesDescription}
        color='black'
      />
      <div className='max-w-2xl mx-auto my-6 flex flex-col md:flex-row md:items-center gap-4'>
        <input
          type='text'
          placeholder='Search sermons...'
          className='flex-1 px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black shadow-sm transition'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className='px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition'
          value={series}
          onChange={e => setSeries(e.target.value)}
        >
          <option value='All'>All Series</option>
          {allSeries.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <section className='relative z-10 overflow-hidden bg-black text-white'>
        <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
          <div className='pt-8 md:pt-12 pb-8 md:pb-12'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
              {paginatedSermons.map((sermon, index) => (
                <div
                  key={index}
                  className='flex flex-col animate-in effect-fade-in entered bg-gray-900 rounded-lg shadow-md p-4 h-full'
                >
                  {/* Embed YouTube video */}
                  <div className='w-full mb-4 aspect-video rounded overflow-hidden'>
                    <iframe
                      className='w-full h-full rounded-lg'
                      src={getYouTubeEmbedUrl(sermon.link)}
                      title={sermon.title}
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </div>
                  <h3 className='mt-2 mb-1 text-lg font-bold'>{sermon.title}</h3>
                  <div className='max-w-2xl mb-4 md:text-lg'>
                    <p className='line-clamp-2'>{sermon.description}</p>
                  </div>
                  {sermon.series && (
                    <span className='inline-block mt-auto text-xs text-blue-200 bg-blue-900 rounded px-2 py-1'>{sermon.series}</span>
                  )}
                </div>
              ))}
            </div>
            {/* Slider controls */}
            {totalPages > 1 && (
              <div className='flex justify-center items-center gap-2 mt-8'>
                <button
                  className='px-3 py-1 rounded bg-gray-800 text-white disabled:opacity-40 disabled:cursor-not-allowed transition'
                  onClick={() => setPage(page - 1)}
                  disabled={page === 0}
                >
                  &larr;
                </button>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition ${i === page ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
                    onClick={() => setPage(i)}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  className='px-3 py-1 rounded bg-gray-800 text-white disabled:opacity-40 disabled:cursor-not-allowed transition'
                  onClick={() => setPage(page + 1)}
                  disabled={page === totalPages - 1}
                >
                  &rarr;
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <style jsx global>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </>
  );
}

// Helper function to get YouTube embed URL from a standard watch URL
function getYouTubeEmbedUrl(url: string) {
  // Only support standard watch URLs
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([\w-]{11})/);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }
  return '';
}
