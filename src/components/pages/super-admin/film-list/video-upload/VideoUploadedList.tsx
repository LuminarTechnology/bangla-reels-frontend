import React from "react";
import { VideoFileData } from ".././Film.schema";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableVideoCard from "./SortableVideoCard";

const VideoUploadedList = ({ videos, formatFileSize, retryUpload, removeVideo }: any) => {
  return (
    <div>
      <SortableContext
        items={videos.map((v: VideoFileData) => v.id)}
        strategy={verticalListSortingStrategy}
      >
        {videos.map((video: VideoFileData, index: number) => (
          <SortableVideoCard
            index={index}
            video={video}
            key={video.id}
            formatFileSize={formatFileSize}
            retryUpload={retryUpload}
            removeVideo={removeVideo}
          />
        ))}
      </SortableContext>
    </div>
  );
};

export default VideoUploadedList;
