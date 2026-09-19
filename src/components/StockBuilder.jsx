import React, { useState } from 'react';
import { BUILDER_CATEGORIES, BUSINESS_CONFIG } from '../data/siteData';

export default function StockBuilder({ onNotify }) {
  const [formData, setFormData] = useState({
    pharmacyName: '',
    location: '',
    category: BUILDER_CATEGORIES[0],
    urgency: 'Standard Route Restocking',
    items: ''
  });

  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getFormattedMessage = () => {
    const pharmacy = formData.pharmacyName.trim() || '[Your Pharmacy / Hospital Name]';
    const loc = formData.location.trim() || '[Town / Corridor]';
    const cat = formData.category;
    const priority = formData.urgency;
    const itemList = formData.items.trim() || '(No specific items listed yet - please add your medicine list below)';

    return `*VINAYAGA AGENCY - B2B WHOLESALE STOCK INQUIRY*
----------------------------------------
*Pharmacy Name:* ${pharmacy}
*Town/Location:* ${loc}
*Primary Category:* ${cat}
*Urgency / Priority:* ${priority}
*Order Date:* ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
----------------------------------------
*REQUIRED MEDICINE ITEMS & QUANTITIES:*
${itemList}
----------------------------------------
_Please confirm stock availability and pricing for delivery._`;
  };

  const handleCopy = async () => {
    const text = getFormattedMessage();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (onNotify) onNotify('Stock requirement draft copied to clipboard!');
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      if (onNotify) onNotify('Stock requirement draft copied!');
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleSendWhatsApp = () => {
    const text = getFormattedMessage();
    const url = `${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    if (onNotify) onNotify('Opening WhatsApp with your stock inquiry...');
  };

  const handleReset = () => {
    setFormData({
      pharmacyName: '',
      location: '',
      category: BUILDER_CATEGORIES[0],
      urgency: 'Standard Route Restocking',
      items: ''
    });
    if (onNotify) onNotify('Draft requirement cleared.');
  };

  return (
    <section className="section-padding bg-soft border-bottom-hairline" id="builder">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="editorial-tag">
            <span className="editorial-tag-num">[ 05 // B2B TOOL ]</span>
            <span>Quick Medicine Requirement Builder</span>
          </div>
          <h2 className="section-title">
            Draft & Transmit Wholesale Orders
          </h2>
          <p className="section-description">
            Assemble your pharmacy requirement list into a structured dispatch format for instant stock verification over WhatsApp.
          </p>
        </div>

        {/* Builder Layout Grid */}
        <div className="stock-builder-grid">
          
          {/* Left: Input Form */}
          <div className="stock-builder-card">
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '1.5rem' }}>
              Step 1: Enter Requirement Details
            </h3>

            <form onSubmit={(e) => { e.preventDefault(); handleSendWhatsApp(); }}>
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="builder-pharmacy" className="form-label">Pharmacy / Institution Name *</label>
                  <input
                    id="builder-pharmacy"
                    name="pharmacyName"
                    type="text"
                    className="form-control"
                    placeholder="e.g. Life Care Pharmacy"
                    value={formData.pharmacyName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="builder-location" className="form-label">Town / City Location *</label>
                  <input
                    id="builder-location"
                    name="location"
                    type="text"
                    className="form-control"
                    placeholder="e.g. Paramakudi / Rameswaram"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="builder-category" className="form-label">Primary Category</label>
                  <select
                    id="builder-category"
                    name="category"
                    className="form-control"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    {BUILDER_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="builder-urgency" className="form-label">Dispatch Urgency</label>
                  <select
                    id="builder-urgency"
                    name="urgency"
                    className="form-control"
                    value={formData.urgency}
                    onChange={handleChange}
                  >
                    <option value="Standard Route Restocking">Standard Route Restocking</option>
                    <option value="Urgent Immediate Stock-Out">Urgent Immediate Stock-Out</option>
                    <option value="Next Route Scheduled Van">Next Delivery Van Schedule</option>
                    <option value="Bus Parcel Requested">Express Bus Parcel Requested</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="builder-items" className="form-label">
                  Medicine Names, Brands & Quantities *
                </label>
                <textarea
                  id="builder-items"
                  name="items"
                  rows={5}
                  className="form-control"
                  placeholder="Example:
1. Paracetamol 650mg Tab - 10 Boxes
2. Cough Syrup 100ml - 20 Bottles
3. Amoxicillin 500mg Cap - 5 Boxes
4. Normal Saline 500ml IV - 2 Cartons"
                  value={formData.items}
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                <button
                  type="submit"
                  className="btn btn-whatsapp"
                  style={{ flex: '1 1 200px' }}
                >
                  <span>Send via WhatsApp</span>
                  <span className="btn-arrow">↗</span>
                </button>

                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={handleCopy}
                >
                  {copied ? '✓ Copied Draft' : '📋 Copy Text'}
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleReset}
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Clear
                </button>
              </div>
            </form>
          </div>

          {/* Right: Monospace WhatsApp Live Preview */}
          <div className="stock-preview-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-graphite-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="pulse-dot"></span>
                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFFFFF' }}>Live WhatsApp Format</span>
              </div>
              <span style={{ fontSize: '0.7rem', color: 'var(--color-champagne)', fontFamily: 'var(--font-mono)' }}>
                READY TO SEND
              </span>
            </div>

            <pre className="monospace-preview-box">
              {getFormattedMessage()}
            </pre>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--color-text-inverse-muted)', paddingTop: '0.75rem', borderTop: '1px solid var(--color-graphite-border)' }}>
              <span>Hotline: {BUSINESS_CONFIG.phoneDisplay}</span>
              <span>Available 10 AM - 9 PM</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
