import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Award, ShieldAlert, Sparkles, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Local brand images
import imgWaaree from '../assets/photo/service/Waaree_Logo.jpg';
import imgGoldi from '../assets/photo/service/goldi.jpg';
import imgAdani from '../assets/photo/service/adani.png';

const brandsData = {
  waaree: {
    title: 'Waaree Energies',
    tagline: 'India\'s Largest Solar Panel Manufacturer & Global Leader in Renewable Energy.',
    image: imgWaaree,
    whyText: 'Founded in 1989, Waaree Energies Limited is India\'s largest vertically integrated solar module manufacturer. With operations spanning the entire solar value chain, Waaree provides world-class Engineering, Procurement, and Construction (EPC) services alongside premium solar PV modules.',
    whyText2: 'Waaree is consistently recognized as a "Tier 1" manufacturer by BloombergNEF. From utility-scale projects to residential systems, our NABL-accredited reliability labs ensure that every panel delivers maximum efficiency, durability, and superior ROI.',
    benefits: [
      {
        title: 'World-Class Manufacturing',
        desc: 'Recognized as the largest non-Chinese PV module manufacturer globally with state-of-the-art facilities across India and the US.'
      },
      {
        title: 'Tier-1 Bankability',
        desc: 'Consistently rated as a Tier 1 supplier by BloombergNEF, ensuring proven reliability and financial stability for large projects.'
      },
      {
        title: 'Vertically Integrated',
        desc: 'A complete ecosystem covering ingots, wafers, solar cells, and modules for unmatched quality control and supply chain security.'
      },
      {
        title: 'Stringent Quality Testing',
        desc: 'In-house NABL-accredited reliability labs subject all modules to rigorous testing to ensure peak performance in harsh environments.'
      },
      {
        title: 'Comprehensive Solutions',
        desc: 'Beyond solar panels, Waaree offers complete sustainable systems including inverters, smart meters, and battery energy storage.'
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
    title: 'Goldi Solar',
    tagline: 'Illuminating the Future with High-Efficiency Solar PV Modules and EPC Services.',
    image: imgGoldi,
    whyText: 'Founded in 2011, Goldi Solar is a rapidly growing, prominent Indian renewable energy company headquartered in Surat, Gujarat. With a manufacturing capacity of over 15 GW, we specialize in high-efficiency solar modules and comprehensive end-to-end solar solutions.',
    whyText2: 'Goldi Solar leverages AI-powered manufacturing lines and enforces 100% material traceability to guarantee bankable, world-class products. We pride ourselves on a diverse, inclusive work culture and our unwavering commitment to sustainable energy development.',
    benefits: [
      {
        title: 'AI-Powered Manufacturing',
        desc: 'State-of-the-art production facilities utilizing artificial intelligence for precision manufacturing and flawless quality control.'
      },
      {
        title: '100% Material Traceability',
        desc: 'Strict quality standards and transparent sourcing guarantee the reliability, origin, and bankability of every module component.'
      },
      {
        title: 'Massive Production Capacity',
        desc: 'Operating with an extensive 15.2 GW manufacturing capacity to seamlessly meet large-scale global and domestic energy demands.'
      },
      {
        title: 'End-to-End EPC Services',
        desc: 'A comprehensive independent power producer providing everything from premium PV modules to complete grid-tied installations.'
      },
      {
        title: 'Inclusive & Ethical Culture',
        desc: 'Deeply committed to social responsibility by employing diverse local talent, including tribal communities and individuals with disabilities.'
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
    title: 'Adani Solar',
    tagline: 'India\'s First and Largest Vertically Integrated Solar Photovoltaic Ecosystem.',
    image: imgAdani,
    whyText: 'Adani Solar is the solar manufacturing arm of the Adani Group, dedicated to building a comprehensive ecosystem for solar PV manufacturing in India. Our massive 800-acre facility in Mundra, Gujarat, represents the cutting-edge of domestic energy self-reliance.',
    whyText2: 'Ranked as a "Top Performer" by PVEL for seven consecutive years, Adani Solar controls the entire value chain—from metallurgical grade silicon and wafers to cells and modules. This complete integration ensures unparalleled quality and long-term sustainability.',
    benefits: [
      {
        title: 'Fully Integrated Ecosystem',
        desc: 'Uniquely controls the entire solar supply chain from raw polysilicon and ingots to completed PV cells and high-efficiency modules.'
      },
      {
        title: 'PVEL Top Performer',
        desc: 'Ranked as a top-performing module manufacturer by PVEL for 7 consecutive years, validating exceptional durability and performance.'
      },
      {
        title: 'Tier-1 Supplier Status',
        desc: 'Recognized globally as a BloombergNEF Tier-1 PV Module supplier, guaranteeing high bankability for massive utility-scale projects.'
      },
      {
        title: 'Unmatched Manufacturing Scale',
        desc: 'Operating within one of India\'s largest Electronics Manufacturing Clusters, ensuring rapid scalability and immense production volume.'
      },
      {
        title: 'Complete Supply Chain Security',
        desc: 'In-house production of crucial solar ancillaries including specialized glass, EVA, backsheets, and aluminum frames.'
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
    <div className="w-full bg-white min-h-screen font-sans">
      
      {/* Ultra-Minimal Hero Section */}
      <section className="pt-[110px] md:pt-[120px] pb-10 md:pb-12 flex justify-center px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10"
        >
          {/* Subtle Logo Container */}
          <div className="w-28 h-28 md:w-36 md:h-36 shrink-0 rounded-full border border-slate-100 bg-white shadow-sm flex items-center justify-center p-6">
            <img 
              src={brand.image} 
              alt={`${brand.title} logo`} 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="flex flex-col gap-3 text-center md:text-left items-center md:items-start max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight leading-[1.1]">
              {brand.title}
            </h1>
            
            <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
              {brand.tagline}
            </p>
          </div>
        </motion.div>
      </section>
      {/* Combined Content Section (Twin Cards) */}
      <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            
            {/* Left Column: About Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-200 flex flex-col justify-center h-full relative overflow-hidden group"
            >
              {/* Subtle Watermark */}
              <div className="absolute -bottom-12 -right-12 w-64 h-64 opacity-5 group-hover:opacity-10 group-hover:scale-105 transition-all duration-1000 pointer-events-none">
                <img src={brand.image} alt="Watermark" className="w-full h-full object-contain filter grayscale" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 text-slate-400 mb-4">
                  <Sparkles size={18} className={colorTheme.primary} />
                  <span className="uppercase tracking-widest text-[10px] font-bold text-slate-500">
                    Authorized Partnership
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-6">
                  About {brand.title.split(' ')[0]}
                </h2>
                
                <div className="text-slate-600 leading-relaxed text-base flex flex-col gap-4 font-light">
                  <p>{brand.whyText}</p>
                  <p>{brand.whyText2}</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Key Advantages */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-200 flex flex-col h-full"
            >
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                Key Advantages
              </h2>
              <p className="text-slate-500 mb-6 text-sm">
                The core benefits of choosing {brand.title.split(' ')[0]} solar systems.
              </p>

              <div className="flex flex-col gap-5 flex-1 justify-center">
                {brand.benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className={`mt-0.5 p-2 rounded-lg bg-slate-50 border border-slate-100 transition-colors group-hover:bg-slate-100 ${colorTheme.primary} shrink-0`}>
                      <CheckCircle2 size={16} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-bold text-slate-900 leading-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed font-light">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Action Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16 pt-10 border-t border-slate-100"
          >
            <Link 
              to="/services" 
              className="px-8 py-3.5 rounded-full flex items-center gap-2 font-bold text-sm bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to Services</span>
            </Link>
            
            <Link 
              to="/contact" 
              className={`px-8 py-3.5 rounded-full font-bold text-sm text-white ${colorTheme.bg} ${colorTheme.hover} transition-colors shadow-sm`}
            >
              Inquire About this Brand
            </Link>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
