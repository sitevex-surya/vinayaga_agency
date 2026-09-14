/**
 * VINAYAGA AGENCY - Wholesale Pharmaceutical Medicine Distributor
 * Production Client-Side Script
 * Business Location: Ramanathapuram District, Tamil Nadu
 * Contact & WhatsApp: +91 9342702360
 */

'use strict';

// 1. Centralized Business Configuration
const BUSINESS_CONFIG = {
  name: "VINAYAGA AGENCY",
  tagline: "Wholesale Pharmaceutical Medicine Distributor",
  phone: "9342702360",
  phoneDisplay: "+91 9342702360",
  phoneTel: "+919342702360",
  whatsapp: "919342702360",
  whatsappDisplay: "+91 9342702360",
  whatsappBaseUrl: "https://wa.me/919342702360",
  email: "vinayagaagencypmk@gmail.com",
  workingHours: "10:00 AM TO 9:00 PM",
  location: "Ramanathapuram District, Tamil Nadu",
  areasServed: "Paramakudi, Rameswaram, Mudukulathur, Abiramam, Sathrakudi"
};

// Delivery routes data
const ROUTE_DATA = {
  thursday: {
    title: "Thursday Route",
    route: "Sathrakudi → Rameswaram",
    coverage: "Sathrakudi, Rameswaram, and surrounding areas",
    type: "Direct Wholesale Delivery Van",
    frequency: "Every Thursday Morning"
  },
  friday: {
    title: "Friday Route",
    route: "Mudukulathur → Abiramam",
    coverage: "Mudukulathur, Abiramam, and nearby locations",
    type: "Direct Wholesale Delivery Van",
    frequency: "Every Friday Morning"
  },
  paramakudi: {
    title: "Regular Paramakudi Coverage",
    route: "Paramakudi Town Network",
    coverage: "Established daily local supply network across Paramakudi town",
    type: "Daily Local Stock Supply",
    frequency: "Regular Business Days (Mon - Sat)"
  },
  other: {
    title: "Outside Regular Routes",
    route: "Bus Parcel Service & Regional Courier",
    coverage: "Locations outside regular delivery routes across Ramanathapuram District",
    type: "Express Bus Parcel Facility",
    frequency: "Available on Demand"
  }
};

// Lifecycle Initialization
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initStatsCounter();
  initCategoryFilters();
  initCategoryCardTriggers();
  initRouteLookup();
  initRequirementBuilder();
  initContactForm();
  initModals();
  initScrollSpy();
});

/* ==========================================================================
   1. Header & Navigation Logic
   ========================================================================== */
function initNavbar() {
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky Header Shadow on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile Menu Toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isCurrentlyActive = navMenu.classList.contains('active');
      if (isCurrentlyActive) {
        navMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      } else {
        navMenu.classList.add('active');
        mobileToggle.setAttribute('aria-expanded', 'true');
      }
    });
  }

  // Close Mobile Menu when a Link is Clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close Mobile Menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      if (mobileToggle) {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.focus();
      }
    }
  });
}

