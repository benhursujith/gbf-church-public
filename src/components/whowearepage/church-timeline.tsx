import { SubHeading } from '@/components/layout/sub-heading';

import { whoWeAreHero } from '@/constant/config';

export function ChurchTimeline() {
  return (
    <>
      {/* Sub-Heading */}
      <SubHeading
        title="Our Story"
        description={whoWeAreHero.timelineDescription}
        color="white"
      />

      {/* Story Content */}
      <section className='relative z-10 overflow-hidden bg-white text-black'>
        <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
          <div className='pt-16 md:pt-36 pb-16 md:pb-36'>
            <div className='max-w-4xl mx-auto px-4'>
              <div className='prose prose-lg max-w-none'>
                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                  Our origin story goes back to the year 2002 when a few like-minded believers were burdened for professionals and students in Bangalore who needed a church where they could grow in their faith and where they felt comfortable bringing their friends.
                </p>
                
                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                  This desire led to the formation of Airport Road Fellowship (ARF) which met on Old Airport Road in the Domlur area. God blessed the church and 2009 saw a move to a larger space on St. Marks Road and a change in name to Calvary Bible Fellowship. Further blessing and growth led to yet another move to the Ulsoor area.
                </p>
                
                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                  By 2021 CBF had grown substantially and the church began praying about planting a new gathering in the south side of Bangalore. In answer to these prayers, Grace Bible Fellowship was established in January 2023, meeting on the campus of Christ University in the SG Palya area. The initial launch team for GBF consisted of 3 elders and some 70 members living in South Bangalore.
                </p>
                
                <p className='text-lg text-gray-700 leading-relaxed'>
                  Today, GBF is a growing and diverse congregation of all ages and backgrounds. In addition to a Sunday worship meeting at the DVK Annex on the campus of Christ University, GBF conducts regular Bible studies, prayer meetings and a number of care cells across the city during the week to help believers grow spiritually and build deep and lasting relationships with each other. The church is also involved with missions and social outreach in Bangalore and across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
