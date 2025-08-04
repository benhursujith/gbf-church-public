import { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
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
        <div className="sermon-filter-container">
          <div className="search-box search-underline">
            <Search className="icon" size={20} />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search sermons..."
              className="search-input-underline"
              style={{ boxShadow: 'none' }}
            />
          </div>
          <div className="dropdown-box dropdown-navbar-style">
            <div className="dropdown-wrapper navbar-dropdown">
              <select value={series} onChange={e => setSeries(e.target.value)} className="dropdown-select-navbar" style={{ boxShadow: 'none' }}>
                <option value="All">All Series</option>
                {allSeries.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <span className="chevron">▼</span>
            </div>
          </div>
        </div>
        <div className='py-12'><span className='block text-center'>No sermons found.</span></div>
        <style jsx global>{`
          .sermon-filter-container {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            margin-top: 2rem;
            justify-content: center;
            align-items: center;
          }
          .search-box {
            display: flex;
            align-items: center;
            background: none;
            border-radius: 0;
            border: none;
            box-shadow: none;
            padding: 0;
          }
          .search-underline {
            border-bottom: 2px solid #aaa !important;
            padding-bottom: 0.2rem;
            width: 340px;
            background: none;
          }
          .search-input-underline {
            background: transparent;
            border: none;
            color: #fff;
            font-size: 1.2rem;
            margin-left: 0.5rem;
            outline: none;
            width: 300px;
            padding: 0.2rem 0;
            box-shadow: none !important;
          }
          .search-input-underline:focus,
          .search-input-underline:active,
          .search-input-underline:focus-visible,
          .search-input-underline:focus-within,
          input[type="text"]:focus,
          input[type="text"]:focus-visible,
          input[type="text"]:active,
          input[type="text"]:focus-within {
            outline: none !important;
            box-shadow: none !important;
            border: none !important;
            background: transparent !important;
            border-color: #aaa !important;
            appearance: none !important;
            caret-color: #fff;
          }
          input[type="text"]::-webkit-input-placeholder { color: #aaa; }
          input[type="text"]::-moz-placeholder { color: #aaa; }
          input[type="text"]:-ms-input-placeholder { color: #aaa; }
          input[type="text"]::placeholder { color: #aaa; }
          .dropdown-box {
            display: flex;
            align-items: center;
            background: none;
            border-radius: 0;
            border: none;
            box-shadow: none;
            padding: 0;
          }
          .dropdown-navbar-style .dropdown-wrapper.navbar-dropdown {
            position: relative;
            display: flex;
            align-items: center;
            background: rgba(24,24,24,0.85);
            border-radius: 8px;
            border: 1.5px solid #aaa;
            padding: 0.2rem 1.5rem 0.2rem 0.8rem;
            min-width: 180px;
            box-shadow: none;
          }
          .dropdown-navbar-style .dropdown-select-navbar {
            background: transparent;
            border: none;
            color: #fff;
            font-size: 1rem;
            outline: none;
            width: 100%;
            appearance: none;
            padding-right: 1.5rem;
            cursor: pointer;
            box-shadow: none !important;
            font-family: inherit;
            font-weight: 500;
            letter-spacing: 0.01em;
          }
          .dropdown-navbar-style .dropdown-select-navbar option {
            background: rgba(24,24,24,0.95);
            color: #fff;
            font-family: inherit;
            font-size: 1rem;
            border-radius: 8px;
            padding: 0.5rem 1rem;
          }
          .dropdown-navbar-style .chevron {
            position: absolute;
            right: 0.7rem;
            pointer-events: none;
            color: #aaa;
            font-size: 1rem;
          }
          .icon {
            color: #aaa;
          }
          .dropdown-navbar-style .dropdown-wrapper:focus-within,
          .dropdown-navbar-style .dropdown-wrapper:hover {
            border-color: #aaa;
            box-shadow: none;
          }
          .dropdown-navbar-style .dropdown-select-navbar:focus,
          .dropdown-navbar-style .dropdown-select-navbar:active {
            color: #fff;
            outline: none !important;
            box-shadow: none !important;
            border: none !important;
          }
        `}</style>
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
      <div className="sermon-filter-container">
        <div className="search-box search-underline">
          <Search className="icon" size={20} />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search sermons..."
            className="search-input-underline"
            style={{ boxShadow: 'none' }}
          />
        </div>
        <div className="dropdown-box dropdown-navbar-style">
          <div className="dropdown-wrapper navbar-dropdown">
            <select value={series} onChange={e => setSeries(e.target.value)} className="dropdown-select-navbar" style={{ boxShadow: 'none' }}>
              <option value="All">All Series</option>
              {allSeries.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <span className="chevron">▼</span>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .sermon-filter-container {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-top: 2rem;
          justify-content: center;
          align-items: center;
        }
        .search-box {
          display: flex;
          align-items: center;
          background: none;
          border-radius: 0;
          border: none;
          box-shadow: none;
          padding: 0;
        }
        .search-underline {
          border-bottom: 2px solid #aaa !important;
          padding-bottom: 0.2rem;
          width: 340px;
          background: none;
        }
        .search-input-underline {
          background: transparent;
          border: none;
          color: #fff;
          font-size: 1.2rem;
          margin-left: 0.5rem;
          outline: none;
          width: 300px;
          padding: 0.2rem 0;
        }
        .search-input-underline::placeholder {
          color: #aaa;
          opacity: 1;
        }
        .dropdown-box {
          display: flex;
          align-items: center;
          background: none;
          border-radius: 0;
          border: none;
          box-shadow: none;
          padding: 0;
        }
        .dropdown-navbar-style .dropdown-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          background: #181818;
          border-radius: 8px;
          border: 1px solid #222;
          padding: 0.2rem 1.5rem 0.2rem 0.8rem;
          min-width: 180px;
        }
        .dropdown-navbar-style .dropdown-select-navbar {
          background: transparent;
          border: none;
          color: #fff;
          font-size: 1rem;
          outline: none;
          width: 100%;
          appearance: none;
          padding-right: 1.5rem;
          cursor: pointer;
        }
        .dropdown-navbar-style .dropdown-select-navbar option {
          background: #222;
          color: #fff;
        }
        .dropdown-navbar-style .chevron {
          position: absolute;
          right: 0.7rem;
          pointer-events: none;
          color: #aaa;
          font-size: 1rem;
        }
        .icon {
          color: #aaa;
        }
        .dropdown-navbar-style .dropdown-wrapper:focus-within,
        .dropdown-navbar-style .dropdown-wrapper:hover {
          border-color: #222;
        }
        .dropdown-navbar-style .dropdown-select-navbar:focus {
          color: #fff;
          outline: none;
          box-shadow: none !important;
        }
      `}</style>
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
