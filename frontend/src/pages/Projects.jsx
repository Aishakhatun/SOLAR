import React, { useState } from 'react';
import { Eye, MapPin, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Local project image imports
import pc1 from '../assets/photo/project1/c3.jpeg';
import pc2 from '../assets/photo/project1/c4.jpeg';
import pc3 from '../assets/photo/project1/c5.jpeg';
import pc4 from '../assets/photo/project1/c7.jpeg';
import pc5 from '../assets/photo/project1/c11.jpeg';
import pc6 from '../assets/photo/project1/c12.jpeg';
import pc7 from '../assets/photo/project1/c13.jpeg';
import pc8 from '../assets/photo/project1/c14.jpeg';
import pc9 from '../assets/photo/project1/c15.jpeg';

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
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsList 
    : projectsList.filter(p => p.category === filter);

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
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                key={project.id} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 180, damping: 22 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl overflow-hidden shadow-premium border border-slate-100/50 group"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end p-6 transition-all duration-300">
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
    </div>
  );
}
