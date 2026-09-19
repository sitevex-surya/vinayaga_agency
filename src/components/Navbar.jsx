import React, { useState, useEffect } from 'react';
import { BUSINESS_CONFIG, NAV_LINKS } from '../data/siteData';
import { useScrollSpy } from '../hooks/useScrollSpy';

const SECTION_IDS = NAV_LINKS.map(link => link.href.replace('#', ''));

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useScrollSpy(SECTION_IDS, 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
  }, [isMobileOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 900 && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileOpen]);

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });

        history.pushState(null, '', href);
        setIsMobileOpen(false);
      }
    }
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
        <div className="container">
          <nav className="nav-wrapper" aria-label="Main Navigation">
            
            {/* BRAND LOGO */}
            <a
              href="#home"
              className="brand-logo"
              title={`${BUSINESS_CONFIG.name} - ${BUSINESS_CONFIG.subTitle}`}
              onClick={(e) => handleNavClick(e, '#home')}
            >
              <div className="logo-symbol">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="#D8C39A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 7V17" stroke="#16A394" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M7 12H17" stroke="#16A394" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="logo-text-group">
                <span className="logo-brand-name">{BUSINESS_CONFIG.name}</span>
                <span className="logo-brand-tag">{BUSINESS_CONFIG.tagline}</span>
              </div>
            </a>

            {/* CENTER: DESKTOP NAVIGATION */}
            <ul className="nav-menu-desktop" id="navMenu">
              {NAV_LINKS.map((link, idx) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <li key={link.href} className="nav-link-item">
                    <a
                      href={link.href}
                      className={`nav-link-anchor ${isActive ? 'active' : ''}`}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* RIGHT: HEADER ACTIONS */}
            <div className="nav-actions">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                className="btn-header-phone"
                aria-label={`Call ${BUSINESS_CONFIG.name} at ${BUSINESS_CONFIG.phoneDisplay}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>{BUSINESS_CONFIG.phone}</span>
              </a>

              <a
                href="#contact"
                className="btn-header-enquire"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                <span>Enquire</span>
                <span className="btn-arrow">↗</span>
              </a>

              {/* MOBILE TOGGLE */}
              <button
                className="mobile-toggle"
                id="mobileToggle"
                aria-expanded={isMobileOpen}
                aria-controls="mobileNav"
                aria-label="Toggle Navigation Menu"
                onClick={() => setIsMobileOpen(prev => !prev)}
              >
                {isMobileOpen ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="8" x2="20" y2="8"></line>
                    <line x1="4" y1="16" x2="20" y2="16"></line>
                  </svg>
                )}
              </button>
            </div>

          </nav>
        </div>
      </header>

      {/* FULLSCREEN MOBILE NAVIGATION DRAWER */}
      <div className={`mobile-nav-fullscreen ${isMobileOpen ? 'is-open' : ''}`} id="mobileNav">
        <ul className="mobile-nav-list">
          {NAV_LINKS.map((link, index) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <span>{link.label}</span>
                  <span className="mobile-nav-num">0{index + 1}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mobile-nav-footer">
          <a
            href="#contact"
            className="btn btn-primary btn-lg"
            style={{ width: '100%' }}
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>Enquire Wholesale Stock</span>
            <span className="btn-arrow">↗</span>
          </a>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href={`tel:${BUSINESS_CONFIG.phoneTel}`}
              className="btn btn-outline"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              📞 Call Hotline
            </a>
            <a
              href={BUSINESS_CONFIG.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              WhatsApp
            </a>
          </div>

          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-inverse-muted)', textAlign: 'center', marginTop: '0.5rem' }}>
            {BUSINESS_CONFIG.name} • {BUSINESS_CONFIG.workingHours}
          </div>
        </div>
      </div>
    </>
  );
}
