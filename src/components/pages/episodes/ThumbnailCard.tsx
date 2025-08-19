import { ChevronRight, Forward, SquarePlay } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Button } from '../../ui/button';



interface ThumbnailCardProps {
    genres?: string[];
    description?: string;
    isShowRightIcon?: boolean;
}
const ThumbnailCard = ({genres, description, isShowRightIcon=false}: ThumbnailCardProps) => {
    return (
        <div className="flex gap-4">
        {/* Episode Thumbnail */}
        <div className="relative">
          <Image
            src="/images/Poster 4.png"
            alt="Episode Thumbnail"
            width={132}
            height={168}
            className="rounded-[8px] object-cover"
          />
         
        </div>

        {/* Right side */}
        <div className="flex-1 text-white">
          <div className="flex items-center  gap-1 mb-2">
            <h2 className="text-2xl font-bold">Collateral Hearts</h2>
            {isShowRightIcon && (
              <ChevronRight className="w-5 h-5  cursor-pointer" />
            )}
          </div>

         {genres && (
             <div className="flex items-center space-x-2 text-sm mb-3 flex-wrap">
            {genres?.map((genre) => (
              <Button variant="default" key={genre} className={`text-[#9CA3AF] px-3 py-1 rounded-md `}>
                {genre}
              </Button>
            ))}
          </div>
         )}

          <div className="flex items-center space-x-4 text-sm text-gray-300 mb-2">
            <span>2025-04-11</span>
            <span>•</span>
            <span>Torturedlove</span>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-300">
            <div className="flex items-center gap-1">
              <SquarePlay className="w-4 h-4" />
              <span>56.6k</span>
            </div>
            <div className="flex items-center gap-1">
            
              <Forward className="w-4 h-4" />
              <span>3.2k</span>
            </div>
          </div>


            {description && <p className='text-[#B3B1B0] text-sm'>{description?.slice(0, 100)}...</p>}
        </div>
      </div>
    );
};

export default ThumbnailCard;