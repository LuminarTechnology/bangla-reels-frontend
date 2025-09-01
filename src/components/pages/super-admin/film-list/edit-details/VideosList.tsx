import React from "react";
import { editDetailsData, VideoFileData } from "../Film.schema";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import VideoCard from "./VideoCard";

const VideosList = ({
  videos,
  handleRemoveVideo,
  selectedVideoIndex,
  setSelectedVideoIndex,
  editFields,
}: any) => {
  console.log(videos);
  const sortableItems = editFields.map((field: editDetailsData) => field.videoId);
  return (
    <SortableContext items={sortableItems} strategy={verticalListSortingStrategy}>
      {editFields.map((editDetail: editDetailsData, index: number) => {
        const video = videos.find((v:VideoFileData) => v.id === editDetail.videoId)
        if(!video) return null;
        const isSelected = selectedVideoIndex === index;

        return (
          <VideoCard
            index={index}
            video={video}
            key={video.id}
            handleRemoveVideo={handleRemoveVideo}
            setSelectedVideoIndex={setSelectedVideoIndex}
            isSelected={isSelected}
            editDetail={editDetail}
          />
        );
      })}
    </SortableContext>
  );
};

export default VideosList;
