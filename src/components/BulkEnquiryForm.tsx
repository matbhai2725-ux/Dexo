import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MessageSquare, BookOpen, AlertCircle, Sparkles, Building2, User, Phone, MapPin, ClipboardList } from 'lucide-react';

export default function BulkEnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    phone: '',
    email: '',
    notebookType: '₹30 Premium Notebook',
    quantity: '1000 to 5000 units',
    location: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const notebookOptions = [
    '₹20 School Notebook',
    '₹30 Premium Notebook',
    '₹50 Hard Cover Notebook',
    'Spiral Notebook',
    'Long Notebook',
    'Practical Notebook',
    'Drawing Notebook',
    'College Notebook',
    'Office Notebook',
    'Graph Notebook',
    'Ruled Notebook',
    'Unruled Notebook',
    'Project Notebook',
    'Custom Printed Notebook',
    'School Logo Notebooks',
  ];

  const quantityOptions = [
    '500 to 1000 units (Factory MOQ)',
    '1000 to 5000 units (Bulk Rate)',
    '5000 to 10000 units (Premium Wholesaler)',
    '10000+ units (Mega Institutional Order)',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Compile into structured message starting with requested string
    const baseMessage = 'Hello Dexo Notebooks, I want to order notebooks.';
    const formSummary = `
-----------------------------
📝 BULK ENQUIRY DETAILS:
-----------------------------
👤 Name: ${formData.name}
🏫 Institution: ${formData.institution}
📞 Phone: ${formData.phone}
✉️ Email: ${formData.email || 'N/A'}
📖 Book Type: ${formData.notebookType}
📦 Quantity: ${formData.quantity}
📍 Location: ${formData.location}
✍️ Notes: ${formData.notes || 'No extra notes'}
-----------------------------
`;

    const fullMessage = `${baseMessage}\n${formSummary}`;
    const whatsappUrl = `https://wa.me/919810716768?text=${encodeURIComponent(fullMessage)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="bulk-enquiry" className="py-20 bg-slate-50 relative overflow-hidden border-t border-gray-100">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-royal/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-orange/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text / Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-orange/10 text-primary-orange text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bulk Institutional Quote</span>
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-navy tracking-tight leading-tight">
                Request a Custom <span className="text-primary-royal">Wholesale Estimate</span>
              </h2>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                Whether you are a procurement officer representing a primary school, high school, university store, retail warehouse, or distributor network, we invite you to share your dimensions and details.
              </p>
            </div>

            {/* Guarantees List */}
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                  ⚡
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary-navy">Rapid Quotation Turnaround</h4>
                  <p className="text-xs text-gray-500">Get a fully compiled pricing proposal on WhatsApp within 2 hours.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-primary-royal flex items-center justify-center shrink-0">
                  📂
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary-navy">Free Sample Packs</h4>
                  <p className="text-xs text-gray-500">Qualified schools receive a trial stationery package delivered for free.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-primary-orange flex items-center justify-center shrink-0">
                  ⚙️
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary-navy">Custom Design Support</h4>
                  <p className="text-xs text-gray-500">Our branding artists format your logo layouts free of charge.</p>
                </div>
              </div>
            </div>

            {/* Direct Warning info */}
            <div className="p-4 bg-orange-50 border-l-4 border-primary-orange rounded-r-xl text-xs text-orange-900 font-medium flex gap-3">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-primary-orange" />
              <div>
                <span className="font-bold">Alternative Support Line:</span> If you face any issues sending this form, call <span className="font-bold">+91 8384036447</span> directly for immediate quotation service.
              </div>
            </div>
          </div>

          {/* Right Form Box Column */}
          <div className="lg:col-span-7">
            <motion.div
              className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-100 relative overflow-hidden"
              whileInView={{ opacity: [0, 1], x: [30, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-display font-bold text-primary-navy mb-1">
                Direct Wholesale Form
              </h3>
              <p className="text-xs text-gray-400 mb-8 font-mono">
                *Compiles instantly to WhatsApp 9810716768
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name & School */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-primary-royal" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Principal Sharma"
                      className="w-full bg-slate-50 border border-gray-200 focus:border-primary-royal focus:bg-white rounded-xl px-4 py-3 text-sm transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-primary-royal" />
                      <span>School / Institution *</span>
                    </label>
                    <input
                      type="text"
                      name="institution"
                      required
                      value={formData.institution}
                      onChange={handleInputChange}
                      placeholder="e.g. Apex Public School"
                      className="w-full bg-slate-50 border border-gray-200 focus:border-primary-royal focus:bg-white rounded-xl px-4 py-3 text-sm transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-primary-royal" />
                      <span>Phone Number (WhatsApp) *</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9810XXXXXX"
                      className="w-full bg-slate-50 border border-gray-200 focus:border-primary-royal focus:bg-white rounded-xl px-4 py-3 text-sm transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide flex items-center gap-1.5">
                      <span>Email Address (Optional)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. school@gmail.com"
                      className="w-full bg-slate-50 border border-gray-200 focus:border-primary-royal focus:bg-white rounded-xl px-4 py-3 text-sm transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Notebook selection & quantity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-primary-royal" />
                      <span>Notebook Variety *</span>
                    </label>
                    <select
                      name="notebookType"
                      value={formData.notebookType}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-gray-200 focus:border-primary-royal focus:bg-white rounded-xl px-4 py-3 text-sm transition-all outline-none"
                    >
                      {notebookOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide flex items-center gap-1.5">
                      <ClipboardList className="w-3.5 h-3.5 text-primary-royal" />
                      <span>Quantity Required *</span>
                    </label>
                    <select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-gray-200 focus:border-primary-royal focus:bg-white rounded-xl px-4 py-3 text-sm transition-all outline-none"
                    >
                      {quantityOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Delivery Location */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wide flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary-royal" />
                    <span>Delivery Location / Address *</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g. Vasant Kunj, New Delhi or Patna, Bihar"
                    className="w-full bg-slate-50 border border-gray-200 focus:border-primary-royal focus:bg-white rounded-xl px-4 py-3 text-sm transition-all outline-none"
                  />
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                    <span>Specific Customization Requirements (Optional)</span>
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="e.g. We require our customized emblem printed in golden foil on single-ruled 120 page registers."
                    className="w-full bg-slate-50 border border-gray-200 focus:border-primary-royal focus:bg-white rounded-xl px-4 py-3 text-sm transition-all outline-none resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  id="btn-submit-bulk-enquiry"
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary-royal hover:bg-primary-orange text-white py-4 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-xl transform active:scale-95 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 fill-white text-primary-royal" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                {submitted && (
                  <p className="text-center text-xs text-green-600 font-semibold mt-2 animate-pulse">
                    🚀 WhatsApp launched! If it did not open, click the button above again.
                  </p>
                )}

              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
export type { BulkEnquiryForm };
