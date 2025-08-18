import { PosterCard } from "@/src/components/common/PosterCard";
import { Wallet, History, BookmarkPlus } from "lucide-react";

const stats = [
  {
    title: "Wallet Balance",
    value: "1,200",
    unit: "Coins",
    color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    icon: Wallet,
    change: "+12%",
    changeType: "positive",
  },
  {
    title: "Watch History",
    value: "45",
    unit: "Episodes",
    color: "bg-gradient-to-r from-blue-400 to-rose-500",
    icon: History,
    change: "+8 this week",
    changeType: "neutral",
  },
  {
    title: "My Watchlist",
    value: "12",
    unit: "Saved",
    color: "bg-gradient-to-r from-rose-400 to-emerald-500",
    icon: BookmarkPlus,
    change: "+3 recently",
    changeType: "positive",
  },
];

export default function OverviewPage() {
  const recommended = new Array(7).fill(null);

  return (
    <div className="h-screen w-full space-y-8 overflow-y-auto rounded-xl bg-[#111] p-6 sm:p-8">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h1 className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            Welcome back! 👋
          </h1>
          <p className="mt-2 text-gray-400">Ready to continue your entertainment journey?</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-400">Last activity</p>
          <p className="font-medium text-white">2 hours ago</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {stats.map((stat, i) => (
          <div key={i} className="group relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-500/20 to-blue-500/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative rounded-2xl border border-gray-700/50 bg-gray-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-600/50">
              <div className="mb-4 flex items-start justify-between">
                <div className={`p-3 ${stat.color} rounded-xl shadow-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div
                  className={`rounded-full px-2 py-1 text-xs ${
                    stat.changeType === "positive"
                      ? "bg-rose-500/20 text-rose-400"
                      : "bg-gray-500/20 text-gray-400"
                  }`}
                >
                  {stat.change}
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl font-bold text-white md:text-3xl">{stat.value}</span>
                  <span className="text-sm text-gray-400">{stat.unit}</span>
                </div>
                <p className="text-sm text-gray-400">{stat.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recommended for You</h2>
          <button className="text-sm text-rose-500 hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
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

      <div className="rounded-2xl border border-gray-700/50 bg-gray-800/30 p-6 backdrop-blur-sm">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">Recent Activity</h3>
          <button className="text-sm font-medium text-rose-500 transition-colors hover:text-rose-300">
            View all activity
          </button>
        </div>
        <div className="space-y-4">
          {[
            { action: "Completed", title: "The Life List - Episode 12", time: "2 hours ago" },
            { action: "Added to list", title: "Midnight Chronicles", time: "1 day ago" },
            { action: "Started watching", title: "Urban Legends - Episode 1", time: "3 days ago" },
          ].map((activity, i) => (
            <div
              key={i}
              className="flex items-center space-x-4 rounded-xl p-3 transition-colors hover:bg-gray-700/30"
            >
              <div className="h-2 w-2 rounded-full bg-rose-500"></div>
              <div className="flex-1">
                <p className="text-sm text-white">
                  <span className="font-medium text-rose-500">{activity.action}</span>{" "}
                  {activity.title}
                </p>
                <p className="text-xs text-gray-400">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
