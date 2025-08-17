import { PosterCard } from "@/src/components/common/PosterCard";
import React from "react";

export default function DashboardOverViewPage() {
  const shows = new Array(12).fill(null);
  return (
    <div className="w-full rounded-xl bg-[#111] p-8">
      <h1 className="mb-6 text-2xl font-bold">History</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
        {shows.map((_, i) => (
          <PosterCard
            key={i}
            title="The Life List"
            posterImage="https://www.reelshort.com/fandom/wp-content/uploads/2025/08/the-tutor-trap-cast.jpg"
            category="TV SERIES"
          />
        ))}
      </div>
    </div>
  );
}
