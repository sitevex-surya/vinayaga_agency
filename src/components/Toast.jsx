import React, { useEffect } from 'react';

export default function Toast({ message, onClose, duration = 3500 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className="toast-container" role="status" aria-live="polite">
      <div className="toast-box">
        <div style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-jade)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <span style={{ flexGrow: 1, lineHeight: 1.4 }}>{message}</span>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close notification"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-text-inverse-muted)',
            fontSize: '0.9rem',
            cursor: 'pointer',
            padding: '0 0.25rem',
            lineHeight: 1
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
