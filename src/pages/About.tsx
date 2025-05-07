
import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const About = () => {
  return (
    <Layout>
      <PageHeader 
        title="About Us" 
        subtitle="Learn about our mission to connect people with divine experiences"
        backgroundImage="https://images.unsplash.com/photo-1600270987242-17912b55ecf8"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-temple-red mb-6">Our Story</h2>
              <p className="mb-4 text-gray-700">
                Divya Desha Yatra was founded in 2010 by a group of spiritual enthusiasts who were passionate about India's rich temple heritage and wanted to share it with the world. What began as small guided tours to local temples has now grown into a trusted name in spiritual tourism.
              </p>
              <p className="mb-4 text-gray-700">
                With a team of experienced guides who are well-versed in the historical, architectural, and spiritual aspects of each temple, we aim to provide not just a tour, but a holistic spiritual experience that leaves a lasting impact.
              </p>
              <p className="text-gray-700">
                Over the years, we have helped thousands of pilgrims and spiritual seekers from across India and around the world connect with divine energies at some of the most sacred sites in the country.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d" 
                alt="Divya Desha Yatra Founder" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-temple-gold/20 rounded-full -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-temple-red/20 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-temple-red mb-4">Our Mission</h2>
            <div className="temple-divider">
              <span className="temple-divider-icon">🕉️</span>
            </div>
            <p className="max-w-3xl mx-auto text-gray-700">
              We are dedicated to preserving and sharing India's rich spiritual heritage by creating meaningful temple experiences that educate, inspire, and transform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-temple-gold/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🙏</span>
              </div>
              <h3 className="text-xl font-bold text-temple-red mb-3 text-center">Authentic Experiences</h3>
              <p className="text-gray-700 text-center">
                We create authentic spiritual experiences that go beyond mere sightseeing, allowing pilgrims to connect deeply with the divine.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-temple-saffron/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-temple-red mb-3 text-center">Cultural Preservation</h3>
              <p className="text-gray-700 text-center">
                Through education and immersive experiences, we contribute to the preservation of ancient religious traditions and cultural heritage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-temple-red/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-temple-red mb-3 text-center">Community Support</h3>
              <p className="text-gray-700 text-center">
                We believe in giving back to the temple towns and local communities, ensuring that our tours benefit the places we visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-temple-red mb-4">Our Team</h2>
            <div className="temple-divider">
              <span className="temple-divider-icon">🌟</span>
            </div>
            <p className="max-w-3xl mx-auto text-gray-700">
              Meet the passionate individuals who make our spiritual journeys possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Arun Kumar",
                role: "Founder & Director",
                image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857",
                bio: "A spiritual enthusiast with 20+ years of experience in temple tourism"
              },
              {
                name: "Lakshmi Devi",
                role: "Temple Scholar",
                image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28",
                bio: "Degree in Religious Studies with expertise in South Indian temple architecture"
              },
              {
                name: "Suresh Patel",
                role: "Operations Head",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                bio: "Ensures smooth logistics for all yatras across the country"
              },
              {
                name: "Maya Sharma",
                role: "Customer Relations",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
                bio: "Dedicated to creating perfect spiritual journeys for all pilgrims"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-temple-red">{member.name}</h3>
                  <p className="text-temple-saffron font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-temple-red/10 to-temple-gold/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-temple-red mb-4">Our Values</h2>
            <div className="temple-divider">
              <span className="temple-divider-icon">💫</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-temple-gold rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-2xl">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-temple-red mb-2">Respect for Traditions</h3>
                <p className="text-gray-700">
                  We honor and respect the sanctity of all religious traditions and ensure our tours adhere to proper temple etiquette and customs.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-temple-gold rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-2xl">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-temple-red mb-2">Authenticity</h3>
                <p className="text-gray-700">
                  We provide accurate historical and spiritual information, avoiding commercialization of sacred experiences.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-temple-gold rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-2xl">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-temple-red mb-2">Inclusivity</h3>
                <p className="text-gray-700">
                  Our tours welcome people from all backgrounds, beliefs, and cultures who approach these sacred sites with respect.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-temple-gold rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-2xl">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-temple-red mb-2">Quality Service</h3>
                <p className="text-gray-700">
                  We are committed to providing excellent service, comfortable accommodations, and attentive guides throughout your spiritual journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
