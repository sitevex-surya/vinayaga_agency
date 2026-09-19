/**
 * VINAYAGA AGENCY - Centralized Business Data & Content Store
 * Location: Ramanathapuram District, Tamil Nadu
 * Contact & WhatsApp: +91 9342702360
 */

export const BUSINESS_CONFIG = {
  name: "VINAYAGA AGENCY",
  tagline: "PHARMACEUTICAL DISTRIBUTION",
  subTitle: "Wholesale Pharmaceutical Medicine Distributor",
  phone: "9342702360",
  phoneDisplay: "+91 9342702360",
  phoneTel: "+919342702360",
  whatsapp: "919342702360",
  whatsappDisplay: "+91 9342702360",
  whatsappBaseUrl: "https://wa.me/919342702360",
  email: "vinayagaagencypmk@gmail.com",
  workingHours: "10:00 AM TO 9:00 PM (Mon - Sat)",
  workingHoursShort: "10:00 AM TO 9:00 PM",
  location: "Ramanathapuram District, Tamil Nadu",
  areasServed: "Paramakudi, Rameswaram, Mudukulathur, Abiramam, Sathrakudi",
  legacyYears: "50+",
  establishedYear: "1970s"
};

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#timeline", label: "History" },
  { href: "#products", label: "Products" },
  { href: "#network", label: "Network" },
  { href: "#process", label: "Process" },
  { href: "#builder", label: "Stock Tool" },
  { href: "#contact", label: "Contact" }
];

export const STATS_DATA = [
  { id: "stat-1", count: 50, suffix: "+", label: "Years of Heritage", sub: "Established in 1970s", isGold: true },
  { id: "stat-2", text: "100%", label: "Stock Availability", sub: "High Inventory Reliability", isJade: true },
  { id: "stat-3", text: "5+ Towns", label: "Scheduled Coverage", sub: "Direct Van Delivery Routes", isJade: false },
  { id: "stat-4", text: "B2B", label: "Pharmacy Partnerships", sub: "Retail & Hospital Supply", isGold: true }
];

export const TIMELINE_DATA = [
  {
    period: "1970s",
    yearLabel: "Foundation",
    title: "Established Regional Legacy",
    description: "Founded in Ramanathapuram District with a dedicated mission to provide genuine medicine supplies and build lasting pharmacy trust.",
    isCurrent: false
  },
  {
    period: "1990s",
    yearLabel: "Expansion",
    title: "Scheduled Delivery Network",
    description: "Expanded dedicated delivery routes across Paramakudi, Sathrakudi, Mudukulathur, Abiramam, and Rameswaram.",
    isCurrent: false
  },
  {
    period: "2010s",
    yearLabel: "Portfolio",
    title: "Comprehensive Pharmaceutical Portfolio",
    description: "Diversified stock inventory across tablets, capsules, liquids, injections, branded formulations, and WHO-GMP generic lines.",
    isCurrent: false
  },
  {
    period: "2026",
    yearLabel: "Present Day",
    title: "Modernized Digital B2B Supply Chain",
    description: "Over 50+ years of unshakeable business relationships serving retail & hospital pharmacy partners with rapid digital ordering.",
    isCurrent: true
  }
];

export const VALUE_PROPOSITIONS = [
  {
    id: "val-1",
    title: "Reliable Stock Depth",
    description: "Maintaining adequate inventory buffers to support regular retail pharmacy requirements and prevent out-of-stock situations.",
    iconType: "box"
  },
  {
    id: "val-2",
    title: "Broad Product Range",
    description: "Branded and generic pharmaceutical products across multiple therapeutic categories, dosage forms, and specialty lines.",
    iconType: "layers"
  },
  {
    id: "val-3",
    title: "Scheduled Route Delivery",
    description: "Regular weekly delivery routes designed around customer requirements to ensure prompt, predictable restocking cycles.",
    iconType: "clock"
  },
  {
    id: "val-4",
    title: "Decades of Experience",
    description: "Over five decades of pharmaceutical distribution expertise, knowledgeable order handling, and dependable management.",
    iconType: "users"
  },
  {
    id: "val-5",
    title: "Strong Regional Reach",
    description: "Established distribution footprint spanning Ramanathapuram District, Paramakudi hub, and surrounding towns.",
    iconType: "map"
  },
  {
    id: "val-6",
    title: "Long-Term Partnerships",
    description: "B2B relationships built on consistent fulfillment, honest communication, batch compliance, and mutual respect.",
    iconType: "shield"
  }
];

export const PRODUCT_CATEGORIES = [
  { id: "all", label: "All Formulations" },
  { id: "formulation", label: "Oral & Topical" },
  { id: "medicine", label: "Branded & Generic" },
  { id: "specialty", label: "Sterile & Consumables" }
];

