import { QrCode } from "lucide-react";
import React from "react";
import RecentPostCard from "./RecentPostCard";

export const recentPosts = [
  {
    image: "/images/banner/banner-1.jpg",
    title: "10 Tips for a Healthy Lifestyle",
    date: "August 15, 2025",
  },
  {
    image: "/images/banner/banner-1.jpg",
    title: "Exploring Next.js 15 New Features",
    date: "August 12, 2025",
  },
  {
    image: "/images/banner/banner-1.jpg",
    title: "How to Stay Motivated While Coding",
    date: "August 10, 2025",
  },
  {
    image: "/images/banner/banner-1.jpg",
    title: "Best Places to Visit in 2025",
    date: "August 8, 2025",
  },
  {
    image: "/images/banner/banner-1.jpg",
    title: "UI/UX Design Trends You Should Know",
    date: "August 5, 2025",
  },
];

const FandomSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Download Section */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-center text-lg font-bold text-gray-900">DOWNLOAD</h3>
        <div className="mb-4 flex justify-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-gray-200">
            <QrCode className="h-20 w-20 text-gray-900" />
          </div>
        </div>
        <p className="text-center text-sm text-gray-600">Scan QR code to download ReelShort App</p>
      </div>

      {/* Ad Section 1 */}
      <div className="rounded-lg bg-gradient-to-r from-teal-400 to-cyan-400 p-6 text-white">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-lg font-bold">GoDaddy</div>
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white">
            <div className="h-8 w-12 rounded bg-gray-200"></div>
          </div>
        </div>
        <h4 className="mb-2 text-xl font-bold">Comece algo grande.</h4>
        <p className="mb-4 text-sm">Registre seu domínio hoje.</p>
        <div className="flex items-center rounded-full bg-white px-4 py-2">
          <span className="text-sm text-gray-400">www.</span>
        </div>
      </div>

      {/* Ad Section 2 */}
      <div className="flex h-64 items-center justify-center rounded-lg bg-yellow-200 p-6">
        <div className="text-center text-gray-500">
          <div className="text-sm">Advertisement</div>
          <div className="mt-1 text-xs">300 x 250</div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-bold text-gray-900">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <RecentPostCard
              key={post.title}
              image={post.image}
              title={post.title}
              date={post.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FandomSidebar;