/* ==========================================================================
   2. Animated Statistics Counter
   ========================================================================== */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  if (!statNumbers.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-count'), 10);
          const suffix = stat.getAttribute('data-suffix') || '';
          if (isNaN(target)) return;

          let current = 0;
          const duration = 1600; // ms
          const stepTime = 25; // ms
          const totalSteps = duration / stepTime;
          const increment = Math.max(1, Math.ceil(target / totalSteps));

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              stat.textContent = target + suffix;
              clearInterval(timer);
            } else {
              stat.textContent = current + suffix;
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('statsSection');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/* ==========================================================================
   3. Product Category Filters
   ========================================================================== */
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-cat-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.classList.add('fade-in');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   4. Interactive Category Card Triggers
   ========================================================================== */
function initCategoryCardTriggers() {
  const productCards = document.querySelectorAll('.product-cat-card');
  const reqCategorySelect = document.getElementById('contactRequirement');
  const builderCategorySelect = document.getElementById('reqCategory');
  const contactSection = document.getElementById('contact');
  const contactNameInput = document.getElementById('contactName');

  productCards.forEach(card => {
    card.addEventListener('click', () => {
      const categoryName = card.getAttribute('data-cat-name') || card.querySelector('.cat-name')?.textContent?.trim();
      if (!categoryName) return;

      // Match with Contact Form dropdown if matching option exists
      if (reqCategorySelect) {
        let matched = false;
        for (let i = 0; i < reqCategorySelect.options.length; i++) {
          if (reqCategorySelect.options[i].text.toLowerCase().includes(categoryName.toLowerCase()) || 
              categoryName.toLowerCase().includes(reqCategorySelect.options[i].text.toLowerCase())) {
            reqCategorySelect.selectedIndex = i;
            matched = true;
            break;
          }
        }
        if (!matched) {
          reqCategorySelect.value = "General Stock Inquiry";
        }
      }

      // Also match builder select if available
      if (builderCategorySelect) {
        for (let i = 0; i < builderCategorySelect.options.length; i++) {
          if (builderCategorySelect.options[i].text.toLowerCase().includes(categoryName.toLowerCase())) {
            builderCategorySelect.selectedIndex = i;
            // Trigger preview update
            builderCategorySelect.dispatchEvent(new Event('change'));
            break;
          }
        }
      }

      // Smooth scroll to contact form and set focus
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        showToast(`Selected "${categoryName}". Fill the enquiry form below.`);
        if (contactNameInput) {
          setTimeout(() => contactNameInput.focus(), 600);
        }
      }
    });
  });
}

// Global helper for backwards compatibility
window.openCategoryModal = function(categoryName) {
  const reqCategorySelect = document.getElementById('contactRequirement');
  const contactSection = document.getElementById('contact');
  const contactNameInput = document.getElementById('contactName');

  if (reqCategorySelect && categoryName) {
    for (let i = 0; i < reqCategorySelect.options.length; i++) {
      if (reqCategorySelect.options[i].text.toLowerCase().includes(categoryName.toLowerCase())) {
        reqCategorySelect.selectedIndex = i;
        break;
      }
    }
  }

  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    showToast(`Selected category: ${categoryName}`);
    if (contactNameInput) {
      setTimeout(() => contactNameInput.focus(), 600);
    }
  }
};

/* ==========================================================================
   5. Interactive Delivery Route & Town Checker
   ========================================================================== */
function initRouteLookup() {
  const townSelect = document.getElementById('townSelect');
  const lookupBtn = document.getElementById('lookupBtn');
  const lookupResult = document.getElementById('lookupResult');
  const nodeButtons = document.querySelectorAll('.map-nodes-container .node-item');

  function renderRouteResult(val) {
    if (!lookupResult) return;
    if (!val) {
      lookupResult.style.display = 'none';
      return;
    }

    let data;
    if (val === 'sathrakudi' || val === 'rameswaram') {
      data = ROUTE_DATA.thursday;
    } else if (val === 'mudukulathur' || val === 'abiramam') {
      data = ROUTE_DATA.friday;
    } else if (val === 'paramakudi') {
      data = ROUTE_DATA.paramakudi;
    } else {
      data = ROUTE_DATA.other;
    }

    // Safely build DOM nodes to prevent XSS
    lookupResult.replaceChildren();

    const titleEl = document.createElement('strong');
    titleEl.style.color = '#34D399';
    titleEl.style.fontSize = '0.95rem';
    titleEl.style.display = 'block';
    titleEl.style.marginBottom = '0.25rem';
    titleEl.textContent = `📌 ${data.title} (${data.route})`;

    const covEl = document.createElement('div');
    covEl.textContent = `Coverage: ${data.coverage}`;

    const metaEl = document.createElement('div');
    metaEl.style.marginTop = '0.35rem';
    metaEl.style.fontSize = '0.825rem';
    metaEl.style.color = '#CBD5E1';
    metaEl.textContent = `🚚 Method: ${data.type} • 🗓️ Schedule: ${data.frequency}`;

    lookupResult.appendChild(titleEl);
    lookupResult.appendChild(covEl);
    lookupResult.appendChild(metaEl);
    lookupResult.style.display = 'block';
  }

  if (lookupBtn && townSelect) {
    lookupBtn.addEventListener('click', () => {
      renderRouteResult(townSelect.value);
    });
    townSelect.addEventListener('change', () => {
      renderRouteResult(townSelect.value);
    });
  }

  nodeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const town = btn.getAttribute('data-town');
      if (town && townSelect) {
        townSelect.value = town;
        renderRouteResult(town);
        lookupResult?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });
}

