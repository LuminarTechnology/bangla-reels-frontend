import { useCallback, useRef, MutableRefObject } from "react";
import { UseFieldArrayUpdate } from "react-hook-form";
import { VideoFileData, FilmFormData } from "@/src/schema/FilmList.schema";

interface UseVideoUploadSimulationProps {
  videosRef: MutableRefObject<VideoFileData[]>;
  updateFieldArray: UseFieldArrayUpdate<FilmFormData, "videos">;
}

interface UseVideoUploadSimulationReturn {
  simulateUpload: (videoId: string) => void;
  updateVideoFields: (videoId: string, patch: Partial<VideoFileData>) => void;
}

export function useVideoUploadSimulation({
  videosRef,
  updateFieldArray,
}: UseVideoUploadSimulationProps): UseVideoUploadSimulationReturn {
  // Store active intervals to allow cleanup if needed
  const activeUploads = useRef<Map<string, NodeJS.Timeout>>(new Map());

  const updateVideoFields = useCallback(
    (videoId: string, patch: Partial<VideoFileData>) => {
      const index = videosRef.current.findIndex((v) => v.videoId === videoId);
      if (index === -1) return;
      
      const current = videosRef.current[index];
      const updated = { ...current, ...patch };
      
      updateFieldArray(index, updated);
    },
    [videosRef, updateFieldArray]
  );

  const simulateUpload = useCallback(
    (videoId: string) => {
      // console.log("Starting upload simulation for:", videoId);
      
      // Clear any existing interval for this video
      const existingInterval = activeUploads.current.get(videoId);
      if (existingInterval) {
        clearInterval(existingInterval);
      }

      // Set initial status to uploading
      updateVideoFields(videoId, { status: "uploading", progress: 0 });

      let currentProgress = 0;

      const interval = setInterval(() => {
        // Simulate realistic progress increments
        const increment = Math.random() * 15 + 5; // 5-20% increments
        currentProgress = Math.min(currentProgress + increment, 100);

        if (currentProgress >= 100) {
          clearInterval(interval);
          activeUploads.current.delete(videoId);

          // 80% success rate simulation
          const isSuccess = Math.random() > 0.2;
          updateVideoFields(videoId, {
            progress: 100,
            status: isSuccess ? "completed" : "error",
            error: isSuccess ? undefined : "Network error. Please try again",
          });
        } else {
          updateVideoFields(videoId, { progress: currentProgress });
        }
      }, 500);

      // Store the interval reference
      activeUploads.current.set(videoId, interval);
    },
    [updateVideoFields]
  );

  return {
    simulateUpload,
    updateVideoFields,
  };
}