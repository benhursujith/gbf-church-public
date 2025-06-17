/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from 'react';
import { RefTagger } from 'react-reftagger';

import { SubHeading } from '@/components/layout/sub-heading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { ourBeliefs, whatWeBelieveHero } from '@/constant/config';

const customStyles = {
  heading: {
    backgroundColor: '#f56d6e',
    color: '#ffffff',
    fontSize: '16px',
  },

  body: {
    color: '#ffffff !important',
    backgroundColor: '#2D71EA',
    moreLink: {
      color: '#ffffff',
    },
  },
};

export function WhatWeBelieve() {
  const tabList = useMemo(() => Object.keys(ourBeliefs), []);
  const [activeTab, setActiveTab] = useState(tabList[0]);
  const activeTabIndex = useMemo(
    () => tabList.indexOf(activeTab),
    [activeTab, tabList]
  );

  const tabsContent = useMemo(
    () =>
      Object.values(tabList).map((tab: any, i) => (
        <TabsContent key={i} value={tabList[i]}>
          <div className='flex flex-wrap items-center '>
            {/* TC - Left Outer Text */}
            <div className='w-full px-4 md:w-1/2 xl:w-11/24'>
              <div className='headline-defaults copy-defaults py-4 md:py-8 2xl:pr-6 '>
                <p className='subhead '>Our Beliefs</p>
                <h2 className=' '>
                  <span className='my-4 md:my-8'>{ourBeliefs[tab].title}</span>
                </h2>
                <div className='rich-text md:my-4 py-px max-w-4xl lg:pr-8 xl:pr-16 '>
                  {ourBeliefs[tab].content}
                </div>
              </div>
            </div>
            {/* RIght Video */}
            <div className='w-full px-4 md:w-11/24 md:mr-1/24 md:ml-auto'>
              <div className=''>
                <video
                  className='video-embed my-4 relative w-full pointer-events-none fade-on-load focus:outline-none ready'
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                >
                  <source type='video/mp4' src={ourBeliefs[tab].video} />
                </video>
              </div>
            </div>
          </div>
        </TabsContent>
      )),
    [tabList]
  );
  return (
    <>
      {/* Scripture References */}
      <RefTagger
        tooltipStyle='dark'
        customStyle={customStyles}
        bibleVersion='ESV'
      />
      {/* Sub-Heading */}
      <SubHeading
        title={whatWeBelieveHero.whatWeBelieveTitle}
        description={whatWeBelieveHero.whatWeBelieveDescription}
        color='black'
      />
      <section className='relative z-10 overflow-hidden bg-black text-white'>
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
                      <span> {ourBeliefs[tab].title}</span>
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
