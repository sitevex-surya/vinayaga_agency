import React from 'react';
import { VALUE_PROPOSITIONS } from '../data/siteData';

function renderIcon(iconType) {
  switch (iconType) {
    case 'box':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      );
    case 'layers':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      );
    case 'clock':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      );
    case 'users':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      );
    case 'map':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
          <line x1="8" y1="2" x2="8" y2="18"></line>
          <line x1="16" y1="6" x2="16" y2="22"></line>
        </svg>
      );
    case 'shield':
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      );
  }
}

export default function ValueProps() {
  return (
    <section className="section-padding bg-soft border-bottom-hairline" id="why-us">
      <div className="container">
        
        <div className="section-header text-center">
          <div className="editorial-tag">
            <span className="editorial-tag-num">[ 02 // CAPABILITIES ]</span>
            <span>Why Pharmacies Partner With Us</span>
          </div>
          <h2 className="section-title">
            Engineered for Wholesale Supply Reliability
          </h2>
          <p className="section-description">
            We understand the inventory challenges of independent retail pharmacies and clinical dispensaries. Our operations prioritize stock consistency and rapid dispatch.
          </p>
        </div>

        <div className="value-props-grid">
          {VALUE_PROPOSITIONS.map((prop) => (
            <div key={prop.id} className="value-prop-card">
              <div className="value-prop-icon-wrap">
                {renderIcon(prop.iconType)}
              </div>
              <h3 className="value-prop-title">{prop.title}</h3>
              <p className="value-prop-desc">{prop.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
