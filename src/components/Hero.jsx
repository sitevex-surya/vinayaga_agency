import React from 'react';
import { BUSINESS_CONFIG } from '../data/siteData';
import heroImage from '../assets/hero-pharma.jpg';

export default function Hero({ onNotify }) {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
      history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <section className="hero fine-grid-overlay" id="home">
      <div className="hero-ambient-glow"></div>
      <div className="hero-ambient-glow-secondary"></div>

      <div className="container">
        <div className="hero-grid">
          
          {/* 1. EDITORIAL TEXT BLOCK (MOBILE: 1ST VIEWPORT CONTENT) */}
          <div className="hero-content-block">
            
            {/* Small Brand / Eyebrow Label */}
            <div className="hero-editorial-badge">
              <span className="pulse-dot"></span>
              <span>Est. 1970s • Ramanathapuram District, TN</span>
            </div>

            {/* Main Hero Heading */}
            <h1 className="hero-headline">
              50+ YEARS OF <br className="hero-br-desktop" />
              <span className="hero-headline-accent">PHARMACEUTICAL</span>{' '}
              <span className="hero-headline-gold">DISTRIBUTION</span>
            </h1>

            {/* Short Description */}
            <p className="hero-lead-text">
              For over five decades, Vinayaga Agency has delivered trusted, high-availability pharmaceutical distribution to retail pharmacies, hospital dispensaries, and community clinics across Ramanathapuram District and surrounding regional supply corridors.
            </p>

            {/* Primary & Secondary CTA Group */}
            <div className="hero-cta-row">
              <a
                href="#contact"
                className="btn btn-primary btn-lg"
                onClick={(e) => handleScrollTo(e, 'contact')}
              >
                <span>Enquire Stock Supply</span>
                <span className="btn-arrow">↗</span>
              </a>

              <a
                href="#network"
                className="btn btn-secondary btn-lg"
                onClick={(e) => handleScrollTo(e, 'network')}
              >
                <span>Explore Delivery Routes</span>
              </a>

              <a
                href={BUSINESS_CONFIG.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg hero-cta-whatsapp"
                aria-label={`Direct WhatsApp Enquiry to ${BUSINESS_CONFIG.phoneDisplay}`}
                onClick={() => onNotify && onNotify('Opening WhatsApp connection...')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.41a8.217 8.217 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z"/>
                </svg>
                <span>WhatsApp Desk</span>
              </a>
            </div>

          </div>

          {/* 2. DEDICATED HERO IMAGE CONTAINER (IN-FLOW, IMMEDIATELY AFTER CTAs ON MOBILE) */}
          <div className="hero-visual-frame">
            <div className="hero-image-wrapper">
              <img
                src={heroImage || '/hero-pharma.jpg'}
                alt="Vinayaga Agency Pharmaceutical Distribution Logistics Operations"
                className="hero-image-element"
                width="640"
                height="480"
                fetchPriority="high"
                decoding="async"
              />
              
              {/* Bottom Caption Card */}
              <div className="hero-image-caption-card">
                <div className="caption-text-group">
                  <div className="caption-meta-title">Regional B2B Fulfillment</div>
                  <div className="caption-meta-sub">Paramakudi • Ramanathapuram • Rameswaram • Mudukulathur</div>
                </div>
                <span className="status-pill status-pill-jade">
                  <span className="pulse-dot"></span>
                  <span>Active Routes</span>
                </span>
              </div>
            </div>
          </div>

          {/* 3. SUPPORTING TRUST INDICATORS (FOLLOWS HERO IMAGE ON MOBILE) */}
          <div className="hero-trust-bar">
            <div className="hero-trust-item">
              <span className="hero-trust-bullet">✦</span>
              <span>Scheduled Van Deliveries</span>
            </div>
            <div className="hero-trust-item">
              <span className="hero-trust-bullet">✦</span>
              <span>Branded & Generic WHO-GMP</span>
            </div>
            <div className="hero-trust-item">
              <span className="hero-trust-bullet">✦</span>
              <span>Paramakudi Central Hub</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
