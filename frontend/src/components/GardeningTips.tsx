import React from "react";
import { BookOpen, Heart, Clock, User, TrendingUp } from "lucide-react";
import { gardeningTips } from "../data/mockData";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";

export const GardeningTips: React.FC = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-green-600" />
          <span>Gardening Knowledge Hub</span>
        </h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm">
          Share Your Tip
        </button>
      </div>

      {/* Featured Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: "Winter Gardening", count: 12, icon: "❄️", color: "blue" },
          { name: "Planting Tips", count: 18, icon: "🌱", color: "green" },
          { name: "Pest Control", count: 8, icon: "🐛", color: "yellow" },
          { name: "Composting", count: 15, icon: "♻️", color: "emerald" },
        ].map((category, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border-2 border-dashed border-${category.color}-200 hover:border-${category.color}-400 hover:bg-${category.color}-50 transition-all cursor-pointer group`}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">{category.icon}</div>
              <h3 className="font-semibold text-gray-900 text-sm">
                {category.name}
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                {category.count} tips
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tips Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {gardeningTips.map((tip) => (
          <article
            key={tip.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow group"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                      tip.difficulty
                    )}`}
                  >
                    {tip.difficulty}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                    {tip.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                  {tip.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <p className="text-gray-600 leading-relaxed mb-6">{tip.content}</p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <User className="h-4 w-4" />
                  <span>{tip.author}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>{formatDistanceToNow(tip.publishDate)} ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-600 transition-colors">
                  <Heart className="h-4 w-4" />
                  <span>{tip.likes}</span>
                </button>
                <button className="text-sm text-green-600 hover:text-green-700 font-medium">
                  Read More
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Weekly Highlights */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="h-6 w-6" />
          <h3 className="text-xl font-semibold">This Week's Trending Topics</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { topic: "Winter Herb Care", engagement: "+25% interest" },
            { topic: "Seed Starting Indoors", engagement: "18 new tips" },
            { topic: "Composting 101", engagement: "42 community saves" },
          ].map((trend, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-1">{trend.topic}</h4>
              <p className="text-sm opacity-90">{trend.engagement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
