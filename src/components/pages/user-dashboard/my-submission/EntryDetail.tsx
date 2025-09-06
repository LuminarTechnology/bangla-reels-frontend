'use client'
import { Button } from "@/src/components/ui/button";
import { MyEntryCardProps } from "@/src/constants/MyEntries";
import { Bookmark, Heart, Share2, SquarePen } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface EntryDetailProps {
  entry: MyEntryCardProps;
}

export default function EntryDetail({ entry }: EntryDetailProps) {
  const router = useRouter();
  const filmScr = [1, 2, 3, 4];

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button
          onClick={handleBack}
          variant="ghost"
          className="flex items-center gap-2 text-[#a2a2a2] p-0 hover:text-white hover:bg-transparent font-bold"
        >
          My Submissions
        </Button>
        /
        <span className="text-[#FFFAFA] font-semibold">{entry.title.split(" - ")[1]}</span>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#FFFAFA]">{entry.title}</h1>
        <Button
          className="flex items-center gap-2 bg-[#0f0828] text-[#B3B1B0] p-0"
        >
          <SquarePen className="size-5" />
          Edit
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="min-w-[345px] h-fit flex flex-col gap-2 rounded-xl border-2 border-[#595756] px-6 py-9">
          <div className="mx-auto">
            <Image
              src={entry.poster}
              alt={entry.title}
              width={80}
              height={125}
              className="rounded-lg object-cover"
            />
          </div>

          <div className="space-y-4">
            <div className="grid gap-2">
              <div className="flex items-center">
                <span className="w-32 text-gray-400">Status:</span>
                <span className={`font-semibold ${entry.status === "Approved" ? "text-green-500" :
                  entry.status === "Pending" ? "text-yellow-500" : "text-red-500"
                  }`}>
                  {entry.status}
                </span>
              </div>

              {entry.theme && (
                <div className="flex items-center">
                  <span className="w-32 text-gray-400">Theme:</span>
                  <span className="text-[#FFFAFA]">{entry.theme}</span>
                </div>
              )}

              <div className="flex items-center">
                <span className="w-32 text-gray-400">Uploaded on:</span>
                <span className="text-[#FFFAFA]">{entry.uploadedOn}</span>
              </div>

              {entry.reviewTimeLeft && (
                <div className="flex items-center">
                  <span className="w-32 text-gray-400">Review time left:</span>
                  <span className="text-[#FFFAFA]">{entry.reviewTimeLeft}</span>
                </div>
              )}

              {entry.reason && (
                <div className="flex items-center">
                  <span className="w-32 text-gray-400">Reason:</span>
                  <span className="text-[#FFFAFA]">{entry.reason}</span>
                </div>
              )}

              {entry.status === "Approved" && (
                <div className="flex items-center gap-2 pt-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Bookmark className="size-5" />
                    <span className="text-xs font-semibold">{entry.bookmarks} Bookmarks</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Heart className="size-5" />
                    <span className="text-xs font-semibold">{entry.likes} Likes</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Share2 className="size-5" />
                    <span className="text-xs font-semibold">{entry.shares} Shares</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex-grow space-y-4 rounded-xl border-2 border-[#595756] p-4">
          {
            filmScr.map((film, index) => (
              <div key={index} className="flex gap-4 items-center p-4 rounded-lg border-2 border-[#d7d7d72e]">
                <h1 className="text-lg font-bold mx-8">{index + 1}</h1>
                <Image
                  src={entry.poster}
                  alt={entry.title}
                  width={80}
                  height={125}
                  className="rounded-lg object-cover"
                />
                <p className="text-[#FFFAFA] font-medium">Filmscar Streaming Platform</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}