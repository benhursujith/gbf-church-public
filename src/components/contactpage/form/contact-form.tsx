'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Bounce, toast } from 'react-toastify';
import { z } from 'zod';

import { sendEmail } from '@/components/contactpage/form/_actions';
import { ContactFormSchema } from '@/components/contactpage/form/schema';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { contactUsContent, siteConfig } from '@/constant/config';

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  const form = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = form;

  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
    const result = await sendEmail(data);

    if (result?.success) {
      //console.log({ data: result.data });
      toast.success('Email sent!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
      reset();
      return;
    }

    // toast error
    //console.log(result?.error);
    toast.error(`Something went wrong! ${result?.error}`, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  };

  return (
    <section className='relative flex items-center pt-8 lg:pt-16'>
      <div className='wrapper py-12 lg:py-32'>
        <div className='flex flex-wrap items-start headline-defaults copy-defaults'>
          {/* email address */}
          <div className='w-full lg:w-2/5 flex flex-wrap'>
            <div className='w-full sm:w-1/2 lg:w-full px-4 my-4 lg:my-8'>
              <h2>Contact</h2>
              <div className='mt-12'>
                <p className='subhead'>Email address:</p>
                <p className='text-xl sm:text-2xl lg:text-3xl font-bold font-sans'>
                  <Link
                    className='text-white hover:text-coral transition-colors'
                    href={`mailto:${siteConfig.email}`}
                  >
                    {siteConfig.email}
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className='w-full lg:w-3/5 xl:w-1/2 px-4 my-4 lg:mt-8'>
            <div className='flex flex-wrap flex-col xs:flex-row xs:items-end'>
              <h2>Requests</h2>
              <p className='subhead xs:ml-auto xs:my-6'>* Required</p>
            </div>
            {/* formfields */}
            <Form {...form}>
              <form
                id='contactForm'
                onSubmit={handleSubmit(processForm)}
                className='form-defaults xs:mt-8'
              >
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder='Your Name*' {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder='Email Address*' {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder='Message*'
                          className='resize-none'
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className='my-12 text-sm'>
                  <p>{contactUsContent.disclaimer}</p>
                </div>
                <input
                  disabled={isSubmitting}
                  type='submit'
                  value={isSubmitting ? 'Sending...' : 'Send'}
                />
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
