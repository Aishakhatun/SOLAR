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
                <span>shahidsabugar22@gmail.com</span>
              </p>
            </div>
            
            {/* Social Media Buttons */}
            <div className="flex gap-3 mt-4">
              {[
                { 
                  icon: (
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  ), 
                  url: 'https://instagram.com' 
                },
                { 
                  icon: (
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  ), 
                  url: 'https://facebook.com' 
                },
                { 
                  icon: (
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  ), 
                  url: 'https://youtube.com' 
                },
                { 
                  icon: (
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  ), 
                  url: 'https://linkedin.com' 
                }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-primary hover:-translate-y-1 flex items-center justify-center transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
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
            <div className="grid grid-cols-3 gap-2.5 mt-2">
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
          <p>Designed by <span className="text-white">Aisha</span></p>
        </div>
      </div>
    </footer>
  );
}
