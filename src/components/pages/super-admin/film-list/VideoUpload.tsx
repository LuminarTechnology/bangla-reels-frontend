"use client";

import type React from "react";

import { useState, useCallback, useRef, useEffect } from "react";
import { Control, useController, useFieldArray } from "react-hook-form";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { X, Upload, RotateCcw, Menu } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { FilmFormData, VideoFileData } from "./Film.schema";
import { RulesComponent } from "./RulesFormat";
import { filmListformatData, filmListrulesData } from "@/src/constants/filmListRulesFormat";

interface VideoUploadComponentProps {
  control: Control<FilmFormData>;
  errors: any;
}

export function VideoUploadComponent({ control, errors }: VideoUploadComponentProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { fields, append, remove, update } = useFieldArray({
    name: "videos",
    control,
  });

  // Supported video formats
  const supportedFormats = ["video/mp4", "video/webm", "video/ogg", "video/avi", "video/mov"];

  const generateThumbnail = useCallback((file: File): Promise<string> => {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      video.onloadedmetadata = () => {
        canvas.width = 120;
        canvas.height = 68;
        video.currentTime = 1; // Get frame at 1 second
      };

      video.oncanplay = () => {
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL());
        }
      };

      video.onerror = () => {
        resolve(""); // Return empty string on error
      };

      video.src = URL.createObjectURL(file);
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

  const updateVideoFields = useCallback(
    (updates: { id: string; patch: Partial<VideoFileData> }[]) => {
      fields.forEach((field, index) => {
        const updateItem = updates.find((u) => u.id === field.id);
        if (updateItem) {
          update(index, { ...field, ...updateItem.patch });
        }
      });
    },
    [fields, update] // dependencies
  );

  const processFiles = useCallback(
    async (files: File[]) => {
      const newVideos: VideoFileData[] = [];

      for (const file of files) {
        const isSupported = supportedFormats.includes(file.type);
        const videoFile: VideoFileData = {
          id: Math.random().toString(36).substr(2, 9),
          file,
          status: isSupported ? "pending" : "unsupported",
          progress: 0,
          error: isSupported ? undefined : "Unsupported file format",
        };

        if (isSupported) {
          try {
            videoFile.thumbnail = await generateThumbnail(file);
            videoFile.duration = await getVideoDuration(file);
            videoFile.resolution = "1920x1080"; // You can implement actual resolution detection
          } catch (error) {
            console.error("Error processing video:", error);
          }
        }

        newVideos.push(videoFile);
        append(videoFile);
      }

      // Start upload simulation for supported files
      newVideos.forEach((video) => {
        if (video.status === "pending") {
          simulateUpload(video.id);
        }
      });
    },
    [generateThumbnail, getVideoDuration, supportedFormats, updateVideoFields]
  );

  const simulateUpload = useCallback(
    (videoId: string) => {
      // Set initial status → uploading
      updateVideoFields([{ id: videoId, patch: { status: "uploading" } }]);

      // Simulate upload progress
      const interval = setInterval(() => {
        fields.forEach((field) => {
          if (field.id === videoId && field.status === "uploading") {
            const newProgress = Math.min(field.progress + Math.random() * 20, 100);

            if (newProgress >= 100) {
              clearInterval(interval);

              const isSuccess = Math.random() > 0.2; // 80% success chance
              updateVideoFields([
                {
                  id: videoId,
                  patch: {
                    progress: 100,
                    status: isSuccess ? "completed" : "error",
                    error: isSuccess ? undefined : "Network error. Please try again",
                  },
                },
              ]);
            } else {
              updateVideoFields([{ id: videoId, patch: { progress: newProgress } }]);
            }
          }
        });
      }, 500);
    },
    [fields, updateVideoFields]
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
        if (field.id === videoId) {
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

  const formatFileSize = useCallback((bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  }, []);

  return (
    <div className="flex-1 overflow-auto">
      <Card className="mx-auto w-full border-none shadow-none p-0">
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
                "rounded-lg border-2 border-dashed p-12 mb-4 text-center transition-colors",
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

            <RulesComponent rules={filmListrulesData} formatItems={filmListformatData}/>

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
                <Button variant="outline" className="border-red-200 bg-transparent text-red-500">
                  Rules & Format
                </Button>
                <Button onClick={handleUploadMore} className="bg-black text-white">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {fields.map((video, index) => (
                <Card key={video.id} className="p-4">
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
                      <h4 className="truncate font-medium text-gray-900">{video.file.name}</h4>

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

                      <div className="mt-1 flex items-center gap-4 text-sm text-gray-500">
                        <span>{video.file.type.split("/")[1].toUpperCase()}</span>
                        <span>•</span>
                        <span>{formatFileSize(video.file.size)}</span>
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

                    <div className="flex items-center gap-2">
                      {video.status === "error" && (
                        <Button variant="ghost" size="icon" onClick={() => retryUpload(video.id)}>
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                      )}
                      <Button variant="ghost" size="icon" onClick={() => removeVideo(video.id)}>
                        <X className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Menu className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
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
