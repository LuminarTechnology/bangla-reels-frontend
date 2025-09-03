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

interface VideoUploadComponentProps {
  control: Control<FilmFormData>;
  errors: any;
}

export function VideoUploadComponent({ control, errors }: VideoUploadComponentProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showRules, setShowRules] = useState(false);

  const { fields, append, remove, update, replace } = useFieldArray({
    name: "videos",
    control,
  });

  const videosRef = useRef<VideoFileData[]>([]);
  useEffect(() => {
    videosRef.current = fields;
  }, [fields]);

  // Supported video formats
  const supportedFormats = ["video/mp4", "video/mov"];

  const generateThumbnail = useCallback((file: File): Promise<string> => {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      video.preload = "metadata"; // optional, speeds up loading
      video.src = URL.createObjectURL(file);

      video.onloadedmetadata = () => {
        canvas.width = 120;
        canvas.height = 68;
        video.currentTime = Math.min(1, video.duration / 2); // safe time within video
      };

      video.onseeked = () => {
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL());
          URL.revokeObjectURL(video.src); // cleanup
        }
      };

      video.onerror = () => {
        resolve(""); // Return empty string on error
        URL.revokeObjectURL(video.src);
      };
    });
  }, []);

  const getVideoDuration = useCallback((file: File): Promise<string> => {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      video.onloadedmetadata = () => {
        const duration = video.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        resolve(`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
      };
      video.onerror = () => {
        resolve("00:00");
      };
      video.src = URL.createObjectURL(file);
    });
  }, []);

  const getVideoResolution = (file: File): Promise<{ width: number; height: number }> => {
    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      video.preload = "metadata";

      video.onloadedmetadata = () => {
        resolve({ width: video.videoWidth, height: video.videoHeight });
        URL.revokeObjectURL(video.src);
      };

      video.onerror = () => {
        reject(new Error("Failed to load video metadata"));
        URL.revokeObjectURL(video.src);
      };

      video.src = URL.createObjectURL(file);
    });
  };

  const updateVideoFields = (videoId: string, patch: Partial<VideoFileData>) => {
    const index = videosRef.current.findIndex((v) => v.videoId === videoId);
    if (index === -1) return;
    const current = videosRef.current[index];
    update(index, { ...current, ...patch });
  };

  const simulateUpload = useCallback(
    (videoId: string) => {
      console.log(fields);
      console.log("simulate upload function start", videoId);
      // Set initial status → uploading
      updateVideoFields(videoId, { status: "uploading" });

      let currentProgress = 0;

      // Simulate upload progress
      const interval = setInterval(() => {
        currentProgress = Math.min(currentProgress + Math.random() * 20, 100);

        if (currentProgress >= 100) {
          clearInterval(interval);

          const isSuccess = Math.random() > 0.2; // 80% success chance
          updateVideoFields(videoId, {
            progress: 100,
            status: isSuccess ? "completed" : "error",
            error: isSuccess ? undefined : "Network error. Please try again",
          });
        } else {
          updateVideoFields(videoId, { progress: currentProgress });
        }
      }, 500);
    },
    [updateVideoFields]
  );

  const processFiles = useCallback(
    async (files: File[]) => {
      const newVideos: VideoFileData[] = [];

      for (const file of files) {
        const isSupported = supportedFormats.includes(file.type);
        const videoFile: VideoFileData = {
          id: crypto.randomUUID(),
          videoId: crypto.randomUUID(),
          file,
          status: isSupported ? "pending" : "unsupported",
          progress: 0,
          error: isSupported ? undefined : "Unsupported file format",
        };

        if (isSupported) {
          try {
            const [thumbnail, duration, resolution] = await Promise.all([
              generateThumbnail(file),
              getVideoDuration(file),
              getVideoResolution(file),
            ]);
            videoFile.thumbnail = thumbnail;
            videoFile.duration = duration;
            videoFile.resolution = `${resolution.width}PX x ${resolution.height}PX`;
          } catch (error) {
            console.error("Error processing video:", error);
          }
        }

        newVideos.push(videoFile);
        append(videoFile);
      }

      // Start upload simulation for supported files
      setTimeout(() => {
        newVideos.forEach((video) => {
          if (video.status === "pending") {
            console.log("Starting delayed simulation for:", video.videoId);
            simulateUpload(video.videoId);
          }
        });
      }, 100);
    },
    [simulateUpload, generateThumbnail, getVideoDuration, supportedFormats, append]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);

      const files = Array.from(e.dataTransfer.files).filter((file) =>
        file.type.startsWith("video/")
      );

      if (files.length > 0) {
        processFiles(files);
      }
    },
    [processFiles]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      if (files.length > 0) {
        processFiles(files);
      }
    },
    [processFiles]
  );

  const handleUploadMore = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const removeVideo = useCallback(
    (videoId: string) => {
      fields.forEach((field, index) => {
        if (field.id === videoId) {
          remove(index); // ✅ from useFieldArray
        }
      });
    },
    [fields, remove]
  );

  const retryUpload = useCallback(
    (videoId: string) => {
      fields.forEach((field, index) => {
        if (field.videoId === videoId) {
          update(index, {
            ...field,
            status: "pending",
            progress: 0,
            error: undefined,
          });
          simulateUpload(videoId);
        }
      });
    },
    [fields, update, simulateUpload]
  );

  const getVideoPos = useCallback(
    (videoId: string) => {
      return fields.findIndex((field) => field.id === videoId);
    },
    [fields]
  );

  const handleDragEnd = useCallback(
    (event: any) => {
      const { active, over } = event;

      if (!over || active.id === over.id) return;

      const originalPos = getVideoPos(active.id);
      const newPos = getVideoPos(over.id);

      if (originalPos === -1 || newPos === -1) return;

      console.log("Moving from position", originalPos, "to position", newPos);
      console.log("Active ID:", active.id, "Over ID:", over.id);

      const result = arrayMove([...fields], originalPos, newPos);

      console.log(fields, result);
      replace(result);
    },
    [getVideoPos]
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
              onDrop={handleDrop}
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
              <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
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
