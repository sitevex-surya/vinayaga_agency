import React from 'react';
import useBackToTop from '../hooks/useBackToTop';

export default function BackToTop() {
  const { isVisible, scrollToTop } = useBackToTop(350);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className={`back-to-top-btn ${isVisible ? 'is-visible' : ''}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
}
