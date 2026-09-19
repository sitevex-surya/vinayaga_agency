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
            Our Regional Distribution Network
          </h2>
          <p className="section-description">
            Dedicated weekly delivery vans and express bus parcel supply covering retail and hospital pharmacies across Ramanathapuram District.
          </p>
        </div>

        {/* Network Interactive Panel */}
        <div className="network-interactive-panel">
          <div className="network-panel-header">
            <div>
              <h3 className="network-panel-title">
                <span className="pulse-dot"></span>
                <span>Select Delivery Town / Transit Corridor</span>
              </h3>
              <p className="network-panel-sub">
                Click a destination town to inspect weekly van schedules, departure points, and route transit coverage.
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

          {/* Interactive Town Selector Buttons */}
          <div className="towns-selector-bar" role="group" aria-label="Town route filters">
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
                  <span className="town-pill-dot"></span>
                  <span className="town-name">{town.name}</span>
                  <span className="town-schedule-pill">{town.schedule}</span>
                </button>
              );
            })}
          </div>

          {/* Visual Route Corridor Map Bar */}
          <div className="network-route-visualizer">
            <div className="route-visualizer-header">
              <span className="visualizer-hub-label">
                <span className="hub-beacon"></span>
                CENTRAL HUB: PARAMAKUDI
              </span>
              <span className="visualizer-status">
                WEEKLY VAN LOGISTICS & BUS PARCEL
              </span>
            </div>

            <div className="route-corridors-diagram">
              <div className="corridor-node is-hub">
                <div className="node-circle"></div>
                <div className="node-title">Paramakudi</div>
                <div className="node-sub">Daily Hub</div>
              </div>

              <div className="corridor-connector">
                <div className="connector-line"></div>
                <div className="delivery-signal-particle"></div>
              </div>

              <div className="corridor-node">
                <div className="node-circle"></div>
                <div className="node-title">Sathrakudi</div>
                <div className="node-sub">Thu Route</div>
              </div>

              <div className="corridor-connector">
                <div className="connector-line"></div>
              </div>

              <div className="corridor-node">
                <div className="node-circle"></div>
                <div className="node-title">Rameswaram</div>
                <div className="node-sub">Thu Coastal</div>
              </div>

              <div className="corridor-connector">
                <div className="connector-line"></div>
              </div>

              <div className="corridor-node">
                <div className="node-circle"></div>
                <div className="node-title">Mudukulathur</div>
                <div className="node-sub">Fri Route</div>
              </div>

              <div className="corridor-connector">
                <div className="connector-line"></div>
              </div>

              <div className="corridor-node">
                <div className="node-circle"></div>
                <div className="node-title">Abiramam</div>
                <div className="node-sub">Fri Central</div>
              </div>
            </div>
          </div>

          {/* Active Filter Callout */}
          {activeRoute && (
            <div className="active-route-callout">
              <div>
                <strong className="callout-title">
                  {activeRoute.title} ({activeRoute.frequency}):
                </strong>{' '}
                <span className="callout-desc">
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
                <span>Book Route Order</span>
                <span className="btn-arrow">↗</span>
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
                    <span className="route-card-index">
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
                    <div className="route-path-name">{item.route}</div>
                  </div>

                  <p className="route-coverage-desc">
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
                  <span>Inquire Route Dispatch</span>
                  <span className="btn-arrow">↗</span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
