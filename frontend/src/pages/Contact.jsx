
import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle2, AlertCircle, Loader2, Sparkles, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const infoItems = [
    {
      icon: <MapPin size={20} />,
      label: 'Office Address',
      value: 'SUKUN COMPLEX, Madina Masjid Rd, Alkapuri Pologround, Himatnagar, Gujarat 383001',
      link: 'https://maps.google.com/?q=SUKUN+COMPLEX,+Madina+Masjid+Rd,+Alkapuri+Pologround,+Himatnagar,+Gujarat+383001'
    },
    {
      icon: <Phone size={20} />,
      label: 'Call Helpline',
      value: '+91 79904 52182 \n +91 94080 03939',
      link: 'tel:+917990452182'
    },
    {
      icon: <Mail size={20} />,
      label: 'E-mail Inbox',
      value: 'rajcorporation07@gmail.com',
      link: 'mailto:rajcorporation07@gmail.com'
    }
  ];

  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const phoneRegex = /^[6-9][0-9]{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('Please enter a valid 10-digit Indian mobile number (starts with 6-9).');
      setLoading(false);
      return;
    }

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccess(true);
        setFormData({
          full_name: '',
          phone: '',
          email: '',
          message: ''
        });
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to connect to the backend server. Make sure it is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full pt-[110px] md:pt-[135px] pb-16 md:pb-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200/50 font-bold uppercase tracking-widest text-[10px] sm:text-xs">
            <Sparkles size={13} className="text-amber-500" /> Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent leading-tight tracking-tight">
            Feel Free to Contact Us
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Reach out to our engineering team with your questions, project layouts, or pricing inquiry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto items-stretch">
          {/* Left Column: Form (3 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 18 }}
            className="lg:col-span-3 bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-premium border border-slate-100"
          >
            <h3 className="font-heading font-bold text-2xl text-slate-800 mb-6 border-b border-slate-100 pb-4 flex items-center gap-2">
              Send an Inquiry
            </h3>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-3 mb-6 animate-pulse">
                <AlertCircle size={20} className="shrink-0" />
                <span className="text-sm font-semibold">{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="fullname" className="text-slate-700 font-bold text-xs uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  id="fullname"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Enter your full name" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50/50 focus-glow transition-all outline-none font-semibold text-sm"
                  pattern="[A-Za-z\s]+"
                  title="Only alphabets and spaces are allowed"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-slate-700 font-bold text-xs uppercase tracking-wider">Phone Number</label>
                  <div className="flex">
                    <span className="px-4 py-3 bg-slate-100 border-2 border-r-0 border-slate-200 rounded-l-xl font-bold text-slate-600 flex items-center text-sm">
                      +91
                    </span>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit number" 
                      className="w-full px-4 py-3 rounded-r-xl border-2 border-slate-200 bg-slate-50/50 focus-glow transition-all outline-none font-semibold text-sm"
                      maxLength="10"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-slate-700 font-bold text-xs uppercase tracking-wider">E-mail Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email" 
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50/50 focus-glow transition-all outline-none font-semibold text-sm"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-slate-700 font-bold text-xs uppercase tracking-wider">Inquiry Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your system details or questions..." 
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50/50 focus-glow transition-all outline-none font-semibold text-sm resize-none"
                  required
                ></textarea>
              </div>

              <motion.button 
                whileTap={{ scale: 0.97 }}
                type="submit" 
                disabled={loading}
                className="btn btn-primary w-full sm:w-auto self-start mt-2 px-8 py-3.5 shine-btn shadow-lg shadow-yellow-600/20"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column: Contact info (2 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 18 }}
            className="lg:col-span-2 bg-[linear-gradient(135deg,#1a2a6c_0%,#0d1b4b_40%,#060d28_100%)] text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(26,42,108,0.45)] flex flex-col gap-8 justify-between relative overflow-hidden border border-blue-900/40"
          >
            {/* Background Decorative Blur Blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[40px] pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-[40px] pointer-events-none" />
            
            <div className="flex flex-col gap-2 relative z-10">
              <h3 className="font-heading font-black text-2xl text-white tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-full" />
                Our Info
              </h3>
              <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                Feel free to call or visit our office for direct consultation.
              </p>
            </div>

            <div className="flex flex-col gap-4 relative z-10">
              {infoItems.map((item, index) => (
                <motion.a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.08] hover:border-white/10 hover:shadow-lg hover:shadow-blue-950/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-slate-400 font-bold text-[9px] sm:text-[10px] uppercase tracking-wider">
                      {item.label}
                    </span>
                    <p className="text-slate-200 font-extrabold text-[11px] sm:text-[13px] mt-0.5 leading-relaxed group-hover:text-white transition-colors duration-300 whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="border-t border-white/5 pt-6 mt-2 relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-450 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                  Mon - Sat (9am - 7pm)
                </span>
              </div>
              <span className="text-[9px] bg-emerald-500/10 text-emerald-400 font-black uppercase tracking-widest px-2.5 py-1 rounded-full border border-emerald-500/20">
                Open Now
              </span>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto map-container mt-16 rounded-3xl overflow-hidden shadow-premium border border-slate-100 h-96"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.0821827098694!2d72.96243967332154!3d23.601385394484602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395db99bedd214e7%3A0x108ae1ac2fbf943d!2sRaj%20corporation!5e0!3m2!1sen!2sin!4v1748421104455!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
            title="Raj Corporation Google Map Location"
          ></iframe>
        </motion.div>

      </div>

      {/* Success Modal Overlay */}
      <AnimatePresence>
        {success && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-full bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl flex flex-col items-center gap-4 border border-slate-100"
            >
              <div className="w-16 h-16 rounded-full bg-yellow-50 text-primary flex items-center justify-center shadow-inner">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-slate-800">
                Message Sent!
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Your inquiry details have been saved successfully in our MongoDB database and our administration has been notified.
              </p>
              <button 
                onClick={() => setSuccess(false)}
                className="btn btn-primary w-full py-3 mt-2 shine-btn shadow-lg shadow-yellow-600/10"
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
