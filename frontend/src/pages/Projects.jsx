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
    title: 'Vadilal',
    image: pc1,
    capacity: '50 kWp',
    location: 'Himatnagar, Gujarat'
  },
  {
    id: 2,
    category: 'commercial',
    title: 'Sabar_Agro',
    image: pc2,
    capacity: '150 kWp',
    location: 'Himatnagar, Gujarat'
  },
  {
    id: 3,
    category: 'commercial',
    title: 'Harsoliya_Brothers',
    image: pc3,
    capacity: '25 kWp',
    location: 'Gandhinagar, Gujarat'
  },
  {
    id: 4,
    category: 'residential',
    title: 'Radhe-govind Society',
    image: pc4,
    location: 'Himatnagar, Gujarat'
  },
  {
    id: 5,
    category: 'commercial',
    title: 'Hero-MotoCorp.',
    image: pc5,
    capacity: '25 kWp',
    location: 'Himatnagar, Gujarat'
  },
  {
    id: 6,
    category: 'Commercial',
    title: 'Jumma-Masjid',
    image: pc6,
    capacity: '20 kWp',
    location: 'Himatnagar, Gujarat'
  },
  // {
  //   id: 7,
  //   category: 'commercial',
  //   title: 'Cold Storage Solar Power plant',
  //   image: pc7,
  //   capacity: '120 kWp',
  //   location: 'Talod, Gujarat'
  // },
  {
    id: 8,
    category: 'Commercial',
    title: 'Masjid',
    image: pc8,
    // capacity: '15 kWp',
    location: 'Himatnagar, Gujarat'
  },
  {
    id: 9,
    category: 'commercial',
    title: 'TATA Mototrs',
    image: pc9,
    capacity: '25 kWp',
    location: 'Gandhinagar, Gujarat'
  },
  {
    id: 10,
    category: 'Commercial',
    title: 'Khushboo Agro Industries',
    image: pc10,
    capacity: '284 kWp',
    location: 'Modasa, Gujarat'
  },
  {
    id: 11,
    category: 'residential',
    title: 'Residential Apartment Rooftop',
    image: pc11,
    capacity: '25 kWp',
    location: 'Himatnagar, Gujarat'
  },
  {
    id: 12,
    category: 'residential',
    title: 'Residential Society',
    image: pc12,
    capacity: '50 kWp',
    location: 'Himatnagar, Gujarat'
  },
  {
    id: 13,
    category: 'commercial',
    title: 'Agro Industries',
    image: pc13,
    capacity: '284 kWp',
    location: 'Himatnagar, Gujarat'
  },
  {
    id: 14,
    category: 'residential',
    title: 'Modern Duplex Rooftop Solar',
    image: pc14,
    // capacity: '6 kWp',
    location: 'Himatnagar, Gujarat'
  },
  {
    id: 15,
    category: 'commercial',
    title: 'Vadilal Cold Storage',
    image: pc15,
    capacity: '50 kWp',
    location: 'Himatnagar, Gujarat'
  },
  {
    id: 16,
    category: 'commercial',
    title: 'Yashvi Agro Industries',
    image: pc16,
    capacity: '40 kWp',
    location: 'Himatnagar, Gujarat'
  },
  {
    id: 17,
    category: 'commercial',
    title: 'Sun Roto printpack',
    image: pc17,
    capacity: '100 kWp',
    location: 'Himatnagar, Gujarat'
  },
  {
    id: 18,
    category: 'commercial',
    title: 'ZamZam Traders',
    image: pc18,
    capacity: '30 kWp',
    location: 'Himatnagar, Gujarat'
  },
  {
    id: 19,
    category: 'commercial',
    title: 'Indian-Oil petrolPump',
    image: pc19,
    location: 'Himatnagar, Gujarat'
  },
  {
    id: 20,
    category: 'commercial',
    title: 'Sun Roto',
    image: pc20,
    capacity: '100 kWp',
    location: 'Himatnagar, Gujarat'
  },
  {
    id: 21,
    category: 'residential',
    title: 'Residential Apartment',
    image: pc21,
    capacity: '100 kWp',
    location: 'Himatnagar, Gujarat'
  },
  // {
  //   id: 22,
  //   category: 'residential',
  //   title: 'Stand-alone Society Solar Grid',
  //   image: pc22,
  //   capacity: '50 kWp',
  //   location: 'Prantij, Gujarat'
  // },
  {
    id: 23,
    category: 'commercial',
    title: 'RAJ-Motors',
    image: pc23,
    location: 'Himatnagar, Gujarat'
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
                      {project.capacity && (
                        <div className="flex items-center gap-1.5 text-primary text-xs font-bold uppercase">
                          <Zap size={14} />
                          <span>{project.capacity}</span>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold text-slate-800 mb-1 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.capacity && (
                    <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1">{project.capacity} Capacity</p>
                  )}
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
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-xl p-2 sm:p-8 md:p-12"
            onClick={handleClose}
          >
            {/* Top Bar (Floating) */}
            <div className="absolute top-6 left-0 right-0 px-6 sm:px-12 flex justify-between items-center z-50 pointer-events-none">
              <span className="text-sm font-bold tracking-widest bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 shadow-2xl text-white pointer-events-auto">
                {selectedProjectIndex + 1} <span className="text-white/40">/</span> {filteredProjects.length}
              </span>
              <button
                onClick={handleClose}
                className="p-3 sm:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-slate-900 transition-all duration-300 text-white shadow-2xl active:scale-90 pointer-events-auto group"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Navigation Left */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full bg-white/5 hover:bg-white/20 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 text-white shadow-2xl active:scale-90"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Navigation Right */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full bg-white/5 hover:bg-white/20 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 text-white shadow-2xl active:scale-90"
            >
              <ChevronRight size={32} />
            </button>

            {/* Main Image Container */}
            <motion.div
              key={selectedProjectIndex}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-6xl h-full max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 bg-slate-950 flex items-center justify-center group"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredProjects[selectedProjectIndex].image}
                alt={filteredProjects[selectedProjectIndex].title}
                className="w-full h-full object-contain sm:object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Glassmorphism Info Overlay at the bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-32 pb-8 sm:pb-12 px-6 sm:px-12 flex flex-col items-start justify-end transform transition-transform duration-500">
                <span className="px-4 py-1.5 rounded-full bg-primary text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-widest shadow-lg shadow-primary/30 mb-4 inline-block">
                  {filteredProjects[selectedProjectIndex].category}
                </span>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white tracking-tight mb-3 leading-tight drop-shadow-md">
                  {filteredProjects[selectedProjectIndex].title}
                </h2>
                
                {filteredProjects[selectedProjectIndex].capacity && (
                  <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-inner mt-2">
                    <Zap size={18} className="text-primary" />
                    <span className="font-bold text-sm sm:text-base tracking-wide">
                      {filteredProjects[selectedProjectIndex].capacity} System Capacity
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
