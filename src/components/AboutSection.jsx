import React from 'react';
import { TIMELINE_DATA, BUSINESS_CONFIG } from '../data/siteData';

export default function AboutSection() {
  return (
    <section className="section-padding bg-warm border-bottom-hairline" id="about">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-left">
          <div className="editorial-tag">
            <span className="editorial-tag-num">[ 01 // HERITAGE ]</span>
            <span>Corporate Background</span>
          </div>
          <h2 className="section-title">
            Five Decades of Proven Pharmaceutical Supply in Southern Tamil Nadu.
          </h2>
        </div>

        {/* Asymmetrical Content Grid */}
        <div className="about-asymmetric-grid">
          
          {/* Left Column: Narrative Story */}
          <div className="about-story-text">
            <p>
              With over five decades of continuous service, <strong>{BUSINESS_CONFIG.name}</strong> stands as a trusted pillar in wholesale pharmaceutical distribution throughout Ramanathapuram District, Paramakudi, and adjacent healthcare corridors.
            </p>

            <div className="about-highlight-statement">
              “Our commitment has remained unchanged since the 1970s: supplying genuine medicines, maintaining adequate stock depth, and building lasting relationships with local pharmacists.”
            </div>

            <p>
              We specialize in wholesale supply for retail pharmacies, nursing homes, and hospital dispensaries. Our disciplined inventory management guarantees that high-demand therapeutics and critical medicines are readily available when patients and healthcare providers need them most.
            </p>

            <p>
              Backed by our dedicated logistics team, knowledgeable order dispatch personnel, and regular scheduled delivery routes, we continue to streamline regional healthcare distribution with absolute integrity.
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="#products" className="btn btn-dark">
                <span>View Product Portfolio</span>
                <span className="btn-arrow">↗</span>
              </a>
              <a href="#network" className="btn btn-secondary">
                <span>Delivery Coverage</span>
              </a>
            </div>
          </div>

          {/* Right Column: 50+ Years Editorial Timeline */}
          <div className="timeline-editorial-panel">
            <div className="timeline-editorial-header">
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                  Our 50+ Year Evolution
                </h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                  Historical Milestones (1970s – 2026)
                </span>
              </div>
              <span className="status-pill status-pill-champagne">
                Heritage
              </span>
            </div>

            <div className="timeline-items-list">
              {TIMELINE_DATA.map((item) => (
                <div
                  key={item.period}
                  className={`timeline-node-item ${item.isCurrent ? 'is-current' : ''}`}
                >
                  <div className="timeline-year-badge">
                    {item.period}
                  </div>
                  <div className="timeline-node-content">
                    <div className="timeline-node-title">{item.title}</div>
                    <div className="timeline-node-desc">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
