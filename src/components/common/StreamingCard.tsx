import { CopyPlus, Play } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";

interface StreamingCardProps {
  title: any;
  description: any;
  genres: string[];
  type: string;
  imageUrl: string;
  play: string;
}

export function StreamingCard({
  title,
  description,
  genres,
  type,
  imageUrl,
  play,
}: StreamingCardProps) {
  return (
    <div className="relative flex w-full gap-4 overflow-hidden rounded-2xl bg-[#0F0828] p-4 shadow-2xl">
      {/* Poster Image */}
      <div className="relative w-3/7">
        <Image
          src={imageUrl}
          alt={title}
          width={165}
          height={362}
          className="h-[362px] w-full rounded-[8px] object-cover"
        />
        {/* Type Badge - positioned over image */}
        <Badge
          variant="secondary"
          className="absolute top-3 left-3 border-0 bg-slate-800/90 text-xs font-medium text-white backdrop-blur-sm"
        >
          {type}
        </Badge>
      </div>

      {/* Content Section */}
      <div className="w-4/7 space-y-4">
        <h3 className="text-xl leading-tight font-bold text-white">{title}</h3>

        <div className="absolute top-3 right-3 cursor-pointer">
          <Image src={"/icons/copy-plus.png"} alt="Copy" width={32} height={32} />
        </div>

        <p className="line-clamp-10 text-sm leading-relaxed text-slate-300">{description}</p>

        <div className="flex flex-wrap gap-1.5">
          {genres.map((genre, index) => (
            <Badge
              key={index}
              variant="outline"
              className="border-slate-600 bg-slate-800/50 text-xs text-slate-300 hover:bg-slate-700/50"
            >
              {genre}
            </Badge>
          ))}
        </div>

        <Button className="bg-primary-rose hover:bg-primary-rose-hover w-full transform rounded-lg py-2.5 font-semibold text-white transition-all duration-200 hover:scale-105">
          <Play className="mr-2 h-4 w-4 fill-current" />
          {play}
        </Button>
      </div>
    </div>
  );
}
