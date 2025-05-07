
import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-temple-red mb-6">
          <span className="text-temple-gold">4</span>
          <span className="text-temple-saffron">0</span>
          <span className="text-temple-red">4</span>
        </h1>
        
        <div className="temple-divider mb-6">
          <span className="temple-divider-icon">🙏</span>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 mb-8">
          The spiritual journey you seek cannot be found at this path. 
          Let us guide you back to the right path.
        </p>
        
        <Link 
          to="/" 
          className="temple-button inline-flex items-center"
        >
          Return to Homepage
        </Link>
      </div>
      
      <div className="mt-16">
        <div className="flex space-x-3 text-gray-500">
          <Link to="/" className="hover:text-temple-red transition-colors">Home</Link>
          <span>•</span>
          <Link to="/contact" className="hover:text-temple-red transition-colors">Contact Us</Link>
          <span>•</span>
          <Link to="/about" className="hover:text-temple-red transition-colors">About</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
