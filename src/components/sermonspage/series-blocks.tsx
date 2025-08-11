import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
        const sermonData = data.filter((s) => s.type === 'sermon' && s.series);
        
        // Group sermons by series
        const seriesMap = new Map<string, any[]>();
        sermonData.forEach(sermon => {
          if (sermon.series) {
            if (!seriesMap.has(sermon.series)) {
              seriesMap.set(sermon.series, []);
            }
            seriesMap.get(sermon.series)!.push(sermon);
          }
        });

        // Convert to series blocks (max 4)
        const blocks: SeriesBlock[] = Array.from(seriesMap.entries())
          .slice(0, 4)
          .map(([seriesName, sermons]) => ({
            name: seriesName,
            count: sermons.length,
            latestSermon: sermons[0] ? {
              title: sermons[0].title,
              link: sermons[0].link
            } : undefined
          }));

        setSeriesBlocks(blocks);
      })
      .catch(() => {
        setSeriesBlocks([]);
      });
  }, []);

  const handleSeriesClick = (seriesName: string) => {
    // Update URL with series parameter using Next.js router
    router.push(`/sermons?series=${encodeURIComponent(seriesName)}`);
    
    // Scroll to the sermons list section after a short delay
    setTimeout(() => {
      const sermonsSection = document.getElementById('sermons-list');
      if (sermonsSection) {
        sermonsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (seriesBlocks.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {seriesBlocks.map((series, index) => (
        <button
          key={index}
          onClick={() => handleSeriesClick(series.name)}
          className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer text-left"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-2">{series.name}</h3>
          <p className="text-sm text-gray-600 mb-3">{series.count} sermon{series.count !== 1 ? 's' : ''}</p>
          <div className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center">
            View Series
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      ))}
    </div>
  );
}
