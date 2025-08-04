declare module 'react-chrono' {
  import { ReactNode } from 'react';

  export interface TimelineItemModel {
    title?: string;
    cardTitle?: string;
    cardSubtitle?: string;
    cardDetailedText?: string | string[];
    media?: {
      name?: string;
      source?: {
        url?: string;
      };
      type?: string;
    };
  }

  interface FontSizes {
    title?: string;
    cardTitle?: string;
    cardSubtitle?: string;
    cardText?: string;
  }

  export interface ChronoProps {
    items: TimelineItemModel[];
    mode?: 'VERTICAL' | 'HORIZONTAL' | 'VERTICAL_ALTERNATING';
    cardHeight?: number;
    cardWidth?: number;
    mediaHeight?: number;
    contentDetailsHeight?: number;
    slideShow?: boolean;
    slideItemDuration?: number;
    theme?: {
      primary: string;
      secondary: string;
      cardBgColor: string;
      cardForeColor: string;
      titleColor: string;
    };
    cardLess?: boolean;
    flipLayout?: boolean;
    enableOutline?: boolean;
    scrollable?: boolean;
    disableNavOnKey?: boolean;
    disableClickOnCircle?: boolean;
    hideControls?: boolean;
    allowDynamicUpdate?: boolean;
    onScrollEnd?: () => void;
    onItemSelected?: (selected: TimelineItemModel) => void;
    activeItemIndex?: number;
    focusActiveItemOnLoad?: boolean;
    fontSizes?: FontSizes;
    children?: ReactNode;
  }

  export const Chrono: React.FC<ChronoProps>;
} 