import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUp, Send, ShieldAlert } from 'lucide-react';

export default function Footer() {
  const whatsappUrl = 'https://wa.me/919810716768?text=Hello%20Dexo%20Notebooks%2C%20I%20want%20to%20order%20notebooks.';
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-primary-navy text-white pt-20 pb-8 relative overflow-hidden border-t-4 border-primary-orange">
      {/* Decorative vector overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.95),rgba(15,23,42,1))]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-royal rounded-full filter blur-[150px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Main Grid: Info, Links, Map */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Column 1: Brand Info & Address Details */}
          <div className="md:col-span-4 space-y-6">
            <div className="space-y-3">
              <span className="text-2xl font-display font-bold tracking-tight">
                DEXO <span className="text-primary-orange">NOTEBOOKS</span>
              </span>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                India's high-fidelity direct manufacturer of academic, college, laboratory, and corporate stationery registers. Providing certified premium writing paper with robust binder threads.
              </p>
            </div>

            {/* Structured Contact Details */}
            <div className="space-y-4 text-xs sm:text-sm text-gray-300">
              
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-orange shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-bold text-white">Factory Address:</p>
                  <p className="text-gray-400">B-139, Vasant Kunj Enclave, New Delhi, Delhi 110070, India</p>
                </div>
              </div>

              {/* Phones - clearly listing both required numbers */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-orange shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-bold text-white">Direct Phone Call Support:</p>
                  <p className="text-gray-400">
                    <a href="tel:+919810716768" className="hover:text-primary-orange transition-colors">+91 9810716768</a> (Sales)
                  </p>
                  <p className="text-gray-400">
                    Alternative: <a href="tel:+918384036447" className="hover:text-primary-orange transition-colors">+91 8384036447</a> (Support)
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-orange shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-bold text-white">Email Address:</p>
                  <p className="text-gray-400 hover:text-white transition-colors">
                    <a href="mailto:dexonotebooks@gmail.com">dexonotebooks@gmail.com</a>
                  </p>
                </div>
              </div>

              {/* Timing */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-orange shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-bold text-white">Business Working Hours:</p>
                  <p className="text-gray-400">Monday - Saturday (09:00 AM - 07:00 PM)</p>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: Quick Links Navigation */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm font-display font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Stationery Catalog
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <li><a href="#products" className="hover:text-primary-orange transition-colors">₹20 School Notebook</a></li>
              <li><a href="#products" className="hover:text-primary-orange transition-colors">₹30 Premium Notebook</a></li>
              <li><a href="#products" className="hover:text-primary-orange transition-colors">₹50 Hard Cover Notebook</a></li>
              <li><a href="#products" className="hover:text-primary-orange transition-colors">Dexo Pulse Spiral registers</a></li>
              <li><a href="#products" className="hover:text-primary-orange transition-colors">Science Practical Labs</a></li>
              <li><a href="#products" className="hover:text-primary-orange transition-colors">Drawing Sketchbooks</a></li>
              <li><a href="#products" className="hover:text-primary-orange transition-colors">School Branding Custom Logo</a></li>
            </ul>
          </div>

          {/* Column 3: Location Map Iframe */}
          <div className="md:col-span-5 space-y-6">
            <h4 className="text-sm font-display font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Find Our Factory Location
            </h4>
            
            {/* Interactive Embedded Google Map Iframe */}
            <div className="w-full h-[220px] rounded-2xl overflow-hidden border border-white/10 shadow-lg relative bg-slate-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.4604928509376!2d77.13508687627448!3d28.5258525757235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dee255776d5%3A0xe54e2f9d5040bb53!2sVasant%20Kunj%20Enclave%2C%20Vasant%20Kunj%2C%20New%20Delhi%2C%20Delhi%20110070!5e0!3m2!1sen!2sin!4v1783089400000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dexo Notebooks Factory Map Location"
              />
            </div>
            
            <p className="text-[11px] text-gray-500 font-mono">
              📍 B-139, Vasant Kunj Enclave, New Delhi, India
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright and To-Top */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left text-xs text-gray-500 space-y-1">
            <p>© {currentYear} DEXO NOTEBOOKS. All Rights Reserved.</p>
            <p className="font-mono">
              Designed for premium academic standards. Made in New Delhi, India 🇮🇳
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              id="footer-whatsapp-connect"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#25D366] hover:text-white transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-[#25D366] text-primary-navy" />
              <span>WhatsApp Direct</span>
            </a>
            
            <button
              id="footer-back-to-top"
              onClick={handleScrollToTop}
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 text-white hover:bg-primary-orange transition-all duration-300 cursor-pointer"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
export type { Footer };
