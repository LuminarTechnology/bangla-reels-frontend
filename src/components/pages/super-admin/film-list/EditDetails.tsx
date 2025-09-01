"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { X, Menu } from "lucide-react";
import Image from "next/image";
import { type Control, useFieldArray, useWatch } from "react-hook-form";
import { useState, useEffect, useMemo } from "react";
import { FormInputField } from "@/src/components/forms/FormInputField";
import { editDetailsData, FilmFormData, VideoFileData } from "./Film.schema";

interface EditDetailsProps {
  control: Control<any>;
}

export function EditDetails({ control }: EditDetailsProps) {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(0);

  const {
    fields: editFields,
    append: appendEdit,
    remove: removeEdit,
    update: updateEdit,
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
    }
  }, [editFields, removeEdit]);

  if (!control) {
    return <div>Error: Form control is required</div>;
  }

  const currentVideo = selectedVideoIndex !== null ? videos[selectedVideoIndex] : null;
  const currentEditIndex = currentVideo
    ? editFields.findIndex((field) => field.videoId === currentVideo.id)
    : -1;

  const handleRemoveVideo = (videoIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();

    const videoToRemove = videos[videoIndex];
    if (!videoToRemove) return;

    // Find and remove corresponding editDetail
    const editDetailIndex = editFields.findIndex((field) => field.videoId === videoToRemove.id);
    if (editDetailIndex !== -1) {
      removeEdit(editDetailIndex);
    }

    // Update selected index
    if (selectedVideoIndex === videoIndex) {
      setSelectedVideoIndex(null);
    } else if (selectedVideoIndex !== null && selectedVideoIndex > videoIndex) {
      setSelectedVideoIndex(selectedVideoIndex - 1);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 h-full pb-6">
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
              <div key={`edit-form-${selectedVideoIndex}-${currentVideo?.id}`} className="space-y-4">
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
      <Card className="h-full p-0 gap-0">
        <CardHeader className="p-4 pb-0">
          <CardTitle className="text-lg font-medium">List of Episodes</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="space-y-3">
            {videos.map((video: VideoFileData, index: number) => {
              const editDetail = editFields.find((field) => field.videoId === video.id);
              const isSelected = selectedVideoIndex === index;

              return (
                <div
                  key={video.id}
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
                      src={
                        video.thumbnail ||
                        "/placeholder.svg?height=60&width=60&query=video thumbnail"
                      }
                      alt={`Episode ${index + 1}`}
                      width={60}
                      height={60}
                      className="rounded-md object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-medium">
                      {editDetail?.title || `Episode ${index + 1}`}
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
                      <span className="text-muted-foreground text-xs capitalize">
                        {video.status}
                      </span>
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
                    >
                      <Menu className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              );
            })}

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
