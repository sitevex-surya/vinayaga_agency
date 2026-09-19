import React from 'react';
import { BUSINESS_CONFIG } from '../data/siteData';

export default function CtaBanner({ onNotify }) {
  return (
    <section className="cta-luxury-banner fine-grid-overlay">
      <div className="container">
        <div className="cta-banner-content">
          
          <div className="status-pill status-pill-champagne" style={{ marginBottom: '1.5rem' }}>
            <span>✦</span>
            <span>Over 50 Years of Regional Wholesale Trust</span>
          </div>

          <h2 style={{
            fontSize: 'var(--font-h1)',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.15,
            marginBottom: '1.25rem'
          }}>
            Partner with Ramanathapuram's Premier Pharmaceutical Distributor
          </h2>

          <p style={{
            fontSize: 'var(--font-body-lead)',
            color: 'var(--color-text-inverse-muted)',
            lineHeight: 1.7,
            maxWidth: '680px',
            margin: '0 auto 2.5rem'
          }}>
            Restock your pharmacy with scheduled route van deliveries, verified batch authenticity, and direct WhatsApp order fulfillment.
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <a
              href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent('Hello Vinayaga Agency, I want to discuss wholesale medicine distribution for my pharmacy.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              onClick={() => onNotify && onNotify('Opening WhatsApp connection...')}
            >
              <span>Connect on WhatsApp</span>
              <span className="btn-arrow">↗</span>
            </a>

            <a
              href={`tel:${BUSINESS_CONFIG.phoneTel}`}
              className="btn btn-secondary btn-lg"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
            </a>
          </div>

          <div style={{
            fontSize: '0.8125rem',
            color: 'var(--color-text-inverse-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}>
            <span>🕒 Operating Hours: <strong>{BUSINESS_CONFIG.workingHours}</strong></span>
            <span>📍 Ramanathapuram District & Surrounding Routes</span>
          </div>

        </div>
      </div>
    </section>
  );
}
