import { useCallback, useRef } from "react";
import { UseFieldArrayAppend } from "react-hook-form";
import { VideoFileData, FilmFormData } from "@/src/schema/FilmList.schema";
import { useVideoProcessing } from "./useVideoProcessing";

interface UseVideoFileHandlingProps {
  appendToFieldArray: (value: VideoFileData | VideoFileData[]) => void;
  onUploadStart: (videoId: string) => void;
}

interface UseVideoFileHandlingReturn {
  processFiles: (files: File[]) => Promise<void>;
  handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDrop: (e: React.DragEvent) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
}

export function useVideoFileHandling({
  appendToFieldArray,
  onUploadStart,
}: UseVideoFileHandlingProps): UseVideoFileHandlingReturn {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { processVideoFile } = useVideoProcessing();

  const processFiles = useCallback(
    async (files: File[]) => {
      const processedVideos: VideoFileData[] = [];
      
      // Process all files concurrently for better performance
      const videoPromises = files.map(async (file) => {
        try {
          const processedVideo = await processVideoFile(file);
          return processedVideo;
        } catch (error) {
          console.error("Error processing file:", file.name, error);
          // Return a failed video object
          return {
            id: crypto.randomUUID(),
            videoId: crypto.randomUUID(),
            file,
            status: "error" as const,
            progress: 0,
            error: "Failed to process video file",
          };
        }
      });

      const processedResults = await Promise.allSettled(videoPromises);
      
      // Extract successful results and add to form
      processedResults.forEach((result) => {
        if (result.status === "fulfilled") {
          const video = result.value;
          processedVideos.push(video);
          appendToFieldArray(video);
        }
      });

      // Start upload simulation for pending videos after a short delay
      // This ensures the DOM has updated with the new videos
      setTimeout(() => {
        processedVideos.forEach((video) => {
          if (video.status === "pending") {
            // console.log("Starting delayed simulation for:", video.videoId);
            onUploadStart(video.videoId);
          }
        });
      }, 100);
    },
    [processVideoFile, appendToFieldArray, onUploadStart]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      if (files.length > 0) {
        processFiles(files);
        // Reset the input so the same files can be selected again
        if (e.target) {
          e.target.value = "";
        }
      }
    },
    [processFiles]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      
      const files = Array.from(e.dataTransfer.files).filter((file) =>
        file.type.startsWith("video/")
      );

      if (files.length > 0) {
        processFiles(files);
      }
    },
    [processFiles]
  );

  return {
    processFiles,
    handleFileSelect,
    handleDrop,
    fileInputRef,
  };
}