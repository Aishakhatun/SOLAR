import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, CheckCircle, Award, ShieldCheck, Zap, ArrowRight, ChevronLeft, ChevronRight, Calculator, Globe, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Local image imports
import slideImg1 from '../assets/photo/main/main1.png';
import slideImg2 from '../assets/photo/main/main2.png';
import slideImg3 from '../assets/photo/main/main3.png';
import aboutImg from '../assets/photo/main/about.png';

const slides = [
  {
    image: slideImg1,
    title: 'LET THE SUN PAY YOUR BILLS',
    description: 'Solar energy is the energy of the future — clean, limitless, and free.'
  },
  {
    image: slideImg2,
    title: 'GREEN Rooftops, CLEAN POWER',
    description: 'Plant panels, not pollution. Let the sun grow your power and fuel your savings.'
  },
  {
    image: slideImg3,
    title: 'ENERGY INDEPENDENCE FOR ALL',
    description: 'Turn your rooftop into a quiet, clean, and brilliant powerhouse.'
  }
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [monthlyBill, setMonthlyBill] = useState(3000);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  // Calculator logic
  const unitsConsumed = Math.round(monthlyBill / 7.5);
  const recommendedKW = (unitsConsumed / 120).toFixed(1);
  const estimatedCost = Math.round(recommendedKW * 65000);
  const annualSavings = Math.round(monthlyBill * 12 * 0.9);
  const lifetimeSavings = annualSavings * 25;
  const treesPlanted = Math.round(recommendedKW * 18);

  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="w-full bg-slate-50 overflow-hidden">
      {/* Hero Section Carousel */}
      <section className="relative h-[500px] sm:h-[550px] md:h-[650px] bg-slate-900 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full flex items-center"
          >
            <img
              src={slides[activeSlide].image}
              alt={slides[activeSlide].title}
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.38]"
            />
            <div className="container mx-auto px-4 sm:px-6 relative z-20 text-white flex flex-col items-start gap-4">
              <motion.span 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-primary/20 backdrop-blur-md text-primary font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-primary/30"
              >
                Solar Energy Solutions
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-white font-heading font-black text-3xl sm:text-5xl md:text-6xl max-w-3xl leading-tight uppercase"
              >
                {slides[activeSlide].title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-base sm:text-lg md:text-xl max-w-2xl text-slate-200 mb-4"
              >
                {slides[activeSlide].description}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact" className="btn btn-primary shine-btn shadow-lg shadow-yellow-600/20 px-6 sm:px-7 py-3 sm:py-3.5">
                  Get a Free Quote
                </Link>
                <Link to="/services" className="btn btn-outline border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl transition-colors">
                  Learn More
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center z-30 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center z-30 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10"
        >
          <ChevronRight size={20} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide ? 'bg-primary w-7' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Feature Counters Grid with staggered animations */}
      <section className="container mx-auto px-4 sm:px-6 relative -mt-12 md:-mt-16 z-40 mb-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-premium border border-slate-100/50 flex items-center gap-5 sm:gap-6 group"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-yellow-50 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <Users size={28} />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">1000+</div>
              <div className="text-slate-500 font-bold text-xs sm:text-sm">Happy Customers</div>
              <p className="text-[11px] text-slate-400 mt-0.5">Reliable clean energy installs in Gujarat.</p>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-premium border border-slate-100/50 flex items-center gap-5 sm:gap-6 group"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-sky-50 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
              <CheckCircle size={28} />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">800+</div>
              <div className="text-slate-500 font-bold text-xs sm:text-sm">Projects Done</div>
              <p className="text-[11px] text-slate-400 mt-0.5">On-grid and off-grid rooftop solutions.</p>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-premium border border-slate-100/50 flex items-center gap-5 sm:gap-6 group"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
              <Award size={28} />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">20+</div>
              <div className="text-slate-500 font-bold text-xs sm:text-sm">Expert Workers</div>
              <p className="text-[11px] text-slate-400 mt-0.5">Qualified technicians and engineers.</p>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image Stack */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center w-full"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video md:aspect-[4/3] max-w-lg w-full group">
                <img 
                  src={aboutImg} 
                  alt="Solar Panels Installation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300" />
                <div className="absolute bottom-6 right-6 bg-primary text-white p-5 sm:p-6 rounded-2xl shadow-xl flex flex-col items-center animate-float border border-yellow-400/20">
                  <span className="text-3xl sm:text-4xl font-extrabold font-heading">7+</span>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-yellow-100">Years Experience</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div>
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                  <Sparkles size={16} />
                  <span>About Raj Corporation</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-800 mt-2 leading-tight">
                  Complete Commercial & Residential Solar Solutions
                </h2>
              </div>
              <p className="text-slate-500 text-[14px] sm:text-[15px] leading-relaxed">
                Our journey has been defined by a deep commitment to sustainable energy solutions, helping homes, businesses, and industries transition to clean, cost-effective power. We provide end-to-end solar deployment.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Deep Technical Expertise',
                  'Cut Electricity Bills by 90%',
                  'Customized Roof Layouts',
                  '25-Year Brand Warranty',
                  'Net Metering Integration',
                  'Post-Installation Support'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-yellow-50 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <ShieldCheck size={14} />
                    </div>
                    <span className="text-slate-700 font-bold text-xs sm:text-[13px]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Link to="/services" className="btn btn-primary shine-btn shadow-lg shadow-yellow-600/10">
                  Explore Services <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Interactive Solar Calculator Widget */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14 flex flex-col gap-3"
          >
            <span className="text-secondary font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-1">
              <Calculator size={16} /> Live Estimator
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-800">
              Calculate Your Solar Savings
            </h2>
            <p className="text-slate-500 text-sm">
              Use our live estimator slider to see how much power your roof can generate and the lifetime savings you can earn.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-premium border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
          >
            
            {/* Input Slider Column */}
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <h4 className="text-slate-700 font-bold text-xs sm:text-sm">Monthly Electricity Bill</h4>
                <span className="text-primary font-black text-xl sm:text-2xl font-heading">
                  ₹{monthlyBill.toLocaleString('en-IN')}
                </span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="15000" 
                step="500"
                value={monthlyBill} 
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-yellow-600 focus:outline-none"
              />
              <div className="flex justify-between text-[11px] font-bold text-slate-400">
                <span>₹1,000</span>
                <span>₹7,500</span>
                <span>₹15,000+</span>
              </div>
              <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl flex flex-col gap-1.5 border border-slate-100 mt-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 font-bold">Estimated Consumption:</span>
                  <span className="text-slate-800 font-bold">{unitsConsumed} kWh / month</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 font-bold">Average tariff rate:</span>
                  <span className="text-slate-800 font-bold">₹7.50 per unit</span>
                </div>
              </div>
            </div>

            {/* Results Display Column */}
            <div className="grid grid-cols-2 gap-5 sm:gap-6 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl" />
              
              <div className="col-span-2 border-b border-white/10 pb-4">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Recommended System</span>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-primary mt-1">
                  {recommendedKW} kWp
                </h3>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Est. Cost</span>
                <p className="text-base sm:text-lg font-bold text-white mt-1">₹{estimatedCost.toLocaleString('en-IN')}</p>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">25-Yr Savings</span>
                <p className="text-base sm:text-lg font-bold text-amber-400 mt-1">₹{lifetimeSavings.toLocaleString('en-IN')}</p>
              </div>

              <div className="col-span-2 pt-4 flex items-center gap-3 border-t border-white/10 mt-2">
                <Globe className="text-yellow-500 animate-spin-slow shrink-0" size={20} />
                <span className="text-xs text-slate-300 font-semibold leading-relaxed">
                  Equivalent to planting <strong className="text-yellow-500">{treesPlanted}</strong> carbon-absorbing trees!
                </span>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Trust Banner with scroll trigger */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950 opacity-80" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 text-center max-w-3xl flex flex-col gap-6 relative z-10"
        >
          <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mx-auto animate-pulse-slow">
            <Zap size={28} />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white leading-tight uppercase">
            Ready to Switch to Clean Solar Energy?
          </h2>
          <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed">
            Let us design a custom rooftop solar system that fits your budget and covers your energy needs. Start generating your own clean power today.
          </p>
          <div className="mt-2">
            <Link to="/contact" className="btn btn-primary shine-btn shadow-xl shadow-yellow-600/20 px-8 py-3.5">
              Contact Our Consultants
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
