import React from 'react';
import { motion } from 'motion/react';
import { Users, Leaf, Award, ShieldCheck, Cpu, BookOpen, Heart, Sparkles, Layers, ArrowRight, CheckCircle, GraduationCap, Building2 } from 'lucide-react';
import { COMPANY_OWNERS, imgClassicNavy, imgOrangeWow } from '../data';

export default function AboutSection() {
  const whatsappUrl = 'https://wa.me/919810716768?text=Hello%20Dexo%20Notebooks%2C%20I%20want%20to%20order%20notebooks.';

  return (
    <div id="about-container">
      
      {/* 1. Primary About Us & Brand Narrative */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-royal/10 border border-primary-royal/20 text-primary-royal text-xs font-mono font-bold uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Our Heritage & Vision</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-navy tracking-tight leading-tight">
                Crafting the Perfect <span className="text-primary-royal">Pages for India's</span> Future Scholars
              </h2>
              
              <p className="text-gray-600 leading-relaxed">
                For years, <span className="font-bold text-primary-navy">DEXO NOTEBOOKS</span> has served as a cornerstone of high-quality stationery manufacturing in New Delhi. Our core mission is to empower student learning and executive ideas by delivering notebooks that merge durability with a luxurious writing feel. We believe every pencil stroke, equations drafting, and project draft deserves a reliable, beautifully bound canvas.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                As a direct manufacturer, we have stripped out expensive distribution circles and agents. This allows us to offer bulk school boards, colleges, and office stationery lockers premium 54-110 GSM elemental chlorine-free pages at prices that remain highly affordable. Every book that rolls off our floor is quality-checked to meet stringent standards of binding, paper brightness, and cover appeal.
              </p>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm font-medium text-primary-navy">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span>54-110 GSM Eco-Friendly Paper</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span>Highly Durable Thread Binding</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span>Stunning High-Gloss Laminated Covers</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span>Custom School Emblem Printing</span>
                </div>
              </div>
            </div>

            {/* Right Visual Image Showcase (Interactive Collage) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-royal/10 via-transparent to-primary-orange/10 rounded-3xl filter blur-2xl pointer-events-none" />
              
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-w-[320px] sm:max-w-[360px] transform hover:scale-102 transition-transform duration-300"
                whileInView={{ opacity: [0, 1], y: [40, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={imgClassicNavy}
                  alt="Dexo classic navy notebook back cover"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-4 rounded-xl text-primary-navy text-xs space-y-1 shadow">
                  <p className="font-bold">172 Pages Ruled Register</p>
                  <p className="text-gray-600 text-[10px]">A4 Premium Maplitho sheets made in India.</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Why Choose Dexo & Institutional Specialties */}
      <section id="why-choose-dexo" className="py-20 bg-slate-50 relative overflow-hidden border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-orange/10 text-primary-orange text-xs font-mono font-bold uppercase tracking-wider">
              The Dexo Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-navy tracking-tight">
              Why leading schools trust <span className="text-primary-royal">Dexo Notebooks</span>
            </h2>
            <p className="text-gray-600 text-sm">
              We leverage raw material procurement power, advanced mechanical binding, and hands-on family business dedication to deliver unrivaled stationery solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Box 1: Eco-Friendly Production */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 hover:border-primary-royal/20">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-navy">Eco-Friendly Production</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our raw paper sheets are manufactured with 100% elemental chlorine-free processes, preserving groundwater and local habitats. Acid-free fibers prevent yellowing over decades.
              </p>
            </div>

            {/* Box 2: Custom School Branding */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 hover:border-primary-royal/20">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary-royal flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-navy">School Branding & Logos</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We custom-print high-definition front covers featuring your school crest, rules of conduct, and academic year planner directly integrated into the notebook.
              </p>
            </div>

            {/* Box 3: Custom Corporate Printing */}
            <div id="custom-printing" className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 hover:border-primary-royal/20">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary-orange flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-navy">Bespoke Custom Printing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Whether you need special project dividers, grid pages, lab charts, or company logo diaries with elastic closures, our facility turns design files into premium assets.
              </p>
            </div>

            {/* Box 4: Office Supplies Bulk */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 hover:border-primary-royal/20">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-navy">Corporate Office Supplies</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Keep your corporate lockers stocked with our sleek executive registers, professional unruled sketch pads, and multi-subject coil wire bound notebooks.
              </p>
            </div>

            {/* Box 5: Wholesale Distribution */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 hover:border-primary-royal/20">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-navy">Wholesale Distribution</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We maintain active wholesale contracts with stationery traders and bookstore networks across India, delivering high-margin, high-turnover products reliably.
              </p>
            </div>

            {/* Box 6: Factory Direct Pricing */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 hover:border-primary-royal/20">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-navy">Quality & Direct Pricing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Buy direct from the manufacturer! Our rates reflect zero intermediary commission add-ons, ensuring school boards save over 40% on standard book retail pricing.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Company Leadership Team / Owners */}
      <section id="leadership" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-royal/10 text-primary-royal text-xs font-mono font-bold uppercase tracking-wider">
              Company Owners & Management
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-navy tracking-tight">
              The Minds Behind <span className="text-primary-orange">DEXO NOTEBOOKS</span>
            </h2>
            <p className="text-gray-600 text-sm">
              Our leadership coordinates logistics, manufacturing precision, and quality checks to ensure Dexo remains India's premium stationery choice.
            </p>
          </div>

          {/* Owners Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_OWNERS.map((owner, idx) => (
              <motion.div
                id={`owner-card-${idx}`}
                key={owner.name}
                className="bg-slate-50 rounded-2xl p-6 border border-gray-100 text-center flex flex-col items-center hover:border-primary-royal/20 hover:shadow-md transition-all duration-300"
                whileInView={{ opacity: [0, 1], y: [30, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Avatar Initial Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary-royal to-primary-orange-light text-white flex items-center justify-center font-display font-bold text-2xl shadow-md mb-4 select-none">
                  {owner.name.split(' ').map(n => n[0]).join('')}
                </div>

                <h3 className="text-lg font-display font-bold text-primary-navy">
                  {owner.name}
                </h3>
                
                <p className="text-xs text-primary-orange font-mono font-bold uppercase tracking-wider mb-3">
                  {owner.role}
                </p>
                
                <p className="text-gray-500 text-xs leading-relaxed mt-2 flex-grow">
                  {owner.description}
                </p>

                {/* Team Badges / Roles decoration */}
                <span className="mt-4 px-2.5 py-1 rounded bg-white text-[10px] font-semibold text-gray-500 border border-gray-100 shadow-sm">
                  Verified Owner
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
export type { AboutSection };
