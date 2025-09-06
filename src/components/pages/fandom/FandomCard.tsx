import { cn } from "@/src/lib/utils";
import { Card, CardContent } from "../../ui/card";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

interface FandomCardProps {
  backgroundImage: string;
  topic: string;
  title: string;
  date: string;
  headline: string;
  description: string;
  className?: string;
}

const FandomCard = ({
  backgroundImage,
  topic,
  title,
  date,
  headline,
  description,
  className,
}: FandomCardProps) => {
  const lang = useLocale();
  return (
    <Link href={`/${lang}/fandom/${title}`}>
      <Card className={cn("w-full max-w-sm overflow-hidden border-0 bg-[#0F0828] p-0", className)}>
        <div className="relative aspect-square overflow-hidden rounded-t-xl">
          <Image src={backgroundImage} fill alt={title} className="h-full w-full object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-3 left-3 flex items-center justify-center rounded-[12px] bg-[#8C2028] px-3 py-[6px] text-base font-semibold text-white backdrop-blur-3xl">
            {topic}
          </div>
        </div>
        <CardContent className="space-y-3 p-4 text-white">
          <time className="text-sm text-[#B3B1B0]">{date}</time>
          <h3 className="my-3 h-14 text-xl font-semibold">{headline}</h3>
        </CardContent>
      </Card>
    </Link>
  );
};

export default FandomCard;
