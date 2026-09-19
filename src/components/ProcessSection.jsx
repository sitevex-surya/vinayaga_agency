import React from 'react';
import { WORKFLOW_STEPS } from '../data/siteData';

export default function ProcessSection() {
  return (
    <section className="section-padding bg-warm border-bottom-hairline" id="process">
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
            From digital order logging to temperature-conscious delivery, our 4-step workflow guarantees accurate batch fulfillment.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="process-editorial-grid">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div key={step.step} className="process-step-card">
              <div className="process-num-header">
                <span className="process-num">{step.step}</span>
                <span className="editorial-tag-num">[{step.label}]</span>
              </div>

              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
