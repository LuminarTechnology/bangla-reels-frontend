import { Button } from "@/src/components/ui/button";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import React from "react";

const VideoCard = ({
  index,
  video,
  handleRemoveVideo,
  setSelectedVideoIndex,
  isSelected,
  editDetail,
}: any) => {
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition } =
    useSortable({ id: video.videoId });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  // console.log(editDetail);
  return (
    <div
      ref={setNodeRef}
      style={style}
      key={video.videoId}
      onClick={() => setSelectedVideoIndex(index)}
      className={`flex cursor-pointer items-center gap-4 rounded-lg border p-4 transition-colors ${
        isSelected ? "bg-primary/10 border-primary/20" : "bg-muted/50 hover:bg-muted/70"
      }`}
    >
      <div className="w-8 flex-shrink-0 text-center">
        <span className="text-muted-foreground text-lg font-medium">{index + 1}</span>
      </div>

      <div className="flex-shrink-0">
        <Image
          src={video.thumbnail || "/placeholder.svg?height=60&width=60&query=video thumbnail"}
          alt={`Episode ${index + 1}`}
          width={60}
          height={60}
          className="rounded-md object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-medium">
          {video.file.name || `Episode ${index + 1}`}
        </h3>
        <p className="text-muted-foreground truncate text-sm">
          {video.resolution} • {video.duration}
        </p>
        <div className="mt-1 flex items-center gap-2">
          <div
            className={`h-2 w-2 rounded-full ${
              video.status === "completed"
                ? "bg-green-500"
                : video.status === "processing"
                  ? "bg-yellow-500"
                  : "bg-gray-400"
            }`}
          />
          <span className="text-muted-foreground text-xs capitalize">{video.status}</span>
          {video.progress > 0 && video.status === "processing" && (
            <span className="text-muted-foreground text-xs">({video.progress}%)</span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={(e) => handleRemoveVideo(index, e)}
          className="hover:bg-destructive/10 hover:text-destructive h-8 w-8 p-0"
          aria-label={`Remove Episode ${index + 1}`}
        >
          <X className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0"
          aria-label={`Reorder Episode ${index + 1}`}
          ref={setActivatorNodeRef}
          {...attributes}
          {...listeners}
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default VideoCard;
