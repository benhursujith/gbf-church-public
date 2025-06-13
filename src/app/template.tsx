'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ElementType } from 'react';

// variants
const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
};

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const AnimatePresenceFixedType = AnimatePresence as ElementType;

  return (
    <AnimatePresenceFixedType>
      <motion.div key={pathname} className='h-full'>
        <Transition />
        {children}
      </motion.div>
    </AnimatePresenceFixedType>
  );
}

function Transition() {
  return (
    <>
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#09091c]'
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        }}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-coral'
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        }}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#2e71ea]'
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        }}
      />
    </>
  );
}
