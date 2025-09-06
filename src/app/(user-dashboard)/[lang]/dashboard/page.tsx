import { PosterCard } from "@/src/components/common/PosterCard";
import StatsCard, { StatsCardProps } from "@/src/components/common/StatsCard";
import { Wallet, ClockFading, BookmarkPlus } from "lucide-react";

const stats: StatsCardProps[] = [
  {
    title: "Wallet Balance",
    value: "1,200",
    unit: "Coins",
    icon: Wallet,
    change: "+12%",
    changeType: "positive",
  },
  {
    title: "Watch History",
    value: "45",
    unit: "Episodes",
    icon: ClockFading,
    change: "+8 this week",
    changeType: "neutral",
  },
  {
    title: "My Watchlist",
    value: "12",
    unit: "Saved",
    icon: BookmarkPlus,
    change: "+3 recently",
    changeType: "positive",
  },
];

const recentActivity = [
  { action: "Completed", title: "The Life List - Episode 12", time: "2 hours ago" },
  { action: "Added to list", title: "Midnight Chronicles", time: "1 day ago" },
  { action: "Started watching", title: "Urban Legends - Episode 1", time: "3 days ago" },
]

export default function OverviewPage() {
  const recommended = new Array(7).fill(null);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="space-y-2">
          <h1 className="text-[#FFFAFA] text-xl sm:text-3xl font-semibold">
            Welcome back!
          </h1>
          <p className="text-[#B3B1B0] text-sm sm:text-base">Ready to continue your entertainment journey?</p>
        </div>
        <div className="text-right space-y-2">
          <p className="text-xs sm:text-sm text-[#B3B1B0]">Last activity</p>
          <p className="text-xs sm:text-base font-medium text-white">2 hours ago</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        {stats.map((stat, i) => (
          <StatsCard key={i} stat={stat}/>
        ))}
      </div>

      {/* Recommend movies section */}
      <div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Recommended for You</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {recommended.map((_, i) => (
            <PosterCard
              key={i}
              title="The Life List"
              posterImage="https://www.reelshort.com/fandom/wp-content/uploads/2025/08/the-tutor-trap-cast.jpg"
              category="TV SERIES"
            />
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-2 rounded-2xl p-6 border-2 border-[#D7D7D740]">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-[#FFFAFA]">Recent Activity</h3>
          <button className="text-xs text-primary-rose cursor-pointer active:underline">
            View all activity
          </button>
        </div>
        <div className="space-y-4">
          {recentActivity.map((activity, i) => (
            <div
              key={i}
              className="flex items-center space-x-4 rounded-xl"
            >
              <div className="size-2.5 rounded-full bg-primary-rose mb-3"></div>
              <div className="flex-1 space-y-1">
                <p className="text-sm text-white space-x-1.5">
                  <span className="text-base text-primary-rose">{activity.action}</span>
                  <span>{activity.title}</span>
                </p>
                <p className="text-xs text-[#B3B1B0]">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
