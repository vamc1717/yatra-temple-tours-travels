
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  image?: string;
  className?: string;
}

const TestimonialCard = ({ 
  quote, 
  name, 
  location, 
  image = '/placeholder.svg',
  className 
}: TestimonialCardProps) => {
  return (
    <div className={cn('bg-white p-6 rounded-lg shadow-lg relative', className)}>
      {/* Decorative quote symbol */}
      <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-temple-gold flex items-center justify-center text-white text-2xl">
        "
      </div>
      
      <div className="mb-4 text-gray-600 italic relative">
        <p className="line-clamp-4">{quote}</p>
      </div>
      
      <div className="flex items-center mt-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-temple-red">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
