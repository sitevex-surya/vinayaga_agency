import React, { useState, useEffect } from 'react';
import { BUSINESS_CONFIG, REQUIREMENT_CATEGORIES } from '../data/siteData';

export default function ContactSection({ selectedCategory, onOpenModal, onNotify }) {
  const [formData, setFormData] = useState({
    fullName: '',
    pharmacyName: '',
    phone: '',
    location: '',
    category: REQUIREMENT_CATEGORIES[0],
    message: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedCategory) {
      const match = REQUIREMENT_CATEGORIES.find(
        (c) => c.toLowerCase().includes(selectedCategory.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, category: match }));
      }
    }
  }, [selectedCategory]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Contact name is required';
    if (!formData.pharmacyName.trim()) errs.pharmacyName = 'Pharmacy / Enterprise name is required';
    
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.location.trim()) errs.location = 'Town or Area location is required';
    if (!formData.message.trim()) errs.message = 'Please specify your medicine requirement or inquiry';

    if (formData.honeypot) {
      errs.honeypot = 'Spam detected';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      if (onNotify) onNotify('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      if (onOpenModal) {
        onOpenModal(formData);
      }
      if (onNotify) {
        onNotify('Enquiry prepared! Review details to send via WhatsApp.');
      }
    }, 300);
  };

  return (
    <section className="section-padding bg-warm border-bottom-hairline" id="contact">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="editorial-tag">
            <span className="editorial-tag-num">[ 08 // CONTACT ]</span>
            <span>Direct Wholesale Desk</span>
          </div>
          <h2 className="section-title">
            Let’s Build Reliable Partnerships.
          </h2>
          <p className="section-description">
            Connect directly with our distribution team for medicine pricing, wholesale accounts, stock inquiries, or route deliveries.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-editorial-grid">
          
          {/* Left: Wholesale Desk Information */}
          <div className="contact-info-panel">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
              Vinayaga Agency Wholesale Desk
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Supplying pharmacies, hospitals, and clinics across Ramanathapuram District with dependable medicine stock and regular delivery logistics.
            </p>

            <div className="contact-details-list">
              {/* Phone */}
              <div className="contact-detail-row">
                <div className="contact-detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                    Order Hotline
                  </div>
                  <a
                    href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                    style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-text-primary)' }}
                  >
                    {BUSINESS_CONFIG.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="contact-detail-row">
                <div className="contact-detail-icon" style={{ backgroundColor: 'var(--color-jade-light)', color: 'var(--color-jade-dark)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.41a8.217 8.217 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                    WhatsApp Orders
                  </div>
                  <a
                    href={BUSINESS_CONFIG.whatsappBaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-jade-dark)' }}
                  >
                    {BUSINESS_CONFIG.whatsappDisplay} (Fast Response)
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="contact-detail-row">
                <div className="contact-detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                    Email Correspondence
                  </div>
                  <a
                    href={`mailto:${BUSINESS_CONFIG.email}`}
                    style={{ fontSize: '0.925rem', fontWeight: 600, color: 'var(--color-text-primary)' }}
                  >
                    {BUSINESS_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="contact-detail-row">
                <div className="contact-detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                    Operating Hours
                  </div>
                  <div style={{ fontSize: '0.925rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                    {BUSINESS_CONFIG.workingHours}
                  </div>
                </div>
              </div>

              {/* Coverage Location */}
              <div className="contact-detail-row">
                <div className="contact-detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                    Operational Footprint
                  </div>
                  <div style={{ fontSize: '0.925rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                    {BUSINESS_CONFIG.location}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.15rem' }}>
                    {BUSINESS_CONFIG.areasServed}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={BUSINESS_CONFIG.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                className="btn btn-outline btn-sm"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                Call Hotline
              </a>
            </div>
          </div>

          {/* Right: B2B Contact Form */}
          <div className="contact-form-panel">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '0.35rem' }}>
              Send Wholesale Inquiry
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              Submit your inquiry and our fulfillment team will respond with verified stock availability and dispatch terms.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: 'none', visibility: 'hidden' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="contact-fullname" className="form-label">Contact Person *</label>
                  <input
                    id="contact-fullname"
                    name="fullName"
                    type="text"
                    className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                    placeholder="e.g. Dr. Rajesh / S. Kumar"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  {errors.fullName && <div style={{ color: '#DC2626', fontSize: '0.75rem', marginTop: '0.2rem' }}>{errors.fullName}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-pharmacy" className="form-label">Pharmacy / Enterprise *</label>
                  <input
                    id="contact-pharmacy"
                    name="pharmacyName"
                    type="text"
                    className={`form-control ${errors.pharmacyName ? 'is-invalid' : ''}`}
                    placeholder="e.g. Life Care Medicals"
                    value={formData.pharmacyName}
                    onChange={handleChange}
                    required
                  />
                  {errors.pharmacyName && <div style={{ color: '#DC2626', fontSize: '0.75rem', marginTop: '0.2rem' }}>{errors.pharmacyName}</div>}
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="contact-phone" className="form-label">Mobile Number *</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  {errors.phone && <div style={{ color: '#DC2626', fontSize: '0.75rem', marginTop: '0.2rem' }}>{errors.phone}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-location" className="form-label">Town / City *</label>
                  <input
                    id="contact-location"
                    name="location"
                    type="text"
                    className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                    placeholder="e.g. Paramakudi / Rameswaram"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                  {errors.location && <div style={{ color: '#DC2626', fontSize: '0.75rem', marginTop: '0.2rem' }}>{errors.location}</div>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-category" className="form-label">Requirement Category</label>
                <select
                  id="contact-category"
                  name="category"
                  className="form-control"
                  value={formData.category}
                  onChange={handleChange}
                >
                  {REQUIREMENT_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">Medicine Names / Order Details *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  placeholder="Specify medicine names, brand requirements, quantities, or route schedule questions..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                {errors.message && <div style={{ color: '#DC2626', fontSize: '0.75rem', marginTop: '0.2rem' }}>{errors.message}</div>}
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Review & Transmit via WhatsApp</span>
                    <span className="btn-arrow">↗</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
