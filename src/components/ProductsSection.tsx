import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Check, Info, FileText, Sparkles, AlertCircle, PhoneCall, MessageSquare } from 'lucide-react';
import { PRODUCTS_DATA } from '../data';
import { NotebookProduct } from '../types';

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Notebooks' },
    { id: 'school', label: 'School Range' },
    { id: 'college', label: 'College & Registers' },
    { id: 'office', label: 'Office Supplies' },
    { id: 'specialty', label: 'Specialty & Drawing' },
    { id: 'custom', label: 'Custom Printed' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === selectedCategory);

  const whatsappBaseUrl = 'https://wa.me/919810716768?text=Hello%20Dexo%20Notebooks%2C%20I%20want%20to%20order%20notebooks.';

  const handleBuyNow = (productTitle: string) => {
    // Append product information to the required prefilled message for better business context
    const text = `Hello Dexo Notebooks, I want to order notebooks. Specifically interested in: ${productTitle}`;
    const url = `https://wa.me/919810716768?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="products" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-royal/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-orange/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-orange/10 border border-primary-orange/20 text-primary-orange text-xs font-mono font-bold uppercase tracking-wider"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Premium Notebook Portfolio</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-navy tracking-tight">
            Our Featured <span className="text-primary-royal">Stationery Catalog</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Browse our wide selection of 15 essential notebook varieties crafted for schools, universities, executive corporate boards, and bespoke custom school logo prints. We provide premium GSM sheets and heavy-duty bindings at unbeatable direct manufacturer prices.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-gray-200/60 pb-6">
          {categories.map((cat) => (
            <button
              id={`tab-category-${cat.id}`}
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 transform active:scale-95 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-primary-royal text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-royal/40 hover:text-primary-royal'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Warning Badge of No Checkout */}
        <div className="max-w-4xl mx-auto mb-10 bg-blue-50 border-l-4 border-primary-royal p-4 rounded-r-lg flex items-start gap-3 shadow-sm">
          <AlertCircle className="w-5 h-5 text-primary-royal shrink-0 mt-0.5" />
          <div className="text-sm text-blue-900 leading-relaxed font-medium">
            <span className="font-bold">Hassle-Free Ordering:</span> We do not use slow online shopping carts or payment gateways! Simply click <span className="font-bold">Buy Now</span> on any notebook below to connect directly with our sales team on WhatsApp. We accept cash, UPI, bank transfers, and bulk purchase orders.
          </div>
        </div>

        {/* Product Cards Grid */}
        <motion.div
          id="product-grid"
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                id={`product-card-${product.id}`}
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary-royal/10 transition-all duration-300 flex flex-col relative group"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                
                {/* Product Badge */}
                {product.badge && (
                  <span className="absolute top-4 left-4 z-10 badge-ribbon text-[11px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.badge}
                  </span>
                )}

                {/* Cover Image Container */}
                <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Image overlay with stats on hover */}
                  <div className="absolute inset-0 bg-primary-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                    <p className="text-xs font-mono text-primary-orange-light font-bold uppercase tracking-wider mb-1">
                      Specifications:
                    </p>
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-primary-orange" />
                        <span>GSM: {product.paperQuality}</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-primary-orange" />
                        <span>Binding: {product.bindingType}</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-primary-orange" />
                        <span>Sizes: {product.availableSizes.join(', ')}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card Body Info */}
                <div className="p-6 flex-grow flex flex-col space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-display font-bold text-primary-navy group-hover:text-primary-royal transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-gray-500 text-xs line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Pricing Badge Info */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary-orange font-mono">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through font-mono">
                        {product.originalPrice}
                      </span>
                    )}
                    <span className="text-[10px] bg-slate-100 text-gray-500 px-2 py-0.5 rounded font-mono font-semibold ml-auto">
                      Direct Rate
                    </span>
                  </div>

                  {/* Core Specs Quick Display Table */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100 text-xs text-gray-600 font-medium">
                    <div className="flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-primary-royal" />
                      <span>{product.pageCount} Pages</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Info className="w-3.5 h-3.5 text-primary-royal" />
                      <span className="truncate">{product.bindingType.split(' ')[0]} Bound</span>
                    </div>
                  </div>

                  {/* Key points checks */}
                  <ul className="space-y-1 pt-1">
                    {product.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[11px] text-gray-500">
                        <Check className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button - WhatsApp */}
                  <button
                    id={`btn-buy-product-${product.id}`}
                    onClick={() => handleBuyNow(product.title)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-xl font-bold text-sm shadow hover:shadow-md transition-all duration-300 transform active:scale-95 mt-auto cursor-pointer"
                  >
                    <ShoppingCart className="w-4 h-4 fill-white text-[#25D366]" />
                    <span>Buy Now (WhatsApp)</span>
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All WhatsApp Contact Trigger */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-gray-500 text-sm font-medium">
            Need customized school configurations, specific bindings, or custom sheet quantities?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              id="product-contact-support-whatsapp"
              href={whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-royal hover:bg-primary-orange text-white px-7 py-3 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-colors duration-300"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Consult Our Notebook Experts on WhatsApp</span>
            </a>
            <a
              id="product-contact-support-call"
              href="tel:+919810716768"
              className="inline-flex items-center gap-2 bg-white text-primary-navy border-2 border-gray-200 hover:border-primary-royal hover:text-primary-royal px-7 py-3 rounded-xl text-sm font-bold shadow-sm transition-colors duration-300"
            >
              <PhoneCall className="w-4 h-4 text-primary-orange" />
              <span>Call sales: +91 9810716768</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
export type { ProductsSection };
