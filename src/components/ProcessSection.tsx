import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Scissors, Sparkles, BookOpen, CheckCircle, Truck } from 'lucide-react';
import { PROCESS_STEPS } from '../data';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Leaf,
  Scissors,
  Sparkles,
  BookOpen,
  CheckCircle,
  Truck,
};

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-slate-50 relative overflow-hidden border-b border-gray-100">
      {/* Decorative vertical background line for timeline on desktops */}
      <div className="absolute top-1/4 bottom-1/4 left-1/2 w-0.5 bg-gradient-to-b from-primary-royal/20 via-primary-orange/20 to-transparent transform -translate-x-1/2 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-royal/10 text-primary-royal text-xs font-mono font-bold uppercase tracking-wider">
            Inside the Factory
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-navy tracking-tight">
            Our Manufacturing & <span className="text-primary-royal">Production Flow</span>
          </h2>
          <p className="text-gray-600 text-sm">
            Discover how we process certified raw paper pulp through state-of-the-art lamination, binding, and quality inspections at our New Delhi factory.
          </p>
        </div>

        {/* Timeline Grid layout */}
        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
          {PROCESS_STEPS.map((step, idx) => {
            const IconComponent = iconMap[step.iconName] || BookOpen;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                id={`process-step-${step.id}`}
                key={step.id}
                className={`flex flex-col sm:flex-row gap-6 p-8 rounded-2xl bg-white border border-gray-100 shadow-sm relative hover:shadow-md hover:border-primary-royal/10 transition-all duration-300 ${
                  isEven ? 'lg:translate-y-4' : 'lg:-translate-y-4'
                }`}
                whileInView={{ opacity: [0, 1], y: [40, isEven ? 16 : -16] }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Step number ribbon */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary-orange text-white flex items-center justify-center font-display font-bold text-sm shadow-md">
                  {step.id}
                </div>

                {/* Left icon wrapper */}
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary-royal/10 text-primary-royal flex items-center justify-center shadow-inner">
                    <IconComponent className="w-7 h-7" />
                  </div>
                </div>

                {/* Right text details */}
                <div className="space-y-2">
                  <h3 className="text-xl font-display font-bold text-primary-navy">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Process summary quote banner */}
        <div className="mt-20 glass-panel p-8 sm:p-10 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto shadow-md">
          <div className="text-4xl">🏭</div>
          <div className="text-center md:text-left space-y-1.5">
            <h4 className="text-lg font-display font-bold text-primary-navy">
              Delhi's Benchmark Stationery Machinery
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Our Vasant Kunj facility houses heavy thread sewer collators and automated high-compression pinning lines to ensure every spine is straight and indestructible.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
export type { ProcessSection };
