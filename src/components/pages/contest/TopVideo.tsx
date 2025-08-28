import React from "react";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Eye, ArrowUp, ArrowDown } from "lucide-react";
import {topVideosData} from "@/src/constants/contestTopVideosData"


const TopVideo = () => {
  return (
    <div className="w-full rounded-xl bg-black p-4 md:p-5 lg:w-1/4">
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
            <div key={video.rank} className="relative mb-2 w-full overflow-hidden rounded-lg">
              <div className="relative aspect-[400/207] w-full">
                <Image src={video.poster} alt={video.title} className="object-cover" fill />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-3 text-white">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center rounded-lg bg-white px-4 py-2 text-xl font-bold text-black">
                    {video.rank}
                  </span>
                  <h3 className="font-semibold">{video.title}</h3>
                </div>
                <div className="mt-1 ml-12 flex items-center gap-1 text-xs text-gray-300">
                  <Eye className="size-4" />
                  <span>{video.views}</span>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={video.rank}
              className="flex items-center gap-3 rounded-lg border border-white/10 p-2"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10 text-base font-bold text-gray-300">
                {video.rank}
              </div>

              <Image
                src={video.poster}
                alt={video.title}
                width={48}
                height={48}
                className="size-12 rounded-md object-cover"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-white">{video.title}</h3>
                <div className="mt-1 flex items-center gap-1 text-xs text-gray-400">
                  <Eye className="size-3" />
                  <span>{video.views}</span>
                </div>
              </div>
              {video.status === "up" && <ArrowUp className="size-5 text-green-500" />}
              {video.status === "down" && <ArrowDown className="size-5 text-red-500" />}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TopVideo;
