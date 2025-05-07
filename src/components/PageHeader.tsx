
import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}

const PageHeader = ({ 
  title, 
  subtitle, 
  backgroundImage = '/temple-header-bg.jpg', 
  className 
}: PageHeaderProps) => {
  return (
    <div className={cn('relative py-24 md:py-32', className)}>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})` 
        }}
      />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in">
            {subtitle}
          </p>
        )}
        <div className="mt-6">
          <div className="flex items-center justify-center">
            <div className="h-px w-12 bg-temple-gold" />
            <div className="mx-4">
              <span className="inline-block w-3 h-3 bg-temple-gold rotate-45" />
              <span className="inline-block w-3 h-3 bg-temple-saffron rotate-45 mx-2" />
              <span className="inline-block w-3 h-3 bg-temple-gold rotate-45" />
            </div>
            <div className="h-px w-12 bg-temple-gold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
