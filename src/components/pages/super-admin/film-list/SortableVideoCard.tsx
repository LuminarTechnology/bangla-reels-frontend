import { useSortable } from "@dnd-kit/sortable";
import { VideoFileData } from "./Film.schema";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Menu, RotateCcw, X } from "lucide-react";
import { CSS } from "@dnd-kit/utilities";

export default function SortableVideoCard({
  video,
  index,
  formatFileSize,
  retryUpload,
  removeVideo,
}: {
  video: VideoFileData;
  index: number;
  formatFileSize: (size: number) => string;
  retryUpload: (id: string) => void;
  removeVideo: (id: string) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id: video.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <Card ref={setNodeRef} style={style} className="p-4">
      <div className="flex items-center gap-4">
        <div className="w-8 text-2xl font-bold text-gray-400">{index + 1}</div>

        <div className="h-12 w-20 flex-shrink-0 overflow-hidden rounded bg-gray-200">
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
          <h4 className="truncate font-medium text-gray-900">
            {video.file?.name ?? "Untitled"}
          </h4>

          {/* Status messages */}
          {video.status === "unsupported" && (
            <div className="mt-1 flex items-center gap-1 text-sm text-red-500">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                !
              </div>
              Unsupported file format
            </div>
          )}

          {video.status === "error" && (
            <div className="mt-1 flex items-center gap-1 text-sm text-red-500">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                !
              </div>
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
          <div className="mt-1 flex items-center gap-4 text-sm text-gray-500">
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
              <span className="min-w-[3ch] text-sm text-gray-500">
                {Math.round(video.progress)}%
              </span>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {video.status === "error" && (
            <Button variant="ghost" size="icon" onClick={() => retryUpload(video.id)}>
              <RotateCcw className="h-4 w-4" />
            </Button>
          )}
          <Button variant="ghost" size="icon" onClick={() => removeVideo(video.id)}>
            <X className="h-4 w-4" />
          </Button>
          {/* Drag handle */}
          <Button
            variant="ghost"
            size="icon"
            ref={setActivatorNodeRef}
            {...attributes}
            {...listeners}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
