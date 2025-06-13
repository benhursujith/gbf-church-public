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
          <div className='flex flex-wrap items-center headline-defaults copy-defaults '>
            <div className='w-full md:w-1/2'>
              <div className='decoupled-carousel bg-navy relative w-full'>
                <Image
                  data-loaded='false'
                  onLoad={(event) => {
                    event.currentTarget.setAttribute('data-loaded', 'true');
                  }}
                  className='w-full lazyloaded data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
                  width='1840'
                  height='1740'
                  alt={careGroups[tab].title}
                  src={careGroups[tab].image}
                  sizes='100vw'
                />
              </div>
            </div>
            <div className='w-full md:w-1/2 px-8 lg:px-16 xl:px-32 py-8'>
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
      <section className='relative z-10 carousel-section overflow-hidden bg-gray-200 text-black'>
        <div className='wrapper relative z-20 animate-in effect-fade-in entered '>
          <div className='pt-16 md:pt-24 pb-16 md:pb-24'>
            <Tabs defaultValue={tabList[0]} onValueChange={setActiveTab}>
              {/* Tab buttons */}
              <div className='carousel-custom-nav flex justify-center  mb-[8rem] mt-[8rem] px-4'>
                <TabsList className='flex-col md:flex-row'>
                  {tabList.map((tab: any, i: number) => (
                    <TabsTrigger
                      key={i}
                      value={tab}
                      className={`btn cursor-pointer -ml-px
                          
                          ${i === activeTabIndex ? ' is-selected' : ' '}  `}
                    >
                      <span> {careGroups[tab].title}</span>
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
