import React from 'react';
import { BUSINESS_CONFIG } from '../data/siteData';

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

        {/* Asymmetrical Editorial Grid */}
        <div className="about-asymmetric-grid">
          
          {/* Left Column: Narrative Story */}
          <div className="about-story-text">
            <p>
              With over five decades of continuous service, <strong>{BUSINESS_CONFIG.name}</strong> stands as an established pillar in wholesale pharmaceutical distribution throughout Ramanathapuram District, Paramakudi, and adjacent healthcare supply corridors.
            </p>

            <div className="about-highlight-statement">
              “Our commitment has remained unchanged since the 1970s: supplying genuine medicines, maintaining adequate stock depth, and building lasting relationships with local pharmacists.”
            </div>

            <p>
              We specialize in wholesale medicine distribution for independent retail pharmacies, nursing homes, and clinical dispensaries. Our disciplined inventory management guarantees that high-demand therapeutics and critical medicines are readily available when patients and healthcare providers need them most.
            </p>

            <p>
              Backed by our dedicated logistics team, knowledgeable order dispatch personnel, and regular scheduled delivery routes, we continue to streamline regional healthcare distribution with absolute integrity.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
              <a href="#products" className="btn btn-dark">
                <span>View Product Portfolio</span>
                <span className="btn-arrow">↗</span>
              </a>
              <a href="#timeline" className="btn btn-secondary">
                <span>Explore 50+ Year History</span>
              </a>
            </div>
          </div>

          {/* Right Column: Operational Pillars & Heritage Metric */}
          <div className="about-pillars-column">
            
            {/* 50+ Years Heritage Callout Box */}
            <div className="about-metric-card">
              <div className="metric-badge-top">
                <span className="pulse-dot"></span>
                <span>Established 1970s</span>
              </div>
              <div className="metric-large-number">50+</div>
              <div className="metric-large-label">Years of Unbroken Regional Trust</div>
              <p className="metric-large-sub">
                Trusted by retail pharmacists and dispensaries across Paramakudi, Sathrakudi, Rameswaram, Mudukulathur, and Abiramam.
              </p>
            </div>

            {/* Core Pillars List */}
            <div className="about-pillars-list">
              <div className="about-pillar-item">
                <div className="pillar-bullet">✦</div>
                <div>
                  <h4 className="pillar-title">Verified Medicine Authenticity</h4>
                  <p className="pillar-desc">
                    Direct manufacturer sourcing guaranteeing batch validity, tamper-evident seals, and WHO-GMP compliance.
                  </p>
                </div>
              </div>

              <div className="about-pillar-item">
                <div className="pillar-bullet">✦</div>
                <div>
                  <h4 className="pillar-title">Scheduled Delivery Logistics</h4>
                  <p className="pillar-desc">
                    Dedicated weekly delivery van routes and daily hub dispatch ensuring prompt restocking without delays.
                  </p>
                </div>
              </div>

              <div className="about-pillar-item">
                <div className="pillar-bullet">✦</div>
                <div>
                  <h4 className="pillar-title">Direct WhatsApp Order Desk</h4>
                  <p className="pillar-desc">
                    Fast order confirmation, inventory stock checks, and rapid dispatch coordination with our wholesale team.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
