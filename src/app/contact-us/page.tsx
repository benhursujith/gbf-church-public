'use client';

import React from 'react';

import 'react-toastify/dist/ReactToastify.css';

import { Address } from '@/components/contactpage/address';
import ContactForm from '@/components/contactpage/form/contact-form';
import { HeroHeading } from '@/components/layout/hero-heading';
import { OtherPages } from '@/components/layout/other-pages';
import { PageLayout } from '@/components/layout/page-layout';

import { contactUsContent, otherPages } from '@/constant/config';

export default function ContactUsPage() {
  return (
    <PageLayout>
      {/* Heading Section */}
      <HeroHeading data={contactUsContent} />
      {/* Contact Form  */}
      <ContactForm />
      {/* Address */}
      <Address />
      {/* Other pages links */}
      <OtherPages data1={otherPages[1]} data2={otherPages[2]} />
    </PageLayout>
  );
}
