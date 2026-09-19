import React, { useState, useEffect } from 'react';
import { BUSINESS_CONFIG } from '../data/siteData';

export default function BrandLoader({ isLoading, onFinish }) {
  const [isActive, setIsActive] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsActive(false);
      if (onFinish) onFinish();
      return;
    }

    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsActive(false);
        if (onFinish) onFinish();
      }, 450);
    }, 650);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!isActive) return null;

  return (
    <div
      className={`page-transition-overlay is-active initial-loader ${isFadingOut ? 'fade-out' : ''}`}
      aria-hidden="true"
    >
      <div className="transition-logo-container">
        <div className="transition-logo-badge">
          <div className="transition-logo-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="#D8C39A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 7V17" stroke="#16A394" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M7 12H17" stroke="#16A394" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <div className="transition-brand-name">{BUSINESS_CONFIG.name}</div>
        <div className="transition-brand-sub">{BUSINESS_CONFIG.tagline}</div>

        <div className="transition-progress-bar">
          <div className="transition-progress-fill"></div>
        </div>
      </div>
    </div>
  );
}
