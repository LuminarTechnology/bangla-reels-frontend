import React from "react";
import { VideoFileData } from "@/src/schema/FilmList.schema";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableVideoCard from "./SortableVideoCard";

const VideoUploadedList = ({ videos, retryUpload, removeVideo, theme }: any) => {
  // console.log(videos);
  return (
    <div className="space-y-6">
      <SortableContext
        items={videos.map((v: VideoFileData) => v.id)}
        strategy={verticalListSortingStrategy}
      >
        {videos.map((video: VideoFileData, index: number) => (
          <SortableVideoCard
            index={index}
            video={video}
            key={video.id}
            retryUpload={retryUpload}
            removeVideo={removeVideo}
            theme={theme}
          />
        ))}
      </SortableContext>
    </div>
  );
};

export default VideoUploadedList;
