// hooks/useVideoEditManager.ts
import { useCallback, useEffect } from "react";
import { Control, useFieldArray } from "react-hook-form";
import { arrayMove } from "@dnd-kit/sortable";
import { editDetailsData, FilmFormData, VideoFileData } from "@/src/schema/FilmList.schema";

interface VideoEditManager {
  videos: VideoFileData[];
  editDetails: editDetailsData[];
  addVideo: (video: VideoFileData) => void;
  removeVideo: (videoId: string) => void;
  reorderVideos: (oldIndex: number, newIndex: number) => void;
  updateEditDetail: (index: number, data: Partial<editDetailsData>) => void;
}

export function useVideoEditManager(control: Control<FilmFormData>): VideoEditManager {
  const {
    fields: editFields,
    replace: replaceEditDetails,
    update,
  } = useFieldArray({
    control,
    name: "editDetails",
  });

  const { fields: videoFields, replace: replaceVideos } = useFieldArray({
    control,
    name: "videos",
  });

  // console.table(videoFields);
  // console.table(editFields);

  // Sync editDetails with videos on mount and when videos change
  useEffect(() => {
    if (videoFields.length === 0) {
      // If no videos, clear editDetails
      if (editFields.length > 0) {
        replaceEditDetails([]);
      }
      return;
    }

    // Create a map of existing editDetails by videoId
    const editDetailsMap = new Map();
    editFields.forEach((editDetail) => {
      const key = editDetail.videoId;
      if (key) {
        editDetailsMap.set(key, editDetail);
      }
    });
    // console.table(editFields);

    // Create new editDetails array synced with videos
    const syncedEditDetails = videoFields.map((video, index) => {
      const existingEditDetail = editDetailsMap.get(video.videoId);

      if (existingEditDetail) {
        // Return existing editDetail but ensure it has correct videoId
        return {
          ...existingEditDetail,
          videoId: video.videoId,
        };
      } else {
        // Create new editDetail for this video
        return {
          videoId: video.videoId,
          title: `Episode ${index + 1}`,
          description: "",
          tags: "",
        };
      }
    });
    // console.table(editFields); 

    // Only update if there's a difference
    const needsUpdate =
      syncedEditDetails.length !== editFields.length ||
      syncedEditDetails.some((item, index) => {
        const existing = editFields[index];
        return (
          !existing ||
          item.videoId !== existing.videoId ||
          item.title !== existing.title ||
          item.description !== existing.description ||
          item.tags !== existing.tags
        );
      });

    if (needsUpdate) {
      // console.log("🔄 Syncing editDetails with videos:", {
      //   videos: videoFields.length,
      //   editDetails: syncedEditDetails.length,
      // });
      replaceEditDetails(syncedEditDetails);
    }
    // console.table(videoFields);
    // console.table(editFields);
  }, [videoFields, replaceEditDetails]);

  const addVideo = useCallback(
    (video: VideoFileData) => {
      const newVideos = [...videoFields, video];
      const newEditDetail: editDetailsData = {
        videoId: video.videoId,
        title: `Episode ${newVideos.length}`,
        description: "",
        tags: "",
      };
      const newEditDetails = [...editFields, newEditDetail];

      replaceVideos(newVideos);
      replaceEditDetails(newEditDetails);
    },
    [videoFields, editFields, replaceVideos, replaceEditDetails]
  );

  const removeVideo = useCallback(
    (videoId: string) => {
      const newVideos = videoFields.filter((v) => v.videoId !== videoId);
      const newEditDetails = editFields.filter((e) => e.videoId !== videoId);

      replaceVideos(newVideos);
      replaceEditDetails(newEditDetails);
    },
    [videoFields, editFields, replaceVideos, replaceEditDetails]
  );

  const reorderVideos = useCallback(
    (oldIndex: number, newIndex: number) => {
      const newVideos = arrayMove([...videoFields], oldIndex, newIndex);
      const newEditDetails = arrayMove([...editFields], oldIndex, newIndex);

      // Use setTimeout to ensure form state is properly updated after reorder
      setTimeout(() => {
        replaceVideos(newVideos);
        replaceEditDetails(newEditDetails);
      }, 0);
    },
    [videoFields, editFields, replaceVideos, replaceEditDetails]
  );

  const updateEditDetail = useCallback(
    (index: number, data: Partial<editDetailsData>) => {
      // console.log(data);
      const existing = editFields[index];
      if (!existing) return;
      update(index, { ...existing, ...data });
    },
    [editFields, update]
  );

  // Debug logging
  // console.log("🎬 Videos count:", videoFields.length);
  // console.log("📝 EditDetails count:", editFields.length);
  // console.log("📝 EditDetails:", editFields);
  // console.table(videoFields);
  // console.table(editFields);

  return {
    videos: videoFields,
    editDetails: editFields,
    addVideo,
    removeVideo,
    reorderVideos,
    updateEditDetail,
  };
}