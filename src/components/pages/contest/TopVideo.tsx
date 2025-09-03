import React from "react";
import { Button } from "@/src/components/ui/button";
import { topVideosData } from "@/src/constants/ContestTopVideosData";
import TopRankCard from "@/src/components/common/TopRankCard";
import RankedListItem from "@/src/components/common/RankedListItem";

const TopVideo = () => {
  return (
    <div className="w-full rounded-xl bg-[#0F0828] p-4 md:p-5 lg:w-1/4">
      {/* Header Section */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-white md:text-xl">Top List</h2>
        <div className="flex items-center gap-2">
          {/* Filter Buttons */}
          <Button variant="filter" size="sm" className="text-white">
            Today
          </Button>
          <Button variant="filter" size="sm" className="text-gray-400">
            Week
          </Button>
          <Button variant="filter" size="sm" className="text-gray-400">
            Month
          </Button>
        </div>
      </div>

      {/* Video List */}
      <div className="flex flex-col gap-3">
        {topVideosData.map((video) =>
          video.rank === 1 ? (
            <TopRankCard key={video.rank} {...video} />
          ) : (
            <RankedListItem key={video.rank} {...video} />
          )
        )}
      </div>
    </div>
  );
};

export default TopVideo;
