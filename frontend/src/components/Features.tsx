import React from 'react';
import { MapPin, Calendar, Trophy, BookOpen, MessageCircle, ShieldCheck } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Local Discovery',
      description: 'Find fresh produce near you with our interactive map and location-based search.',
      color: 'green'
    },
    {
      icon: Calendar,
      title: 'Easy Scheduling',
      description: 'Coordinate pickups and meetups with integrated calendar and messaging.',
      color: 'blue'
    },
    {
      icon: Trophy,
      title: 'Earn Rewards',
      description: 'Get points and badges for sharing, trading, and helping your community grow.',
      color: 'yellow'
    },
    {
      icon: BookOpen,
      title: 'Garden Knowledge',
      description: 'Access expert tips, seasonal guides, and community gardening advice.',
      color: 'purple'
    },
    {
      icon: MessageCircle,
      title: 'Community Chat',
      description: 'Connect directly with neighbors to coordinate exchanges and share experiences.',
      color: 'indigo'
    },
    {
      icon: ShieldCheck,
      title: 'Safe & Secure',
      description: 'Verified profiles and secure communication keep your community safe.',
      color: 'emerald'
    }
  ];

  const colorClasses = {
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    purple: 'bg-purple-100 text-purple-600',
    indigo: 'bg-indigo-100 text-indigo-600',
    emerald: 'bg-emerald-100 text-emerald-600'
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Share
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Urban Harvest provides all the tools you need to build a thriving community 
            around fresh, local produce sharing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-200"
            >
              <div className={`w-12 h-12 rounded-lg ${colorClasses[feature.color as keyof typeof colorClasses]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Join the Movement?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Start sharing your garden's harvest with your community today.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};