import React from "react";
import Image from "next/image";
import { Button, statusVariants } from "@/src/components/ui/button";
import { MoreHorizontal, Bookmark, Heart, Share2 } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { MyEntryCardProps} from "@/src/constants/MyEntries";



const DetailRow = ({ label, value, status }: { label: string; value: string; status?: "Approved" | "Pending" | "Rejected" }) => (
  <>
    <span className="text-gray-400">{label}</span>
    <span className="text-gray-400">:</span>
    <span className={cn("text-gray-300", label === "Review Status" && statusVariants({ status }))}>
      {value}
    </span>
  </>
);

const MyEntryCard = ({
  title,
  poster,
  status,
  theme,
  uploadedOn,
  reviewTimeLeft,
  reason,
  bookmarks,
  likes,
  shares,
}: MyEntryCardProps) => {
  return (
    <div className="flex max-w-xs flex-col gap-6 rounded-xl border border-white/10 bg-[#1C162E] p-4">
      <h3 className="text-center text-lg font-bold text-white">{title}</h3>
      
      <div className="mx-auto">
        <Image
          src={poster}
          alt={title}
          width={80}
          height={125}
          className="rounded-lg object-cover"
        />
      </div>

      {status === "Approved" && (
        <div className="flex items-center justify-center gap-4 text-gray-300">
          <div className="flex items-center gap-1.5">
            <Bookmark className="size-4" /> <span className="text-xs">{bookmarks}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Heart className="size-4" /> <span className="text-xs">{likes}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Share2 className="size-4" /> <span className="text-xs">{shares}</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-[max-content_auto_1fr] gap-x-2 gap-y-1 text-sm">
        <DetailRow label="Review Status" value={status} status={status} />
        {status === "Rejected" && reason && (
          <DetailRow label="Reason" value={reason} />
        )}

        {status !== "Rejected" && (
          <>
            <DetailRow label="Theme" value={theme} />
            <DetailRow label="Uploaded on" value={uploadedOn} />
          </>
        )}
        
        {status === "Pending" && reviewTimeLeft && (
          <DetailRow label="Review time left" value={reviewTimeLeft} />
        )}
      </div>

      <div className="mt-auto flex items-center gap-4 pt-2">
        <Button variant="danger" className="h-12 flex-grow">
          View Details
        </Button>
        <Button variant="danger" size="icon" className="h-12 w-12 flex-shrink-0">
          <MoreHorizontal />
        </Button>
      </div>
    </div>
  );
};

export default MyEntryCard;