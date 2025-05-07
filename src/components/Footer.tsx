
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-accent to-accent/90 text-white pt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-temple-gold">
              Divya<span className="text-temple-saffron">Desha</span>Yatra
            </h3>
            <p className="text-sm mb-4">
              Embark on a spiritual journey to discover the divine temples of India.
              Experience the rich cultural heritage and spiritual essence of ancient temples.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-temple-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-temple-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-temple-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-temple-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-temple-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-temple-gold transition-colors flex items-center gap-1">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-temple-gold transition-colors flex items-center gap-1">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/yatra" className="text-sm hover:text-temple-gold transition-colors flex items-center gap-1">
                  <span>Yatra Packages</span>
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-sm hover:text-temple-gold transition-colors flex items-center gap-1">
                  <span>Book a Yatra</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-temple-gold transition-colors flex items-center gap-1">
                  <span>Temple Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-temple-gold transition-colors flex items-center gap-1">
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Temples */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-temple-gold">Popular Temples</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-temple-gold transition-colors">Tirupati Balaji</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-temple-gold transition-colors">Varanasi Kashi Vishwanath</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-temple-gold transition-colors">Meenakshi Amman Temple</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-temple-gold transition-colors">Golden Temple Amritsar</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-temple-gold transition-colors">Kedarnath Temple</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-temple-gold transition-colors">Jagannath Puri Temple</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-temple-gold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">123 Temple Street, Spiritual City, India 500001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span className="text-sm">info@divyadeshayatra.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 py-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} DivyaDeshaYatra. All rights reserved. Experience the divine journey.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
