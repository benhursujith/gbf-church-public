interface SubHeadingProps {
  title: string;
  description: string;
  color?: string;
}

export function SubHeading({
  title,
  description,
  color = 'white',
}: SubHeadingProps) {
  return (
    <section
      className={`relative z-10 overflow-hidden 
    ${color === 'black' ? 'bg-black text-white' : color === 'white' ? 'bg-white text-black' : 'bg-gray-200 text-black'}
    `}
    >
      <div className='wrapper py-12 md:py-24 lg:pt-32 lg:pb-0'>
        <div className='flex flex-wrap copy-defaults  '>
          <div className='w-full md:w-3/4 xl:w-9/12 px-4 z-20 headline-defaults copy-defaults relative text-center mx-auto '>
            <h1 className='mx-auto'>{title}</h1>
            <div className='my-8 text-xl mx-auto max-w-4xl'>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
