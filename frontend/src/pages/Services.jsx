import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Sparkles, Lightbulb, CheckCircle2, UserCheck, HelpCircle, ArrowRight, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

// Local image imports
import imgPanel from '../assets/photo/service/panel.jpg';
import imgCleaning from '../assets/photo/service/cleaning.jpg';
import imgLight from '../assets/photo/service/light.jpeg';
import imgFeature from '../assets/photo/service/feature.png';
import imgWaaree from '../assets/photo/service/Waaree_Logo.jpg';
import imgGoldi from '../assets/photo/service/goldi.jpg';
import imgAdani from '../assets/photo/service/adani.png';

const servicesList = [
  {
    icon: <Sun size={26} />,
    image: imgPanel,
    title: 'Solar Panels',
    description: 'Solar panels use photovoltaic (PV) cells to convert sunlight into clean electricity, providing a reliable source of power for your buildings.'
  },
  {
    icon: <Sparkles size={26} />,
    image: imgCleaning,
    title: 'Solar Cleaning System',
    description: 'We offer manual and automated solar cleaning systems. Regular cleaning increases energy efficiency and extends the lifespan of panels.'
  },
  {
    icon: <Lightbulb size={26} />,
    image: imgLight,
    title: 'Solar Lights',
    description: 'Energy-saving lighting systems powered by micro solar modules that charge built-in batteries during the day for automatic night illumination.'
  }
];

const brandPartners = [
  {
    id: 'waaree',
    name: 'Waaree Solar',
    desc: 'One of India\'s largest solar panel manufacturers, offering top-tier PV modules with high efficiency ratings and long-term warranties.',
    bg: 'from-emerald-500 to-teal-600',
    btnColor: 'hover:bg-emerald-600 border-emerald-500 text-emerald-600'
  },
  {
    id: 'goldi',
    name: 'Goldi Solar',
    desc: 'Renowned brand delivering cost-effective solar energy systems, high-quality components, and robust panel performance under diverse climates.',
    bg: 'from-amber-500 to-orange-600',
    btnColor: 'hover:bg-amber-600 border-amber-500 text-amber-600'
  },
  {
    id: 'adani',
    name: 'Adani Solar',
    desc: 'Providing advanced solar cell and module technologies with industry-leading reliability, durability, and customer service support.',
    bg: 'from-sky-500 to-blue-600',
    btnColor: 'hover:bg-sky-600 border-sky-500 text-sky-600'
  }
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="w-full pt-[110px] md:pt-[135px] pb-16 md:pb-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200/50 font-bold uppercase tracking-widest text-[10px] sm:text-xs">
            <Sparkles size={13} className="text-amber-500" /> Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent leading-tight tracking-tight">
            Pioneers in the World of Renewable Energy
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            We provide state-of-the-art solar installations, high-performance equipment, and custom energy plans for every consumer.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {servicesList.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl overflow-hidden shadow-premium border border-slate-100/50 transition-all duration-300 group"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="p-8 relative">
                <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg -mt-14 border-4 border-white relative z-10 group-hover:rotate-6 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-800 mt-4 mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.description}</p>
                <Link to="/projects" className="text-primary font-bold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-300">
                  View Projects <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Brand Partners Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3"
        >
          <span className="text-secondary font-bold uppercase tracking-wider text-xs">Authorized Brand Partners</span>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-800">
            Partnered with Industry Leaders
          </h2>
          <p className="text-slate-500 text-sm">
            We distribute and install certified solar solutions from premium global manufacturers.
          </p>
        </motion.div>

        {/* Brand Partners Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {brandPartners.map((brand) => (
            <motion.div 
              key={brand.id} 
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-8 shadow-premium border border-slate-100 transition-all duration-300 flex flex-col justify-between items-center text-center group"
            >
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${brand.bg} text-white flex items-center justify-center font-heading font-black text-2xl shadow-lg mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  {brand.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-800 mb-3">{brand.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{brand.desc}</p>
              </div>
              <motion.div whileTap={{ scale: 0.98 }} className="w-full">
                <Link 
                  to={`/brand/${brand.id}`} 
                  className={`btn btn-outline ${brand.btnColor} hover:text-white w-full py-3 rounded-xl transition-all duration-300 font-bold text-sm block`}
                >
                  Learn Specifications
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us Split Panel */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-premium border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div>
                <span className="text-primary text-sm font-bold uppercase tracking-wider">Quality Standards</span>
                <h2 className="text-3xl font-heading font-extrabold text-slate-800 mt-2">
                  Premium Rooftop Installations & Support
                </h2>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                We combine experienced engineers, world-class equipment partners, and custom consultation layouts to deliver efficient commercial and residential systems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                {[
                  { icon: <CheckCircle2 size={24} />, title: 'Quality Services', desc: 'Top-grade solar modules.', color: 'bg-yellow-50 text-primary' },
                  { icon: <UserCheck size={24} />, title: 'Expert Workers', desc: 'Certified engineers.', color: 'bg-sky-50 text-secondary' },
                  { icon: <Settings size={24} />, title: 'Free Consultation', desc: 'Custom roof mapping.', color: 'bg-amber-50 text-amber-500' },
                  { icon: <HelpCircle size={24} />, title: 'Customer Support', desc: '24/7 client helpline.', color: 'bg-purple-50 text-purple-500' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-350`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-slate-800 font-bold text-sm">{item.title}</h4>
                      <p className="text-slate-400 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-[4/3] max-h-[380px] group"
            >
              <img 
                src={imgFeature} 
                alt="Solar engineers planning" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
}
