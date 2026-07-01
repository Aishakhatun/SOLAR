import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Monitor window scroll to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Mobile menu animation states
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 }
  };

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact Us', path: '/contact' }
  ];

  // Determine if header should be styled as solid dark elements or white transparent elements
  const isSolid = scrolled || !isHome;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 md:py-4
        ${isSolid 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100/50' 
          : 'bg-white md:bg-transparent border-b border-transparent md:border-b-white/5'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Brand Logo Group */}
        <Link to="/" className="flex items-center gap-2.5 group" onClick={closeMenu}>
          <img 
            src="/Logo.png" 
            alt="Solartec Logo" 
            className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            onError={(e) => e.target.style.display = 'none'} 
          />
          <img 
            src="/LOGON.png" 
            alt="Raj Corporation Logo" 
            className={`h-8 sm:h-9 w-auto object-contain transition-all duration-300
              ${isSolid ? '' : 'md:brightness-0 md:invert'}
            `} 
            onError={(e) => e.target.style.display = 'none'} 
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => `
                    relative py-1.5 font-bold text-[13px] uppercase tracking-widest transition-colors duration-300
                    ${isActive 
                      ? 'text-primary' 
                      : isSolid 
                        ? 'text-slate-600 hover:text-primary' 
                        : 'text-slate-300 hover:text-white'
                    }
                  `}
                  end={link.path === '/'}
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.span 
                          layoutId="nav-underline" 
                          className="absolute left-0 bottom-0 w-full h-[2.5px] bg-primary rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Toggle Button */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className={`md:hidden focus:outline-none p-2 rounded-xl transition-colors duration-300
            ${isSolid 
              ? 'text-slate-800 hover:bg-slate-100' 
              : 'text-slate-800 md:text-white hover:bg-slate-100 md:hover:bg-white/10'
            }`}
          onClick={toggleMenu} 
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* Mobile Navigation Overlay Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 flex flex-col py-6 md:hidden z-40"
          >
            <ul className="flex flex-col gap-1.5 px-6">
              {links.map((link) => (
                <motion.li key={link.name} variants={linkVariants}>
                  <NavLink 
                    to={link.path} 
                    className={({ isActive }) => `
                      block py-3 px-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-200
                      ${isActive 
                        ? 'bg-yellow-50 text-primary' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-primary'}`}
                    onClick={closeMenu}
                    end={link.path === '/'}
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
