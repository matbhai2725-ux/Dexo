import React from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import FloatingButtons from './components/FloatingButtons';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import ProcessSection from './components/ProcessSection';
import FeaturesAndFaqs from './components/FeaturesAndFaqs';
import TestimonialCarousel from './components/TestimonialCarousel';
import BulkEnquiryForm from './components/BulkEnquiryForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 selection:bg-primary-royal selection:text-white">
      
      {/* Premium initial flip-book Preloader */}
      <Loader />

      {/* Custom Mouse Cursor for desktops */}
      <CustomCursor />

      {/* Persistent floating triggers: WhatsApp & Call Sales */}
      <FloatingButtons />

      {/* Sticky responsive navigation bar */}
      <Header />

      {/* Core Landing Layout segments */}
      <main>
        
        {/* Full-screen floating hero panel */}
        <Hero />

        {/* Catalog: Grid of the 15 requested notebook products */}
        <ProductsSection />

        {/* Narrative, Why Choose Dexo, and Leadership Teams */}
        <AboutSection />

        {/* Manufacturing process steps */}
        <ProcessSection />

        {/* Statistics highlights, Trust badges & Collapsible FAQ accordions */}
        <FeaturesAndFaqs />

        {/* Testimonials Auto Carousel */}
        <TestimonialCarousel />

        {/* Institutional Bulk Order Enquiry Form */}
        <BulkEnquiryForm />

      </main>

      {/* Contact and Google Maps location map */}
      <Footer />

    </div>
  );
}
