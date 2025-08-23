import { useRouter } from 'next/navigation';
import { useEffect,useState } from 'react';

import { fetchSermonsFromSheet } from '@/utils/fetch-sermons-from-sheet';

interface SeriesBlock {
  name: string;
  count: number;
  latestSermon?: {
    title: string;
    link: string;
  };
}

export function SeriesBlocks() {
  const [seriesBlocks, setSeriesBlocks] = useState<SeriesBlock[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchSermonsFromSheet()
      .then((data) => {
        // Filter for sermons only
        const sermonData = data.filter((s: any) => s.type === 'sermon' && s.series);
        
        // Group sermons by series
        const seriesMap = new Map<string, any[]>();
        sermonData.forEach((sermon: any) => {
          if (sermon.series) {
            if (!seriesMap.has(sermon.series)) {
              seriesMap.set(sermon.series, []);
            }
            seriesMap.get(sermon.series)!.push(sermon);
          }
        });

        // Convert to series blocks (max 4) - sort sermons in reverse order within each series
        const blocks: SeriesBlock[] = Array.from(seriesMap.entries())
          .slice(0, 4)
          .map(([seriesName, sermons]) => {
            // Sort sermons in reverse order (latest first)
            const sortedSermons = sermons.reverse();
            return {
              name: seriesName,
              count: sortedSermons.length,
              latestSermon: sortedSermons[0] ? {
                title: sortedSermons[0].title,
                link: sortedSermons[0].link
              } : undefined
            };
          });

        setSeriesBlocks(blocks);
      })
      .catch(() => {
        setSeriesBlocks([]);
      });
  }, []);

  const handleSeriesClick = (seriesName: string) => {
    // Update URL with series parameter using Next.js router without scrolling
    router.replace(`/sermons?series=${encodeURIComponent(seriesName)}`, { scroll: false });
  };

  if (seriesBlocks.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {seriesBlocks.map((series, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer text-left relative min-h-[160px]"
        >
          <div onClick={() => handleSeriesClick(series.name)} className="pb-12">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-light text-gray-900 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>{series.name}</h3>
              {series.name === 'Genesis' && (
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                  Ongoing
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-4 font-normal" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{series.count} sermon{series.count !== 1 ? 's' : ''}</p>
            <div className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center">
              View Series
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          
          {/* Watch Now CTA Text - Bottom Right Corner */}
          <button
            onClick={() => handleSeriesClick(series.name)}
            className="absolute bottom-4 right-4 text-gray-800 hover:text-black text-sm transition-colors duration-200 font-medium inline-flex items-center gap-1"
          >
            Watch now
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
