"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { type Control } from "react-hook-form";
import { useState, useEffect, useMemo, useCallback } from "react";
import { FormInputField } from "@/src/components/forms/FormInputField";
import { closestCorners, DndContext } from "@dnd-kit/core";
import VideosList from "./VideosList";
import { useVideoEditManager } from "./useVideoEditManager";
import EditForm from "./EditForm";

interface EditDetailsProps {
  control: Control<any>;
}

export function EditDetails({ control }: EditDetailsProps) {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);

  const { videos, editDetails, removeVideo, reorderVideos, updateEditDetail } =
    useVideoEditManager(control);
  // console.table(videos);
  // console.table(editDetails);

  // Auto-select first video when videos are loaded and none is selected (delayed to prevent validation errors)
  useEffect(() => {
    if (videos.length > 0 && selectedVideoIndex === null) {
      // Delay selection to prevent initial validation errors
      const timer = setTimeout(() => {
        setSelectedVideoIndex(0);
      }, 100);
      return () => clearTimeout(timer);
    } else if (videos.length === 0) {
      setSelectedVideoIndex(null);
    } else if (selectedVideoIndex !== null && selectedVideoIndex >= videos.length) {
      // If selected index is out of bounds, select the last available video
      setSelectedVideoIndex(videos.length - 1);
    }
  }, [videos.length, selectedVideoIndex]);

  // Memoized current edit data for better performance
  const currentEditData = useMemo(() => {
    if (selectedVideoIndex === null || selectedVideoIndex >= editDetails.length) {
      return null;
    }

    const editDetail = editDetails[selectedVideoIndex];
    const video = videos.find((v) => v.videoId === editDetail?.videoId);

    return {
      editDetail,
      video,
      editIndex: selectedVideoIndex,
      isValid: !!editDetail && !!video,
    };
  }, [selectedVideoIndex, editDetails, videos]);

  const handleRemoveVideo = useCallback(
    (editDetailIndex: number, e: React.MouseEvent) => {
      e.stopPropagation();

      const editDetail = editDetails[editDetailIndex];
      if (!editDetail?.videoId) return;

      removeVideo(editDetail.videoId);

      // Smart selection update
      if (selectedVideoIndex === editDetailIndex) {
        // If removing selected video, select the next one or previous one
        const newIndex =
          editDetailIndex > 0 ? editDetailIndex - 1 : editDetails.length > 1 ? 0 : null;
        setSelectedVideoIndex(newIndex);
      } else if (selectedVideoIndex !== null && selectedVideoIndex > editDetailIndex) {
        // If removing a video before selected one, adjust index
        setSelectedVideoIndex(selectedVideoIndex - 1);
      }
    },
    [editDetails, removeVideo, selectedVideoIndex]
  );

  const handleDragEnd = useCallback(
    (event: any) => {
      const { active, over } = event;
      if (!over || active.id === over.id) return;

      const originalPos = editDetails.findIndex((field) => field.videoId === active.id);
      const newPos = editDetails.findIndex((field) => field.videoId === over.id);

      if (originalPos === -1 || newPos === -1) return;

      reorderVideos(originalPos, newPos);

      // Update selected index after reordering
      if (selectedVideoIndex === originalPos) {
        setSelectedVideoIndex(newPos);
      } else if (selectedVideoIndex === newPos) {
        setSelectedVideoIndex(
          originalPos > newPos ? selectedVideoIndex + 1 : selectedVideoIndex - 1
        );
      } else if (selectedVideoIndex !== null) {
        // Adjust selected index based on the move direction
        if (
          originalPos < newPos &&
          selectedVideoIndex > originalPos &&
          selectedVideoIndex <= newPos
        ) {
          setSelectedVideoIndex(selectedVideoIndex - 1);
        } else if (
          originalPos > newPos &&
          selectedVideoIndex >= newPos &&
          selectedVideoIndex < originalPos
        ) {
          setSelectedVideoIndex(selectedVideoIndex + 1);
        }
      }
    },
    [editDetails, reorderVideos, selectedVideoIndex]
  );

  if (!control) {
    return <div>Error: Form control is required</div>;
  }
  // console.log(selectedVideoIndex);

  // console.table(videos);
  // console.table(editDetails);
  return (
    <div className="grid h-full grid-cols-1 gap-6 pb-6 lg:grid-cols-2">
      {/* Left Panel - Edit Form */}
      <Card className="h-full p-0">
        <CardContent className="space-y-6 p-4">
          {(videos.length > 0 && currentEditData !== null && selectedVideoIndex !== null) && (
            <EditForm
              control={control}
              currentEditData={currentEditData}
              selectedVideoIndex={selectedVideoIndex}
              updateEditDetail={updateEditDetail}
            />
          )}
        </CardContent>
      </Card>

      {/* Right Panel - Episode List */}
      <Card className="h-full gap-0 p-0">
        <CardHeader className="p-4 pb-0">
          <CardTitle className="text-lg font-medium">
            List of Episodes {videos.length > 0 && `(${videos.length})`}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="space-y-3">
            {videos.length > 0 ? (
              <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                <VideosList
                  videos={videos}
                  handleRemoveVideo={handleRemoveVideo}
                  selectedVideoIndex={selectedVideoIndex}
                  setSelectedVideoIndex={setSelectedVideoIndex}
                  editFields={editDetails}
                />
              </DndContext>
            ) : (
              <div className="py-8 text-center">
                <p className="text-muted-foreground">No videos uploaded yet</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
