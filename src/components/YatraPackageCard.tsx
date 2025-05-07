
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Clock, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface YatraPackageCardProps {
  id: string;
  name: string;
  image: string;
  location: string;
  duration: string;
  groupSize: string;
  price: number;
  featured?: boolean;
  className?: string;
}

const YatraPackageCard = ({
  id,
  name,
  image,
  location,
  duration,
  groupSize,
  price,
  featured = false,
  className
}: YatraPackageCardProps) => {
  return (
    <div className={cn(
      'temple-card relative group',
      featured && 'border-2 border-temple-gold shadow-xl',
      className
    )}>
      {featured && (
        <div className="absolute -top-4 right-4 bg-temple-gold text-white px-4 py-1 rounded-full text-sm font-bold z-10">
          Featured
        </div>
      )}
      
      <div className="relative overflow-hidden h-52">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-temple-red">{name}</h3>
        
        <div className="flex flex-col space-y-2 mt-3 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <MapPin size={16} className="mr-2 text-temple-saffron" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-2 text-temple-saffron" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <User size={16} className="mr-2 text-temple-saffron" />
            <span>{groupSize}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="text-temple-red font-bold">
            <span className="text-2xl">₹{price.toLocaleString()}</span>
            <span className="text-sm text-gray-500">/person</span>
          </div>
          
          <Link
            to={`/booking?package=${id}`}
            className="temple-button"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YatraPackageCard;
