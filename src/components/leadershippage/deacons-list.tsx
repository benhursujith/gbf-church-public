import Image from 'next/image';

import { SubHeading } from '@/components/layout/sub-heading';

import { leadershipDeacons, leadershipPageHero } from '@/constant/config';

export function DeaconsList() {
  return (
    <>
      {/* Sub-Heading */}
      <SubHeading
        title={leadershipPageHero.deaconsTitle}
        description={leadershipPageHero.deaconsDescription}
        color="black"
      />

      {/* Deacons */}
      <section className='relative z-10 overflow-hidden bg-gray-200 text-black'>
        <div className='wrapper relative z-20 animate-in effect-fade-in entered mb-5'>
          <div className='pt-16 md:pt-24 pb-16 md:pb-24'>
            <div className='-my-4  flex flex-wrap'>
              {leadershipDeacons.map((deacon, index) => (
                <div
                  key={index}
                  className='px-4 my-8 headline-defaults copy-defaults w-full md:flex-1 shadow-md mx-2 md:my-2 '
                >
                  <Image
                    data-loaded='false'
                    onLoad={(event) => {
                      event.currentTarget.setAttribute('data-loaded', 'true');
                    }}
                    className='w-full mb-8 ls-is-cached object-cover lazyloaded rounded-full data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
                    width='1560'
                    height='1000'
                    alt={deacon.name}
                    src={deacon.image}
                    sizes='100vw'
                  />
                  <p className='text-center font-bold font-sans text-xl'>
                    {deacon.name}
                  </p>
                  {deacon.description && (
                    <p className='text-center text-gray-600 font-medium mt-2'>
                      {deacon.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
