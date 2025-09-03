import React from "react";
import Image from "next/image";
import { Eye, ArrowUp, ArrowDown } from "lucide-react";
import { type TopVideo } from "@/src/constants/ContestTopVideosData";

const RankedListItem = ({ rank, poster, title, views, status }: TopVideo) => {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-white/10 p-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10 text-base font-bold text-gray-300">
        {rank}
      </div>
      <Image
        src={poster}
        alt={title}
        width={48}
        height={48}
        className="size-12 rounded-md object-cover"
      />
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <div className="group mt-1 flex cursor-pointer items-center gap-1 text-xs text-gray-400">
          <Eye className="size-3 transition-colors group-hover:text-red-500" />
          <span className="transition-colors group-hover:text-red-500">{views}</span>
        </div>
      </div>
      {status === "up" && <ArrowUp className="size-5 text-green-500" />}
      {status === "down" && <ArrowDown className="size-5 text-red-500" />}
    </div>
  );
};

export default RankedListItem;
