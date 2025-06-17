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

  export interface ChronoProps {
    items: TimelineItemModel[];
    mode?: 'VERTICAL' | 'HORIZONTAL' | 'VERTICAL_ALTERNATING';
    cardHeight?: number;
    slideShow?: boolean;
    slideItemDuration?: number;
    theme?: any;
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
    children?: ReactNode;
  }

  export const Chrono: React.FC<ChronoProps>;
} 