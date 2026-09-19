import React, { useState } from 'react';
import { TIMELINE_DATA } from '../data/siteData';

export default function TimelineSection() {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(3); // Default to present day (2026)

  return (
    <section className="section-padding bg-midnight fine-grid-overlay border-bottom-hairline border-dark-hairline" id="timeline">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="editorial-tag">
            <span className="editorial-tag-num">[ 02 // CHRONOLOGY ]</span>
            <span>50+ Year Operating Legacy</span>
          </div>
          <h2 className="section-title">
            Our 50+ Year Historical Evolution
          </h2>
          <p className="section-description">
            From our founding in the 1970s to our modern B2B distribution network, explore the milestones that built regional pharmacy trust.
          </p>
        </div>

        {/* Desktop Horizontal Milestone Stepper */}
        <div className="timeline-horizontal-container">
          
          {/* Progress Track Line */}
          <div className="timeline-track-bar">
            <div
              className="timeline-track-fill"
              style={{ width: `${(activeMilestoneIndex / (TIMELINE_DATA.length - 1)) * 100}%` }}
            ></div>
          </div>

          {/* Stepper Node Buttons */}
          <div className="timeline-nodes-row" role="tablist" aria-label="Company history milestones">
            {TIMELINE_DATA.map((item, idx) => {
              const isActive = activeMilestoneIndex === idx;
              const isPast = activeMilestoneIndex >= idx;

              return (
                <button
                  key={item.period}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`timeline-step-node ${isActive ? 'is-active' : ''} ${isPast ? 'is-passed' : ''}`}
                  onClick={() => setActiveMilestoneIndex(idx)}
                >
                  <div className="step-node-point">
                    <span className="node-dot"></span>
                  </div>
                  <div className="step-node-label">
                    <span className="step-node-period">{item.period}</span>
                    <span className="step-node-tag">{item.yearLabel}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Highlighted Milestone Card */}
          <div className="timeline-active-display">
            <div className="timeline-display-card">
              <div className="timeline-display-header">
                <div className="display-period-group">
                  <span className="display-period-pill">
                    {TIMELINE_DATA[activeMilestoneIndex].period} Era
                  </span>
                  <span className="display-phase-name">
                    {TIMELINE_DATA[activeMilestoneIndex].yearLabel} Milestone
                  </span>
                </div>
                {TIMELINE_DATA[activeMilestoneIndex].isCurrent && (
                  <span className="status-pill status-pill-jade">
                    <span className="pulse-dot"></span>
                    <span>Active 2026 Operations</span>
                  </span>
                )}
              </div>

              <h3 className="timeline-display-title">
                {TIMELINE_DATA[activeMilestoneIndex].title}
              </h3>

              <p className="timeline-display-desc">
                {TIMELINE_DATA[activeMilestoneIndex].description}
              </p>
            </div>
          </div>

        </div>

        {/* Mobile Vertical Timeline Flow */}
        <div className="timeline-mobile-list">
          {TIMELINE_DATA.map((item, idx) => (
            <div
              key={item.period}
              className={`timeline-mobile-card ${item.isCurrent ? 'is-current-era' : ''}`}
            >
              <div className="timeline-mobile-node-col">
                <div className="mobile-node-circle"></div>
                {idx < TIMELINE_DATA.length - 1 && <div className="mobile-node-line"></div>}
              </div>

              <div className="timeline-mobile-content">
                <div className="timeline-mobile-badge-row">
                  <span className="timeline-year-badge">{item.period}</span>
                  <span className="timeline-phase-label">{item.yearLabel}</span>
                  {item.isCurrent && (
                    <span className="status-pill status-pill-jade status-pill-sm">
                      Present
                    </span>
                  )}
                </div>
                <h4 className="timeline-mobile-title">{item.title}</h4>
                <p className="timeline-mobile-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
