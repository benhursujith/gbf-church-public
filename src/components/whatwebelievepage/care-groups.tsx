/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import { useMemo, useState } from 'react';

import { SubHeading } from '@/components/layout/sub-heading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { careGroups, whatWeBelieveHero } from '@/constant/config';

export function CareGroups() {
  const tabList = useMemo(() => Object.keys(careGroups), []);
  const [activeTab, setActiveTab] = useState(tabList[0]);
  const activeTabIndex = useMemo(
    () => tabList.indexOf(activeTab),
    [activeTab, tabList]
  );

  const tabsContent = useMemo(
    () =>
      Object.values(tabList).map((tab: any, i) => (
        <TabsContent key={i} value={tabList[i]}>
          <div className='flex flex-col md:flex-row items-start justify-center gap-4 headline-defaults copy-defaults'>
            {/* Map Section */}
            <div className='w-full md:w-1/3 flex justify-center md:justify-end order-1 md:order-1'>
              <div className='decoupled-carousel bg-navy relative' style={{ width: '100%', maxWidth: '400px' }}>
                <iframe
                  src={careGroups[tab].mapEmbed}
                  width='100%'
                  height='320'
                  style={{ border: 0, borderRadius: '12px', minHeight: '320px', width: '100%' }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  title={careGroups[tab].title + ' Map'}
                />
              </div>
            </div>
            {/* Content Section */}
            <div className='w-full md:w-1/2 px-4 py-4 md:py-8 flex justify-start order-2 md:order-2'>
              {careGroups[tab].content}
            </div>
          </div>
        </TabsContent>
      )),
    [tabList]
  );

  return (
    <>
      {/* Sub-Heading */}
      <SubHeading
        title={whatWeBelieveHero.careGroupTitle}
        description={whatWeBelieveHero.careGroupDescription}
        color='white'
      />
      <section className='relative z-10 carousel-section overflow-hidden bg-white text-black'>
        <div className='wrapper relative z-20 animate-in effect-fade-in entered '>
          <div className='pt-16 md:pt-24 pb-16 md:pb-24'>
            <Tabs defaultValue={tabList[0]} onValueChange={setActiveTab}>
              {/* Tab buttons */}
              <div className='carousel-custom-nav flex justify-center mb-4 mt-4 px-2 md:px-4'>
                <TabsList className='w-full flex-row custom-caregroup-tabs'>
                  {tabList.map((tab: any, i: number) => (
                    <TabsTrigger
                      key={i}
                      value={tab}
                      className={`custom-caregroup-tab px-6 py-3 font-bold text-base transition-all duration-200
                        ${i === activeTabIndex ? 'selected' : ''}
                      `}
                    >
                      <span>{careGroups[tab].title}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Tab Content */}
              {tabsContent}
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}
