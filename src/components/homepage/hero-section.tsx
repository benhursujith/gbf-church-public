import { homepageHero } from '@/constant/config';

export function HeroSection() {
  return (
    <section className='relative flex items-center overflow-hidden pt-16 md:pt-32 lg:min-h-hero'>
      <div className='wrapper py-12 md:py-24 lg:py-32'>
        <div className='flex flex-wrap copy-defaults  '>
          <div className='absolute z-20 w-full h-full top-0 left-0 bg-black opacity-50' />
          {/* Text content */}
          <div className='w-full md:w-3/4 xl:w-1/2 px-4 z-20 headline-defaults copy-defaults relative '>
            <h1 className=''>
              <span className='text-sm font-medium uppercase'>
                {homepageHero.header}
              </span>
              <br />
              {homepageHero.title}
            </h1>
            <div className='my-8 text-xl  max-w-lg'>
              <p>{homepageHero.description}</p>
            </div>
          </div>
          <div
            className='absolute z-10 w-full h-full top-0 left-0 object-cover rellax'
            style={{
              transform:
                'translate3d(0px, 0px, 0px) translate3d(0px, 0px, 0px)',
            }}
          >
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              playsInline={true}
              className='video-embed fade-on-load w-full pointer-events-none h-full absolute top-0 left-0 object-cover ready'
            >
              <source type='video/mp4' src={homepageHero.video} />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
