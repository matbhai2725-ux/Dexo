import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, ClipboardCheck, BookOpen, PenTool, Sparkles } from 'lucide-react';
import { imgPulseSpiral, imgClassicNavy, imgOrangeWow } from '../data';

export default function Hero() {
  const whatsappUrl = 'https://wa.me/919810716768?text=Hello%20Dexo%20Notebooks%2C%20I%20want%20to%20order%20notebooks.';

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-b from-slate-50 via-slate-100/50 to-white pt-28 md:pt-36 pb-16 flex items-center overflow-hidden"
    >
      {/* Parallax / Floating grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-royal rounded-full filter blur-[100px] opacity-10 animate-pulse-subtle pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary-orange rounded-full filter blur-[130px] opacity-10 animate-pulse-subtle pointer-events-none" />

      {/* Floating Animated Stationery Items */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {/* Floating Pencil */}
        <motion.div
          className="absolute top-[15%] left-[5%] text-4xl"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          ✏️
        </motion.div>
        {/* Floating Ruler */}
        <motion.div
          className="absolute bottom-[20%] left-[8%] text-3xl"
          animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          📐
        </motion.div>
        {/* Floating Paperclip */}
        <motion.div
          className="absolute top-[40%] left-[45%] text-2xl opacity-70"
          animate={{ y: [0, -8, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          📎
        </motion.div>
        {/* Floating Eraser */}
        <motion.div
          className="absolute top-[22%] right-[40%] text-3xl"
          animate={{ y: [0, 14, 0], rotate: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        >
          🧽
        </motion.div>
        {/* Floating Ink Splash Decor */}
        <motion.div
          className="absolute bottom-[15%] right-[45%] text-3xl opacity-40"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          💧
        </motion.div>
        {/* Floating Sparkles */}
        <motion.div
          className="absolute top-[10%] right-[15%] text-2xl text-primary-orange"
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          ✨
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Animated Brand Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-royal/10 border border-primary-royal/20 text-primary-royal text-xs font-mono font-bold tracking-wider uppercase mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct-from-Factory Stationery Wholesale</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                id="hero-headline"
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-navy tracking-tight leading-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                India's Trusted <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-royal to-[#3b82f6]">Notebook</span>{' '}
                <span className="text-primary-orange relative">
                  Manufacturer
                  <svg className="absolute left-0 right-0 -bottom-2 w-full h-2 text-primary-orange-light/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 9, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                id="hero-subheading"
                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Premium Quality Notebooks for Schools, Colleges, Offices & Bulk Orders at Affordable Prices.
              </motion.p>
            </div>

            {/* Call to Actions - Exactly the requested 4 buttons */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {/* Order Now (WhatsApp) */}
              <a
                id="hero-btn-order-now"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#128C7E] transition-all duration-300 px-6 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 text-base w-full sm:w-auto"
              >
                <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
                <span>Order Now</span>
              </a>

              {/* View Products */}
              <a
                id="hero-btn-view-products"
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-primary-royal text-white hover:bg-primary-orange transition-all duration-300 px-6 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 text-base w-full sm:w-auto"
              >
                <BookOpen className="w-5 h-5" />
                <span>View Products</span>
              </a>

              {/* Get Bulk Quote */}
              <a
                id="hero-btn-bulk-quote"
                href="#bulk-enquiry"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-royal border-2 border-primary-royal hover:bg-primary-royal hover:text-white transition-all duration-300 px-6 py-3.5 rounded-xl font-bold shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:scale-95 text-base w-full sm:w-auto"
              >
                <ClipboardCheck className="w-5 h-5" />
                <span>Get Bulk Quote</span>
              </a>

              {/* Contact Us */}
              <a
                id="hero-btn-contact-us"
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 text-primary-navy hover:bg-slate-200 transition-all duration-300 px-6 py-3.5 rounded-xl font-bold shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:scale-95 text-base w-full sm:w-auto"
              >
                <PenTool className="w-4 h-4" />
                <span>Contact Us</span>
              </a>
            </motion.div>

            {/* Quick Metrics */}
            <motion.div
              className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 max-w-lg mx-auto lg:mx-0 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div>
                <span className="block text-2xl sm:text-3xl font-display font-bold text-primary-royal">500+</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold font-mono">Schools Supplied</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-display font-bold text-primary-orange">100%</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold font-mono">Made in India</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-display font-bold text-primary-navy">0-Middlemen</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold font-mono">Factory Rates</span>
              </div>
            </motion.div>

          </div>

          {/* Hero Right Visuals Column (Floating Notebooks & Glassmorphism) */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[380px] sm:min-h-[450px]">
            
            {/* Ambient Back Glow Ring */}
            <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] border-2 border-dashed border-primary-royal/20 rounded-full animate-spin-slow pointer-events-none" />

            {/* Image 1: Dexo Pulse Spiral - Floating Front Center */}
            <motion.div
              className="absolute z-20 w-[180px] sm:w-[240px] shadow-[0_20px_50px_rgba(30,64,175,0.3)] rounded-lg pointer-events-auto cursor-pointer"
              initial={{ opacity: 0, scale: 0.8, rotate: -8, y: 50 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: -6,
                y: [0, -12, 0]
              }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                opacity: { duration: 0.8 },
                scale: { duration: 0.8 }
              }}
              whileHover={{ scale: 1.05, rotate: -2, transition: { duration: 0.3 } }}
            >
              <img
                src={imgPulseSpiral}
                alt="Dexo Pulse Spiral Notebook"
                className="w-full h-auto rounded-lg object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 left-2 bg-primary-royal text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-full uppercase shadow">
                Flagship
              </div>
            </motion.div>

            {/* Image 2: Classic Navy - Floating Left & Behind */}
            <motion.div
              className="absolute z-10 -left-6 sm:-left-12 w-[160px] sm:w-[200px] shadow-[0_15px_35px_rgba(15,23,42,0.25)] rounded-lg"
              initial={{ opacity: 0, scale: 0.8, rotate: -20, y: 80 }}
              animate={{
                opacity: 0.9,
                scale: 0.9,
                rotate: -18,
                y: [15, -5, 15]
              }}
              transition={{
                y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
                opacity: { duration: 0.8 },
                scale: { duration: 0.8 }
              }}
              whileHover={{ scale: 0.98, rotate: -10, transition: { duration: 0.3 } }}
            >
              <img
                src={imgClassicNavy}
                alt="Dexo Classic Navy Notebook"
                className="w-full h-auto rounded-lg object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2 left-2 bg-primary-navy text-white text-[9px] font-mono px-1.5 py-0.5 rounded uppercase">
                School Pack
              </div>
            </motion.div>

            {/* Image 3: Orange Wow - Floating Right & Behind */}
            <motion.div
              className="absolute z-10 -right-6 sm:-right-12 w-[160px] sm:w-[200px] shadow-[0_15px_35px_rgba(234,88,12,0.25)] rounded-lg animate-float-slow"
              initial={{ opacity: 0, scale: 0.8, rotate: 12, y: 80 }}
              animate={{
                opacity: 0.9,
                scale: 0.9,
                rotate: 14,
                y: [-10, 10, -10]
              }}
              transition={{
                y: { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 },
                opacity: { duration: 0.8 },
                scale: { duration: 0.8 }
              }}
              whileHover={{ scale: 0.98, rotate: 8, transition: { duration: 0.3 } }}
            >
              <img
                src={imgOrangeWow}
                alt="Dexo Orange Wow Notebook"
                className="w-full h-auto rounded-lg object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 right-2 bg-primary-orange text-white text-[9px] font-mono px-1.5 py-0.5 rounded uppercase font-bold">
                Premium
              </div>
            </motion.div>

            {/* Paper Flip Mock Visual Decorative Layer */}
            <div className="absolute -bottom-10 bg-white/40 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg flex items-center gap-3 z-30 max-w-[240px] transform rotate-1 hidden sm:flex">
              <div className="w-10 h-10 rounded-lg bg-primary-orange/20 flex items-center justify-center text-primary-orange font-bold text-lg">
                📖
              </div>
              <div className="text-left font-sans">
                <p className="text-xs font-bold text-primary-navy">Flippable Cover Designs</p>
                <p className="text-[10px] text-gray-500">Premium gloss & 3D laminations</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
export type { Hero };
