import { CopyPlus, Play } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";

interface StreamingCardProps {
  title: string;
  description: string;
  genres: string[];
  type: string;
  imageUrl: string;
}

export function StreamingCard({ title, description, genres, type, imageUrl }: StreamingCardProps) {
  return (
    <div className="relative w-full bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border flex gap-4 p-4">
      {/* Poster Image */}
      <div className="w-3/7 relative">
        <Image
          src={imageUrl}
          alt={title}
          width={165}
          height={362}
          className="w-full h-[362px] object-cover rounded-[8px]"
        />
        {/* Type Badge - positioned over image */}
        <Badge
          variant="secondary"
          className="absolute top-3 left-3 bg-slate-800/90 text-white border-0 text-xs font-medium backdrop-blur-sm"
        >
          {type}
        </Badge>
      </div>

      {/* Content Section */}
      <div className="w-4/7 space-y-4">
        <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>

        <div className="absolute top-3 right-3 cursor-pointer">
          <Image src={"/images/icons/copy-plus.png"} alt="Copy" width={32} height={32} />
        </div>

        <p className="text-slate-300 text-sm leading-relaxed line-clamp-10">{description}</p>

        <div className="flex flex-wrap gap-1.5">
          {genres.map((genre, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs text-slate-300 border-slate-600 bg-slate-800/50 hover:bg-slate-700/50"
            >
              {genre}
            </Badge>
          ))}
        </div>

        <Button className="w-full bg-primary-rose hover:bg-primary-rose-hover text-white font-semibold py-2.5 rounded-lg transition-all duration-200 transform hover:scale-105">
          <Play className="w-4 h-4 mr-2 fill-current" />
          PLAY
        </Button>
      </div>
    </div>
  );
}