/* ==========================================================================
   6. Stock Requirement Builder Tool (B2B Utility)
   ========================================================================== */
function initRequirementBuilder() {
  const pharmacyName = document.getElementById('reqPharmacy');
  const locationName = document.getElementById('reqLocation');
  const categorySelect = document.getElementById('reqCategory');
  const itemsList = document.getElementById('reqItems');
  const previewBox = document.getElementById('reqPreview');
  const copyBtn = document.getElementById('copyReqBtn');
  const whatsappBtn = document.getElementById('whatsappReqBtn');

  function generateBuilderText() {
    const pName = pharmacyName?.value.trim() || '[Pharmacy / Business Name]';
    const loc = locationName?.value.trim() || '[Town / Location]';
    const cat = categorySelect?.options[categorySelect.selectedIndex]?.text || 'General Pharmaceutical Medicines';
    const items = itemsList?.value.trim() || '1. [Medicine Name 1] - [Quantity/Strips/Boxes]\n2. [Medicine Name 2] - [Quantity/Strips/Boxes]';

    return `PHARMACEUTICAL STOCK REQUIREMENT ENQUIRY\n----------------------------------------\n🏢 Pharmacy Name: ${pName}\n📍 Location: ${loc}\n📦 Category: ${cat}\n\n📋 Product Requirements List:\n${items}\n\n----------------------------------------\nSource: Vinayaga Agency Website`;
  }

  const updatePreview = () => {
    if (!previewBox) return;
    previewBox.textContent = generateBuilderText();
  };

  [pharmacyName, locationName, categorySelect, itemsList].forEach(el => {
    if (el) {
      el.addEventListener('input', updatePreview);
      el.addEventListener('change', updatePreview);
    }
  });

  updatePreview();

  // Copy to Clipboard
  if (copyBtn && previewBox) {
    copyBtn.addEventListener('click', () => {
      const text = generateBuilderText();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          showToast('Stock requirement list copied to clipboard!');
        }).catch(() => {
          fallbackCopyText(text);
        });
      } else {
        fallbackCopyText(text);
      }
    });
  }

  // Send via WhatsApp
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      const text = generateBuilderText();
      const targetUrl = `${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
      showToast('Opening WhatsApp with your stock requirement list...');
    });
  }
}

/* ==========================================================================
   7. Customer Contact Form & WhatsApp Handoff Flow
   ========================================================================== */
function normalizeIndianPhone(input) {
  if (!input) return null;
  const digits = input.replace(/\D/g, '');
  if (digits.length === 10 && /^[6-9]\d{9}$/.test(digits)) {
    return digits;
  }
  if (digits.length === 12 && digits.startsWith('91')) {
    const ten = digits.slice(2);
    if (/^[6-9]\d{9}$/.test(ten)) return ten;
  }
  if (digits.length === 11 && digits.startsWith('0')) {
    const ten = digits.slice(1);
    if (/^[6-9]\d{9}$/.test(ten)) return ten;
  }
  return null;
}

function isValidEmail(email) {
  if (!email) return true; // Optional field
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  const nameInput = document.getElementById('contactName');
  const pharmacyInput = document.getElementById('contactPharmacy');
  const phoneInput = document.getElementById('contactPhone');
  const emailInput = document.getElementById('contactEmail');
  const locationInput = document.getElementById('contactLocation');
  const reqCategorySelect = document.getElementById('contactRequirement');
  const messageInput = document.getElementById('contactMessage');
  const submitBtn = document.getElementById('contactSubmitBtn');
  const hpInput = document.getElementById('contactHp');

  let isSubmitting = false;
  let lastSubmitTime = 0;

  function setFieldError(groupId, hasError) {
    const group = document.getElementById(groupId);
    if (!group) return;
    if (hasError) {
      group.classList.add('has-error');
      group.classList.remove('has-success');
    } else {
      group.classList.remove('has-error');
      group.classList.add('has-success');
    }
  }

  // Real-time input validation cleanups
  nameInput?.addEventListener('input', () => setFieldError('groupName', !nameInput.value.trim()));
  pharmacyInput?.addEventListener('input', () => setFieldError('groupPharmacy', !pharmacyInput.value.trim()));
  phoneInput?.addEventListener('input', () => {
    const valid = !!normalizeIndianPhone(phoneInput.value.trim());
    setFieldError('groupPhone', !valid);
  });
  emailInput?.addEventListener('input', () => {
    const val = emailInput.value.trim();
    setFieldError('groupEmail', val.length > 0 && !isValidEmail(val));
  });
  locationInput?.addEventListener('input', () => setFieldError('groupLocation', !locationInput.value.trim()));

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Anti-spam Honeypot Check
    if (hpInput && hpInput.value.trim() !== '') {
      // Bot detected - silently ignore
      return;
    }

    // Cooldown Protection (3s minimum)
    const now = Date.now();
    if (now - lastSubmitTime < 3000 || isSubmitting) {
      showToast('Please wait a moment before submitting again.');
      return;
    }

    // Extract & Trim Values
    const name = nameInput?.value.trim() || '';
    const pharmacy = pharmacyInput?.value.trim() || '';
    const rawPhone = phoneInput?.value.trim() || '';
    const normalizedPhone = normalizeIndianPhone(rawPhone);
    const email = emailInput?.value.trim() || '';
    const location = locationInput?.value.trim() || '';
    const category = reqCategorySelect?.value || 'General Stock Inquiry';
    const message = messageInput?.value.trim() || '';

    // Validate Required Fields
    let hasError = false;

    if (!name || name.length < 2) {
      setFieldError('groupName', true);
      hasError = true;
    } else {
      setFieldError('groupName', false);
    }

    if (!pharmacy || pharmacy.length < 2) {
      setFieldError('groupPharmacy', true);
      hasError = true;
    } else {
      setFieldError('groupPharmacy', false);
    }

    if (!normalizedPhone) {
      setFieldError('groupPhone', true);
      hasError = true;
    } else {
      setFieldError('groupPhone', false);
    }

    if (email && !isValidEmail(email)) {
      setFieldError('groupEmail', true);
      hasError = true;
    } else {
      setFieldError('groupEmail', false);
    }

    if (!location || location.length < 2) {
      setFieldError('groupLocation', true);
      hasError = true;
    } else {
      setFieldError('groupLocation', false);
    }

    if (hasError) {
      showToast('Please correct the highlighted fields.');
      return;
    }

    // Build Formatted WhatsApp Message
    const formattedEmail = email ? email : 'Not Provided';
    const formattedDetails = message ? message : 'General Stock Availability & Pricing Enquiry';

    const whatsappMessage = 
`NEW STOCK AVAILABILITY ENQUIRY

