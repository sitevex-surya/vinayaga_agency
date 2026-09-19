import { useState, useEffect } from 'react';

/**
 * Custom hook to handle back-to-top visibility and scrolling
 * @param {number} threshold - Scroll height threshold in pixels (default 400)
 * @returns {{ isVisible: boolean, scrollToTop: () => void }}
 */
export function useBackToTop(threshold = 400) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const checkVisibility = () => {
      setIsVisible(window.scrollY > threshold);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(checkVisibility);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    checkVisibility();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return { isVisible, scrollToTop };
}

export default useBackToTop;
