import React from "react";
import Image from "next/image";
import { Eye, Heart, MessageSquare } from "lucide-react";
import { Entry } from "@/src/constants/contestEntries";

const EntryCard = ({
  title,
  poster,
  tags,
  authorAvatar,
  authorName,
  description,
  views,
  likes,
  comments,
}: Entry) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 rounded-xl border border-white/10 bg-[#1C162E] p-4">
      
      {/* Left Column: Poster Image */}
      <div className="relative w-full sm:w-2/5 flex-shrink-0 aspect-[3/4]">
        <Image
          src={poster}
          alt={title}
          fill
          className="rounded-lg object-cover"
        />
      </div>

      {/* Right Column: Card Content */}
      <div className="flex w-full sm:w-3/5 flex-col justify-between">
        
        {/* Top section of text content */}
        <div className="flex flex-col gap-4">
          <div className="lg:space-y-3">
            <h3 className="text-lg font-bold leading-tight text-white">{title}</h3>
            <p className="text-sm text-gray-400">{tags}</p>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src={authorAvatar}
              alt={authorName}
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
            <span className="text-sm text-gray-300">{authorName}</span>
          </div>

          <p className="line-clamp-2 text-sm text-gray-400">{description}</p>
        </div>

        {/* Bottom section: Stats */}
        <div className="mt-2 flex items-center gap-4 border-t border-white/10 pt-2 text-gray-400">
          <div className="flex items-center gap-1.5">
            <Eye className="size-4" />
            <span className="text-xs">{views}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Heart className="size-4" />
            <span className="text-xs">{likes}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MessageSquare className="size-4" />
            <span className="text-xs">{comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryCard;