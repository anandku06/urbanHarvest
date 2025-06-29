import type { User, Badge, GardeningTip, Produce } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Sarah Green',
  email: 'sarah@example.com',
  avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
  location: 'Downtown District',
  gardenType: 'Backyard',
  preferences: ['Organic Only', 'Local Trade', 'Seasonal'],
  joinDate: new Date('2024-01-15'),
  points: 245,
  badges: [
    { id: '1', name: 'First Harvest', description: 'Shared your first harvest!', icon: '🌱', color: 'green', unlockedAt: new Date('2024-01-20') },
    { id: '2', name: 'Trade Master', description: 'Completed 10 successful trades', icon: '🤝', color: 'blue', unlockedAt: new Date('2024-02-15') }
  ],
  exchangeCount: 12
};

export const mockProduce: Produce[] = [
  {
    id: '1',
    userId: '1',
    userName: 'Sarah Green',
    userAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    name: 'Cherry Tomatoes',
    category: 'Vegetables',
    quantity: '2 lbs',
    description: 'Fresh, organic cherry tomatoes from my backyard garden. Sweet and perfect for salads!',
    harvestDate: new Date('2024-12-20'),
    expiryDate: new Date('2024-12-27'),
    type: 'Trade',
    location: 'Downtown District',
    coordinates: [40.7128, -74.0060],
    images: ['https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=800'],
    freshness: 'Fresh',
    isOrganic: true,
    isActive: true
  },
  {
    id: '2',
    userId: '2',
    userName: 'Mike Garden',
    userAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    name: 'Fresh Basil',
    category: 'Herbs',
    quantity: '1 large bunch',
    description: 'Aromatic organic basil leaves, perfect for cooking. Harvested this morning!',
    harvestDate: new Date('2024-12-21'),
    expiryDate: new Date('2024-12-25'),
    type: 'Free',
    location: 'Green Valley',
    coordinates: [40.7580, -73.9855],
    images: ['https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=800'],
    freshness: 'Fresh',
    isOrganic: true,
    isActive: true
  },
  {
    id: '3',
    userId: '3',
    userName: 'Emma Bloom',
    userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    name: 'Rainbow Carrots',
    category: 'Vegetables',
    quantity: '3 lbs',
    description: 'Beautiful rainbow carrots in various colors. Great for roasting or fresh eating.',
    harvestDate: new Date('2024-12-19'),
    expiryDate: new Date('2024-12-26'),
    type: 'Donation',
    location: 'Riverside Area',
    coordinates: [40.7282, -74.0776],
    images: ['https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=800'],
    freshness: 'Fresh',
    isOrganic: false,
    isActive: true
  },
  {
    id: '4',
    userId: '4',
    userName: 'David Herbs',
    userAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
    name: 'Mixed Lettuce',
    category: 'Vegetables',
    quantity: '4 heads',
    description: 'Fresh mixed lettuce varieties including romaine, butter, and red leaf lettuce.',
    harvestDate: new Date('2024-12-21'),
    expiryDate: new Date('2024-12-24'),
    type: 'Trade',
    location: 'Central Park Area',
    coordinates: [40.7829, -73.9654],
    images: ['https://images.pexels.com/photos/1255266/pexels-photo-1255266.jpeg?auto=compress&cs=tinysrgb&w=800'],
    freshness: 'Fresh',
    isOrganic: true,
    isActive: true
  }
];

export const availableBadges: Badge[] = [
  { id: '1', name: 'First Harvest', description: 'Shared your first harvest!', icon: '🌱', color: 'green' },
  { id: '2', name: 'Trade Master', description: 'Completed 10 successful trades', icon: '🤝', color: 'blue' },
  { id: '3', name: 'Green Thumb', description: 'Shared 25 different crops', icon: '👍', color: 'emerald' },
  { id: '4', name: 'Community Helper', description: 'Made 5 donations', icon: '❤️', color: 'red' },
  { id: '5', name: 'Organic Champion', description: 'Only shared organic produce', icon: '🏆', color: 'yellow' },
  { id: '6', name: 'Weekly Hero', description: 'Top contributor of the week', icon: '⭐', color: 'purple' }
];

export const gardeningTips: GardeningTip[] = [
  {
    id: '1',
    title: 'Winter Herb Garden Success',
    content: 'Keep your herbs thriving through winter with these essential tips. Provide adequate light, maintain proper watering schedules, and protect from cold drafts. Herbs like rosemary, thyme, and sage are particularly hardy.',
    category: 'Winter Gardening',
    author: 'Garden Expert',
    publishDate: new Date('2024-12-15'),
    likes: 34,
    difficulty: 'Beginner'
  },
  {
    id: '2',
    title: 'Companion Planting Guide',
    content: 'Maximize your garden\'s potential by pairing compatible plants. Tomatoes love basil, carrots grow well with onions, and marigolds protect against pests naturally.',
    category: 'Planting Tips',
    author: 'Sarah Green',
    publishDate: new Date('2024-12-10'),
    likes: 28,
    difficulty: 'Intermediate'
  },
  {
    id: '3',
    title: 'Composting for Beginners',
    content: 'Turn your kitchen scraps into garden gold! Learn the basics of composting: the right balance of greens and browns, proper moisture levels, and turning schedules.',
    category: 'Sustainability',
    author: 'Mike Garden',
    publishDate: new Date('2024-12-05'),
    likes: 42,
    difficulty: 'Beginner'
  }
];