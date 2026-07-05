import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = () => {
    stopAutoScroll();
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000); // Rotate every 6 seconds
  };

  const stopAutoScroll = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const handleNext = () => {
    stopAutoScroll();
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    startAutoScroll();
  };

  const handlePrev = () => {
    stopAutoScroll();
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
    startAutoScroll();
  };

  const handleDotClick = (index: number) => {
    stopAutoScroll();
    setActiveIndex(index);
    startAutoScroll();
  };

  const activeTestimonial = TESTIMONIALS_DATA[activeIndex];

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Grid and Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary-royal/5 rounded-full filter blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary-orange/5 rounded-full filter blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-royal/10 text-primary-royal text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Success Stories & Reviews</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-navy tracking-tight">
            Loved by <span className="text-primary-royal">Educators & Distributors</span>
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Read first-hand reviews from academic board principals, retail stationery owners, and corporate procurement managers who trust our durable bindings.
          </p>
        </div>

        {/* Carousel Visual Box */}
        <div className="relative min-h-[340px] sm:min-h-[280px] bg-slate-50 border border-gray-100/80 p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col justify-between overflow-hidden">
          
          {/* Quote Mark background */}
          <Quote className="absolute -top-4 -left-4 w-32 h-32 text-slate-200/50 pointer-events-none" />

          {/* Navigational controls inside the box */}
          <div className="absolute bottom-8 right-8 flex gap-2 z-10">
            <button
              id="testimonial-prev-btn"
              onClick={handlePrev}
              className="p-2 bg-white text-primary-navy hover:text-primary-royal rounded-full border border-gray-100 hover:border-primary-royal/30 shadow-sm transition-all cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="testimonial-next-btn"
              onClick={handleNext}
              className="p-2 bg-white text-primary-navy hover:text-primary-royal rounded-full border border-gray-100 hover:border-primary-royal/30 shadow-sm transition-all cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="space-y-6 flex-grow"
            >
              {/* Star Rating */}
              <div className="flex gap-1">
                {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary-orange text-primary-orange" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-lg sm:text-xl text-primary-navy font-display font-medium leading-relaxed italic pr-12">
                "{activeTestimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="pt-4 border-t border-gray-200/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-left">
                  <h4 className="text-base font-bold text-primary-navy">
                    {activeTestimonial.name}
                  </h4>
                  <p className="text-xs text-primary-orange font-mono uppercase tracking-wider font-semibold">
                    {activeTestimonial.role}
                  </p>
                  <p className="text-xs text-gray-400 font-sans mt-0.5">
                    {activeTestimonial.organization}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Bullet Pagination Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS_DATA.map((_, index) => (
            <button
              id={`testimonial-dot-${index}`}
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? 'w-8 bg-primary-royal'
                  : 'w-2.5 bg-gray-300 hover:bg-primary-royal/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
export type { TestimonialCarousel };
