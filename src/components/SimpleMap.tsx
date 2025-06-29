import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import type { Produce } from '../types';

interface SimpleMapProps {
  produce: Produce[];
}

export const SimpleMap: React.FC<SimpleMapProps> = ({ produce }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Free': return 'bg-green-500';
      case 'Trade': return 'bg-blue-500';
      case 'Donation': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Map Header */}
      <div className="p-4 border-b border-gray-200 bg-green-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-green-100 p-2 rounded-lg">
              <Navigation className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Local Produce Map</h3>
              <p className="text-sm text-gray-600">{produce.length} items nearby</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Free</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Trade</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>Donation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Map Visualization */}
      <div className="h-96 bg-gradient-to-br from-green-50 to-blue-50 relative">
        {/* Mock map background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-blue-100/30">
          {/* Grid lines to simulate map */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Produce markers */}
        {produce.map((item, index) => (
          <div
            key={item.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            style={{
              left: `${20 + (index % 4) * 20}%`,
              top: `${20 + Math.floor(index / 4) * 25}%`
            }}
          >
            <div className={`w-6 h-6 ${getTypeColor(item.type)} rounded-full border-2 border-white shadow-lg group-hover:scale-125 transition-transform flex items-center justify-center`}>
              <MapPin className="h-3 w-3 text-white" />
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-48 z-10">
              <div className="flex items-center space-x-2 mb-2">
                <img
                  src={item.userAvatar}
                  alt={item.userName}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-gray-900">{item.userName}</span>
              </div>
              <h4 className="font-semibold text-gray-900">{item.name}</h4>
              <p className="text-sm text-gray-600">{item.quantity}</p>
              <div className="flex items-center justify-between mt-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.type === 'Free' ? 'bg-green-100 text-green-800' :
                  item.type === 'Trade' ? 'bg-blue-100 text-blue-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {item.type}
                </span>
                <span className="text-xs text-gray-500">{item.location}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Current location indicator */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 font-medium whitespace-nowrap">
            Your Location
          </div>
        </div>
      </div>

      {/* Map Footer */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Click on markers to view produce details. In a real app, this would be an interactive map with zoom, pan, and detailed location data.
        </p>
      </div>
    </div>
  );
};