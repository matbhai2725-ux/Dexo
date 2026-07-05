import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, PhoneCall, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Dexo', href: '#why-choose-dexo' },
    { name: 'Our Process', href: '#process' },
    { name: 'Custom Printing', href: '#custom-printing' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const whatsappUrl = 'https://wa.me/919810716768?text=Hello%20Dexo%20Notebooks%2C%20I%20want%20to%20order%20notebooks.';

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-panel shadow-lg py-3 border-b border-gray-200/50'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 bg-primary-royal rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:bg-primary-orange transition-colors duration-300">
                <span>D</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-orange rounded-full group-hover:bg-primary-royal transition-colors duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-display font-bold tracking-tight text-primary-navy group-hover:text-primary-royal transition-colors duration-300">
                  DEXO <span className="text-primary-orange">NOTEBOOKS</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-mono -mt-1 font-bold">
                  Premium Manufacturing
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-primary-royal transition-colors relative group py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-orange transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA & Contact Details */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex flex-col items-end text-xs font-mono mr-2">
                <span className="text-gray-500">Factory Support</span>
                <a href="tel:+919810716768" className="text-primary-navy font-bold hover:text-primary-orange transition-colors">
                  +91 9810716768
                </a>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary-royal text-white hover:bg-primary-orange transition-colors duration-300 px-5 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transform active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Bulk Quote</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-primary-navy lg:hidden hover:text-primary-orange transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            className="fixed inset-0 z-30 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer Body */}
            <motion.div
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col z-10 border-l border-gray-100"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <span className="text-lg font-display font-bold text-primary-navy">
                  DEXO <span className="text-primary-orange">NOTEBOOKS</span>
                </span>
                <button
                  id="close-mobile-menu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-primary-orange transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-4 overflow-y-auto flex-grow mb-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-base font-semibold text-gray-700 hover:text-primary-royal hover:bg-gray-50 px-3 py-2.5 rounded-lg transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Bottom Quick Contact Section */}
              <div className="mt-auto space-y-4 pt-6 border-t border-gray-100">
                <div className="space-y-2">
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">Contact Sales</p>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919810716768" className="flex items-center gap-2 text-sm font-semibold text-primary-navy">
                      <PhoneCall className="w-4 h-4 text-primary-orange" />
                      <span>+91 9810716768</span>
                    </a>
                    <a href="tel:+918384036447" className="flex items-center gap-2 text-sm font-semibold text-primary-navy">
                      <PhoneCall className="w-4 h-4 text-primary-orange" />
                      <span>+91 8384036447</span>
                    </a>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg font-bold text-center shadow-md hover:bg-[#128C7E] transition-colors duration-300"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export type { Header };
