import React from "react";
import {
  User,
  Badge as Badge2,
  MapPin,
  Calendar,
  Trophy,
  Star,
} from "lucide-react";
import { User as UserType } from "../types";
import { availableBadges } from "../data/mockData";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";

interface UserProfileProps {
  user: UserType;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const unlockedBadgeIds = user.badges.map((b) => b.id);
  const lockedBadges = availableBadges.filter(
    (badge) => !unlockedBadgeIds.includes(badge.id)
  );

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>

      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-green-100"
            />
            <div className="absolute -bottom-2 -right-2 bg-green-600 text-white rounded-full p-2">
              <User className="h-4 w-4" />
            </div>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-gray-600 mb-4">{user.email}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {user.points}
                </div>
                <div className="text-sm text-gray-600">Points</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {user.exchangeCount}
                </div>
                <div className="text-sm text-gray-600">Exchanges</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  {user.badges.length}
                </div>
                <div className="text-sm text-gray-600">Badges</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-600">4.9</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Profile Information
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span>Joined {formatDistanceToNow(user.joinDate)} ago</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge2 className="h-4 w-4 text-gray-400" />
                  <span>{user.gardenType} Gardener</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Preferences</h3>
              <div className="flex flex-wrap gap-2">
                {user.preferences.map((pref, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                  >
                    {pref}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Badges Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
          <Trophy className="h-5 w-5 text-yellow-600" />
          <span>Achievements</span>
        </h3>

        {/* Unlocked Badges */}
        <div className="mb-8">
          <h4 className="font-medium text-gray-900 mb-4">
            Earned Badges ({user.badges.length})
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {user.badges.map((badge) => (
              <div
                key={badge.id}
                className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-4 text-center"
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <h5 className="font-semibold text-gray-900 text-sm">
                  {badge.name}
                </h5>
                <p className="text-xs text-gray-600 mt-1">
                  {badge.description}
                </p>
                {badge.unlockedAt && (
                  <p className="text-xs text-gray-500 mt-2">
                    Earned {formatDistanceToNow(badge.unlockedAt)} ago
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Locked Badges */}
        {lockedBadges.length > 0 && (
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Available Badges</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {lockedBadges.map((badge) => (
                <div
                  key={badge.id}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center opacity-60"
                >
                  <div className="text-3xl mb-2 grayscale">{badge.icon}</div>
                  <h5 className="font-semibold text-gray-700 text-sm">
                    {badge.name}
                  </h5>
                  <p className="text-xs text-gray-600 mt-1">
                    {badge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Recent Activity
        </h3>
        <div className="space-y-4">
          {[
            {
              action: "Shared",
              item: "Cherry Tomatoes",
              time: "2 hours ago",
              type: "share",
            },
            {
              action: "Traded",
              item: "Fresh Basil for Carrots",
              time: "1 day ago",
              type: "trade",
            },
            {
              action: "Earned",
              item: "Trade Master Badge",
              time: "3 days ago",
              type: "badge",
            },
            {
              action: "Donated",
              item: "Mixed Lettuce",
              time: "1 week ago",
              type: "donation",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activity.type === "share"
                    ? "bg-green-100"
                    : activity.type === "trade"
                    ? "bg-blue-100"
                    : activity.type === "badge"
                    ? "bg-yellow-100"
                    : "bg-purple-100"
                }`}
              >
                {activity.type === "share" && (
                  <Star className="h-4 w-4 text-green-600" />
                )}
                {activity.type === "trade" && (
                  <User className="h-4 w-4 text-blue-600" />
                )}
                {activity.type === "badge" && (
                  <Trophy className="h-4 w-4 text-yellow-600" />
                )}
                {activity.type === "donation" && (
                  <Badge2 className="h-4 w-4 text-purple-600" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {activity.action} {activity.item}
                </p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
