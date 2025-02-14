import { useEffect, RefObject } from 'react';

function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  onClickOutside: (event: MouseEvent | TouchEvent) => void,
): void {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      onClickOutside(event);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, onClickOutside]);
}

export default useClickOutside;
