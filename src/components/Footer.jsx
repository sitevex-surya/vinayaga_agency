import React from 'react';
import { BUSINESS_CONFIG, NAV_LINKS, ROUTE_DATA } from '../data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-luxury" id="footer">
      <div className="container">
        
        {/* 4-Column Footer Grid */}
        <div className="footer-grid-4">
          
          {/* Column 1: Brand & Heritage */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div className="logo-symbol">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="#D8C39A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 7V17" stroke="#16A394" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M7 12H17" stroke="#16A394" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="logo-text-group">
                <span className="logo-brand-name">{BUSINESS_CONFIG.name}</span>
                <span className="logo-brand-tag">{BUSINESS_CONFIG.tagline}</span>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-inverse-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              Serving retail pharmacies, hospital dispensaries, and community clinics with comprehensive medicine stocks and dedicated logistics for over 50 years.
            </p>

            <div className="status-pill status-pill-champagne">
              <span>✦</span>
              <span>50+ Years Legacy (Est. 1970s)</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="footer-heading">
              Quick Navigation
            </h4>
            <ul className="footer-links-list">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="footer-link-item">
                  <a href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Scheduled Routes */}
          <div>
            <h4 className="footer-heading">
              Delivery Network
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.8125rem' }}>
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block' }}>Thursday Route:</strong>
                <span style={{ color: 'var(--color-text-inverse-muted)' }}>Sathrakudi → Rameswaram</span>
              </div>
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block' }}>Friday Route:</strong>
                <span style={{ color: 'var(--color-text-inverse-muted)' }}>Mudukulathur → Abiramam</span>
              </div>
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block' }}>Daily Central Hub:</strong>
                <span style={{ color: 'var(--color-text-inverse-muted)' }}>Paramakudi Local Town</span>
              </div>
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block' }}>District Parcel Service:</strong>
                <span style={{ color: 'var(--color-text-inverse-muted)' }}>Express Bus Parcel Facility</span>
              </div>
            </div>
          </div>

          {/* Column 4: Wholesale Desk Contact */}
          <div>
            <h4 className="footer-heading">
              Wholesale Desk
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem' }}>
              <div>
                <span style={{ color: 'var(--color-text-light)', display: 'block', fontSize: '0.725rem', textTransform: 'uppercase' }}>Phone & WhatsApp:</span>
                <a href={`tel:${BUSINESS_CONFIG.phoneTel}`} style={{ color: '#FFFFFF', fontWeight: 700 }}>
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </div>

              <div>
                <span style={{ color: 'var(--color-text-light)', display: 'block', fontSize: '0.725rem', textTransform: 'uppercase' }}>Official Email:</span>
                <a href={`mailto:${BUSINESS_CONFIG.email}`} style={{ color: 'var(--color-champagne)', wordBreak: 'break-all' }}>
                  {BUSINESS_CONFIG.email}
                </a>
              </div>

              <div>
                <span style={{ color: 'var(--color-text-light)', display: 'block', fontSize: '0.725rem', textTransform: 'uppercase' }}>Operating Hours:</span>
                <span style={{ color: '#FFFFFF' }}>{BUSINESS_CONFIG.workingHours}</span>
              </div>

              <div>
                <span style={{ color: 'var(--color-text-light)', display: 'block', fontSize: '0.725rem', textTransform: 'uppercase' }}>Location:</span>
                <span style={{ color: '#FFFFFF' }}>{BUSINESS_CONFIG.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-row">
          <div>
            © {currentYear} {BUSINESS_CONFIG.name}. All Rights Reserved.
          </div>
          <div>
            Wholesale Pharmaceutical Distribution • Ramanathapuram District, Tamil Nadu
          </div>
        </div>

      </div>
    </footer>
  );
}
