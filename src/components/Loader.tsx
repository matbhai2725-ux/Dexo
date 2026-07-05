import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200); // 2.2 seconds loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="preloader"
          className="fixed inset-0 bg-primary-navy z-50 flex flex-col items-center justify-center text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          {/* Decorative floating background glow */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-royal rounded-full filter blur-[120px] opacity-20 pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-orange rounded-full filter blur-[120px] opacity-15 pointer-events-none" />

          {/* Book page flipping animation container */}
          <div className="relative mb-8 flex items-center justify-center">
            {/* The Book Body */}
            <div className="w-24 h-16 border-4 border-white rounded-md relative flex items-center justify-center bg-transparent">
              {/* Spine */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white transform -translate-x-1/2 z-10" />
              
              {/* Flipping Page */}
              <div className="absolute right-0 top-0 bottom-0 left-1/2 bg-white rounded-r-sm origin-left animate-paper-flip shadow-lg" />
              
              {/* Static left page text lines mock */}
              <div className="absolute left-2 right-1/2 top-3 h-0.5 bg-white/40" />
              <div className="absolute left-2 right-1/2 top-6 h-0.5 bg-white/40" />
              <div className="absolute left-2 right-1/2 top-9 h-0.5 bg-white/40" />
              <div className="absolute left-2 right-1/2 top-12 h-0.5 bg-white/40" />

              {/* Static right page text lines mock */}
              <div className="absolute left-1/2 right-2 top-3 h-0.5 bg-white/20" />
              <div className="absolute left-1/2 right-2 top-6 h-0.5 bg-white/20" />
              <div className="absolute left-1/2 right-2 top-9 h-0.5 bg-white/20" />
              <div className="absolute left-1/2 right-2 top-12 h-0.5 bg-white/20" />
            </div>

            {/* Float Pencil element */}
            <motion.div
              className="absolute -top-6 -right-6 text-3xl select-none"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              ✏️
            </motion.div>
          </div>

          {/* Brand Name Text Fading In */}
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-wider uppercase">
              Dexo <span className="text-primary-orange">Notebooks</span>
            </h1>
            <p className="text-sm font-mono tracking-widest text-gray-400 mt-2 uppercase">
              India's Premium Stationery Brand
            </p>
          </motion.div>

          {/* Elegant horizontal loading bar indicator */}
          <div className="w-48 h-1 bg-white/10 rounded-full mt-8 overflow-hidden relative">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-primary-royal to-primary-orange rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export type { Loader };
