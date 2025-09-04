"use client";

import type React from "react";
import { useState, useCallback, useRef, useEffect } from "react";
import { Control, useFieldArray } from "react-hook-form";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { Upload } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { FilmFormData, VideoFileData } from "@/src/schema/FilmList.schema";
import { RulesComponent } from ".././RulesFormat";
import { filmListformatData, filmListrulesData } from "@/src/constants/filmListRulesFormat";
import { closestCorners, DndContext } from "@dnd-kit/core";
import VideoUploadedList from "./VideoUploadedList";
import { arrayMove } from "@dnd-kit/sortable";

// Import our custom hooks
import { useVideoUploadSimulation } from "./hooks/useVideoUploadSimulation";
import { useVideoFileHandling } from "./hooks/useVideoFileHandling";
import { useVideoDragDrop } from "./hooks/useVideoDragDrop";

interface VideoUploadComponentProps {
  control: Control<FilmFormData>;
  errors: any;
}

export function VideoUploadComponent({ control, errors }: VideoUploadComponentProps) {
  const [showRules, setShowRules] = useState(false);

  // React Hook Form field array
  const { fields, append, remove, update, replace } = useFieldArray({
    name: "videos",
    control,
  });

  // Ref to maintain current videos state for upload simulation
  const videosRef = useRef<VideoFileData[]>([]);
  useEffect(() => {
    videosRef.current = fields;
  }, [fields]);

  // Custom hooks for different functionalities
  const { simulateUpload, updateVideoFields } = useVideoUploadSimulation({
    videosRef,
    updateFieldArray: update,
  });

  const { processFiles, handleFileSelect, fileInputRef } = useVideoFileHandling({
    appendToFieldArray: append,
    onUploadStart: simulateUpload,
  });

  const { isDragOver, handleDragOver, handleDragLeave, handleDragEnd } = useVideoDragDrop(
    useCallback((e: React.DragEvent) => {
      const files = Array.from(e.dataTransfer.files).filter((file) =>
        file.type.startsWith("video/")
      );
      if (files.length > 0) {
        processFiles(files);
      }
    }, [processFiles])
  );

  // Video management functions
  const handleUploadMore = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const removeVideo = useCallback(
    (videoId: string) => {
      const index = fields.findIndex((field) => field.id === videoId);
      if (index !== -1) {
        remove(index);
      }
    },
    [fields, remove]
  );

  const retryUpload = useCallback(
    (videoId: string) => {
      const index = fields.findIndex((field) => field.videoId === videoId);
      if (index !== -1) {
        const field = fields[index];
        update(index, {
          ...field,
          status: "pending",
          progress: 0,
          error: undefined,
        });
        simulateUpload(videoId);
      }
    },
    [fields, update, simulateUpload]
  );

  // Drag and drop reordering
  const getVideoPos = useCallback(
    (videoId: string) => fields.findIndex((field) => field.id === videoId),
    [fields]
  );

  const handleDragEndReorder = useCallback(
    (event: any) => {
      const { active, over } = event;

      if (!over || active.id === over.id) return;

      const originalPos = getVideoPos(active.id);
      const newPos = getVideoPos(over.id);

      if (originalPos === -1 || newPos === -1) return;

      // console.log("Moving from position", originalPos, "to position", newPos);
      const result = arrayMove([...fields], originalPos, newPos);
      replace(result);
    },
    [getVideoPos, fields, replace]
  );

  return (
    <div className="flex-1 overflow-auto">
      <Card className="mx-auto w-full border-none p-0 shadow-none">
        {errors && (
          <div className="rounded-md border border-red-200 bg-red-50 p-3">
            <p className="text-sm text-red-600">{errors.message}</p>
          </div>
        )}

        {fields.length === 0 ? (
          // Initial empty state
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Add Video</h3>
            <div
              className={cn(
                "mb-4 rounded-lg border-2 border-dashed p-12 text-center transition-colors",
                isDragOver ? "border-blue-400 bg-blue-50" : "border-gray-300"
              )}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDragEnd}
            >
              <Upload className="mx-auto mb-4 h-8 w-8 text-gray-400" />
              <p className="mb-2 text-gray-600">
                Drop your entry here, or{" "}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="font-medium text-black underline"
                >
                  browse
                </button>{" "}
                to upload
              </p>
            </div>

            {!showRules && (
              <Button
                onClick={() => setShowRules(true)}
                variant="outline"
                className="border-red-200 bg-transparent text-red-500"
              >
                Rules & Format
              </Button>
            )}
            
            <RulesComponent
              showRules={showRules}
              rules={filmListrulesData}
              formatItems={filmListformatData}
            />

            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="video/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
        ) : (
          // Populated state with video list
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Upload List</h3>
              <div className="flex gap-2">
                <Button
                  onClick={() => setShowRules((prev) => !prev)}
                  variant="outline"
                  className="border-red-200 bg-transparent text-red-500"
                >
                  Rules & Format
                </Button>
                <Button onClick={handleUploadMore} className="bg-black text-white">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload
                </Button>
              </div>
            </div>
            
            <RulesComponent
              showRules={showRules}
              rules={filmListrulesData}
              formatItems={filmListformatData}
            />

            <div className="space-y-4">
              <DndContext onDragEnd={handleDragEndReorder} collisionDetection={closestCorners}>
                <VideoUploadedList
                  videos={fields}
                  retryUpload={retryUpload}
                  removeVideo={removeVideo}
                />
              </DndContext>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="video/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
        )}
      </Card>
    </div>
  );
}