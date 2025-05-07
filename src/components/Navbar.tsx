
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Info, Map, Calendar, Image, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { icon: <Home size={18} />, name: 'Home', path: '/' },
    { icon: <Info size={18} />, name: 'About', path: '/about' },
    { icon: <Map size={18} />, name: 'Yatra', path: '/yatra' },
    { icon: <Calendar size={18} />, name: 'Booking', path: '/booking' },
    { icon: <Image size={18} />, name: 'Gallery', path: '/gallery' },
    { icon: <Mail size={18} />, name: 'Contact Us', path: '/contact' }
  ];

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-temple-red font-bold text-2xl">
              Divya<span className="text-temple-saffron">Desha</span><span className="text-temple-gold">Yatra</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={cn(
                  'nav-link flex items-center gap-1',
                  location.pathname === link.path ? 'active' : ''
                )}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-temple-red hover:text-temple-saffron transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            'md:hidden transition-all duration-300 overflow-hidden',
            isOpen ? 'max-h-96 mt-4' : 'max-h-0'
          )}
        >
          <div className="flex flex-col space-y-4 bg-white rounded-lg shadow-lg p-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={cn(
                  'nav-link flex items-center gap-2 p-2',
                  location.pathname === link.path ? 'active' : ''
                )}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
