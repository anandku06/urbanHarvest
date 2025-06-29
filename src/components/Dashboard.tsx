import React, { useState } from 'react';
import { Plus, Filter, MapPin, List, Trophy, BookOpen } from 'lucide-react';
import { ProduceCard } from './ProduceCard';
import { SimpleMap } from './SimpleMap';
import { UserProfile } from './UserProfile';
import { GardeningTips } from './GardeningTips';
import { Produce, User } from '../types';
import { mockProduce } from '../data/mockData';

interface DashboardProps {
  user: User;
  searchQuery: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ user, searchQuery }) => {
  const [activeTab, setActiveTab] = useState<'browse' | 'map' | 'profile' | 'tips'>('browse');
  const [selectedFilters, setSelectedFilters] = useState({
    type: 'all',
    category: 'all',
    freshness: 'all',
    organic: false
  });
  const [showFilters, setShowFilters] = useState(false);

  // Filter produce based on search and filters
  const filteredProduce = mockProduce.filter(produce => {
    // Search filter
    if (searchQuery && !produce.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !produce.userName.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Type filter
    if (selectedFilters.type !== 'all' && produce.type !== selectedFilters.type) {
      return false;
    }

    // Category filter
    if (selectedFilters.category !== 'all' && produce.category !== selectedFilters.category) {
      return false;
    }

    // Freshness filter
    if (selectedFilters.freshness !== 'all' && produce.freshness !== selectedFilters.freshness) {
      return false;
    }

    // Organic filter
    if (selectedFilters.organic && !produce.isOrganic) {
      return false;
    }

    return true;
  });

  const handleContact = (produce: Produce) => {
    alert(`Contacting ${produce.userName} about ${produce.name}. In a real app, this would open a messaging interface.`);
  };

  const tabs = [
    { id: 'browse', label: 'Browse', icon: List },
    { id: 'map', label: 'Map', icon: MapPin },
    { id: 'profile', label: 'Profile', icon: Trophy },
    { id: 'tips', label: 'Tips', icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-green-600 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {activeTab === 'browse' && (
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border font-medium text-sm transition-colors ${
                    showFilters || Object.values(selectedFilters).some(v => v !== 'all' && v !== false)
                      ? 'bg-green-50 border-green-300 text-green-700'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm flex items-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>List Produce</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && activeTab === 'browse' && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select
                  value={selectedFilters.type}
                  onChange={(e) => setSelectedFilters({...selectedFilters, type: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                >
                  <option value="all">All Types</option>
                  <option value="Free">Free</option>
                  <option value="Trade">Trade</option>
                  <option value="Donation">Donation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={selectedFilters.category}
                  onChange={(e) => setSelectedFilters({...selectedFilters, category: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                >
                  <option value="all">All Categories</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Fruits">Fruits</option>
                  <option value="Herbs">Herbs</option>
                  <option value="Flowers">Flowers</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Freshness</label>
                <select
                  value={selectedFilters.freshness}
                  onChange={(e) => setSelectedFilters({...selectedFilters, freshness: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                >
                  <option value="all">All Freshness</option>
                  <option value="Fresh">Fresh</option>
                  <option value="Good">Good</option>
                  <option value="Use Soon">Use Soon</option>
                </select>
              </div>
              <div className="flex items-end">
                <label className="flex items-center space-x-2 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedFilters.organic}
                    onChange={(e) => setSelectedFilters({...selectedFilters, organic: e.target.checked})}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span>Organic Only</span>
                </label>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => setSelectedFilters({ type: 'all', category: 'all', freshness: 'all', organic: false })}
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'browse' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Available Produce ({filteredProduce.length})
              </h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProduce.map((produce) => (
                <ProduceCard
                  key={produce.id}
                  produce={produce}
                  onContact={handleContact}
                />
              ))}
            </div>
            {filteredProduce.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Filter className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No produce found</h3>
                <p className="text-gray-600">Try adjusting your search or filters to find more items.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'map' && (
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Local Produce Map</h1>
            <SimpleMap produce={filteredProduce} />
          </div>
        )}

        {activeTab === 'profile' && (
          <UserProfile user={user} />
        )}

        {activeTab === 'tips' && (
          <GardeningTips />
        )}
      </div>
    </div>
  );
};