export const PRODUCTS_DATA = [
  {
    id: "prod-1",
    name: "Tablets & Capsules",
    category: "formulation",
    badge: "Oral Solids",
    description: "Comprehensive range of solid oral dosage forms including coated, sustained-release, and effervescent formulations.",
    iconType: "pill"
  },
  {
    id: "prod-2",
    name: "Syrups & Suspensions",
    category: "formulation",
    badge: "Oral Liquids",
    description: "Pediatric and adult liquid formulations, cough remedies, antacids, and reconstituted suspensions.",
    iconType: "flask"
  },
  {
    id: "prod-3",
    name: "Injections & Parenterals",
    category: "specialty",
    badge: "Critical Care",
    description: "Sterile parenteral products, IV fluids, ampoules, and vials for clinical and hospital pharmacy supply.",
    iconType: "syringe"
  },
  {
    id: "prod-4",
    name: "Topical Preparations",
    category: "formulation",
    badge: "Derma Care",
    description: "Ointments, creams, gels, lotions, and dermatological formulations for external clinical application.",
    iconType: "tube"
  },
  {
    id: "prod-5",
    name: "Ophthalmic & Otic Drops",
    category: "formulation",
    badge: "Sterile Drops",
    description: "Sterile ophthalmic eye drops, otic ear drops, and nasal spray formulations for targeted care.",
    iconType: "droplet"
  },
  {
    id: "prod-6",
    name: "General Formulations",
    category: "medicine",
    badge: "Primary Care",
    description: "High-demand OTC pharmaceutical formulations, pain management, multivitamin supplements, and minerals.",
    iconType: "cross"
  },
  {
    id: "prod-7",
    name: "Generic Medicines",
    category: "medicine",
    badge: "WHO-GMP Lines",
    description: "Quality-assured generic drug alternatives conforming to national and WHO-GMP manufacturing standards.",
    iconType: "shield-check"
  },
  {
    id: "prod-8",
    name: "Branded Medicines",
    category: "medicine",
    badge: "Leading Pharma",
    description: "Leading branded pharmaceutical formulations sourced through verified channels and reputed manufacturers.",
    iconType: "star"
  },
  {
    id: "prod-9",
    name: "Healthcare Consumables",
    category: "specialty",
    badge: "Consumables",
    description: "Essential wellness supplies, surgical disposables, antiseptic liquids, and hospital pharmacy consumables.",
    iconType: "heart"
  }
];

export const ROUTE_DATA = {
  thursday: {
    id: "thursday",
    title: "Thursday Route",
    route: "Sathrakudi → Rameswaram",
    coverage: "Sathrakudi, Rameswaram, and surrounding coastal belt",
    type: "Direct Wholesale Delivery Van",
    frequency: "Every Thursday Morning",
    badge: "Thursday",
    badgeType: "accent",
    cardIndex: 0
  },
  friday: {
    id: "friday",
    title: "Friday Route",
    route: "Mudukulathur → Abiramam",
    coverage: "Mudukulathur, Abiramam, and nearby central belt",
    type: "Direct Wholesale Delivery Van",
    frequency: "Every Friday Morning",
    badge: "Friday",
    badgeType: "secondary",
    cardIndex: 1
  },
  paramakudi: {
    id: "paramakudi",
    title: "Paramakudi Hub",
    route: "Paramakudi Town Network",
    coverage: "Established daily local supply network across Paramakudi town",
    type: "Daily Local Stock Supply",
    frequency: "Regular Business Days (Mon - Sat)",
    badge: "Daily / Regular",
    badgeType: "primary",
    cardIndex: 2
  },
  other: {
    id: "other",
    title: "District Parcel Network",
    route: "Express Bus Parcel & Courier",
    coverage: "All locations outside regular delivery routes across Ramanathapuram District",
    type: "Express Bus Parcel Facility",
    frequency: "Available on Demand Daily",
    badge: "Express Parcel",
    badgeType: "neutral",
    cardIndex: 3
  }
};

export const TOWNS_DATA = [
  { id: "paramakudi", name: "Paramakudi", schedule: "Daily Hub", routeKey: "paramakudi" },
  { id: "sathrakudi", name: "Sathrakudi", schedule: "Thu Delivery", routeKey: "thursday" },
  { id: "rameswaram", name: "Rameswaram", schedule: "Thu Delivery", routeKey: "thursday" },
  { id: "mudukulathur", name: "Mudukulathur", schedule: "Fri Delivery", routeKey: "friday" },
  { id: "abiramam", name: "Abiramam", schedule: "Fri Delivery", routeKey: "friday" },
  { id: "other", name: "Other District Areas", schedule: "Bus Parcel", routeKey: "other" }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    label: "SOURCE",
    title: "Requirement Submission",
    description: "Retail pharmacy submits required medicine quantities and brand specifications via WhatsApp, call, or web tool."
  },
  {
    step: "02",
    label: "QUALITY",
    title: "Stock & Batch Verification",
    description: "Our inventory team checks warehouse stock availability, batch expiry validity, and prepares order allocation."
  },
  {
    step: "03",
    label: "DISTRIBUTE",
    title: "Order Dispatch Packing",
    description: "Medicines are carefully organized, batch-logged, packed securely, and scheduled for designated delivery routes."
  },
  {
    step: "04",
    label: "DELIVER",
    title: "Safe Regional Fulfillment",
    description: "Orders are delivered on schedule directly to your pharmacy doorstep via our delivery van or express bus parcel."
  }
];

export const REQUIREMENT_CATEGORIES = [
  "General Stock Inquiry",
  "Tablets & Capsules",
  "Syrups & Suspensions",
  "Injections & Parenterals",
  "Topical Preparations",
  "Generic Medicines (WHO-GMP)",
  "Branded Medicines",
  "Healthcare Consumables",
  "Delivery Schedule / New Account"
];

export const BUILDER_CATEGORIES = [
  "General Formulations",
  "Tablets & Capsules",
  "Syrups & Suspensions",
  "Injections & Sterile Lines",
  "Topicals & Drops",
  "Branded & Generic Mix"
];
