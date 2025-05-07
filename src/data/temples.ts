
export interface Temple {
  id: string;
  name: string;
  location: string;
  state: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  history: string;
  significance: string;
  bestTimeToVisit: string;
  howToReach: string;
  nearbyAttractions: string[];
}

export const temples: Temple[] = [
  {
    id: "tirupati-balaji",
    name: "Tirupati Balaji Temple",
    location: "Tirumala, Andhra Pradesh",
    state: "Andhra Pradesh",
    description: "One of the most visited religious sites in the world, known for its ancient Dravidian architecture.",
    longDescription: "Sri Venkateswara Temple, also known as Tirupati Balaji Temple, is dedicated to Lord Venkateswara, an incarnation of Vishnu. Located on the seventh peak of Tirumala Hills, it is the richest temple in the world in terms of donations received and wealth.",
    image: "https://images.unsplash.com/photo-1621415814107-1728b8e2cf21",
    gallery: [
      "https://images.unsplash.com/photo-1621415814107-1728b8e2cf21",
      "https://images.unsplash.com/photo-1600270987242-17912b55ecf8",
      "https://images.unsplash.com/photo-1532443603613-71fab9ba99e7"
    ],
    history: "The temple has a fascinating history dating back to over 2,000 years. The main deity, Lord Venkateswara, is believed to have appeared here to save mankind from the trials and troubles of Kali Yuga.",
    significance: "Tirupati is considered one of the eight Swayambhu (self-manifested) temples of Vishnu and is believed to fulfill wishes and bestow prosperity.",
    bestTimeToVisit: "September to March when the weather is pleasant",
    howToReach: "The nearest airport is at Tirupati (33 km), and the nearest railway station is also at Tirupati town. Regular buses and taxis operate from Tirupati to Tirumala.",
    nearbyAttractions: ["Akasaganga Teertham", "Silathoranam", "Sri Govindaraja Swamy Temple", "Chandragiri Fort"]
  },
  {
    id: "meenakshi-temple",
    name: "Meenakshi Amman Temple",
    location: "Madurai, Tamil Nadu",
    state: "Tamil Nadu",
    description: "Famous for its stunning architecture with thousands of colorful sculptures and towering gopurams.",
    longDescription: "The Meenakshi Temple is dedicated to Goddess Meenakshi, an avatar of the Hindu goddess Parvati, and her consort, Sundareshwarar, a form of Lord Shiva. The temple forms the heart and lifeline of the 2,500-year-old city of Madurai.",
    image: "https://images.unsplash.com/photo-1616136133839-6cce0c28ca7e",
    gallery: [
      "https://images.unsplash.com/photo-1616136133839-6cce0c28ca7e",
      "https://images.unsplash.com/photo-1626196137042-afecb22fc76c",
      "https://images.unsplash.com/photo-1598609034532-ada5667fa1cf"
    ],
    history: "The temple was originally built by Kulasekara Pandya, but the structure we see today was mostly built during the 16th-17th centuries during the reign of the Nayak dynasty.",
    significance: "The temple is known for its 14 magnificent gopurams (gateway towers), the tallest being 170 feet high, and the Hall of Thousand Pillars.",
    bestTimeToVisit: "October to March when the weather is cooler",
    howToReach: "Madurai has its own international airport and is well-connected by rail and road to major cities in India.",
    nearbyAttractions: ["Thirumalai Nayakkar Palace", "Gandhi Museum", "Azhagar Kovil", "Vaigai Dam"]
  },
  {
    id: "golden-temple",
    name: "Golden Temple",
    location: "Amritsar, Punjab",
    state: "Punjab",
    description: "The holiest Gurdwara and the central religious place of Sikhism, known for its golden structure.",
    longDescription: "Sri Harmandir Sahib, popularly known as the Golden Temple, is the most sacred shrine in Sikhism. The temple is a symbol of human brotherhood and equality where people from all walks of life gather to worship.",
    image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d",
    gallery: [
      "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d",
      "https://images.unsplash.com/photo-1587899276077-088540e2590b",
      "https://images.unsplash.com/photo-1541948430132-01d048a1bc9b"
    ],
    history: "The Golden Temple was designed by the fifth Sikh guru, Guru Arjan, and completed in 1604. The Guru had the Adi Granth, the Sikh scripture, installed in the temple in 1604.",
    significance: "The temple is built at a level lower than the surrounding land level, signifying that one must humble oneself before entering God's place. The four entrances symbolize openness to all people and communities.",
    bestTimeToVisit: "October to March when the weather is pleasant",
    howToReach: "Sri Guru Ram Dass Jee International Airport is about 11 km from the temple. Amritsar is also well connected by rail and road.",
    nearbyAttractions: ["Jallianwala Bagh", "Wagah Border", "Partition Museum", "Durgiana Temple"]
  },
  {
    id: "kedarnath-temple",
    name: "Kedarnath Temple",
    location: "Rudraprayag, Uttarakhand",
    state: "Uttarakhand",
    description: "One of the holiest Hindu temples dedicated to Lord Shiva, located in the majestic Himalayas.",
    longDescription: "Kedarnath Temple is a Hindu temple dedicated to Lord Shiva and is one of the twelve Jyotirlingas. Due to extreme weather conditions, the temple is open only from late April to early November.",
    image: "https://images.unsplash.com/photo-1589182337358-2cb63099350c",
    gallery: [
      "https://images.unsplash.com/photo-1589182337358-2cb63099350c",
      "https://images.unsplash.com/photo-1618776277423-0fae462fcb43",
      "https://images.unsplash.com/photo-1585136917228-92df5232e96f"
    ],
    history: "According to legend, the Pandavas sought Lord Shiva to redeem themselves from the sin of killing their own cousins in the Kurukshetra war. Lord Shiva kept avoiding them, but later appeared at Kedarnath in the form of a bull.",
    significance: "Kedarnath is one of the Char Dham pilgrimage sites and is part of the larger Panch Kedar pilgrimage circuit.",
    bestTimeToVisit: "May to June and September to October, as the temple remains closed during winter",
    howToReach: "The nearest airport is Jolly Grant Airport in Dehradun. From there, one can take a taxi to Gaurikund and then trek 16 km to reach the temple.",
    nearbyAttractions: ["Vasuki Tal", "Chorabari Tal", "Bhairavnath Temple", "Chandrashila Peak"]
  },
  {
    id: "jagannath-temple",
    name: "Jagannath Temple",
    location: "Puri, Odisha",
    state: "Odisha",
    description: "Famous for its annual Rath Yatra, this temple is dedicated to Lord Jagannath, a form of Lord Vishnu.",
    longDescription: "The Jagannath Temple is an important Hindu temple dedicated to Lord Jagannath, a form of Lord Vishnu. It is one of the Char Dham pilgrimage sites and is famous for its annual Rath Yatra or the Chariot Festival.",
    image: "https://images.unsplash.com/photo-1613473060226-dd81153a63db",
    gallery: [
      "https://images.unsplash.com/photo-1613473060226-dd81153a63db",
      "https://images.unsplash.com/photo-1591018103108-a8aad7867a86",
      "https://images.unsplash.com/photo-1585394718035-d2b2e4e85742"
    ],
    history: "The temple was built in the 12th century by King Anantavarman Chodaganga Deva of the Eastern Ganga Dynasty. The temple's architecture reflects the distinct Kalinga style.",
    significance: "The temple is famous for its annual Rath Yatra, where the deities are carried on huge chariots pulled by thousands of devotees.",
    bestTimeToVisit: "October to February when the weather is pleasant",
    howToReach: "The nearest airport is Biju Patnaik Airport in Bhubaneswar (60 km). Puri has its own railway station and is well-connected by road.",
    nearbyAttractions: ["Puri Beach", "Konark Sun Temple", "Chilika Lake", "Raghurajpur Crafts Village"]
  },
  {
    id: "kashi-vishwanath",
    name: "Kashi Vishwanath Temple",
    location: "Varanasi, Uttar Pradesh",
    state: "Uttar Pradesh",
    description: "One of the most famous Hindu temples dedicated to Lord Shiva, located on the banks of the Ganges.",
    longDescription: "The Kashi Vishwanath Temple is one of the most famous Hindu temples and is dedicated to Lord Shiva. It stands on the western bank of the holy river Ganga and is one of the twelve Jyotirlingas.",
    image: "https://images.unsplash.com/photo-1609969903072-7e34df405aad",
    gallery: [
      "https://images.unsplash.com/photo-1609969903072-7e34df405aad",
      "https://images.unsplash.com/photo-1567347769094-6f3128f6f9db",
      "https://images.unsplash.com/photo-1609969904151-7a6c80422f7c"
    ],
    history: "The temple has been destroyed and rebuilt several times throughout history. The current structure was built in the 18th century by Ahilya Bai Holkar, the queen of Malwa.",
    significance: "According to Hindu mythology, Lord Shiva once appeared here as a fiery column of light, and the temple marks the spot where Shiva is believed to have appeared.",
    bestTimeToVisit: "October to March when the weather is pleasant",
    howToReach: "The nearest airport is Lal Bahadur Shastri Airport in Varanasi. The city is well-connected by rail and road.",
    nearbyAttractions: ["Dashashwamedh Ghat", "Sarnath", "Ramnagar Fort", "Assi Ghat"]
  }
];
