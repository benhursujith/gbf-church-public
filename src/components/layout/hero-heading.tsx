/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';

interface HeroData {
  header: string;
  title: string;
  subtitle: string;
  description: string;
  image: any;
}

interface HeroProps {
  data: HeroData;
}

interface AlternativeHeroData {
  title: string;
  description: string;
  image: any;
}

interface AlternativeHeroProps {
  data: AlternativeHeroData;
}

export function HeroHeading({ data }: HeroProps) {
  const { header, title, subtitle, description, image } = data;
  return (
    <>
      <section className='relative flex items-center pt-8 md:pt-16'>
        <div className='wrapper py-12 md:py-24 lg:py-32'>
          <div className='flex flex-wrap copy-defaults relative '>
            <div className='w-full md:w-3/4 xl:w-1/2 px-4 z-20 headline-defaults copy-defaults relative md:absolute md:vertical-center '>
              <p className='subhead'>{header}</p>
              <h1 className=''>
                {title}
                <br />
                {subtitle}
              </h1>
              <div className='my-8 text-xl  max-w-lg'>
                <p>{description}</p>
              </div>
            </div>
            <div
              className='relative z-10 w-full md:w-3/4 ml-auto mr-0 md:mr-4 rellax rellax-reverse'
              style={{ transform: 'translate3d(0px, -33px, 0px)' }}
            >
              <Image
                data-loaded='false'
                onLoad={(event) => {
                  event.currentTarget.setAttribute('data-loaded', 'true');
                }}
                className='relative lazyloaded data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
                width='1300'
                height='745'
                alt={title}
                src={image}
                sizes='100vw'
              />
            </div>
          </div>
        </div>
      </section>
      <div className='anchor-link'>
        <span id='next-corner'></span>
      </div>
    </>
  );
}

export function AlternateHeroHeading({ data }: AlternativeHeroProps) {
  const { title, description, image } = data;

  return (
    <section className='relative flex items-center pt-8 md:pt-16'>
      <div className='wrapper py-12 md:py-24 lg:py-32'>
        <div className='flex flex-wrap copy-defaults relative '>
          <div className='w-full px-4 headline-defaults copy-defaults text-center'>
            {/* Image */}
            <div
              className='relative z-10 w-full md:w-3/4 my-8 rellax rellax-reverse mx-auto'
              style={{
                transform:
                  'translate3d(0px, 0px, 0px) translate3d(0px, 0px, 0px)',
              }}
            >
              <Image
                data-loaded='false'
                onLoad={(event) => {
                  event.currentTarget.setAttribute('data-loaded', 'true');
                }}
                className='relative data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
                src={image}
                width='1984'
                height='380'
                alt={title}
              />
            </div>
            <div className='my-8 md:my-16 text-base sm:text-lg md:text-xl max-w-2xl mx-auto'>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
