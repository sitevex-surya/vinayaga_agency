import React, { useState, useEffect } from 'react';
import ScrollProgress from './components/ScrollProgress';
import BrandLoader from './components/BrandLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import TimelineSection from './components/TimelineSection';
import ValueProps from './components/ValueProps';
import ProductPortfolio from './components/ProductPortfolio';
import DeliveryNetwork from './components/DeliveryNetwork';
import StockBuilder from './components/StockBuilder';
import VisionMission from './components/VisionMission';
import ProcessSection from './components/ProcessSection';
import CtaBanner from './components/CtaBanner';
import ContactSection from './components/ContactSection';
import WhatsAppModal from './components/WhatsAppModal';
import Toast from './components/Toast';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalFormData, setModalFormData] = useState(null);
  const [selectedProductCategory, setSelectedProductCategory] = useState('');

  const handleNotify = (msg) => {
    setToastMessage(msg);
  };

  const handleOpenModal = (data) => {
    setModalFormData(data);
    setModalOpen(true);
  };

  const handleProductInquiry = (categoryName) => {
    setSelectedProductCategory(categoryName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    handleNotify(`Selected requirement category: ${categoryName}`);
  };

  return (
    <>
      {/* Initial Brand Loader */}
      <BrandLoader isLoading={isLoading} onFinish={() => setIsLoading(false)} />

      {/* Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* Header Navigation */}
      <Navbar />

      {/* Main Content Sections with Deliberate 2026 Visual Rhythm */}
      <main id="main-content">
        <Hero onNotify={handleNotify} />
        <StatsSection />
        <AboutSection />
        <TimelineSection />
        <ValueProps />
        <ProductPortfolio onSelectProduct={handleProductInquiry} />
        <DeliveryNetwork onNotify={handleNotify} />
        <StockBuilder onNotify={handleNotify} />
        <VisionMission />
        <ProcessSection />
        <CtaBanner onNotify={handleNotify} />
        <ContactSection
          selectedCategory={selectedProductCategory}
          onOpenModal={handleOpenModal}
          onNotify={handleNotify}
        />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* WhatsApp Modal */}
      <WhatsAppModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        formData={modalFormData}
        onNotify={handleNotify}
      />

      {/* Notification Toast */}
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />

      {/* Floating Utilities */}
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
