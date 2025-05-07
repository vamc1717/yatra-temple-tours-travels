
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Rajesh Sharma",
    location: "Delhi, India",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
    quote: "Our Char Dham Yatra was a truly life-changing experience. The guides were knowledgeable about all the rituals and the accommodations were comfortable despite being in remote locations. The spiritual energy at Kedarnath temple was unlike anything I've ever felt."
  },
  {
    id: "testimonial-2",
    name: "Priya Patel",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    quote: "The South India Temple Tour exceeded all our expectations. The detailed explanations of temple architecture and mythology really enhanced our experience. The Meenakshi Temple was absolutely breathtaking, and our guide ensured we didn't miss any of the intricate details."
  },
  {
    id: "testimonial-3",
    name: "John Williams",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    quote: "As a foreigner interested in Indian spirituality, this tour was perfect. Everything was well-organized, and our guide was patient in explaining Hindu customs and traditions. Witnessing the evening Aarti at Varanasi was a profound spiritual moment I'll never forget."
  },
  {
    id: "testimonial-4",
    name: "Ananya Reddy",
    location: "Bangalore, India",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "The Divine Odisha Circuit was a wonderful blend of spirituality, architecture, and culture. The Jagannath Temple's energy was incredible, and the Sun Temple at Konark left me in awe of ancient Indian engineering and artistry."
  },
  {
    id: "testimonial-5",
    name: "Michael Chen",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    quote: "The Golden Temple experience in Amritsar was deeply moving. The serenity of the place, despite thousands of visitors, speaks volumes about its spiritual significance. The langar service and volunteering opportunity offered insights into Sikh principles of equality and service."
  }
];
