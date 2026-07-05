import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Flag, Award, Truck, School, Cpu, CheckCircle,
  Sparkles, PenTool, BookOpen, Palette, Percent,
  Leaf, Layers, Zap, ShieldCheck, PhoneCall, ChevronDown, HelpCircle
} from 'lucide-react';
import { TRUST_BADGES, FEATURES_STATISTICS, FAQS_DATA } from '../data';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Flag, Award, Truck, School, Cpu, CheckCircle,
  Sparkles, PenTool, BookOpen, Palette, Percent,
  Leaf, Layers, Zap, ShieldCheck, PhoneCall
};

export default function FeaturesAndFaqs() {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaq(prev => (prev === id ? null : id));
  };

  return (
    <div id="features-faqs-container">
      
      {/* 1. Trust Badges Ribbon Banner */}
      <section id="trust-badges" className="py-12 bg-primary-navy text-white relative overflow-hidden">
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center text-center">
            {TRUST_BADGES.map((badge, idx) => {
              const IconComponent = iconMap[badge.icon] || CheckCircle;
              return (
                <motion.div
                  id={`trust-badge-${badge.id}`}
                  key={badge.id}
                  className="flex flex-col items-center space-y-2 group"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary-orange group-hover:bg-primary-orange group-hover:text-white transition-all duration-300 shadow">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-gray-200">
                    {badge.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Core Features & Metric Indicators */}
      <section id="features" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Title */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-royal/10 text-primary-royal text-xs font-mono font-bold uppercase tracking-wider">
              Quality Benchmarks
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-navy tracking-tight">
              Unrivaled Quality in <span className="text-primary-royal">Every Single Leaf</span>
            </h2>
            <p className="text-gray-600 text-sm">
              We focus on premium raw materials and engineering precision to elevate your daily writing and calculation experiences.
            </p>
          </div>

          {/* Features Grid - 10 features requested */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {FEATURES_STATISTICS.map((feat, idx) => {
              const IconComp = iconMap[feat.iconName] || Sparkles;
              return (
                <motion.div
                  id={`feature-stat-${idx}`}
                  key={feat.title}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col space-y-3 hover:border-primary-royal/20 hover:bg-white hover:shadow-lg transition-all duration-300"
                  whileInView={{ opacity: [0, 1], y: [25, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-primary-royal/10 text-primary-royal flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Counter Value */}
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-2xl sm:text-3xl font-display font-bold text-primary-navy tracking-tight font-mono">
                      {feat.value}
                    </span>
                    <span className="text-base font-bold text-primary-orange">
                      {feat.suffix}
                    </span>
                  </div>

                  {/* Text details */}
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-primary-navy leading-tight">
                      {feat.title}
                    </h4>
                    <p className="text-gray-500 text-[11px] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Frequently Asked Questions Accordion */}
      <section id="faq" className="py-20 bg-slate-50 relative overflow-hidden border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Title */}
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-orange/10 text-primary-orange text-xs font-mono font-bold uppercase tracking-wider">
              Have Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-navy tracking-tight">
              Frequently Asked <span className="text-primary-royal">Queries</span>
            </h2>
            <p className="text-gray-600 text-sm">
              Get answers about bulk orders, school branding plate costs, material certifications, and shipping networks.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {FAQS_DATA.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  id={`faq-item-${faq.id}`}
                  key={faq.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  {/* Collapsible header */}
                  <button
                    id={`faq-toggle-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-display font-semibold text-primary-navy hover:text-primary-royal transition-colors duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary-orange shrink-0" />
                      <span className="text-sm sm:text-base">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'transform rotate-180 text-primary-royal' : ''
                      }`}
                    />
                  </button>

                  {/* Answer slide */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed pl-14 border-t border-slate-50 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
export type { FeaturesAndFaqs };
