import { useState, useEffect } from 'react';

/**
 * Custom hook to track active section based on scroll position
 * @param {Array<string>} sectionIds - Array of section element IDs (e.g. ['home', 'about', ...])
 * @param {number} offset - Offset from top in pixels (default 130)
 * @returns {string} - The currently active section ID
 */
export function useScrollSpy(sectionIds, offset = 130) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || 'home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}

export default useScrollSpy;
