import React from 'react';

export default function VisionMission() {
  return (
    <section className="section-padding bg-surface border-bottom-hairline">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="editorial-tag">
            <span className="editorial-tag-num">[ 07 // PRINCIPLES ]</span>
            <span>Strategic Direction</span>
          </div>
          <h2 className="section-title">
            Our Vision & Operating Mission
          </h2>
          <p className="section-description">
            Guiding five decades of regional pharmaceutical leadership with unwavering commitment to patient wellness and commercial integrity.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="vision-grid">
          
          {/* Long-term Vision Card */}
          <div className="vision-card highlight-jade">
            <div className="editorial-tag" style={{ marginBottom: '0.75rem' }}>
              <span>Long-Term Vision</span>
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '1rem', lineHeight: 1.3 }}>
              Unbroken Healthcare Supply Across Regional Communities
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
              To be the most dependable and trusted pharmaceutical distribution partner in Tamil Nadu, seamlessly connecting national medicine manufacturers with regional retail pharmacies through transparent service and unmatched stock depth.
            </p>
          </div>

          {/* Daily Mission Card */}
          <div className="vision-card highlight-champagne">
            <div className="editorial-tag" style={{ marginBottom: '0.75rem', color: 'var(--color-champagne-dark)' }}>
              <span>Daily Mission</span>
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '1rem', lineHeight: 1.3 }}>
              Punctual Fulfillment with Complete Regulatory Compliance
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
              To empower community pharmacists and clinical dispensaries with predictable route deliveries, broad inventory selection across branded and generic lines, strict batch validation, and responsive order desks that protect public health.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
