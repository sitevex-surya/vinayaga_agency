import React from 'react';

/**
 * Standardized editorial 3-tier section header component
 * @param {{ tag?: string, tagNum?: string, title: string, description?: string, className?: string, align?: 'center' | 'left' }} props
 */
export default function SectionHeader({ tag, tagNum, title, description, className = '', align = 'center' }) {
  return (
    <div className={`section-header text-${align} ${className}`}>
      {tag && (
        <div className="editorial-tag">
          {tagNum && <span className="editorial-tag-num">{tagNum}</span>}
          <span>{tag}</span>
        </div>
      )}
      {title && <h2 className="section-title">{title}</h2>}
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
