import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingButtons() {
  const whatsappUrl = 'https://wa.me/919810716768?text=Hello%20Dexo%20Notebooks%2C%20I%20want%20to%20order%20notebooks.';
  const telUrl = 'tel:+919810716768';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 pointer-events-none">
      {/* Phone Call Floating Button */}
      <motion.a
        id="floating-call-btn"
        href={telUrl}
        className="pointer-events-auto flex items-center justify-center w-14 h-14 bg-primary-orange text-white rounded-full shadow-2xl hover:bg-primary-navy transition-colors duration-300 relative group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        <Phone className="w-6 h-6 animate-pulse" />
        
        {/* Tooltip */}
        <span className="absolute right-16 bg-primary-navy text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none border border-white/10">
          Call: +91 9810716768
        </span>
      </motion.a>

      {/* WhatsApp Floating Button */}
      <motion.a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors duration-300 relative group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />

        {/* Ring radar animation */}
        <span className="absolute inset-0 rounded-full border-4 border-[#25D366]/40 animate-ping pointer-events-none" />

        {/* Tooltip */}
        <span className="absolute right-16 bg-primary-navy text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none border border-white/10">
          Order on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
export type { FloatingButtons };
