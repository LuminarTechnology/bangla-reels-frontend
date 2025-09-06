import { useSortable } from "@dnd-kit/sortable";
import { VideoFileData } from "@/src/schema/FilmList.schema";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Menu, RotateCcw, SquareX } from "lucide-react";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";
import { cn } from "@/src/lib/utils";

export default function SortableVideoCard({
  video,
  index,
  retryUpload,
  removeVideo,
  theme,
}: {
  video: VideoFileData;
  index: number;
  retryUpload: (id: string) => void;
  removeVideo: (id: string) => void;
  theme: "dashboard" | "contest";
}) {
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition } =
    useSortable({ id: video.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const formatFileSize = (bytes: number) => {
    if (!bytes || bytes < 0 || isNaN(bytes)) return "0 Bytes";

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.min(Math.floor(Math.log(bytes) / Math.log(k)), sizes.length - 1);

    const size = bytes / Math.pow(k, i);
    return `${size.toFixed(1)} ${sizes[i]}`;
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className="bg-transparents rounded-2xl p-2 shadow-none md:p-4"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center md:gap-4">
        {/* Index number (hidden on mobile, shown on sm+) */}
        <div className="hidden w-4 text-2xl font-bold text-gray-500 sm:block">{index + 1}</div>

        {/* Thumbnail */}
        <div className="h-40 w-full flex-shrink-0 overflow-hidden rounded-2xl bg-gray-200 sm:h-[125px] sm:w-24">
          {video.thumbnail ? (
            <img
              src={video.thumbnail}
              alt="Video thumbnail"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gray-300" />
          )}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          {/* File name */}
          <h4
            className={`truncate font-medium ${theme === "contest" ? "text-white" : "text-gray-900"}`}
          >
            {video.file?.name ?? "Untitled"}
          </h4>

          {/* Status messages */}
          {video.status === "unsupported" && (
            <div className="mt-1 flex items-center gap-1 text-sm text-red-500">
              <Image src="/icons/information-square.png" alt="" width={20} height={20} />
              Unsupported file format
            </div>
          )}

          {video.status === "error" && (
            <div className="mt-1 flex items-center gap-1 text-sm text-red-500">
              <Image src="/icons/information-square.svg" alt="" width={20} height={20} />
              {video.error}
            </div>
          )}

          {video.status === "uploading" && (
            <div className="mt-1 text-sm text-blue-500">Uploading...</div>
          )}

          {video.status === "completed" && (
            <div className="mt-1 text-sm text-green-500">Upload completed</div>
          )}

          {/* File info */}
          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[#B3B1B0] sm:text-sm">
            <span>{video.file?.type?.split?.("/")?.[1]?.toUpperCase?.() ?? "N/A"}</span>
            <span>•</span>
            <span>{formatFileSize(video.file?.size ?? 0)}</span>
            {video.duration && (
              <>
                <span>•</span>
                <span>{video.duration}</span>
              </>
            )}
            {video.resolution && (
              <>
                <span>•</span>
                <span className="text-red-500">{video.resolution}</span>
              </>
            )}
          </div>

          {/* Progress bar */}
          {video.status === "uploading" && (
            <div className="mt-2 flex items-center gap-2">
              <div className="h-2 flex-1 rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${video.progress}%` }}
                />
              </div>
              <span className="min-w-[3ch] text-xs text-gray-500 sm:text-sm">
                {Math.round(video.progress)}%
              </span>
            </div>
          )}
        </div>

        {/* Actions (move to bottom row on mobile) */}
        <div className="mt-2 flex flex-row gap-2">
          {video.status === "error" && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => retryUpload(video.videoId)}
              className={cn(theme === "contest" ? "hover:bg-[#080417]" : "")}
            >
              <Image
                src={`${theme === "contest" ? "/icons/ArrowCounterClockwise.png" : "/icons/ArrowCounterClockwise.svg"}`}
                alt="retry"
                width={24}
                height={24}
              />
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeVideo(video.id)}
            className={cn(theme === "contest" ? "hover:bg-[#080417]" : "")}
          >
            <Image
              src={`${theme === "contest" ? "/icons/cancel-square.png" : "/icons/cancel-square.svg"}`}
              alt="delete"
              width={24}
              height={24}
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            ref={setActivatorNodeRef}
            {...attributes}
            {...listeners}
            className={cn(theme === "contest" ? "hover:bg-[#080417]" : "")}
          >
            <Image
              src={`${theme === "contest" ? "/icons/menu-09.png" : "/icons/menu-09.svg"}`}
              alt="drag"
              width={24}
              height={24}
            />
          </Button>
        </div>
      </div>
    </Card>
  );
}
