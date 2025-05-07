
export interface YatraPackage {
  id: string;
  name: string;
  image: string;
  location: string;
  duration: string;
  groupSize: string;
  price: number;
  featured: boolean;
  description: string;
  longDescription: string;
  included: string[];
  excluded: string[];
  itinerary: {
    day: number;
    title: string;
    activities: string[];
  }[];
  temples: string[];
}

export const yatraPackages: YatraPackage[] = [
  {
    id: "char-dham-yatra",
    name: "Char Dham Yatra",
    image: "https://images.unsplash.com/photo-1589182337358-2cb63099350c",
    location: "Uttarakhand",
    duration: "12 Days, 11 Nights",
    groupSize: "10-20 People",
    price: 45000,
    featured: true,
    description: "Complete the sacred pilgrimage to all four holy sites in the Himalayas: Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    longDescription: "The Char Dham Yatra is one of the most sacred pilgrimages in Hinduism, covering four holy shrines in the Garhwal Himalayas of Uttarakhand. This comprehensive tour takes you through breathtaking mountain landscapes as you seek blessings from Yamunotri, the source of the Yamuna River; Gangotri, the origin of the sacred Ganges; Kedarnath, one of the 12 Jyotirlingas dedicated to Lord Shiva; and Badrinath, dedicated to Lord Vishnu. Experience spiritual enlightenment while enjoying the natural beauty of the Himalayas on this once-in-a-lifetime journey.",
    included: [
      "Accommodation in comfortable hotels/guesthouses",
      "Daily breakfast and dinner",
      "All ground transportation in AC vehicle",
      "Experienced tour guide",
      "All temple visits and entrance fees",
      "Helicopter tickets for Kedarnath (subject to weather conditions)",
      "Assistance in performing rituals",
      "Medical kit and oxygen cylinders for high altitude"
    ],
    excluded: [
      "Airfare to and from Dehradun",
      "Personal expenses and shopping",
      "Travel insurance",
      "Anything not mentioned in inclusions",
      "Lunch during the tour",
      "Special puja arrangements"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Haridwar",
        activities: ["Welcome at Haridwar", "Check-in at hotel", "Evening Ganga Aarti at Har Ki Pauri", "Briefing about the yatra"]
      },
      {
        day: 2,
        title: "Haridwar to Barkot",
        activities: ["Breakfast at hotel", "Drive to Barkot (200 km / 7-8 hrs)", "En route visit Kempty Falls", "Dinner and overnight stay in Barkot"]
      },
      {
        day: 3,
        title: "Yamunotri Temple Visit",
        activities: ["Early breakfast", "Drive to Janki Chatti", "6 km trek to Yamunotri", "Visit and rituals at Yamunotri Temple", "Return to Barkot"]
      },
      {
        day: 4,
        title: "Barkot to Uttarkashi",
        activities: ["Drive to Uttarkashi (100 km / 4 hrs)", "Visit Kashi Vishwanath Temple", "Rest and acclimatization"]
      },
      {
        day: 5,
        title: "Gangotri Temple Visit",
        activities: ["Drive to Gangotri (100 km / 4 hrs)", "Temple visit and rituals", "Return to Uttarkashi"]
      },
      {
        day: 6,
        title: "Uttarkashi to Guptkashi",
        activities: ["Drive to Guptkashi (220 km / 8-9 hrs)", "Evening visit to Kashi Vishwanath Temple", "Overnight stay in Guptkashi"]
      },
      {
        day: 7,
        title: "Kedarnath Temple Visit",
        activities: ["Early morning drive to Sonprayag", "Helicopter ride to Kedarnath", "Visit and rituals at Kedarnath Temple", "Return to Guptkashi"]
      },
      {
        day: 8,
        title: "Guptkashi to Badrinath",
        activities: ["Drive to Badrinath (190 km / 7-8 hrs)", "En route visit Joshimath", "Evening aarti at Badrinath Temple"]
      },
      {
        day: 9,
        title: "Badrinath Temple Visit",
        activities: ["Morning rituals at Badrinath Temple", "Visit Mana Village (last Indian village)", "Visit Vyas Cave and Ganesh Gufa", "Evening at leisure"]
      },
      {
        day: 10,
        title: "Badrinath to Rudraprayag",
        activities: ["Drive to Rudraprayag (160 km / 6-7 hrs)", "Visit Rudranath Temple", "Rest and relaxation"]
      },
      {
        day: 11,
        title: "Rudraprayag to Rishikesh",
        activities: ["Drive to Rishikesh (140 km / 5-6 hrs)", "Visit Ram Jhula and Laxman Jhula", "Evening Ganga Aarti at Triveni Ghat"]
      },
      {
        day: 12,
        title: "Departure from Rishikesh",
        activities: ["Morning yoga session (optional)", "Breakfast at hotel", "Transfer to Dehradun airport for departure"]
      }
    ],
    temples: ["yamunotri", "gangotri", "kedarnath-temple", "badrinath"]
  },
  {
    id: "south-india-temple-tour",
    name: "South India Temple Tour",
    image: "https://images.unsplash.com/photo-1616136133839-6cce0c28ca7e",
    location: "Tamil Nadu & Karnataka",
    duration: "8 Days, 7 Nights",
    groupSize: "15-25 People",
    price: 35000,
    featured: false,
    description: "Explore the magnificent Dravidian temples of South India, known for their intricate architecture and spiritual significance.",
    longDescription: "This comprehensive tour takes you through the most iconic and spiritually significant temples of South India. Marvel at the stunning Dravidian architecture, intricate stone carvings, and towering gopurams that characterize these ancient shrines. From the mighty Brihadeeswara Temple of Thanjavur to the colorful Meenakshi Temple in Madurai, immerse yourself in the rich cultural and religious heritage of South India. Experience traditional rituals, witness religious ceremonies, and learn about the fascinating mythology behind these sacred sites.",
    included: [
      "Accommodation in 3-star hotels",
      "Daily breakfast and dinner",
      "Air-conditioned vehicle for transportation",
      "Professional English-speaking guide",
      "All temple entrance fees",
      "Welcome drink on arrival at hotels",
      "Bottled water during sightseeing"
    ],
    excluded: [
      "Airfare to Chennai and from Bangalore",
      "Lunch during the tour",
      "Camera/video charges at monuments",
      "Personal expenses",
      "Tips and gratuities",
      "Any item not specified in inclusions"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Chennai",
        activities: ["Welcome at Chennai airport", "Check-in at hotel", "Visit Kapaleeshwarar Temple", "Evening at Marina Beach"]
      },
      {
        day: 2,
        title: "Chennai to Kanchipuram to Mahabalipuram",
        activities: ["Drive to Kanchipuram", "Visit Kailasanathar Temple and Ekambareswarar Temple", "Proceed to Mahabalipuram", "Overnight in Mahabalipuram"]
      },
      {
        day: 3,
        title: "Mahabalipuram to Thanjavur",
        activities: ["Visit Shore Temple and Five Rathas", "Drive to Thanjavur", "Evening at Brihadeeswara Temple", "Traditional Tamil cultural show"]
      },
      {
        day: 4,
        title: "Thanjavur to Madurai",
        activities: ["Morning at Brihadeeswara Temple", "Drive to Madurai", "Evening ceremony at Meenakshi Temple"]
      },
      {
        day: 5,
        title: "Madurai Full Day",
        activities: ["Explore Meenakshi Amman Temple", "Visit Thirumalai Nayakkar Palace", "Gandhi Museum", "Evening Aarti ceremony"]
      },
      {
        day: 6,
        title: "Madurai to Rameswaram",
        activities: ["Drive to Rameswaram", "Visit Ramanathaswamy Temple", "Bath in the 22 sacred wells", "Sunset at Dhanushkodi"]
      },
      {
        day: 7,
        title: "Rameswaram to Tiruchirapalli",
        activities: ["Morning rituals at Ramanathaswamy Temple", "Drive to Tiruchirapalli", "Visit Rock Fort Temple", "Sri Ranganathaswamy Temple in Srirangam"]
      },
      {
        day: 8,
        title: "Tiruchirapalli to Bangalore",
        activities: ["Drive to Bangalore", "En route visit Shravanabelagola", "Farewell dinner", "Transfer to airport for departure"]
      }
    ],
    temples: ["meenakshi-temple", "brihadeeswara", "shore-temple", "ramanathaswamy"]
  },
  {
    id: "spiritual-north-india",
    name: "Spiritual North India",
    image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d",
    location: "Uttar Pradesh & Punjab",
    duration: "7 Days, 6 Nights",
    groupSize: "10-15 People",
    price: 28000,
    featured: true,
    description: "Visit the holy cities of Varanasi, Ayodhya, and Amritsar on this spiritual journey through North India.",
    longDescription: "Embark on a profound spiritual journey through the sacred cities of North India. Begin in Varanasi, one of the world's oldest continuously inhabited cities and a place of paramount religious significance for Hindus. Witness the mesmerizing Ganga Aarti, explore the ghats along the holy Ganges River, and visit the revered Kashi Vishwanath Temple. Continue to Ayodhya, the birthplace of Lord Rama, and then to Amritsar to experience the divine Golden Temple. This yatra offers a deep dive into India's rich spiritual heritage, allowing you to witness ancient rituals and practices that have endured for thousands of years.",
    included: [
      "Accommodation in heritage hotels where possible",
      "Daily breakfast and dinner",
      "AC vehicle for transportation",
      "Local English-speaking guides",
      "Boat ride in Varanasi",
      "All temple entry fees",
      "Assistance for rituals in Varanasi",
      "Participation in langar at Golden Temple"
    ],
    excluded: [
      "Airfare to Varanasi and from Amritsar",
      "Lunch during the tour",
      "Personal expenses and shopping",
      "Special ritual arrangements",
      "Tips and gratuities",
      "Anything not mentioned in inclusions"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Varanasi",
        activities: ["Welcome at Varanasi airport", "Check-in at heritage hotel", "Evening Ganga Aarti at Dashashwamedh Ghat", "Welcome dinner"]
      },
      {
        day: 2,
        title: "Varanasi Full Day",
        activities: ["Early morning boat ride on the Ganges", "Visit to Kashi Vishwanath Temple", "Explore the ghats", "Visit Sarnath (Buddha's first sermon site)"]
      },
      {
        day: 3,
        title: "Varanasi to Ayodhya",
        activities: ["Drive to Ayodhya (200 km / 5-6 hrs)", "Evening aarti at Saryu River", "Visit Ram Janmabhoomi Temple"]
      },
      {
        day: 4,
        title: "Ayodhya Full Day",
        activities: ["Visit Hanuman Garhi", "Kanak Bhawan", "Nageshwarnath Temple", "Ram ki Paidi", "Cultural program in evening"]
      },
      {
        day: 5,
        title: "Ayodhya to Amritsar",
        activities: ["Morning flight to Amritsar", "Check-in at hotel", "Visit Jallianwala Bagh", "Evening at Golden Temple for aarti"]
      },
      {
        day: 6,
        title: "Amritsar Full Day",
        activities: ["Morning prayer at Golden Temple", "Participate in langar (community meal)", "Visit Wagah Border ceremony", "Explore old city markets"]
      },
      {
        day: 7,
        title: "Departure from Amritsar",
        activities: ["Early morning visit to Golden Temple", "Breakfast at hotel", "Transfer to airport for departure"]
      }
    ],
    temples: ["kashi-vishwanath", "ram-janmabhoomi", "golden-temple"]
  },
  {
    id: "divine-odisha-circuit",
    name: "Divine Odisha Circuit",
    image: "https://images.unsplash.com/photo-1613473060226-dd81153a63db",
    location: "Odisha",
    duration: "5 Days, 4 Nights",
    groupSize: "10-15 People",
    price: 22000,
    featured: false,
    description: "Explore the ancient temples and rich culture of Odisha, featuring the majestic Jagannath Temple and Konark Sun Temple.",
    longDescription: "Discover the divine treasures of Odisha, a state renowned for its ancient temples and rich cultural heritage. This unique tour takes you through the spiritual landmarks of eastern India, including the magnificent Jagannath Temple in Puri and the architectural marvel of the Sun Temple in Konark. Experience the vibrant local culture, witness traditional Odissi dance performances, and savor authentic Odia cuisine. The tour combines spiritual exploration with cultural immersion, offering you a comprehensive understanding of Odisha's religious significance and artistic traditions.",
    included: [
      "Accommodation in 3-star hotels",
      "Daily breakfast and dinner",
      "Air-conditioned vehicle for all transfers",
      "Professional guide services",
      "All monument and temple entry fees",
      "Traditional Odissi dance performance",
      "Bottle of water per day"
    ],
    excluded: [
      "Airfare to and from Bhubaneswar",
      "Lunch during the tour",
      "Personal expenses",
      "Camera fees at monuments",
      "Tips and gratuities",
      "Any services not mentioned in inclusions"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bhubaneswar",
        activities: ["Pickup from Bhubaneswar airport", "Visit Lingaraj Temple", "Explore Udayagiri and Khandagiri Caves", "Evening at leisure"]
      },
      {
        day: 2,
        title: "Bhubaneswar to Konark to Puri",
        activities: ["Drive to Konark", "Visit the UNESCO World Heritage Sun Temple", "Continue to Puri", "Evening Arati at Jagannath Temple"]
      },
      {
        day: 3,
        title: "Puri Full Day",
        activities: ["Morning darshan at Jagannath Temple", "Visit Gundicha Temple", "Beach time", "Traditional Odissi dance performance in evening"]
      },
      {
        day: 4,
        title: "Puri to Chilika Lake",
        activities: ["Excursion to Chilika Lake", "Boat ride to spot Irrawaddy dolphins", "Visit Nirmala Jhar and Narayani Temple", "Return to Puri"]
      },
      {
        day: 5,
        title: "Puri to Bhubaneswar Departure",
        activities: ["Final darshan at Jagannath Temple", "Drive to Bhubaneswar", "En route visit Dhauli Peace Pagoda", "Transfer to airport for departure"]
      }
    ],
    temples: ["jagannath-temple", "konark-sun-temple", "lingaraj-temple"]
  }
];
