"use client";
import { ChevronDown, ChevronRight, Eye, Forward, SquarePlay, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ThumbnailCard from "./ThumbnailCard";

const DetailsCard = ({ description, genres }: { description: string; genres: string[] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldShowSeeMore = description.length > 100;
  const displayText =
    shouldShowSeeMore && !isExpanded ? description.slice(0, 200) + "..." : description;

  return (
    <div className="mt-8">
      <ThumbnailCard genres={genres} isShowRightIcon />
      {/* Description */}
      <div className="mt-6 w-full rounded-2xl bg-[#16151A] p-4">
        <h3 className="mb-2 text-xl font-semibold text-white">Description</h3>
        <p className="text-sm text-[#B3B1B0]">{displayText}</p>

        {shouldShowSeeMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 flex cursor-pointer items-center gap-1 text-sm text-white transition-colors hover:text-blue-300"
          >
            <span>{isExpanded ? "See less" : "See more"}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default DetailsCard;
