import React, { useState, useEffect } from 'react';
import { BUSINESS_CONFIG } from '../data/siteData';

export default function WhatsAppModal({ isOpen, onClose, formData, onNotify }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !formData) return null;

  const formattedMessage = `*VINAYAGA AGENCY - B2B WHOLESALE ENQUIRY*
----------------------------------------
*Contact Person:* ${formData.fullName || 'N/A'}
*Pharmacy / Enterprise:* ${formData.pharmacyName || 'N/A'}
*Mobile:* ${formData.phone || 'N/A'}
*Town / Location:* ${formData.location || 'N/A'}
*Requirement Category:* ${formData.category || 'General'}
----------------------------------------
*ENQUIRY DETAILS:*
${formData.message || 'N/A'}
----------------------------------------
_Inquiry submitted via Vinayaga Agency B2B Portal._`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setCopied(true);
      if (onNotify) onNotify('Enquiry text copied to clipboard!');
      setTimeout(() => setCopied(false), 3000);
    } catch (e) {
      const textArea = document.createElement('textarea');
      textArea.value = formattedMessage;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      if (onNotify) onNotify('Enquiry text copied!');
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleSendWhatsApp = () => {
    const url = `${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    if (onNotify) onNotify('Connecting to WhatsApp with your enquiry...');
    onClose();
  };

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content-box">
        {/* Modal Header */}
        <div className="modal-header-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="pulse-dot"></span>
            <div>
              <h3 id="modal-title" style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-text-primary)', margin: 0 }}>
                Confirm WhatsApp Inquiry
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                Target: {BUSINESS_CONFIG.phoneDisplay}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.15rem',
              color: 'var(--color-text-muted)',
              cursor: 'pointer',
              padding: '0.25rem 0.5rem'
            }}
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body-area">
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: 1.5 }}>
            Your wholesale inquiry has been formatted. Click below to launch WhatsApp and transmit directly to our wholesale dispatch desk:
          </p>

          <pre style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8125rem',
            lineHeight: 1.5,
            backgroundColor: 'var(--color-ink)',
            color: '#E2E8F0',
            padding: '1.25rem',
            borderRadius: 'var(--radius-xs)',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            maxHeight: '220px',
            overflowY: 'auto',
            marginBottom: '1.5rem',
            border: '1px solid var(--color-graphite-border)'
          }}>
            {formattedMessage}
          </pre>

          {/* Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button
              type="button"
              className="btn btn-whatsapp btn-lg"
              onClick={handleSendWhatsApp}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Confirm & Launch WhatsApp</span>
              <span className="btn-arrow">↗</span>
            </button>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                type="button"
                className="btn btn-outline"
                onClick={handleCopy}
                style={{ flex: 1, justifyContent: 'center' }}
              >
                {copied ? '✓ Copied Text' : '📋 Copy Text'}
              </button>

              <a
                href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                className="btn btn-secondary"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                📞 Call Hotline
              </a>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer-bar">
          <span>Operating: {BUSINESS_CONFIG.workingHoursShort}</span>
          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-text-muted)',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            Cancel & Edit
          </button>
        </div>
      </div>
    </div>
  );
}
