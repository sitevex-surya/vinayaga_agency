import React, { useState } from 'react';
import { PRODUCT_CATEGORIES, PRODUCTS_DATA } from '../data/siteData';

function renderProductIcon(iconType) {
  switch (iconType) {
    case 'pill':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.5 20.5L3.5 13.5C2.12 12.12 2.12 9.88 3.5 8.5C4.88 7.12 7.12 7.12 8.5 8.5L15.5 15.5C16.88 16.88 16.88 19.12 15.5 20.5C14.12 21.88 11.88 21.88 10.5 20.5Z"></path>
          <line x1="7" y1="12" x2="12" y2="17"></line>
        </svg>
      );
    case 'flask':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v2a6 6 0 0 0-6 6v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a6 6 0 0 0-6-6V2h-4z"></path>
        </svg>
      );
    case 'syringe':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="2" x2="22" y2="6"></line>
          <line x1="7.5" y1="12.5" x2="11.5" y2="16.5"></line>
          <polyline points="15 3 21 9 10 20 4 20 4 14 15 3"></polyline>
        </svg>
      );
    case 'tube':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a5 5 0 0 0-5 5v14h10V7a5 5 0 0 0-5-5z"></path>
        </svg>
      );
    case 'droplet':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
        </svg>
      );
    case 'cross':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
      );
    case 'shield-check':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      );
    case 'star':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      );
    case 'heart':
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      );
  }
}

export default function ProductPortfolio({ onSelectProduct }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCardId, setActiveCardId] = useState(null);

  const filteredProducts = PRODUCTS_DATA.filter((item) => {
    const matchesCategory = selectedFilter === 'all' || item.category === selectedFilter;
    const matchesSearch = searchQuery.trim() === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCardClick = (product) => {
    setActiveCardId(product.id);
    if (onSelectProduct) {
      onSelectProduct(product.name);
    }
  };

  return (
    <section className="section-padding bg-warm border-bottom-hairline" id="products">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="editorial-tag">
            <span className="editorial-tag-num">[ 03 // PORTFOLIO ]</span>
            <span>Comprehensive Medicine Catalog</span>
          </div>
          <h2 className="section-title">
            Pharmaceutical Product Explorer
          </h2>
          <p className="section-description">
            Explore our broad spectrum of verified dosage forms, branded formulations, and WHO-GMP certified generic medicines.
          </p>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="product-filter-toolbar">
          
          {/* Search Input */}
          <div className="product-search-wrap">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              className="product-search-input"
              placeholder="Search formulations, dosage forms, molecules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search pharmaceutical products"
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search query"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Tabs Filter */}
          <div className="products-category-bar" role="tablist" aria-label="Product categories filter">
            {PRODUCT_CATEGORIES.map((cat) => {
              const count = cat.id === 'all' 
                ? PRODUCTS_DATA.length 
                : PRODUCTS_DATA.filter(p => p.category === cat.id).length;
              
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`cat-tab-btn ${selectedFilter === cat.id ? 'active' : ''}`}
                  role="tab"
                  aria-selected={selectedFilter === cat.id}
                  onClick={() => setSelectedFilter(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className="cat-tab-count">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="products-editorial-grid">
            {filteredProducts.map((product) => {
              const isSelected = activeCardId === product.id;

              return (
                <div
                  key={product.id}
                  className={`product-editorial-card ${isSelected ? 'is-selected' : ''}`}
                  tabIndex={0}
                  role="button"
                  aria-label={`Inquire about ${product.name} stock availability`}
                  onClick={() => handleCardClick(product)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCardClick(product);
                    }
                  }}
                >
                  <div className="product-card-top">
                    <div className="product-icon-wrap">
                      {renderProductIcon(product.iconType)}
                    </div>
                    <span className="product-badge-editorial">{product.badge}</span>
                  </div>

                  <div>
                    <h3 className="product-name-editorial">{product.name}</h3>
                    <p className="product-desc-editorial">{product.description}</p>
                  </div>

                  <div className="product-action-link">
                    <span>Enquire Stock Availability</span>
                    <span className="btn-arrow">↗</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="no-products-found">
            <p>No pharmaceutical categories match your query "{searchQuery}".</p>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => { setSearchQuery(''); setSelectedFilter('all'); }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Category Footer Banner */}
        <div className="product-cta-banner-editorial">
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.35rem' }}>
              Looking for a Specific Brand or Molecule?
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-inverse-muted)', margin: 0 }}>
              Connect with our inventory management desk to verify immediate batch availability and dispatch schedules.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary" style={{ flexShrink: 0 }}>
            <span>Contact Wholesale Desk</span>
            <span className="btn-arrow">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
