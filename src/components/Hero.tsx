import React from 'react';
import { MapPin, Users, Recycle, Heart } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <div className="relative bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Share Your
              <span className="text-green-600 block">Garden's Bounty</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Connect with your community to share, trade, and donate fresh produce. 
              Reduce waste, build relationships, and enjoy nature's best together.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onGetStarted}
                className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Sharing Today
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl hover:bg-green-50 transition-colors font-semibold text-lg">
                Explore Listings
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-100 p-3 rounded-lg inline-block mb-2">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">2.5K+</div>
                <div className="text-sm text-gray-600">Community Members</div>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-3 rounded-lg inline-block mb-2">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15</div>
                <div className="text-sm text-gray-600">Neighborhoods</div>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 p-3 rounded-lg inline-block mb-2">
                  <Recycle className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">800+</div>
                <div className="text-sm text-gray-600">Successful Trades</div>
              </div>
              <div className="text-center">
                <div className="bg-red-100 p-3 rounded-lg inline-block mb-2">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Lbs Donated</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Community garden sharing"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-green-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">🥕</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Fresh Carrots</p>
                  <p className="text-xs text-gray-500">2 miles away</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-green-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-sm">🍅</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Cherry Tomatoes</p>
                  <p className="text-xs text-gray-500">Free donation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};