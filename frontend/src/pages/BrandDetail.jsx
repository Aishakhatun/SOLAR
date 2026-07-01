import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Award, ShieldAlert, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

// Local brand images
import imgWaaree from '../assets/photo/service/Waaree_Logo.jpg';
import imgGoldi from '../assets/photo/service/goldi.jpg';
import imgAdani from '../assets/photo/service/adani.png';

const brandsData = {
  waaree: {
    title: 'Waree Solar Solutions',
    tagline: 'Powering your future with clean, affordable, and reliable solar energy solutions.',
    image: imgWaaree,
    whyText: 'Waree Solar is one of the most trusted solar brands, offering high-quality solar products with advanced technology that delivers optimal performance. We design solutions to reduce energy costs, improve sustainability, and increase energy independence for both homes and businesses.',
    whyText2: 'Our end-to-end services—ranging from consulting and installation to after-sales support—make Waree Solar the best choice for your solar energy needs. We ensure the best ROI on every solar system.',
    benefits: [
      {
        title: 'Cost-Effective Solutions',
        desc: 'Affordable solar systems with high efficiency that help you save money on energy bills in the long term.'
      },
      {
        title: 'Industry-Leading Performance',
        desc: 'Waree’s solar panels use advanced technology to ensure maximum energy production and durability.'
      },
      {
        title: 'Easy Installation & Maintenance',
        desc: 'Quick installation process with minimal maintenance required to keep your solar system running smoothly.'
      },
      {
        title: 'Eco-Friendly Energy',
        desc: 'Reduce your carbon footprint and contribute to a greener planet by using clean, renewable solar energy.'
      },
      {
        title: 'Increased Property Value',
        desc: 'Homes and businesses with solar installations often see an increase in property value and appeal.'
      }
    ],
    colorTheme: {
      primary: 'text-emerald-600',
      bg: 'bg-emerald-600',
      hover: 'hover:bg-emerald-700',
      lightBg: 'bg-emerald-50/50',
      border: 'border-emerald-500',
      from: 'from-emerald-950',
      to: 'to-slate-900',
      shadow: 'shadow-emerald-500/10'
    }
  },
  goldi: {
    title: 'Goldi Solar Solutions',
    tagline: 'Empowering homes and businesses with reliable, sustainable solar energy solutions.',
    image: imgGoldi,
    whyText: 'Goldi Solar offers cutting-edge solar technology, engineered for maximum energy efficiency and long-term reliability. Our solar systems help you reduce electricity costs, increase energy independence, and contribute to a cleaner, more sustainable future.',
    whyText2: 'With an end-to-end approach that includes consultation, system design, installation, and after-sales support, we ensure that every customer gets the best value and performance from their solar investment.',
    benefits: [
      {
        title: 'Affordable & High-Performance Systems',
        desc: 'Goldi Solar offers high-quality solar panels at affordable prices, helping you save on energy bills.'
      },
      {
        title: 'Long-Term Durability',
        desc: 'Our solar systems are built to last, with top-tier components designed to withstand various weather conditions.'
      },
      {
        title: 'Easy Installation & Maintenance',
        desc: 'Goldi Solar ensures quick and hassle-free installation, with minimal maintenance required to keep your system running smoothly.'
      },
      {
        title: 'Sustainable & Green Energy',
        desc: 'Reduce your carbon footprint and contribute to environmental conservation by using clean, renewable solar energy.'
      },
      {
        title: 'Comprehensive Support',
        desc: 'We offer full customer support, including installation assistance, maintenance, and troubleshooting, ensuring your system performs at its best.'
      }
    ],
    colorTheme: {
      primary: 'text-amber-600',
      bg: 'bg-amber-600',
      hover: 'hover:bg-amber-700',
      lightBg: 'bg-amber-50/50',
      border: 'border-amber-500',
      from: 'from-amber-950',
      to: 'to-slate-900',
      shadow: 'shadow-amber-500/10'
    }
  },
  adani: {
    title: 'Adani Solar Solutions',
    tagline: 'Empowering a sustainable future with advanced solar technology and reliable energy solutions.',
    image: imgAdani,
    whyText: 'Adani Solar offers some of the most reliable solar solutions in the industry. With a focus on efficiency and sustainability, Adani Solar is committed to delivering top-tier solar systems that reduce energy costs, promote energy independence, and contribute to a cleaner planet.',
    whyText2: 'Whether you need a solar system for your home or business, our end-to-end services, including design, installation, and maintenance, ensure you get the best value for your investment.',
    benefits: [
      {
        title: 'Proven Reliability',
        desc: 'Adani Solar systems are engineered to deliver high performance and long-lasting durability, even in harsh environments.'
      },
      {
        title: 'Sustainable & Green Energy',
        desc: 'Reduce your carbon footprint and contribute to a greener future with clean, renewable energy from the sun.'
      },
      {
        title: 'Significant Savings on Energy Bills',
        desc: 'By generating your own electricity, you reduce dependency on conventional energy sources, leading to lower utility costs.'
      },
      {
        title: 'Advanced Technology',
        desc: 'Adani Solar uses cutting-edge technology to ensure maximum energy efficiency and performance for your home or business.'
      },
      {
        title: 'Support & Maintenance',
        desc: 'Our customer support team is always available to assist with installation, maintenance, and any other inquiries to keep your system running smoothly.'
      }
    ],
    colorTheme: {
      primary: 'text-sky-600',
      bg: 'bg-sky-600',
      hover: 'hover:bg-sky-700',
      lightBg: 'bg-sky-50/50',
      border: 'border-sky-500',
      from: 'from-sky-950',
      to: 'to-slate-900',
      shadow: 'shadow-sky-500/10'
    }
  }
};

