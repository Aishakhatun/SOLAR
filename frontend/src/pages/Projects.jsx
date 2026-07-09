import React, { useState, useEffect } from 'react';
import { Eye, MapPin, Zap, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Local project image imports
import pc1 from '../assets/photo/project1/c1.png';
import pc2 from '../assets/photo/project1/c2.jpeg';
import pc3 from '../assets/photo/project1/c3.jpeg';
import pc4 from '../assets/photo/project1/c4.jpeg';
import pc5 from '../assets/photo/project1/c5.jpeg';
import pc6 from '../assets/photo/project1/c6.png';
import pc7 from '../assets/photo/project1/c7.jpeg';
import pc8 from '../assets/photo/project1/c8.jpeg';
import pc9 from '../assets/photo/project1/c9.jpeg';
import pc10 from '../assets/photo/project1/c10.jpeg';
import pc11 from '../assets/photo/project1/c11.jpeg';
import pc12 from '../assets/photo/project1/c12.jpeg';
import pc13 from '../assets/photo/project1/c13.jpeg';
import pc14 from '../assets/photo/project1/c14.jpeg';
import pc15 from '../assets/photo/project1/c15.jpeg';
import pc16 from '../assets/photo/project1/c16.jpeg';
import pc17 from '../assets/photo/project1/c17.jpeg';
import pc18 from '../assets/photo/project1/c18.jpeg';
import pc19 from '../assets/photo/project1/c19.jpeg';
import pc20 from '../assets/photo/project1/c20.jpeg';
import pc21 from '../assets/photo/project1/c21.jpeg';
import pc22 from '../assets/photo/project1/c22.jpeg';
import pc23 from '../assets/photo/project1/c23.jpeg';

const projectsList = [
  {
    id: 1,
    category: 'commercial',
    title: 'Industrial Factory Rooftop Setup',
    image: pc1,
    capacity: '150 kWp',
    location: 'Himatnagar, Gujarat'
  },
  {
    id: 2,
    category: 'commercial',
    title: 'Corporate Office Solar Integration',
    image: pc2,
    capacity: '80 kWp',
    location: 'Ahmedabad, Gujarat'
  },
  {
    id: 3,
    category: 'residential',
    title: 'Off-grid Modern Villa System',
    image: pc3,
    capacity: '15 kWp',
    location: 'Idar, Gujarat'
  },
  {
    id: 4,
    category: 'commercial',
    title: 'Warehouse Solar Canopy Layout',
    image: pc4,
    capacity: '200 kWp',
    location: 'Mehsana, Gujarat'
  },
  {
    id: 5,
    category: 'commercial',
    title: 'Retail Mall Green Energy Plan',
    image: pc5,
    capacity: '320 kWp',
    location: 'Gandhinagar, Gujarat'
  },
  {
    id: 6,
    category: 'residential',
    title: 'Net-metered Suburban Home Rooftop',
    image: pc6,
    capacity: '10 kWp',
    location: 'Prantij, Gujarat'
  },
  {
    id: 7,
    category: 'commercial',
    title: 'Cold Storage Solar Power plant',
    image: pc7,
    capacity: '120 kWp',
    location: 'Talod, Gujarat'
  },
  {
    id: 8,
    category: 'residential',
    title: 'Rooftop System with Battery Backup',
    image: pc8,
    capacity: '8 kWp',
    location: 'Himatnagar, Gujarat'
  },
  {
    id: 9,
    category: 'residential',
    title: 'Eco-Friendly Farmhouse Panels',
    image: pc9,
    capacity: '12 kWp',
    location: 'Khedbrahma, Gujarat'
  },
  {
    id: 10,
    category: 'commercial',
    title: 'Commercial Showroom Rooftop',
    image: pc10,
    capacity: '45 kWp',
    location: 'Modasa, Gujarat'
  },
  {
    id: 11,
    category: 'residential',
    title: 'Residential Apartment Rooftop',
    image: pc11,
    capacity: '25 kWp',
    location: 'Vadodara, Gujarat'
  },
  {
    id: 12,
    category: 'commercial',
    title: 'Textile Factory Solar Grid',
    image: pc12,
    capacity: '400 kWp',
    location: 'Surat, Gujarat'
  },
  {
    id: 13,
    category: 'commercial',
    title: 'Agricultural Solar Water Pump',
    image: pc13,
    capacity: '30 kWp',
    location: 'Rajkot, Gujarat'
  },
  {
    id: 14,
    category: 'residential',
    title: 'Modern Duplex Rooftop Solar',
    image: pc14,
    capacity: '6 kWp',
    location: 'Himatnagar, Gujarat'
  },
  {
    id: 15,
    category: 'commercial',
    title: 'Solar Carport Canopy',
    image: pc15,
    capacity: '50 kWp',
    location: 'Ahmedabad, Gujarat'
  },
  {
    id: 16,
    category: 'residential',
    title: 'Eco Villa Rooftop Array',
    image: pc16,
    capacity: '18 kWp',
    location: 'Idar, Gujarat'
  },
  {
    id: 17,
    category: 'commercial',
    title: 'School Building Solar Project',
    image: pc17,
    capacity: '75 kWp',
    location: 'Mehsana, Gujarat'
  },
  {
    id: 18,
    category: 'residential',
    title: 'Off-grid Rural Home Power',
    image: pc18,
    capacity: '5 kWp',
    location: 'Khedbrahma, Gujarat'
  },
  {
    id: 19,
    category: 'commercial',
    title: 'Dairy Plant Rooftop Setup',
    image: pc19,
    capacity: '180 kWp',
    location: 'Himatnagar, Gujarat'
  },
  {
    id: 20,
    category: 'residential',
    title: 'Luxury Penthouse Solar System',
    image: pc20,
    capacity: '14 kWp',
    location: 'Gandhinagar, Gujarat'
  },
  {
    id: 21,
    category: 'commercial',
    title: 'Hospital Emergency Power Backup',
    image: pc21,
    capacity: '100 kWp',
    location: 'Modasa, Gujarat'
  },
  {
    id: 22,
    category: 'residential',
    title: 'Stand-alone Society Solar Grid',
    image: pc22,
    capacity: '50 kWp',
    location: 'Prantij, Gujarat'
  },
  {
    id: 23,
    category: 'commercial',
    title: 'Agro-Processing Solar Plant',
    image: pc23,
    capacity: '90 kWp',
    location: 'Talod, Gujarat'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const filteredProjects = filter === 'all' 
    ? projectsList 
    : projectsList.filter(p => p.category === filter);

  // Reset selected project index when filter changes to avoid out of bounds
  useEffect(() => {
    setSelectedProjectIndex(null);
  }, [filter]);

  const handlePrev = () => {
    setSelectedProjectIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1;
    });
  };

  const handleNext = () => {
    setSelectedProjectIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const handleClose = () => {
    setSelectedProjectIndex(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedProjectIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProjectIndex, filteredProjects]);

  return (
    <div className="w-full pt-[110px] md:pt-[135px] pb-16 md:pb-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center gap-4"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200/50 font-bold uppercase tracking-widest text-[10px] sm:text-xs">
            Our Projects
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent leading-tight tracking-tight">
            Latest Solar & Renewable Energy Projects
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Browse through some of our successful solar panel installations completed for homes and businesses.
          </p>
        </motion.div>

        {/* Filter Navigation Buttons */}
        <div className="flex justify-center gap-3 mb-16 flex-wrap">
          {[
            { label: 'All Projects', value: 'all' },
            { label: 'Solar Commercial Plans', value: 'commercial' },
            { label: 'Solar Residential Plans', value: 'residential' }
          ].map((btn) => (
            <motion.button
              key={btn.value}
              whileTap={{ scale: 0.96 }}
              onClick={() => setFilter(btn.value)}
              className={`
                px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 border
                ${filter === btn.value 
                  ? 'bg-primary text-white border-primary shadow-lg shadow-yellow-600/20' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary'}
              `}
            >
              {btn.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid with Framer Motion layout FLIP animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div 
                layout
                key={project.id} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 180, damping: 22 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setSelectedProjectIndex(index)}
                className="bg-white rounded-2xl overflow-hidden shadow-premium border border-slate-100/50 group cursor-pointer"
              >
                <div className="h-60 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white font-bold text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-white/10">
                    {project.category}
                  </span>

                  {/* Spec Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-between p-6 transition-all duration-300">
                    <div className="self-end bg-white/10 backdrop-blur-md p-2.5 rounded-full border border-white/20 text-white transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <Eye size={18} />
                    </div>
                    <div className="flex flex-col gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-1.5 text-primary text-xs font-bold uppercase">
                        <Zap size={14} />
                        <span>{project.capacity} System</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-300 text-xs font-semibold">
                        <MapPin size={14} className="text-secondary" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold text-slate-800 mb-1 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1">{project.capacity} Capacity</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox / Big Screen Modal */}
      <AnimatePresence>
        {selectedProjectIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/98 backdrop-blur-md p-4 sm:p-6 gap-3 sm:gap-5"
            onClick={handleClose}
          >
            {/* Top Bar (Responsive positioning and spacing) */}
            <div className="w-full max-w-4xl flex justify-between items-center z-10 text-white mt-1 px-1">
              <span className="text-xs sm:text-sm font-bold tracking-wider bg-slate-900/80 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 shadow-lg">
                {selectedProjectIndex + 1} / {filteredProjects.length}
              </span>
              <button
                onClick={handleClose}
                className="p-2 sm:p-3 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 hover:bg-slate-800 hover:text-primary transition-all duration-300 text-white shadow-lg active:scale-95"
              >
                <X size={18} className="sm:hidden" />
                <X size={22} className="hidden sm:block" />
              </button>
            </div>

            {/* Main Content Area (Flexible heights for mobile/desktop to prevent clipping) */}
            <div 
              className="relative max-w-4xl w-full flex-1 min-h-0 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button (Scaled and styled for touch/hover) */}
              <button
                onClick={handlePrev}
                className="absolute left-1 sm:left-4 z-10 p-2 sm:p-3.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 hover:bg-slate-800 hover:text-primary active:scale-90 transition-all duration-300 text-white shadow-xl"
              >
                <ChevronLeft size={18} className="sm:hidden" />
                <ChevronLeft size={24} className="hidden sm:block" />
              </button>

              {/* Main Image with swipe/drag support for mobile */}
              <motion.div
                key={selectedProjectIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -60) {
                    handleNext();
                  } else if (info.offset.x > 60) {
                    handlePrev();
                  }
                }}
                className="w-full h-full flex items-center justify-center p-1 sm:p-2 cursor-grab active:cursor-grabbing touch-pan-y"
              >
                <img
                  src={filteredProjects[selectedProjectIndex].image}
                  alt={filteredProjects[selectedProjectIndex].title}
                  className="max-w-full max-h-full object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-white/10 pointer-events-none select-none"
                />
              </motion.div>

              {/* Next Button (Scaled and styled for touch/hover) */}
              <button
                onClick={handleNext}
                className="absolute right-1 sm:right-4 z-10 p-2 sm:p-3.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 hover:bg-slate-800 hover:text-primary active:scale-90 transition-all duration-300 text-white shadow-xl"
              >
                <ChevronRight size={18} className="sm:hidden" />
                <ChevronRight size={24} className="hidden sm:block" />
              </button>
            </div>

            {/* Bottom Description Area (Responsive layout and typography) */}
            <motion.div
              key={`desc-${selectedProjectIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="max-w-xl w-full bg-slate-900/70 backdrop-blur-md border border-white/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center text-white flex flex-col items-center gap-2 sm:gap-3 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-primary/10 text-primary font-bold text-[9px] sm:text-[10px] uppercase tracking-wider border border-primary/20">
                {filteredProjects[selectedProjectIndex].category}
              </span>
              <h2 className="text-base sm:text-xl md:text-2xl font-heading font-black tracking-tight leading-snug">
                {filteredProjects[selectedProjectIndex].title}
              </h2>
              <div className="flex items-center gap-4 sm:gap-6 mt-0.5 sm:mt-1 text-slate-450 text-[11px] sm:text-sm">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <Zap size={14} className="text-primary sm:w-4 sm:h-4" />
                  <span className="font-bold">{filteredProjects[selectedProjectIndex].capacity} Capacity</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <MapPin size={14} className="text-secondary sm:w-4 sm:h-4" />
                  <span className="font-semibold">{filteredProjects[selectedProjectIndex].location}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
