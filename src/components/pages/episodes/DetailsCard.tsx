"use client"
import { ChevronDown, ChevronRight, Eye, Forward, SquarePlay, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";
import ThumbnailCard from "./ThumbnailCard";


const DetailsCard = ({description, genres}:{description:string, genres:string[]}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const shouldShowSeeMore = description.length > 100;
    const displayText = shouldShowSeeMore && !isExpanded ? description.slice(0, 200) + "..." : description;

    return (
        <div className="mt-8">

              <ThumbnailCard genres={genres} isShowRightIcon/>
              {/* Description */}
              <div className="bg-[#16151A] w-full p-4 rounded-2xl mt-6">
                <h3 className="text-white text-xl font-semibold mb-2">Description</h3>
                <p className="text-sm text-[#B3B1B0] ">{displayText}</p>

                 {shouldShowSeeMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-white text-sm mt-2 hover:text-blue-300 transition-colors cursor-pointer"
          >
            <span>{isExpanded ? "See less" : "See more"}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
          </button>
        )}
              </div>
        </div>
    );
};

export default DetailsCard;