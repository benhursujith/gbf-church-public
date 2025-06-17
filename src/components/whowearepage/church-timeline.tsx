import { SubHeading } from '@/components/layout/sub-heading';

import { timelineItems, whoWeAreHero } from '@/constant/config';
import { Chrono } from '@/utils/react-chrono-client';

export function ChurchTimeline() {
  return (
    <>
      {/* Sub-Heading */}
      <SubHeading
        title={whoWeAreHero.timelineHeader}
        description={whoWeAreHero.timelineDescription}
      />

      {/* Timeline  */}
      <section className='relative z-10 overflow-hidden bg-gray-200 text-black'>
        <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
          <div className='pt-16 md:pt-36 pb-16 md:pb-36'>
            <div className='flex flex-wrap items-center '>
              {/* chrono */}
              <div className='w-full px-4 md:w-full'>
                <Chrono
                  focusActiveItemOnLoad
                  items={timelineItems}
                  mode='VERTICAL_ALTERNATING'
                  cardHeight={300}
                  cardWidth={650}
                  mediaHeight={300}
                  scrollable={true}
                  contentDetailsHeight={100}
                  fontSizes={{
                    title: '1rem',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
