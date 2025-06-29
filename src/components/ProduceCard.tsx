import React from 'react';
import { MapPin, Calendar, Tag, Heart, MessageCircle } from 'lucide-react';
import { Produce } from '../types';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';

interface ProduceCardProps {
  produce: Produce;
  onContact: (produce: Produce) => void;
}

export const ProduceCard: React.FC<ProduceCardProps> = ({ produce, onContact }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Free': return 'bg-green-100 text-green-800';
      case 'Trade': return 'bg-blue-100 text-blue-800';
      case 'Donation': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getFreshnessColor = (freshness: string) => {
    switch (freshness) {
      case 'Fresh': return 'text-green-600';
      case 'Good': return 'text-yellow-600';
      case 'Use Soon': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200 group">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={produce.images[0]}
          alt={produce.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(produce.type)}`}>
            {produce.type}
          </span>
        </div>
        {produce.isOrganic && (
          <div className="absolute top-3 right-3">
            <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
              Organic
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{produce.name}</h3>
            <p className="text-sm text-gray-600">{produce.quantity}</p>
          </div>
          <div className="text-right">
            <p className={`text-sm font-medium ${getFreshnessColor(produce.freshness)}`}>
              {produce.freshness}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {produce.description}
        </p>

        {/* User Info */}
        <div className="flex items-center space-x-2 mb-4">
          <img
            src={produce.userAvatar}
            alt={produce.userName}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">{produce.userName}</p>
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <MapPin className="h-3 w-3" />
              <span>{produce.location}</span>
            </div>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>Harvested {formatDistanceToNow(produce.harvestDate)} ago</span>
          </div>
          <div className="flex items-center space-x-1">
            <Tag className="h-3 w-3" />
            <span>{produce.category}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <button
            onClick={() => onContact(produce)}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm flex items-center justify-center space-x-1"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Contact</span>
          </button>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Heart className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};