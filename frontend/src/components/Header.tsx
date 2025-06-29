import React from 'react';
import { Leaf, Search, Bell, User, Menu } from 'lucide-react';

interface HeaderProps {
  user: any;
  onLoginClick: () => void;
  onLogout: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  user, 
  onLoginClick, 
  onLogout, 
  searchQuery, 
  onSearchChange 
}) => {
  return (
    <header className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-green-100 p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-xl font-bold text-gray-900">Urban Harvest</span>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search for crops, users..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
                </button>
                
                <div className="flex items-center space-x-3">
                  <div className="hidden sm:block text-right">
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-green-600">{user.points} points</p>
                  </div>
                  <div className="relative group">
                    <button className="flex items-center space-x-1">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                          Profile
                        </button>
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                          My Listings
                        </button>
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                          Settings
                        </button>
                        <hr className="my-1" />
                        <button 
                          onClick={onLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                        >
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <button
                onClick={onLoginClick}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Sign In
              </button>
            )}
            
            <button className="md:hidden p-2 text-gray-600">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search for crops, users..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </header>
  );
};