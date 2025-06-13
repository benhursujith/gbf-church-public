import { contactUsFAQ } from '@/constant/config';
export function FAQ() {
  return (
    <>
      {/* FAQ - Heading */}
      <section className='relative z-10 overflow-hidden bg-black text-white'>
        <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
          <div className='pt-16 md:pt-24 pb-16 md:pb-0'>
            <div className='flex flex-wrap items-center '>
              <div className='w-full px-4 md:w-full'>
                <div className='headline-defaults copy-defaults py-4 md:py-8 text-center mx-auto '>
                  <div className='rich-text md:my-4 py-px max-w-4xl lg:px-4 xl:px-8 mx-auto '>
                    <h2 className='redactor-heading-two'>
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {contactUsFAQ.map((content, index) => (
        <section
          key={index}
          className='relative z-10 overflow-hidden bg-black text-white '
        >
          <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
            <div className='pt-16 md:pt-0 pb-16 md:pb-0'>
              <div className='-my-4  flex flex-wrap'>
                {content.question1 && (
                  <div className='px-4 my-8 headline-defaults copy-defaults w-full md:flex-1'>
                    <h3>{content.question1}</h3>
                    <div className='my-8'>{content.answer1}</div>
                  </div>
                )}
                {content.question2 && (
                  <div className='px-4 my-8 headline-defaults copy-defaults w-full md:flex-1'>
                    <h3>{content.question2}</h3>
                    <div className='my-8'>{content.answer2}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
