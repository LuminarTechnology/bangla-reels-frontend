import { cn } from "@/src/lib/utils";
import { Card, CardContent } from "../../ui/card";
import Image from "next/image";

interface BlogCardProps {
  backgroundImage: string
  topic: string
  title: string
  date: string
  headline: string
  description: string
  className?: string
}

const BlogCard = ({
  backgroundImage,
  topic,
  title,
  date,
  headline,
  description,
  className,
}: BlogCardProps) => {
    return (
      <Card className={cn("w-full max-w-sm overflow-hidden  border-0 bg-[#0B0000]", className)}>
      {/* Image Section with Overlay */}
      <div className="relative aspect-square overflow-hidden rounded-t-xl">
        <Image src={backgroundImage} fill alt={title} className="h-full w-full object-center" />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Topic Tag */}
       <div className="absolute left-3 top-3 bg-[#FF2C2F80] px-3 py-[6px] rounded-[12px] flex items-center justify-center text-base font-semibold text-white">
  {topic}
</div>
      </div>

      {/* Content Section */}
      <CardContent className="space-y-3  p-4 text-white">
        {/* Date */}
        <time className="text-sm text-[#B3B1B0]">{date}</time>

        {/* Headline */}
        <h3 className="text-xl font-semibold  my-3">{headline}</h3>

        {/* Description */}
        <p className="text-xl  ">{description}</p>
      </CardContent>
    </Card>
    );
};

export default BlogCard;