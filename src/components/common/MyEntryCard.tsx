'use client';
import React from "react";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Bookmark, Heart, Share2, EllipsisVertical } from "lucide-react";
import { MyEntryCardProps } from "@/src/constants/MyEntries";
import { DetailRow } from "../pages/user-dashboard/my-submission/DetailRow";
import { useRouter } from "next/navigation";

const MyEntryCard = ({
  id,
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
  const router = useRouter();

const handleViewDetails = () => {
    const pathParts = window.location.pathname.split('/');
    const locale = pathParts[1];
    router.push(`/${locale}/dashboard/my-submission/${id}`);
  };

  return (
    <div className="flex w-full flex-col gap-6 rounded-xl border-2 border-[#595756] p-4">
      <h3 className="text-base font-semibold text-[#FFFAFA]">{title}</h3>

      <div className="flex gap-4">
        <div className="">
          <Image
            src={poster}
            alt={title}
            width={80}
            height={125}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Status  */}
        <div className="grid grid-cols-[max-content_auto_1fr] gap-x-2 gap-y-1 text-sm">
          <DetailRow label="Review Status" value={status} status={status} />

          {status !== "Rejected" && (
            <>
              <DetailRow label="Theme" value={theme} />
              <DetailRow label="Uploaded on" value={uploadedOn} />
            </>
          )}

          {status === "Rejected" && reason && (
            <>
              <DetailRow label="Uploaded on" value={uploadedOn} />
              <DetailRow label="Reason" value={reason} />
            </>
          )}

          {status === "Pending" && reviewTimeLeft && (
            <DetailRow label="Review time left" value={reviewTimeLeft} />
          )}

          {status === "Approved" && (
            <div className="flex items-center justify-center gap-4 text-gray-300">
              <div className="flex items-center gap-1.5">
                <Bookmark className="size-4" /> <span className="text-xs font-bold">{bookmarks}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="size-4" /> <span className="text-xs font-bold">{likes}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Share2 className="size-4" /> <span className="text-xs font-bold">{shares}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-auto flex items-center gap-4 pt-2">
        <Button 
          onClick={handleViewDetails}
          className="h-12 flex-grow text-primary-rose bg-[#0f0828] hover:bg-[#0f0828] border rounded-xl border-primary-rose"
        >
          View Details
        </Button>
        <Button size="icon" className="text-primary-rose bg-[#0f0828] hover:bg-[#0f0828] flex-shrink-0">
          <EllipsisVertical className="size-6" />
        </Button>
      </div>
    </div>
  );
};

export default MyEntryCard;