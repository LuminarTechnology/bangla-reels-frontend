import { useCallback } from "react";
import { VideoFileData } from "@/src/schema/FilmList.schema";

interface UseVideoProcessingReturn {
  generateThumbnail: (file: File) => Promise<string>;
  getVideoDuration: (file: File) => Promise<string>;
  getVideoResolution: (file: File) => Promise<{ width: number; height: number }>;
  processVideoFile: (file: File) => Promise<VideoFileData>;
}

export function useVideoProcessing(): UseVideoProcessingReturn {
  const generateThumbnail = useCallback((file: File): Promise<string> => {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      video.preload = "metadata";
      video.src = URL.createObjectURL(file);

      video.onloadedmetadata = () => {
        canvas.width = 120;
        canvas.height = 68;
        video.currentTime = Math.min(1, video.duration / 2);
      };

      video.onseeked = () => {
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL());
          URL.revokeObjectURL(video.src);
        }
      };

      video.onerror = () => {
        resolve("");
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

  const getVideoResolution = useCallback((file: File): Promise<{ width: number; height: number }> => {
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
  }, []);

  const processVideoFile = useCallback(async (file: File): Promise<VideoFileData> => {
    const supportedFormats = ["video/mp4", "video/mov"];
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
        videoFile.status = "error";
        videoFile.error = "Failed to process video file";
      }
    }

    return videoFile;
  }, [generateThumbnail, getVideoDuration, getVideoResolution]);

  return {
    generateThumbnail,
    getVideoDuration,
    getVideoResolution,
    processVideoFile,
  };
}