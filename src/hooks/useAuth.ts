import { useState } from 'react';
import type { User } from '../types';
import { mockUser } from '../data/mockData';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setUser(mockUser);
      setIsLoading(false);
    }, 1000);
  };

  const register = async (name: string, email: string, password: string, location: string) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setUser({
        ...mockUser,
        name,
        email,
        location,
        joinDate: new Date(),
        points: 0,
        badges: [],
        exchangeCount: 0
      });
      setIsLoading(false);
    }, 1000);
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    isLoading
  };
};