Contact Person:
${name}

Pharmacy / Business:
${pharmacy}

Phone:
${normalizedPhone}

Email:
${formattedEmail}

Location:
${location}

Product Category:
${category}

Product / Requirement Details:
${formattedDetails}

Source:
Vinayaga Agency Website`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const targetWhatsAppUrl = `${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodedMessage}`;

    // UI Loading & Submission State
    isSubmitting = true;
    lastSubmitTime = now;
    if (submitBtn) {
      submitBtn.classList.add('is-loading');
      const spanEl = submitBtn.querySelector('span');
      if (spanEl) spanEl.textContent = 'Preparing WhatsApp Enquiry...';
    }

    // Open WhatsApp in a new tab
    try {
      window.open(targetWhatsAppUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      // Handled via fallback modal
    }

    // Show honest confirmation handoff modal
    setTimeout(() => {
      openHonestHandoffModal({
        name,
        pharmacy,
        phone: normalizedPhone,
        email: formattedEmail,
        location,
        category,
        details: formattedDetails,
        whatsappUrl: targetWhatsAppUrl,
        rawMessage: whatsappMessage
      });

      // Reset form and UI state
      contactForm.reset();
      document.querySelectorAll('.form-group').forEach(g => {
        g.classList.remove('has-error', 'has-success');
      });

      if (submitBtn) {
        submitBtn.classList.remove('is-loading');
        const spanEl = submitBtn.querySelector('span');
        if (spanEl) spanEl.textContent = 'Send Enquiry';
      }
      isSubmitting = false;
    }, 400);
  });
}

/* ==========================================================================
   8. Honest WhatsApp Handoff Modal System
   ========================================================================== */
function openHonestHandoffModal(data) {
  const modal = document.getElementById('successModal');
  const modalContent = document.getElementById('successModalContent');
  if (!modal || !modalContent) return;

  // Build clean DOM tree safely without raw innerHTML interpolation of user input
  modalContent.replaceChildren();

  const container = document.createElement('div');
  container.style.textAlign = 'center';
  container.style.padding = '0.5rem 0';

  // Icon
  const iconWrap = document.createElement('div');
  iconWrap.style.width = '64px';
  iconWrap.style.height = '64px';
  iconWrap.style.borderRadius = '50%';
  iconWrap.style.background = '#D1FAE5';
  iconWrap.style.color = '#059669';
  iconWrap.style.display = 'flex';
  iconWrap.style.alignItems = 'center';
  iconWrap.style.justifyContent = 'center';
  iconWrap.style.margin = '0 auto 1.25rem auto';
  iconWrap.style.fontSize = '2rem';
  iconWrap.textContent = '✓';

  // Title
  const title = document.createElement('h3');
  title.id = 'modalTitle';
  title.style.fontSize = '1.45rem';
  title.style.color = '#0A2540';
  title.style.marginBottom = '0.5rem';
  title.textContent = 'Enquiry Ready for WhatsApp';

  // Subtitle
  const sub = document.createElement('p');
  sub.style.color = '#475569';
  sub.style.fontSize = '0.95rem';
  sub.style.marginBottom = '1.25rem';
  sub.style.lineHeight = '1.55';
  sub.textContent = 'Your stock requirement has been compiled for Vinayaga Agency (+91 9342702360). WhatsApp has been opened in a new tab.';

  // Notice Alert Box
  const noticeBox = document.createElement('div');
  noticeBox.style.background = '#ECFDF5';
  noticeBox.style.border = '1px solid #A7F3D0';
  noticeBox.style.borderRadius = '8px';
  noticeBox.style.padding = '0.85rem 1rem';
  noticeBox.style.fontSize = '0.875rem';
  noticeBox.style.color = '#065F46';
  noticeBox.style.marginBottom = '1.25rem';
  noticeBox.style.textAlign = 'left';
  noticeBox.innerHTML = '<strong>Important Step:</strong> Please tap <strong>"Send"</strong> inside WhatsApp to deliver your enquiry directly to our wholesale desk.';

  // Summary Card
  const summaryBox = document.createElement('div');
  summaryBox.style.background = '#F8FAFC';
  summaryBox.style.border = '1px solid #E2E8F0';
  summaryBox.style.padding = '1rem';
  summaryBox.style.borderRadius = '8px';
  summaryBox.style.fontSize = '0.875rem';
  summaryBox.style.textAlign = 'left';
  summaryBox.style.marginBottom = '1.5rem';

  const rows = [
    { label: 'Contact Person', val: data.name },
    { label: 'Pharmacy', val: data.pharmacy },
    { label: 'Phone', val: data.phone },
    { label: 'Location', val: data.location },
    { label: 'Category', val: data.category }
  ];

  rows.forEach(r => {
    const rowDiv = document.createElement('div');
    rowDiv.style.marginBottom = '0.35rem';
    
    const strong = document.createElement('strong');
    strong.textContent = `${r.label}: `;
    strong.style.color = '#0A2540';
    
    const span = document.createElement('span');
    span.textContent = r.val;
    span.style.color = '#334155';
    
    rowDiv.appendChild(strong);
    rowDiv.appendChild(span);
    summaryBox.appendChild(rowDiv);
  });

  // Action Buttons Group
  const actionsGroup = document.createElement('div');
  actionsGroup.className = 'modal-actions-group';

  // Button 1: Re-open WhatsApp
  const waBtn = document.createElement('a');
  waBtn.href = data.whatsappUrl;
  waBtn.target = '_blank';
  waBtn.rel = 'noopener noreferrer';
  waBtn.className = 'btn btn-whatsapp';
  waBtn.style.width = '100%';
  waBtn.textContent = '💬 Open WhatsApp Enquiry';

  // Button 2: Copy Message
  const copyBtn = document.createElement('button');
  copyBtn.type = 'button';
  copyBtn.className = 'btn btn-secondary';
  copyBtn.style.width = '100%';
  copyBtn.style.color = '#0A2540';
  copyBtn.style.borderColor = '#CBD5E1';
  copyBtn.textContent = '📋 Copy Message Text';
  copyBtn.addEventListener('click', () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(data.rawMessage).then(() => {
        showToast('Enquiry message copied to clipboard!');
      }).catch(() => {
        fallbackCopyText(data.rawMessage);
      });
    } else {
      fallbackCopyText(data.rawMessage);
    }
  });

  // Button 3: Direct Call
  const callBtn = document.createElement('a');
  callBtn.href = `tel:${BUSINESS_CONFIG.phoneTel}`;
  callBtn.className = 'btn btn-navy';
  callBtn.style.width = '100%';
  callBtn.textContent = `📞 Call ${BUSINESS_CONFIG.phone}`;

  actionsGroup.appendChild(waBtn);
  actionsGroup.appendChild(copyBtn);
  actionsGroup.appendChild(callBtn);

  container.appendChild(iconWrap);
  container.appendChild(title);
  container.appendChild(sub);
  container.appendChild(noticeBox);
  container.appendChild(summaryBox);
  container.appendChild(actionsGroup);

  modalContent.appendChild(container);
  modal.classList.add('active');

  // Focus the primary button in modal
  setTimeout(() => waBtn.focus(), 100);
}

/* ==========================================================================
   9. Modal Control System
   ========================================================================== */
function initModals() {
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  const closeBtns = document.querySelectorAll('.modal-close');

  function closeModal(overlay) {
    overlay.classList.remove('active');
  }

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modalOverlays.forEach(closeModal);
    });
  });

  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modalOverlays.forEach(closeModal);
    }
  });
}

/* ==========================================================================
   10. Toast Notification & Copy Fallback Utilities
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.replaceChildren();

  const iconSpan = document.createElement('span');
  iconSpan.textContent = 'ℹ️';

  const textSpan = document.createElement('span');
  textSpan.textContent = message;

  toast.appendChild(iconSpan);
  toast.appendChild(textSpan);
  toast.classList.add('show');

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

function fallbackCopyText(text) {
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    if (successful) {
      showToast('Text copied to clipboard!');
    } else {
      showToast('Failed to copy. Please select and copy manually.');
    }
  } catch (err) {
    showToast('Failed to copy. Please copy manually.');
  }
}

/* ==========================================================================
   11. ScrollSpy for Active Navigation Link Highlighting
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 130;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    if (current) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }
  }, { passive: true });
}
