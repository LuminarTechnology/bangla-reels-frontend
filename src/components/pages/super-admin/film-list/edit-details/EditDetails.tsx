"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { X, Menu } from "lucide-react";
import Image from "next/image";
import { type Control, useFieldArray, useWatch } from "react-hook-form";
import { useState, useEffect, useMemo, useCallback } from "react";
import { FormInputField } from "@/src/components/forms/FormInputField";
import { editDetailsData, FilmFormData, VideoFileData } from ".././Film.schema";
import { closestCorners, DndContext } from "@dnd-kit/core";
import VideosList from "./VideosList";
import { arrayMove } from "@dnd-kit/sortable";

interface EditDetailsProps {
  control: Control<any>;
}

export function EditDetails({ control }: EditDetailsProps) {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(0);
  const [isProcessingDuplicates, setIsProcessingDuplicates] = useState(false);

  const {
    fields: editFields,
    append: appendEdit,
    remove: removeEdit,
    update: updateEdit,
    replace,
  } = useFieldArray<FilmFormData, "editDetails">({
    control,
    name: "editDetails",
  });

  const watchedVideos = useWatch({ control, name: "videos" });
  const videos = useMemo(() => watchedVideos || [], [watchedVideos]);

  // Sync editDetails with videos
  useEffect(() => {
    if (videos.length === 0) return;

    // Add editDetails for new videos
    videos.forEach((video: VideoFileData, index: number) => {
      const existingEditDetail = editFields.find((field) => field.videoId === video.id);

      if (!existingEditDetail) {
        console.log("Putting new details");
        appendEdit({
          videoId: video.id,
          title: `Episode ${index + 1}`,
          description: "",
          tags: "",
        });
      }
    });

    // Remove orphaned editDetails (videos that no longer exist)
    editFields.forEach((editField, index) => {
      const videoExists = videos.some((video: VideoFileData) => video.id === editField.videoId);
      if (!videoExists) {
        removeEdit(index);
      }
    });
  }, [videos, appendEdit, removeEdit]);

  // Add this useEffect to remove duplicates
  useEffect(() => {
    if (editFields.length <= 1) return; // No duplicates possible with 0 or 1 items

    const seenVideoIds = new Set<string>();
    const duplicateIndices: number[] = [];

    editFields.forEach((editField, index) => {
      if (seenVideoIds.has(editField.videoId)) {
        duplicateIndices.push(index);
      } else {
        seenVideoIds.add(editField.videoId);
      }
    });

    // Remove duplicates in reverse order to maintain correct indices
    if (duplicateIndices.length > 0) {
      console.log(`Removing ${duplicateIndices.length} duplicate editDetails`);
      duplicateIndices.reverse().forEach((index) => {
        removeEdit(index);
      });

      setTimeout(() => {
        setIsProcessingDuplicates(false);
      }, 0);
    }
  }, [editFields, removeEdit]);

  const currentEditDetail = selectedVideoIndex !== null ? editFields[selectedVideoIndex] : null;
  const currentVideo = currentEditDetail
    ? videos.find((video: VideoFileData) => video.id === currentEditDetail.videoId)
    : null;
  const currentEditIndex = selectedVideoIndex;
  console.log(currentEditDetail, currentVideo, currentEditIndex);

  const handleRemoveVideo = (editDetailIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    removeEdit(editDetailIndex);

    // Update selected index
    if (selectedVideoIndex === editDetailIndex) {
      setSelectedVideoIndex(null);
    } else if (selectedVideoIndex !== null && selectedVideoIndex > editDetailIndex) {
      setSelectedVideoIndex(selectedVideoIndex - 1);
    }
  };

  const getVideoPos = useCallback(
    (videoId: string) => {
      return editFields.findIndex((field) => field.videoId === videoId);
    },
    [editFields]
  );

  const handleDragEnd = useCallback(
    (event: any) => {
      const { active, over } = event;

      if (!over || active.id === over.id) return;

      const originalPos = getVideoPos(active.id);
      const newPos = getVideoPos(over.id);

      if (originalPos === -1 || newPos === -1) return;

      // Move both editDetails and update the videos order reference
      const reorderedEditDetails = arrayMove([...editFields], originalPos, newPos);
      replace(reorderedEditDetails);

      // Also update the selected index if needed
      if (selectedVideoIndex === originalPos) {
        setSelectedVideoIndex(newPos);
      } else if (selectedVideoIndex === newPos) {
        setSelectedVideoIndex(originalPos);
      } else if (selectedVideoIndex !== null) {
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
    [getVideoPos, editFields, replace, selectedVideoIndex]
  );

  if (!control) {
    return <div>Error: Form control is required</div>;
  }

  return (
    <div className="grid h-full grid-cols-1 gap-6 pb-6 lg:grid-cols-2">
      {/* Left Panel - Edit Form */}
      <Card className="h-full p-0">
        <CardContent className="space-y-6 p-4">
          {selectedVideoIndex === null || videos.length === 0 ? (
            <div className="py-8 text-center">
              <p className="text-muted-foreground">
                Select a video from the list to edit its details
              </p>
            </div>
          ) : currentEditIndex === -1 ? (
            <div className="py-8 text-center">
              <p className="text-muted-foreground">Loading episode details...</p>
            </div>
          ) : (
            <>
              <div
                // key={`edit-form-${selectedVideoIndex}-${currentVideo?.id}`}
                className="space-y-4"
              >
                <FormInputField
                  name={`editDetails.${currentEditIndex}.title`}
                  control={control}
                  label="Title"
                  placeholder="Enter episode title"
                  required
                  colorScheme={{
                    background: "bg-white",
                    text: "text-black",
                    placeholder: "placeholder-gray-500",
                    border: "border-gray-300",
                    focusBorder: "focus:border-black",
                    focusRing: "focus:ring-1 focus:ring-black",
                    label: "text-black",
                    errorBorder: "border-red-500",
                    errorText: "text-red-500",
                  }}
                />

                <FormInputField
                  name={`editDetails.${currentEditIndex}.description`}
                  control={control}
                  label="Description"
                  placeholder="Write here..."
                  as="textarea"
                  required
                  colorScheme={{
                    background: "bg-white",
                    text: "text-black",
                    placeholder: "placeholder-gray-500",
                    border: "border-gray-300",
                    focusBorder: "focus:border-black",
                    focusRing: "focus:ring-1 focus:ring-black",
                    label: "text-black",
                    errorBorder: "border-red-500",
                    errorText: "text-red-500",
                  }}
                />

                <FormInputField
                  name={`editDetails.${currentEditIndex}.tags`}
                  control={control}
                  label="Tags/keywords"
                  placeholder="Film, Movie"
                  required
                  colorScheme={{
                    background: "bg-white",
                    text: "text-black",
                    placeholder: "placeholder-gray-500",
                    border: "border-gray-300",
                    focusBorder: "focus:border-black",
                    focusRing: "focus:ring-1 focus:ring-black",
                    label: "text-black",
                    errorBorder: "border-red-500",
                    errorText: "text-red-500",
                  }}
                />

                {/* {currentVideo && (
                  <div className="border-t pt-4">
                    <p className="text-muted-foreground text-sm">
                      Editing: {currentVideo.resolution} • {currentVideo.duration} •{" "}
                      {currentVideo.status}
                    </p>
                  </div>
                )} */}
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Right Panel - Episode List */}
      <Card className="h-full gap-0 p-0">
        <CardHeader className="p-4 pb-0">
          <CardTitle className="text-lg font-medium">List of Episodes</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="space-y-3">
            <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
              {!isProcessingDuplicates && (
                <VideosList
                  videos={videos}
                  handleRemoveVideo={handleRemoveVideo}
                  selectedVideoIndex={selectedVideoIndex}
                  setSelectedVideoIndex={setSelectedVideoIndex}
                  editFields={editFields}
                />
              )}
            </DndContext>

            {videos.length === 0 && (
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
