import React from "react";
import Image from "next/image";
import { Eye } from "lucide-react";
import { type TopVideo } from "@/src/constants/contestTopVideosData";

const TopRankCard = ({ rank, poster, title, views }: TopVideo) => {
  return (
    <div className="relative mb-2 w-full overflow-hidden rounded-lg">
      <div className="relative aspect-[400/207] w-full">
        <Image src={poster} alt={title} className="object-cover" fill />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 p-3 text-white">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center rounded-lg bg-white px-4 py-2 text-xl font-bold text-black">
            {rank}
          </span>
          <h3 className="font-semibold">{title}</h3>
        </div>
        <div className="mt-1 ml-12 flex items-center gap-1 text-xs text-gray-300">
          <Eye className="size-4" />
          <span>{views}</span>
        </div>
      </div>
    </div>
  );
};

export default TopRankCard;