import React, { useState } from 'react';
import { ROUTE_DATA, TOWNS_DATA, BUSINESS_CONFIG } from '../data/siteData';

export default function DeliveryNetwork({ onNotify }) {
  const [selectedRouteKey, setSelectedRouteKey] = useState('all');

  const routeKeys = Object.keys(ROUTE_DATA);

  const handleSelectTown = (routeKey) => {
    setSelectedRouteKey(routeKey);
    const cardElem = document.getElementById(`route-card-${routeKey}`);
    if (cardElem) {
      cardElem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const activeRoute = selectedRouteKey !== 'all' ? ROUTE_DATA[selectedRouteKey] : null;

  return (
    <section className="section-padding bg-ink fine-grid-overlay border-bottom-hairline border-dark-hairline" id="network">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="editorial-tag">
            <span className="editorial-tag-num">[ 04 // LOGISTICS ]</span>
            <span>Regional Distribution Strength</span>
          </div>
          <h2 className="section-title">
            Our Distribution Network
          </h2>
          <p className="section-description">
            Dedicated weekly delivery vans and express bus parcel supply covering retail and hospital pharmacies across Ramanathapuram District.
          </p>
        </div>

        {/* Network Interactive Panel */}
        <div className="network-interactive-panel">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            marginBottom: '1.5rem',
            paddingBottom: '1.25rem',
            borderBottom: '1px solid var(--color-graphite-border)'
          }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="pulse-dot"></span>
                Select Delivery Town / Corridor
              </h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-inverse-muted)', margin: 0 }}>
                Click a town to inspect weekly van schedules, departure points, and route coverage.
              </p>
            </div>

            {selectedRouteKey !== 'all' && (
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setSelectedRouteKey('all')}
              >
                ✕ Reset Route Filter
              </button>
            )}
          </div>

          {/* Quick Town Tags */}
          <div className="towns-selector-bar">
            {TOWNS_DATA.map((town) => {
              const isSelected = selectedRouteKey === town.routeKey;
              return (
                <button
                  key={town.id}
                  type="button"
                  className={`town-pill-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => handleSelectTown(town.routeKey)}
                  aria-pressed={isSelected}
                >
                  <span>{town.name}</span>
                  <span className="town-schedule-pill">{town.schedule}</span>
                </button>
              );
            })}
          </div>

          {/* Active Filter Callout */}
          {activeRoute && (
            <div style={{
              marginTop: '1.5rem',
              padding: '1.25rem 1.5rem',
              borderRadius: 'var(--radius-xs)',
              backgroundColor: 'rgba(22, 163, 148, 0.12)',
              borderLeft: '3px solid var(--color-jade)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem'
            }}>
              <div>
                <strong style={{ color: '#FFFFFF', fontSize: '0.95rem' }}>
                  {activeRoute.title} ({activeRoute.frequency}):
                </strong>{' '}
                <span style={{ color: 'var(--color-text-inverse-muted)', fontSize: '0.875rem' }}>
                  {activeRoute.coverage}
                </span>
              </div>
              <a
                href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(`Hello Vinayaga Agency, I want to inquire about wholesale delivery for ${activeRoute.title} (${activeRoute.route}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
                onClick={() => onNotify && onNotify(`Opening WhatsApp for ${activeRoute.title}`)}
              >
                Book Route Order
              </a>
            </div>
          )}
        </div>

        {/* Route Cards Grid */}
        <div className="route-cards-grid">
          {routeKeys.map((key) => {
            const item = ROUTE_DATA[key];
            const isMatch = selectedRouteKey === 'all' || selectedRouteKey === key;

            return (
              <div
                key={item.id}
                id={`route-card-${key}`}
                className={`route-editorial-card ${selectedRouteKey === key ? 'is-active-filter' : ''}`}
                style={{ opacity: isMatch ? 1 : 0.45 }}
              >
                <div>
                  <div className="route-card-header">
                    <span className={`route-day-badge ${
                      item.badgeType === 'accent' ? 'badge-jade' : item.badgeType === 'secondary' ? '' : 'badge-white'
                    }`}>
                      {item.badge}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', fontFamily: 'var(--font-mono)' }}>
                      0{item.cardIndex + 1}
                    </span>
                  </div>

                  <h3 className="route-title-editorial">{item.title}</h3>

                  <div className="route-freq-line">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{item.frequency}</span>
                  </div>

                  <div className="route-path-box">
                    <div className="route-path-title">Transit Corridor:</div>
                    <div>{item.route}</div>
                  </div>

                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-inverse-muted)', lineHeight: 1.55, marginBottom: '1.5rem' }}>
                    {item.coverage}
                  </p>
                </div>

                <a
                  href={`${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(`Hello Vinayaga Agency, I would like to schedule wholesale delivery for ${item.title} (${item.route}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => onNotify && onNotify(`Opening WhatsApp for ${item.title}`)}
                >
                  Inquire Route Dispatch
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
