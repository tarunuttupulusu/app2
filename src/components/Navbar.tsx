import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X, Phone, ShoppingBag } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/#reviews' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleLinkClick = (path: string) => {
    setIsOpen(false);
    if (path.includes('#')) {
      const elementId = path.split('#')[1];
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-panel py-4 shadow-md bg-brand-bg/85 backdrop-blur-md' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start leading-none group">
            <span className="font-telugu text-2xl md:text-3xl text-brand-dark font-bold group-hover:text-brand-accent transition-colors duration-300">
              ఉస్తాద్స్
            </span>
            <span className="font-display tracking-widest text-xs uppercase font-semibold text-brand-accent ml-0.5">
              USTAADS
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`relative font-sans text-sm font-medium tracking-wide uppercase transition-colors duration-300 py-1 ${
                  location.pathname === link.path 
                    ? 'text-brand-accent' 
                    : 'text-brand-dark hover:text-brand-accent'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+919063878223" 
              className="flex items-center space-x-2 text-brand-dark hover:text-brand-accent transition-colors duration-300 text-sm font-semibold uppercase tracking-wider border border-brand-dark/20 hover:border-brand-accent px-4 py-2 rounded-full"
            >
              <Phone size={14} className="text-brand-accent" />
              <span>Call Now</span>
            </a>
            <Link 
              to="/menu" 
              className="flex items-center space-x-2 bg-brand-accent hover:bg-brand-accent/90 text-brand-bg transition-colors duration-300 text-sm font-semibold uppercase tracking-wider px-6 py-2.5 rounded-full shadow-lg shadow-brand-accent/15"
            >
              <ShoppingBag size={14} />
              <span>Order Online</span>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center space-x-4">
            <a 
              href="tel:+919063878223" 
              className="p-2 border border-brand-dark/15 rounded-full text-brand-dark hover:text-brand-accent transition-colors"
            >
              <Phone size={16} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-brand-dark hover:text-brand-accent transition-colors"
            >
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[70px] z-40 bg-brand-bg/95 backdrop-blur-xl lg:hidden flex flex-col justify-between p-8"
          >
            <div className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`font-display text-2xl font-bold tracking-wide transition-colors ${
                    location.pathname === link.path ? 'text-brand-accent' : 'text-brand-dark'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col space-y-4 mb-8">
              <a 
                href="tel:+919063878223" 
                className="w-full flex justify-center items-center space-x-2 text-brand-dark border border-brand-dark/30 py-3.5 rounded-full font-bold uppercase tracking-wider"
              >
                <Phone size={16} className="text-brand-accent" />
                <span>Call 090638 78223</span>
              </a>
              <Link 
                to="/menu" 
                onClick={() => setIsOpen(false)}
                className="w-full flex justify-center items-center space-x-2 bg-brand-accent text-brand-bg py-4 rounded-full font-bold uppercase tracking-wider shadow-lg shadow-brand-accent/20"
              >
                <ShoppingBag size={16} />
                <span>Order Online</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
