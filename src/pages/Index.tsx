
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import TempleCard from '@/components/TempleCard';
import YatraPackageCard from '@/components/YatraPackageCard';
import TestimonialCard from '@/components/TestimonialCard';
import { temples } from '@/data/temples';
import { yatraPackages } from '@/data/yatra-packages';
import { testimonials } from '@/data/testimonials';
import { ArrowRight, Star } from 'lucide-react';

const Index = () => {
  // Get featured temples and packages
  const featuredTemples = temples.slice(0, 3);
  const featuredPackages = yatraPackages.filter(pkg => pkg.featured);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1589182337358-2cb63099350c')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            <span className="text-temple-gold">Divine </span>
            <span className="text-temple-saffron">Temple </span>
            <span className="text-white">Tours</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Embark on a spiritual journey exploring India's most sacred temples and religious sites
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <Link to="/yatra" className="temple-button">
              Explore Yatra Packages
            </Link>
            <Link to="/booking" className="bg-white text-temple-red font-medium py-2 px-6 rounded-md hover:bg-gray-100 transition-colors duration-300">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Temples Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-temple-red">
              Explore Sacred Temples
            </h2>
            <div className="temple-divider">
              <span className="temple-divider-icon">🕉️</span>
            </div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Discover ancient temples with rich history and spiritual significance across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTemples.map((temple) => (
              <TempleCard
                key={temple.id}
                id={temple.id}
                name={temple.name}
                location={temple.location}
                image={temple.image}
                description={temple.description}
                className="animate-scale-in"
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/gallery" 
              className="inline-flex items-center text-temple-red font-medium hover:text-temple-saffron transition-colors"
            >
              View All Temples 
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Yatra Packages */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-temple-red">
              Popular Yatra Packages
            </h2>
            <div className="temple-divider">
              <span className="temple-divider-icon">🙏</span>
            </div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Join our carefully curated spiritual journeys to sacred destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
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

          <div className="text-center mt-10">
            <Link 
              to="/yatra" 
              className="temple-button inline-flex items-center"
            >
              View All Packages
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-temple-red/10 to-temple-gold/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-temple-red">
              Why Choose Divya Desha Yatra
            </h2>
            <div className="temple-divider">
              <span className="temple-divider-icon">⭐</span>
            </div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Embark on a spiritual journey with experts who understand the sanctity of temple visits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🛕",
                title: "Sacred Knowledge",
                description: "Our guides are well-versed in temple history, architecture, and spiritual significance."
              },
              {
                icon: "🧘",
                title: "Spiritual Experience",
                description: "We focus on creating authentic spiritual experiences, not just sightseeing tours."
              },
              {
                icon: "🏨",
                title: "Comfortable Stay",
                description: "Quality accommodations that respect the spiritual nature of your journey."
              },
              {
                icon: "🙏",
                title: "Ritual Assistance",
                description: "Guidance for temple rituals and customs to enhance your spiritual connection."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-temple-red mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-temple-red">
              Pilgrim Testimonials
            </h2>
            <div className="temple-divider">
              <span className="temple-divider-icon">
                <Star size={18} fill="currentColor" />
              </span>
            </div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Hear from fellow travelers about their divine experiences with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                name={testimonial.name}
                location={testimonial.location}
                image={testimonial.image}
                className="animate-scale-in"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-temple-saffron/80 to-temple-red/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Spiritual Journey Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with the divine through our curated temple tours and yatra packages
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/booking" className="bg-white text-temple-red font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors duration-300 text-lg">
              Book Your Yatra
            </Link>
            <Link to="/contact" className="border-2 border-white text-white font-medium py-3 px-8 rounded-md hover:bg-white/10 transition-colors duration-300 text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
