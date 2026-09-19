import React from 'react';
import { WORKFLOW_STEPS } from '../data/siteData';

export default function ProcessSection() {
  return (
    <section className="section-padding bg-soft border-bottom-hairline" id="process">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="editorial-tag">
            <span className="editorial-tag-num">[ 06 // WORKFLOW ]</span>
            <span>Fulfillment Methodology</span>
          </div>
          <h2 className="section-title">
            Structured B2B Distribution Process
          </h2>
          <p className="section-description">
            From digital order intake to temperature-conscious delivery, our 4-step fulfillment sequence guarantees rapid, accurate supply.
          </p>
        </div>

        {/* Process Horizontal Track on Desktop / Vertical on Mobile */}
        <div className="process-sequence-container">
          
          <div className="process-track-line-bg"></div>

          <div className="process-editorial-grid">
            {WORKFLOW_STEPS.map((step, idx) => (
              <div key={step.step} className="process-step-card">
                
                <div className="process-card-top-row">
                  <div className="process-num-badge">
                    <span>{step.step}</span>
                  </div>
                  <span className="process-step-label">
                    {step.label}
                  </span>
                </div>

                <div className="process-card-body">
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-desc">{step.description}</p>
                </div>

                <div className="process-card-status-bar">
                  <span className="status-bullet">✦</span>
                  <span className="status-text">Phase 0{idx + 1} Protocol</span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
