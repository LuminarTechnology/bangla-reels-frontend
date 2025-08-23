import Image from "next/image";
import { Card } from "../ui/card";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { Play } from "lucide-react";

interface PosterCardProps {
  title: string;
  posterImage: string;
  category?: string;
  duration?: string; // optional duration
  watchedProgress?: number; // 0 to 100
  episodes?: string; // EP1 / EP71
  className?: string;
  link?: string;
}

export function PosterCard({
  title,
  posterImage,
  category = "TV SERIES",
  duration,
  watchedProgress = 0,
  episodes,
  className = "",
  link = "episode",
}: PosterCardProps) {
  return (
    <Card
      className={cn(
        "relative group max-w-[250px] gap-0 overflow-hidden border-none bg-transparent p-0 shadow-none",
        className
      )}
    >
      <Link href={`/${link}/${title}`}>
        <div className="relative aspect-[4/5] cursor-pointer overflow-hidden rounded-[8px]">
          <Image
            src={posterImage}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity">
            <div className='bg-primary-rose p-4 rounded-full'>
              <Play />
            </div>
          </div>
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <p className="rounded-[12px] bg-[#F3F4F680] px-3 py-1.5 text-xs text-gray-900 font-semibold backdrop-blur-[2px]">
              {category}
            </p>
          </div>

          {/* Duration Badge */}
          {/* {duration && (
            <div className="absolute bottom-3 left-3">
              <span className="rounded-[12px] bg-[#00000080] px-2 py-1 text-xs font-semibold text-white">
                {duration}
              </span>
            </div>
          )} */}


          {/* Watched Progress Bar */}
          {watchedProgress > 0 && (
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-600">
              <div className="h-1 bg-red-500" style={{ width: `${watchedProgress}%` }} />
            </div>
          )}
        </div>

        {/* Title & Episodes */}
        <div className="px-1 pt-3">
          <h3 className="text-xl leading-tight font-bold text-[#FFFAFA]">
            {title}
          </h3>
          {episodes && <p className="mt-1 text-sm text-gray-400">{episodes}</p>}
        </div>
      </Link>
      {/* Copy Button */}
      <div className="absolute top-3 right-3 cursor-pointer transition">
        <Image src={"/icons/copy-plus.png"} alt="Copy" width={28} height={28} />
      </div>
    </Card>
  );
}
