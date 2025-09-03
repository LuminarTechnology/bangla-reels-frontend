import { useSortable } from "@dnd-kit/sortable";
import { VideoFileData } from "@/src/schema/FilmList.schema";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Menu, RotateCcw, SquareX } from "lucide-react";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";

export default function SortableVideoCard({
  video,
  index,
  retryUpload,
  removeVideo,
}: {
  video: VideoFileData;
  index: number;
  retryUpload: (id: string) => void;
  removeVideo: (id: string) => void;
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
    <Card ref={setNodeRef} style={style} className="p-4 shadow-none rounded-2xl">
      <div className="flex items-center gap-4">
        <div className="w-8 text-2xl font-bold">{index + 1}</div>

        <div className="h-[125px] w-20 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-200">
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

        <div className="min-w-0 flex-1">
          <h4 className="truncate font-medium text-gray-900">{video.file?.name ?? "Untitled"}</h4>

          {/* Status messages */}
          {video.status === "unsupported" && (
            <div className="mt-1 flex items-center gap-1 text-sm text-red-500">
              <Image
                src={"/icons/information-square.png"}
                alt="information-square"
                width={24}
                height={24}
              />
              Unsupported file format
            </div>
          )}

          {video.status === "error" && (
            <div className="mt-1 flex items-center gap-1 text-sm text-red-500">
              <Image
                src={"/icons/information-square.svg"}
                alt="information-square"
                width={24}
                height={24}
              />
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
          <div className="mt-1 flex items-center gap-4 text-sm text-[#B3B1B0]">
            <span>{video.file?.type?.split?.("/")?.[1]?.toUpperCase?.() ?? "N/A"}</span>
            <span>•</span>
            <span>{formatFileSize(video.file?.size ?? 0)}</span>
          </div>
          <div className="mt-1 flex items-center gap-4 text-sm text-[#B3B1B0]">
            {video.duration && (
              <>
                <span>{video.duration}</span>
              </>
            )}
            {video.resolution && (
              <>
                <span className="text-red-500">•</span>
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
              <span className="min-w-[3ch] text-sm text-gray-500">
                {Math.round(video.progress)}%
              </span>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {video.status === "error" && (
            <Button variant="ghost" size="icon" onClick={() => retryUpload(video.videoId)}>
              <Image
                src={"/icons/ArrowCounterClockwise.svg"}
                alt="retry-icon"
                width={30}
                height={30}
              />
            </Button>
          )}
          <Button variant="ghost" size="icon" onClick={() => removeVideo(video.id)}>
            <Image
                src={"/icons/cancel-square.svg"}
                alt="information-square"
                width={30}
                height={30}
              />
          </Button>
          {/* Drag handle */}
          <Button
            variant="ghost"
            size="icon"
            ref={setActivatorNodeRef}
            {...attributes}
            {...listeners}
          >
            <Image
              src={"/icons/menu-09.svg"}
              alt="drag icon"
              width={30}
              height={30}
            />
          </Button>
        </div>
      </div>
    </Card>
  );
}
