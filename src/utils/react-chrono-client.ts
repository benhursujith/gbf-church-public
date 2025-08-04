'use client';

import dynamic from 'next/dynamic';
import type { Chrono as ChronoType } from 'react-chrono';

export const Chrono = dynamic(
  () => import('react-chrono').then((lib) => lib.Chrono),
  {
    ssr: false,
  }
) as typeof ChronoType;
