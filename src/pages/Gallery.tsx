
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { temples } from '@/data/temples';
import { cn } from '@/lib/utils';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Extract all images from temples for the gallery
  const allImages = temples.flatMap(temple => 
    [temple.image, ...temple.gallery].map(image => ({
      url: image,
      temple: temple.name,
      state: temple.state
    }))
  );

  // Get unique states for filters
  const states = Array.from(new Set(temples.map(temple => temple.state)));

  // Filter images based on active filter
  const filteredImages = activeFilter === 'all' 
    ? allImages 
    : allImages.filter(image => image.state === activeFilter);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <Layout>
      <PageHeader 
        title="Temple Gallery" 
        subtitle="Explore the divine beauty and architecture of sacred temples across India"
        backgroundImage="https://images.unsplash.com/photo-1616136133839-6cce0c28ca7e"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
              <button 
                onClick={() => handleFilterClick('all')} 
                className={cn(
                  'px-4 py-2 rounded-full transition-all duration-300',
                  activeFilter === 'all' 
                    ? 'bg-temple-red text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                )}
              >
                All Temples
              </button>
              
              {states.map(state => (
                <button 
                  key={state}
                  onClick={() => handleFilterClick(state)} 
                  className={cn(
                    'px-4 py-2 rounded-full transition-all duration-300',
                    activeFilter === state 
                      ? 'bg-temple-red text-white' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  )}
                >
                  {state}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-64"
                onClick={() => openLightbox(image.url)}
              >
                <img 
                  src={image.url} 
                  alt={image.temple} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                  <h3 className="text-white font-bold">{image.temple}</h3>
                  <p className="text-white/80 text-sm">{image.state}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <div className="max-w-4xl max-h-[90vh] relative">
                <button 
                  className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                  onClick={closeLightbox}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img 
                  src={selectedImage} 
                  alt="Temple" 
                  className="max-w-full max-h-[80vh] object-contain mx-auto" 
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-temple-red mb-4">Temple Architecture Styles</h2>
            <div className="temple-divider">
              <span className="temple-divider-icon">🏛️</span>
            </div>
            <p className="max-w-3xl mx-auto text-gray-700">
              India's temples showcase diverse architectural styles that have evolved over centuries,
              reflecting regional influences, cultural traditions, and religious practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                style: "Nagara Style",
                image: "https://images.unsplash.com/photo-1609969903072-7e34df405aad",
                description: "Characterized by a beehive-shaped tower (shikhara) with a curvilinear outline, primarily found in North and Central India.",
                examples: ["Khajuraho Temples", "Lingaraja Temple", "Kandariya Mahadev"]
              },
              {
                style: "Dravidian Style",
                image: "https://images.unsplash.com/photo-1616136133839-6cce0c28ca7e",
                description: "Features pyramid-shaped towers (vimana) with distinct horizontal tiers, predominant in South India.",
                examples: ["Meenakshi Temple", "Brihadeeswara Temple", "Shore Temple"]
              },
              {
                style: "Vesara Style",
                image: "https://images.unsplash.com/photo-1598609034532-ada5667fa1cf",
                description: "A hybrid style blending Nagara and Dravidian elements, commonly found in the Deccan region.",
                examples: ["Hoysaleswara Temple", "Chennakesava Temple", "Virupaksha Temple"]
              },
              {
                style: "Sikh Architecture",
                image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d",
                description: "Characterized by gilded domes, intricate inlay work, and a blend of Islamic and Hindu architectural elements.",
                examples: ["Golden Temple", "Gurdwara Bangla Sahib", "Hazur Sahib"]
              },
              {
                style: "Indo-Islamic Style",
                image: "https://images.unsplash.com/photo-1548013146-72479768bada",
                description: "Fusion of Indian and Islamic architectural elements featuring domes, arches, and intricate geometric patterns.",
                examples: ["Jama Masjid", "Gol Gumbaz", "Char Minar"]
              },
              {
                style: "Cave Temple Architecture",
                image: "https://images.unsplash.com/photo-1590254553792-7e91903c5357",
                description: "Temples carved into rock faces or underground caves, showcasing incredible sculptural work.",
                examples: ["Ellora Caves", "Ajanta Caves", "Elephanta Caves"]
              }
            ].map((style, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={style.image} 
                    alt={style.style} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-temple-red mb-2">{style.style}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{style.description}</p>
                  <div>
                    <h4 className="font-semibold text-temple-saffron mb-1">Notable Examples:</h4>
                    <ul className="text-gray-700 text-sm">
                      {style.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-temple-gold rounded-full mr-2"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
