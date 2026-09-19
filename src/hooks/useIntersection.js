import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook using IntersectionObserver to detect when an element enters viewport
 * @param {Object} options - IntersectionObserverInit options
 * @returns {[React.RefObject, boolean]}
 */
export function useIntersection(options = { threshold: 0.1, rootMargin: '0px 0px -25px 0px' }) {
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setHasIntersected(true);
      return;
    }

    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry], obs) => {
      if (entry.isIntersecting) {
        setHasIntersected(true);
        obs.unobserve(currentElement);
      }
    }, options);

    observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [options]);

  return [elementRef, hasIntersected];
}

export default useIntersection;
