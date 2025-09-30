export interface Meme {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  likes: number;
  isPremium: boolean;
}

export const memes: Meme[] = [
  {
    id: 1,
    title: "The Brave Knight's Dilemma",
    description: "When you're trying to rescue the princess but she's actually the dragon in disguise. Classic medieval mix-up!",
    imageUrl: "/images/knight-dragon.jpg",
    category: "knight",
    likes: 1247,
    isPremium: false
  },
  {
    id: 2,
    title: "Dragon's Dating Profile",
    description: "Looking for a princess who appreciates a good hoard and doesn't mind a little fire breathing. Must love treasure!",
    imageUrl: "/images/dragon-profile.jpg",
    category: "dragon",
    likes: 2156,
    isPremium: true
  },
  {
    id: 3,
    title: "Castle WiFi Problems",
    description: "The moat is interfering with the signal again. Time to upgrade to 5G towers disguised as watchtowers.",
    imageUrl: "/images/castle-wifi.jpg",
    category: "castle",
    likes: 892,
    isPremium: false
  },
  {
    id: 4,
    title: "Medieval Food Delivery",
    description: "When the tavern is closed but you're craving some roasted boar. Enter the medieval Uber Eats: horse and carriage delivery!",
    imageUrl: "/images/medieval-delivery.jpg",
    category: "knight",
    likes: 1567,
    isPremium: true
  },
  {
    id: 5,
    title: "The Sorcerer's App",
    description: "New spell casting app with voice recognition. Finally, no more mispronouncing 'Abracadabra' and turning yourself into a frog!",
    imageUrl: "/images/sorcerer-app.jpg",
    category: "magic",
    likes: 3241,
    isPremium: false
  },
  {
    id: 6,
    title: "Dragon's Therapy Session",
    description: "Dr. Owl: 'So tell me, how does it make you feel when people call you a monster?' Dragon: 'It really burns me up inside.'",
    imageUrl: "/images/dragon-therapy.jpg",
    category: "dragon",
    likes: 1876,
    isPremium: true
  },
  {
    id: 7,
    title: "Medieval Tinder",
    description: "Swipe right if you have a castle, left if you're still living in your parents' cave. Must have at least 3 horses.",
    imageUrl: "/images/medieval-tinder.jpg",
    category: "castle",
    likes: 2789,
    isPremium: false
  },
  {
    id: 8,
    title: "The Jester's Stand-up",
    description: "Why did the knight break up with his sword? Because it was too sharp for him! *ba dum tss* The crowd goes wild!",
    imageUrl: "/images/jester-comedy.jpg",
    category: "knight",
    likes: 945,
    isPremium: false
  },
  {
    id: 9,
    title: "Dragon's Fitness Journey",
    description: "Day 1: Started flying lessons. Day 30: Can now carry a full-grown knight without breaking a sweat. #DragonGains",
    imageUrl: "/images/dragon-fitness.jpg",
    category: "dragon",
    likes: 4123,
    isPremium: true
  },
  {
    id: 10,
    title: "Castle Home Renovation",
    description: "Before: Dark, drafty, dragon damage. After: Modern amenities, heated floors, and a moat with a water slide!",
    imageUrl: "/images/castle-renovation.jpg",
    category: "castle",
    likes: 1654,
    isPremium: false
  },
  {
    id: 11,
    title: "The Knight's Social Media",
    description: "Just posted a selfie with my new armor. 47 likes and 3 comments saying 'Nice helmet, bro!' #KnightLife",
    imageUrl: "/images/knight-social.jpg",
    category: "knight",
    likes: 723,
    isPremium: false
  },
  {
    id: 12,
    title: "Dragon's Cooking Show",
    description: "Today on 'Flame & Feast': How to perfectly roast a whole ox using only your breath. Pro tip: Don't overcook!",
    imageUrl: "/images/dragon-cooking.jpg",
    category: "dragon",
    likes: 2987,
    isPremium: true
  }
];
