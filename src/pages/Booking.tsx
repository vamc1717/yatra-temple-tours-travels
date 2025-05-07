
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { yatraPackages } from '@/data/yatra-packages';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const packageId = searchParams.get('package');
  const { toast } = useToast();

  const [selectedPackage, setSelectedPackage] = useState(packageId || '');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    participants: '1',
    travelDate: '',
    specialRequests: ''
  });

  // Set default package if one is provided in URL params
  useEffect(() => {
    if (packageId) {
      setSelectedPackage(packageId);
    }
  }, [packageId]);

  const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPackage(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form submitted:', { selectedPackage, ...formData });
    
    // Show success toast
    toast({
      title: "Booking Request Submitted",
      description: "We'll contact you within 24 hours to confirm your booking.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      participants: '1',
      travelDate: '',
      specialRequests: ''
    });
  };

  // Find the selected package details
  const packageDetails = yatraPackages.find(pkg => pkg.id === selectedPackage);

  return (
    <Layout>
      <PageHeader 
        title="Book Your Yatra" 
        subtitle="Reserve your spot on our sacred temple tours"
        backgroundImage="https://images.unsplash.com/photo-1589182337358-2cb63099350c"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-temple-red mb-6">Booking Information</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-temple-red mb-4">Select Your Package</h3>
                  
                  <div>
                    <label htmlFor="package" className="block text-gray-700 font-medium mb-2">Yatra Package*</label>
                    <select 
                      id="package" 
                      name="package" 
                      value={selectedPackage} 
                      onChange={handlePackageChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-temple-gold focus:border-transparent"
                      required
                    >
                      <option value="">Select a Package</option>
                      {yatraPackages.map(pkg => (
                        <option key={pkg.id} value={pkg.id}>{pkg.name} - {pkg.duration}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-temple-red mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name*</label>
                      <input 
                        type="text" 
                        id="fullName" 
                        name="fullName" 
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-temple-gold focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address*</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-temple-gold focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number*</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-temple-gold focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address</label>
                      <input 
                        type="text" 
                        id="address" 
                        name="address" 
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-temple-gold focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-temple-red mb-4">Travel Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="participants" className="block text-gray-700 font-medium mb-2">Number of Participants*</label>
                      <select 
                        id="participants" 
                        name="participants" 
                        value={formData.participants}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-temple-gold focus:border-transparent"
                        required
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                        <option value="more than 10">More than 10</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="travelDate" className="block text-gray-700 font-medium mb-2">Preferred Travel Date*</label>
                      <input 
                        type="date" 
                        id="travelDate" 
                        name="travelDate" 
                        value={formData.travelDate}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-temple-gold focus:border-transparent"
                        required
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="specialRequests" className="block text-gray-700 font-medium mb-2">Special Requests or Requirements</label>
                    <textarea 
                      id="specialRequests" 
                      name="specialRequests" 
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4} 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-temple-gold focus:border-transparent"
                      placeholder="Any dietary requirements, accessibility needs, or other special requests..."
                    ></textarea>
                  </div>
                </div>

                <div className="text-right">
                  <button 
                    type="submit" 
                    className="temple-button px-8 py-3 text-lg"
                  >
                    Submit Booking Request
                  </button>
                </div>
              </form>
            </div>
            
            {/* Package Information Sidebar */}
            <div>
              {packageDetails ? (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-24">
                  <img 
                    src={packageDetails.image} 
                    alt={packageDetails.name} 
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-temple-red mb-3">{packageDetails.name}</h3>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-gray-700">
                        <MapPin size={16} className="mr-2 text-temple-saffron" />
                        <span>{packageDetails.location}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-700">
                        <Calendar size={16} className="mr-2 text-temple-saffron" />
                        <span>{packageDetails.duration}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-700">
                        <User size={16} className="mr-2 text-temple-saffron" />
                        <span>{packageDetails.groupSize}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-700">
                        <Clock size={16} className="mr-2 text-temple-saffron" />
                        <span>Next available: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Price per person:</span>
                        <span className="text-temple-red font-bold text-xl">₹{packageDetails.price.toLocaleString()}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">Includes accommodations, selected meals, transportation, and guide services</p>
                      
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h4 className="font-bold text-temple-red mb-2">What's Included:</h4>
                        <ul className="text-sm space-y-1">
                          {packageDetails.included.slice(0, 4).map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                          {packageDetails.included.length > 4 && (
                            <li className="text-temple-red">+ {packageDetails.included.length - 4} more items</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-temple-red mb-4">Booking Information</h3>
                  <p className="text-gray-700 mb-4">Please select a yatra package to see details.</p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-bold text-temple-red mb-2">Why Book With Us:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Authentic spiritual experiences</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Expert guides for all temples</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Comfortable accommodations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Assistance with rituals</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>24/7 customer support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
                <h4 className="font-bold text-temple-red mb-3">Need Help?</h4>
                <p className="text-gray-700 mb-4">Our travel specialists are ready to assist you with your booking.</p>
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-temple-gold/20 flex items-center justify-center mr-3">
                    <span className="text-temple-gold">📞</span>
                  </div>
                  <span className="font-medium">+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-temple-gold/20 flex items-center justify-center mr-3">
                    <span className="text-temple-gold">✉️</span>
                  </div>
                  <span className="font-medium">booking@divyadeshayatra.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
