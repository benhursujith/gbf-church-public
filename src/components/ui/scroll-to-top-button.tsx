import { useWindowScroll } from '@uidotdev/usehooks';
import { debounce } from 'lodash';
import { ArrowUp } from 'lucide-react';
import { useCallback } from 'react';

interface ReturnToTopButtonProps {
  delay?: number;
  isOpen: boolean;
}

function useReturnToTop(delay = 50) {
  const [{ y }, scrollTo] = useWindowScroll();
  const debouncedScrollTo = debounce(scrollTo, delay);
  const handleClick = useCallback(() => {
    debouncedScrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }, [debouncedScrollTo]);

  return { y, handleClick };
}

function ScrollToTopButton({ delay, isOpen }: ReturnToTopButtonProps) {
  const { y, handleClick } = useReturnToTop(delay);

  return (
    <button
      onClick={handleClick}
      aria-label='scroll to top'
      className={`${y === 0 ? 'scale-0' : 'scale-100'} 
      ${isOpen ? 'hidden' : ''}
      
      w-12 h-12 transition-transform duration-200 flex fixed right-10 bottom-10 bg-[#f56d6e] rounded-full shadow-lg shadow-gray-900 justify-center items-center z-50`}
    >
      <ArrowUp className='w-6 h-6' />
    </button>
  );
}
export default ScrollToTopButton;
