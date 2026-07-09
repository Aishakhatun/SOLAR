import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

// Local gallery image imports
import fg1 from '../assets/photo/project1/c8.jpeg';
import fg2 from '../assets/photo/project1/c9.jpeg';
import fg3 from '../assets/photo/project1/c10.jpeg';
import fg4 from '../assets/photo/project1/c16.jpeg';
import fg5 from '../assets/photo/project1/c17.jpeg';
import fg6 from '../assets/photo/project1/c18.jpeg';

export default function Footer() {
  const galleryImages = [fg1, fg2, fg3, fg4, fg5, fg6];

  return (
    <footer className="bg-dark text-slate-300 pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Address Section */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-heading font-bold text-lg relative pb-3 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-8 before:h-0.5 before:bg-primary">
              Address
            </h4>
            <div className="flex flex-col gap-3.5 mt-2">
              <p className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                <span>SUKUN COMPLEX, Madina Masjid Rd, Alkapuri Pologround, Himatnagar, Gujarat 383001</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+91 79904 52182</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <a href="mailto:rajcorporation07@gmail.com" className="hover:text-primary transition-colors">
                  rajcorporation07@gmail.com
                </a>
              </p>
            </div>
            

          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 md:pl-8">
            <h4 className="text-white font-heading font-bold text-lg relative pb-3 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-8 before:h-0.5 before:bg-primary">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 mt-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Our Services', path: '/services' },
                { name: 'Our Projects', path: '/projects' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="flex items-center gap-2 hover:text-primary hover:translate-x-1.5 transition-all duration-300"
                  >
                    <ArrowRight size={14} className="text-primary" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Gallery */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-heading font-bold text-lg relative pb-3 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-8 before:h-0.5 before:bg-primary">
              Project Gallery
            </h4>
            <div className="grid grid-cols-3 gap-2 mt-2 max-w-[200px]">
              {galleryImages.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-lg group aspect-square">
                  <img 
                    src={src} 
                    alt={`Gallery ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-75 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} <span className="text-white font-semibold">Raj Corporation</span>. All Rights Reserved.</p>
          <p>Designed by <span className="text-white">Raj_infotech-[aishasabugar1@gmail.com]</span></p>
        </div>
      </div>
    </footer>
  );
}
