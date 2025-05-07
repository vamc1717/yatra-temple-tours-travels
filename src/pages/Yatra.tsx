
import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import YatraPackageCard from '@/components/YatraPackageCard';
import { yatraPackages } from '@/data/yatra-packages';
import { MapPin } from 'lucide-react';

const Yatra = () => {
  return (
    <Layout>
      <PageHeader 
        title="Yatra Packages" 
        subtitle="Embark on divine journeys to the most sacred temples across India"
        backgroundImage="https://images.unsplash.com/photo-1518002054494-3a6f94352e9d"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-temple-red mb-4">Our Spiritual Journeys</h2>
            <div className="temple-divider">
              <span className="temple-divider-icon">🙏</span>
            </div>
            <p className="max-w-3xl mx-auto text-gray-700">
              Our carefully crafted packages combine spiritual exploration with comfort and convenience. 
              Each journey is designed to provide a meaningful connection with India's sacred sites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {yatraPackages.map((pkg) => (
              <YatraPackageCard
                key={pkg.id}
                id={pkg.id}
                name={pkg.name}
                image={pkg.image}
                location={pkg.location}
                duration={pkg.duration}
                groupSize={pkg.groupSize}
                price={pkg.price}
                featured={pkg.featured}
                className="animate-scale-in"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-temple-red mb-4">Featured Yatra: Char Dham</h2>
            <div className="temple-divider">
              <span className="temple-divider-icon">✨</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1589182337358-2cb63099350c" 
                alt="Char Dham Yatra" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-temple-red mb-4">The Ultimate Pilgrimage</h3>
              <p className="mb-4 text-gray-700">
                The Char Dham Yatra is one of the most sacred pilgrimages in Hinduism. It consists of four holy shrines: Yamunotri, Gangotri, Kedarnath, and Badrinath, nestled in the serene Himalayas.
              </p>
              <p className="mb-6 text-gray-700">
                This spiritual journey cleanses the soul and is believed to provide salvation (moksha) from the cycle of birth and rebirth. Each temple has its unique significance, architecture, and rituals.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-temple-gold rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-temple-red">Yamunotri</h4>
                    <p className="text-gray-700 text-sm">Dedicated to Goddess Yamuna, the temple marks the source of the Yamuna River</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-temple-gold rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-temple-red">Gangotri</h4>
                    <p className="text-gray-700 text-sm">The origin of the sacred Ganges River and dedicated to Goddess Ganga</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-temple-gold rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-temple-red">Kedarnath</h4>
                    <p className="text-gray-700 text-sm">One of the 12 Jyotirlingas, dedicated to Lord Shiva at an altitude of 3,583 meters</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-temple-gold rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-temple-red">Badrinath</h4>
                    <p className="text-gray-700 text-sm">Dedicated to Lord Vishnu and considered one of the most sacred Dhams</p>
                  </div>
                </div>
              </div>
              
              <a href="/booking?package=char-dham-yatra" className="temple-button">
                Book Char Dham Yatra
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-temple-red mb-4">Sacred Regions We Cover</h2>
            <div className="temple-divider">
              <span className="temple-divider-icon">🗺️</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                region: "North India",
                image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d",
                temples: ["Golden Temple", "Varanasi", "Ayodhya", "Haridwar", "Mathura"]
              },
              {
                region: "South India",
                image: "https://images.unsplash.com/photo-1616136133839-6cce0c28ca7e",
                temples: ["Meenakshi Temple", "Tirupati", "Rameshwaram", "Thanjavur", "Kanchipuram"]
              },
              {
                region: "East India",
                image: "https://images.unsplash.com/photo-1613473060226-dd81153a63db",
                temples: ["Jagannath Puri", "Konark Sun Temple", "Kamakhya", "Lingaraj", "Bhubaneswar"]
              },
              {
                region: "West India",
                image: "https://images.unsplash.com/photo-1580397581415-4c321b11952f",
                temples: ["Somnath", "Dwarkadhish", "Mahalakshmi", "Siddhi Vinayak", "Elephanta"]
              },
              {
                region: "Himalayan Temples",
                image: "https://images.unsplash.com/photo-1589182337358-2cb63099350c",
                temples: ["Kedarnath", "Badrinath", "Yamunotri", "Gangotri", "Hemkund Sahib"]
              },
              {
                region: "Ancient Temples",
                image: "https://images.unsplash.com/photo-1609969903072-7e34df405aad",
                temples: ["Khajuraho", "Hampi", "Aihole", "Ellora", "Ajanta"]
              }
            ].map((region, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={region.image} 
                    alt={region.region} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin size={18} className="text-temple-red mr-2" />
                    <h3 className="text-xl font-bold text-temple-red">{region.region}</h3>
                  </div>
                  <ul className="space-y-2">
                    {region.temples.map((temple, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-temple-gold rounded-full mr-2"></span>
                        <span className="text-gray-700">{temple}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-temple-red/10 to-temple-gold/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-temple-red mb-4">What To Expect On Your Yatra</h2>
            <div className="temple-divider">
              <span className="temple-divider-icon">📝</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🧘",
                title: "Spiritual Guidance",
                description: "Expert guides to explain rituals, mythology, and spiritual significance of each temple."
              },
              {
                icon: "🏨",
                title: "Quality Accommodations",
                description: "Comfortable stays in hotels or guesthouses close to temple sites."
              },
              {
                icon: "🚌",
                title: "Smooth Transportation",
                description: "Air-conditioned vehicles for travel between destinations with experienced drivers."
              },
              {
                icon: "🍽️",
                title: "Authentic Cuisine",
                description: "Experience local, traditional vegetarian food at each destination."
              },
              {
                icon: "📖",
                title: "Educational Insights",
                description: "Learn about temple architecture, history, and cultural significance."
              },
              {
                icon: "🔄",
                title: "Flexible Itineraries",
                description: "Balanced schedules with time for personal reflection and exploration."
              },
              {
                icon: "👥",
                title: "Like-minded Company",
                description: "Travel with fellow spiritual seekers on a similar journey."
              },
              {
                icon: "🛡️",
                title: "Safety & Support",
                description: "24/7 assistance throughout your journey for peace of mind."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-temple-red mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Yatra;
