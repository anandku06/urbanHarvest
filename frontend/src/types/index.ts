export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  location: string;
  gardenType: 'Balcony' | 'Backyard' | 'Community Garden' | 'Indoor' | 'Greenhouse';
  preferences: string[];
  joinDate: Date;
  points: number;
  badges: Badge[];
  exchangeCount: number;
}

export interface Produce {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  name: string;
  category: 'Vegetables' | 'Fruits' | 'Herbs' | 'Flowers' | 'Other';
  quantity: string;
  description: string;
  harvestDate: Date;
  expiryDate: Date;
  type: 'Free' | 'Trade' | 'Donation';
  location: string;
  coordinates: [number, number];
  images: string[];
  freshness: 'Fresh' | 'Good' | 'Use Soon';
  isOrganic: boolean;
  isActive: boolean;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  unlockedAt?: Date;
}

export interface Exchange {
  id: string;
  fromUserId: string;
  toUserId: string;
  produceId: string;
  date: Date;
  rating?: number;
  note?: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
}

export interface GardeningTip {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  publishDate: Date;
  likes: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}