import Image from "next/image"
import { Card } from "../ui/card"
import { CopyPlus } from "lucide-react"
import { cn } from "@/src/lib/utils"


interface PosterCardProps {
  title: string
  posterImage: string
  category?: string
  className?: string
}

export function PosterCard({ title, posterImage, category = "TV SERIES", className = "" }: PosterCardProps) {
  return (
        <Card className={cn("bg-transparent max-w-[200px] border-none overflow-hidden group cursor-pointer p-0 gap-0 shadow-none", className)}>
      {/* Poster Image Section */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[8px]">
        <Image
          src={posterImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Category Tag - Top Left */}
        <div className="absolute top-3 left-3">
          <span className="bg-[#F3F4F680] backdrop-blur-[2px]  text-xs font-medium px-2 py-1 rounded-[12px]">
            {category}
          </span>
        </div>

        {/* Plus Button - Top Right */}
        <div className="absolute top-3 right-3">
          <button className="bg-[#F3F4F680] backdrop-blur-[2px] w-8 h-8 rounded-full flex items-center justify-center transform rotate-270 cursor-pointer">
            <CopyPlus color="#f8f7f7" size={16}/>
          </button>
        </div>
      </div>

      {/* Title Section */}
      <div className="pt-3 px-1">
        <h3 className="text-white font-bold  text-xl leading-tight group-hover:text-purple-300 transition-colors">
          {title}
        </h3>
      </div>
    </Card>
  )
}