export default function BrandDetail() {
  const { brandId } = useParams();
  const brand = brandsData[brandId?.toLowerCase()];

  if (!brand) {
    return (
      <div className="container mx-auto px-4 py-20 text-center flex flex-col items-center gap-4">
        <ShieldAlert size={48} className="text-red-500" />
        <h2 className="text-3xl font-heading font-extrabold text-slate-800">Brand Not Found</h2>
        <p className="text-slate-500 max-w-sm">The brand you are trying to view does not exist in our system catalog.</p>
        <Link to="/services" className="btn btn-primary bg-primary hover:bg-primary-hover text-white mt-4">
          Return to Services
        </Link>
      </div>
    );
  }

  const { colorTheme } = brand;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen overflow-hidden">
      {/* Brand Page Header */}
      <section className={`bg-gradient-to-r ${colorTheme.from} ${colorTheme.to} text-white pt-[100px] md:pt-[130px] pb-16 md:pb-20 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-slate-950 opacity-80" />
        <div className="container mx-auto px-4 sm:px-6 flex flex-col gap-4 text-center items-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5"
          >
            <Award size={14} className="text-primary" /> Technical Specifications
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-black text-white max-w-3xl tracking-tight leading-tight"
          >
            {brand.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl font-medium leading-relaxed"
          >
            {brand.tagline}
          </motion.p>
        </div>
      </section>

      {/* Brand Content Section */}
      <section className="section-py relative z-10">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col gap-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Stack */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-2xl aspect-video md:aspect-[4/3] max-h-[380px] group"
            >
              <img 
                src={brand.image} 
                alt={`${brand.title} installation`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>

            {/* Why Choose Brand */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-5"
            >
              <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                <Sparkles size={16} />
                <span>Authorized Distribution</span>
              </div>
              <h2 className="text-3xl font-heading font-extrabold text-slate-800 leading-tight">
                Why Choose {brand.title.split(' ')[0]}?
              </h2>
              <p className="text-slate-500 text-[15px] leading-relaxed mt-2">
                {brand.whyText}
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                {brand.whyText2}
              </p>
            </motion.div>
          </div>

          {/* Key Benefits box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-premium border border-slate-100"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-800 text-center mb-10 leading-tight">
              Key Benefits of Choosing {brand.title.split(' ')[0]} Solar
            </h2>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-5"
            >
              {brand.benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className={`
                    border-l-4 ${colorTheme.border} ${colorTheme.lightBg} 
                    p-6 rounded-r-2xl shadow-sm flex items-start gap-4 group
                  `}
                >
                  <div className={`w-8 h-8 rounded-full ${colorTheme.bg} text-white flex items-center justify-center shrink-0 shadow-md group-hover:rotate-12 transition-transform duration-300`}>
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <strong className="block text-slate-800 font-bold text-base md:text-lg mb-1 group-hover:text-slate-900 transition-colors">
                      {benefit.title}
                    </strong>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Action Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileTap={{ scale: 0.97 }}>
              <Link 
                to="/services" 
                className="btn btn-outline border-slate-200 hover:border-slate-800 text-slate-600 hover:text-slate-900 px-8 py-3.5 rounded-xl flex items-center gap-2 font-bold text-sm bg-white"
              >
                <ArrowLeft size={16} />
                <span>Back to Services</span>
              </Link>
            </motion.div>
            
            <motion.div whileTap={{ scale: 0.97 }}>
              <Link 
                to="/contact" 
                className={`btn btn-primary ${colorTheme.bg} ${colorTheme.hover} ${colorTheme.shadow} text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg shine-btn block`}
              >
                Inquire About this Brand
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
