import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';

export function PageLayout({ children }: { children: React.ReactNode }) {
  // Mobile Menu Toggle functionality
  // State of our Menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='bg-black relative z-10' style={{ opacity: 1 }}>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <main role='main' className='main relative z-10'>
          {children}
        </main>
        <Footer />
        <ScrollToTopButton isOpen={isOpen} />
        <ToastContainer />
      </div>
    </>
  );
}
