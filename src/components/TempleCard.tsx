
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TempleCardProps {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  className?: string;
}

const TempleCard = ({ 
  id, 
  name, 
  location, 
  image, 
  description,
  className
}: TempleCardProps) => {
  return (
    <div className={cn('temple-card group', className)}>
      <div className="relative overflow-hidden h-56">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center text-white text-sm">
            <MapPin size={14} className="mr-1" />
            <span>{location}</span>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-temple-red mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <Link 
          to={`/temple/${id}`} 
          className="inline-flex items-center temple-button"
        >
          Explore Temple
        </Link>
      </div>
    </div>
  );
};

export default TempleCard;
